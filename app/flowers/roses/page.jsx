"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OrderForm() {
  const router = useRouter();

  const [budget, setBudget] = useState(0);
  const [quantity, setQuantity] = useState(null);
  const [height, setHeight] = useState(null);
  const [packaging, setPackaging] = useState("");
  const [delivery, setDelivery] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [packagingCost, setPackagingCost] = useState(0);
  const [flowerColor, setFlowerColor] = useState("");
  const [letterOption, setLetterOption] = useState(false);

  const packagingColors = {
    Red: "#FF0000",
    Pink: "#FFC0CB",
    White: "#FFFFFF",
    Yellow: "#FFFF00",
    Purple: "#800080",
    Blue: "#0000FF",
  };

  const flowerColors = {
    Red: "#FF0000",
    Pink: "#FFC0CB",
    White: "#FFFFFF",
    Yellow: "#FFFF00",
    Purple: "#800080",
    Blue: "#0000FF",
  };

  const priceSheet = {
    40: { 9: 90, 19: 140, 29: 195, 39: 240, 49: 290 },
    50: { 9: 100, 19: 160, 29: 225, 39: 280, 49: 340 },
    60: { 9: 110, 19: 180, 29: 255, 39: 320, 49: 390 },
    70: { 9: 120, 19: 200, 29: 285, 39: 360, 49: 440 },
    80: { 9: 130, 19: 220, 29: 315, 39: 400, 49: 490 },
  };

  const packagingCosts = { 9: 10, 19: 10, 29: 15, 39: 15, 49: 20 };

  const letterCost = 10;

  const calculateTotalPrice = (q, h, packaging) => {
    if (q && h && priceSheet[h] && priceSheet[h][q]) {
      let newPrice = priceSheet[h][q];

      setPackagingCost(packaging === "" ? 0 : packagingCosts[q] || 0);

      setTotalPrice(newPrice);
    } else {
      setTotalPrice(0);
      setPackagingCost(0);
    }
  };

  const isOptionAffordable = (q, h) => {
    const total = (priceSheet[h] && priceSheet[h][q]) || 0;
    const packagingPrice = packaging === "" ? 0 : packagingCosts[q] || 0;
    return budget >= total + packagingPrice + (letterOption ? letterCost : 0);
  };

  useEffect(() => {
    const highestQuantity = 49;
    const highestHeight = 80;
    const maxPrice = priceSheet[highestHeight][highestQuantity];
    const maxPackagingCost = packagingCosts[highestQuantity] || 0;
    setBudget(maxPrice + maxPackagingCost);
  }, []);

  const deliveryCharge = 20;

  const getFinalPrice = () => {
    const basePrice = totalPrice + packagingCost;
    return delivery
      ? basePrice + deliveryCharge + (letterOption ? letterCost : 0)
      : basePrice + (letterOption ? letterCost : 0);
  };

  useEffect(() => {
    if (quantity && height !== null) {
      calculateTotalPrice(quantity, height, packaging);
    }
  }, [quantity, height, packaging]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    // Read URL parameters if available
    const queryQuantity = queryParams.get("quantity");
    const queryHeight = queryParams.get("height");
    const queryPackaging = queryParams.get("packaging");
    const queryFlowerColor = queryParams.get("flowerColor");
    const queryDelivery = queryParams.get("delivery") === "true";
    const queryBudget = queryParams.get("budget");
    const queryLetterOption = queryParams.get("letterOption") === "true";

    if (queryQuantity) setQuantity(parseInt(queryQuantity));
    if (queryHeight) setHeight(parseInt(queryHeight));
    if (queryPackaging) setPackaging(queryPackaging);
    if (queryFlowerColor) setFlowerColor(queryFlowerColor);
    if (queryDelivery) setDelivery(true);
    if (queryBudget) setBudget(parseInt(queryBudget));
    if (queryLetterOption) setLetterOption(true);
  }, []);

  const updateUrl = () => {
    const queryParams = new URLSearchParams();
    if (quantity) queryParams.set("quantity", quantity);
    if (height) queryParams.set("height", height);
    if (packaging) queryParams.set("packaging", packaging);
    if (flowerColor) queryParams.set("flowerColor", flowerColor);
    if (delivery) queryParams.set("delivery", delivery);
    if (budget) queryParams.set("budget", budget);
    if (letterOption) queryParams.set("letterOption", "true");

    router.push(`?${queryParams.toString()}`);
  };

  useEffect(() => {
    updateUrl();
  }, [
    quantity,
    height,
    packaging,
    flowerColor,
    delivery,
    budget,
    letterOption,
  ]);

  const handleSubmit = () => {
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
    console.log("Form Data:", formData);
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="max-w-md mx-auto p-6 ">
      <h2 className="text-xl font-bold mb-4">Formularz zamówienia</h2>

      <label className="block mb-2" htmlFor="budget">
        Wprowadź budżet (zl):
      </label>
      <input
        id="budget"
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Wprowadź budżet"
        min="0"
        aria-label="Wprowadź budżet"
      />

      {/* Letter Option */}
      <div className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={letterOption}
          onChange={() => setLetterOption(!letterOption)}
          className="w-5 h-5"
          aria-label="Dołącz list (+10 PLN)"
        />
        <label>Dołącz list (+10 PLN)</label>
      </div>

      {/* Quantity selection */}
      <div className="mb-4">
        <label className="block mb-2">Ilość:</label>
        <div className="flex gap-2">
          {[9, 19, 29, 39, 49].map((q) => (
            <button
              key={q}
              onClick={() => setQuantity(q)}
              disabled={!isOptionAffordable(q, height)}
              className={`px-4 py-2 border rounded-lg transition ${
                quantity === q
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              } ${
                !isOptionAffordable(q, height)
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              aria-pressed={quantity === q}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Height selection */}
      <div className="mb-4">
        <label className="block mb-2">Wysokość:</label>
        <div className="flex gap-2">
          {[40, 50, 60, 70, 80].map((h) => (
            <button
              key={h}
              onClick={() => setHeight(h)}
              disabled={!isOptionAffordable(quantity, h)}
              className={`px-4 py-2 border rounded-lg transition ${
                height === h
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              } ${
                !isOptionAffordable(quantity, h)
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              aria-pressed={height === h}
            >
              {h}
            </button>
          ))}
        </div>
      </div>

      {/* Packaging selection */}
      <div className="mb-4">
        <label className="block mb-2">Opakowanie:</label>
        <div className="flex gap-2">
          <button
            onClick={() => setPackaging("")}
            className={`px-4 py-2 border rounded-lg transition ${
              packaging === ""
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            } `}
            aria-pressed={packaging === ""}
          >
            Bun
          </button>
          {Object.entries(packagingColors).map(([color, hex]) => (
            <button
              key={color}
              onClick={() => setPackaging(color)}
              disabled={!isOptionAffordable(quantity, height)}
              className={`w-10 h-10 rounded-full flex items-center border-black border justify-center transition ${
                packaging === color
                  ? "ring-2 ring-white ring-offset-2"
                  : "hover:bg-opacity-80"
              }`}
              style={{ backgroundColor: hex }}
              aria-pressed={packaging === color}
            >
              {packaging === color && <span className="text-white">✔</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Flower Color selection */}
      <div className="mb-4">
        <label className="block mb-2">Kolor kwiatów:</label>
        <div className="flex gap-2">
          {Object.entries(flowerColors).map(([color, hex]) => (
            <button
              key={color}
              onClick={() => setFlowerColor(color)}
              className={`w-10 h-10 rounded-full flex items-center border-black border justify-center transition ${
                flowerColor === color
                  ? "ring-2 ring-white ring-offset-2"
                  : "hover:bg-opacity-80"
              }`}
              style={{ backgroundColor: hex }}
              aria-pressed={flowerColor === color}
            >
              {flowerColor === color && <span className="text-white">✔</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Delivery checkbox */}
      <div className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={delivery}
          onChange={() => setDelivery(!delivery)}
          className="w-5 h-5"
          aria-label="Dołącz dostawę (+20 PLN)"
        />
        <label>Dołącz dostawę (+20 PLN)</label>
      </div>

      {/* Price breakdown */}
      <div className="mb-4">
        <label className="block font-bold">Całkowita cena kwiatów (PLN):</label>
        <p className="font-semibold">{totalPrice}</p>

        <label className="block font-bold mt-2">Koszt opakowania (PLN):</label>
        <p className="font-semibold">{packagingCost}</p>

        <label className="block font-bold mt-2">Koszt dostawy (PLN):</label>
        <p className="font-semibold">{delivery ? deliveryCharge : 0}</p>

        <label className="block font-bold mt-2">Koszt listu (PLN):</label>
        <p className="font-semibold">{letterOption ? letterCost : 0}</p>
      </div>

      <div className="mb-4">
        <label className="block font-bold mt-2">Całkowita cena (PLN):</label>
        <p className="font-semibold">{getFinalPrice()}</p>
      </div>

      {/* Submit button */}
      <button
        className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
        /*disabled={totalPrice === 0 || budget < getFinalPrice()}*/
        onClick={handleSubmit}
      >
        Wyślij
      </button>

      {/*budget && budget < getFinalPrice() && (
        <p className="text-red-500 mt-2">
Twój budżet jest za niski na to zamówienie.
        </p>
      )*/}
    </div>
  );
}
