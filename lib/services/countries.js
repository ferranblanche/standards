"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = void 0;
const data_1 = require("../data");
class CountryService {
    contains(code) {
        return data_1.countries.find(country => country.code === code) ? true : false;
    }
    ;
    get(code) {
        return data_1.countries.find(country => country.code === code);
    }
    ;
    search(criterion) {
        let regex = RegExp(criterion);
        return data_1.countries.find(country => country.code.match(criterion) || country.name.match(criterion) || country.local.match(criterion));
    }
    ;
}
exports.CountryService = CountryService;
;
