// app/dostawa/[region]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Fake region data - you can later replace this with a CMS or API call
const regionData = {
  kazimierz: {
    name: "Kazimierz",
    title: "Dostawa Kwiatów Kazimierz |  Kwiaty Kraków",
    description:
      "Ekspresowa dostawa bukietów kwiatów w dzielnicy Kazimierz. Sprawdź naszą ofertę i zamów z szybką dostawą już dziś!",
    landmarks: ["ul. Józefa", "Plac Nowy", "Synagoga Remuh"],
    bouquetHighlights: ["Róże Romantyczne", "Wiosenny Mix"],
  },
  "nowa-huta": {
    name: "Nowa Huta",
    title: "Dostawa Kwiatów Nowa Huta |  Kwiaty Kraków",
    description:
      "Zamów kwiaty z dostawą do Nowej Huty. Gwarantujemy świeże kompozycje i punktualność!",
    landmarks: ["Plac Centralny", "Teatr Ludowy"],
    bouquetHighlights: ["Bukiet Słoneczny", "Elegancka Klasyka"],
  },
  podgorze: {
    name: "Podgórze",
    title: "Dostawa Kwiatów Podgórze |  Kwiaty Kraków",
    description:
      "Kwiaty z dostawą w Podgórzu?  Kwiaty to szybka i niezawodna obsługa lokalna!",
    landmarks: ["Rynek Podgórski", "Kładka Bernatka"],
    bouquetHighlights: ["Minimalistyczna Kompozycja", "Róże Eleganckie"],
  },
};

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  const data = regionData[params.region];
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `https://bubeny-kwiaty.pl/dostawa/${params.region}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://bubeny-kwiaty.pl/dostawa/${params.region}`,
      type: "website",
    },
  };
}

export default function DeliveryRegionPage({ params }) {
  const data = regionData[params.region];

  if (!data) return notFound();

  const { name, description, landmarks, bouquetHighlights } = data;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: " Kwiaty Kraków",
    address: {
      "@type": "PostalAddress",
      addressLocality: `Kraków - ${name}`,
      streetAddress: "Rynek Główny 1",
      postalCode: "30-001",
    },
    areaServed: name,
    url: `https://bubeny-kwiaty.pl/dostawa/${params.region}`,
  };

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6 text-rose-900">
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(structuredData)}
      </script>

      <h1 className="text-4xl font-extrabold text-rose-800">
        {name} – Dostawa Kwiatów
      </h1>
      <p className="text-lg">{description}</p>

      <section>
        <h2 className="text-2xl font-semibold text-rose-700 mb-2">
          Dlaczego warto zamówić do {name}?
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Szybka dostawa w obrębie {name} – nawet do 2h!</li>
          <li>Darmowa dostawa powyżej 150 zł</li>
          <li>Dostarczamy m.in. na: {landmarks.join(", ")}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-rose-700 mb-2">
          Polecane bukiety
        </h2>
        <ul className="grid grid-cols-2 gap-4">
          {bouquetHighlights.map((bouquet, index) => (
            <li
              key={index}
              className="bg-rose-100/80 text-rose-900 p-4 rounded-xl shadow hover:bg-rose-200 transition"
            >
              🌸 {bouquet}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-rose-700 mb-2">
          Najczęstsze pytania
        </h2>
        <details className="bg-rose-50 p-4 rounded-lg mb-2">
          <summary className="cursor-pointer font-medium text-rose-800">
            Jak szybko dostarczacie kwiaty w {name}?
          </summary>
          <p className="mt-2">
            Zamówienia złożone do 16:00 dostarczamy jeszcze tego samego dnia.
          </p>
        </details>
        <details className="bg-rose-50 p-4 rounded-lg">
          <summary className="cursor-pointer font-medium text-rose-800">
            Czy można zapłacić kartą przy odbiorze?
          </summary>
          <p className="mt-2">Tak, nasi kurierzy mają terminale płatnicze.</p>
        </details>
      </section>

      <div className="text-center mt-8">
        <a
          href="/kwiaty"
          className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          🌹 Zamów kwiaty do {name}
        </a>
      </div>
    </main>
  );
}
