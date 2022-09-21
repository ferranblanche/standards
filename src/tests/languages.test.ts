import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { Languages } from '..';

describe('Language Service', () => {
  const languages = new Languages;

  describe('Validate 2-letter ISO req', () => {
    const testCases = [
      { req: 'es', res: true },
      { req: 'en', res: true },
      { req: 'xx', res: false },
      { req: 'spanish', res: false },
    ];
    testCases.forEach(testCase => {
      it('should return "$res" when validating "$req" as a 2-letter ISO req', () => {
        assert.deepEqual(languages.contains(testCase.req), testCase.res)
      });
    });
  });

  describe('Get Language by 2-letter ISO req', () => {
    const testCases = [
      { req: 'es', res: { "code": "es", "name": "Spanish", "local": "Español" } },
      { req: 'ja', res: { "code": "ja", "name": "Japanese", "local": "日本語" } },
      { req: 'xx', res: undefined },
      { req: 'spanish', res: undefined },
    ];
    testCases.forEach(testCase => {
      it('should return "$res" when getting "$req" information', () => {
        assert.deepEqual(languages.get(testCase.req), testCase.res)
      });
    });
  });

  describe('Search Language by text', () => {
    const testCases = [
      { req: 'nl', res: { "code": "nl", "name": "Dutch", "local": "Nederlands" } },
      { req: 'Span', res: { "code": "es", "name": "Spanish", "local": "Español" } },
      { req: '語', res: { "code": "ja", "name": "Japanese", "local": "日本語" } },
      { req: 'Span本語', res: undefined },
    ];
    testCases.forEach(testCase => {
      it('should return "$res" when searching by "$criterion"', () => {
        assert.deepEqual(languages.search(testCase.req), testCase.res)
      });
    });
  });
});
