import Gallery from "@/app/components/Gallery";
import OrderForm from "../../components/OrderForm";
import Regulamin from "@/app/components/Regulamin";
import Link from "next/link";
import Script from "next/script";
import FAQSection from "@/app/components/FAQSection";
import holidaysList from "@/app/components/HolidaysData";
import HolidaysSection from "@/app/components/HolidaysSection";
import Breadcrumbs from "@/app/components/Breadcrumbs";
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Kwiaty", url: "/kwiaty" },
  { name: "Róże", url: "/kwiaty/roze" },
];
const schemaData = {
  "@context": "https://schema.org/",
  "@type": "ProductGroup",
  productGroupID: "ROZE-GROUP",
  name: "Bukiet róż – różne kolory, wielkości i ilości",
  variesBy: ["height", "quantity", "color"],
  hasVariant: [
    {
      "@type": "Product",
      sku: "ROZE-19-50-WHITE",
      name: "Bukiet 19 białych róż 50 cm",
      color: "White",
      image: "https://www.krakow-kwiaciarnia.pl/images/roze-19-50-biale.jpg",
      description:
        "Luksusowy bukiet 19 białych róż o długości 50 cm z opcją personalizacji opakowania, bilecikiem i dodaniem zdjęcia.",
      offers: {
        "@type": "Offer",
        url: "https://www.krakow-kwiaciarnia.pl/kwiaty/roze?quantity=19&height=50&packaging=White&flowerColor=White",
        priceCurrency: "PLN",
        priceSpecification: {
          "@type": "CompoundPriceSpecification",
          priceComponent: [
            {
              "@type": "UnitPriceSpecification",
              name: "Bukiet (19 szt. 50 cm)",
              price: 160,
            },
            {
              "@type": "UnitPriceSpecification",
              name: "Opakowanie",
              price: 10,
            },
            { "@type": "UnitPriceSpecification", name: "Dostawa", price: 20 },
            { "@type": "UnitPriceSpecification", name: "Bilecik", price: 10 },
            {
              "@type": "UnitPriceSpecification",
              name: "Dodanie zdjęcia",
              price: 20,
            },
          ],
          price: 220,
        },
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
    },
    {
      "@type": "Product",
      sku: "ROZE-19-50-RED",
      name: "Bukiet 19 czerwonych róż 50 cm",
      color: "Red",
      image: "https://www.krakow-kwiaciarnia.pl/images/roze-19-50-czerwone.jpg",
      description:
        "Luksusowy bukiet 19 czerwonych róż o długości 50 cm z opcją personalizacji opakowania, bilecikiem i dodaniem zdjęcia.",
      offers: {
        "@type": "Offer",
        url: "https://www.krakow-kwiaciarnia.pl/kwiaty/roze?quantity=19&height=50&packaging=White&flowerColor=Red",
        priceCurrency: "PLN",
        priceSpecification: {
          "@type": "CompoundPriceSpecification",
          priceComponent: [
            {
              "@type": "UnitPriceSpecification",
              name: "Bukiet (19 szt. 50 cm)",
              price: 160,
            },
            {
              "@type": "UnitPriceSpecification",
              name: "Opakowanie",
              price: 10,
            },
            { "@type": "UnitPriceSpecification", name: "Dostawa", price: 20 },
            { "@type": "UnitPriceSpecification", name: "Bilecik", price: 10 },
            {
              "@type": "UnitPriceSpecification",
              name: "Dodanie zdjęcia",
              price: 20,
            },
          ],
          price: 220,
        },
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
    },
    /* repeat one Product block for each combination of quantity (9,19,29,39,49), height (40,50,60,70,80) and color (Red, Pink, White, Yellow, Purple, Blue) */
  ],
};
const FlowerPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      {/* ✅ SEO Schema - Correct placement */}
      <Script
        id="ld-json"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />{" "}
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1 className="max-w-4xl px-4 mx-auto sm:my-4 text-3xl font-bold text-center text-rose-900 md:text-4xl">
        Bukiet Róż Premium - Świeże Kwiaty z Dostawą w Krakowie
      </h1>
      <div className="flex flex-col w-full md:flex-row gap-4 mx-auto">
        <Gallery />

        <div className="w-full md:w-1/3">
          <OrderForm />
        </div>
      </div>
      <div className="max-w-4xl flex flex-col gap-4 px-2 mx-auto">
        <h2 className=" text-2xl text-center font-bold text-rose-900 md:text-3xl">
          Eleganckie Bukiety Jednoróżane – Ekskluzywne Róże w Krakowie Online
        </h2>
        <p className=" text-rose-800">
          🌹 Szukasz wyjątkowego bukietu róż online? Nasz sklep internetowy
          oferuje luksusowe, jednoróżane bukiety wykonane z kwiatów najwyższej
          jakości. Każda róża jest starannie selekcjonowana, aby zapewnić
          doskonały wygląd i trwałość. Oferujemy ekspresową wysyłkę oraz
          możliwość personalizacji zamówienia, dzięki czemu bukiet staje się
          idealnym wyborem na każdą okazję.
        </p>
        <h3 className=" text-xl text-rose-900 font-semibold">
          Dostępne Warianty
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-rose-50 rounded-lg col-span-2 md:col-span-1 shadow-sm flex flex-col gap-2">
            <h4 className="text-rose-900 font-semibold">Rozmiary łodyg</h4>
            <div className="flex flex-wrap gap-2">
              {["40cm", "50cm", "60cm", "70cm", "80cm"].map((size) => (
                <span
                  key={size}
                  className="bg-white text-rose-900 border-2 border-rose-200 hover:bg-rose-50 transition-colors rounded-full px-4 py-1"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 bg-rose-50 rounded-lg col-span-2 md:col-span-1 shadow-sm flex flex-col gap-2">
            <h4 className="text-rose-900 font-semibold">Kolorystyka</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Czerwony",
                "Biały",
                "Różowy",
                "Żółty",
                "Pomarańczowy",
                "Miks",
              ].map((color) => (
                <span
                  key={color}
                  className="bg-white text-rose-900 border-2 border-rose-200 hover:bg-rose-50 transition-colors rounded-full px-4 py-1"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
          <div className="p-4 bg-rose-50 rounded-lg shadow-sm flex flex-col gap-2 col-span-2">
            <h4 className="text-rose-900 font-semibold">Dodatkowe Usługi</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Personalizowane bileciki",
                "Ekskluzywne opakowanie",
                "Słodkie upominki",
                "Eleganckie opakowanie prezentowe",
                "Subskrypcja kwiatowa",
                "Kompozycje na zamówienie",
              ].map((color) => (
                <span
                  key={color}
                  className="bg-white text-rose-900 border-2 text-center border-rose-200 hover:bg-rose-50 transition-colors rounded-full px-4 py-1"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>
        <HolidaysSection holidays={holidaysList} />

        <p className=" text-rose-800">
          Niezależnie od tego, czy obchodzisz Walentynki, Boże Narodzenie,
          Wielkanoc, Nowy Rok, Sylwestra, Dzień Kobiet, Dzień Ojca, Dzień
          Dziecka czy Halloween – nasze kwiaty to idealny wybór. Każda okazja
          zasługuje na wyjątkową oprawę, a nasze bukiety doskonale wpisują się w
          klimat świąteczny i okolicznościowy.
        </p>
        <p className=" text-rose-800">
          Kwiaty na Święto Zakochanych, kompozycje na Wielkanoc czy świąteczne
          stroiki bożonarodzeniowe – wszystko znajdziesz u nas. Spraw, aby Twoje
          świętowanie było pełne kolorów, zapachu świeżych kwiatów i radości.
          Zainspiruj się naszymi propozycjami na każdą okazję – od Walentynek po
          Dzień Kobiet.
        </p>
        <FAQSection />
      </div>
      {/*  
      <h2 className=" text-2xl text-center font-bold text-rose-900 md:text-3xl">
        Artykuły i Porady o Różach
      </h2>
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3">
        <article className="group h-fit bg-rose-50 rounded-xl col-span-1 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-md mx-auto hover:bg-rose-100">
          
          <div className="relative h-60 overflow-hidden">
            <img
              src="https://placehold.co/800x400.png?text=Proper+Watering+Technique"
              alt="Czerwone róże z widokiem na Wawel w Krakowie"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-2 left-2 bg-rose-600/90 text-white px-3 py-1 rounded-full text-sm">
              Kraków 🌹
            </div>
          </div>

          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-rose-900 mb-3 hover:text-rose-700 transition-colors">
              <Link href="/blog/jak-wybrac-idealne-roze-krakow">
                Jak Wybrać Idealne Róże w Krakowie? Poradnik 2024
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </Link>
            </h2>

            <p className="text-rose-800 mb-4">
              Poznaj sekrety wyboru najświeższych róż od lokalnych dostawców.
              Przewodnik po krakowskich dzielnicach i najlepszych okazjach!
            </p>

            
            <div className="flex items-center justify-between text-rose-600 text-sm mb-4">
              <span>📖 5 min czytania</span>
              <span>🗓️ 15 Maj 2024</span>
            </div>

            
            <Link
              href="/blog/jak-wybrac-idealne-roze-krakow"
              className="inline-block w-full bg-rose-600 hover:bg-rose-700 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors duration-300 shadow-sm hover:shadow-md"
              aria-label="Przeczytaj poradnik o wyborze róż w Krakowie"
            >
              Czytaj Poradnik Krakowskiego Florysty 🌹
            </Link>
          </div>
        </article>
        <article className="group col-span-1 h-fit bg-rose-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-md mx-auto hover:bg-rose-100 border-2 border-rose-100">
          
          <div className="relative h-60 overflow-hidden">
            <img
              src="https://placehold.co/800x400.png?text=Proper+Watering+Technique"
              alt="Pielęgnacja róż w krakowskim mieszkaniu z widokiem na Planty"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-2 left-2  w-full flex flex-wrap gap-2">
              {" "}
              <div className=" bg-rose-600/90 text-white px-3 py-1 rounded-full text-sm">
                Poradnik Kraków 🌹
              </div>
              <div className=" bg-rose-600/90 text-white px-3 py-1 rounded-full text-sm">
                Roze
              </div>
            </div>
          </div>

          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-rose-900 mb-3 hover:text-rose-700 transition-colors">
              <Link href="/blog/przedluzanie-zycia-roz-krakow">
                Jak Przedłużyć Życie Róż w Krakowie? 7 Sprawdzonych Metod
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </Link>
            </h2>

            <p className="text-rose-800 mb-4">
              Poznaj tajniki krakowskich florystów! Dowiedz się jak twarda woda
              z Wisły wpływa na trwałość róż i zamów profesjonalną odżywkę z
              dostawą pod Twój adres.
            </p>

            
            <div className="flex items-center justify-between text-rose-600 text-sm mb-4">
              <span>📖 7 min czytania</span>
              <span>🗓️ 20 Maj 2024</span>
            </div>

            <div className="space-y-4">
              <Link
                href="/blog/przedluzanie-zycia-roz-krakow"
                className="block text-center bg-rose-600 hover:bg-rose-700 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
                aria-label="Poznaj metody przedłużania życia róż"
              >
                Poznaj Sekrety Florystów →
              </Link>
            </div>
          </div>
        </article>
        <article className="group h-fit bg-rose-50 rounded-xl col-span-1 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-md mx-auto hover:bg-rose-100">
          
          <div className="relative h-60 overflow-hidden">
            <img
              src="https://placehold.co/800x400.png?text=Proper+Watering+Technique"
              alt="Czerwone róże z widokiem na Wawel w Krakowie"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-2 left-2 bg-rose-600/90 text-white px-3 py-1 rounded-full text-sm">
              Kraków 🌹
            </div>
          </div>

          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-rose-900 mb-3 hover:text-rose-700 transition-colors">
              <Link href="/blog/jak-wybrac-idealne-roze-krakow">
                Jak Wybrać Idealne Róże w Krakowie? Poradnik 2024
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </Link>
            </h2>

            <p className="text-rose-800 mb-4">
              Poznaj sekrety wyboru najświeższych róż od lokalnych dostawców.
              Przewodnik po krakowskich dzielnicach i najlepszych okazjach!
            </p>

            
            <div className="flex items-center justify-between text-rose-600 text-sm mb-4">
              <span>📖 5 min czytania</span>
              <span>🗓️ 15 Maj 2024</span>
            </div>

            
            <Link
              href="/blog/jak-wybrac-idealne-roze-krakow"
              className="inline-block w-full bg-rose-600 hover:bg-rose-700 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors duration-300 shadow-sm hover:shadow-md"
              aria-label="Przeczytaj poradnik o wyborze róż w Krakowie"
            >
              Czytaj Poradnik Krakowskiego Florysty 🌹
            </Link>
          </div>
        </article>{" "}
      </div>{" "}*/}
      <Regulamin />
    </div>
  );
};

export default FlowerPage;
