import React from "react";
import ReusableRoseTable from "./ReusableRoseTable";

export const bases = [
  { długość: 40, koszt: 4 },
  { długość: 50, koszt: 5 },
];

export const roseData = [
  { ilość: 9, opakowanie: 15, zysk: 49.99 },
  { ilość: 19, opakowanie: 10, zysk: 49.99 },
  { ilość: 29, opakowanie: 15, zysk: 74.99 },
  { ilość: 39, opakowanie: 15, zysk: 79.99 },
  { ilość: 49, opakowanie: 20, zysk: 89.99 },
  { ilość: 59, opakowanie: 20, zysk: 99.99 },
];

export const calculateRoseRow = ({
  długość,
  koszt,
  ilość,
  opakowanie,
  zysk,
}) => {
  const koszt_łączny = koszt * (ilość + 1);
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
export const processedDataRoses = bases.map(({ długość, koszt }) =>
  roseData.map((row) => calculateRoseRow({ długość, koszt, ...row }))
);
const RoseTable = () => <ReusableRoseTable rowsByHeight={processedDataRoses} />;

export default RoseTable;
