import {Observable, of} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';

import {PORTFOLIO} from './portfolio';
import {PortfolioItemEntity} from "../entity/PortfolioItemEntity";
import {CarEntity, FuelType, GearingType} from "../entity/CarEntity";
import {ImageEntity} from "../entity/ImageEntity";
import {PricingEntity} from "../entity/PricingEntity";

export interface DataSource {

    query(): Observable<PortfolioItemEntity>
}

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

export class FileSystemDataSource implements DataSource {

    query(): Observable<PortfolioItemEntity> {
        return of(PORTFOLIO).pipe(
            flatMap<any, any[]>(portfolio => portfolio.Items),
            map(mapPortfolioItem)
        )
    }
}
