import React from "react";

import Header from "./components/Header";
import WhyChooseUs from "./components/WhyChooseUs";
import AvailableFlowers from "./components/AvailableFlowers";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <div className="font-sans bg-[#FAFAFA] p-3 flex flex-col gap-3">
      <Header />
      <WhyChooseUs />
      <AvailableFlowers />
      <HowItWorks />
    </div>
  );
}
