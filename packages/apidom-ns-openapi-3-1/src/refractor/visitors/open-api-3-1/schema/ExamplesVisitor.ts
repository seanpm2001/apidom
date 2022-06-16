import stampit from 'stampit';
import { ArrayElement, BREAK } from '@swagger-api/apidom-core';

import FallbackVisitor from '../../FallbackVisitor';

const ExamplesVisitor = stampit(FallbackVisitor, {
  methods: {
    ArrayElement(arrayElement: ArrayElement) {
      this.element = arrayElement.clone();
      this.element.classes.push('json-schema-examples');

      return BREAK;
    },
  },
});

export default ExamplesVisitor;