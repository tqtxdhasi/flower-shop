"use client";
import { COLOR_OPTIONS } from "@/app/data/roseData";
import React from "react";

// your helper from before
const roundUp = (value, decimals) => {
  const factor = Math.pow(10, decimals);
  return Math.ceil(value * factor) / factor;
};

// your maps
const initialCostMap = { 40: 4, 50: 5, 60: 6, 70: 7, 80: 8 };
const initialProfitMap = { 9: 50, 19: 60, 29: 75, 39: 80, 49: 90, 59: 100 };
const initialPackagingMap = { 9: 10, 19: 10, 29: 15, 39: 15, 49: 20, 59: 20 };
const initialWholesaleMap = { 40: 10, 50: 10, 60: 10, 70: 10, 80: 10 };

const lengths = [40, 50, 60, 70, 80];
const quantities = [9, 19, 29, 39, 49, 59];

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

// compute your metrics per bouquet
const computeRow = (length, qty) => {
  const costPerStem = initialCostMap[length];
  const totalStemCost = costPerStem * qty + costPerStem;
  const costPlusProfit = totalStemCost + initialProfitMap[qty];
  const pricePerStem = roundUp(costPlusProfit / qty, 2);
  const flowersRevenue = pricePerStem * qty;
  const bouquetPrice = flowersRevenue + initialPackagingMap[qty];
  return {
    pricePerStem,
    totalStemCost,
    flowersRevenue,
    bouquetPrice,
  };
};

const ProductFeedTable = () => {
  const linkBase = "https://www.krakow-kwiaciarnia.pl";

  const rows = lengths.flatMap((length) =>
    quantities.flatMap((qty) =>
      COLOR_OPTIONS.map((colorOpt) => {
        const { bouquetPrice, flowersRevenue } = computeRow(length, qty);
        const id = `ROZE-Q${qty}-CC${colorOpt.slug.toUpperCase()}-H${length}`;
        const title = `Bukiet ${qty} ${colorOpt.name.toLowerCase()} róż ${length} cm`;
        const desc = `Luksusowy bukiet ${colorOpt.name.toLowerCase()} róż o długości ${length} cm z opcją personalizacji.`;
        return {
          id,
          title,
          description: desc,
          availability: "in_stock",
          "availability date": "",
          "expiration date": "",
          link: `${linkBase}/kwiaty/roze/bukiet-${qty}-${colorOpt.slug}-roz-${length}-cm`,
          "mobile link": "",
          "image link": `${linkBase}/images/bukiet-${qty}-${colorOpt.slug}-roz-${length}cm.jpeg`,
          price: `${Math.round(flowersRevenue)} PLN`,
          "sale price": "",
          "sale price effective date": "",
          "identifier exists": "no",
          gtin: "",
          mpn: "",
          brand: "Kraków Kwiaciarnia",
          "product highlight": `"Luksusowy bukiet z ${qty} ${colorOpt.name.toLowerCase()} róż","Długość kwiatów: ${length} cm","Bukiet związany delikatną sznurkiem","Dostępna płatna dostawa 20 PLN lub bezpłatny odbiór osobisty","Idealny na każdą okazję","Kwiaty przygotowane z przyciętymi łodygami"`,
          "product detail": `:Length:${length} cm,:Color:${colorOpt.color},:Quantity:${qty}`,
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
          "unit pricing measure": `${qty}ct`,
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

  return (
    <div className="overflow-x-auto flex w-full justify-start  text-xs">
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
      </table>
    </div>
  );
};

export default ProductFeedTable;
