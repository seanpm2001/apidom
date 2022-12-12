import { expect } from 'chai';
import dedent from 'dedent';
import { sexprs } from '@swagger-api/apidom-core';
import { parse } from '@swagger-api/apidom-parser-adapter-yaml-1-2';

import { OpenApi3_1Element, refractorPluginNormalizeParameters } from '../../../../../src';

describe('refractor', function () {
  context('plugins', function () {
    context('normalize-parameters', function () {
      context('given parameters are defined in Path Item Object', function () {
        context("and Operation Object doesn't define any parameters", function () {
          specify('should inherit all parameters from closest Path Item', async function () {
            const yamlDefinition = dedent`
              openapi: 3.1.0
              paths:
                /:
                  parameters:
                    - name: param1
                      in: query
                    - name: param2
                      in: query
                  get:
                    callbacks:
                      myCallback:
                        "{$url}":
                           parameters:
                             - name: param3
                               in: query
                           get: {}
            `;
            const apiDOM = await parse(yamlDefinition);
            const openApiElement = OpenApi3_1Element.refract(apiDOM.result, {
              plugins: [refractorPluginNormalizeParameters()],
            });

            expect(sexprs(openApiElement)).toMatchSnapshot();
          });
        });

        context("and Operation Object doesn't defines empty parameters", function () {
          specify('should inherit all parameters from closest Path Item', async function () {
            const yamlDefinition = dedent`
              openapi: 3.1.0
              paths:
                /:
                  parameters:
                    - name: param1
                      in: query
                    - name: param2
                      in: query
                  get:
                    callbacks:
                      myCallback:
                        "{$url}":
                           parameters:
                             - name: param3
                               in: query
                           get:
                             parameters: []
            `;
            const apiDOM = await parse(yamlDefinition);
            const openApiElement = OpenApi3_1Element.refract(apiDOM.result, {
              plugins: [refractorPluginNormalizeParameters()],
            });

            expect(sexprs(openApiElement)).toMatchSnapshot();
          });
        });

        context('and Operation Object defines additional parameter', function () {
          specify('should merge with all parameters from closest Path Item', async function () {
            const yamlDefinition = dedent`
              openapi: 3.1.0
              paths:
                /:
                  parameters:
                    - name: param1
                      in: query
                    - name: param2
                      in: query
                  get:
                    callbacks:
                      myCallback:
                        "{$url}":
                           parameters:
                             - name: param3
                               in: query
                           get:
                             parameters:
                               - name: param4
                                 in: query
            `;
            const apiDOM = await parse(yamlDefinition);
            const openApiElement = OpenApi3_1Element.refract(apiDOM.result, {
              plugins: [refractorPluginNormalizeParameters()],
            });

            expect(sexprs(openApiElement)).toMatchSnapshot();
          });
        });

        context('and Operation Object defines identical parameter', function () {
          specify('should replace parameter from closes Path Item', async function () {
            const yamlDefinition = dedent`
              openapi: 3.1.0
              paths:
                /:
                  parameters:
                    - name: param1
                      in: query
                    - name: param2
                      in: query
                  get:
                    callbacks:
                      myCallback:
                        "{$url}":
                           parameters:
                             - name: param3
                               in: query
                             - name: param4
                               in: query
                           get:
                             parameters:
                               - name: param3
                                 in: query
                                 description: operation parameter
            `;
            const apiDOM = await parse(yamlDefinition);
            const openApiElement = OpenApi3_1Element.refract(apiDOM.result, {
              plugins: [refractorPluginNormalizeParameters()],
            });

            expect(openApiElement).toMatchSnapshot();
          });
        });
      });
    });
  });
});
