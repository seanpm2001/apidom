import { DiagnosticSeverity } from 'vscode-languageserver-types';

import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const namespaceFormatURILint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_0_XML_FIELD_NAMESPACE_FORMAT_URI,
  source: 'apilint',
  message: 'namespace MUST be in the format of an absolute URL.',
  severity: DiagnosticSeverity.Error,
  linterFunction: 'apilintValidURI',
  linterParams: [true],
  marker: 'value',
  target: 'namespace',
  data: {},
};

export default namespaceFormatURILint;