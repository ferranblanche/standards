"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageService = void 0;
const data_1 = require("../data");
class LanguageService {
    contains(code) {
        return data_1.languages.find(language => language.code === code) ? true : false;
    }
    get(code) {
        return data_1.languages.find(language => language.code === code);
    }
    search(criterion) {
        const regex = RegExp(criterion);
        return data_1.languages.find(language => language.code.match(regex) || language.name.match(regex) || language.local.match(regex));
    }
}
exports.LanguageService = LanguageService;
