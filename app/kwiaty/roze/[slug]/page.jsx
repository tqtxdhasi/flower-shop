import { notFound } from "next/navigation";
import { buildRoseProductSchema } from "../roseSchema";
import Image from "next/image";
import Script from "next/script";
import { PRICE_SHEET, COLOR_OPTIONS, QUANTITIES, HEIGHTS } from "../roseData";

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
  const description = `Luksusowy bukiet ${
    product.quantity
  } ${product.color.name.toLowerCase()} róż o długości ${product.height} cm.`;
  const imageUrl = `https://www.krakow-kwiaciarnia.pl/images/roze-${product.quantity}-${product.height}-${product.color.slug}.jpg`;
  const url = `https://www.krakow-kwiaciarnia.pl/kwiaty/roze/${slug}`;

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
    other: {
      "geo.region": "PL-MA",
      "geo.placename": "Kraków",
      "geo.position": "50.06465;19.94498",
      ICBM: "50.06465, 19.94498",
    },
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://www.krakow-kwiaciarnia.pl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Róże",
        item: "https://www.krakow-kwiaciarnia.pl/kwiaty/roze",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Bukiet ${product.quantity} ${product.color.name}`,
        item: `https://www.krakow-kwiaciarnia.pl/kwiaty/roze/${slug}`,
      },
    ],
  };

  return (
    <main className="p-6 sm:p-10 max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Image
          src={`/images/bukiet-${product.quantity}-${product.color.slug}-roz-${product.height}cm.jpg`}
          alt={`Bukiet ${product.quantity} ${product.color.name} róż`}
          width={800}
          height={600}
          priority
          className="rounded-2xl shadow-lg object-cover"
        />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            Bukiet {product.quantity} {product.color.name} róż {product.height}{" "}
            cm
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Luksusowy bukiet {product.quantity} {product.color.name} róż o
            długości {product.height} cm. Dostawa tylko w Krakowie, tego samego
            dnia.
          </p>
          <div className="text-2xl font-semibold text-green-700">
            Cena: {product.basePrice} PLN
          </div>
          <button className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow transition-all">
            Dodaj do koszyka
          </button>
          <div className="flex space-x-4 mt-2">
            <span className="text-sm text-gray-500">
              Odbiór osobisty: Rynek Główny 1
            </span>
            <span className="text-sm text-gray-500">
              Darmowa dostawa powyżej 200 PLN
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="mt-10 prose prose-lg text-gray-800">
        <h2>Opis bukietu</h2>
        <p>
          Nasz bukiet złożony z {product.quantity} starannie wyselekcjonowanych{" "}
          {product.color.name} róż o długości {product.height} cm to doskonały
          wybór na romantyczne okazje, rocznice, Dzień Matki czy Walentynki.
          Każdy kwiat pochodzi od lokalnych hodowców z okolic Krakowa, co
          gwarantuje świeżość i wyjątkowy kolor.
        </p>
        <p>
          Kwiaty są cięte na zamówienie i przygotowywane ręcznie przez naszych
          florystów, z dbałością o każdy detal. Wybierz bukiet, który zachwyci
          obdarowaną osobę i pokaże Twoje uczucia w najpiękniejszy sposób.
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Najczęściej zadawane pytania
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">
              Czy mogę zamówić bukiet z dostawą w ten sam dzień?
            </h3>
            <p>
              Tak, oferujemy dostawę tego samego dnia wyłącznie na terenie
              Krakowa, jeśli zamówienie zostanie złożone do godziny 17:00.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Czy bukiet będzie wyglądać dokładnie jak na zdjęciu?
            </h3>
            <p>
              Zdjęcie prezentuje rzeczywisty wygląd bukietu. Drobne różnice mogą
              wystąpić ze względu na sezonowość kwiatów.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="mt-12 text-sm text-gray-600">
        <h2 className="text-xl font-semibold mb-2">Zobacz także:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a href="/kwiaty/roze" className="hover:underline text-green-700">
              Wszystkie bukiety róż
            </a>
          </li>
          <li>
            <a
              href="/okazje/rocznica"
              className="hover:underline text-green-700"
            >
              Kwiaty na rocznicę
            </a>
          </li>
          <li>
            <a
              href="/dostawa/kwiaty-krakow"
              className="hover:underline text-green-700"
            >
              Dostawa kwiatów w Krakowie
            </a>
          </li>
        </ul>
      </section>

      {/* Structured Data Scripts */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
