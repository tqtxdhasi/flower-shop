"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#2E2B26] text-white p-4 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <a className="text-2xl font-bold" href="/">
          Kwiaty Krakow
        </a>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="hover:text-yellow-300">
              Home
            </a>
          </li>
          <li>
            <a href="/flowers/roses" className="hover:text-yellow-300">
              Róże
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-yellow-300">
              Blog
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2E2B26] text-white p-4 mt-2">
          <ul className="space-y-4">
            <li>
              <a href="/" className="hover:text-yellow-300 block">
                Home
              </a>
            </li>
            <li>
              <a href="/flowers/roses" className="hover:text-yellow-300 block">
                Róże
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-yellow-300 block">
                Blog
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
