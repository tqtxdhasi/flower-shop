// app/kwiaty/[slug]/page.tsx

import { getFlowerBySlug } from "./flowers";
import Script from "next/script";

// ✅ SEO metadata dynamically per flower
export async function generateMetadata({ params }, _parent) {
  const flower = getFlowerBySlug(params.slug);

  if (!flower) {
    return {
      title: "Kwiat nie znaleziony | Kwiaciarnia",
      description: "Nie znaleziono podanego kwiatu w naszej ofercie.",
    };
  }

  return {
    title: `${flower.name} w Krakowie – Bukiety Online z Dostawą | Kwiaciarnia`,
    description: flower.description,
    alternates: {
      canonical: `/kwiaty/${flower.slug}`,
    },
    openGraph: {
      title: `${flower.name} – Zamów Online w Krakowie`,
      description: flower.description,
      url: `https://krakow-kwiaciarnia.pl/kwiaty/${flower.slug}`,
      images: [
        {
          url: `https://krakow-kwiaciarnia.pl${flower.image}`,
          width: 1200,
          height: 630,
          alt: flower.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${flower.name} – Bukiet z Dostawą`,
      description: flower.description,
      images: [`https://krakow-kwiaciarnia.pl${flower.image}`],
    },
  };
}

// ✅ Component
export default function FlowerPage({ params }) {
  const flower = getFlowerBySlug(params.slug);

  if (!flower) {
    return <div className="p-8 text-center text-xl">Nie znaleziono kwiatu</div>;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: flower.name,
    description: flower.description,
    image: `https://krakow-kwiaciarnia.pl${flower.image}`,
    brand: { "@type": "Brand", name: "Kwiaciarnia Kraków Online" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PLN",
      lowPrice: flower.minPrice,
      highPrice: flower.maxPrice,
      availability: "https://schema.org/InStorePickup",
      url: `https://krakow-kwiaciarnia.pl/kwiaty/${flower.slug}`,
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Długość łodygi",
        value: flower.lengthRange,
      },
      {
        "@type": "PropertyValue",
        name: "Ilość kwiatów",
        value: flower.quantityRange,
      },
    ],
  };

  return (
    <main className="p-6 max-w-6xl mx-auto">
      {/* ✅ JSON-LD Schema injected properly */}
      <Script
        id="ld-json"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* === PAGE SECTIONS GO HERE === */}
      ...
    </main>
  );
}
