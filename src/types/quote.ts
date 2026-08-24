import type { ClientData } from "./client"

export interface QuoteLine{
    serviceId: string;
    name: string;
    cost: number;
    details?: string;
}

export interface Quote{
    id: string;
    date: string;
    client: ClientData;
    lines: QuoteLine [];
    total: number
}