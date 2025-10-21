import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./context/Navbar";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Footer from "./context/Footer";  // ✅ make sure Footer file path is correct

export default function App() {
  return (
    <CartProvider>
      <Router>
        {/* ✅ Navbar always visible at the top */}
        <Navbar />

        {/* ✅ Page content */}
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<OTP />} />
          </Routes>
        </div>

        {/* ✅ Footer always visible at the bottom */}
        <Footer />
      </Router>
    </CartProvider>
  );
}
