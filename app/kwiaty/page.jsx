import React from "react";
import AvailableFlowers from "../components/AvailableFlowers";
import { shopDomain, shopName } from "../data/mainData";

export const metadata = {
  title: `Dostępne kwiaty | ${shopName}`,
  description: `Przeglądaj dostępne kwiaty i bukiety w ${shopName}`,
  alternates: {
    canonical: `${shopDomain}/kwiaty`,
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
