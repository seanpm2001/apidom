import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const tagsTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_1_OPEN_API_FIELD_TAGS_TYPE,
  source: 'apilint',
  message: 'tags must be an array',
  severity: 1,
  linterFunction: 'apilintElementOrClass',
  linterParams: ['tags'],
  marker: 'value',
  target: 'tags',
  data: {},
};

export default tagsTypeLint;
