import { DiagnosticSeverity } from 'vscode-languageserver-types';

import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';
import { OpenAPI } from '../../target-specs';

const nameTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI2_LICENSE_FIELD_NAME_TYPE,
  source: 'apilint',
  message: "'identifier' must be a string",
  severity: DiagnosticSeverity.Error,
  linterFunction: 'apilintType',
  linterParams: ['string'],
  marker: 'value',
  target: 'name',
  data: {},
  targetSpecs: OpenAPI,
};

export default nameTypeLint;
