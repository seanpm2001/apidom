import { Attributes, Meta, StringElement } from 'minim';

class Asyncapi extends StringElement {
  constructor(content?: string, meta?: Meta, attributes?: Attributes) {
    super(content, meta, attributes);
    this.element = 'asyncapi';
  }
}

export default Asyncapi;
