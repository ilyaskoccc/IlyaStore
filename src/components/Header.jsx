import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import NavbarLayout from "../layout/NavbarLayout";

function Header() {
  return (
    <NavbarLayout>
      <div>
        <Link to="/">
          <h3 className="font-bold text-2xl">IlyaStore</h3>
        </Link>
      </div>
      <div className="flex justify-around items-center space-x-4">
        <Link to="/" className="font-bold text-[14px] text-[#737373]">
          Home
        </Link>
        <Link to="/shop" className="font-bold text-[14px] text-[#737373]">
          Shop
        </Link>
        <Link to="/about" className="font-bold text-[14px] text-[#737373]">
          About
        </Link>
        <Link to="/blog" className="font-bold text-[14px] text-[#737373]">
          Blog
        </Link>
        <Link to="/contact" className="font-bold text-[14px] text-[#737373]">
          Contact
        </Link>
        <Link to="/pages" className="font-bold text-[14px] text-[#737373]">
          Pages
        </Link>
      </div>
      <div className="flex justify-around items-center space-x-4">
        <User className="text-[#23A6F0] m-0 w-4 h-4" />
        <Link to="/login" className="text-[#23A6F0] m-1 font-bold text-[14px]">
          Login
        </Link>
        <span className="text-[#23A6F0] m-1 font-bold text-[14px]">/</span>
        <Link to="/register" className="text-[#23A6F0] font-bold text-[14px]">
          Register
        </Link>
        <Link to="/search">
          <Search className="text-[#23A6F0] w-4 h-4" />
        </Link>
        <Link to="/shopping-cart">
          <span className="text-[#23A6F0] flex justify-center items-center space-x-1">
            <ShoppingCart className="w-4 h-4 m-1" /> 1
          </span>
        </Link>
        <Link to="/favorites">
          <span className="text-[#23A6F0] flex justify-center items-center space-x-1">
            <Heart className="w-4 h-4 m-1" /> 1
          </span>
        </Link>
      </div>
    </NavbarLayout>
  );
}

export default Header;
