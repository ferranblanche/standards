"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Languages = exports.Currencies = exports.Countries = void 0;
const countries_1 = require("./services/countries");
Object.defineProperty(exports, "Countries", { enumerable: true, get: function () { return countries_1.CountryService; } });
const currencies_1 = require("./services/currencies");
Object.defineProperty(exports, "Currencies", { enumerable: true, get: function () { return currencies_1.CurrencyService; } });
const languages_1 = require("./services/languages");
Object.defineProperty(exports, "Languages", { enumerable: true, get: function () { return languages_1.LanguageService; } });
