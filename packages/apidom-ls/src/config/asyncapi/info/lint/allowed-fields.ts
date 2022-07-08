import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const allowedFieldsLint: LinterMeta = {
  code: ApilintCodes.NOT_ALLOWED_FIELDS,
  source: 'apilint',
  message: 'Object includes not allowed fields',
  severity: 1,
  linterFunction: 'allowedFields',
  linterParams: [['title', 'version', 'description', 'termsOfService', 'contact', 'license'], 'x-'],
  marker: 'key',
};

export default allowedFieldsLint;