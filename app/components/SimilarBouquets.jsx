// app/components/SimilarBouquets.tsx
"use server";
import Link from "next/link";
import Image from "next/image";
import {
  COLOR_OPTIONS,
  QUANTITIES,
  HEIGHTS,
  PRICE_SHEET,
} from "@/app/data/roseData";

export default async function SimilarBouquets({ currentSlug, maxItems = 6 }) {
  const regex = /^bukiet-(\d+)-([a-ząćęłńóśźż]+)-roz-(\d+)-cm$/;
  const match = currentSlug.match(regex);
  if (!match) return null;

  const [_, qty, colorSlug, height] = match;
  const currentKey = `${qty}-${colorSlug}-${height}`;

  const all = [];
  for (const h of HEIGHTS) {
    for (const q of QUANTITIES) {
      for (const c of COLOR_OPTIONS) {
        const key = `${q}-${c.slug}-${h}`;
        if (key === currentKey) continue;
        all.push({
          slug: `bukiet-${q}-${c.slug}-roz-${h}-cm`,
          label: `Bukiet ${q} ${c.name.toLowerCase()} róż ${h} cm`,
          quantity: q,
          height: h,
          color: c,
          price: PRICE_SHEET[h]?.[q] ?? null,
        });
      }
    }
  }

  const choices = all.sort(() => 0.5 - Math.random()).slice(0, maxItems);

  return (
    <section className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold text-center text-rose-900 mb-6">
        Podobne Bukiety Róż
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {choices.map(({ slug, label, quantity, height, color, price }) => (
          <Link key={slug} href={`/kwiaty/roze/${slug}`}>
            <div className="border border-rose-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative w-full h-40">
                <Image
                  src={`/roses8.jpg`}
                  alt={label}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-3">
                <h3 className="text-rose-800 font-medium text-sm">{label}</h3>
                {price && (
                  <p className="text-rose-700 font-semibold text-sm mt-1">
                    {price} PLN
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
