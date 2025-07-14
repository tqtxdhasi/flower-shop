"use client";
import React, { useState, useMemo } from "react";
import {
  STANDARD_BASES,
  PREMIUM_BASES,
  STANDARD_ROSE_DATA,
  PREMIUM_ROSE_DATA,
  COLOR_OPTIONS,
  PACKAGING_OPTIONS,
  LETTER_COST,
  IMAGE_COST,
} from "../data/roseConfig";
import { calculatePremiumRow } from "../secret-admin/components/PremiumRoseTable";
import { calculateStandardRow } from "../secret-admin/components/RoseTable";

export default function RoseCreator() {
  const [selectedType, setSelectedType] = useState(null);
  const [length, setLength] = useState(null);
  const [qty, setQty] = useState(null);
  const [color, setColor] = useState(null);
  const [pack, setPack] = useState("none");
  const [addLetter, setAddLetter] = useState(false);
  const [addImage, setAddImage] = useState(false);
  const [budget, setBudget] = useState("");

  const getRowData = (type, length, qty) => {
    const dataSource = type === "premium" ? PREMIUM_BASES : STANDARD_BASES;
    const flowerData =
      type === "premium" ? PREMIUM_ROSE_DATA : STANDARD_ROSE_DATA;
    const calculator =
      type === "premium" ? calculatePremiumRow : calculateStandardRow;

    const base = dataSource.find((b) => b.length === length);
    const data = flowerData.find((r) => r.quantity === qty);

    if (!base || !data) return null;
    return calculator({ length, cost: base.cost, ...data });
  };

  const breakdown = useMemo(() => {
    if (!selectedType || !length || !qty) return { packCost: 0, total: 0 };

    const row = getRowData(selectedType, length, qty);
    if (!row) return { packCost: 0, total: 0 };

    const packCost = pack === "none" ? 0 : row.packaging;
    const letterCost = addLetter ? LETTER_COST : 0;
    const imageCost = addImage ? IMAGE_COST : 0;

    const bouquetCost = row.flowerPrice + packCost;
    const total = bouquetCost + letterCost + imageCost;

    return {
      packCost,
      total,
    };
  }, [selectedType, length, qty, pack, addLetter, addImage]);

  const isOptionDisabled = (type, length, qty) => {
    if (!budget || isNaN(budget)) return false;

    const row = getRowData(type, length, qty);
    if (!row) return true;

    const packCost = pack === "none" ? 0 : row.packaging;
    const letterCost = addLetter ? LETTER_COST : 0;
    const imageCost = addImage ? IMAGE_COST : 0;

    const total = row.flowerPrice + packCost + letterCost + imageCost;

    return total > Number(budget);
  };

  const handleSelect = (type, length, qty) => {
    setSelectedType(type);
    setLength(length);
    setQty(qty);
  };

  const handleClick = () => {
    const order = {
      type: selectedType,
      length,
      qty,
      color,
      pack,
      addLetter,
      addImage,
      total: breakdown.total,
    };
    alert(JSON.stringify(order, null, 2));
  };

  const renderOptions = (label, type, bases, roseData) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{label}</h3>
      {bases.map((b) => (
        <div key={b.length} className="mb-2">
          <span className="font-medium">{b.length} cm:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {roseData.map((r) => {
              const disabled = isOptionDisabled(type, b.length, r.quantity);
              const isSelected =
                selectedType === type &&
                length === b.length &&
                qty === r.quantity;
              return (
                <button
                  key={r.quantity}
                  onClick={() => handleSelect(type, b.length, r.quantity)}
                  disabled={disabled}
                  className={`px-3 py-1 rounded border ${
                    isSelected ? "bg-pink-500 text-white" : ""
                  } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {r.quantity}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Stwórz swój bukiet róż</h2>
      <div className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Budżet (zł)</label>
          <input
            type="number"
            value={budget ?? ""}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Maksymalna kwota"
          />
        </div>

        {renderOptions(
          "Zwykłe róże",
          "standard",
          STANDARD_BASES,
          STANDARD_ROSE_DATA
        )}
        {renderOptions(
          "Premium róże",
          "premium",
          PREMIUM_BASES,
          PREMIUM_ROSE_DATA
        )}

        <div>
          <label className="block mb-2 font-medium">Kolor róż</label>
          <div className="flex flex-wrap gap-2">
            {COLOR_OPTIONS.map((c) => (
              <button
                key={c.color}
                onClick={() => setColor(c.color)}
                className={`px-3 py-1 rounded ${
                  color === c.color ? "bg-pink-500 text-white" : "border"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">Opakowanie</label>
          <div className="flex flex-wrap gap-2">
            {PACKAGING_OPTIONS.map((p) => (
              <button
                key={p.slug}
                onClick={() => setPack(p.slug)}
                className={`px-3 py-1 rounded ${
                  pack === p.slug ? "bg-pink-500 text-white" : "border"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">Dodatki</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={addLetter}
                onChange={() => setAddLetter(!addLetter)}
                className="mr-2"
              />
              Dodaj list – {LETTER_COST} zł
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={addImage}
                onChange={() => setAddImage(!addImage)}
                className="mr-2"
              />
              Dodaj zdjęcie – {IMAGE_COST} zł
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded">
        <p>
          Opakowanie:{" "}
          <span className="font-medium">
            {breakdown.packCost.toFixed(2)} zł
          </span>
        </p>
        {addLetter && (
          <p>
            List: <span className="font-medium">{LETTER_COST} zł</span>
          </p>
        )}
        {addImage && (
          <p>
            Zdjęcie: <span className="font-medium">{IMAGE_COST} zł</span>
          </p>
        )}
        <h3 className="text-xl font-semibold mt-2">
          Razem: {breakdown.total.toFixed(2)} zł
        </h3>
        <button
          onClick={handleClick}
          className="w-full mt-4 py-2 bg-pink-500 text-white rounded"
          disabled={!selectedType || !length || !qty}
        >
          Pokaż dane zamówienia
        </button>
      </div>
    </div>
  );
}
