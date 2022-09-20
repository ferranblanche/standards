import { Languages } from "../src";

describe('Language Service', () => {
    const languages = new Languages;

    describe('Validate 2-letter ISO req', () => {
        const testCases = [
            { req: 'es', res: true },
            { req: 'en', res: true },
            { req: 'xx', res: false },
            { req: 'spanish', res: false },
        ];
        test.each(testCases)('should return "$res" when validating "$req" as a 2-letter ISO req', (testCase) => {
            expect(languages.contains(testCase.req)).toBe(testCase.res);
        });
    });

    describe('Get Language by 2-letter ISO req', () => {
        const testCases = [
            { req: 'es', res: { "code": "es", "name": "Spanish", "local": "Español" } },
            { req: 'ja', res: { "code": "ja", "name": "Japanese", "local": "日本語" } },
            { req: 'xx', res: undefined },
            { req: 'spanish', res: undefined },
        ];
        test.each(testCases)('should return "$res" when getting "$req" information', (testCase) => {
            expect(languages.get(testCase.req)).toEqual(testCase.res);
        });
    });

    describe('Search Language by text', () => {
        const testCases = [
            { criterion: 'nl', res: { "code": "nl", "name": "Dutch", "local": "Nederlands" } },
            { criterion: 'Span', res: { "code": "es", "name": "Spanish", "local": "Español" } },
            { criterion: '語', res: { "code": "ja", "name": "Japanese", "local": "日本語" } },
            { criterion: 'Span本語', res: undefined },
        ];
        test.each(testCases)('should return "$res" when searching by "$criterion"', (testCase) => {
            expect(languages.search(testCase.criterion)).toEqual(testCase.res);
        });
    });
});
