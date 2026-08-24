import { useParams } from "react-router-dom";
import { getQuoteById } from "../services/quotesService";

export const QuoteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const quote = id ? getQuoteById(id) : null;

  if (!quote) {
    return (
      <div className="max-w-xl mx-auto p-4 md:p-6 lg:max-w-2xl">
        <p role="alert">This quote could not be found</p>
      </div>
    );
  }
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">Quote</h1>
      <p className="text-gray-500 mb-4">
        {new Date(quote.date).toLocaleDateString()}
      </p>

      <section className="mb-4">
        <h2 className="font-semibold">Client details</h2>
        <p>{quote.client.fullName}</p>
        <p>{quote.client.email}</p>
        <p>{quote.client.phone}</p>
      </section>

      <section>
        <h2 className="font-semibold mb-2">Quote items</h2>
        <ul className="space-y-1">
          {quote.lines.map((line) => (
            <li key={line.serviceId}>
              <p>{line.name}</p>
              <p>{line.cost} €</p>
            </li>
          ))}
        </ul>
        <p className="font-bold text-xl md:text-2xl mt-3 flex justify-between">
          <span>Total:</span>
          <span>{quote.total} €</span>
        </p>
      </section>
    </div>
  );
};
