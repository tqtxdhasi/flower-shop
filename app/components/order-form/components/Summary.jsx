import PriceRow from "./PriceRow";
import { DELIVERY_CHARGE, LETTER_COST, IMAGE_COST } from "@/app/data/roseData";

export default function Summary({
  totalPrice,
  packagingCost,
  delivery,
  letterOption,
  imageOption,
  getFinalPrice,
  budget,
}) {
  const finalPrice = getFinalPrice();
  const overBudget =
    budget != null && budget < finalPrice
      ? (finalPrice - budget).toFixed(2)
      : null;

  return (
    <div className="p-4 bg-rose-200 rounded-lg">
      <PriceRow label="Cena podstawowa" value={totalPrice} />
      {packagingCost > 0 && (
        <PriceRow label="Opakowanie" value={packagingCost} />
      )}
      {delivery && <PriceRow label="Dostawa" value={DELIVERY_CHARGE} />}
      {letterOption && <PriceRow label="List" value={LETTER_COST} />}
      {imageOption && <PriceRow label="Zdjęcie" value={IMAGE_COST} />}
      <hr className="my-2 text-rose-900" />
      <PriceRow label="Suma końcowa" value={finalPrice} isTotal />
      {overBudget && (
        <div className="mt-3 text-red-600 text-sm">
          Budżet przekroczony o {overBudget} PLN
        </div>
      )}
    </div>
  );
}
