import React from "react";

const Checkbox = ({ label, checked, onChange }) => (
  <label className="inline-flex items-center cursor-pointer group">
    {/* Hidden default checkbox */}
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="absolute opacity-0 h-0 w-0"
    />
    {/* Custom round checkbox */}
    <span
      className={`
      relative w-5 h-5 rounded-full border-2 flex items-center justify-center
      ${checked ? "border-rose-500 bg-rose-50" : "border-rose-300"}
      group-hover:border-rose-400
      transition-all duration-200
    `}
    >
      {/* Checkmark tick */}
      {checked && (
        <svg
          className="w-3 h-3 text-rose-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </span>
    {/* Label */}
    {label && (
      <span className=" block text-sm text-rose-900 ml-2 font-medium group-hover:text-rose-700">
        {label}
      </span>
    )}
  </label>
);

export default Checkbox;
