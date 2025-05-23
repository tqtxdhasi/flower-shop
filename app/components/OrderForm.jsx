"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  COLOR_OPTIONS,
  DELIVERY_CHARGE,
  HEIGHTS,
  IMAGE_COST,
  LETTER_COST,
  PACKAGING_COSTS,
  PRICE_SHEET,
  QUANTITIES,
} from "../kwiaty/roze/roseData";
import ModalConfirmation from "./ModalConfirmation";
import PhoneInput from "./PhoneInput";
import BudgetInput from "./BudgetInput";
import OptionSelector from "./OptionSelector";
import PackagingSelector from "./PackagingSelector";
import ColorSelector from "./ColorSelector";
import Extras from "./Extras";
import Summary from "./Summary";

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
  const [imageOption, setImageOption] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

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
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const isOptionAffordable = useCallback(
    (q, h) => {
      const basePrice = PRICE_SHEET[h]?.[q] || 0;
      const totalCost =
        basePrice +
        (packaging ? PACKAGING_COSTS[q] || 0 : 0) +
        (delivery ? DELIVERY_CHARGE : 0) +
        (letterOption ? LETTER_COST : 0) +
        (imageOption ? IMAGE_COST : 0);
      return budget >= totalCost;
    },
    [budget, packaging, delivery, letterOption, imageOption]
  );

  const getFinalPrice = useCallback(() => {
    return (
      totalPrice +
      packagingCost +
      (delivery ? DELIVERY_CHARGE : 0) +
      (letterOption ? LETTER_COST : 0) +
      (imageOption ? IMAGE_COST : 0)
    );
  }, [totalPrice, packagingCost, delivery, letterOption, imageOption]);

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
    setStateFromParams(params.get("imageOption"), (v) =>
      setImageOption(v === "true")
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
    if (imageOption) params.set("imageOption", imageOption);

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
    imageOption,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError("Nieprawidłowy numer telefonu");
      return;
    }

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
      imageOption,
      phoneNumber,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmittedData(formData);
        setShowModal(true);

        // Reset form fields
        setBudget(530);
        setQuantity(19);
        setHeight(50);
        setPackaging("White");
        setFlowerColor("Pink");
        setDelivery(false);
        setLetterOption(false);
        setImageOption(false);
        setPhoneNumber("");
        setPhoneError("");
      } else {
        const error = await res.json();
        console.error("Błąd wysyłania:", error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^\+?[0-9]{9,15}$/;
    return phoneRegex.test(number);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-xl flex flex-col gap-4 bg-rose-50"
    >
      <PhoneInput
        {...{ phoneNumber, setPhoneNumber, phoneError, setPhoneError }}
      />
      <BudgetInput {...{ budget, setBudget }} />
      <OptionSelector
        label="Wybierz ilość róż:"
        options={QUANTITIES}
        selected={quantity}
        onSelect={setQuantity}
        isDisabled={(q) => !isOptionAffordable(q, height)}
      />
      <OptionSelector
        label="Wybierz długość łodyg (cm):"
        options={HEIGHTS}
        selected={height}
        onSelect={setHeight}
        isDisabled={(h) => !isOptionAffordable(quantity, h)}
      />
      <PackagingSelector
        {...{ packaging, setPackaging, quantity, height, isOptionAffordable }}
      />
      <ColorSelector {...{ flowerColor, setFlowerColor }} />
      <Extras
        {...{
          delivery,
          setDelivery,
          letterOption,
          setLetterOption,
          imageOption,
          setImageOption,
        }}
      />
      <Summary
        {...{
          totalPrice,
          packagingCost,
          delivery,
          letterOption,
          imageOption,
          getFinalPrice,
          budget,
        }}
      />
      <button
        type="submit"
        disabled={!quantity || !height || budget < getFinalPrice()}
        className="w-full py-3 px-4 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {budget >= getFinalPrice() ? "Złóż zamówienie" : "Za mały budżet"}
      </button>
      {showModal && submittedData && (
        <ModalConfirmation
          data={submittedData}
          onClose={() => setShowModal(false)}
        />
      )}
    </form>
  );
}
