import React from "react";
import FieldGroup from "./FieldGroup";
import ColorButton from "./ColorButton";
import { COLOR_OPTIONS } from "../kwiaty/roze/roseData";

export default function ColorSelector({ flowerColor, setFlowerColor }) {
  return (
    <FieldGroup label="Wybierz kolor róż:">
      {COLOR_OPTIONS.map(({ name, code }) => (
        <ColorButton
          key={name}
          color={name}
          hex={code}
          selected={flowerColor === name}
          onClick={() => setFlowerColor(name)}
        />
      ))}
    </FieldGroup>
  );
}
