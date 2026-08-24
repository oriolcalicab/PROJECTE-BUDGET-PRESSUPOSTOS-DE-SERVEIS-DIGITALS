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
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-4">Quote history</h1>
      <QuoteSearch value={search} onChange={setSearch} />

      {filteredQuotes.length === 0 ? (
        <p className="mt-4 text-gray-500">No results found.</p>
      ) : (
        <div className="overflow-x-auto mt-4">
          {/* Vista taula (pantalles md i superiors) */}
          <table className="w-full text-left border-collapse hidden md:table">
            <thead>
              <tr className="border-b font-semibold">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Date</th>
                <th className="p-2">Total</th>
                <th className="p-2">Detail</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuotes.map((q) => (
                <QuoteRow key={q.id} quote={q} />
              ))}
            </tbody>
          </table>

          {/* Mobile view (small screens) */}
          <div className="md:hidden space-y-3">
            {filteredQuotes.map((q) => (
              <div
                key={q.id}
                className="border rounded-lg p-4 shadow-sm bg-white"
              >
                <p className="font-semibold text-lg">{q.client.fullName}</p>
                <p className="text-sm text-gray-500">{q.client.email}</p>
                <p className="text-sm text-gray-500">{q.client.phone}</p>

                
                {q.date && (
                  <p className="text-xs text-gray-400 mt-1">{q.date}</p>
                )}

                <div className="flex justify-between items-center mt-3 pt-2 border-t">
                  <span className="font-bold text-lg">{q.total} €</span>
                 
                  <a
                    href={`/quote/${q.id}`}
                    className="text-blue-600 hover:text-blue-800 underline text-sm font-medium"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
