// const languagesData = require('./languages.data.json');
import { languages } from '../data';
import { Dictonary } from '../interfaces';

export class LanguageService implements Dictonary {
    public contains(code: string): boolean {
        return languages.find(language => language.code === code) ? true : false;
    };
};