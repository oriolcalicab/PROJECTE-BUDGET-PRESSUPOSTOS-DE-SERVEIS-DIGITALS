export interface Service{
    id: string;
    name: string;
    basePrice: number;
    priceUnit?: number
}

export interface WebConfig{
    page: number;
    lenguages: number
}