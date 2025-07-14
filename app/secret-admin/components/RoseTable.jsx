import React from "react";
import ReusableRoseTable from "./ReusableRoseTable";
import { STANDARD_BASES, STANDARD_ROSE_DATA } from "@/app/data/roseConfig";

const calculateStandardRow = ({
  length,
  cost,
  quantity,
  packaging,
  profit,
}) => {
  const totalCost = cost * (quantity + 1);
  const flowerPrice = totalCost + profit;
  const bouquetPrice = flowerPrice + packaging;
  const pricePerStem = +(flowerPrice / quantity).toFixed(2);
  const totalProfit = profit + packaging;

  return {
    length,
    cost,
    quantity,
    pricePerStem,
    totalCost,
    profit,
    flowerPrice,
    packaging,
    bouquetPrice,
    totalProfit,
  };
};

export const processedStandardData = STANDARD_BASES.map(({ length, cost }) =>
  STANDARD_ROSE_DATA.map((row) =>
    calculateStandardRow({ length, cost, ...row })
  )
);

const RoseTable = () => (
  <ReusableRoseTable rowsByHeight={processedStandardData} />
);

export default RoseTable;
