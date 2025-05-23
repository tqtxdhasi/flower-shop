import React from "react";

const SelectionButton = ({ value, selected, disabled, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`transition-colors rounded-full px-4 py-1
      ${
        selected
          ? "bg-rose-600 hover:bg-rose-700 text-white "
          : "bg-white text-rose-900 border-2 border-rose-200 hover:bg-rose-50"
      }
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
  >
    {value}
  </button>
);

export default SelectionButton;
