// hooks/useTotalPriceCalculator.js
import { useCallback } from "react";
import {
  PRICE_SHEET,
  PACKAGING_COSTS,
  DELIVERY_CHARGE,
  LETTER_COST,
  IMAGE_COST,
} from "../data/roseData";

export default function useTotalPriceCalculator({
  packaging,
  delivery,
  letterOption,
  imageOption,
  budget,
  setTotalPrice,
  setPackagingCost,
}) {
  const calculateTotalPrice = useCallback(
    (quantity, height) => {
      const basePrice = PRICE_SHEET[height]?.[quantity] || 0;
      const pkgCost = packaging ? PACKAGING_COSTS[quantity] || 0 : 0;
      setTotalPrice(basePrice);
      setPackagingCost(pkgCost);
    },
    [packaging, setTotalPrice, setPackagingCost]
  );

  const isOptionAffordable = useCallback(
    (quantity, height) => {
      const basePrice = PRICE_SHEET[height]?.[quantity] || 0;
      const totalCost =
        basePrice +
        (packaging ? PACKAGING_COSTS[quantity] || 0 : 0) +
        (delivery ? DELIVERY_CHARGE : 0) +
        (letterOption ? LETTER_COST : 0) +
        (imageOption ? IMAGE_COST : 0);
      return budget == null || budget >= totalCost;
    },
    [budget, packaging, delivery, letterOption, imageOption]
  );

  const getFinalPrice = useCallback(
    (totalPrice, packagingCost) =>
      totalPrice +
      packagingCost +
      (delivery ? DELIVERY_CHARGE : 0) +
      (letterOption ? LETTER_COST : 0) +
      (imageOption ? IMAGE_COST : 0),
    [delivery, letterOption, imageOption]
  );

  return { calculateTotalPrice, isOptionAffordable, getFinalPrice };
}
