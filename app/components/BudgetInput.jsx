import FieldGroup from "./FieldGroup";

export default function BudgetInput({ budget, setBudget }) {
  return (
    <FieldGroup label="Twój budżet (zl):">
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(Math.max(0, Number(e.target.value)))}
        className="bg-white w-full px-4 py-2 rounded-lg text-rose-900 border-2 border-rose-200 focus:ring-rose-500 focus:outline-none focus:border-rose-500"
        min="0"
        required
      />
    </FieldGroup>
  );
}
