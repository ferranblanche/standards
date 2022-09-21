import { Country, Currency, Language } from '../types';

import * as countriesData from './countries.json';
import * as currenciesData from './currencies.json';
import * as languagesData from './languages.json';

const countries: Country[] = countriesData.countries;
const currencies: Currency[] = currenciesData.currencies;
const languages: Language[] = languagesData.languages;

export { countries, currencies, languages };