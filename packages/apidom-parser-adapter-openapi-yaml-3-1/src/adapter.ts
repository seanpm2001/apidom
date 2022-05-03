import { propOr, omit } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import { ParseResultElement, createNamespace } from '@swagger-api/apidom-core';
import { parse as parseYaml } from '@swagger-api/apidom-parser-adapter-yaml-1-2';
import openApiNamespace, {
  OpenApi3_1Element,
  mediaTypes,
  OpenAPIMediaTypes,
} from '@swagger-api/apidom-ns-openapi-3-1';

const yamlMediaTypes = new OpenAPIMediaTypes(
  ...mediaTypes.forFormat('generic'),
  ...mediaTypes.forFormat('yaml'),
);

export { yamlMediaTypes as mediaTypes };

export const detect = (source: string): boolean =>
  !!source.match(/(["']?)openapi\1\s*:\s*(["']?)3\.\d+\.\d+\2/g);

export const parse = async (
  source: string,
  options: Record<string, unknown> = {},
): Promise<ParseResultElement> => {
  const refractorOpts: Record<string, unknown> = propOr({}, 'refractorOpts', options);
  const parserOpts = omit(['refractorOpts'], options);
  const parseResultElement = await parseYaml(source, parserOpts);
  const { result } = parseResultElement;

  if (isNotUndefined(result)) {
    const openApiElement = OpenApi3_1Element.refract(result, refractorOpts);
    openApiElement.classes.push('result');
    parseResultElement.replaceResult(openApiElement);
  }

  return parseResultElement;
};

export const namespace = createNamespace(openApiNamespace);