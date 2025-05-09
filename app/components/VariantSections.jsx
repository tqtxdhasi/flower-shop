import VariantSection from "@/app/components/VariantSection";

const VariantSections = () => {
  return (
    <>
      <h3 className=" text-xl text-rose-900 font-semibold">
        Dostępne Warianty
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        <VariantSection
          title="Rozmiary łodyg"
          items={["40cm", "50cm", "60cm", "70cm", "80cm"]}
        />
        <VariantSection
          title="Kolorystyka"
          items={[
            "Czerwony",
            "Biały",
            "Różowy",
            "Żółty",
            "Pomarańczowy",
            "Miks",
          ]}
        />
        <VariantSection
          title="Dodatkowe Usługi"
          items={[
            "Personalizowane bileciki",
            "Ekskluzywne opakowanie",
            "Słodkie upominki",
            "Eleganckie opakowanie prezentowe",
            "Subskrypcja kwiatowa",
            "Kompozycje na zamówienie",
          ]}
          columns={2}
        />
      </div>
    </>
  );
};

export default VariantSections;
