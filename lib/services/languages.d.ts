import { Dictonary } from '../interfaces';
import { Language } from '../types';
export declare class LanguageService implements Dictonary {
    contains(code: string): boolean;
    get(code: string): Language | undefined;
    search(criterion: string): Language | undefined;
}
