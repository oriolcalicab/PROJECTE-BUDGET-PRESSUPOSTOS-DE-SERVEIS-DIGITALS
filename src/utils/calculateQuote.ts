import type { WebConfig, QuoteLine } from "../types/service";

interface CalculateInput{
    selectedServices: string[];
    webConfing?: WebConfig;
}

interface CalculateOutput{
    lines: QuoteLine;
    total: number
}


export function calculateQuote ({selectedServices, webConfing}: CalculateInput): CalculateOutput {
    const lines: QuoteLine[] = [];
    const total = 0;
    return { lines, total}
}
