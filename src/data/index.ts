import { Country, Language } from '../types';

import * as countriesData from './countries.json';
import * as languagesData from './languages.json';

const countries: Country[] = countriesData.countries;
const languages: Language[] = languagesData.languages;

export { countries, languages };