import stampit from 'stampit';
import { always } from 'ramda';

import AmqpOperationBinding0_9Element from '../../../../../../elements/bindings/amqp-0-9/AmqpOperationBinding0-9';
import FallbackVisitor from '../../../../FallbackVisitor';
import FixedFieldsVisitor from '../../../../generics/FixedFieldsVisitor';

const AmqpOperationBinding0_9Visitor = stampit(FixedFieldsVisitor, FallbackVisitor, {
  props: {
    specPath: always(['document', 'objects', 'bindings', 'amqp', 'OperationBinding']),
    canSupportSpecificationExtensions: false,
  },
  init() {
    this.element = new AmqpOperationBinding0_9Element();
  },
});

export default AmqpOperationBinding0_9Visitor;
