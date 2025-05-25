import FieldGroup from "./FieldGroup";

export default function BudgetInput({ budget, setBudget }) {
  return (
    <FieldGroup label="Twój budżet (zł):">
      <input
        type="number"
        value={budget ?? ""}
        onChange={(e) => {
          const val = e.target.value;
          setBudget(val === "" ? null : Math.max(0, Number(val)));
        }}
        placeholder="Brak limitu"
        className="bg-white w-full px-4 py-2 rounded-lg text-rose-900 border-2 border-rose-200 focus:ring-rose-500 focus:outline-none focus:border-rose-500"
        min="0"
      />
    </FieldGroup>
  );
}
