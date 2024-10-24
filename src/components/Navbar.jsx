// Navbar.jsx
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import StockInfo from "./StockInfo";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 dark:bg-slate-700 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">MyStocks</div>
        <StockInfo />

        <div className="hidden md:flex space-x-6 justify-center items-center">
          <ThemeToggle />
          <a href="/" className="text-white  hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="text-white  hover:text-gray-300">
            About
          </a>
          <a href="/watchlist" className="text-white  hover:text-gray-300">
            MyWatchlist
          </a>
          <a href="/contact" className="text-white  hover:text-gray-300">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-2">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="/watchlist" className="text-white hover:text-gray-300">
            MyWatchlist
          </a>
          <a href="/contact" className="text-white hover:text-gray-300">
            Contact
          </a>
          <div className="py-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
