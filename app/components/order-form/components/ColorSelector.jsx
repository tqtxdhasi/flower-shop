import React from "react";
import FieldGroup from "./FieldGroup";
import ColorButton from "./ColorButton";
import { COLOR_OPTIONS } from "@/app/data/roseData";

export default function ColorSelector({ flowerColor, setFlowerColor }) {
  return (
    <FieldGroup label="Wybierz kolor róż:">
      {COLOR_OPTIONS.map(({ slug, code }) => (
        <ColorButton
          key={slug}
          color={slug}
          hex={code}
          selected={flowerColor === slug}
          onClick={() => setFlowerColor(slug)}
        />
      ))}
    </FieldGroup>
  );
}
