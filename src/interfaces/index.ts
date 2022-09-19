import { Language } from "../types"

export interface Dictonary {
    contains(code: string): boolean
    get(code: string): Language | undefined
    search(criterion: string): Language | undefined
}