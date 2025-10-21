import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img
            src="/blinkit-logo-hd.png"
            alt="Blinkit Logo"
            className="h-14 mb-4"
          />
          <p className="text-sm">
            Blinkit delivers groceries in minutes to your doorstep. 
            Fast, fresh, and hassle-free!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-green-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-600">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-green-600">FAQs</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
          <ul className="space-y-2">
            <li><Link to="/fruits" className="hover:text-green-600">Fruits & Vegetables</Link></li>
            <li><Link to="/dairy" className="hover:text-green-600">Dairy & Bakery</Link></li>
            <li><Link to="/snacks" className="hover:text-green-600">Snacks & Beverages</Link></li>
            <li><Link to="/meat" className="hover:text-green-600">Meat & Eggs</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm mb-3">📍 Bengaluru, India</p>
          <p className="text-sm mb-3">📞 +91 98765 43210</p>
          <p className="text-sm mb-3">✉️ support@blinkit.com</p>
          <div className="flex space-x-4 text-2xl mt-4">
            <a href="#" className="hover:text-green-600">🌐</a>
            <a href="#" className="hover:text-green-600">🐦</a>
            <a href="#" className="hover:text-green-600">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gray-200 text-center py-4 text-sm">
        © {new Date().getFullYear()} Blinkit Clone. All rights reserved.
      </div>
    </footer>
  );
}
