import stampit from 'stampit';
import { always } from 'ramda';

import MapVisitor from '../../generics/MapVisitor';
import FallbackVisitor from '../../FallbackVisitor';
import SecurityRequirementElement from '../../../../elements/SecurityRequirement';

const SecurityRequirementVisitor = stampit(MapVisitor, FallbackVisitor, {
  props: {
    specPath: always(['value']),
  },
  init() {
    this.element = new SecurityRequirementElement();
  },
});

export default SecurityRequirementVisitor;
