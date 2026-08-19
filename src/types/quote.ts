import type { ClientData } from "./client"

export interface QuoteLine{
    serviceId: string;
    name: string;
    cost: number
}

export interface Quote{
    id: string;
    date: string;
    client: ClientData;
    lines: QuoteLine [];
    total: number
}