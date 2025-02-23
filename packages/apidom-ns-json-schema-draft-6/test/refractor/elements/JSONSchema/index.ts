import { expect } from 'chai';
import { sexprs } from '@swagger-api/apidom-core';

import { JSONSchemaElement } from '../../../../src';

describe('refractor', function () {
  context('elements', function () {
    context('JSONSchema', function () {
      specify('should refract to semantic ApiDOM tree', function () {
        const jsonSchemaElement = JSONSchemaElement.refract({
          $id: 'http://x.y.z/rootschema.json#',
          $schema: 'http://json-schema.org/draft-06/schema#',
          multipleOf: 1,
          maximum: 2,
          exclusiveMaximum: 3,
          minimum: 4,
          exclusiveMinimum: 5,
          maxLength: 6,
          minLength: 7,
          pattern: '[a-z]+',
          additionalItems: {},
          items: [{}],
          maxItems: 8,
          minItems: 9,
          uniqueItems: true,
          contains: {},
          maxProperties: 10,
          minProperties: 11,
          required: ['prop1', 'prop2'],
          properties: { prop1: {} },
          additionalProperties: {},
          patternProperties: { '[a-z]+': {} },
          dependencies: { dep1: {} },
          propertyNames: {},
          enum: [1, '2', null],
          const: 1,
          type: 'string',
          allOf: [{}],
          anyOf: [{}],
          oneOf: [{}],
          not: {},
          definitions: { def1: {} },
          title: 'title',
          description: 'description',
          default: 3,
          examples: [1, 'string'],
          format: 'url',
          base: '/object/{id}',
          links: [{}],
          media: {},
          readOnly: false,
        });

        expect(sexprs(jsonSchemaElement)).toMatchSnapshot();
      });
    });

    context('JSONSchema with alternate field values', function () {
      specify('should refract to semantic ApiDOM tree', function () {
        const jsonSchemaElement = JSONSchemaElement.refract({
          additionalItems: true,
          items: {},
          contains: true,
          additionalProperties: true,
          dependencies: { dep1: ['string1', 'string2'] },
          propertyNames: true,
          type: ['string', 'number'],
        });

        expect(sexprs(jsonSchemaElement)).toMatchSnapshot();
      });
    });

    context('Boolean JSON Schema support', function () {
      specify('should refract to semantic ApiDOM tree', function () {
        const jsonSchemaElement = JSONSchemaElement.refract({
          additionalItems: true,
          items: true,
          contains: true,
          additionalProperties: false,
          patternProperties: { '[a-z]+': true },
          dependencies: { dep1: false },
          propertyNames: true,
          allOf: [true],
          anyOf: [true],
          oneOf: [false],
          not: false,
          definitions: { def1: true },
        });

        expect(jsonSchemaElement).toMatchSnapshot();
      });
    });

    context('given fields of type JSONReference', function () {
      specify('should refract to semantic ApiDOM tree', function () {
        const jsonSchemaElement = JSONSchemaElement.refract({
          additionalItems: { $ref: '#/json/pointer' },
          items: [{ $ref: '#/json/pointer' }],
          contains: { $ref: '#/json/pointer' },
          properties: { prop1: { $ref: '#/json/pointer' } },
          additionalProperties: { $ref: '#/json/pointer' },
          patternProperties: { '[a-z]+': { $ref: '#/json/pointer' } },
          dependencies: { dep1: { $ref: '#/json/pointer' } },
          propertyNames: { $ref: '#/json/pointer' },
          allOf: [{ $ref: '#/json/pointer' }],
          anyOf: [{ $ref: '#/json/pointer' }],
          oneOf: [{ $ref: '#/json/pointer' }],
          not: { $ref: '#/json/pointer' },
          definitions: { def1: { $ref: '#/json/pointer' } },
        });

        expect(sexprs(jsonSchemaElement)).toMatchSnapshot();
      });
    });
  });
});
