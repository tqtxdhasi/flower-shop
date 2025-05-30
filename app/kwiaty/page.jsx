import React from "react";
import AvailableFlowers from "../components/AvailableFlowers";

export const metadata = {
  title: "Dostępne kwiaty – Kwiaciarnia Kraków Online",
  description:
    "Przeglądaj dostępne kwiaty i bukiety w Kwiaciarni Kraków Online.",
  alternates: {
    canonical: "https://www.krakow-kwiaciarnia.pl/kwiaty",
  },
};

const page = () => {
  return (
    <div>
      <AvailableFlowers />
    </div>
  );
};

export default page;
