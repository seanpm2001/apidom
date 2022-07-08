import stampit from 'stampit';
import { pick } from 'ramda';
import { ParseResultElement } from '@swagger-api/apidom-core';
import { parse, mediaTypes, detect } from '@swagger-api/apidom-parser-adapter-json';

import { ParserError } from '../../../util/errors';
import { Parser as IParser, File as IFile } from '../../../types';
import Parser from '../Parser';

const JsonParser: stampit.Stamp<IParser> = stampit(Parser, {
  props: {
    name: 'json',
    fileExtensions: ['.json'],
    mediaTypes,
  },
  methods: {
    async canParse(file: IFile): Promise<boolean> {
      const hasSupportedFileExtension =
        this.fileExtensions.length === 0 ? true : this.fileExtensions.includes(file.extension);
      const hasSupportedMediaType = this.mediaTypes.includes(file.mediaType);

      if (!hasSupportedFileExtension) return false;
      if (hasSupportedMediaType) return true;
      if (!hasSupportedMediaType) {
        if (ArrayBuffer.isView(file.data)) {
          return detect(file.data.toString());
        }
        return detect(file.data);
      }
      return false;
    },
    async parse(file: IFile): Promise<ParseResultElement> {
      const source = ArrayBuffer.isView(file.data) ? file.data.toString() : file.data;

      try {
        const parserOpts = pick(['sourceMap', 'syntacticAnalysis'], this);
        return await parse(source, parserOpts);
      } catch (error: any) {
        throw new ParserError(`Error parsing "${file.uri}"`, error);
      }
    },
  },
});

export default JsonParser;