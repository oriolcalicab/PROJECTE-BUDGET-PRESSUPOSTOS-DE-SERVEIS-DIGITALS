import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { QuoteDetail } from "../pages/QuoteDetail";


export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote/:id" element={<QuoteDetail />} />        
      </Routes>
    </BrowserRouter>
  );
}
