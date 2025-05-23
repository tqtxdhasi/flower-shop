import React from "react";
import FieldGroup from "./FieldGroup";
import SelectionButton from "./SelectionButton";
import ColorButton from "./ColorButton";
import { COLOR_OPTIONS } from "@/app/data/roseData";

export default function PackagingSelector({
  packaging,
  setPackaging,
  quantity,
  height,
  isOptionAffordable,
}) {
  return (
    <FieldGroup label="Wybierz opakowanie:">
      <SelectionButton
        value="Wstążka"
        selected={packaging === ""}
        onClick={() => setPackaging("")}
      />
      {COLOR_OPTIONS.map(({ color, code }) => (
        <ColorButton
          key={color}
          color={color}
          hex={code}
          selected={packaging === color}
          disabled={!isOptionAffordable(quantity, height)}
          onClick={() => setPackaging(color)}
        />
      ))}
    </FieldGroup>
  );
}
