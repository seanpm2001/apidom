import { DiagnosticSeverity } from 'vscode-languageserver-types';

import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';
import { OpenAPI3 } from '../../target-specs';

const nameTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_0_TAG_FIELD_NAME_TYPE,
  source: 'apilint',
  message: "'name' value must be a string",
  severity: DiagnosticSeverity.Error,
  linterFunction: 'apilintType',
  linterParams: ['string'],
  marker: 'value',
  target: 'name',
  data: {},
  targetSpecs: OpenAPI3,
};

export default nameTypeLint;
