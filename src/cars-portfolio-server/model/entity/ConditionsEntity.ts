export class ConditionsEntity {

    private readonly _minimumAge: number;
    private readonly _maximumAge: number;
    private readonly _minLicenseDuration: number;

    constructor(minimumAge: number, maximumAge: number, minLicenseDuration: number) {
        this._minimumAge = minimumAge;
        this._maximumAge = maximumAge;
        this._minLicenseDuration = minLicenseDuration;
    }

    get minimumAge(): number {
        return this._minimumAge;
    }

    get maximumAge(): number {
        return this._maximumAge;
    }

    get minLicenseDuration(): number {
        return this._minLicenseDuration;
    }
}