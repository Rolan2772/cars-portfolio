// @TODO: share types between client and server
export enum SortType {
    asc, desc
}

export interface QueryParams {
    priceSort: SortType | null
}