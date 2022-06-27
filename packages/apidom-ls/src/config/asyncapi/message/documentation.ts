const documentation = [
  {
    target: 'messageId',
    docs: 'Unique string used to identify the message. The id MUST be unique among all messages described in the API. The messageId value is **case-sensitive**. Tools and libraries MAY use the messageId to uniquely identify a message, therefore, it is RECOMMENDED to follow common programming naming conventions.',
  },
  {
    target: 'headers',
    docs: '[Schema Object](https://www.asyncapi.com/docs/specifications/v2.4.0#schemaObject) &#124; [Reference Object](https://www.asyncapi.com/docs/specifications/v2.4.0#referenceObject) \\\n\\\nSchema definition of the application headers. Schema MUST be of type "object". It **MUST NOT** define the protocol headers.',
  },
  {
    target: 'payload',
    docs: 'Definition of the message payload. It can be of any type but defaults to [Schema object](https://www.asyncapi.com/docs/specifications/v2.4.0#schemaObject). It must match the schema format, including encoding type - e.g Avro should be inlined as either a YAML or JSON object NOT a string to be parsed as YAML or JSON.',
  },
  {
    target: 'correlationId',
    docs: '[Correlation ID Object](https://www.asyncapi.com/docs/specifications/v2.4.0#correlationIdObject) &#124; [Reference Object](https://www.asyncapi.com/docs/specifications/v2.4.0#referenceObject)\n\\\n\\\nDefinition of the correlation ID used for message tracing or matching.',
  },
  {
    target: 'schemaFormat',
    docs: 'A string containing the name of the schema format used to define the message payload. If omitted, implementations should parse the payload as a [Schema object](https://www.asyncapi.com/docs/specifications/v2.4.0#schemaObject). When the payload is defined using a `$ref` to a remote file, it is RECOMMENDED the schema format includes the file encoding type to allow implementations to parse the file correctly. E.g., adding `+yaml` if content type is `application/vnd.apache.avro` results in `application/vnd.apache.avro+yaml`.\n\\\n\\\nCheck out the [supported schema formats table](https://www.asyncapi.com/docs/specifications/v2.4.0#messageObjectSchemaFormatTable) for more information. Custom values are allowed but their implementation is OPTIONAL. A custom value MUST NOT refer to one of the schema formats listed in the [table](https://www.asyncapi.com/docs/specifications/v2.4.0#messageObjectSchemaFormatTable).',
  },
  {
    target: 'contentType',
    docs: "The content type to use when encoding/decoding a message's payload. The value MUST be a specific media type (e.g. `application/json`). When omitted, the value MUST be the one specified on the [defaultContentType](https://www.asyncapi.com/docs/specifications/v2.4.0#defaultContentTypeString) field.",
  },
  {
    target: 'name',
    docs: 'A machine-friendly name for the message.',
  },
  {
    target: 'title',
    docs: 'A human-friendly title for the message.',
  },
  {
    target: 'summary',
    docs: 'A short summary of what the message is about.',
  },
  {
    target: 'description',
    docs: 'A verbose explanation of the message. [CommonMark syntax](https://spec.commonmark.org/) can be used for rich text representation.',
  },
  {
    target: 'tags',
    docs: '#### [Tags Object](https://www.asyncapi.com/docs/specifications/v2.4.0#tagsObject)\n\nA Tags object is a list of Tag Objects.',
  },
  {
    target: 'externalDocs',
    docs: '#### [External Documentation Object](https://www.asyncapi.com/docs/specifications/v2.4.0#externalDocumentationObject)\n\nAllows referencing an external resource for extended documentation.\n\n##### Fixed Fields\n\nField Name | Type | Description\n---|:---:|---\ndescription | `string` | A short description of the target documentation. [CommonMark syntax](https://spec.commonmark.org/) can be used for rich text representation.\nurl | `string` | **Required.** The URL for the target documentation. Value MUST be in the format of a URL.\n\nThis object can be extended with [Specification Extensions](https://www.asyncapi.com/docs/specifications/v2.4.0#specificationExtensions).\n\n##### External Documentation Object Example\n\n\n\\\nJSON\n```json\n{\n  "description": "Find more info here",\n  "url": "https://example.com"\n}\n```\n\n\n\\\nYAML\n```yaml\ndescription: Find more info here\nurl: https://example.com\n```',
  },
  {
    target: 'bindings',
    docs: '[Message Bindings Object](https://www.asyncapi.com/docs/specifications/v2.4.0#messageBindingsObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.4.0#referenceObject)\n\\\n\\\nA map where the keys describe the name of the protocol and the values describe protocol-specific definitions for the message.',
  },
  {
    target: 'examples',
    docs: '[[Message Example Object](https://www.asyncapi.com/docs/specifications/v2.4.0#messageExampleObject)\\]\n\\\n\\\nList of examples.',
  },
  {
    target: 'traits',
    docs: '[[Message Trait Object](https://www.asyncapi.com/docs/specifications/v2.4.0#messageTraitObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.4.0#referenceObject)]\n\\\n\\\nA list of traits to apply to the message object. Traits MUST be merged into the message object using the [JSON Merge Patch](https://tools.ietf.org/html/rfc7386) algorithm in the same order they are defined here. The resulting object MUST be a valid [Message Object](https://www.asyncapi.com/docs/specifications/v2.4.0#messageObject).',
  },
  {
    docs: '#### [Message Object](https://www.asyncapi.com/docs/specifications/v2.4.0#messageObject)\n\nDescribes a message received on a given channel and operation.\n\n##### Fixed Fields\n\nField Name | Type | Description\n---|:---:|---\nheaders | [Schema Object](https://www.asyncapi.com/docs/specifications/v2.4.0#schemaObject) &#124; [Reference Object](https://www.asyncapi.com/docs/specifications/v2.4.0#referenceObject) | Schema definition of the application headers. Schema MUST be of type "object". It **MUST NOT** define the protocol headers.\npayload | `any` | Definition of the message payload. It can be of any type but defaults to [Schema object](https://www.asyncapi.com/docs/specifications/v2.4.0#schemaObject). It must match the schema format, including encoding type - e.g Avro should be inlined as either a YAML or JSON object NOT a string to be parsed as YAML or JSON.\ncorrelationId | [Correlation ID Object](https://www.asyncapi.com/docs/specifications/v2.4.0#correlationIdObject) &#124; [Reference Object](https://www.asyncapi.com/docs/specifications/v2.4.0#referenceObject) | Definition of the correlation ID used for message tracing or matching.\nschemaFormat | `string` | A string containing the name of the schema format used to define the message payload. If omitted, implementations should parse the payload as a [Schema object](https://www.asyncapi.com/docs/specifications/v2.4.0#schemaObject). When the payload is defined using a `$ref` to a remote file, it is RECOMMENDED the schema format includes the file encoding type to allow implementations to parse the file correctly. E.g., adding `+yaml` if content type is `application/vnd.apache.avro` results in `application/vnd.apache.avro+yaml`.<br/><br/>Check out the [supported schema formats table](https://www.asyncapi.com/docs/specifications/v2.4.0#messageObjectSchemaFormatTable) for more information. Custom values are allowed but their implementation is OPTIONAL. A custom value MUST NOT refer to one of the schema formats listed in the [table](https://www.asyncapi.com/docs/specifications/v2.4.0#messageObjectSchemaFormatTable).\ncontentType | `string` | The content type to use when encoding/decoding a message\'s payload. The value MUST be a specific media type (e.g. `application/json`). When omitted, the value MUST be the one specified on the [defaultContentType](https://www.asyncapi.com/docs/specifications/v2.4.0#defaultContentTypeString) field.\nname | `string` | A machine-friendly name for the message.\ntitle | `string` | A human-friendly title for the message.\nsummary | `string` | A short summary of what the message is about.\ndescription | `string` | A verbose explanation of the message. [CommonMark syntax](https://spec.commonmark.org/) can be used for rich text representation.\ntags | [Tags Object](https://www.asyncapi.com/docs/specifications/v2.4.0#tagsObject) | A list of tags for API documentation control. Tags can be used for logical grouping of messages.\nexternalDocs | [External Documentation Object](https://www.asyncapi.com/docs/specifications/v2.4.0#externalDocumentationObject) | Additional external documentation for this message.\nbindings | [Message Bindings Object](https://www.asyncapi.com/docs/specifications/v2.4.0#messageBindingsObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.4.0#referenceObject) | A map where the keys describe the name of the protocol and the values describe protocol-specific definitions for the message.\nexamples | [[Message Example Object](https://www.asyncapi.com/docs/specifications/v2.4.0#messageExampleObject)] | List of examples.\ntraits | [[Message Trait Object](https://www.asyncapi.com/docs/specifications/v2.4.0#messageTraitObject) &#124; [Reference Object](https://www.asyncapi.com/docs/specifications/v2.4.0#referenceObject)] | A list of traits to apply to the message object. Traits MUST be merged into the message object using the [JSON Merge Patch](https://tools.ietf.org/html/rfc7386) algorithm in the same order they are defined here. The resulting object MUST be a valid [Message Object](https://www.asyncapi.com/docs/specifications/v2.4.0#messageObject).\n\nThis object can be extended with [Specification Extensions](https://www.asyncapi.com/docs/specifications/v2.4.0#specificationExtensions).\n\n\n##### [Schema formats table](https://www.asyncapi.com/docs/specifications/v2.4.0#messageObjectSchemaFormatTable)\n\nThe following table contains a set of values that every implementation MUST support.\n\nName | Allowed values | Notes\n---|:---:|---\n[AsyncAPI 2.4.0 Schema Object](https://www.asyncapi.com/docs/specifications/v2.4.0#schemaObject) | `application/vnd.aai.asyncapi;version=2.2.0`, `application/vnd.aai.asyncapi+json;version=2.2.0`, `application/vnd.aai.asyncapi+yaml;version=2.2.0` | This is the default when a `schemaFormat` is not provided.\n[JSON Schema Draft 07](https://json-schema.org/specification-links.html#draft-7) | `application/schema+json;version=draft-07`, `application/schema+yaml;version=draft-07` |\n\nThe following table contains a set of values that every implementation is RECOMMENDED to support.\n\nName | Allowed values | Notes\n---|:---:|---\n[Avro 1.9.0 schema](https://avro.apache.org/docs/1.9.0/spec.html#schemas) | `application/vnd.apache.avro;version=1.9.0`, `application/vnd.apache.avro+json;version=1.9.0`, `application/vnd.apache.avro+yaml;version=1.9.0` |\n[OpenAPI 3.0.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#schemaObject) | `application/vnd.oai.openapi;version=3.0.0`, `application/vnd.oai.openapi+json;version=3.0.0`, `application/vnd.oai.openapi+yaml;version=3.0.0` |\n[RAML 1.0 data type](https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md/) | `application/raml+yaml;version=1.0` |\n\n\n##### Message Object Example\n\n\n\\\nJSON\n```json\n{\n  "name": "UserSignup",\n  "title": "User signup",\n  "summary": "Action to sign a user up.",\n  "description": "A longer description",\n  "contentType": "application/json",\n  "tags": [\n    { "name": "userype": "object",\n    "properties": {\n      "correlationId": {\n        "description": "Correlation ID set by application",\n        "type": "string"\n      },\n      "applicationInstanceId": {\n        "description": "Unique identifier for a given instance of the publishing application",\n        "type": "string"\n      }\n    }\n  },\n  "payload": {\n    "type": "object",\n    "properties": {\n      "user": {\n        "$ref": "#/components/schemas/userCreate"\n      },\n      "signup": {\n        "$ref": "#/components/schemas/signup"\n      }\n    }\n  },\n  "correlationId": {\n    "description": "Default Correlation ID",\n    "location": "$message.header#/correlationId"\n  },\n  "traits": [\n    { "$ref": "#/components/messageTraits/commonHeaders" }\n  ],\n  "examples": [\n    {\n      "name": "SimpleSignup",\n      "summary": "A simple UserSignup example message",\n      "headers": {\n        "correlationId": "my-correlation-id",\n        "applicationInstanceId": "myInstanceId"\n      },\n      "payload": {\n        "user": {\n          "someUserKey": "someUserValue"\n        },\n        "signup": {\n          "someSignupKey": "someSignupValue"\n        }\n      }\n    }\n  ]\n}\n```\n\n\n\\\nYAML\n```yaml\nname: UserSignup\ntitle: User signup\nsummary: Action to sign a user up.\ndescription: A longer description\ncontentType: application/json\ntags:\n  - name: user\n  - name: signup\n  - name: register\nheaders:\n  type: object\n  properties:\n    correlationId:\n      description: Correlation ID set by application\n      type: string\n    applicationInstanceId:\n      description: Unique identifier for a given instance of the publishing application\n      type: string\npayload:\n  type: object\n  properties:\n    user:\n      $ref: "#/components/schemas/userCreate"\n    signup:\n      $ref: "#/components/schemas/signup"\ncorrelationId:\n  description: Default Coraits/commonHeaders"\nexamples:\n  - name: SimpleSignup\n    summary: A simple UserSignup example message\n    headers:\n      correlationId: my-correlation-id\n      applicationInstanceId: myInstanceId\n    payload:\n      user:\n        someUserKey: someUserValue\n      signup:\n        someSignupKey: someSignupValue\n```\n\nExample using Avro to define the payload:\n\n```json\n{\n  "name": "UserSignup",\n  "title": "User signup",\n  "summary": "Action to sign a user up.",\n  "description": "A longer description",\n  "tags": [\n    { "name": "user" },\n    { "name": "signup" },\n    { "name": "register" }\n  ],\n  "schemaFormat": "application/vnd.apache.avro+json;version=1.9.0",\n  "payload": {\n    "$ref": "path/to/user-create.avsc#/UserCreate"\n  }\n}\n```\n\n```yaml\nname: UserSignup\ntitle: User signup\nsummary: Action to sign a user up.\ndescription: A longer description\ntags:\n  - name: user\n  - name: signup\n  - name: register\nschemaFormat: \'application/vnd.apache.avro+yaml;version=1.9.0\'\npayload:\n  $ref: \'path/to/user-create.avsc/#UserCreate\'\n```',
  },
];
export default documentation;