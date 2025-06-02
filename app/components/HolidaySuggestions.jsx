import Link from "next/link";

const holidayBouquets = [
  {
    name: "Dzień Matki",
    url: "/kwiaty/roze/bukiet-15-czerwonych-roz-60-cm",
    desc: "Wyjątkowy bukiet idealny na Dzień Matki. Czerwone róże wyrażają wdzięczność i miłość.",
  },
  {
    name: "Walentynki",
    url: "/kwiaty/roze/bukiet-21-czerwonych-roz-50-cm",
    desc: "Romantyczna kompozycja na Walentynki. Klasyczne czerwone róże z dostawą w Krakowie.",
  },
  {
    name: "Dzień Kobiet",
    url: "/kwiaty/roze/bukiet-11-rozowych-roz-40-cm",
    desc: "Delikatny bukiet różowych róż – subtelny prezent na Dzień Kobiet.",
  },
];

export default function HolidaySuggestions() {
  return (
    <section className="max-w-4xl mx-auto mt-3 px-4">
      <h2 className="text-2xl text-center font-bold text-rose-900 mb-4">
        Bukiety na Najbliższe Święta
      </h2>
      <p className="text-center text-rose-800 mb-6 max-w-4xl mx-auto">
        Zainspiruj się naszymi propozycjami bukietów na nadchodzące okazje.
        Idealne prezenty z dostawą w Krakowie!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {holidayBouquets.map(({ name, url, desc }) => (
          <Link
            key={name}
            href={url}
            className="block border border-rose-200 rounded-xl p-4 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-rose-800 mb-1">{name}</h3>
            <p className="text-sm text-rose-700">{desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
