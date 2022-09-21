type Term = {
    code: string,
    name: string
}

interface Dictonary {
    contains(code: string): boolean
    get(code: string): Term | undefined
    search(criterion: string): Term | undefined
}

export type Country = Term & {
    local: string,
    currency: string,
    region: string,
    flag: string,
}

export interface CountryDictonary extends Dictonary {
    contains(code: string): boolean
    get(code: string): Country | undefined
    search(criterion: string): Country | undefined
}

export type Currency = Term & {
    decimals: number,
    symbol: string
}

export interface CurrencyDictonary extends Dictonary {
    contains(code: string): boolean
    get(code: string): Currency | undefined
    search(criterion: string): Currency | undefined
}

export type Language = Term & {
    local: string
}

export interface LanguageDictonary extends Dictonary {
    contains(code: string): boolean
    get(code: string): Language | undefined
    search(criterion: string): Language | undefined
}
