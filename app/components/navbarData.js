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
    date: new Date(new Date().getFullYear(), 5, 23),
    item: {
      href: "/swieta/dzien-ojca",
      text: "Kwiaty na Dzień Ojca",
      title: "Kwiaty na Dzień Ojca z Dostawą w Krakowie | 23 czerwca",
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
    text: "Prezenty",
    schemaType: "ItemList",
    submenu: [
      {
        href: "/prezenty/czekoladki",
        text: "Czekoladki",
        title: "Czekoladki i Kwiaty - Słodki Dodatek do Bukietu",
        
      },
      {
        href: "/prezenty/kartki",
        text: "Kartki Okolicznościowe",
        title: "Kartki z Życzeniami do Kwiatów - Personalizowane Dodatki",
        
      },
      {
        href: "/prezenty/misie",
        text: "Pluszowe Misie",
        title: "Pluszaki do Kwiatów - Uroczy Dodatek na Prezent",
        
      },
      {
        href: "/prezenty/wino",
        text: "Wino i Prosecco",
        title: "Wino i Prosecco do Kwiatów - Elegancki Prezent z Dostawą",
        
      },
      {
        href: "/prezenty/świece",
        text: "Świece Zapachowe",
        title: "Naturalne Świece i Bukiety - Romantyczny Zestaw",
        
      },
      {
        href: "/prezenty/kawa-herbata",
        text: "Kawa i Herbata",
        title: "Zestawy Kwiaty + Kawa lub Herbata - Relaksujący Upominek",
        
      },
      {
        href: "/prezenty/zestawy",
        text: "Zestawy Prezentowe",
        title: "Zestawy Prezentowe: Kwiaty + Prezenty - Gotowe do Wręczenia",
        
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
  */ {
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
