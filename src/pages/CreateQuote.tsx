import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceSelector } from "../components/ServiceSelector";
import { ClientForm } from "../components/ClientForm";
import { QuoteSummary } from "../components/QuoteSummary";
import { calculateQuote } from "../utils/calculateQuote";
import { generateId } from "../utils/generateId";
import { saveQuote } from "../services/quotesService";
import { isValidEmail, isValidPhone, isRequiredFieldValid } from "../utils/validations";
import type { WebConfig } from "../types/service";
import type { ClientData } from "../types/client";

export function CreateQuote() {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [webConfig, setWebConfig] = useState<WebConfig>({
    pages: 0,
    languages: 0,
  });
  const [clientData, setClientData] = useState<ClientData>({
    fullName: "",
    email: "",
    phone: "",
  });

  function handleToggleService(id: string) {
    setSelectedServices((prev) => {
      const isRemoving = prev.includes(id);
      if (id === "web" && isRemoving) {
        setWebConfig({ pages: 1, languages: 0 });
      }
      return isRemoving ? prev.filter((serviceId) => serviceId !== id) : [...prev, id];
    });
  }
  const { lines, total } = calculateQuote({ selectedServices, webConfig });

  const isFormValid =
    selectedServices.length > 0 &&
    isRequiredFieldValid(clientData.fullName) &&
    isValidEmail(clientData.email) &&
    isValidPhone(clientData.phone);

  function handleGenerate() {
    const id = generateId();
    saveQuote({
      id,
      date: new Date().toISOString(),
      client: clientData,
      lines,
      total,
    });

    setSelectedServices([]);
    setWebConfig({ pages: 0, languages: 0 });
    setClientData({ fullName: "", email: "", phone: "" });
    navigate(`/quote/${id}`);
  }

  return(
    <div className="max-w-xl mx-auto p-4 md:max-w-2xl md:p-6 lg:max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">Generate your quote</h1>
        <ServiceSelector
            selectedServices={selectedServices}
            onToggleService={handleToggleService}
            webConfig={webConfig}
            onChangeWebConfig={setWebConfig}
        />

       
        <ClientForm 
            clientData={clientData}
            onChangeClientData={setClientData}
        />

        <QuoteSummary lines={lines} total={total} />

        <button
            className="mt-6 w-full md:w-full md:bg-[#2F9E6E]  lg:w-full lg:bg-[#2F9E6E] hover:bg-[#268057] bg-[#2F9E6E] text-white rounded py-3 font-semibold disabled:opacity-40"
            onClick={handleGenerate}
            disabled={!isFormValid}
        >
            Generate Quote
        </button>
    </div>
  );


}


// "bg-[#2F9E6E] hover:bg-[#268057]"
//       : "bg-[#2F9E6E]/40 cursor-not-allowed"