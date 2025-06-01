"use client";

import React from "react";

const data = [
  {
    length: 40,
    costPerPiece: 4,
    rows: [
      {
        quantity: 9,
        pricePerPiece: 10,
        costTotal: 40,
        flowerPrice: 90,
        bouquetPrice: 100,
        profit: 50,
        packaging: 10,
        totalProfit: 60,
      },
      {
        quantity: 19,
        pricePerPiece: 7.37,
        costTotal: 80,
        flowerPrice: 140,
        bouquetPrice: 150,
        profit: 60,
        packaging: 10,
        totalProfit: 70,
      },
      {
        quantity: 29,
        pricePerPiece: 6.73,
        costTotal: 120,
        flowerPrice: 195,
        bouquetPrice: 210,
        profit: 75,
        packaging: 15,
        totalProfit: 90,
      },
      {
        quantity: 39,
        pricePerPiece: 6.16,
        costTotal: 160,
        flowerPrice: 240,
        bouquetPrice: 255,
        profit: 80,
        packaging: 15,
        totalProfit: 95,
      },
      {
        quantity: 49,
        pricePerPiece: 5.92,
        costTotal: 200,
        flowerPrice: 290,
        bouquetPrice: 310,
        profit: 90,
        packaging: 20,
        totalProfit: 110,
      },
      {
        quantity: 59,
        pricePerPiece: 5.77,
        costTotal: 240,
        flowerPrice: 340,
        bouquetPrice: 360,
        profit: 100,
        packaging: 20,
        totalProfit: 120,
      },
    ],
  },
  {
    length: 50,
    costPerPiece: 5,
    rows: [
      {
        quantity: 9,
        pricePerPiece: 11.12,
        costTotal: 50,
        flowerPrice: 100,
        bouquetPrice: 110,
        profit: 50,
        packaging: 10,
        totalProfit: 60,
      },
      {
        quantity: 19,
        pricePerPiece: 8.43,
        costTotal: 100,
        flowerPrice: 160,
        bouquetPrice: 170,
        profit: 60,
        packaging: 10,
        totalProfit: 70,
      },
      {
        quantity: 29,
        pricePerPiece: 7.76,
        costTotal: 150,
        flowerPrice: 225,
        bouquetPrice: 240,
        profit: 75,
        packaging: 15,
        totalProfit: 90,
      },
      {
        quantity: 39,
        pricePerPiece: 7.18,
        costTotal: 200,
        flowerPrice: 280,
        bouquetPrice: 295,
        profit: 80,
        packaging: 15,
        totalProfit: 95,
      },
      {
        quantity: 49,
        pricePerPiece: 6.94,
        costTotal: 250,
        flowerPrice: 340,
        bouquetPrice: 360,
        profit: 90,
        packaging: 20,
        totalProfit: 110,
      },
      {
        quantity: 59,
        pricePerPiece: 6.78,
        costTotal: 300,
        flowerPrice: 400,
        bouquetPrice: 420,
        profit: 100,
        packaging: 20,
        totalProfit: 120,
      },
    ],
  },
  {
    length: 60,
    costPerPiece: 6,
    rows: [
      {
        quantity: 9,
        pricePerPiece: 12.23,
        costTotal: 60,
        flowerPrice: 110,
        bouquetPrice: 120,
        profit: 50,
        packaging: 10,
        totalProfit: 60,
      },
      {
        quantity: 19,
        pricePerPiece: 9.48,
        costTotal: 120,
        flowerPrice: 180,
        bouquetPrice: 190,
        profit: 60,
        packaging: 10,
        totalProfit: 70,
      },
      {
        quantity: 29,
        pricePerPiece: 8.8,
        costTotal: 180,
        flowerPrice: 255,
        bouquetPrice: 270,
        profit: 75,
        packaging: 15,
        totalProfit: 90,
      },
      {
        quantity: 39,
        pricePerPiece: 8.21,
        costTotal: 240,
        flowerPrice: 320,
        bouquetPrice: 335,
        profit: 80,
        packaging: 15,
        totalProfit: 95,
      },
      {
        quantity: 49,
        pricePerPiece: 7.96,
        costTotal: 300,
        flowerPrice: 390,
        bouquetPrice: 410,
        profit: 90,
        packaging: 20,
        totalProfit: 110,
      },
      {
        quantity: 59,
        pricePerPiece: 7.8,
        costTotal: 360,
        flowerPrice: 460,
        bouquetPrice: 480,
        profit: 100,
        packaging: 20,
        totalProfit: 120,
      },
    ],
  },
  {
    length: 70,
    costPerPiece: 7,
    rows: [
      {
        quantity: 9,
        pricePerPiece: 13.34,
        costTotal: 70,
        flowerPrice: 120,
        bouquetPrice: 130,
        profit: 50,
        packaging: 10,
        totalProfit: 60,
      },
      {
        quantity: 19,
        pricePerPiece: 10.53,
        costTotal: 140,
        flowerPrice: 200,
        bouquetPrice: 210,
        profit: 60,
        packaging: 10,
        totalProfit: 70,
      },
      {
        quantity: 29,
        pricePerPiece: 9.83,
        costTotal: 210,
        flowerPrice: 285,
        bouquetPrice: 300,
        profit: 75,
        packaging: 15,
        totalProfit: 90,
      },
      {
        quantity: 39,
        pricePerPiece: 9.24,
        costTotal: 280,
        flowerPrice: 360,
        bouquetPrice: 375,
        profit: 80,
        packaging: 15,
        totalProfit: 95,
      },
      {
        quantity: 49,
        pricePerPiece: 8.98,
        costTotal: 350,
        flowerPrice: 440,
        bouquetPrice: 460,
        profit: 90,
        packaging: 20,
        totalProfit: 110,
      },
      {
        quantity: 59,
        pricePerPiece: 8.82,
        costTotal: 420,
        flowerPrice: 520,
        bouquetPrice: 540,
        profit: 100,
        packaging: 20,
        totalProfit: 120,
      },
    ],
  },
  {
    length: 80,
    costPerPiece: 8,
    rows: [
      {
        quantity: 9,
        pricePerPiece: 14.45,
        costTotal: 80,
        flowerPrice: 130,
        bouquetPrice: 140,
        profit: 50,
        packaging: 10,
        totalProfit: 60,
      },
      {
        quantity: 19,
        pricePerPiece: 11.58,
        costTotal: 160,
        flowerPrice: 220,
        bouquetPrice: 230,
        profit: 60,
        packaging: 10,
        totalProfit: 70,
      },
      {
        quantity: 29,
        pricePerPiece: 10.87,
        costTotal: 240,
        flowerPrice: 315,
        bouquetPrice: 330,
        profit: 75,
        packaging: 15,
        totalProfit: 90,
      },
      {
        quantity: 39,
        pricePerPiece: 10.26,
        costTotal: 320,
        flowerPrice: 400,
        bouquetPrice: 415,
        profit: 80,
        packaging: 15,
        totalProfit: 95,
      },
      {
        quantity: 49,
        pricePerPiece: 10,
        costTotal: 400,
        flowerPrice: 490,
        bouquetPrice: 510,
        profit: 90,
        packaging: 20,
        totalProfit: 110,
      },
      {
        quantity: 59,
        pricePerPiece: 9.84,
        costTotal: 480,
        flowerPrice: 580,
        bouquetPrice: 600,
        profit: 100,
        packaging: 20,
        totalProfit: 120,
      },
    ],
  },
];

export default function PriceTable() {
  return (
    <div className="overflow-auto p-4 max-w-full">
      <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
        <thead>
          <tr>
            <th className="border border-gray-300 px-2 py-1">Długość (cm)</th>
            <th className="border border-gray-300 px-2 py-1">Koszt (zł/szt)</th>
            <th className="border border-gray-300 px-2 py-1">Ilość</th>
            <th className="border border-gray-300 px-2 py-1">Cena (zł/szt)</th>
            <th className="border border-gray-300 px-2 py-1">Koszt (zł)</th>
            <th className="border border-gray-300 px-2 py-1">
              Cena kwiatów (zł)
            </th>
            <th className="border border-gray-300 px-2 py-1">
              Cena bukietu (zł)
            </th>
            <th className="border border-gray-300 px-2 py-1"></th>
            <th className="border border-gray-300 px-2 py-1">Ilość</th>
            <th className="border border-gray-300 px-2 py-1">Zysk (zł)</th>
            <th className="border border-gray-300 px-2 py-1">Opakowanie</th>
            <th className="border border-gray-300 px-2 py-1">
              Zysk całkowity (zł)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((group) =>
            group.rows.map((row, idx) => (
              <tr
                key={`${group.length}-${row.quantity}`}
                className="odd:bg-green-50 even:bg-green-100"
              >
                {idx === 0 ? (
                  <>
                    <td className="border border-gray-300 px-2 py-1 text-center">
                      {group.length}
                    </td>
                    <td className="border border-gray-300 px-2 py-1 text-center">
                      {group.costPerPiece.toFixed(2)}
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border border-gray-300 px-2 py-1"></td>
                    <td className="border border-gray-300 px-2 py-1"></td>
                  </>
                )}
                <td className="border border-gray-300 px-2 py-1 text-center">
                  {row.quantity}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  {row.pricePerPiece.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  {row.costTotal.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  {row.flowerPrice.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  {row.bouquetPrice.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  {row.quantity}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  {row.profit.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  {row.packaging.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  {row.totalProfit.toFixed(2)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
