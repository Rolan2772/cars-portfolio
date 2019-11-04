import {PortfolioRepository} from './PortfolioRepository'
import {count} from "rxjs/operators";
import {portfolioRepository} from "../../config/TypeFactory";

describe('read portfolio', () => {

    let repository: PortfolioRepository;

    beforeEach(() => {
        repository = portfolioRepository();
    });

    test('read active items', (done) => {
        repository.findActive({priceSort: null}).pipe(count())
            .subscribe({
                next: count => expect(count).toEqual(57),
                error: console.error,
                complete: () => {
                    console.log('done');
                    done();
                }
            });
    });

    test('read all items', (done) => {
        repository.findAll().pipe(count())
            .subscribe({
                next: count => expect(count).toEqual(82),
                error: console.error,
                complete: () => {
                    console.log('done');
                    done();
                }
            });
    });
});