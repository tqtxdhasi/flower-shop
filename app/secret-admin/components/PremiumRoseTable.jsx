import React from "react";
import ReusableRoseTable from "./ReusableRoseTable";
import { PREMIUM_BASES, PREMIUM_ROSE_DATA } from "@/app/data/roseConfig";

export const calculatePremiumRow = ({
  length,
  cost,
  quantity,
  packaging,
  profit,
}) => {
  const adjustedQuantity = quantity + (quantity === 47 ? 3 : 2);
  const totalCost = cost * adjustedQuantity;
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

export const processedPremiumData = PREMIUM_BASES.map(({ length, cost }) =>
  PREMIUM_ROSE_DATA.map((row) => calculatePremiumRow({ length, cost, ...row }))
);

const PremiumRoseTable = () => (
  <ReusableRoseTable rowsByHeight={processedPremiumData} />
);

export default PremiumRoseTable;
