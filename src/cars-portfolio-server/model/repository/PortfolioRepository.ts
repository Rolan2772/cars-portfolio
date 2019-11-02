import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {PortfolioItemEntity} from "../entity/PortfolioItemEntity";

import {DataSource} from '../data/DataSource';

export interface PortfolioRepository {

    findAll(): Observable<PortfolioItemEntity>;

    findActive(): Observable<PortfolioItemEntity>;
}

export class DefaultPortfolioRepository implements PortfolioRepository {

    private readonly dataSource: DataSource;

    constructor(dataSource: DataSource) {
        this.dataSource = dataSource;
    }

    findActive(): Observable<PortfolioItemEntity> {
        return this.dataSource.query().pipe(
            filter(item => item.visible)
        );
    }

    findAll(): Observable<PortfolioItemEntity> {
        return this.dataSource.query();
    }


}