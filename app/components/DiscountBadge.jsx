import React from "react";

const DiscountBadge = () => {
  return (
    <div className="mt-4 text-center bg-rose-100 p-3 rounded-lg">
      <p className="text-sm text-rose-700">
        Krakowianie! Użyj kodu{" "}
        <strong className="text-rose-900">KWIATKRAK15</strong> i odbierz
        <span className="block mt-1 text-rose-900 font-medium">
          15% zniżki na odżywki do róż!
        </span>
      </p>
    </div>
  );
};

export default DiscountBadge;
