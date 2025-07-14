import React from "react";
import ReusableRoseTable from "../secret-admin/components/ReusableRoseTable";
import { processedDataRosesPremium } from "../secret-admin/components/PremiumRoseTable";
import { processedDataRoses } from "../secret-admin/components/RoseTable";

const ColorCircle = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <span
      className="inline-block w-6 h-6 rounded-full border border-gray-400"
      style={{ backgroundColor: color }}
      title={label}
    ></span>
    <span className="text-sm md:text-base text-rose-700">{label}</span>
  </div>
);

const page = () => {
  return (
    <div className="flex flex-col gap-4 py-4">
      <h1 className="max-w-4xl px-4 mx-auto text-2xl font-bold text-center text-rose-900 md:text-4xl">
        Cennik róż Zwykłych i Premium
      </h1>
      <p className="max-w-3xl px-4 mx-auto text-center text-rose-700 text-base md:text-lg">
        Poznaj nasz aktualny cennik róż, zarówno w wersji zwykłej, jak i
        premium. Zestawienie zawiera szczegółowe informacje dotyczące długości,
        ilości, ceny za sztukę, całkowitego kosztu kwiatów, opakowania oraz ceny
        bukietu.
      </p>

      <h2 className="font-bold text-rose-900 text-2xl sm:text-3xl text-center">
        Zwykłe Róże
      </h2>
      <div className="flex justify-center gap-4 flex-wrap mb-2">
        <ColorCircle color="#ffffff" label="biały" />
        <ColorCircle color="#ff0000" label="czerwony" />
      </div>
      <ReusableRoseTable
        rowsByHeight={processedDataRoses}
        visibleColumns={[
          "długość",
          "ilość",
          "cena_szt",
          "cena_kwiatów",
          "opakowanie",
          "cena_bukietu",
        ]}
      />

      <h2 className="font-bold text-rose-900 text-2xl sm:text-3xl text-center">
        Premium Róże
      </h2>
      <div className="flex justify-center gap-4 flex-wrap mb-2">
        <ColorCircle color="#ffffff" label="biały" />
        <ColorCircle color="#fcd5ce" label="brzoskwiniowy" />
        <ColorCircle color="#ff69b4" label="różowy" />
        <ColorCircle color="#ff0000" label="czerwony" />
      </div>
      <ReusableRoseTable
        rowsByHeight={processedDataRosesPremium}
        visibleColumns={[
          "długość",
          "ilość",
          "cena_szt",
          "cena_kwiatów",
          "opakowanie",
          "cena_bukietu",
        ]}
      />
    </div>
  );
};

export default page;
