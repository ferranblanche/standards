import { Languages } from "../src";

describe('Language Service', () => {
    let languages = new Languages;
    describe('Validate 2-letter ISO code', () => {
        const testCases = [
            { code: 'es', valid: true },
            { code: 'en', valid: true },
            { code: 'xx', valid: false },
            { code: 'spanish', valid: false }
        ];
        test.each(testCases)('should return $valid when validating $code is a 2-letter ISO code', (testCase) => {
            expect(languages.validateCode(testCase.code)).toBe(testCase.valid);
        });
    }
    )
});
