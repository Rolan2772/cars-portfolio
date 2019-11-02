import {Observable} from 'rxjs/index';
import {PortfolioItemEntity} from '../entity/PortfolioItemEntity';
import {PortfolioRepository} from '../repository/PortfolioRepository'

export interface PortfolioService {

    findActiveItems(): Observable<PortfolioItemEntity>;
}

export class DefaultPortfolioService implements PortfolioService {

    readonly portfolioRepository: PortfolioRepository;

    constructor(portfolioRepository: PortfolioRepository) {
        this.portfolioRepository = portfolioRepository;
    }

    findActiveItems(): Observable<PortfolioItemEntity> {
        return this.portfolioRepository.findActive();
    }
}