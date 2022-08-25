// const languagesData = require('./languages.data.json');
import * as languagesData from './languages.data.json';

export class LanguageService {
    public isValidCode(code: string): boolean {
        return code in languagesData ? true : false;
    };
};