export const OCCASIONS = [
  {
    slug: "walentynki",
    name: "Walentynki",
    description:
      "Romantyczne kwiaty na Walentynki — róże, bukiety miłosne i niespodzianki z sercem.",
    image: "/images/okazje/walentynki.jpg",
  },
  {
    slug: "urodziny",
    name: "Urodziny",
    description: `  Skorzystaj z wyjątkowych bukietów urodzinowych – elegancja i świeżość w najlepszym wydaniu. Dostawa w Krakowie; w dni świąteczne ekspresowo!`,
    deliveryTime: "Nastepnego dnia ",
    occasionType: "Urodziny",
    bouquets: [
      {
        title: "Bukiet Róż na Urodziny",
        price: 120,
        image: "/images/bukiet-19-czerwonych-roz-40cm.jpg",
      },
      {
        id: "tulip-1",
        title: "Bukiet Tulipanów na Urodziny",
        price: 99,
        image: "/tulips.jpg",
      },
      {
        id: "peony-1",
        title: "Bukiet Piwonii na Urodziny",
        price: 150,
        image: "/piwonie.jpg",
      },
    ],
  },
];
export function getOccasionBySlug(slug) {
  return OCCASIONS.find((o) => o.slug === slug);
}
