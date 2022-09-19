// const languagesData = require('./languages.data.json');
import { languages } from '../data';
import { Dictonary } from '../interfaces';
import { Language } from '../types';

export class LanguageService implements Dictonary {
    public contains(code: string): boolean {
        return languages.find(language => language.code === code) ? true : false;
    };
    public get(code: string): Language | undefined {
        return languages.find(language => language.code === code);
    };
    public search(criterion: string): Language | undefined {
        let regex = RegExp(criterion);
        return languages.find(language => language.code.match(criterion) || language.name.match(criterion) || language.local.match(criterion));
    };
};