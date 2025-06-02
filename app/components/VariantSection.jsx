export default function VariantSection({ title, items, columns = 1 }) {
  const colSpanClass = columns === 2 ? "col-span-2" : "md:col-span-1";

  return (
    <div
      className={`p-4 bg-rose-50 rounded-lg shadow-sm flex flex-col gap-2 col-span-2 md:${colSpanClass}`}
    >
      <h4 className="text-rose-900 font-semibold">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="bg-white text-rose-900 border-2 border-rose-200 hover:bg-rose-50 transition-colors rounded-full px-4 py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
