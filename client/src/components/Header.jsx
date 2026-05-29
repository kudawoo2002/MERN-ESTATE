import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to="/">
          <h1 className="text-bold text-sm sm:text-xl flex flex-nowrap">
            <span className="text-green-500">Real</span>
            <span className="text-green-800">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-xl flex items-center justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-32 sm:w-64"
          />
          <FaSearch className="text-slate-800" />
        </form>
        <ul className="flex justify-center items-center gap-4">
          <Link to="/about">
            <li className="hidden  sm:inline text-green-600 hover:text-green-800">
              About
            </li>
          </Link>

          <Link to="/sign-up">
            <li className=" hidden  sm:inline text-green-600 hover:text-green-800">
              Sign Up
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-green-600 hover:text-green-800">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
