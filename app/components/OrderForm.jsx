"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const PRICE_SHEET = {
  40: { 9: 90, 19: 140, 29: 195, 39: 240, 49: 290 },
  50: { 9: 100, 19: 160, 29: 225, 39: 280, 49: 340 },
  60: { 9: 110, 19: 180, 29: 255, 39: 320, 49: 390 },
  70: { 9: 120, 19: 200, 29: 285, 39: 360, 49: 440 },
  80: { 9: 130, 19: 220, 29: 315, 39: 400, 49: 490 },
};

const PACKAGING_COSTS = { 9: 10, 19: 10, 29: 15, 39: 15, 49: 20 };
const DELIVERY_CHARGE = 20;
const LETTER_COST = 10;
const COLOR_OPTIONS = {
  Red: "#FF0000",
  Pink: "#FFC0CB",
  White: "#FFFFFF",
  Yellow: "#FFFF00",
  Purple: "#800080",
  Blue: "#0000FF",
};

export default function OrderForm() {
  const router = useRouter();
  const [budget, setBudget] = useState(530);
  const [quantity, setQuantity] = useState(19);
  const [height, setHeight] = useState(50);
  const [packaging, setPackaging] = useState("White");
  const [delivery, setDelivery] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [packagingCost, setPackagingCost] = useState(0);
  const [flowerColor, setFlowerColor] = useState("Pink");
  const [letterOption, setLetterOption] = useState(false);

  const calculateTotalPrice = useCallback(
    (q, h) => {
      if (!q || !h || !PRICE_SHEET[h]?.[q]) {
        setTotalPrice(0);
        setPackagingCost(0);
        return;
      }

      const newPrice = PRICE_SHEET[h][q];
      const newPackagingCost = packaging ? PACKAGING_COSTS[q] || 0 : 0;

      setTotalPrice(newPrice);
      setPackagingCost(newPackagingCost);
    },
    [packaging]
  );

  const isOptionAffordable = useCallback(
    (q, h) => {
      const basePrice = PRICE_SHEET[h]?.[q] || 0;
      const totalCost =
        basePrice +
        (packaging ? PACKAGING_COSTS[q] || 0 : 0) +
        (delivery ? DELIVERY_CHARGE : 0) +
        (letterOption ? LETTER_COST : 0);

      return budget >= totalCost;
    },
    [budget, packaging, delivery, letterOption]
  );

  const getFinalPrice = useCallback(() => {
    return (
      totalPrice +
      packagingCost +
      (delivery ? DELIVERY_CHARGE : 0) +
      (letterOption ? LETTER_COST : 0)
    );
  }, [totalPrice, packagingCost, delivery, letterOption]);

  // URL Handling
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const setStateFromParams = (param, setter, parser = Number) => {
      const value = param && parser(param);
      if (value !== null && value !== undefined) setter(value);
    };

    setStateFromParams(params.get("quantity"), setQuantity);
    setStateFromParams(params.get("height"), setHeight);
    setStateFromParams(params.get("packaging"), setPackaging, String);
    setStateFromParams(params.get("flowerColor"), setFlowerColor, String);
    setStateFromParams(params.get("delivery"), (v) =>
      setDelivery(v === "true")
    );
    setStateFromParams(params.get("budget"), setBudget);
    setStateFromParams(params.get("letterOption"), (v) =>
      setLetterOption(v === "true")
    );
  }, []);

  useEffect(() => {
    calculateTotalPrice(quantity, height);
  }, [quantity, height, calculateTotalPrice]);

  // Update URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (quantity) params.set("quantity", quantity);
    if (height) params.set("height", height);
    if (packaging) params.set("packaging", packaging);
    if (flowerColor) params.set("flowerColor", flowerColor);
    if (delivery) params.set("delivery", delivery);
    if (budget) params.set("budget", budget);
    if (letterOption) params.set("letterOption", letterOption);

    router.replace(`?${params.toString()}`, { scroll: false });
  }, [
    quantity,
    height,
    packaging,
    flowerColor,
    delivery,
    budget,
    letterOption,
    router,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      budget,
      quantity,
      height,
      packaging,
      flowerColor,
      delivery,
      totalPrice,
      packagingCost,
      finalPrice: getFinalPrice(),
      letterOption,
    };
    console.log("Order Data:", formData);
    alert(`Potwierdzenie zamówienia:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Budget Input */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Twój budżet (PLN):
        </label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Math.max(0, Number(e.target.value)))}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          min="0"
          required
        />
      </div>

      {/* Quantity Selection */}
      <FieldGroup label="Wybierz ilość róż:">
        <div className="grid grid-cols-3 gap-2">
          {[9, 19, 29, 39, 49].map((q) => (
            <SelectionButton
              key={q}
              value={q}
              selected={quantity === q}
              disabled={!isOptionAffordable(q, height)}
              onClick={() => setQuantity(q)}
            />
          ))}
        </div>
      </FieldGroup>

      {/* Height Selection */}
      <FieldGroup label="Wybierz długość łodyg (cm):">
        <div className="grid grid-cols-3 gap-2">
          {[40, 50, 60, 70, 80].map((h) => (
            <SelectionButton
              key={h}
              value={h}
              selected={height === h}
              disabled={!isOptionAffordable(quantity, h)}
              onClick={() => setHeight(h)}
            />
          ))}
        </div>
      </FieldGroup>

      {/* Packaging Selection */}
      <FieldGroup label="Wybierz opakowanie:">
        <div className="flex flex-wrap gap-3">
          <SelectionButton
            value="Wstążka"
            selected={packaging === ""}
            onClick={() => setPackaging("")}
          />
          {Object.entries(COLOR_OPTIONS).map(([color, hex]) => (
            <ColorButton
              key={color}
              color={color}
              hex={hex}
              selected={packaging === color}
              disabled={!isOptionAffordable(quantity, height)}
              onClick={() => setPackaging(color)}
            />
          ))}
        </div>
      </FieldGroup>

      {/* Flower Color Selection */}
      <FieldGroup label="Wybierz kolor róż:">
        <div className="flex flex-wrap gap-3">
          {Object.entries(COLOR_OPTIONS).map(([color, hex]) => (
            <ColorButton
              key={color}
              color={color}
              hex={hex}
              selected={flowerColor === color}
              onClick={() => setFlowerColor(color)}
            />
          ))}
        </div>
      </FieldGroup>

      {/* Checkboxes */}
      <div className="space-y-4">
        <Checkbox
          label={`Dołącz dostawę (+${DELIVERY_CHARGE} PLN)`}
          checked={delivery}
          onChange={() => setDelivery(!delivery)}
        />
        <Checkbox
          label={`Dołącz list (+${LETTER_COST} PLN)`}
          checked={letterOption}
          onChange={() => setLetterOption(!letterOption)}
        />
      </div>

      {/* Price Summary */}
      {totalPrice > 0 && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <PriceRow label="Cena podstawowa" value={totalPrice} />
          {packagingCost > 0 && (
            <PriceRow label="Opakowanie" value={packagingCost} />
          )}
          {delivery && <PriceRow label="Dostawa" value={DELIVERY_CHARGE} />}
          {letterOption && <PriceRow label="List" value={LETTER_COST} />}
          <hr className="my-3" />
          <PriceRow label="Suma końcowa" value={getFinalPrice()} isTotal />

          {budget < getFinalPrice() && (
            <div className="mt-3 text-red-600 text-sm">
              Budżet przekroczony o {(getFinalPrice() - budget).toFixed(2)} PLN
            </div>
          )}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!quantity || !height || budget < getFinalPrice()}
        className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {budget >= getFinalPrice() ? "Złóż zamówienie" : "Za mały budżet"}
      </button>
    </form>
  );
}

// Reusable Components
const FieldGroup = ({ label, children }) => (
  <div>
    <label className="block text-sm font-medium mb-3">{label}</label>
    {children}
  </div>
);

const SelectionButton = ({ value, selected, disabled, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`p-3 text-center rounded-lg border transition-colors
      ${
        selected
          ? "bg-blue-600 text-white border-blue-700"
          : "bg-white hover:bg-gray-50"
      }
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
  >
    {value}
  </button>
);

const ColorButton = ({ color, hex, selected, onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`w-10 h-10 rounded-full border-2 transition-all
      ${selected ? "ring-2 ring-offset-2 ring-blue-500" : ""}
      ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
    style={{ backgroundColor: hex, borderColor: selected ? hex : "#e5e7eb" }}
    aria-label={`Kolor ${color}`}
  >
    {selected && <span className="text-white">✓</span>}
  </button>
);

const Checkbox = ({ label, checked, onChange }) => (
  <label className="flex items-center space-x-3 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
    />
    <span className="text-gray-700">{label}</span>
  </label>
);

const PriceRow = ({ label, value, isTotal }) => (
  <div className={`flex justify-between ${isTotal ? "font-bold" : "text-sm"}`}>
    <span>{label}:</span>
    <span>{value.toFixed(2)} PLN</span>
  </div>
);
