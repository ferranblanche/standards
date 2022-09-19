import { Languages } from "../src";

describe('Language Service', () => {
    const languages = new Languages;
    describe('Validate 2-letter ISO code', () => {
        const testCases = [
            { code: 'es', valid: true },
            { code: 'en', valid: true },
            { code: 'xx', valid: false },
            { code: 'spanish', valid: false },
        ];
        test.each(testCases)('should return "$valid" when validating "$code" as a 2-letter ISO code', (testCase) => {
            expect(languages.contains(testCase.code)).toBe(testCase.valid);
        });
    }
    );
    describe('Get Language by 2-letter ISO code', () => {
        const testCases = [
            { code: 'es', result: { "code": "es", "name": "Spanish", "local": "Español" } },
            { code: 'ja', result: { "code": "ja", "name": "Japanese", "local": "日本語" } },
            { code: 'xx', result: undefined },
            { code: 'spanish', result: undefined },
        ];
        test.each(testCases)('should return "$result" when getting "$code" information', (testCase) => {
            expect(languages.get(testCase.code)).toEqual(testCase.result);
        })
    });
    describe('Search Language by text', () => {
        const testCases = [
            { criterion: 'nl', result: { "code": "nl", "name": "Dutch", "local": "Nederlands" } },
            { criterion: 'Span', result: { "code": "es", "name": "Spanish", "local": "Español" } },
            { criterion: '語', result: { "code": "ja", "name": "Japanese", "local": "日本語" } },
            { criterion: 'Span本語', result: undefined },
        ];
        test.each(testCases)('should return "$result" when searching by "$criterion"', (testCase) => {
            expect(languages.search(testCase.criterion)).toEqual(testCase.result);
        })
    });
});
