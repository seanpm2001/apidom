import ApilintCodes from '../../../../../codes';
import { LinterMeta } from '../../../../../../apidom-language-types';

const headersTypeLint: LinterMeta = {
  code: ApilintCodes.ASYNCAPI2_HTTP_MESSAGE_BINDING_FIELD_HEADERS_TYPE,
  source: 'apilint',
  message: 'headers must be an object',
  severity: 1,
  linterFunction: 'apilintElementOrClass',
  linterParams: ['schema'],
  marker: 'value',
  target: 'headers',
  data: {},
};

export default headersTypeLint;