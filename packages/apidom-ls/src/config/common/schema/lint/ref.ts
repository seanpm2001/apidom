import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const schema$RefLint: LinterMeta = {
  code: ApilintCodes.SCHEMA_REF,
  source: 'apilint',
  message: "'$ref' value must be a valid URI-reference",
  severity: 1,
  linterFunction: 'apilintValidURI',
  marker: 'value',
  target: '$ref',
  data: {},
};

export default schema$RefLint;