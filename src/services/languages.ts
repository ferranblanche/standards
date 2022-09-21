import { languages } from '../data';
import { Language, LanguageDictonary } from '../types';

export class LanguageService implements LanguageDictonary {
    public contains(code: string): boolean {
        return languages.find(language => language.code === code) ? true : false;
    }
    public get(code: string): Language | undefined {
        return languages.find(language => language.code === code);
    }
    public search(criterion: string): Language | undefined {
        const regex = RegExp(criterion);
        return languages.find(language => language.code.match(regex) || language.name.match(regex) || language.local.match(regex));
    }
}
