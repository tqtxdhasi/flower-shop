import { shopPhone } from "../data/mainData";
const baseOccasions = [
  {
    href: "/okazje/urodziny",
    text: "Kwiaty na Urodziny",
    title: "Kwiaty na Urodziny z Dostawą w Krakowie | Bukiety Urodzinowe",
  },
  {
    href: "/okazje/imieniny",
    text: "Kwiaty na Imieniny",
    title: "Bukiety Imieninowe z Dostawą w Krakowie | Kwiaty na Imieniny",
  },
  {
    href: "/okazje/rocznica",
    text: "Kwiaty na Rocznicę",
    title: "Romantyczne Bukiety na Rocznicę Ślubu | Kraków Kwiaty",
  },
  {
    href: "/okazje/gratulacje",
    text: "Kwiaty z Gratulacjami",
    title: "Kwiaty Gratulacyjne z Dostawą w Krakowie | Bukiety Gratulacyjne",
  },
  {
    href: "/okazje/przeprosiny",
    text: "Kwiaty na Przeprosiny",
    title:
      "Wyjątkowe Kwiaty na Przeprosiny z Dostawą w Krakowie | Bukiety Przeprosinowe",
  },

  {
    href: "/okazje/szkola",
    text: "Kwiaty na Szkołę",
    title:
      "Kwiaty na Okazje Szkolne z Dostawą w Krakowie | Bukiety na Wszystkie Wydarzenia Szkolne",
  },
  {
    href: "/okazje/bez-okazji",
    text: "Kwiaty bez Okazji",
    title: "Kwiaty bez Okazji z Dostawą w Krakowie | Bukiety na Co Dzień",
  },
];

const seasonalOccasions = [
  {
    key: "dzien-ojca",
    date: new Date(new Date().getFullYear(), 5, 23), // 23 czerwca
    item: {
      href: "/swieta/dzien-ojca",
      text: "Kwiaty na Dzień Ojca",
      title: "Kwiaty na Dzień Ojca z Dostawą w Krakowie | 23 czerwca",
    },
  },
  {
    key: "walentynki",
    date: new Date(new Date().getFullYear(), 1, 14), // 14 lutego
    item: {
      href: "/swieta/walentynki",
      text: "Kwiaty na Walentynki",
      title:
        "Kwiaty na Walentynki z Dostawą w Krakowie | Róże, Bukiety, Serce z Kwiatów",
    },
  },
  {
    key: "dzien-matki",
    date: new Date(new Date().getFullYear(), 4, 26), // 26 maja
    item: {
      href: "/swieta/dzien-matki",
      text: "Kwiaty na Dzień Matki",
      title: "Kwiaty na Dzień Matki z Dostawą w Krakowie | 26 maja",
    },
  },
  {
    key: "dzien-kobiet",
    date: new Date(new Date().getFullYear(), 2, 8), // 8 marca
    item: {
      href: "/swieta/dzien-kobiet",
      text: "Kwiaty na Dzień Kobiet",
      title: "Kwiaty na Dzień Kobiet z Dostawą w Krakowie | 8 marca",
    },
  },
  {
    key: "dzien-babci",
    date: new Date(new Date().getFullYear(), 0, 21), // 21 stycznia
    item: {
      href: "/swieta/dzien-babci",
      text: "Kwiaty na Dzień Babci",
      title: "Kwiaty na Dzień Babci z Dostawą w Krakowie | 21 stycznia",
    },
  },
  {
    key: "dzien-dziadka",
    date: new Date(new Date().getFullYear(), 0, 22), // 22 stycznia
    item: {
      href: "/swieta/dzien-dziadka",
      text: "Upominki na Dzień Dziadka",
      title: "Upominki na Dzień Dziadka z Dostawą w Krakowie | 22 stycznia",
    },
  },
  {
    key: "wielkanoc",
    date: (() => {
      // Computation of Easter Sunday using Anonymous Gregorian algorithm
      const Y = new Date().getFullYear();
      const a = Y % 19;
      const b = Math.floor(Y / 100);
      const c = Y % 100;
      const d = Math.floor(b / 4);
      const e = b % 4;
      const f = Math.floor((b + 8) / 25);
      const g = Math.floor((b - f + 1) / 3);
      const h = (19 * a + b - d - g + 15) % 30;
      const i = Math.floor(c / 4);
      const k = c % 4;
      const l = (32 + 2 * e + 2 * i - h - k) % 7;
      const m = Math.floor((a + 11 * h + 22 * l) / 451);
      const month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
      const day = ((h + l - 7 * m + 114) % 31) + 1;
      return new Date(Y, month, day);
    })(),
    item: {
      href: "/swieta/wielkanoc",
      text: "Dekoracje i upominki na Wielkanoc",
      title: "Dekoracje i upominki na Wielkanoc z Dostawą w Krakowie",
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
function getToday() {
  const env = printTodayDate() || "2025-02-10";
  return env ? new Date(env) : new Date();
}

function getNextSeasonalOccasion(windowDays = 14) {
  const today = getToday();
  return (
    seasonalOccasions
      .filter(({ date }) => {
        const diffDays =
          (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
        return diffDays >= 0 && diffDays <= windowDays;
      })
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .map(({ item }) => item)[0] || null
  );
}
const seasonalMenuItem = getNextSeasonalOccasion();

export const menuItems = [
  ...(seasonalMenuItem ? [seasonalMenuItem] : []),
  {
    text: "Kwiaty",
    schemaType: "ItemList",
    submenu: [
      {
        href: "/kwiaty/roze",
        text: "Róże",
        title: "Róże w Krakowie - Najpiękniejsze Bukiet Róż",
      } /*

      {
        href: "/kwiaty/tulipany",
        text: "Tulipany",
        title: "Tulipany w Różnych Kolorach - Dostawa w Krakowie",
        
      },
      {
        href: "/kwiaty/hortensje",
        text: "Hortensje",
        title: "Hortensje w Krakowie - Eleganckie Bukiety z Dostawą",
        
      },
      {
        href: "/kwiaty/gipsowka",
        text: "Gipsówka",
        title: "Gipsówka w Krakowie - Subtelne Bukiety z Dostawą",
        
      },
      {
        href: "/kwiaty/jaskry",
        text: "Jaskry",
        title: "Jaskry w Krakowie - Kolorowe Bukiety na Każdą Okazję",
        
      },
      {
        href: "/kwiaty/piwonie",
        text: "Piwonie",
        title: "Piwonie w Krakowie - Najpiękniejsze Bukiety z Piwoniami",
        
      },*/,
    ],
  },

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
  */ {
    href: "/cennik",
    text: "Cennik",
    title: "Cennik",
  },
  {
    text: "Okazje",
    schemaType: "ItemList",
    submenu: baseOccasions,
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
