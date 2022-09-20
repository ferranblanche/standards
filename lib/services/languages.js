"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageService = void 0;
// const languagesData = require('./languages.data.json');
const data_1 = require("../data");
class LanguageService {
    contains(code) {
        return data_1.languages.find(language => language.code === code) ? true : false;
    }
    ;
    get(code) {
        return data_1.languages.find(language => language.code === code);
    }
    ;
    search(criterion) {
        let regex = RegExp(criterion);
        return data_1.languages.find(language => language.code.match(criterion) || language.name.match(criterion) || language.local.match(criterion));
    }
    ;
}
exports.LanguageService = LanguageService;
;
