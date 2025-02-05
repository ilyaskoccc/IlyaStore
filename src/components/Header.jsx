import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-24">
      <div className="flex justify-around items-center h-full">
        <div>
          <h3 className="font-bold text-2xl">Bandage</h3>
        </div>
        <div className="flex justify-around items-center space-x-4">
          <Link to="/" className="font-bold text-[14px] text-[#737373]">
            Home
          </Link>
          <Link to="/" className="font-bold text-[14px] text-[#737373]">
            Shop
          </Link>
          <Link to="/" className="font-bold text-[14px] text-[#737373]">
            About
          </Link>
          <Link to="/" className="font-bold text-[14px] text-[#737373]">
            Blog
          </Link>
          <Link to="/" className="font-bold text-[14px] text-[#737373]">
            Contact
          </Link>
          <Link to="/" className="font-bold text-[14px] text-[#737373]">
            Pages
          </Link>
        </div>
        <div className="flex justify-around items-center space-x-4">
          <User className="text-[#23A6F0] m-0 w-4 h-4" />
          <Link to="/" className="text-[#23A6F0] m-1 font-bold text-[14px]">
            Login
          </Link>
          <span className="text-[#23A6F0] m-1 font-bold text-[14px]">/</span>
          <Link to="/" className="text-[#23A6F0] font-bold text-[14px]">
            Register
          </Link>
          <Link to="/">
            <Search className="text-[#23A6F0] w-4 h-4" />
          </Link>
          <Link to="/">
            <span className="text-[#23A6F0] flex justify-center items-center space-x-1">
              <ShoppingCart className="w-4 h-4 m-1" /> 1
            </span>
          </Link>
          <Link to="/">
            <span className="text-[#23A6F0] flex justify-center items-center space-x-1">
              <Heart className="w-4 h-4 m-1" /> 1
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
