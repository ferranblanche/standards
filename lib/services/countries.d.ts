import { Country, CountryDictonary } from '../types';
export declare class CountryService implements CountryDictonary {
    contains(code: string): boolean;
    get(code: string): Country | undefined;
    search(criterion: string): Country | undefined;
}
