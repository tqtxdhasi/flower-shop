import React from "react";
import FieldGroup from "./FieldGroup";
import ColorButton from "./ColorButton";
import { COLOR_OPTIONS } from "@/app/data/roseData";

export default function ColorSelector({ flowerColor, setFlowerColor }) {
  return (
    <FieldGroup label="Wybierz kolor róż:">
      {COLOR_OPTIONS.map(({ color, code }) => (
        <ColorButton
          key={color}
          color={color}
          hex={code}
          selected={flowerColor === color}
          onClick={() => setFlowerColor(color)}
        />
      ))}
    </FieldGroup>
  );
}
