import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./context/Navbar";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Footer from "./context/Footer";
import type { Product } from "./types/product";

// ✅ Full product list
const allProducts: Product[] = [
  { id: 1, name: "Apple", price: 120, image: "/apple.png", category: "Fruits & Vegetables", offer: 10 },
  { id: 2, name: "Banana", price: 60, image: "/banana.webp", category: "Fruits & Vegetables", offer: 5 },
  { id: 3, name: "Carrot", price: 40, image: "/carrot.png", category: "Fruits & Vegetables", offer: 8 },
  { id: 4, name: "Orange", price: 70, image: "/orange.png", category: "Fruits & Vegetables", offer: 10 },
  { id: 5, name: "Mango", price: 150, image: "/mango.webp", category: "Fruits & Vegetables", offer: 12 },
  { id: 6, name: "Grapes", price: 90, image: "/grapes.jpg", category: "Fruits & Vegetables", offer: 7 },
  { id: 7, name: "Milk", price: 80, image: "/milk.jpeg", category: "Dairy", offer: 15 },
  { id: 8, name: "Butter", price: 150, image: "/butter.png", category: "Dairy", offer: 10 },
  { id: 9, name: "Cheese", price: 200, image: "/cheese.webp", category: "Dairy", offer: 18 },
  { id: 10, name: "Yogurt", price: 60, image: "/yougut.jpg", category: "Dairy", offer: 5 },
  { id: 11, name: "Chips", price: 90, image: "/chips.webp", category: "Snacks", offer: 20 },
  { id: 12, name: "Cookies", price: 110, image: "/Cookies-Photos.jpg", category: "Snacks", offer: 12 },
  { id: 13, name: "Popcorn", price: 80, image: "/popcorn.webp", category: "Snacks", offer: 15 },
  { id: 14, name: "Chocolates", price: 180, image: "/chocalate.webp", category: "Snacks", offer: 10 },
  { id: 15, name: "Bread", price: 50, image: "/bread.jpg", category: "Bakery", offer: 8 },
  { id: 16, name: "Croissant", price: 120, image: "/croissant-1.webp", category: "Bakery", offer: 10 },
  { id: 17, name: "Muffin", price: 100, image: "/muffin.jpg", category: "Bakery", offer: 12 },
  { id: 18, name: "Donut", price: 90, image: "/donnut.webp", category: "Bakery", offer: 15 },
  { id: 19, name: "Beer", price: 250, image: "/beer.jpg", category: "Liquor", offer: 5 },
  { id: 20, name: "Whiskey", price: 1200, image: "/whiskey.jpg", category: "Liquor", offer: 8 },
  { id: 21, name: "Vodka", price: 1000, image: "/vodka.jpg", category: "Liquor", offer: 10 },
  { id: 22, name: "Wine", price: 850, image: "/wine.webp", category: "Liquor", offer: 7 },
  { id: 23, name: "Rum", price: 650, image: "/rum.webp", category: "Liquor", offer: 12 },
  { id: 24, name: "Gin", price: 700, image: "/jin.jpg", category: "Liquor", offer: 10 },
];

export default function App() {
  const cartIconRef = useRef<HTMLDivElement>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);

  // ✅ Search handler passed to Navbar
  const handleSearch = (query: string) => {
    const lower = query.toLowerCase();
    const results = allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower)
    );
    setFilteredProducts(results);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar cartIconRef={cartIconRef} onSearch={handleSearch} />

        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home products={filteredProducts} cartIconRef={cartIconRef} />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<OTP />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </CartProvider>
  );
}
