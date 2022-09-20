import { Language, LanguageDictonary } from '../types';
export declare class LanguageService implements LanguageDictonary {
    contains(code: string): boolean;
    get(code: string): Language | undefined;
    search(criterion: string): Language | undefined;
}
