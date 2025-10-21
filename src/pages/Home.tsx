import { useState } from "react";
import ProductCard from "../pages/ProductCard";
import type { Product } from "../types/product";

type HomeProps = {
  products: Product[];
  cartIconRef: React.RefObject<HTMLDivElement | null>;
};

const categories: string[] = ["All", "Fruits & Vegetables", "Dairy", "Snacks", "Bakery", "Liquor"];

export default function Home({ products, cartIconRef }: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts = products.filter(
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
