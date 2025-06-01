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
    name: "Bukiet Urodzinowy",
    description:
      "Wyjątkowe bukiety urodzinowe z dostawą w Krakowie – elegancja i świeżość kwiatów w najlepszym wydaniu.",
    deliveryTime: " 1 day",
    occasionType: "Urodziny",
    bouquets: [
      {
        id: "rose-1",
        title: "Bukiet Róż na Urodziny",
        price: 199,
        image: "/images/bukiet-19-czerwonych-roz-40cm.jpeg",
      },
      {
        id: "tulip-1",
        title: "Bukiet Tulipanów na Urodziny",
        price: 179,
        image: "/images/bukiet-tulipanow.jpg",
      },
      {
        id: "peony-1",
        title: "Bukiet Piwonii na Urodziny",
        price: 239,
        image: "/images/bukiet-piwonii.jpg",
      },
    ],
  },
];
export function getOccasionBySlug(slug) {
  return OCCASIONS.find((o) => o.slug === slug);
}
