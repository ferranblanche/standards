"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyService = void 0;
const data_1 = require("../data");
class CurrencyService {
    contains(code) {
        return data_1.currencies.find(currency => currency.code === code) ? true : false;
    }
    get(code) {
        return data_1.currencies.find(currency => currency.code === code);
    }
    search(criterion) {
        const regex = RegExp(criterion);
        return data_1.currencies.find(currency => currency.code.match(regex) || currency.name.match(regex) || currency.symbol.match(regex));
    }
}
exports.CurrencyService = CurrencyService;
