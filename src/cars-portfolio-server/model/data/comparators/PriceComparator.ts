import {SortType} from "../QueryParams";
import {PortfolioItem} from "../types/PortfolioItem";

export const priceComparator = (first: PortfolioItem, second: PortfolioItem, sortType: SortType): number => {
    switch (sortType) {
        case SortType.asc.valueOf():
            return first.pricing.price - second.pricing.price;
        case SortType.desc.valueOf():
            return second.pricing.price - first.pricing.price;
        default:
            throw new Error(`Unsupported SortType: ${sortType}`);
    }
};

export const sort = (items: PortfolioItem[], priceSort: SortType): PortfolioItem[] => {
    items.sort((a, b) => priceComparator(a, b, priceSort));
    return items;
};