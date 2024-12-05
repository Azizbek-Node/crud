import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      id="header"
      className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg fixed w-full"
    >
      <nav className="max-w-7xl mx-auto flex justify-center md:justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:opacity-80 transition">
            MyApp
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "border-b-2 border-white" : "hover:text-gray-200"
              } transition`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "border-b-2 border-white" : "hover:text-gray-200"
              } transition`
            }
          >
            Create User
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
