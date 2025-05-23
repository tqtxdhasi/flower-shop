import SelectionButton from "./SelectionButton";
import FieldGroup from "./FieldGroup";

export default function OptionSelector({
  label,
  options,
  selected,
  onSelect,
  isDisabled,
}) {
  return (
    <FieldGroup label={label}>
      {options.map((option) => (
        <SelectionButton
          key={option}
          value={option}
          selected={selected === option}
          disabled={isDisabled(option)}
          onClick={() => onSelect(option)}
        />
      ))}
    </FieldGroup>
  );
}
