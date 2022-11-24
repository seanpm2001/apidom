import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const authorizationCodeTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_0_OAUTH_FLOWS_FIELD_AUTHORIZATION_CODE_TYPE,
  source: 'apilint',
  message: "'authorizationCode' must be an object",
  severity: 1,
  linterFunction: 'apilintElementOrClass',
  linterParams: ['oAuthFlow'],
  marker: 'value',
  target: 'authorizationCode',
  data: {},
};

export default authorizationCodeTypeLint;