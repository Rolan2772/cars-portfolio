import {PortfolioItemEntity} from "../entity/PortfolioItemEntity";
import {CarEntity, FuelType, GearingType} from "../entity/CarEntity";
import {ImageEntity} from "../entity/ImageEntity";
import {PricingEntity} from "../entity/PricingEntity";
import {Car, Image, PortfolioItem, Pricing} from "./types/PortfolioItem";

const convertCar = (car: Car): CarEntity => {
    return new CarEntity(car.model,
        FuelType.BENZINE, //@TODO mapping
        GearingType.AUTOMATIC, //@TODO mapping
        car.version || ''
    )
};

const convertImages = (images: Image[]): ImageEntity => {
    return new ImageEntity(images[0].title, images[0].src);
};

const convertPricing = (pricing: Pricing): PricingEntity => {
    return new PricingEntity(pricing.price);
};

export const convertDbItem = (item: PortfolioItem): PortfolioItemEntity => {
    return new PortfolioItemEntity(item.visible,
        item.available,
        convertCar(item.car),
        parseInt(item.id, 10),
        convertImages(item.images),
        convertPricing(item.pricing));
};