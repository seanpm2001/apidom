// eslint-disable-next-line max-classes-per-file
import fs from 'node:fs';
import { assert } from 'chai';
import path from 'node:path';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver-types';

import { AdsValidationProvider } from '../src/services/validation/providers/ads-validation-provider';
import getLanguageService from '../src/apidom-language-service';
import {
  LanguageService,
  LanguageServiceContext,
  ValidationContext,
} from '../src/apidom-language-types';
import { metadata } from './metadata';
import { logLevel, logPerformance } from './test-utils';

const specOpenapi = fs
  .readFileSync(path.join(__dirname, 'fixtures', 'ads', 'openapi-3-1.json'))
  .toString();

const adsFile = fs
  .readFileSync(path.join(__dirname, 'fixtures', 'ads', 'ads-validator.yaml'))
  .toString();
const adsExample = fs
  .readFileSync(path.join(__dirname, 'fixtures', 'ads', 'ads-ko.json'))
  .toString();

describe('apidom-ls-ads-validation-provider', function () {
  const adsValidationProvider = new AdsValidationProvider(adsFile);

  const contextAds: LanguageServiceContext = {
    metadata: metadata(),
    validatorProviders: [adsValidationProvider],
    performanceLogs: logPerformance,
    logLevel,
  };

  it('test OAS validation with ADS', async function () {
    const validationContext: ValidationContext = {
      comments: DiagnosticSeverity.Error,
      maxNumberOfProblems: 100,
      relatedInformation: false,
    };
    const languageService: LanguageService = getLanguageService(contextAds);

    try {
      // valid spec
      const docOpenapi: TextDocument = TextDocument.create(
        'foo://bar/openapi-3-1.json',
        'specOpenapi',
        0,
        specOpenapi,
      );

      const result = await languageService.doValidation(docOpenapi, validationContext);
      const expected = [
        {
          range: {
            start: {
              line: 0,
              character: 1,
            },
            end: {
              line: 1,
              character: 1,
            },
          },
          message: '"201" not allowed for subject ["http","response","status_code"]',
          severity: 1,
          code: 0,
          source: 'syntax',
        },
        {
          range: {
            start: {
              line: 0,
              character: 1,
            },
            end: {
              line: 1,
              character: 1,
            },
          },
          message: '"305" not allowed for subject ["http","response","status_code"]',
          severity: 1,
          code: 0,
          source: 'syntax',
        },
      ] as Diagnostic[];
      assert.deepEqual(result, expected as Diagnostic[]);
    } finally {
      languageService.terminate();
    }
  });

  it('test ADS validation', async function () {
    const validationContext: ValidationContext = {
      comments: DiagnosticSeverity.Error,
      maxNumberOfProblems: 100,
      relatedInformation: false,
    };
    const languageService: LanguageService = getLanguageService(contextAds);

    try {
      // valid spec
      const docAds: TextDocument = TextDocument.create(
        'foo://bar/adsExample.json',
        'adsExample',
        0,
        adsExample,
      );

      const result = await languageService.doValidation(docAds, validationContext);
      const expected = [
        {
          range: {
            start: {
              line: 2,
              character: 2,
            },
            end: {
              line: 2,
              character: 8,
            },
          },
          message: "should always have a 'title'",
          severity: 1,
          code: 8010201,
          source: 'apilint',
          data: {
            quickFix: [
              {
                message: "add 'title' field",
                action: 'addChild',
                snippetYaml: 'title: \n  ',
                snippetJson: '"title": "",\n    ',
              },
            ],
          },
        },
      ] as Diagnostic[];
      assert.deepEqual(result, expected as Diagnostic[]);
    } finally {
      languageService.terminate();
    }
  });
});