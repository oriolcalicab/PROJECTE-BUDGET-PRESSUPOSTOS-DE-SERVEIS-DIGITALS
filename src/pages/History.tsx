import { getAllQuotes } from "../services/quotesService";
import { QuoteRow } from "../components/QuoteRow";
import { useState } from "react";
import { QuoteSearch } from "../components/QuoteSearch";

export const History = () => {
  const [search, setSearch] = useState("");
  const allQuotes = getAllQuotes();

  const filteredQuotes = allQuotes.filter(
    (q) =>
      q.client.fullName.toLowerCase().includes(search.toLowerCase()) ||
      q.client.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">Quote History</h1>
      <QuoteSearch value={search} onChange={setSearch} />

      {filteredQuotes.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b font-semibold">
              <th className="border p-2">Client Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Total (€)</th>
              <th className="border p-2">Detail</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuotes.map((quote) => (
              <QuoteRow key={quote.id} quote={quote} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
