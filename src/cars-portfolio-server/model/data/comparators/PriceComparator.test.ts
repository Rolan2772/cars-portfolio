import {priceComparator} from "./PriceComparator";
import {SortType} from "../QueryParams";
import {PortfolioItem} from "../types/PortfolioItem";

describe('Price comparator', () => {

    const item1: PortfolioItem = {
        available: true,
        visible: true,
        id: '1',
        car: {model: 'Tesla', version: 'Type S'},
        images: [{title: '', src: ''}],
        pricing: {price: 1}
    };

    const item2: PortfolioItem = {
        available: true,
        visible: true,
        id: '2',
        car: {model: 'Tesla', version: 'Standard'},
        images: [{title: '', src: ''}],
        pricing: {price: 2}
    };

    test('should sort ascending', () => {
        const items = [item1, item2];

        items.sort((a, b) => priceComparator(a, b, SortType.asc));

        expect(items[0].id).toEqual('1');
        expect(items[1].id).toEqual('2');
    });

    test('should sort descending', () => {
        const items = [item1, item2];

        items.sort((a, b) => priceComparator(a, b, SortType.desc));

        expect(items[0].id).toEqual('2');
        expect(items[1].id).toEqual('1');
    });
});