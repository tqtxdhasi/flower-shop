// components/OrderForm.js
"use client";
import { useState, useEffect } from "react";
import useOrderParams from "../hooks/useOrderParams";
import useURLSync from "../hooks/useURLSync";
import useModalScrollLock from "../hooks/useModalScrollLock";
import useTotalPriceCalculator from "../hooks/useTotalPriceCalculator";
import { QUANTITIES, HEIGHTS } from "../kwiaty/roze/roseData";
import ModalConfirmation from "./ModalConfirmation";
import PhoneInput from "./PhoneInput";
import BudgetInput from "./BudgetInput";
import OptionSelector from "./OptionSelector";
import PackagingSelector from "./PackagingSelector";
import ColorSelector from "./ColorSelector";
import Extras from "./Extras";
import Summary from "./Summary";

export default function OrderForm() {
  const [budget, setBudget] = useState(530);
  const [quantity, setQuantity] = useState(19);
  const [height, setHeight] = useState(50);
  const [packaging, setPackaging] = useState("bialy");
  const [delivery, setDelivery] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [packagingCost, setPackagingCost] = useState(0);
  const [flowerColor, setFlowerColor] = useState("rozowy");
  const [letterOption, setLetterOption] = useState(false);
  const [imageOption, setImageOption] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useOrderParams({
    quantity: setQuantity,
    height: setHeight,
    packaging: setPackaging,
    flowerColor: setFlowerColor,
    delivery: setDelivery,
    budget: setBudget,
    letterOption: setLetterOption,
    imageOption: setImageOption,
  });

  const { calculateTotalPrice, isOptionAffordable, getFinalPrice } =
    useTotalPriceCalculator({
      packaging,
      delivery,
      letterOption,
      imageOption,
      budget,
      setTotalPrice,
      setPackagingCost,
    });

  useEffect(() => {
    calculateTotalPrice(quantity, height);
  }, [quantity, height, calculateTotalPrice]);

  useModalScrollLock(showModal);

  useURLSync(
    {
      quantity,
      height,
      packaging,
      flowerColor,
      delivery,
      budget,
      letterOption,
      imageOption,
    },
    [
      quantity,
      height,
      packaging,
      flowerColor,
      delivery,
      budget,
      letterOption,
      imageOption,
    ]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\+?[0-9]{9,15}$/.test(phoneNumber)) {
      setPhoneError("Nieprawidłowy numer telefonu");
      return;
    }
    const finalPrice = getFinalPrice(totalPrice, packagingCost);
    const formData = {
      quantity,
      height,
      packaging,
      flowerColor,
      delivery,
      totalPrice,
      packagingCost,
      finalPrice,
      letterOption,
      imageOption,
      budget,
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
        // reset
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
      }
    } catch (err) {
      console.error(err);
    }
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
          getFinalPrice: () => getFinalPrice(totalPrice, packagingCost),
          budget,
        }}
      />
      <button
        type="submit"
        disabled={
          !quantity ||
          !height ||
          budget < getFinalPrice(totalPrice, packagingCost)
        }
        className="w-full py-3 px-4 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {budget >= getFinalPrice(totalPrice, packagingCost)
          ? "Złóż zamówienie"
          : "Za mały budżet"}
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
