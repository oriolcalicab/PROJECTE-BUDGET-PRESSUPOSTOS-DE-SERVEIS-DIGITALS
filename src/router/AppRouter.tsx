import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CreateQuote } from "../pages/CreateQuote";
import { QuoteDetail } from "../pages/QuoteDetail";


export function AppRouter() {
  return (
    <BrowserRouter>
      <nav className="p-4 border-b flex gap-4">
        <Link to="/">New quote</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CreateQuote />} />
          <Route path="/quote/:id" element={<QuoteDetail />} />
        </Routes>
    </BrowserRouter>
  );
}
