import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";

export default function Navbar() {
  const navItemClass = ({ isActive }) =>
    `px-4 py-2 transition-all border-b-2 ${
      isActive
        ? "text-orange-500 border-orange-500 font-semibold"
        : "text-gray-800 border-transparent hover:text-orange-500 hover:border-orange-500"
    }`;

  return (
    <nav className="w-full bg-gradient-to-r from-orange-50 via-white to-rose-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-orange-500 text-2xl">
            <FaBell />
          </Link>
          <span className="text-3xl lg:text-4xl font-extrabold text-gray-800">
            SE<span className="text-orange-500">DAP</span>
          </span>
        </div>

        {/* Navigation Menu */}
        <div className="flex space-x-6 items-center">
          <NavLink to="/guest" className={navItemClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navItemClass}>
            About
          </NavLink>
          <NavLink to="/products" className={navItemClass}>
            Product
          </NavLink>
          <NavLink to="/testimoni" className={navItemClass}>
            Testimoni
          </NavLink>
        </div>

        {/* Login, Register, and Order Button */}
        <div className="flex space-x-5 items-center ml-6">
          <NavLink to="/login" className={navItemClass}>
            Login
          </NavLink>
          <NavLink to="/register" className={navItemClass}>
            Register
          </NavLink>
          <button className="bg-orange-500 text-white font-bold px-6 py-3 rounded-md hover:bg-orange-600 transition-all">
            ORDER NOW
          </button>
        </div>
      </div>
    </nav>
  );
}
