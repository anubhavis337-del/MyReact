import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        {/* Footer Main */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold font-['Playfair_Display'] tracking-wider">
              ZIVYA<span className="text-[#C4B5FD]">.</span>
            </h2>

            <p className="text-purple-200 mt-4 text-sm leading-7 max-w-xs">
              Where Style Meets You.
              Discover fashion, beauty and everyday
              essentials that make you uniquely you.
            </p>

            <div className="flex gap-4 mt-5 text-xl">
              <a href="#" className="hover:text-[#C4B5FD] transition">Instagram</a>
              <a href="#" className="hover:text-[#C4B5FD] transition">Facebook</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 font-['Playfair_Display']">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-purple-200">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/shop" className="hover:text-white">Shop</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-5 font-['Playfair_Display']">
              Categories
            </h3>

            <ul className="space-y-3 text-sm text-purple-200">
              <li><a href="/fashion" className="hover:text-white">Fashion</a></li>
              <li><a href="/beauty" className="hover:text-white">Beauty & Makeup</a></li>
              <li><a href="/accessories" className="hover:text-white">Accessories</a></li>
              <li><a href="/electronics" className="hover:text-white">Electronics</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-5 font-['Playfair_Display']">
              Customer Care
            </h3>

            <ul className="space-y-3 text-sm text-purple-200">
              <li><a href="/help" className="hover:text-white">Help Center</a></li>
              <li><a href="/shipping" className="hover:text-white">Shipping Policy</a></li>
              <li><a href="/returns" className="hover:text-white">Return & Refund</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Newsletter */}
        <div className="border-t border-purple-400/30 py-8 text-center">

          <h3 className="text-xl font-['Playfair_Display']">
            A Little Style in Your Inbox
          </h3>

          <p className="text-purple-200 text-sm mt-2">
            Subscribe for updates, new arrivals and exclusive offers.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-5">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-full bg-white text-gray-800 outline-none text-sm"
            />

            <button className="bg-[#A78BFA] hover:bg-[#8B5CF6] px-6 py-3 rounded-full text-white text-sm font-semibold transition">
              Subscribe
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-purple-400/30 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">

          <p className="text-xs text-purple-200">
            © 2026 ZIVYA. All Rights Reserved.
          </p>

          <p className="text-sm font-['Playfair_Display'] italic text-[#C4B5FD]">
            Where Style Meets You.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;