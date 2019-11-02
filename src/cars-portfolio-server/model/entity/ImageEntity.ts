export class ImageEntity {

    private readonly _title: string;
    private readonly _src: string;

    constructor(title: string, src: string) {
        this._title = title;
        this._src = src;
    }

    get title(): string {
        return this._title;
    }

    get src(): string {
        return this._src;
    }
}