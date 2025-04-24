"use client";
import React from "react";
import Submenu from "./Submenu";

// DesktopMenu.jsx
const DesktopMenu = ({ menuItems }) => {
  return (
    <ul
      className="hidden md:flex space-x-6 font-medium"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      {menuItems.map((item) => (
        <li
          key={item.href || item.text}
          className="relative group"
          itemProp="name"
        >
          {item.submenu ? (
            <div className="relative">
              <button
                aria-haspopup="true"
                aria-expanded="false"
                className="hover:text-rose-200 flex items-center space-x-1"
                itemProp="url"
              >
                <span itemProp="name">{item.text}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <Submenu
                items={item.submenu}
                className="absolute top-full left-0 bg-white text-black rounded-md shadow-lg min-w-max z-10 overflow-hidden"
                itemClassName="px-4 py-2 hover:bg-rose-100"
              />
            </div>
          ) : (
            <a
              href={item.href}
              className="hover:text-rose-200 transition-colors"
              title={item.title}
              itemProp="url"
            >
              <span itemProp="name">{item.text}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
