import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const messageTraitHeaders: LinterMeta = {
  code: ApilintCodes.MESSAGE_TRAIT_HEADERS,
  source: 'apilint',
  message: "'headers' must be a schema",
  severity: 1,
  linterFunction: 'apilintElementOrClass',
  linterParams: ['schema'],
  marker: 'value',
  target: 'headers',
  data: {},
};

export default messageTraitHeaders;