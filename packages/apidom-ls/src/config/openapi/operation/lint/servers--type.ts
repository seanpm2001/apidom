import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const serversTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_0_OPERATION_FIELD_SERVERS_TYPE,
  source: 'apilint',
  message: 'servers must be an array',
  severity: 1,
  linterFunction: 'apilintElementOrClass',
  linterParams: ['operation-servers'],
  marker: 'value',
  target: 'servers',
  data: {},
};

export default serversTypeLint;