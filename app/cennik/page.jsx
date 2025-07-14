"use client";
import React, { useState } from "react";
import ReusableRoseTable from "../secret-admin/components/ReusableRoseTable";
import {
  processedDataRosesPremium,
  processedPremiumData,
} from "../secret-admin/components/PremiumRoseTable";
import {
  processedDataRoses,
  processedStandardData,
} from "../secret-admin/components/RoseTable";

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
  const [budget, setBudget] = useState("");

  const filterByBudget = (data) => {
    if (!budget || isNaN(budget)) return data;
    const b = parseFloat(budget);

    return data
      .map((rows) =>
        rows.filter(
          (row) =>
            (row.bouquetPrice != null && row.bouquetPrice <= b) ||
            (row.flowerPrice != null && row.flowerPrice <= b)
        )
      )
      .filter((group) => group.length > 0);
  };

  const filteredStandard = filterByBudget(processedStandardData);
  const filteredPremium = filterByBudget(processedPremiumData);

  return (
    <div className="flex flex-col gap-4 py-4">
      <h1 className="max-w-4xl px-4 mx-auto text-2xl font-bold text-center text-rose-900 md:text-4xl">
        Cennik róż Zwykłych i Premium
      </h1>

      <p className="max-w-3xl px-4 mx-auto text-center text-rose-700 text-sm md:text-base">
        <span className="italic font-bold text-rose-500 ">
          "Cena kwiatów (zł)"
        </span>{" "}
        to róże przewiązane tylko sznurkiem lub kokardką – bez dodatkowego
        opakowania dekoracyjnego. To opakowanie jest <strong>bezpłatne</strong>
        .*
      </p>

      <div className="flex flex-col w-fit mx-auto justify-center my-2">
        <label htmlFor="budget" className="text-sm text-red-900">
          Filtruj według budżetu (zł):
        </label>
        <input
          id="budget"
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Filtruj według budżetu (zł)"
          className="px-4 py-2 border border-rose-400 rounded-lg text-rose-800 w-full min-w-xs"
        />
      </div>

      <h2 className="font-bold text-rose-900 text-2xl sm:text-3xl text-center">
        Zwykłe Róże
      </h2>
      <div className="flex justify-center gap-4 flex-wrap mb-2">
        <ColorCircle color="#ffffff" label="biały" />
        <ColorCircle color="#ff0000" label="czerwony" />
      </div>
      <ReusableRoseTable
        rowsByHeight={filteredStandard}
        visibleColumns={[
          "length",
          "quantity",
          "pricePerStem",
          "flowerPrice",
          "packaging",
          "bouquetPrice",
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
        rowsByHeight={filteredPremium}
        visibleColumns={[
          "length",
          "quantity",
          "pricePerStem",
          "flowerPrice",
          "packaging",
          "bouquetPrice",
        ]}
      />
      <p className="max-w-3xl px-4 mx-auto text-center text-rose-700 text-base md:text-lg">
        Poznaj nasz aktualny cennik róż, zarówno w wersji zwykłej, jak i
        premium. Zestawienie zawiera szczegółowe informacje dotyczące długości,
        ilości, ceny za sztukę, całkowitego kosztu kwiatów, opakowania oraz ceny
        bukietu.
      </p>
    </div>
  );
};

export default page;
