"use client";
import { shopPhone } from "@/app/data/mainData";
import React, { useState } from "react";

const COLUMN_LABELS = {
  length: "Długość (cm)",
  cost: "Koszt (zł/szt)",
  quantity: "Ilość",
  pricePerStem: "Cena (zł/szt)",
  totalCost: "Koszt (zł)",
  profit: "Zysk (zł)",
  flowerPrice: "Cena kwiatów (zł)",
  packaging: "Opakowanie (zł)",
  bouquetPrice: "Cena bukietu (zł)",
  totalProfit: "Zysk całkowity (zł)",
};

const DEFAULT_COLUMNS = [
  "length",
  "cost",
  "quantity",
  "pricePerStem",
  "totalCost",
  "profit",
  "flowerPrice",
  "packaging",
  "bouquetPrice",
  "totalProfit",
];

const ReusableRoseTable = ({
  rowsByHeight,
  visibleColumns = DEFAULT_COLUMNS,
}) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const bouquetPriceColIndex = visibleColumns.indexOf("bouquetPrice");

  return (
    <div className="w-full xl:mx-auto xl:w-fit overflow-x-auto">
      <table className="min-w-full border border-rose-300 bg-white rounded-lg text-sm sm:text-base">
        <thead className="bg-rose-200 text-rose-800">
          <tr>
            {visibleColumns.map((col) => (
              <th
                key={col}
                className="px-4 py-2 border border-rose-300 whitespace-nowrap"
              >
                {COLUMN_LABELS[col]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-rose-900">
          {rowsByHeight.map((rows, idx) => (
            <React.Fragment key={idx}>
              {rows.map((row, i) => {
                const rowKey = `${idx}-${i}`;
                const isSelected = selectedRow === rowKey;

                return (
                  <tr
                    key={rowKey}
                    className={`cursor-pointer ${
                      isSelected ? "bg-rose-200" : "hover:bg-rose-100"
                    }`}
                    onClick={() =>
                      setSelectedRow((prev) =>
                        prev === rowKey ? null : rowKey
                      )
                    }
                  >
                    {visibleColumns.map((col, colIndex) => (
                      <td
                        key={col}
                        className={`px-4 py-2 border border-rose-200 whitespace-nowrap ${
                          isSelected && colIndex === bouquetPriceColIndex
                            ? "bg-rose-400 text-white"
                            : ""
                        }`}
                      >
                        {typeof row[col] === "number"
                          ? row[col].toFixed(2).replace(".00", "")
                          : row[col]}
                      </td>
                    ))}
                  </tr>
                );
              })}

              <tr className="bg-rose-100">
                <td
                  colSpan={visibleColumns.length}
                  className="text-center italic text-rose-700 py-2"
                >
                  Powyżej {rows[rows.length - 1]?.quantity} kwiatów prosimy o
                  kontakt{" "}
                  <a
                    href={`tel:${shopPhone}`}
                    className="text-rose-900 underline"
                  >
                    {shopPhone}
                  </a>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableRoseTable;
