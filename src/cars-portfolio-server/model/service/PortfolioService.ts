import {Observable} from 'rxjs/index';
import {PortfolioItemEntity} from '../entity/PortfolioItemEntity';
import {PortfolioRepository} from '../repository/PortfolioRepository'
import {QueryParams} from "../data/QueryParams";

export interface PortfolioService {
    findActiveItems(params: QueryParams): Observable<PortfolioItemEntity>;
}

export class DefaultPortfolioService implements PortfolioService {

    private readonly portfolioRepository: PortfolioRepository;

    constructor(portfolioRepository: PortfolioRepository) {
        this.portfolioRepository = portfolioRepository;
    }

    findActiveItems(params: QueryParams): Observable<PortfolioItemEntity> {
        return this.portfolioRepository.findActive(params);
    }
}