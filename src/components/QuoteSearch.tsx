interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const QuoteSearch = ({ value, onChange }: Props) => {
  return (
    <div className="mb-4">
      <label htmlFor="search" className="block mb-1">
        Cerca per nom o correu electrònic
      </label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-3 py-2 w-full"
      />
    </div>
  );
};
