import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const contentTypeTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_0_ENCODING_FIELD_CONTENT_TYPE_TYPE,
  source: 'apilint',
  message: 'contentType must be a string',
  severity: 1,
  linterFunction: 'apilintType',
  linterParams: ['string'],
  marker: 'value',
  target: 'contentType',
  data: {},
};

export default contentTypeTypeLint;