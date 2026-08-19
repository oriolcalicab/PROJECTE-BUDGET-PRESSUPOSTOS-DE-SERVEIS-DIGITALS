import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CreateQuote } from "../pages/CreateQuote";
import { QuoteDetail } from "../pages/QuoteDetail";
import { History } from "../pages/History";


export function AppRouter() {
  return (
    <BrowserRouter>
      <nav className="p-4 border-b flex gap-4">
        <Link to="/">New quote</Link>
        <Link to="/history">Quote History</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CreateQuote />} />
        <Route path="/quote/:id" element={<QuoteDetail />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
