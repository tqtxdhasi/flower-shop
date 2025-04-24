export const OCCASIONS = [
  {
    slug: "urodziny",
    name: "Urodziny",
    description:
      "Wyjątkowe bukiety urodzinowe z dostawą w Krakowie. Kwiaty, które wywołają uśmiech.",
    image: "/images/okazje/urodziny.jpg",
  },
  {
    slug: "walentynki",
    name: "Walentynki",
    description:
      "Romantyczne kwiaty na Walentynki — róże, bukiety miłosne i niespodzianki z sercem.",
    image: "/images/okazje/walentynki.jpg",
  },
];
export function getOccasionBySlug(slug) {
  const occasion = OCCASIONS.find((o) => o.slug === slug);
  if (!occasion) return null;
}
