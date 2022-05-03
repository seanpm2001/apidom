import { Attributes, Meta } from 'minim';
import { StringElement, ObjectElement, ArrayElement } from '@swagger-api/apidom-core';

import OperationElement from './Operation';
import ParametersElement from './Parameters';
import ChannelBindingsElement from './ChannelBindings';

class ChannelItem extends ObjectElement {
  constructor(content?: Record<string, unknown>, meta?: Meta, attributes?: Attributes) {
    super(content, meta, attributes);
    this.element = 'channelItem';
  }

  get $ref(): StringElement {
    return this.get('$ref');
  }

  set $ref($ref: StringElement) {
    this.set('$ref', $ref);
  }

  get description(): StringElement {
    return this.get('description');
  }

  set description(description: StringElement) {
    this.set('description', description);
  }

  get servers(): ArrayElement {
    return this.get('servers');
  }

  set servers(servers: ArrayElement) {
    this.set('servers', servers);
  }

  get subscribe(): OperationElement {
    return this.get('subscribe');
  }

  set subscribe(subscribe: OperationElement) {
    this.set('subscribe', subscribe);
  }

  get publish(): OperationElement {
    return this.get('publish');
  }

  set publish(publish: OperationElement) {
    this.set('publish', publish);
  }

  get parameters(): ParametersElement {
    return this.get('parameters');
  }

  set parameters(parameters: ParametersElement) {
    this.set('parameters', parameters);
  }

  get bindings(): ChannelBindingsElement {
    return this.get('bindings');
  }

  set bindings(bindings: ChannelBindingsElement) {
    this.set('bindings', bindings);
  }
}

export default ChannelItem;