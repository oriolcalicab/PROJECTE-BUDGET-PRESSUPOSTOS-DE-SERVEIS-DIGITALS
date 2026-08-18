import type { WebConfig } from "../types/service";
import type { QuoteLine } from "../types/quote";   
import serviceData from "../data/services.json";

interface CalculateInput {
  selectedServices: string[];
  webConfing?: WebConfig;
}

interface CalculateOutput {
  lines: QuoteLine[];
  total: number;
}

interface ServiceData {
  name: string;
  basePrice: number;
  priceUnit?: number;
}

export function calculateQuote({
  selectedServices,
  webConfing,
}: CalculateInput): CalculateOutput {
  const lines: QuoteLine[] = [];

  selectedServices.forEach((id) => {
    const service = (serviceData as Record<string, ServiceData>)[id];
    if (!service) return;

    if (id === "web" && webConfing) {
      const pages = webConfing.pages ?? 0;
      const languages = webConfing.languages ?? 0;
      const customizationCost = (pages + languages) * (service.priceUnit ?? 0);
      lines.push({
        serviceId: id,
        name: service.name,
        cost: service.basePrice + customizationCost,
      }); // Example calculation for customization cos
    } else {
      lines.push({
        serviceId: id,
        name: service.name,
        cost: service.basePrice,
      });
    }
  });

  const total = lines.reduce((sum, line) => sum + line.cost, 0);

  return { lines, total };  
}
