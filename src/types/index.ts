type Term = {
    code: string,
    name: string,
    local: string
}

interface Dictonary {
    contains(code: string): boolean
    get(code: string): Term | undefined
    search(criterion: string): Term | undefined
}

export type Country = Term & {
    currency: string,
    region: string,
    flag: string,
}

export interface CountryDictonary extends Dictonary {
    contains(code: string): boolean
    get(code: string): Country | undefined
    search(criterion: string): Country | undefined
}

export type Language = Term

export interface LanguageDictonary extends Dictonary {
    contains(code: string): boolean
    get(code: string): Language | undefined
    search(criterion: string): Language | undefined
}
