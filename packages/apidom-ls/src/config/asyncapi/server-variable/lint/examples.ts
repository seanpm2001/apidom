import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const serverVariableExamplesLint: LinterMeta = {
  code: ApilintCodes.SERVERVARIABLE_EXAMPLES,
  source: 'apilint',
  message: "examples' value must be an array of strings",
  severity: 1,
  linterFunction: 'apilintArrayOfType',
  linterParams: ['string'],
  marker: 'value',
  target: 'examples',
  data: {},
};

export default serverVariableExamplesLint;