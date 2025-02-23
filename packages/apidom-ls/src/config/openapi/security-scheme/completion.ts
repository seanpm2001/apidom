import {
  ApidomCompletionItem,
  CompletionFormat,
  CompletionType,
} from '../../../apidom-language-types';
import { OpenAPI30, OpenAPI31, OpenAPI3 } from '../target-specs';

const completion: ApidomCompletionItem[] = [
  {
    label: '$ref',
    insertText: '\\$ref',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value: 'A reference to a Security Scheme.',
    },
    targetSpecs: OpenAPI3,
  },
  {
    label: 'type',
    insertText: 'type',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '**REQUIRED**. The type of the security scheme. Valid values are `"apiKey"`, `"http"`, `"oauth2"`, `"openIdConnect"`.',
    },
    targetSpecs: OpenAPI30,
  },
  {
    label: 'type',
    insertText: 'type',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '**REQUIRED**. The type of the security scheme. Valid values are `"apiKey"`, `"http"`, `"mutualTLS"`, `"oauth2"`, `"openIdConnect"`.',
    },
    targetSpecs: OpenAPI31,
  },
  {
    label: 'description',
    insertText: 'description',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        'A description for security scheme. [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.',
    },
    targetSpecs: OpenAPI3,
  },
  {
    label: 'name',
    insertText: 'name',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '**REQUIRED**. Applies to `apiKey`. **REQUIRED**. The name of the header, query or cookie parameter to be used.',
    },
    targetSpecs: OpenAPI3,
  },
  {
    label: 'in',
    insertText: 'in',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '**REQUIRED**. Applies to `apiKey`. **REQUIRED**. The location of the API key. Valid values are `"query"`, `"header"` or `"cookie"`.',
    },
    targetSpecs: OpenAPI3,
  },
  {
    label: 'scheme',
    insertText: 'scheme',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '**REQUIRED**. Applies to `http`. **REQUIRED**. The name of the HTTP Authorization scheme to be used in the [Authorization header as defined in RFC7235](https://tools.ietf.org/html/rfc7235#section-5.1). The values used SHOULD be registered in the [IANA Authentication Scheme registry](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).',
    },
    targetSpecs: OpenAPI3,
  },
  {
    label: 'bearerFormat',
    insertText: 'bearerFormat',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        'Applies to `http` (`"bearer"`). A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes.',
    },
    targetSpecs: OpenAPI3,
  },
  {
    label: 'flows',
    insertText: 'flows',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[OAuth Flows Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#oauthFlowsObject)\n\\\nnApplies to `oauth2`. **REQUIRED**. An object containing configuration information for the flow types supported.',
    },
    targetSpecs: OpenAPI30,
  },
  {
    label: 'flows',
    insertText: 'flows',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[OAuth Flows Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#oauthFlowsObject)\n\\\nApplies to `oauth2`. **REQUIRED**. An object containing configuration information for the flow types supported.',
    },
    targetSpecs: OpenAPI31,
  },
  {
    label: 'openIdConnectUrl',
    insertText: 'openIdConnectUrl',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '**REQUIRED**. Applies to `openIdConnect`. **REQUIRED**. OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the form of a URL.',
    },
    targetSpecs: OpenAPI30,
  },
  {
    label: 'openIdConnectUrl',
    insertText: 'openIdConnectUrl',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '**REQUIRED**. Applies to `openIdConnect`. **REQUIRED**. OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the form of a URL. The OpenID Connect standard requires the use of TLS.',
    },
    targetSpecs: OpenAPI31,
  },
  {
    target: 'type',
    label: 'apiKey',
    insertText: 'apiKey',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: OpenAPI3,
  },
  {
    target: 'type',
    label: 'http',
    insertText: 'http',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: OpenAPI3,
  },
  {
    target: 'type',
    label: 'oauth2',
    insertText: 'oauth2',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: OpenAPI3,
  },
  {
    target: 'type',
    label: 'openIdConnect',
    insertText: 'openIdConnect',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: OpenAPI3,
  },
  {
    target: 'in',
    label: 'query',
    insertText: 'query',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: OpenAPI3,
  },
  {
    target: 'in',
    label: 'header',
    insertText: 'header',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: OpenAPI3,
  },
  {
    target: 'in',
    label: 'cookie',
    insertText: 'cookie',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: OpenAPI3,
  },
];

export default completion;
