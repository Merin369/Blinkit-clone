import { useState, useRef } from "react";
import ProductCard from "../pages/ProductCard";
import type { Product } from "../types/product";
import { CartContext } from "../context/CartContext";

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
  { id: 24, name: "Gin", price: 700, image: "/jin.jpg", category: "Liquor", offer: 10 },];

const categories: string[] = ["All", "Fruits & Vegetables", "Dairy", "Snacks", "Bakery", "Liquor"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const cartIconRef = useRef<HTMLDivElement>(null);
  const filteredProducts = allProducts.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center pt-10">
      <div className="w-full max-w-[85%] px-4 sm:px-10">
        {/* Sidebar + Main */}
        <div className="flex relative">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow rounded-lg p-4 h-fit mr-6 sticky top-24 hidden lg:block">
            <h2 className="font-bold text-lg mb-4 text-gray-700 text-center">Categories</h2>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-center px-3 py-2 rounded font-medium transition ${
                      selectedCategory === cat ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main */}
          <main className="flex-1">
            {/* Big Offer Banner */}
            <div className="mb-8">
              <div className="w-full overflow-hidden rounded-xl shadow-md">
                <img
                  src="/bigoffer.jpg"
                  alt="Big Offer"
                  className="w-full h-[28rem] sm:h-[32rem] md:h-[36rem] lg:h-[40rem] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Three Offer Tiles (equal height) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {["/offer1.webp", "/offer2.webp", "/offer3.jpg"].map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl shadow-sm h-80 sm:h-[22rem] md:h-[24rem] lg:h-[26rem]"
                >
                  <img src={src} alt={`Offer ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Product Grid */}
            <div className="pb-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} cartIconRef={cartIconRef} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
