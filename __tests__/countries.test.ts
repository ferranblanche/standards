import { Countries } from "../src";

describe('Country Service', () => {
  const countries = new Countries;

  describe('Validate that a Country code is a valid 2-letter ISO code', () => {
    const testCases = [
      { req: 'es', res: true },
      { req: 'us', res: true },
      { req: 'xx', res: false },
      { req: 'Netherlands', res: false },
    ];
    test.each(testCases)('should return "$res" when validating "$req" as an ISO code', (testCase) => {
      expect(countries.contains(testCase.req)).toBe(testCase.res);
    });
  });

  describe('Get Country English and local names by 2-letter ISO code', () => {
    const testCases = [
      {
        req: 'es', res: {
          "name": "Spain",
          "local": "España",
          "code": "es",
          "region": "Europe",
          "currency": "eur",
          "language": "es",
          "flag": "🇪🇸"
        }
      },
      {
        req: 'us', res: {
          "name": "United States of America",
          "local": "United States of America",
          "code": "us",
          "region": "North America",
          "currency": "usd",
          "language": "en",
          "flag": "🇺🇸"
        },
      },
      { req: 'xx', res: undefined },
      { req: 'Spain', res: undefined },
    ];
    test.each(testCases)('should return "$res" when getting "$req" information', (testCase) => {
      expect(countries.get(testCase.req)).toEqual(testCase.res);
    });
  });

  describe('Search Country by text', () => {
    const testCases = [
      {
        req: 'Spain', res: {
          "name": "Spain",
          "local": "España",
          "code": "es",
          "region": "Europe",
          "currency": "eur",
          "language": "es",
          "flag": "🇪🇸"
        }
      },
      {
        req: 'es', res: {
          "name": "Bangladesh",
          "local": "গণপ্রজাতন্ত্রী বাংলাদেশ",
          "code": "bd",
          "region": "Asia & Pacific",
          "currency": "bdt",
          "language": "bn",
          "flag": "🇧🇩"
        }
      },
    ];
    test.each(testCases)('should return "$res" when getting "$req" information', (testCase) => {
      expect(countries.search(testCase.req)).toEqual(testCase.res);
    });
  });
});
