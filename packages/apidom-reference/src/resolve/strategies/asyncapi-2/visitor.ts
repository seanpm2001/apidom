import stampit from 'stampit';
import { propEq, values, has, pipe } from 'ramda';
import { allP } from 'ramda-adjunct';
import { isPrimitiveElement, isStringElement, visit } from '@swagger-api/apidom-core';
import {
  getNodeType,
  isReferenceElement,
  isChannelItemElement,
  isReferenceLikeElement,
  keyMap,
  ReferenceElement,
  ChannelItemElement,
  isReferenceElementExternal,
  isChannelItemElementExternal,
} from '@swagger-api/apidom-ns-asyncapi-2';

import { Reference as IReference } from '../../../types';
import { MaximumDereferenceDepthError, MaximumResolverDepthError } from '../../../util/errors';
import * as url from '../../../util/url';
import parse from '../../../parse';
import Reference from '../../../Reference';
import { evaluate, uriToPointer } from '../../../selectors/json-pointer';

// @ts-ignore
const visitAsync = visit[Symbol.for('nodejs.util.promisify.custom')];

const AsyncApi2ResolveVisitor = stampit({
  props: {
    indirections: [],
    namespace: null,
    reference: null,
    crawledElements: null,
    crawlingMap: null,
    options: null,
  },
  init({ reference, namespace, indirections = [], options }) {
    this.indirections = indirections;
    this.namespace = namespace;
    this.reference = reference;
    this.crawledElements = [];
    this.crawlingMap = {};
    this.options = options;
  },
  methods: {
    toBaseURI(uri: string): string {
      const uriWithoutHash = url.stripHash(uri);
      const sanitizedURI = url.isFileSystemPath(uriWithoutHash)
        ? url.fromFileSystemPath(uriWithoutHash)
        : uriWithoutHash;

      return url.resolve(this.reference.uri, sanitizedURI);
    },

    async toReference(uri: string): Promise<IReference> {
      // detect maximum depth of resolution
      if (this.reference.depth >= this.options.resolve.maxDepth) {
        throw new MaximumResolverDepthError(
          `Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`,
        );
      }

      const baseURI = this.toBaseURI(uri);
      const { refSet } = this.reference;

      // we've already processed this Reference in past
      if (refSet.has(baseURI)) {
        return refSet.find(propEq('uri', baseURI));
      }

      const parseResult = await parse(baseURI, this.options);

      // register new Reference with ReferenceSet
      const reference = Reference({
        uri: baseURI,
        value: parseResult,
        depth: this.reference.depth + 1,
      });

      refSet.add(reference);

      return reference;
    },

    ReferenceElement(referenceElement: ReferenceElement) {
      // ignore resolving external Reference Objects
      if (!this.options.resolve.external && isReferenceElementExternal(referenceElement)) {
        return false;
      }

      const uri = referenceElement.$ref.toValue();
      const baseURI = this.toBaseURI(uri);

      if (!has(baseURI, this.crawlingMap)) {
        this.crawlingMap[baseURI] = this.toReference(uri);
      }
      this.crawledElements.push(referenceElement);

      return undefined;
    },

    ChannelItemElement(channelItemElement: ChannelItemElement) {
      // ignore PathItemElement without $ref field
      if (!isStringElement(channelItemElement.$ref)) {
        return undefined;
      }

      // ignore resolving external Reference Objects
      if (!this.options.resolve.external && isChannelItemElementExternal(channelItemElement)) {
        return undefined;
      }

      const uri = channelItemElement.$ref.toValue();
      const baseURI = this.toBaseURI(uri);

      if (!has(baseURI, this.crawlingMap)) {
        this.crawlingMap[baseURI] = this.toReference(uri);
      }
      this.crawledElements.push(channelItemElement);

      return undefined;
    },

    async crawlReferenceElement(referenceElement: ReferenceElement) {
      // @ts-ignore
      const reference = await this.toReference(referenceElement.$ref.toValue());

      this.indirections.push(referenceElement);

      const jsonPointer = uriToPointer(referenceElement.$ref.toValue());

      // possibly non-semantic fragment
      let fragment = evaluate(jsonPointer, reference.value.result);

      // applying semantics to a fragment
      if (isPrimitiveElement(fragment)) {
        const referencedElementType = referenceElement.meta.get('referenced-element').toValue();

        if (isReferenceLikeElement(fragment)) {
          // handling indirect references
          fragment = ReferenceElement.refract(fragment);
          fragment.setMetaProperty('referenced-element', referencedElementType);
        } else {
          // handling direct references
          const ElementClass = this.namespace.getElementClass(referencedElementType);
          fragment = ElementClass.refract(fragment);
        }
      }

      // detect direct or circular reference
      if (this.indirections.includes(fragment)) {
        throw new Error('Recursive JSON Pointer detected');
      }

      // detect maximum depth of dereferencing
      if (this.indirections.length > this.options.dereference.maxDepth) {
        throw new MaximumDereferenceDepthError(
          `Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`,
        );
      }

      // dive deep into the fragment
      const visitor = AsyncApi2ResolveVisitor({
        reference,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
      });
      await visitAsync(fragment, visitor, { keyMap, nodeTypeGetter: getNodeType });
      await visitor.crawl();

      this.indirections.pop();
    },

    async crawlChannelItemElement(channelItemElement: ChannelItemElement) {
      // @ts-ignore
      const reference = await this.toReference(channelItemElement.$ref.toValue());

      this.indirections.push(channelItemElement);

      const jsonPointer = uriToPointer(channelItemElement.$ref.toValue());

      // possibly non-semantic referenced element
      let referencedElement = evaluate(jsonPointer, reference.value.result);

      // applying semantics to a referenced element
      if (isPrimitiveElement(referencedElement)) {
        referencedElement = ChannelItemElement.refract(referencedElement);
      }

      // detect direct or indirect reference
      if (this.indirections.includes(referencedElement)) {
        throw new Error('Recursive JSON Pointer detected');
      }

      // detect maximum depth of dereferencing
      if (this.indirections.length > this.options.dereference.maxDepth) {
        throw new MaximumDereferenceDepthError(
          `Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`,
        );
      }

      // dive deep into the referenced element
      const visitor: any = AsyncApi2ResolveVisitor({
        reference,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
      });
      await visitAsync(referencedElement, visitor, { keyMap, nodeTypeGetter: getNodeType });
      await visitor.crawl();

      this.indirections.pop();
    },

    async crawl() {
      /**
       * Synchronize all parallel resolutions in this place.
       * After synchronization happened we can be sure that refSet
       * contains resolved Reference objects.
       */
      await pipe(values, allP)(this.crawlingMap);
      this.crawlingMap = null;

      /* eslint-disable no-await-in-loop */
      for (const element of this.crawledElements) {
        if (isReferenceElement(element)) {
          await this.crawlReferenceElement(element);
        } else if (isChannelItemElement(element)) {
          await this.crawlChannelItemElement(element);
        }
      }
      /* eslint-enabled */
    },
  },
});

export default AsyncApi2ResolveVisitor;