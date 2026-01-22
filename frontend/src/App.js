import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import ImpressumPage from "./pages/ImpressumPage";
import AGBPage from "./pages/AGBPage";
import DatenschutzPage from "./pages/DatenschutzPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produkt" element={<ProductPage />} />
          <Route path="/warenkorb" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/agb" element={<AGBPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;