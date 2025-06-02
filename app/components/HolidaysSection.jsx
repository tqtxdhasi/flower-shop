import Script from "next/script";

const HolidaysSection = ({ holidays }) => {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: holidays.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
    })),
  };

  return (
    <section className="space-y-4">
      <Script
        id="holidays-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      <h2 className=" text-xl text-rose-900 font-semibold">
        Święta i Okazje – Idealny Bukiet na Każde Święto i Uroczystość
      </h2>
      <div className="p-4 bg-rose-50 rounded-lg shadow-sm flex flex-col gap-2 col-span-2">
        <h4 className="text-rose-900 font-semibold">Święta i Okazje</h4>
        <div className="flex flex-wrap gap-2">
          {holidays.map((occasion) => (
            <div
              key={occasion}
              className="bg-white text-center text-rose-900 border-2 border-rose-200 hover:bg-rose-50 transition-colors rounded-full px-4 py-1"
            >
              {occasion}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolidaysSection;
