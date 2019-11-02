export enum FuelType {
    BENZINE = 'Benzin',
    DIESEL = 'Diesel'
}

export enum GearingType {
    AUTOMATIC = 'Automatik',
    MANUAL = 'Manual'
}

export class CarEntity {

    private readonly _model: string;
    private readonly _fuelType: FuelType;
    private readonly _gearingType: GearingType;
    private readonly _version: string;


    constructor(model: string,
                fuelType: FuelType,
                gearingType: GearingType,
                version: string) {
        this._model = model;
        this._fuelType = fuelType;
        this._gearingType = gearingType;
        this._version = version;
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
}