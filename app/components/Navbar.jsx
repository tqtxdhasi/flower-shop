"use client";
import React, { useState } from "react";
import { menuItems, companyInfo } from "./navbarData";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import MenuIcon from "./MenuIcon";
import { shopName } from "../data/mainData";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileSubmenu = (index) =>
    setOpenMobileSubmenu(openMobileSubmenu === index ? null : index);

  return (
    <nav
      role="navigation"
      className="w-full sticky top-0 z-50 bg-rose-800 text-white transition-all"
    >
      <div className=" bg-rose-300 text-rose-900 text-center py-2 ">
        Zamów dzień wcześniej – bez dostawy tego samego dnia!
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between max-w-7xl mx-auto items-center py-4">
          <a
            href="/"
            className="flex items-center text-2xl font-bold hover:text-rose-200 transition-colors space-x-2"
            aria-label={`${shopName} - Strona główna`}
          >
            <img
              src={companyInfo.logo.src}
              alt={companyInfo.logo.alt}
              className="w-10 h-10 rounded-full object-cover"
              width={companyInfo.logo.width}
              height={companyInfo.logo.height}
              loading="eager"
            />
            <span>{shopName}</span>
          </a>

          <DesktopMenu menuItems={menuItems} />

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-rose-700 transition-colors"
            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <MenuIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>

        <MobileMenu
          menuItems={menuItems}
          isOpen={isMobileMenuOpen}
          openSubmenu={openMobileSubmenu}
          toggleSubmenu={toggleMobileSubmenu}
          closeMenu={closeMobileMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
