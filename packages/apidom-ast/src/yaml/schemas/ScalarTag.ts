import stampit from 'stampit';

import {
  formatFlowPlain,
  formatFlowSingleQuoted,
  formatFlowDoubleQuoted,
  formatBlockLiteral,
  formatBlockFolded,
} from './canonical-format';
import { YamlStyle } from '../nodes/YamlStyle';
import { YamlNodeKind } from '../nodes/YamlTag';

const ScalarTag = stampit({
  methods: {
    test(node) {
      return node.tag.kind === YamlNodeKind.Scalar && typeof node.content === 'string';
    },

    canonicalFormat(node) {
      let canonicalForm = node.content;
      const nodeClone = node.clone();

      if (node.style === YamlStyle.Plain) {
        // @ts-ignore
        canonicalForm = formatFlowPlain(node.content);
      } else if (node.style === YamlStyle.SingleQuoted) {
        // @ts-ignore
        canonicalForm = formatFlowSingleQuoted(node.content);
      } else if (node.style === YamlStyle.DoubleQuoted) {
        // @ts-ignore
        canonicalForm = formatFlowDoubleQuoted(node.content);
      } else if (node.style === YamlStyle.Literal) {
        // @ts-ignore
        canonicalForm = formatBlockLiteral(node.content);
      } else if (node.style === YamlStyle.Folded) {
        // @ts-ignore
        canonicalForm = formatBlockFolded(node.content);
      }

      nodeClone.content = canonicalForm;

      return nodeClone;
    },

    resolve(node) {
      return node;
    },
  },
});

export default ScalarTag;
