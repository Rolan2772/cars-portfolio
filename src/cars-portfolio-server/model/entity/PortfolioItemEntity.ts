import {ImageEntity} from './ImageEntity';
import {PricingEntity} from './PricingEntity';
import {CarEntity} from './CarEntity';

export class PortfolioItemEntity {

    private readonly _visible: boolean;
    private readonly _available: boolean;
    private readonly _car: CarEntity;
    private readonly _id: number;
    private readonly _image: ImageEntity;
    private readonly _pricing: PricingEntity;


    constructor(visible: boolean, available: boolean, car: CarEntity, id: number, image: ImageEntity, pricing: PricingEntity) {
        this._visible = visible;
        this._available = available;
        this._car = car;
        this._id = id;
        this._image = image;
        this._pricing = pricing;
    }


    get visible(): boolean {
        return this._visible;
    }

    get available(): boolean {
        return this._available;
    }

    get car(): CarEntity {
        return this._car;
    }

    get id(): number {
        return this._id;
    }

    get image(): ImageEntity {
        return this._image;
    }

    get pricing(): PricingEntity {
        return this._pricing;
    }
}
