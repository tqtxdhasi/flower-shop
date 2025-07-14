import React from "react";
import ReusableRoseTable from "./ReusableRoseTable";

 const premiumBases = [
  { długość: 40, koszt: 3.6 },
  { długość: 50, koszt: 4 },
  { długość: 60, koszt: 4.4 },
  { długość: 70, koszt: 5 },
  { długość: 80, koszt: 5.6 },
];

 const premiumRoseData = [
  { ilość: 23, opakowanie: 15, zysk: 49.99 },
  { ilość: 47, opakowanie: 20, zysk: 59.99 },
];

 const calculatePremiumRoseRow = ({
  długość,
  koszt,
  ilość,
  opakowanie,
  zysk,
}) => {
  const koszt_łączny = koszt * (ilość === 47 ? ilość + 3 : ilość + 2);
  const cena_kwiatów = koszt_łączny + zysk;
  const cena_bukietu = cena_kwiatów + opakowanie;
  const cena_szt = +(cena_kwiatów / ilość).toFixed(2);
  const zysk_całkowity = zysk + opakowanie;

  return {
    długość,
    koszt,
    ilość,
    cena_szt,
    koszt_łączny,
    zysk,
    cena_kwiatów,
    opakowanie,
    cena_bukietu,
    zysk_całkowity,
  };
};
export const processedDataRosesPremium = premiumBases.map(({ długość, koszt }) =>
  premiumRoseData.map((row) =>
    calculatePremiumRoseRow({ długość, koszt, ...row })
  )
);
const PremiumRoseTable = () => (
  <ReusableRoseTable rowsByHeight={processedDataRosesPremium} />
);

export default PremiumRoseTable;
