import { DiagnosticSeverity } from 'vscode-languageserver-types';

import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';
import { OpenAPI } from '../../target-specs';

const versionTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI2_INFO_FIELD_VERSION_TYPE,
  source: 'apilint',
  message: 'version must be a string',
  severity: DiagnosticSeverity.Error,
  linterFunction: 'apilintType',
  linterParams: ['string'],
  marker: 'value',
  target: 'version',
  data: {},
  targetSpecs: OpenAPI,
};

export default versionTypeLint;
