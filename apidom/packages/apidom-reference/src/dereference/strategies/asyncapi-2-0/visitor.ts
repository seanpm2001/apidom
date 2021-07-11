import stampit from 'stampit';
import { propEq } from 'ramda';
import { isPrimitiveElement, visit } from 'apidom';
import {
  getNodeType,
  isReferenceLikeElement,
  keyMap,
  ReferenceElement,
  SchemaElement,
  isReferenceElementExternal,
} from 'apidom-ns-asyncapi-2-0';

import { Reference as IReference } from '../../../types';
import { evaluate, uriToPointer } from '../../../selectors/json-pointer';
import { MaximumDereferenceDepthError, MaximumResolverDepthError } from '../../../util/errors';
import * as url from '../../../util/url';
import parse from '../../../parse';
import Reference from '../../../Reference';

// @ts-ignore
const visitAsync = visit[Symbol.for('nodejs.util.promisify.custom')];

const AsyncApi2_0DereferenceVisitor = stampit({
  props: {
    indirections: [],
    visited: null,
    namespace: null,
    reference: null,
    options: null,
  },
  init({
    indirections = [],
    visited = { SchemaElement: new WeakSet(), ReferenceElement: new WeakSet() },
    reference,
    namespace,
    options,
  }) {
    this.indirections = indirections;
    this.visited = visited;
    this.namespace = namespace;
    this.reference = reference;
    this.options = options;
  },
  methods: {
    async toReference(uri: string): Promise<IReference> {
      // detect maximum depth of resolution
      if (this.reference.depth >= this.options.resolve.maxDepth) {
        throw new MaximumResolverDepthError(
          `Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`,
        );
      }

      const uriWithoutHash = url.stripHash(uri);
      const sanitizedURI = url.isFileSystemPath(uriWithoutHash)
        ? url.fromFileSystemPath(uriWithoutHash)
        : uriWithoutHash;
      const baseURI = url.resolve(this.reference.uri, sanitizedURI);
      const { refSet } = this.reference;

      // we've already processed this Reference in past
      if (refSet.has(baseURI)) {
        return refSet.find(propEq('uri', baseURI));
      }

      const parseResult = await parse(baseURI, {
        ...this.options,
        parse: { ...this.options.parse, mediaType: 'text/plain' },
      });

      // register new Reference with ReferenceSet
      const reference = Reference({
        uri: baseURI,
        value: parseResult,
        depth: this.reference.depth + 1,
      });

      refSet.add(reference);

      return reference;
    },

    async ReferenceElement(referencingElement: ReferenceElement) {
      /**
       * Skip traversal for already visited ReferenceElement.
       * visit function detects cycles in path automatically.
       */
      if (this.visited.ReferenceElement.has(referencingElement)) {
        return undefined;
      }

      // ignore resolving external Reference Objects
      if (!this.options.resolve.external && isReferenceElementExternal(referencingElement)) {
        // mark current referencing schema as visited
        this.visited.ReferenceElement.add(referencingElement);
        // skip traversing this schema but traverse all it's child schemas
        return undefined;
      }

      // @ts-ignore
      const reference = await this.toReference(referencingElement.$ref.toValue());

      this.indirections.push(referencingElement);

      const jsonPointer = uriToPointer(referencingElement.$ref.toValue());

      // possibly non-semantic fragment
      let referencedElement = evaluate(jsonPointer, reference.value.result);

      // applying semantics to a fragment
      if (isPrimitiveElement(referencedElement)) {
        const referencedElementType = referencingElement.meta.get('referenced-element').toValue();

        if (isReferenceLikeElement(referencedElement)) {
          // handling indirect references
          referencedElement = ReferenceElement.refract(referencedElement);
          referencedElement.setMetaProperty('referenced-element', referencedElementType);
        } else {
          // handling direct references
          const ElementClass = this.namespace.getElementClass(referencedElementType);
          referencedElement = ElementClass.refract(referencedElement);
        }
      }

      // mark current ReferenceElement as visited
      this.visited.ReferenceElement.add(referencingElement);

      // detect direct or circular reference
      if (this.indirections.includes(referencedElement)) {
        throw new Error('Recursive JSON Pointer detected');
      }

      // detect maximum depth of dereferencing
      if (this.indirections.length > this.options.dereference.maxDepth) {
        throw new MaximumDereferenceDepthError(
          `Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`,
        );
      }

      // dive deep into the fragment
      const visitor = AsyncApi2_0DereferenceVisitor({
        reference,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        // ReferenceElement must be reset for deep dive, as we want to dereference all indirections
        visited: { SchemaElement: this.visited.SchemaElement, ReferenceElement: new WeakSet() },
      });
      referencedElement = await visitAsync(referencedElement, visitor, {
        keyMap,
        nodeTypeGetter: getNodeType,
      });

      this.indirections.pop();

      // @ts-ignore
      referencedElement = new referencedElement.constructor( // shallow clone of the referenced element
        referencedElement.content,
        referencedElement.meta.clone(),
        referencedElement.attributes.clone(),
      );

      // annotate referenced element with info about original referencing element
      referencedElement.setMetaProperty('ref-fields', {
        $ref: referencingElement.$ref.toValue(),
      });

      // transclude referencing element with merged referenced element
      return referencedElement;
    },

    async SchemaElement(schemaElement: SchemaElement) {
      /**
       * Skip traversal for already visited schemas and all their child schemas.
       * visit function detects cycles in path automatically.
       */
      if (this.visited.SchemaElement.has(schemaElement)) {
        return false;
      }

      this.visited.SchemaElement.add(schemaElement);

      return undefined;
    },
  },
});

export default AsyncApi2_0DereferenceVisitor;
