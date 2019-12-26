import {FuelType, GearingType} from "../../entity/CarEntity";
import {PortfolioItemEntity} from "../../entity/PortfolioItemEntity";

export class PortfolioItemView {

    private readonly _id: number;
    private readonly _model: string;
    private readonly _fuelType: FuelType;
    private readonly _gearingType: GearingType;
    private readonly _version: string;
    private readonly _imageSrc: string;
    private readonly _imageTitle: string;
    private readonly _price: number;

    constructor(portfolioItem: PortfolioItemEntity) {
        this._id = portfolioItem.id;
        this._model = portfolioItem.car.model;
        this._fuelType = portfolioItem.car.fuelType;
        this._gearingType = portfolioItem.car.gearingType;
        this._version = portfolioItem.car.version;
        this._imageSrc = portfolioItem.image.src;
        this._imageTitle = portfolioItem.image.title;
        this._price = portfolioItem.pricing.price;
    }

    get id(): number {
        return this._id;
    }

    get model(): string {
        return this._model;
    }

    get fuelType(): FuelType {
        return this._fuelType;
    }

    get gearingType(): GearingType {
        return this._gearingType;
    }

    get version(): string {
        return this._version;
    }

    get imageSrc(): string {
        return this._imageSrc;
    }

    get imageTitle(): string {
        return this._imageTitle;
    }

    get price(): number {
        return this._price;
    }
}
