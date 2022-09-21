import { Currency, CurrencyDictonary } from '../types';
export declare class CurrencyService implements CurrencyDictonary {
    contains(code: string): boolean;
    get(code: string): Currency | undefined;
    search(criterion: string): Currency | undefined;
}
