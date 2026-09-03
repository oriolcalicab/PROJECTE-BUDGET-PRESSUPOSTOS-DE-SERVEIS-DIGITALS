import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceSelector } from "../components/ServiceSelector";
import { ClientForm } from "../components/ClientForm";
import { QuoteSearch } from "../components/QuoteSearch";
import { QuoteRow } from "../components/QuoteRow";
import { calculateQuote } from "../utils/calculateQuote";
import { generateId } from "../utils/generateId";
import { saveQuote, getAllQuotes } from "../services/quotesService";
import { isValidEmail, isValidPhone, isRequiredFieldValid } from "../utils/validations";
import type { WebConfig } from "../types/service";
import type { ClientData } from "../types/client";

export function Home() {
  const navigate = useNavigate();

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [webConfig, setWebConfig] = useState<WebConfig>({ pages: 0, languages: 0 });
  const [clientData, setClientData] = useState<ClientData>({
    fullName: "",
    email: "",
    phone: "",
  });

 
  const [search, setSearch] = useState("");

  function handleToggleService(id: string) {
    setSelectedServices((prev) => {
      const isRemoving = prev.includes(id);

      if (id === "web" && !isRemoving) {
        setWebConfig({ pages: 1, languages: 0 });
      }

      return isRemoving ? prev.filter((s) => s !== id) : [...prev, id];
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

  const allQuotes = getAllQuotes();
  const filteredQuotes = allQuotes.filter(
    (q) =>
      q.client.fullName.toLowerCase().includes(search.toLowerCase()) ||
      q.client.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 space-y-10">

      <img src="/src/assets/images/banner.png" alt="itacademy - Aconsegueix la millor qualitat" className="w-full object-cover " />
  
      <ServiceSelector
        selectedServices={selectedServices}
        onToggleService={handleToggleService}
        webConfig={webConfig}
        onChangeWebConfig={setWebConfig}
      />

      <p className="text-right font-semibold text-lg">
        Preu pressupostat:{" "}
        <span className="text-2xl font-bold">{total} €</span>
      </p>

      <div className="rounded-2xl bg-white shadow-sm p-5">
        <h2 className="font-semibold text-lg mb-4">Demanar pressupost</h2>
        <ClientForm clientData={clientData} onChangeClientData={setClientData} />
        <button
          onClick={handleGenerate}
          disabled={!isFormValid}
          className={`mt-4 w-full md:w-auto md:px-8 py-3 rounded font-semibold text-white transition-colors ${
            isFormValid
              ? "bg-[#2F9E6E] hover:bg-[#268057]"
              : "bg-[#2F9E6E]/40 cursor-not-allowed"
          }`}
        >
          Sol·licitar pressupost →
        </button>
      </div>

     
      <div>
        <h2 className="font-semibold text-lg mb-4">Pressupostos en curs</h2>
        <QuoteSearch value={search} onChange={setSearch} />

        {filteredQuotes.length === 0 ? (
          <p className="text-gray-500">No results found.</p>
        ) : (
          <div className="space-y-3">
            {filteredQuotes.map((q) => (
              <QuoteRow key={q.id} quote={q} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}