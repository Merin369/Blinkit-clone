import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

type NavbarProps = {
  cartIconRef: React.RefObject<HTMLDivElement | null>; // ✅ allow null
  onSearch: (query: string) => void;
};

export default function Navbar({ cartIconRef, onSearch }: NavbarProps) {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("Navbar must be used within CartProvider");

  const cartCount = ctx.cartItems ? ctx.cartItems.length : 0;

  const [search, setSearch] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useState("TOWN HALL, Bengaluru");

  const placeholders = [
    'Search "chocolate"',
    'Search "fruits"',
    'Search "dairy"',
    'Search "snacks"',
    'Search "vegetables"',
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setPlaceholderIndex((p) => (p + 1) % placeholders.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = search.trim();
    if (query) {
      onSearch(query);
      setMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo & Location */}
          <div className="flex items-center space-x-5">
            <Link to="/" className="flex items-center">
              <img
                src="/blinkit-logo-hd.png"
                alt="Blinkit"
                className="h-14 sm:h-20 object-contain"
              />
            </Link>
            <div className="hidden sm:flex flex-col text-gray-700">
              <span className="font-semibold text-base">Delivery in 9 minutes</span>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="text-sm bg-transparent outline-none"
              >
                <option value="TOWN HALL, Bengaluru">TOWN HALL, Bengaluru</option>
                <option value="MG Road, Bengaluru">MG Road, Bengaluru</option>
                <option value="Indiranagar, Bengaluru">Indiranagar, Bengaluru</option>
                <option value="Koramangala, Bengaluru">Koramangala, Bengaluru</option>
              </select>
            </div>
          </div>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden sm:flex flex-1 mx-6 items-center max-w-2xl"
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={placeholders[placeholderIndex]}
              className="flex-1 border border-gray-200 rounded-l-full px-5 py-3 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-r-full text-sm font-semibold transition duration-300 hover:bg-green-700 active:scale-95"
            >
              Search
            </button>
          </form>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-6">
              <Link
                to="/login"
                className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-lg transition duration-300 hover:bg-green-200 hover:scale-105"
              >
                Login
              </Link>

              <Link
                to="/cart"
                className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                <div
                  ref={cartIconRef}
                  className="relative w-9 h-9 flex items-center justify-center"
                >
                  <span className="text-2xl">🛒</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="font-bold text-lg">{cartCount}</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button onClick={() => setMenuOpen((s) => !s)} className="p-2">
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="px-4 py-4 space-y-4">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block font-semibold text-green-700 bg-green-100 px-4 py-2 rounded-lg hover:bg-green-200 transition"
            >
              Login / Sign up
            </Link>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={placeholders[placeholderIndex]}
                className="flex-1 border border-gray-200 rounded-l-full px-4 py-2 text-sm outline-none"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-r-full text-sm transition duration-300 hover:bg-green-700 active:scale-95"
              >
                Search
              </button>
            </form>

            {/* Mobile Cart */}
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-lg"
            >
              <span className="text-2xl">🛒</span>
              <span className="font-bold text-lg">{cartCount}</span>
            </Link>

            {/* Mobile Location Selector */}
            <div className="pt-2 text-sm text-gray-500">
              <span className="block font-semibold mb-1">Delivery in 9 minutes</span>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
              >
                <option value="TOWN HALL, Bengaluru">TOWN HALL, Bengaluru</option>
                <option value="MG Road, Bengaluru">MG Road, Bengaluru</option>
                <option value="Indiranagar, Bengaluru">Indiranagar, Bengaluru</option>
                <option value="Koramangala, Bengaluru">Koramangala, Bengaluru</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
