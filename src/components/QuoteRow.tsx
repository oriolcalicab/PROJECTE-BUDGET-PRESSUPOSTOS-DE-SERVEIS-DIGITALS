import { Link } from "react-router-dom";
import type { Quote } from "../types/quote";

export function QuoteRow({ quote }: { quote: Quote }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm p-5 flex items-center justify-between gap-4">
      <div>
        <p className="font-semibold">{quote.client.fullName}</p>
        <p className="text-sm text-gray-500">{quote.client.email}</p>
        <p className="text-sm text-gray-500">{quote.client.phone}</p>
      </div>

      <div className="text-sm text-gray-600">
        {quote.lines.map((line) => (
          <p key={line.serviceId}>
            {line.name}
            {line.details ? ` (${line.details})` : ""}
            </p>
        ))}
      </div>

      <div className="text-right">
        <p className="text-xl font-bold">{quote.total} € </p>
        <Link 
         to={`/quote/${quote.id}`}
          className="inline-block mt-1 border border-[#2F9E6E] text-[#2F9E6E] rounded px-3 py-1 text-sm font-medium hover:bg-[#2F9E6E] hover:text-white transition-colors"
        >
          Veure pressupost
        </Link>
      </div>
    </div>
  );
}
