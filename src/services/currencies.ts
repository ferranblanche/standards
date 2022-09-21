import { currencies } from '../data';
import { Currency, CurrencyDictonary } from '../types';

export class CurrencyService implements CurrencyDictonary {
    public contains(code: string): boolean {
        return currencies.find(currency => currency.code === code) ? true : false;
    }
    public get(code: string): Currency | undefined {
        return currencies.find(currency => currency.code === code);
    }
    public search(criterion: string): Currency | undefined {
        const regex = RegExp(criterion);
        return currencies.find(currency => currency.code.match(regex) || currency.name.match(regex) || currency.symbol.match(regex));
    }
}
