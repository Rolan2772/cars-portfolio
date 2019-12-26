export enum SortType {
    asc, desc
}

export interface QueryParams {
    priceSort: SortType | null
}