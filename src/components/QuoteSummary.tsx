import type { QuoteLine } from "../types/quote";

interface Props {
  lines: QuoteLine[];
  total: number;
}

export function QuoteSummary({ lines, total }: Props) {
  if (lines.length === 0) return null;

  return (
    <div className="border-t pt-4 mt-4">
      <h3 className="text-lg font-semibold mb-2">Quote summary</h3>
      <ul className="space-y-1">
        {lines.map((line) => (
          <li key={line.serviceId} className="flex justify-between items-start">
            <div>
              <p>{line.name}</p>
              {line.details && (
                <p className="text-sm text-gray-500">{line.details}</p>
              )}
            </div>
            <span>{line.cost.toFixed(2)} €</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between font-bold mt-2">
        <span>Total:</span>
        <span>{total.toFixed(2)} €</span>
      </div>
    </div>
  );
}
