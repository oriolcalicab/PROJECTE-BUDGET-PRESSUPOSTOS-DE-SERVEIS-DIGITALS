import servicesData from "../data/services.json";

interface Props {
    selectedServices: string[];
    onToggleService: (id: string) => void;
}

export function ServiceSelector({selectedServices, onToggleService}: Props){
    const services = Object.values(servicesData);

    return(
        <main className="space-y-3">
            <h1 className="text-lg font-semibold mb-2">Select your services</h1>
            {services.map((service) => (
                <div key={service.id} className="flex items-center gap-3">
                    <input type="checkbox"
                    id={service.id}
                    checked= {selectedServices.includes(service.id)}
                    onChange={()=> onToggleService(service.id)}
                    aria-checked={selectedServices.includes(service.id)}
                    className="h-5 w-5" 
                    />
                    <label htmlFor="service.id" className="flex-1">
                        {service.name}{" "}
                        <span className="text-gray-500 text-sm">
                            (from {service.basePrice} €)
                        </span>
                    </label>
                </div>
            ))}
        </main>
    )
}