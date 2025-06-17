import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { shopDomain, shopName, shopPhone } from "@/app/data/mainData";
import { getOccasionBySlug } from "@/app/data/occasions";
import Regulamin from "@/app/components/Regulamin";
import VariantSection from "@/app/components/VariantSection";

// Dynamic metadata with priceRange and keywords for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const occasion = getOccasionBySlug(slug);

  if (!occasion) {
    return {
      title: "Okazja nie znaleziona | Kraków Kwiaty",
      description: "Nie znaleziono podanej okazji w naszej ofercie",
    };
  }

  const prices = occasion.bouquets.map((b) => b.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return {
    shopDomain,
    title: `${occasion.name} – Bukiety od ${minPrice} zł | ${shopName}`,
    description: occasion.description,
    keywords: [
      `${occasion.name}`,
      "bukiety Kraków",
      "kwiaty dostawa",
      `${minPrice} zł bukiet`,
    ],
    alternates: { canonical: `/okazje/${occasion.slug}` },
    openGraph: {
      title: `${occasion.name} – Bukiety od ${minPrice} zł | ${shopName}`,
      description: occasion.description,
      url: new URL(`/okazje/${occasion.slug}`, shopDomain).toString(),
      images: [
        {
          url: new URL(occasion.bouquets[0].image, shopDomain).toString(),
          width: 1200,
          height: 630,
          alt: `${occasion.name} od ${minPrice} zł`,
        },
      ],
      priceRange: `${minPrice}–${maxPrice} PLN`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${occasion.name} od ${minPrice} zł | ${shopName}`,
      description: occasion.description,
      images: [new URL(occasion.bouquets[0].image, shopDomain).toString()],
    },
  };
}

// Structured data with priceRange and individual offers
function OccasionSchema({ occasion }) {
  const prices = occasion.bouquets.map((b) => b.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: occasion.name,
    description: occasion.description,
    mainEntity: {
      "@type": "AggregateOffer",
      offerCount: occasion.bouquets.length,
      lowPrice: minPrice,
      highPrice: maxPrice,
      priceCurrency: "PLN",
    },
    itemListElement: occasion.bouquets.map((b, i) => ({
      "@type": "Offer",
      position: i + 1,
      url: `${shopDomain}/okazje/${occasion.slug}`,
      price: b.price,
      priceCurrency: "PLN",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Product",
        name: b.title,
        image: shopDomain + b.image,
        brand: { "@type": "Brand", name: shopName },
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

export default async function OccasionPage({ params }) {
  const { slug } = await params;
  const occasion = getOccasionBySlug(slug);

  if (!occasion) notFound();

  const prices = occasion.bouquets.map((b) => b.price);
  const minPrice = Math.min(...prices);

  return (
    <main className="bg-gradient-to-b from-rose-50 to-white py-12 px-6">
      <OccasionSchema occasion={occasion} />
      <div className="max-w-6xl mx-auto flex flex-col gap-6 ">
        <nav className="text-rose-600 lg:text-center">
          <a href="/" className="underline">
            Strona główna
          </a>{" "}
          ›{" "}
          <a href="/okazje" className="underline">
            Okazje
          </a>{" "}
          › <span className="text-rose-900">{occasion.name}</span>
        </nav>
        <h1 className="text-4xl lg:text-center font-extrabold text-rose-900 ">
          Bukiet kwiatów na {occasion.name}{" "}
          <span className="text-rose-600 underline">od {minPrice} zł</span>
        </h1>
        <p className="lg:text-center text-lg text-rose-700 max-w-3xl mx-auto">
          {occasion.description}
        </p>
        <section className="flex gap-4 flex-col lg:flex-row justify-center  text-rose-700">
          <p className="flex items-center">
            🚚 Dostawa &nbsp;<strong>{occasion.deliveryTime}</strong>
          </p>
          <p className="flex items-center">
            🎁 <strong>Personalizacja gratis</strong>
          </p>
          <p className="flex items-center">
            📸 <strong>Akceptacja bukietu przed dostawą</strong>
          </p>
        </section>
        <section className="grid gap-8 md:grid-cols-3">
          {occasion.bouquets.map((b, id) => (
            <div
              key={id}
              className="group flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden "
            >
              <div className="relative ">
                <Image
                  src={b.image}
                  alt="Bukiet Róż"
                  className="max-h-[400px] object-cover"
                  width={640}
                  height={480}
                />
              </div>
              <div className="p-6 flex flex-col ">
                <h3 className="text-xl font-bold text-rose-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-2xl font-extrabold text-rose-600 mb-4">
                  od {b.price} zł
                </p>
                <a
                  href={`tel:${shopPhone}`}
                  className="text-center bg-rose-600 hover:bg-rose-700 text-white font-semibold px-5 py-3 rounded-xl shadow-md focus:ring-4 focus:ring-rose-200 transition-colors"
                >
                  Zamów bukiet
                </a>
              </div>
            </div>
          ))}
        </section>
        <section
          className="p-8 bg-rose-100 rounded-2xl"
          aria-label="Dostawa informacji"
        >
          <h2 className="text-3xl font-bold text-rose-900 mb-6 text-center">
            Dostawa bukietów w Krakowie
          </h2>
          <p className="text-center text-rose-700 max-w-4xl mx-auto mb-10">
            Szukasz oryginalnego bukietu urodzinowego z dostawą w Krakowie?
            <br />
            Wybierz z naszej limitowanej kolekcji – elegancja i świeże kwiaty w
            najlepszym wydaniu. Zamów już dziś, a w dni świąteczne skorzystaj z
            dostawy tego samego dnia. Sprawdź ofertę i podaruj niezapomniane
            chwile!
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <VariantSection
              title="🏙️ Dzielnice"
              items={[
                "Stare Miasto",
                "Kazimierz",
                "Podgórze",
                "Krowodrza",
                "Nowa Huta",
                "Dębniki",
                "Bronowice",
                "Prądnik Czerwony",
                "Prądnik Biały",
                "Bieżanów-Prokocim",
                "Czyżyny",
                "Mistrzejowice",
                "Wzgórza Krzesławickie",
                "Swoszowice",
                "Łagiewniki-Borek Fałęcki",
              ]}
              columns={2}
            />

            <div className="flex col-span-2 lg:col-span-1 items-center p-6 bg-white rounded-xl shadow">
              <span className="text-3xl mr-4">⏰</span>
              <div>
                <h3 className="font-semibold text-rose-900">Godziny dostaw</h3>
                <p className="text-sm text-rose-700 mt-1">
                  Codziennie 07:00 – 22:00
                </p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-white col-span-2 lg:col-span-1 rounded-xl shadow">
              <span className="text-3xl mr-4">📞</span>
              <div>
                <h3 className="font-semibold text-rose-900">Kontakt</h3>
                <p className="text-sm text-rose-700 mt-1">{shopPhone}</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="intro-seo"
          className="p-6 mx-auto max-w-4xl bg-rose-100 text-rose-900 rounded-2xl shadow-md"
        >
          <h2 className="text-3xl font-bold text-rose-900 mb-6 text-center">
            Dlaczego warto wybrać bukiet na {occasion.name} w {shopName}?
          </h2>
          <p>
            Nasze bukiety na <strong>{occasion.name.toLowerCase()}</strong> to
            połączenie świeżości, szybkiej realizacji i kwiatów z charakterem.
            Dostarczamy je w całym Krakowie – Kazimierz, Stare Miasto, Nowa Huta
            i poza nimi. Ceny już od {minPrice} zł, płatność: BLIK, gotówka,
            USDT, zloto i tp...
          </p>
        </section>
        <section
          className=" max-w-4xl mx-auto  text-rose-900"
          aria-label="SEO text końcowy"
        >
          <p className="mb-4">
            {shopName} – Twoja lokalna kwiaciarnia online. Szukasz wyjątkowego
            bukietu na <strong>{occasion.name.toLowerCase()}</strong>? Urodziny,
            gratulacje, miłosne wyznania czy po prostu miły gest – nasze świeże
            kompozycje doręczamy na terenie całego Krakowa, od Nowej Huty po
            Podgórze.
          </p>
          <p>
            Zamów online – wygodnie i bezpiecznie. Doświadczeni floryści tworzą
            każdą kompozycję z pasją i dbałością o szczegóły.
          </p>
        </section>
        <section
          className=" text-rose-900 max-w-4xl mx-auto "
          aria-label="Informacje dodatkowe"
        >
          <p className="mb-4">Sprawdź także nasze pozostałe propozycje:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
            <li>
              <a
                href="/okazje/urodziny"
                className="text-rose-600 underline hover:text-rose-800"
              >
                Bukiety na urodziny
              </a>
            </li>
            <li>
              <a
                href="/okazje/gratulacje"
                className="text-rose-600 underline hover:text-rose-800"
              >
                Kompozycje gratulacyjne
              </a>
            </li>
            <li>
              <a
                href="/okazje/milosc"
                className="text-rose-600 underline hover:text-rose-800"
              >
                Bukiety miłosne
              </a>
            </li>
            <li>
              <a
                href="/okazje/bez-okazji"
                className="text-rose-600 underline hover:text-rose-800"
              >
                Kompozycje bez okazji
              </a>
            </li>
          </ul>
          <p className="mb-4">
            Kwiaty doręczamy na terenie całego Krakowa – Nowa Huta, Kazimierz,
            Podgórze i inne dzielnice.
          </p>
          <p className="mb-4">
            Dowiedz się więcej o{" "}
            <a
              href="/dostawa"
              className="text-rose-600 underline hover:text-rose-800"
            >
              dostawie kwiatów w Krakowie
            </a>{" "}
            lub skontaktuj się z nami przez{" "}
            <a
              href="/kontakt"
              className="text-rose-600 underline hover:text-rose-800"
            >
              formularz kontaktowy
            </a>
            . Jesteśmy dostępni 24/7.
          </p>
          <p>
            Odwiedź{" "}
            <a href="/" className="text-rose-600 underline hover:text-rose-800">
              stronę główną
            </a>
            , zobacz wszystkie{" "}
            <a
              href="/okazje"
              className="text-rose-600 underline hover:text-rose-800"
            >
              dostępne okazje
            </a>{" "}
            {/* oraz{" "}
            <a
              href="/blog"
              className="text-rose-600 underline hover:text-rose-800"
            >
              blog florystyczny
            </a> */}
            .
          </p>
        </section>
        <Regulamin />
      </div>
    </main>
  );
}
