import {
  StringElement,
  ObjectElement,
  BooleanElement,
  NumberElement,
  Attributes,
  Meta,
} from '@swagger-api/apidom-core';

class MqttOperationBinding extends ObjectElement {
  constructor(content?: Record<string, unknown>, meta?: Meta, attributes?: Attributes) {
    super(content, meta, attributes);
    this.element = 'mqttOperationBinding';
    this.classes.push('operation-binding');
  }

  get qos(): NumberElement {
    return this.get('qos');
  }

  set qos(qos: NumberElement) {
    this.set('qos', qos);
  }

  get retain(): BooleanElement {
    return this.get('retain');
  }

  set retain(retain: BooleanElement) {
    this.set('retain', retain);
  }

  get bindingVersion(): StringElement {
    return this.get('bindingVersion');
  }

  set bindingVersion(bindingVersion: StringElement) {
    this.set('bindingVersion', bindingVersion);
  }
}

export default MqttOperationBinding;