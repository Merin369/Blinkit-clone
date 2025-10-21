import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import type { CartItem } from "../types/product";

export default function Cart() {
  const ctx = useContext(CartContext);
  if (!ctx) return null;

  const { cartItems, removeFromCart, updateQuantity } = ctx;

  const calcOfferPrice = (item: CartItem) =>
    item.offer ? item.price - (item.price * item.offer) / 100 : item.price;

  const calcGST = (price: number) => price * 0.05;

  const calcTotal = (item: CartItem) => {
    const offerPrice = calcOfferPrice(item);
    return (offerPrice + calcGST(offerPrice)) * item.quantity;
  };

  const grandTotal = cartItems.reduce((sum, item) => sum + calcTotal(item), 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        🛒 Your cart is empty.
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => {
          const offerPrice = calcOfferPrice(item);
          const gst = calcGST(offerPrice);
          const total = calcTotal(item);

          return (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg mb-4 sm:mb-0"
              />

              <div className="flex-1 sm:ml-4 space-y-1">
                <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>
                <p className="text-gray-500 text-sm">
                  Actual Price: ₹{item.price.toFixed(2)}
                </p>
                {item.offer && (
                  <p className="text-green-600 font-semibold text-sm">
                    Offer Price: ₹{offerPrice.toFixed(2)}
                  </p>
                )}
                <p className="text-gray-500 text-sm">GST (5%): ₹{gst.toFixed(2)}</p>
                <p className="font-bold text-gray-800 text-sm">
                  Total: ₹{total.toFixed(2)}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 font-semibold mt-4 sm:mt-0 sm:ml-4"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      {/* Grand Total */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md text-right text-2xl font-bold text-gray-800">
        Grand Total: ₹{grandTotal.toFixed(2)}
      </div>
    </div>
  );
}
