import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="px-4 py-8 md:px-0 flex justify-between md:justify-around items-center">
        <div>
          <Link to="/">
            <h3 className="font-bold text-2xl">IlyaStore</h3>
          </Link>
        </div>
        <div className="flex-row hidden md:flex justify-between items-center gap-40">
          <div className="font-bold text-[14px] text-[#737373] space-x-4">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/pages">Pages</Link>
          </div>
          <div className="flex items-center space-x-4">
            <User className="text-[#23A6F0] m-0 w-4 h-4" />
            <Link
              to="/login"
              className="text-[#23A6F0] m-1 font-bold text-[14px]"
            >
              Login
            </Link>
            <span className="text-[#23A6F0] m-1 font-bold text-[14px]">/</span>
            <Link
              to="/register"
              className="text-[#23A6F0] font-bold text-[14px]"
            >
              Register
            </Link>
            <Link to="/search">
              <Search className="text-[#23A6F0] w-4 h-4" />
            </Link>
            <Link to="/shopping-cart">
              <span className="text-[#23A6F0] flex">
                <ShoppingCart className="w-4 h-4 m-1" /> 1
              </span>
            </Link>
            <Link to="/favorites">
              <span className="text-[#23A6F0] flex">
                <Heart className="w-4 h-4 m-1" /> 1
              </span>
            </Link>
          </div>
        </div>
        <div className="flex gap-12 md:hidden">
          <User className="transition-transform duration-300 hover:scale-110" />
          <Search className="transition-transform duration-300 hover:scale-110" />
          <ShoppingCart className="transition-transform duration-300 hover:scale-110" />

          <button
            className="hover:text-gray-400 focus:outline-none transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`block transition-transform duration-300 ${
                isMenuOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </span>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className={`text-3xl font-normal text-[#737373] flex flex-col gap-6 pb-10 md:hidden
          transition-all duration-300 ease-in-out transform origin-top ${
            isMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
          }`}
        >
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/product">Product</Link>
          </span>
          <span>
            <Link to="/pricing">Pricing</Link>
          </span>
          <span>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
      )}
    </header>
  );
}
