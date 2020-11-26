import stampit from 'stampit';
import { last, F as stubFalse } from 'ramda';
import { isNotNull } from 'ramda-adjunct';
import {
  YamlKeyValuePair,
  YamlMapping,
  YamlScalar,
  YamlSequence,
  isYamlMapping,
  isYamlSequence,
  isYamlScalar,
} from 'apidom-ast';

import { BREAK } from '../index';
import { appendMetadata } from '../../metadata';
import SpecificationVisitor from '../SpecificationVisitor';

export const ScalarVisitor = stampit(SpecificationVisitor, {
  methods: {
    scalar(scalarNode: YamlScalar): typeof BREAK {
      const stringElement = this.namespace.toElement(scalarNode.content);
      this.element = this.maybeAddSourceMap(scalarNode, stringElement);
      return BREAK;
    },
  },
});

export const SequenceVisitor = stampit(SpecificationVisitor).init(function SequenceVisitor() {
  // @ts-ignore
  const stack = [];

  // @ts-ignore
  this.mapping = function mapping(mappingNode: YamlMapping) {
    // @ts-ignore
    const arrayElement = last(stack);
    const element = this.nodeToElement(['mapping'], mappingNode);

    arrayElement.push(this.maybeAddSourceMap(mappingNode, element));

    return false;
  };

  this.sequence = {
    enter: (sequenceNode: YamlSequence) => {
      const arrayElement = this.maybeAddSourceMap(
        sequenceNode,
        new this.namespace.elements.Array(),
      );

      stack.push(arrayElement);

      if (isNotNull(this.element)) {
        this.element.push(arrayElement);
      } else {
        this.element = arrayElement;
      }
    },
    leave: () => {
      // @ts-ignore
      this.element = stack.pop();
    },
  };

  this.scalar = function scalar(scalarNode: YamlScalar) {
    // @ts-ignore
    const arrayElement = last(stack);
    const element = this.nodeToElement(['scalar'], scalarNode);

    arrayElement.push(element);
  };
});

export const MappingVisitor = stampit(SpecificationVisitor).init(function MappingVisitor() {
  // @ts-ignore
  const stack = [];

  this.specificationExtensionPredicate = stubFalse;

  this.keyValuePair = function keyValuePair(keyValuePairNode: YamlKeyValuePair) {
    // @ts-ignore
    const objElement = last(stack);
    const { MemberElement } = this.namespace.elements.Element.prototype;
    const { key: keyNode } = keyValuePairNode;
    const { value: valueNode } = keyValuePairNode;
    const keyElement = new this.namespace.elements.String(keyNode.content);
    let valueElement;

    if (isYamlMapping(valueNode)) {
      valueElement = this.nodeToElement(['mapping'], valueNode);
    } else if (isYamlSequence(valueNode)) {
      valueElement = this.nodeToElement(['sequence'], valueNode);
    } else if (keyNode.content === '$ref' && isYamlScalar(valueNode)) {
      // $ref property key special handling
      valueElement = this.namespace.toElement(valueNode.content);
      appendMetadata(['json-reference', 'json-schema-reference'], valueElement);
    } else if (!this.specificationExtensionPredicate(keyValuePairNode)) {
      valueElement = this.namespace.toElement(valueNode.content);
    }

    if (this.specificationExtensionPredicate(keyValuePairNode)) {
      objElement.content.push(this.nodeToElement(['document', 'extension'], keyValuePairNode));
    } else {
      objElement.content.push(
        this.maybeAddSourceMap(
          keyValuePairNode,
          new MemberElement(
            this.maybeAddSourceMap(keyNode, keyElement),
            this.maybeAddSourceMap(valueNode, valueElement),
          ),
        ),
      );
    }

    return false;
  };

  this.mapping = {
    enter: (mappingNode: YamlMapping) => {
      const objectElement = this.maybeAddSourceMap(
        mappingNode,
        new this.namespace.elements.Object(),
      );

      // @ts-ignore
      stack.push(objectElement);
    },
    leave: () => {
      // @ts-ignore
      this.element = stack.pop();
    },
  };
});

export const KindVisitor = stampit(SpecificationVisitor, {
  methods: {
    sequence(sequenceNode: YamlSequence): typeof BREAK {
      this.element = this.nodeToElement(['sequence'], sequenceNode);
      return BREAK;
    },

    mapping(mappingNode: YamlMapping): typeof BREAK {
      this.element = this.nodeToElement(['mapping'], mappingNode);
      return BREAK;
    },

    scalar(scalarNode: YamlScalar): typeof BREAK {
      this.element = this.nodeToElement(['scalar'], scalarNode);
      return BREAK;
    },
  },
});
