"use client";
import { shopPhone } from "@/app/data/mainData";
import React, { useState } from "react";

const COLUMN_LABELS = {
  długość: "Długość (cm)",
  koszt: "Koszt (zł/szt)",
  ilość: "Ilość",
  cena_szt: "Cena (zł/szt)",
  koszt_łączny: "Koszt (zł)",
  zysk: "Zysk (zł)",
  cena_kwiatów: "Cena kwiatów (zł)",
  opakowanie: "Opakowanie (zł)",
  cena_bukietu: "Cena bukietu (zł)",
  zysk_całkowity: "Zysk całkowity (zł)",
};

const DEFAULT_COLUMNS = [
  "długość",
  "koszt",
  "ilość",
  "cena_szt",
  "koszt_łączny",
  "zysk",
  "cena_kwiatów",
  "opakowanie",
  "cena_bukietu",
  "zysk_całkowity",
];

const ReusableRoseTable = ({
  rowsByHeight,
  visibleColumns = DEFAULT_COLUMNS,
}) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const cenaBukietuColIndex = visibleColumns.indexOf("cena_bukietu");

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
                          isSelected && colIndex === cenaBukietuColIndex
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

              {/* Add custom row after each height group */}
              <tr className="bg-rose-100">
                <td
                  colSpan={visibleColumns.length}
                  className="text-center italic text-rose-700 py-2"
                >
                  Powyżej {rows[rows.length - 1]?.ilość} kwiatów prosimy o
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
