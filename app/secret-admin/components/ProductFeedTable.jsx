"use client";
import React from "react";
import { COLOR_OPTIONS } from "@/app/data/roseData";
import {
  STANDARD_BASES,
  STANDARD_ROSE_DATA,
  PREMIUM_BASES,
  PREMIUM_ROSE_DATA,
} from "@/app/data/roseConfig";

// helper to round up
const roundUp = (value, decimals) => {
  const factor = Math.pow(10, decimals);
  return Math.ceil(value * factor) / factor;
};

// compute metrics for standard bouquets
const computeStandard = (length, quantity) => {
  const { cost, profit, packaging } = STANDARD_BASES.find(
    (b) => b.length === length
  )
    ? {
        cost: STANDARD_BASES.find((b) => b.length === length).cost,
        profit: STANDARD_ROSE_DATA.find((r) => r.quantity === quantity).profit,
        packaging: STANDARD_ROSE_DATA.find((r) => r.quantity === quantity)
          .packaging,
      }
    : {};
  const totalCost = cost * (quantity + 1);
  const flowerPrice = totalCost + profit;
  const pricePerStem = roundUp(flowerPrice / quantity, 2);
  const bouquetPrice = flowerPrice + packaging;
  return { pricePerStem, flowerPrice, bouquetPrice };
};

// compute metrics for premium bouquets
const computePremium = (length, quantity) => {
  const base = PREMIUM_BASES.find((b) => b.length === length);
  const data = PREMIUM_ROSE_DATA.find((r) => r.quantity === quantity);
  const countWithBonus = quantity + (quantity === 47 ? 3 : 2);
  const totalCost = base.cost * countWithBonus;
  const flowerPrice = totalCost + data.profit;
  const pricePerStem = roundUp(flowerPrice / quantity, 2);
  const bouquetPrice = flowerPrice + data.packaging;
  return { pricePerStem, flowerPrice, bouquetPrice };
};

const headers = [
  "id",
  "title",
  "description",
  "availability",
  "availability date",
  "expiration date",
  "link",
  "mobile link",
  "image link",
  "price",
  "sale price",
  "sale price effective date",
  "identifier exists",
  "gtin",
  "mpn",
  "brand",
  "product highlight",
  "product detail",
  "additional image link",
  "condition",
  "adult",
  "color",
  "size",
  "size type",
  "size system",
  "gender",
  "material",
  "pattern",
  "age group",
  "multipack",
  "is bundle",
  "unit pricing measure",
  "unit pricing base measure",
  "energy efficiency class",
  "min energy efficiency class",
  "max energy efficiency class",
  "item group id",
  "sell on google quantity",
];

const ProductFeedTable = () => {
  const linkBase = "https://www.krakow-kwiaciarnia.pl";

  // merge both standard & premium
  const allLengths = [
    ...STANDARD_BASES.map((b) => b.length),
    ...PREMIUM_BASES.map((b) => b.length),
  ];
  const allQuantities = [
    ...STANDARD_ROSE_DATA.map((r) => r.quantity),
    ...PREMIUM_ROSE_DATA.map((r) => r.quantity),
  ];

  const rows = Array.from(new Set(allLengths)).flatMap((length) =>
    Array.from(new Set(allQuantities)).flatMap((quantity) =>
      COLOR_OPTIONS.map((colorOpt) => {
        const isPremium =
          PREMIUM_ROSE_DATA.some((r) => r.quantity === quantity) &&
          PREMIUM_BASES.some((b) => b.length === length);
        const { flowerPrice, bouquetPrice } = isPremium
          ? computePremium(length, quantity)
          : computeStandard(length, quantity);

        const idPrefix = isPremium ? "PREMIUM" : "ROZE";
        const id = `${idPrefix}-Q${quantity}-CC${colorOpt.slug.toUpperCase()}-H${length}`;
        const title = `Bukiet ${quantity} ${colorOpt.name.toLowerCase()} róż ${length} cm ${
          isPremium ? "PREMIUM" : ""
        }`;
        const desc = isPremium
          ? `Ekskluzywny bukiet ${colorOpt.name.toLowerCase()} róż premium o długości ${length} cm.`
          : `Luksusowy bukiet ${colorOpt.name.toLowerCase()} róż o długości ${length} cm z opcją personalizacji.`;

        return {
          id,
          title,
          description: desc,
          availability: "in_stock",
          "availability date": "",
          "expiration date": "",
          link: `${linkBase}/kwiaty/roze/${
            isPremium ? "bukiet-premium" : "bukiet"
          }-${quantity}-${colorOpt.slug}-roz-${length}-cm`,
          "mobile link": "",
          "image link": `${linkBase}/images/${
            isPremium ? "bukiet-premium" : "bukiet"
          }-${quantity}-${colorOpt.slug}-roz-${length}cm.jpeg`,
          price: `${Math.round(flowerPrice)} PLN`,
          "sale price": "",
          "sale price effective date": "",
          "identifier exists": "no",
          gtin: "",
          mpn: "",
          brand: "Kraków Kwiaciarnia",
          "product highlight": isPremium
            ? [
                `Ekskluzywny bukiet premium z ${quantity} ${colorOpt.name.toLowerCase()} róż`,
                `Długość kwiatów: ${length} cm`,
                "Dodatkowe kwiaty gratis",
                "Idealny na wyjątkowe okazje",
              ].join('","')
            : [
                `Luksusowy bukiet z ${quantity} ${colorOpt.name.toLowerCase()} róż`,
                `Długość kwiatów: ${length} cm`,
                "Bukiet związany delikatną sznurkiem",
                "Dostępna płatna dostawa 20 PLN lub bezpłatny odbiór osobisty",
                "Idealny na każdą okazję",
                "Kwiaty przygotowane z przyciętymi łodygami",
              ].join('","'),
          "product detail": `:Length:${length} cm,:Color:${colorOpt.color},:Quantity:${quantity}`,
          "additional image link": "",
          condition: "new",
          adult: "",
          color: colorOpt.color,
          size: "",
          "size type": "",
          "size system": "",
          gender: "",
          material: "",
          pattern: "",
          "age group": "",
          multipack: "",
          "is bundle": "",
          "unit pricing measure": `${quantity}ct`,
          "unit pricing base measure": "1ct",
          "energy efficiency class": "",
          "min energy efficiency class": "",
          "max energy efficiency class": "",
          "item group id": "",
          "sell on google quantity": "",
        };
      })
    )
  );
  const totalItems = rows.length;

  const premiumCount = rows.filter((row) =>
    row.id.startsWith("PREMIUM")
  ).length;
  const standardCount = totalItems - premiumCount;

  const uniqueColors = new Set(rows.map((row) => row.color)).size;
  const uniqueLengths = new Set(
    rows.map((row) => {
      const match = row["product detail"]?.match(/:Length:(\d+)/);
      return match ? match[1] : null;
    })
  ).size;
  const uniqueQuantities = new Set(
    rows.map((row) => {
      const match = row["product detail"]?.match(/:Quantity:(\d+)/);
      return match ? match[1] : null;
    })
  ).size;
  return (
    <div className="overflow-x-auto flex flex-col w-full justify-start text-xs">
      <table className="min-w-full border border-gray-300 bg-white">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="px-2 py-1 border text-left whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {headers.map((col) => (
                <td
                  key={col}
                  className="border px-2 py-1 align-top whitespace-nowrap"
                >
                  {row[col] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>{" "}
      <div className="mt-4 text-sm text-gray-800 bg-gray-50 p-4 border rounded">
        <strong>Summary:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>Total products: {totalItems}</li>
          <li>Standard bouquets: {standardCount}</li>
          <li>Premium bouquets: {premiumCount}</li>
          <li>Colors available: {uniqueColors}</li>
          <li>Stem lengths: {uniqueLengths}</li>
          <li>Quantities offered: {uniqueQuantities}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductFeedTable;
