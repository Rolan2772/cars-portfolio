import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {PortfolioItemEntity} from "../entity/PortfolioItemEntity";

import {DataSource} from '../data/DataSource';
import {QueryParams} from '../data/QueryParams';

export interface PortfolioRepository {
    findAll(): Observable<PortfolioItemEntity>;

    findActive(params: QueryParams): Observable<PortfolioItemEntity>;
}

export class DefaultPortfolioRepository implements PortfolioRepository {

    private readonly dataSource: DataSource;

    constructor(dataSource: DataSource) {
        this.dataSource = dataSource;
    }

    findAll(): Observable<PortfolioItemEntity> {
        return this.dataSource.query({priceSort: null});
    }

    findActive(params: QueryParams): Observable<PortfolioItemEntity> {
        return this.dataSource.query(params).pipe(
            filter(item => item.visible)
        );
    }
}