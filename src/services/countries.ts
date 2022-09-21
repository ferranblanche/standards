import { countries } from '../data';
import { Country, CountryDictonary } from '../types';

export class CountryService implements CountryDictonary {
    public contains(code: string): boolean {
        return countries.find(country => country.code === code) ? true : false;
    }
    public get(code: string): Country | undefined {
        return countries.find(country => country.code === code);
    }
    public search(criterion: string): Country | undefined {
        const regex = RegExp(criterion);
        return countries.find(country => country.code.match(regex) || country.name.match(regex) || country.local.match(regex));
    }
}
