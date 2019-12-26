import {DefaultPortfolioService, PortfolioService} from "./PortfolioService";
import {PortfolioRepository} from "../repository/PortfolioRepository";
import {of} from "rxjs/index";
import {PORTFOLIO_ENTITY} from "../entity/TestData";

describe('find portfolio items', () => {

    let service: PortfolioService;
    let repository: PortfolioRepository;

    beforeEach(() => {
        const RepositoryMock = jest.fn<PortfolioRepository, any[]>(() => ({
            findActive: jest.fn().mockReturnValueOnce(of(PORTFOLIO_ENTITY)),
            findAll: jest.fn()
        }));
        repository = new RepositoryMock();
        service = new DefaultPortfolioService(repository);
    });

    test('find all active items', (done) => {
        service.findActiveItems({priceSort: null})
            .subscribe({
                next: () => {
                },
                error: console.error,
                complete: () => {
                    expect(repository.findActive).toHaveBeenCalled();
                    done();
                }
            });
    });
});