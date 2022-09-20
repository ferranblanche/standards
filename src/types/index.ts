type Term = {
    code: string,
    name: string,
    local: string
}

export interface Dictonary {
    contains(code: string): boolean
    get(code: string): Term | undefined
    search(criterion: string): Term | undefined
}

export type Language = Term

export interface LanguageDictonary extends Dictonary {
    contains(code: string): boolean
    get(code: string): Language | undefined
    search(criterion: string): Language | undefined
}
