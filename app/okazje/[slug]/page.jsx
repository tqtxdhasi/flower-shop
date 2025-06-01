import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { shopDomain, shopName, shopPhone } from "@/app/data/mainData";
import { getOccasionBySlug } from "./occasions";

// ✅ Dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const occasion = getOccasionBySlug(slug);

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
      title: `${occasion.name} – ${shopName}`,
      description: occasion.description,
      images: [new URL(occasion.bouquets[0].image, metadataBase).toString()],
    },
  };
}

// ✅ Structured data component
function OccasionSchema({ occasion }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: occasion.name,
    description: occasion.description,
    itemListElement: occasion.bouquets.map((bouquet, index) => ({
      "@type": "Product",
      position: index + 1,
      name: bouquet.title,
      image: "https://" + shopDomain + bouquet.image,
      url: `https://${shopDomain}/okazje/${occasion.slug}`,
      brand: {
        "@type": "Brand",
        name: { shopName },
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "PLN",
        price: bouquet.price,
        availability: "https://schema.org/InStock",
      },
    })),
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
export default async function OccasionPage({ params }) {
  const { slug } = await params;
  const occasion = getOccasionBySlug(slug);

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
            <li>💌 Bezproblemowa wymiana </li>
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
    </main>
  );
}
