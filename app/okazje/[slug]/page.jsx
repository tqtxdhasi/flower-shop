import Script from "next/script";
import { notFound } from "next/navigation";
import { shopDomain, shopName, shopPhone } from "@/app/data/mainData";
import { getOccasionBySlug } from "@/app/data/occasions";
import Regulamin from "@/app/components/Regulamin";
import DeliverySection from "./components/DeliverySection";
import WhySection from "./components/WhySection";
import SeoSection from "./components/SeoSection";
import BouquetsSection from "./components/BouquetsSection";
import HeroSection from "./components/HeroSection";

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
        <HeroSection occasion={occasion} minPrice={minPrice} />
        <BouquetsSection bouquets={occasion.bouquets} />
        <DeliverySection occasion={occasion} />
        <WhySection occasion={occasion} minPrice={minPrice} />
        <SeoSection occasion={occasion} />
        <Regulamin />
      </div>
    </main>
  );
}
