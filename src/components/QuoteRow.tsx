import { Link } from "react-router-dom";
import type { Quote } from "../types/quote";

export function QuoteRow({ quote }: { quote: Quote }) {
  return (
    <tr className="border-b">
      <td className="p-2">{quote.client.fullName}</td>
      <td className="p-2">{quote.client.email}</td>
      <td className="p-2">{quote.client.phone}</td>
      <td className="p-2">{new Date(quote.date).toLocaleDateString()}</td>
      <td className="p-2">{quote.total} €</td>
      <td className="p-2">
        <Link
          to={`/quote/${quote.id}`}
          className="inline-block border border-[#2F9E6E] text-[#2F9E6E] rounded px-3 py-1 text-sm font-medium hover:bg-[#2F9E6E] hover:text-white transition-colors"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
}
