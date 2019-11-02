import {FuelType, GearingType} from "../../entity/CarEntity";
import {PortfolioItemEntity} from "../../entity/PortfolioItemEntity";

export class PortfolioItemView {

    private readonly _id: number;
    private readonly _model: string;
    private readonly _fueltype: FuelType;
    private readonly _gearingType: GearingType;
    private readonly _version: string;
    private readonly _imageSrc: string;

    constructor(portfolioItem: PortfolioItemEntity) {
        this._id = portfolioItem.id;
        this._model = portfolioItem.car.model;
        this._fueltype = portfolioItem.car.fuelType;
        this._gearingType = portfolioItem.car.gearingType;
        this._version = portfolioItem.car.version;
        this._imageSrc = portfolioItem.image.src;
    }

    get id(): number {
        return this._id;
    }

    get model(): string {
        return this._model;
    }

    get fueltype(): FuelType {
        return this._fueltype;
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
}
