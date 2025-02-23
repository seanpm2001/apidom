import stampit from 'stampit';
import { T as stubTrue } from 'ramda';
import { ObjectElement } from '@swagger-api/apidom-core';

import { isReferenceElement } from '../../../../predicates';
import { isReferenceLikeElement } from '../../../predicates';
import AlternatingVisitor from '../../generics/AlternatingVisitor';

const RequestBodyVisitor = stampit(AlternatingVisitor, {
  props: {
    alternator: [
      { predicate: isReferenceLikeElement, specPath: ['document', 'objects', 'Reference'] },
      { predicate: stubTrue, specPath: ['document', 'objects', 'RequestBody'] },
    ],
  },
  methods: {
    ObjectElement(objectElement: ObjectElement) {
      // @ts-ignore
      const result = AlternatingVisitor.compose.methods.enter.call(this, objectElement);

      if (isReferenceElement(this.element)) {
        this.element.setMetaProperty('referenced-element', 'requestBody');
      }

      return result;
    },
  },
});

export default RequestBodyVisitor;
