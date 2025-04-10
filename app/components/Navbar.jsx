"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { href: "/", text: "Strona główna" },
    { href: "/flowers/roses", text: "Róże" },
    { href: "/blog", text: "Poradnik" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={` w-full sticky top-0 z-50 transition-all duration-300 bg-rose-800 text-white`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a
            className="flex items-center text-2xl font-bold hover:text-rose-200 transition-colors space-x-2"
            href="/"
          >
            <img
              src="/icon1.png"
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span>Bubeny Kwiaty Krakow</span>
          </a>
          {/* Desktop Navbar */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-rose-200 transition-colors py-2 px-1 font-medium"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-rose-700 transition-colors"
            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navbar */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="pb-4 space-y-3">
            {menuItems.map((item) => (
              <li key={`mobile-${item.href}`}>
                <a
                  href={item.href}
                  className="block py-3 px-4 hover:bg-rose-700 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
