export interface Service{
    id: string;
    name: string;
    basePrice: number;
    priceUnit?: number
}

export interface WebConfig{
    pages: number;
    languages: number
}