import React from "react";
import FieldGroup from "./FieldGroup";
import SelectionButton from "./SelectionButton";
import ColorButton from "./ColorButton";
import { COLOR_OPTIONS } from "../kwiaty/roze/roseData";

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
      {COLOR_OPTIONS.map(({ name, code }) => (
        <ColorButton
          key={name}
          color={name}
          hex={code}
          selected={packaging === name}
          disabled={!isOptionAffordable(quantity, height)}
          onClick={() => setPackaging(name)}
        />
      ))}
    </FieldGroup>
  );
}
