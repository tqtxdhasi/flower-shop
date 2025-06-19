export const OCCASIONS = [
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
  {
    slug: "dzien-ojca",
    name: "Dzień Ojca",
    description: `Zaskocz Tatę wyjątkowym bukietem! Elegancja i wyraz szacunku w jednym – dostarczane prosto pod drzwi.`,
    deliveryTime: "Następnego dnia",
    occasionType: "Święto",
    bouquets: [
      {
        id: "gozdziki-ojciec",
        title: "Goździki na Dzień Ojca",
        price: 85,
        image: "/carnations.jpg",
      },
      {
        id: "anturia-ojciec",
        title: "Anturia na Dzień Ojca",
        price: 140,
        image: "/anthuriums.jpg",
      },
    ],
  },
  {
    slug: "imieniny",
    name: "Imieniny",
    description: `Podaruj uśmiech z okazji imienin – szeroki wybór świeżych kompozycji na każdą osobowość.`,
    deliveryTime: "Następnego dnia",
    occasionType: "Imieniny",
    bouquets: [
      {
        id: "frezje-imieniny",
        title: "Frezje na Imieniny",
        price: 100,
        image: "/freesias.jpg",
      },
      {
        id: "gerbery-imieniny",
        title: "Gerbery na Imieniny",
        price: 95,
        image: "/gerberas.jpg",
      },
    ],
  },
  {
    slug: "rocznica",
    name: "Rocznica",
    description: `Uczcij wspólne chwile – bukiety na rocznicę, które mówią więcej niż słowa.`,
    deliveryTime: "Następnego dnia",
    occasionType: "Rocznica",
    bouquets: [
      {
        id: "roze-rocznica",
        title: "Czerwone Róże na Rocznicę",
        price: 160,
        image: "/roses-anniversary.jpg",
      },
      {
        id: "lilie-rocznica",
        title: "Lilie na Rocznicę",
        price: 145,
        image: "/lilies.jpg",
      },
    ],
  },
  {
    slug: "gratulacje",
    name: "Gratulacje",
    description: `Wyraź uznanie z klasą – gratulacyjne bukiety na każdą okazję sukcesu.`,
    deliveryTime: "Następnego dnia",
    occasionType: "Gratulacje",
    bouquets: [
      {
        id: "sloneczniki-gratulacje",
        title: "Słoneczniki Gratulacyjne",
        price: 115,
        image: "/sunflowers.jpg",
      },
      {
        id: "irysy-gratulacje",
        title: "Irysy Gratulacyjne",
        price: 105,
        image: "/irises.jpg",
      },
    ],
  },
  {
    slug: "przeprosiny",
    name: "Przeprosiny",
    description: `Powiedz "przepraszam" kwiatami – delikatność i szczerość w pięknej oprawie.`,
    deliveryTime: "Następnego dnia",
    occasionType: "Przeprosiny",
    bouquets: [
      {
        id: "biale-roze-przeprosiny",
        title: "Białe Róże na Przeprosiny",
        price: 130,
        image: "/white-roses.jpg",
      },
      {
        id: "eustomy-przeprosiny",
        title: "Eustomy na Przeprosiny",
        price: 125,
        image: "/lisianthus.jpg",
      },
    ],
  },
  {
    slug: "bez-okazji",
    name: "Bez Okazji",
    description: `Nie czekaj na okazję – podaruj bukiet z czystej radości.`,
    deliveryTime: "Następnego dnia",
    occasionType: "Spontaniczne",
    bouquets: [
      {
        id: "tulipany-spontan",
        title: "Tulipany Bez Okazji",
        price: 90,
        image: "/tulips-random.jpg",
      },
      {
        id: "gozdziki-spontan",
        title: "Goździki Bez Okazji",
        price: 80,
        image: "/carnations-random.jpg",
      },
    ],
  },
];
export function getOccasionBySlug(slug) {
  return OCCASIONS.find((o) => o.slug === slug);
}
