import { DiagnosticSeverity } from 'vscode-languageserver-types';

import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';
import { OpenAPI3 } from '../../target-specs';

const requiredRequiredLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_0_PARAMETER_FIELD_REQUIRED_REQUIRED,
  source: 'apilint',
  message: "should always have a 'required'",
  severity: DiagnosticSeverity.Error,
  linterFunction: 'hasRequiredField',
  linterParams: ['required'],
  marker: 'key',
  conditions: [
    {
      targets: [{ path: 'in' }],
      function: 'apilintContainsValue',
      params: ['path'],
    },
    {
      function: 'missingField',
      params: ['$ref'],
    },
  ],
  data: {
    quickFix: [
      {
        message: "add 'required' field",
        action: 'addChild',
        snippetYaml: 'required: \n  ',
        snippetJson: '"required": ,\n    ',
      },
    ],
  },
  targetSpecs: OpenAPI3,
};

export default requiredRequiredLint;
