import React from "react";

const ColorButton = ({ color, hex, selected, onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`w-10 h-10 rounded-full border-2 transition-all
      ${selected ? "ring-2 ring-offset-2 ring-rose-300" : ""}
      ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
    style={{ backgroundColor: hex, borderColor: selected ? hex : "#e5e7eb" }}
    aria-label={`Kolor ${color}`}
  >
    {selected && (
      <div className="text-white w-full p-1">
        <svg
          className="w-full h-full text-black"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    )}
  </button>
);

export default ColorButton;
