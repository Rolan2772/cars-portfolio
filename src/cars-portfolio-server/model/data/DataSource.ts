import {Observable, of} from 'rxjs';
import {flatMap, map, tap} from 'rxjs/operators';

import {PORTFOLIO} from './portfolio';
import {PortfolioItemEntity} from "../entity/PortfolioItemEntity";
import {CarEntity, FuelType, GearingType} from "../entity/CarEntity";
import {ImageEntity} from "../entity/ImageEntity";
import {PricingEntity} from "../entity/PricingEntity";
import {QueryParams, SortType} from "./QueryParams";

export interface DataSource {
    query(params: QueryParams): Observable<PortfolioItemEntity>
}

export class FileSystemDataSource implements DataSource {

    query(params: QueryParams): Observable<PortfolioItemEntity> {
        return of(PORTFOLIO).pipe(
            tap(portfolio => {
                if (params.priceSort !== null) {
                    portfolio.Items.sort((a, b) => priceComparator(a, b, params.priceSort));
                }
                return portfolio;
            }),
            flatMap<any, any[]>(portfolio => portfolio.Items),
            map(mapPortfolioItem)
        )
    }
}

const priceComparator = (va: any, vb: any, sortType: SortType | null): number => {
    const a = parseInt(va.pricing.M.price.N, 10);
    const b = parseInt(vb.pricing.M.price.N, 10);
    switch (sortType) {
        case SortType.asc.valueOf():
            return a - b;
        case SortType.desc.valueOf():
            return b - a;
        default:
            throw new Error(`Unsupported SortType: ${sortType}`);
    }
};

const mapCar = (carData: any): CarEntity => {
    const fuelType: string = carData.M.fueltype.S;
    const gearingType: string = carData.M.gearingType.S;
    return new CarEntity(carData.M.model.S,
        FuelType.BENZINE, //@TODO mapping
        GearingType.AUTOMATIC, //@TODO mapping
        carData.M.version && carData.M.version.S || ''
    )
};

const mapImages = (imageData: any): ImageEntity => {
    const firstImage: any = imageData.L[0];
    return new ImageEntity(firstImage.M.title.S, firstImage.M.src.S);
};

const mapPricing = (pricingData: any): PricingEntity => {
    return new PricingEntity(pricingData.M.price.N);
};

const mapPortfolioItem = (item: any): PortfolioItemEntity => {
    const carEntity = mapCar(item.car);
    const imageEntity = mapImages(item.images);
    const pricingEntity = mapPricing(item.pricing);
    return new PortfolioItemEntity(item.visible.BOOL,
        item.available.BOOL,
        carEntity,
        item.id.S,
        imageEntity,
        pricingEntity)
};
