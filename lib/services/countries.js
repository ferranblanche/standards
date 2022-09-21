"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = void 0;
const data_1 = require("../data");
class CountryService {
    contains(code) {
        return data_1.countries.find(country => country.code === code) ? true : false;
    }
    get(code) {
        return data_1.countries.find(country => country.code === code);
    }
    search(criterion) {
        const regex = RegExp(criterion);
        return data_1.countries.find(country => country.code.match(regex) || country.name.match(regex) || country.local.match(regex));
    }
}
exports.CountryService = CountryService;
