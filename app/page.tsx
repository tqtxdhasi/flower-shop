import React from "react";

import Header from "./components/Header";
import WhyChooseUs from "./components/WhyChooseUs";
import AvailableFlowers from "./components/AvailableFlowers";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-black text-white p-3">
      <Header />
      <WhyChooseUs />
      <AvailableFlowers />
      <HowItWorks />
      <Footer />
    </div>
  );
}
