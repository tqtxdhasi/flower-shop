import { shopPhone } from "../data/mainData";
const baseOccasions = [
  {
    href: "/okazje/urodziny",
    text: "Kwiaty na Urodziny",
    title: "Kwiaty na Urodziny z Dostawą w Krakowie | Ekspresowa Dostawa 2h",
    schemaType: "Product",
  },
  {
    href: "/okazje/imieniny",
    text: "Kwiaty na Imieniny",
    title: "Bukiety Imieninowe z Dostawą | Kwiaciarnia Kraków",
    schemaType: "Product",
  },
  {
    href: "/okazje/rocznica",
    text: "Kwiaty na Rocznicę",
    title: "Romantyczne Bukiety na Rocznicę Ślubu | Kwiaty Kraków",
    schemaType: "Product",
  },
  {
    href: "/okazje/gratulacje",
    text: "Kwiaty z Gratulacjami",
    title: "Kwiaty Gratulacyjne | Awans, Narodziny, Ślub | Kraków Dostawa",
    schemaType: "Product",
  },
  {
    href: "/okazje/przeprosiny",
    text: "Kwiaty na Przeprosiny",
    title: "Wyjątkowe Kwiaty na Przeprosiny | Dostawa w Krakowie",
    schemaType: "Product",
  },
  {
    href: "/okazje/bez-okazji",
    text: "Kwiaty bez Okazji",
    title: "Kwiaty bez Okazji | Spraw Radość bez Powodu | Kraków",
    schemaType: "Product",
  },
];

const seasonalOccasions = [
  {
    key: "dzien-ojca",
    date: new Date(new Date().getFullYear(), 5, 23),
    item: {
      href: "/okazje/dzien-ojca",
      text: "Kwiaty na Dzień Ojca",
      title: "Kwiaty na Dzień Ojca z Dostawą w Krakowie | 23 czerwca",
      schemaType: "Product",
    },
  },
  {
    key: "walentynki",
    date: new Date(new Date().getFullYear(), 1, 14),
    item: {
      href: "/swieta/walentynki",
      text: "Kwiaty na Walentynki",
      title:
        "Kwiaty na Walentynki z Dostawą w Krakowie | Róże, Bukiety, Serce z Kwiatów",
      schemaType: "Product",
    },
  },
];
function printTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
// mock date via ENV: set process.env.MOCK_TODAY = "2025-06-10"
function getToday() {
  const env = printTodayDate() || "2025-02-10";
  return env ? new Date(env) : new Date();
}

function getUpcomingOccasions(max = 2, windowDays = 14) {
  const today = getToday();
  return seasonalOccasions
    .filter(({ date }) => {
      const diff = (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
      return diff >= 0 && diff <= windowDays;
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, max)
    .map(({ item }) => item);
}
export const menuItems = [
  {
    text: "Kwiaty",
    schemaType: "ItemList",
    submenu: [
      {
        href: "/kwiaty/roze",
        text: "Róże",
        title: "Róże w Krakowie - Najpiękniejsze Bukiet Róż",
        schemaType: "Product",
      } /*

      {
        href: "/kwiaty/tulipany",
        text: "Tulipany",
        title: "Tulipany w Różnych Kolorach - Dostawa w Krakowie",
        schemaType: "Product",
      },
      {
        href: "/kwiaty/hortensje",
        text: "Hortensje",
        title: "Hortensje w Krakowie - Eleganckie Bukiety z Dostawą",
        schemaType: "Product",
      },
      {
        href: "/kwiaty/gipsowka",
        text: "Gipsówka",
        title: "Gipsówka w Krakowie - Subtelne Bukiety z Dostawą",
        schemaType: "Product",
      },
      {
        href: "/kwiaty/jaskry",
        text: "Jaskry",
        title: "Jaskry w Krakowie - Kolorowe Bukiety na Każdą Okazję",
        schemaType: "Product",
      },
      {
        href: "/kwiaty/piwonie",
        text: "Piwonie",
        title: "Piwonie w Krakowie - Najpiękniejsze Bukiety z Piwoniami",
        schemaType: "Product",
      },*/,
    ],
  } /*
  {
    text: "Święta",
    schemaType: "ItemList",
    submenu: [
      {
        href: "/swieta/walentynki",
        text: "Kwiaty na Walentynki",
        title:
          "Kwiaty na Walentynki z Dostawą w Krakowie | Róże, Bukiety, Serce z Kwiatów",
        schemaType: "Product",
      },
      {
        href: "/swieta/dzien-kobiet",
        text: "Kwiaty na Dzień Kobiet",
        title: "Kwiaty na Dzień Kobiet z Dostawą | Bukiety Dla Niej Kraków",
        schemaType: "Product",
      },
      {
        href: "/swieta/dzien-matki",
        text: "Kwiaty na Dzień Matki",
        title:
          "Bukiety na Dzień Matki z Dostawą w Krakowie | Eleganckie Kompozycje Kwiatowe",
        schemaType: "Product",
      },
      {
        href: "/swieta/dzien-ojca",
        text: "Kwiaty na Dzień Ojca",
        title:
          "Kwiaty dla Taty z Dostawą | Dzień Ojca Kraków | Bukiety i Kosze",
        schemaType: "Product",
      },
      {
        href: "/swieta/dzien-babci",
        text: "Kwiaty na Dzień Babci",
        title: "Bukiety dla Babci | Dzień Babci w Krakowie | Kwiaty z Dostawą",
        schemaType: "Product",
      },
      {
        href: "/swieta/dzien-dziadka",
        text: "Kwiaty na Dzień Dziadka",
        title: "Kwiaty dla Dziadka | Dzień Dziadka z Dostawą w Krakowie",
        schemaType: "Product",
      },
      {
        href: "/swieta/wielkanoc",
        text: "Kwiaty na Wielkanoc",
        title: "Wielkanocne Kompozycje Kwiatowe z Dostawą | Kraków",
        schemaType: "Product",
      },
    ],
  } 

  
*/,
  /*

  {
    text: "Prezenty",
    schemaType: "ItemList",
    submenu: [
      {
        href: "/prezenty/czekoladki",
        text: "Czekoladki",
        title: "Czekoladki i Kwiaty - Słodki Dodatek do Bukietu",
        schemaType: "Product",
      },
      {
        href: "/prezenty/kartki",
        text: "Kartki Okolicznościowe",
        title: "Kartki z Życzeniami do Kwiatów - Personalizowane Dodatki",
        schemaType: "Product",
      },
      {
        href: "/prezenty/misie",
        text: "Pluszowe Misie",
        title: "Pluszaki do Kwiatów - Uroczy Dodatek na Prezent",
        schemaType: "Product",
      },
      {
        href: "/prezenty/wino",
        text: "Wino i Prosecco",
        title: "Wino i Prosecco do Kwiatów - Elegancki Prezent z Dostawą",
        schemaType: "Product",
      },
      {
        href: "/prezenty/świece",
        text: "Świece Zapachowe",
        title: "Naturalne Świece i Bukiety - Romantyczny Zestaw",
        schemaType: "Product",
      },
      {
        href: "/prezenty/kawa-herbata",
        text: "Kawa i Herbata",
        title: "Zestawy Kwiaty + Kawa lub Herbata - Relaksujący Upominek",
        schemaType: "Product",
      },
      {
        href: "/prezenty/zestawy",
        text: "Zestawy Prezentowe",
        title: "Zestawy Prezentowe: Kwiaty + Prezenty - Gotowe do Wręczenia",
        schemaType: "Product",
      },
    ],
  },*/

  /*
  {
    text: "Poradnik",
    schemaType: "CollectionPage",
    submenu: [
      {
        href: "/poradnik/pielegnacja",
        text: "Pielęgnacja Kwiatów",
        title: "Jak Przedłużyć Żywotność Kwiatów - Porady Ekspertów",
        schemaType: "TechArticle",
      },
      {
        href: "/poradnik/jak-zamawiac",
        text: "Jak zamawiać?",
        title: "Instrukcja Składania Zamówień - Krok po Kroku",
        schemaType: "HowTo",
      },
    ],
  },
  {
    href: "/kontakt",
    text: "Kontakt",
    title: "Skontaktuj się z Nami - Kwiaty Kraków",
    schemaType: "ContactPage",
    structuredData: {
      telephone: shopPhone,
      contactType: "customer service",
    },
  },*/ {
    text: "Okazje",
    schemaType: "ItemList",
    submenu: [...getUpcomingOccasions(), ...baseOccasions],
  },
  {
    href: "/najczesciej-zadawane-pytania",
    text: "Pytania",
    title: "Często Zadawane Pytania",
  },
  {
    text: "Dostawa",
    href: "/dostawa",
  },
  {
    href: "/regulamin",
    text: "Regulamin",
    title: "Regulamin zamówień i akceptacji bukietu",
  },
];

export const companyInfo = {
  name: "Kwiaty Kraków",
  logo: {
    src: "/icon1.png",
    alt: "Kwiaciarnia Kwiaty - Dostawa kwiatów w Krakowie",
    width: 40,
    height: 40,
  },
  structuredData: {
    telephone: shopPhone,
    contactType: "customer service",
  },
};
