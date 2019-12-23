export type Pricing = {
    price: number
}

export type Image = {
    src: string,
    title: string
}

export type Car = {
    model: string,
    version?: string
}

export type PortfolioItem = {
    available: boolean,
    visible: boolean,
    id: string,
    car: Car,
    images: Image[],
    pricing: Pricing
}