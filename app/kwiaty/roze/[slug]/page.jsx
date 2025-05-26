import { notFound } from "next/navigation";
import { buildRoseProductSchema } from "../roseSchema";
import Image from "next/image";
import Script from "next/script";
import {
  PRICE_SHEET,
  COLOR_OPTIONS,
  QUANTITIES,
  HEIGHTS,
} from "../../../data/roseData";
import Gallery from "@/app/components/Gallery";
import Regulamin from "@/app/components/Regulamin";
import Link from "next/link";
import FAQSection from "@/app/components/faq/FAQSection";
import holidaysList from "@/app/components/HolidaysData";
import HolidaysSection from "@/app/components/HolidaysSection";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import VariantSections from "@/app/components/VariantSections";
import OrderForm from "@/app/components/order-form/OrderForm";
import { shopDomain } from "@/app/data/mainData";
import SimilarBouquets from "@/app/components/SimilarBouquets";
export async function generateStaticParams() {
  const slugs = [];

  for (const height of HEIGHTS) {
    for (const quantity of QUANTITIES) {
      for (const color of COLOR_OPTIONS) {
        slugs.push({
          slug: `bukiet-${quantity}-${color.slug}-roz-${height}-cm`,
        });
      }
    }
  }

  return slugs;
}
async function getProductBySlug(slug) {
  const regex = /^bukiet-(\d+)-([a-ząćęłńóśźż]+)-roz-(\d+)-cm$/;
  const match = slug.match(regex);
  if (!match) return null;

  const quantity = parseInt(match[1], 10);
  const colorSlug = match[2];
  const height = parseInt(match[3], 10);
  const color = COLOR_OPTIONS.find((c) => c.slug === colorSlug);

  if (!color || isNaN(quantity) || isNaN(height)) return null;

  const basePrice = PRICE_SHEET[height]?.[quantity] ?? 0;

  return {
    quantity,
    height,
    color,
    basePrice,
  };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return {};

  const title = `Bukiet ${
    product.quantity
  } ${product.color.name.toLowerCase()} róż ${
    product.height
  } cm – Kwiaciarnia Kraków`;
  const description = `Doświadcz jakości – bukiet ${
    product.quantity
  } ${product.color.name.toLowerCase()} róż ${
    product.height
  } cm, starannie wyselekcjonowany, z dostawą Kraków.`;

  const imageUrl = `https://www.krakow-kwiaciarnia.pl/images/roze-${product.quantity}-${product.height}-${product.color.slug}.jpg`;
  const url = `https://www.krakow-kwiaciarnia.pl/kwiaty/roze/bukiet-${product.quantity}-${product.color.slug}-roz-${product.height}-cm`;

  return {
    metadataBase: new URL("https://www.krakow-kwiaciarnia.pl"),
    title,
    description,
    keywords: [
      "kwiaty Kraków",
      "róże Kraków",
      `${product.quantity} róż Kraków`,
      `${product.color.name} róże Kraków`,
      `${product.height}cm róże Kraków`,
    ],
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: imageUrl }],
      locale: "pl_PL",
      siteName: "Kwiaciarnia Kraków",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      site: "@KwiaciarniaKrakow",
    },
  };
}
export default async function Page({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  const productSchema = buildRoseProductSchema(
    product.quantity,
    product.height,
    product.color
  );

  const breadcrumbs = [
    { name: "Główna", url: `https://${shopDomain}/` },
    { name: "Kwiaty", url: `https://${shopDomain}/kwiaty` },
    { name: "Róże", url: `https://${shopDomain}/kwiaty/roze` },
    {
      name: `Bukiet ${product.quantity} ${product.color.name} róż ${product.height} cm`,
      url: `https://${shopDomain}/kwiaty/roze/${slug}`,
    },
  ];
  return (
    <div className="p-4 flex flex-col gap-4">
      <Script
        id="product-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <h1 className="max-w-4xl px-4 mx-auto  text-3xl font-bold text-center text-rose-900 md:text-4xl">
        Bukiet {product.quantity} {product.color.name} róż {product.height} cm{" "}
        <br />
        <span className="text-rose-800 text-lg">
          Świeże Kwiaty z Dostawą w Krakowie
        </span>
      </h1>{" "}
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-col w-full md:flex-row gap-4 mx-auto">
        <Gallery />

        <div className="w-full md:w-1/3">
          <OrderForm
            initialQuantity={product.quantity}
            initialFlowerColor={product.color.slug}
            initialHeight={product.height}
            skipDimensions={true}
          />
        </div>
      </div>
      <div className="max-w-4xl flex flex-col gap-4 px-2 mx-auto">
        <h2 className=" text-2xl text-center font-bold text-rose-900 md:text-3xl">
          Eleganckie Bukiety Jednoróżane – Ekskluzywne Róże w Krakowie Online
        </h2>
        <p className=" text-rose-800">
          🌹 Szukasz wyjątkowego bukietu róż online? Nasz sklep internetowy
          oferuje luksusowe, jednoróżane bukiety wykonane z kwiatów najwyższej
          jakości. Każda róża jest starannie selekcjonowana, aby zapewnić
          doskonały wygląd i trwałość. Oferujemy ekspresową wysyłkę oraz
          możliwość personalizacji zamówienia, dzięki czemu bukiet staje się
          idealnym wyborem na każdą okazję.
        </p>
        <VariantSections />
        <HolidaysSection holidays={holidaysList} />

        <p className=" text-rose-800">
          Niezależnie od tego, czy obchodzisz Walentynki, Boże Narodzenie,
          Wielkanoc, Nowy Rok, Sylwestra, Dzień Kobiet, Dzień Ojca, Dzień
          Dziecka czy Halloween – nasze kwiaty to idealny wybór. Każda okazja
          zasługuje na wyjątkową oprawę, a nasze bukiety doskonale wpisują się w
          klimat świąteczny i okolicznościowy.
        </p>
        <p className=" text-rose-800">
          Kwiaty na Święto Zakochanych, kompozycje na Wielkanoc czy świąteczne
          stroiki bożonarodzeniowe – wszystko znajdziesz u nas. Spraw, aby Twoje
          świętowanie było pełne kolorów, zapachu świeżych kwiatów i radości.
          Zainspiruj się naszymi propozycjami na każdą okazję – od Walentynek po
          Dzień Kobiet.
        </p>
        <FAQSection />
      </div>{" "}
      <SimilarBouquets currentSlug={slug} maxItems={6} />
      {/*  
      <h2 className=" text-2xl text-center font-bold text-rose-900 md:text-3xl">
        Artykuły i Porady o Różach
      </h2>
      ....
      */}
      <Regulamin />
    </div>
  );
}
