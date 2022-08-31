import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const urlTypeLint: LinterMeta = {
  code: ApilintCodes.ASYNCAPI2_CONTACT_FIELD_URL_FORMAT_URI,
  source: 'apilint',
  message: "'url' value must be a valid URL",
  severity: 1,
  linterFunction: 'apilintValidURI',
  marker: 'value',
  target: 'url',
  data: {},
};

export default urlTypeLint;