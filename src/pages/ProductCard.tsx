import React, { useContext } from "react";
import type { Product } from "../types/product";
import { CartContext } from "../context/CartContext";

type ProductCardProps = {
  product: Product;
  cartIconRef: React.RefObject<HTMLDivElement | null>;
};

export default function ProductCard({
  product,
  cartIconRef: _cartIconRef, // unused but preserved for future use
}: ProductCardProps) {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("ProductCard must be used within CartProvider");

  const { addToCart } = ctx;

  const offerPrice = product.offer
    ? product.price - (product.price * product.offer) / 100
    : product.price;

  const gstAmount = offerPrice * 0.05; // 5% GST
  const totalPrice = offerPrice + gstAmount;

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition">
      {/* Image container */}
      <div className="relative w-full h-44 sm:h-56 flex items-center justify-center bg-white p-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain"
        />
        {product.offer && (
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
            {product.offer}% OFF
          </span>
        )}
      </div>

      {/* Product details */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
            {product.name}
          </h3>

          <div className="mt-1 space-y-0.5">
            <p className="text-gray-400 text-xs line-through">
              ₹{product.price.toFixed(2)}
            </p>
            <p className="text-green-600 font-bold text-sm sm:text-base">
              ₹{offerPrice.toFixed(2)}
            </p>
            <p className="text-gray-500 text-xs">
              GST: ₹{gstAmount.toFixed(2)}
            </p>
            <p className="font-semibold text-gray-800 text-sm">
              Total: ₹{totalPrice.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Add to Cart button */}
        <button
          onClick={() => addToCart(product)}
          className="mt-3 bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 text-sm font-semibold transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
