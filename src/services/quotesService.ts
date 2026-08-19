import type { Quote } from "../types/quote";

const STOREGE_KEY = "quotes";

function readAll(): Quote[] {
  const raw = localStorage.getItem(STOREGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveQuote(quote: Quote): void {
  const all = readAll();
  all.push(quote);
  localStorage.setItem(STOREGE_KEY, JSON.stringify(all));
}

export function getQuoteById(id: string): Quote | undefined {
  const all = readAll();
  return all.find((quote) => quote.id === id);
}

export  function getAllQuotes(): Quote[] {
  return readAll().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}