import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { Currencies } from "..";

describe('Currency Service', () => {
  const currencies = new Currencies;

  describe('Validate that a Country code is a valid 2-letter ISO code', () => {
    const testCases = [
      { req: 'eur', res: true },
      { req: 'usd', res: true },
      { req: 'xxx', res: false },
      { req: 'Euro', res: false },
    ];
    testCases.forEach(testCase => {
      it(`should return ${testCase.res} when validating ${testCase.req} as a 2-letter ISO req`, () => {
        assert.deepEqual(currencies.contains(testCase.req), testCase.res)
      });
    });
  });

  describe('Get Country English and local names by 2-letter ISO code', () => {
    const testCases = [
      { req: 'eur', res: { "code": "eur", "name": "Euro", "decimals": 2, "symbol": "€" } },
      { req: 'cny', res: { "code": "cny", "name": "Yuan Renminbi", "decimals": 2, "symbol": "¥" } },
      { req: 'xxx', res: undefined },
      { req: 'Spain', res: undefined },
    ];
    testCases.forEach(testCase => {
      it(`should return ${testCase.res} when getting ${testCase.req} information`, () => {
        assert.deepEqual(currencies.get(testCase.req), testCase.res)
      });
    });
  });

  describe('Get Country English and local names by 2-letter ISO code', () => {
    const testCases = [
      { req: 'eur', res: { "code": "eur", "name": "Euro", "decimals": 2, "symbol": "€" } },
      { req: 'Dollar', res: { "code": "usd", "name": "US Dollar", "decimals": 2, "symbol": "$" } },
      { req: '¥', res: { "code": "cny", "name": "Yuan Renminbi", "decimals": 2, "symbol": "¥" } },
      { req: 'xxx', res: undefined },
      { req: 'Spain', res: undefined },
    ];
    testCases.forEach(testCase => {
      it(`should return ${testCase.res} when getting ${testCase.req} information`, () => {
        assert.deepEqual(currencies.search(testCase.req), testCase.res)
      });
    });
  });
});
