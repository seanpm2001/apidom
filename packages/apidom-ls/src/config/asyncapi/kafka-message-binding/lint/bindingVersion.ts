import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const bindingVersionLint: LinterMeta = {
  code: ApilintCodes.MESSAGE_BINDING_KAFKA_BINDINGVERSION,
  source: 'apilint',
  message: "bindingVersion' value must be a string",
  severity: 1,
  linterFunction: 'apilintType',
  linterParams: ['string'],
  marker: 'value',
  target: 'bindingVersion',
  data: {},
};

export default bindingVersionLint;