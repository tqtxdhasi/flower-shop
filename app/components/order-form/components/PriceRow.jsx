import React from "react";

const PriceRow = ({ label, value, isTotal }) => (
  <div
    className={`flex text-rose-900 justify-between ${
      isTotal ? "font-bold" : "text-sm"
    }`}
  >
    <span>{label}:</span>
    <span>{value.toFixed(2)} zl</span>
  </div>
);

export default PriceRow;
