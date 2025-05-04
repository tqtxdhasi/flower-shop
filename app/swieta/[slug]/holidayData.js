// holidayData.js
export const holidayData = new Map([
  [
    "dzien-matki",
    {
      title: "Dzień Matki",
      slug: "dzien-matki",
      heroImage: "/swieta-bg.png",
      heroTitle: "Bukiet na Dzień Matki w Krakowie",
      heroDescription: `Specjalnie na Dzień Matki: ręcznie układane mono-kompozycje z najświeższych róż holenderskich lub polskich piwonii.`,
      deliveryInfo: {
        area: "Cały Kraków",
        time: "Dostawa 26 maja 8:00-20:00",
        contact: shopPhone,
      },
      description: `Specjalnie na Dzień Matki: ręcznie układane mono-kompozycje z najświeższych róż holenderskich lub polskich piwonii.`,
      faq: [
        {
          question: "Jak działa dostawa w Krakowie?",
          answer:
            "Dostarczamy kwiaty w dniu święta w godzinach 8:00-20:00. Minimalna wartość zamówienia z dostawą to 80 zł. Darmowa dostawa dostępna dla zamówień powyżej 200 zł w obrębie obwodnicy Krakowa.",
        },
        {
          question: "Czy mogę zmienić adres dostawy po złożeniu zamówienia?",
          answer:
            "Tak, zmiany w zamówieniu możliwe są do 2 godzin przed planowaną dostawą. Prosimy o kontakt telefoniczny pod numer " +
            shopPhone,
        },
      ],
      localSeo: {
        title: "Kwiaciarnia w Krakowie - Dlaczego My?",
        features: [
          "✅ Świeże kwiaty z lokalnych upraw",
          "✅ Dostawa w 2 godziny na terenie Krakowa",
          "✅ Profesjonalne doradztwo florystyczne",
          "✅ 5 lat doświadczenia w branży",
        ],
        districts: [
          "Stare Miasto",
          "Kazimierz",
          "Podgórze",
          "Nowa Huta",
          "Krowodrza",
          "Zwierzyniec",
        ],
      },
      metadata: {
        title: `Bukiet Róż, Piwonii lub Tulipanów na Dzień Matki | Kraków | KwiatowySklep.pl`,
        description: `Spraw radość mamie! Świeże mono-bukiet róż, piwonii lub tulipanów z darmową dostawą w Krakowie. Zamów do 20:00 - dostarczymy pod drzwi w Dzień Matki!`,
        keywords: [
          "monobukiet kraków",
          "ostatnia chwila dzień matki kwiaty",
          "ekspresowa dostawa kwiatów kraków",
          "kwiaciarnia z dostawą w krakowie",
          "prezent na dzień matki z dostawą",
          "świeże kwiaty kraków dzień matki",
        ],
        openGraph: {
          images: ["/images/swieta/dzien-matki-og.jpg"],
        },
      },
    },
  ],
  [
    "walentynki",
    {
      title: "Walentynki",
      slug: "walentynki",
      heroImage: "/swieta-bg.png",
      heroTitle: "Bukiet na Walentynki w Krakowie",
      heroDescription: `Zaskocz swoją drugą połówkę – wyjątkowe bukiety róż na Walentynki z szybką dostawą w Krakowie.`,
      deliveryInfo: {
        area: "Cały Kraków",
        time: "Dostawa 14 lutego 8:00-20:00",
        contact: shopPhone,
      },
      description: `Zaskocz swoją drugą połówkę – wyjątkowe bukiety róż na Walentynki z szybką dostawą w Krakowie.`,
      faq: [
        {
          question: "Czy mogę zamówić kwiaty z dostawą tego samego dnia?",
          answer:
            "Tak, oferujemy dostawę tego samego dnia w Walentynki. Zalecamy jednak wcześniejsze złożenie zamówienia ze względu na duże zainteresowanie.",
        },
        {
          question: "Jakie kwiaty są najpopularniejsze na Walentynki?",
          answer:
            "Najczęściej wybierane są czerwone róże, ale oferujemy także bukiety z tulipanów, goździków i kompozycje mieszane.",
        },
      ],
      localSeo: {
        title: "Kwiaty na Walentynki w Krakowie - Szybka Dostawa",
        features: [
          "✅ Kwiaty najwyższej jakości prosto od dostawców",
          "✅ Gwarancja dostawy 14 lutego",
          "✅ Możliwość dołączenia liściku miłosnego",
          "✅ Doświadczenie w realizacji walentynkowych zamówień",
        ],
        districts: [
          "Stare Miasto",
          "Kazimierz",
          "Podgórze",
          "Nowa Huta",
          "Krowodrza",
          "Zwierzyniec",
        ],
      },
      metadata: {
        title: `Kwiaty na Walentynki | Bukiet Róż z Dostawą w Krakowie | KwiatowySklep.pl`,
        description: `Wyjątkowe bukiety na Walentynki – czerwone róże i inne romantyczne kompozycje z darmową dostawą w Krakowie. Zamów online już teraz!`,
        keywords: [
          "walentynki kraków kwiaty",
          "bukiet róż walentynki kraków",
          "dostawa kwiatów walentynki kraków",
          "kwiaciarnia walentynki kraków",
          "romantyczny prezent z dostawą",
          "świeże róże kraków walentynki",
        ],
        openGraph: {
          images: ["/images/swieta/walentynki-og.jpg"],
        },
      },
    },
  ],
  [
    "dzien-kobiet",
    {
      title: "Dzień Kobiet",
      slug: "dzien-kobiet",
      heroImage: "/swieta-bg.png",
      heroTitle: "Kwiaty na Dzień Kobiet w Krakowie",
      heroDescription: `Podaruj uśmiech z okazji Dnia Kobiet – bukiety tulipanów, róż i innych sezonowych kwiatów z dostawą w Krakowie.`,
      deliveryInfo: {
        area: "Cały Kraków",
        time: "Dostawa 8 marca 8:00-20:00",
        contact: shopPhone,
      },
      description: `Podaruj uśmiech z okazji Dnia Kobiet – bukiety tulipanów, róż i innych sezonowych kwiatów z dostawą w Krakowie.`,
      faq: [
        {
          question: "Jakie kwiaty najczęściej wybierane są na Dzień Kobiet?",
          answer:
            "Najpopularniejsze są tulipany, róże i żonkile – symbole wiosny i kobiecości.",
        },
        {
          question: "Czy mogę zamówić kwiaty do biura lub szkoły?",
          answer:
            "Tak, realizujemy dostawy do biur, szkół i innych instytucji – wystarczy podać dokładny adres i dane odbiorcy.",
        },
      ],
      localSeo: {
        title: "Dzień Kobiet Kraków - Bukiety z Dostawą",
        features: [
          "✅ Tulipany, róże i inne sezonowe kwiaty",
          "✅ Szybka dostawa 8 marca na terenie Krakowa",
          "✅ Możliwość dołączenia kartki z życzeniami",
          "✅ Gwarancja świeżości i zadowolenia",
        ],
        districts: [
          "Stare Miasto",
          "Kazimierz",
          "Podgórze",
          "Nowa Huta",
          "Krowodrza",
          "Zwierzyniec",
        ],
      },
      metadata: {
        title: `Kwiaty na Dzień Kobiet | Bukiet Tulipanów lub Róż z Dostawą | Kraków | KwiatowySklep.pl`,
        description: `Zamów wyjątkowy bukiet na Dzień Kobiet – świeże tulipany, róże i inne kwiaty z dostawą w Krakowie. Zamów już dziś online!`,
        keywords: [
          "dzien kobiet kwiaty krakow",
          "tulipany na dzien kobiet",
          "bukiet dzien kobiet dostawa krakow",
          "kwiaty dla koleżanki z pracy kraków",
          "świeże kwiaty 8 marca kraków",
          "kwiaciarnia dzien kobiet krakow",
        ],
        openGraph: {
          images: ["/images/swieta/dzien-kobiet-og.jpg"],
        },
      },
    },
  ],
  [
    "dzien-ojca",
    {
      title: "Dzień Ojca",
      slug: "dzien-ojca",
      heroImage: "/swieta-bg.png",
      heroTitle: "Kwiaty na Dzień Ojca w Krakowie",
      heroDescription: `Zaskocz tatę elegancką kompozycją – stylowe bukiety i dodatki z dostawą na Dzień Ojca w Krakowie.`,
      deliveryInfo: {
        area: "Cały Kraków",
        time: "Dostawa 23 czerwca 8:00-20:00",
        contact: shopPhone,
      },
      description: `Zaskocz tatę elegancką kompozycją – stylowe bukiety i dodatki z dostawą na Dzień Ojca w Krakowie.`,
      faq: [
        {
          question: "Czy Dzień Ojca to odpowiednia okazja na kwiaty?",
          answer:
            "Tak! Coraz więcej osób decyduje się na elegancki bukiet lub zestaw kwiatów z dodatkami jako wyraz wdzięczności i szacunku dla ojca.",
        },
        {
          question: "Jakie kompozycje są najczęściej wybierane dla ojców?",
          answer:
            "Popularne są bukiety z czerwonych lub pomarańczowych róż, słoneczników oraz dodatki typu czekoladki, kawa czy kartka z życzeniami.",
        },
      ],
      localSeo: {
        title: "Kwiaty na Dzień Ojca z Dostawą w Krakowie",
        features: [
          "✅ Stylowe kompozycje kwiatowe dla mężczyzn",
          "✅ Dostawa 23 czerwca na terenie Krakowa",
          "✅ Możliwość personalizacji zamówienia",
          "✅ Idealny prezent z dostawą pod drzwi",
        ],
        districts: [
          "Stare Miasto",
          "Kazimierz",
          "Podgórze",
          "Nowa Huta",
          "Krowodrza",
          "Zwierzyniec",
        ],
      },
      metadata: {
        title: `Kwiaty na Dzień Ojca | Stylowe Bukiety z Dostawą | Kraków | KwiatowySklep.pl`,
        description: `Wyraź wdzięczność w Dzień Ojca – zamów stylowy bukiet z dostawą w Krakowie. Eleganckie kompozycje i dodatki dla każdego taty.`,
        keywords: [
          "dzien ojca kwiaty krakow",
          "stylowy bukiet dla taty",
          "kwiaty dzien ojca z dostawą kraków",
          "prezent na dzien ojca krakow",
          "eleganckie kwiaty dla mężczyzny",
          "kompozycje na dzien ojca krakow",
        ],
        openGraph: {
          images: ["/images/swieta/dzien-ojca-og.jpg"],
        },
      },
    },
  ],
  [
    "dzien-babci",
    {
      title: "Dzień Babci",
      slug: "dzien-babci",
      heroImage: "/swieta-bg.png",
      heroTitle: "Kwiaty na Dzień Babci w Krakowie",
      heroDescription: `Pokaż babci, jak bardzo ją kochasz – wyjątkowe bukiety z dostawą na Dzień Babci w całym Krakowie.`,
      deliveryInfo: {
        area: "Cały Kraków",
        time: "Dostawa 21 stycznia 8:00-20:00",
        contact: shopPhone,
      },
      description: `Pokaż babci, jak bardzo ją kochasz – wyjątkowe bukiety z dostawą na Dzień Babci w całym Krakowie.`,
      faq: [
        {
          question: "Jakie kwiaty są najlepsze na Dzień Babci?",
          answer:
            "Najczęściej wybierane są goździki, róże, frezje oraz delikatne kompozycje mieszane z kartką z życzeniami.",
        },
        {
          question: "Czy mogę dołączyć bilecik do bukietu?",
          answer:
            "Tak, przy składaniu zamówienia możesz wpisać treść życzeń, a my dołączymy elegancki bilecik do bukietu.",
        },
      ],
      localSeo: {
        title: "Kwiaty na Dzień Babci z Dostawą w Krakowie",
        features: [
          "✅ Kwiaty idealne dla babci – goździki, frezje, róże",
          "✅ Dostawa 21 stycznia na terenie całego Krakowa",
          "✅ Możliwość dołączenia życzeń lub prezentu",
          "✅ Zaufana kwiaciarnia z doświadczeniem",
        ],
        districts: [
          "Stare Miasto",
          "Kazimierz",
          "Podgórze",
          "Nowa Huta",
          "Krowodrza",
          "Zwierzyniec",
        ],
      },
      metadata: {
        title: `Kwiaty na Dzień Babci | Bukiet z Dostawą w Krakowie | KwiatowySklep.pl`,
        description: `Zamów bukiet dla babci z dostawą w Krakowie na 21 stycznia. Goździki, róże i inne kwiaty z bilecikiem i uśmiechem.`,
        keywords: [
          "dzien babci kwiaty krakow",
          "bukiet dla babci krakow",
          "kwiaciarnia dzien babci krakow",
          "kwiaty z dostawą na dzien babci",
          "goździki na dzien babci krakow",
          "prezent dla babci krakow kwiaty",
        ],
        openGraph: {
          images: ["/images/swieta/dzien-babci-og.jpg"],
        },
      },
    },
  ],
  [
    "dzien-dziadka",
    {
      title: "Dzień Dziadka",
      slug: "dzien-dziadka",
      heroImage: "/swieta-bg.png",
      heroTitle: "Kwiaty i upominki na Dzień Dziadka w Krakowie",
      heroDescription: `Wyjątkowe kompozycje i drobne upominki z dostawą na Dzień Dziadka – spraw radość swojemu dziadkowi w Krakowie.`,
      deliveryInfo: {
        area: "Cały Kraków",
        time: "Dostawa 22 stycznia 8:00-20:00",
        contact: shopPhone,
      },
      description: `Wyjątkowe kompozycje i drobne upominki z dostawą na Dzień Dziadka – spraw radość swojemu dziadkowi w Krakowie.`,
      faq: [
        {
          question: "Co mogę zamówić na Dzień Dziadka oprócz kwiatów?",
          answer:
            "Oferujemy również drobne upominki, czekoladki, kawę oraz kartki z życzeniami, które można dodać do zamówienia.",
        },
        {
          question: "Czy mogę wybrać godzinę dostawy?",
          answer:
            "Dokładna godzina dostawy nie jest gwarantowana, ale możesz wskazać preferowany przedział czasowy – postaramy się go uwzględnić.",
        },
      ],
      localSeo: {
        title: "Upominki i Kwiaty na Dzień Dziadka z Dostawą - Kraków",
        features: [
          "✅ Kwiaty i dodatki idealne dla dziadka",
          "✅ Dostawa 22 stycznia na terenie Krakowa",
          "✅ Personalizacja zamówienia – kartki, dodatki",
          "✅ Szybka i punktualna dostawa",
        ],
        districts: [
          "Stare Miasto",
          "Kazimierz",
          "Podgórze",
          "Nowa Huta",
          "Krowodrza",
          "Zwierzyniec",
        ],
      },
      metadata: {
        title: `Dzień Dziadka - Kwiaty i Prezenty z Dostawą | Kraków | KwiatowySklep.pl`,
        description: `Spraw przyjemność dziadkowi 22 stycznia – zamów kwiaty i upominki z dostawą w Krakowie. Szybka realizacja i możliwość dodania bileciku.`,
        keywords: [
          "dzien dziadka kwiaty krakow",
          "prezent dla dziadka z dostawą",
          "kwiaty na dzien dziadka krakow",
          "upominki dla dziadka krakow",
          "kwiaciarnia krakow dzien dziadka",
          "bukiet dla dziadka z bilecikiem",
        ],
        openGraph: {
          images: ["/images/swieta/dzien-dziadka-og.jpg"],
        },
      },
    },
  ],
  [
    "wielkanoc",
    {
      title: "Wielkanoc",
      slug: "wielkanoc",
      heroImage: "/swieta-bg.png",
      heroTitle: "Wielkanocne kompozycje kwiatowe z dostawą w Krakowie",
      heroDescription: `Stwórz świąteczny nastrój z pomocą świeżych, wiosennych kwiatów – bukiety wielkanocne z dostawą pod drzwi w Krakowie.`,
      deliveryInfo: {
        area: "Cały Kraków",
        time: "Dostawa 29-30 marca 8:00-20:00",
        contact: shopPhone,
      },
      description: `Stwórz świąteczny nastrój z pomocą świeżych, wiosennych kwiatów – bukiety wielkanocne z dostawą pod drzwi w Krakowie.`,
      faq: [
        {
          question: "Jakie kwiaty są dostępne na Wielkanoc?",
          answer:
            "W ofercie znajdują się żonkile, tulipany, hiacynty, a także wielkanocne kompozycje z dodatkami świątecznymi.",
        },
        {
          question: "Czy mogę zamówić kwiaty na konkretny dzień?",
          answer:
            "Tak, oferujemy dostawę 29 i 30 marca – wybierz preferowany termin podczas składania zamówienia.",
        },
      ],
      localSeo: {
        title: "Wielkanocne Kwiaty z Dostawą w Krakowie",
        features: [
          "✅ Żonkile, tulipany i inne wiosenne kwiaty",
          "✅ Kompozycje z akcentami świątecznymi",
          "✅ Dostawa 29–30 marca w całym Krakowie",
          "✅ Idealne do domu lub jako prezent",
        ],
        districts: [
          "Stare Miasto",
          "Kazimierz",
          "Podgórze",
          "Nowa Huta",
          "Krowodrza",
          "Zwierzyniec",
        ],
      },
      metadata: {
        title: `Wielkanocne Bukiety z Dostawą | Kraków | KwiatowySklep.pl`,
        description: `Zamów świeże kwiaty na Wielkanoc z dostawą w Krakowie – żonkile, tulipany i inne wiosenne kompozycje na świąteczny stół.`,
        keywords: [
          "wielkanoc kwiaty krakow",
          "wielkanocne bukiety krakow",
          "kwiaty na święta wielkanocne",
          "żonkile tulipany wielkanoc kraków",
          "kompozycje wielkanocne z dostawą",
          "świeże kwiaty wielkanoc kraków",
        ],
        openGraph: {
          images: ["/images/swieta/wielkanoc-og.jpg"],
        },
      },
    },
  ],
]);
