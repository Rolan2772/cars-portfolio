// @TODO: share types between client and server
export enum FuelType {
    BENZINE = 'Benzin',
    DIESEL = 'Diesel'
}

export enum GearingType {
    AUTOMATIC = 'Automatik',
    MANUAL = 'Manual'
}

export class PortfolioItemView {

    // @TODO: getter access from component
    public readonly _id: number;
    public readonly _model: string;
    public readonly _fuelType: FuelType;
    public readonly _gearingType: GearingType;
    public readonly _version: string;
    public readonly _imageSrc: string;
    public readonly _imageTitle: string;
    public readonly _price: number;

    constructor(id: number, model: string, fueltype: FuelType, gearingType: GearingType, version: string, imageSrc: string, imageTitle: string, price: number) {
        this._id = id;
        this._model = model;
        this._fuelType = fueltype;
        this._gearingType = gearingType;
        this._version = version;
        this._imageSrc = imageSrc;
        this._imageTitle = imageTitle;
        this._price = price;
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

export const EMPTY_PORTFOLIO_ITEM = new PortfolioItemView(0, '', FuelType.BENZINE, GearingType.MANUAL, '', '', '', 0);

