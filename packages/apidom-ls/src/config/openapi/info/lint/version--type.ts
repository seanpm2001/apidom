import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const versionTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI2_INFO_FIELD_VERSION_TYPE,
  source: 'apilint',
  message: 'version must be a string',
  severity: 1,
  linterFunction: 'apilintType',
  linterParams: ['string'],
  marker: 'value',
  target: 'version',
  data: {},
};

export default versionTypeLint;