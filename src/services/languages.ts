// const languagesData = require('./languages.data.json');
import { languages } from '../data';
import { Dictonary } from '../interfaces';

export class LanguageService implements Dictonary {
    public validateCode(code: string): boolean {
        return code in languages ? true : false;
    };
};