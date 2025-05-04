import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { shopPhone } from "@/app/data/mainData";

// ✅ Mock data - replace with actual API/CMS calls
const getOccasionBySlug = (slug) => {
  return occasions.find((o) => o.slug === slug);
};

const occasions = [
  {
    slug: "urodziny",
    name: "Bukiet Urodzinowy",
    description:
      "Wyjątkowe bukiety urodzinowe z dostawą w Krakowie – elegancja i świeżość kwiatów w najlepszym wydaniu.",
    deliveryTime: "2 godziny",
    occasionType: "Urodziny",
    bouquets: [
      {
        id: "rose-1",
        title: "Bukiet Róż",
        price: 199,
        image: "/images/bukiet-roz.jpg",
      },
      {
        id: "tulip-1",
        title: "Bukiet Tulipanów",
        price: 179,
        image: "/images/bukiet-tulipanow.jpg",
      },
      {
        id: "peony-1",
        title: "Bukiet Piwonii",
        price: 239,
        image: "/images/bukiet-piwonii.jpg",
      },
    ],
  },
  // Add more occasions as needed...
];

// ✅ Dynamic metadata
export async function generateMetadata({ params }) {
  const occasion = getOccasionBySlug(params.slug);

  if (!occasion) {
    return {
      title: "Okazja nie znaleziona | Kraków Kwiaty",
      description: "Nie znaleziono podanej okazji w naszej ofercie",
    };
  }

  const metadataBase = new URL("https://krakow-kwiaty.pl");

  return {
    metadataBase,
    title: `${occasion.name} w Krakowie | Bukiety z Dostawą`,
    description: occasion.description,
    alternates: {
      canonical: `/okazje/${occasion.slug}`,
    },
    openGraph: {
      title: `${occasion.name} – Dostawa w 2h | Kraków Kwiaty`,
      description: occasion.description,
      url: new URL(`/okazje/${occasion.slug}`, metadataBase).toString(),
      images: [
        {
          url: new URL(occasion.bouquets[0].image, metadataBase).toString(), // Use the first bouquet image as the main
          width: 1200,
          height: 630,
          alt: occasion.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${occasion.name} – Kraków Kwiaty`,
      description: occasion.description,
      images: [new URL(occasion.bouquets[0].image, metadataBase).toString()],
    },
  };
}

// ✅ Structured data component
function OccasionSchema({ occasion }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: occasion.name,
    description: occasion.description,
    image: new URL(
      occasion.bouquets[0].image,
      "https://krakow-kwiaty.pl"
    ).toString(),
    brand: {
      "@type": "Brand",
      name: "Kraków Kwiaty",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PLN",
      lowPrice: Math.min(...occasion.bouquets.map((b) => b.price)),
      highPrice: Math.max(...occasion.bouquets.map((b) => b.price)),
      availability: "https://schema.org/InStock",
      url: new URL(
        `/okazje/${occasion.slug}`,
        "https://krakow-kwiaty.pl"
      ).toString(),
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Czas dostawy",
        value: occasion.deliveryTime,
      },
      {
        "@type": "PropertyValue",
        name: "Typ okazji",
        value: occasion.occasionType,
      },
    ],
  };

  return (
    <Script
      id="occasion-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ✅ Main component
export default function OccasionPage({ params }) {
  const occasion = getOccasionBySlug(params.slug);

  if (!occasion) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto p-6">
      <OccasionSchema occasion={occasion} />

      {/* Page Content */}
      <div className="space-y-8 mt-8">
        <h1 className="text-3xl font-bold text-rose-900">{occasion.name}</h1>

        <div className="text-2xl font-semibold text-rose-600">
          Ceny: {Math.min(...occasion.bouquets.map((b) => b.price))} zł -{" "}
          {Math.max(...occasion.bouquets.map((b) => b.price))} zł
        </div>

        <div className="prose text-rose-700">
          <p>{occasion.description}</p>
          <ul className="space-y-2">
            <li>🚚 Dostawa w {occasion.deliveryTime}</li>
            <li>🎁 Darmowa personalizacja</li>
            <li>💐 Gwarancja świeżości</li>
          </ul>
        </div>

        {/* Bouquets List */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {occasion.bouquets.map((bouquet) => (
            <div
              key={bouquet.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src={bouquet.image}
                  alt={bouquet.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-rose-900">
                {bouquet.title}
              </h3>
              <p className="text-lg text-rose-600 mt-2">{bouquet.price} zł</p>
              <button className="mt-auto bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition-colors">
                Zamów bukiet
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Local Section */}
      <section className="mt-12 p-6 bg-rose-50 rounded-xl">
        <h2 className="text-2xl font-bold text-rose-900 mb-4">
          Dostawa bukietów w Krakowie
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg">
            <h3 className="font-semibold text-rose-900">
              Obsługiwane dzielnice
            </h3>
            <p className="text-sm text-rose-700 mt-2">
              Stare Miasto, Kazimierz, Podgórze, Krowodrza, Nowa Huta
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <h3 className="font-semibold text-rose-900">Godziny dostaw</h3>
            <p className="text-sm text-rose-700 mt-2">
              Codziennie 8:00 - 22:00
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <h3 className="font-semibold text-rose-900">Kontakt</h3>
            <p className="text-sm text-rose-700 mt-2">
              {shopPhone}
              <br />
              ul. Kwiatowa 15, Kraków
            </p>
          </div>
        </div>
      </section>
      <header>
        <h1 class="text-3xl font-bold text-rose-900">
          Bukiety Urodzinowe w Krakowie
        </h1>
        <p class="text-xl text-rose-700 mt-2">
          Wybierz idealny bukiet na swoje urodziny z dostawą w Krakowie.
          Gwarancja świeżości i elegancji.
        </p>
      </header>

      <section class="mt-8">
        <h2 class="text-2xl font-semibold text-rose-900">
          Wszystko, co musisz wiedzieć
        </h2>
        <p class="prose text-rose-700 mt-4">
          Bukiety urodzinowe od Kraków Kwiaty są dostosowane do różnych gustów,
          od klasycznych róż po eleganckie piwonie. Wybierz bukiet, który
          najlepiej oddaje Twoje uczucia.
        </p>
        <ul class="space-y-2 mt-4">
          <li>🚚 Dostawa w 2 godziny</li>
          <li>🎁 Darmowa personalizacja</li>
          <li>💐 Gwarancja świeżości</li>
        </ul>
      </section>

      <section class="mt-12">
        <h2 class="text-2xl font-semibold text-rose-900">
          Nasze Bukiety Urodzinowe
        </h2>
        <div class="grid md:grid-cols-3 gap-6 mt-8">
          <div class="bg-white rounded-xl shadow p-4 flex flex-col">
            <div class="relative aspect-square rounded-lg overflow-hidden mb-4">
              <img
                src="/images/bukiet-roz.jpg"
                alt="Bukiet róż na urodziny"
                class="object-cover w-full h-full"
              />
            </div>
            <h3 class="text-xl font-semibold text-rose-900">Bukiet Róż</h3>
            <p class="text-lg text-rose-600 mt-2">199 zł</p>
            <button class="mt-auto bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition-colors">
              Zamów Bukiet
            </button>
          </div>
        </div>
      </section>

      <section class="mt-12 p-6 bg-rose-50 rounded-xl">
        <h2 class="text-2xl font-bold text-rose-900 mb-4">
          Dostawa w Krakowie
        </h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-white rounded-lg">
            <h3 class="font-semibold text-rose-900">Obsługiwane dzielnice</h3>
            <p class="text-sm text-rose-700 mt-2">
              Stare Miasto, Kazimierz, Podgórze, Krowodrza, Nowa Huta
            </p>
          </div>
          <div class="p-4 bg-white rounded-lg">
            <h3 class="font-semibold text-rose-900">Godziny dostaw</h3>
            <p class="text-sm text-rose-700 mt-2">Codziennie 8:00 - 22:00</p>
          </div>
          <div class="p-4 bg-white rounded-lg">
            <h3 class="font-semibold text-rose-900">Kontakt</h3>
            <p class="text-sm text-rose-700 mt-2">
              {shopPhone} <br />
              ul. Kwiatowa 15, Kraków
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
