import { notFound } from "next/navigation";
import { buildRoseProductSchema } from "../roseSchema";
import { PRICE_SHEET } from "../roseSchema";
import Image from "next/image";
import Script from "next/script";

// export async function generateStaticParams() {
//   const quantities = [15, 25, 35, 45];
//   const heights = [40, 50, 60];

//   const slugs = [];

//   for (const quantity of quantities) {
//     for (const height of heights) {
//       for (const color of Object.values(roseData)) {
//         const slug = `bukiet-${quantity}-${color.slug}-roz-${height}-cm`;
//         slugs.push({ slug });
//       }
//     }
//   }

//   return slugs;
// }

const roseData = {
  red: { name: "Czerwonych", slug: "czerwonych", colorCode: "RD" },
  pink: { name: "Różowych", slug: "rozowe", colorCode: "PK" },
  white: { name: "Białych", slug: "biale", colorCode: "WH" },
};

async function getProductBySlug(slug) {
  const regex = /^bukiet-(\d+)-([a-ząćęłńóśźż]+)-roz-(\d+)-cm$/;
  const match = slug.match(regex);
  if (!match) return null;

  const quantity = parseInt(match[1], 10);
  const colorSlug = match[2];
  const height = parseInt(match[3], 10);
  const color = Object.values(roseData).find((c) => c.slug === colorSlug);

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

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
export default async function Page({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  const schema = buildRoseProductSchema(
    product.quantity,
    product.height,
    product.color
  );

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Bukiet {product.quantity} {product.color.name.toLowerCase()} róż –{" "}
        {product.height} cm
      </h1>
      <Image
        src={`/images/roze-${product.quantity}-${product.height}-${product.color.slug}.jpg`}
        alt={`Bukiet ${
          product.quantity
        } ${product.color.name.toLowerCase()} róż`}
        width={800}
        height={600}
        priority
        className="mb-6 rounded shadow"
      />
      <p className="text-lg mb-4">
        Luksusowy bukiet {product.quantity} {product.color.name.toLowerCase()}{" "}
        róż o długości {product.height} cm.
      </p>
      <p className="text-xl font-semibold text-green-700">
        Cena: {product.basePrice} PLN
      </p>

      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
