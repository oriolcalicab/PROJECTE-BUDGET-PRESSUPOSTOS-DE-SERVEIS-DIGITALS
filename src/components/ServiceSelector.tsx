import servicesData from "../data/services.json";
import { WebConfigurator } from "./WebConfigurator";
import type { WebConfig } from "../types/service";

interface Props {
  selectedServices: string[];
  onToggleService: (id: string) => void;
  webConfig?: WebConfig;
  onChangeWebConfig?: (config: WebConfig) => void;
}

export function ServiceSelector({
  selectedServices,
  onToggleService,
  webConfig,
  onChangeWebConfig,
}: Props) {
  const services = Object.values(servicesData);

  return (
    <main className="space-y-4">
       {services.map((service) => {
        const isSelected = selectedServices.includes(service.id);
        const isWeb = service.id === "web";

        return (
          <div
            key={service.id}
            className={`rounded-2xl bg-white shadow-sm border p-5 transition-colors ${
              isSelected
                ? "border-[#2F9E6E] border-[3px]"
                : "border-transparent"
            }`}
          >
            <label
              htmlFor={service.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 cursor-pointer"
            >
              <div>
                <p className="font-semibold text-base text-gray-900">
                  {service.name}
                </p>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 sm:shrink-0">
                <span className="text-xl font-bold text-gray-900">
                  {service.basePrice} €
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    id={service.id}
                    checked={isSelected}
                    onChange={() => onToggleService(service.id)}
                    aria-checked={isSelected}
                    className="h-4 w-4 rounded accent-[#2F9E6E]"
                  />
                  Afegir
                </span>
              </div>
            </label>

            {isWeb && isSelected && webConfig && (
              <WebConfigurator
                isVisible={true}
                webConfig={webConfig}
                onChangeWebConfig={onChangeWebConfig ?? (() => {})}
              />
            )}
          </div>
        );
      })}
    </main>
  );
}
