// lib/flowers.js

export const flowers = {
  roz: {
    slug: "roz",
    name: "Bukiet Róż",
    description:
      "Zamów bukiet świeżych róż z dostawą w Krakowie lub odbiorem osobistym. Wybierz długość i ilość kwiatów.",
    image: "/images/bukiet-19-czerwonych-roz-40cm.jpeg",
    minPrice: "100.00",
    maxPrice: "600.00",
    lengthRange: "40cm–80cm",
    quantityRange: "9–59 sztuk",
  },
  tulipany: {
    slug: "tulipany",
    name: "Bukiet Tulipanów",
    description:
      "Kolorowy bukiet tulipanów z opcją personalizacji. Dostawa lub odbiór w Krakowie.",
    image: "/images/bukiet-tulipany.jpg",
    minPrice: "80.00",
    maxPrice: "400.00",
    lengthRange: "30cm–60cm",
    quantityRange: "7–49 sztuk",
  },
  // add more flowers here...
};

export function getFlowerBySlug(slug) {
  return flowers[slug] || null;
}
