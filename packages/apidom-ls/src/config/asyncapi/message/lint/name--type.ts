import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const nameTypeLint: LinterMeta = {
  code: ApilintCodes.ASYNCAPI2_MESSAGE_FIELD_NAME_TYPE,
  source: 'apilint',
  message: "'name' value must be a string",
  severity: 1,
  linterFunction: 'apilintType',
  linterParams: ['string'],
  marker: 'value',
  target: 'name',
  data: {},
};

export default nameTypeLint;