import {CarEntity, FuelType, GearingType} from "./CarEntity";
import {ImageEntity} from "./ImageEntity";
import {PricingEntity} from "./PricingEntity";
import {PortfolioItemEntity} from "./PortfolioItemEntity";

export const CAR_ENTITY = new CarEntity('Panamera', FuelType.BENZINE, GearingType.AUTOMATIC, '4 E-Hybrid');
export const IMAGE_ENTITY = new ImageEntity('Porsche Panamera 4 E-Hybrid', 'https://assets.cluno.com/2019/02/177_1.jpg');
export const PRICING_ENTITY = new PricingEntity(1999);
export const PORTFOLIO_ENTITY = new PortfolioItemEntity(true, true, CAR_ENTITY, 1, IMAGE_ENTITY, PRICING_ENTITY);

