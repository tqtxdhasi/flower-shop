import Gallery from "@/app/components/Gallery";
import OrderForm from "../../components/order-form/OrderForm";
import Regulamin from "@/app/components/Regulamin";
import Link from "next/link";
import Script from "next/script";
import holidaysList from "@/app/components/HolidaysData";
import HolidaysSection from "@/app/components/HolidaysSection";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { shopDomain, shopName } from "@/app/data/mainData";
import VariantSections from "@/app/components/VariantSections";
import { rosesProductGroupSchema } from "@/app/kwiaty/roze/roseSchema";
import FAQSection from "@/app/components/faq/FAQSection";
import HolidaySuggestions from "@/app/components/HolidaySuggestions";

export const metadata = {
  title: `Świeże Róże | Kwiaty, Bukiet Róż z Dostawą i Odbiorem | ${shopName}`,
  description:
    "Zamów kwiaty online w Krakowie — luksusowe bukiety róż w ponad 100 wariantach ilości, koloru i długości. Bukiet róż w Krakowie z dostawą lub darmowym odbiorem osobistym na następny dzień",
  keywords: [
    "świeże kwiaty Kraków",
    "bukiet róż Kraków",
    "kwiaty Kraków",
    "dostawa kwiatów Kraków",
    "kwiaciarnia Kraków",
    "online kwiaciarnia Kraków",
    "kwiaciarnia internetowa Kraków",
    "kwiaty online Kraków",
    "dostawa kwiatów",
    "odbiór osobisty kwiatów",
  ],
  alternates: {
    canonical: `${shopDomain}/kwiaty/roze`,
  },
  openGraph: {
    title: `Świeże Róże | Kwiaty, Bukiet Róż z Dostawą i Odbiorem | ${shopName}`,
    description:
      "Zamów kwiaty online w Krakowie — luksusowe bukiety róż w ponad 100 wariantach ilości, koloru i długości. Bukiet róż w Krakowie z dostawą lub darmowym odbiorem osobistym na następny dzień",
    url: `${shopDomain}/kwiaty/roze`,
    siteName: shopName,
    images: [
      {
        url: `${shopDomain}/images/category-rose.jpg`,
        width: 1200,
        height: 628,
        alt: "Bukiet róż premium",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Świeże Róże | Kwiaty, Bukiet Róż z Dostawą i Odbiorem | ${shopName}`,
    description:
      "Zamów kwiaty online w Krakowie — luksusowe bukiety róż w ponad 100 wariantach ilości, koloru i długości. Bukiet róż w Krakowie z dostawą lub darmowym odbiorem osobistym na następny dzień",
    images: [`${shopDomain}/images/category-rose.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const breadcrumbs = [
  { name: "Główna", url: `${shopDomain}/` },
  { name: "Kwiaty", url: `${shopDomain}/kwiaty` },
  { name: "Róże", url: `${shopDomain}/kwiaty/roze` },
];

const FlowerPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <Script
        id="products-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(rosesProductGroupSchema),
        }}
      />
      <h1 className="max-w-4xl px-4 mx-auto  text-3xl font-bold text-center text-rose-900 md:text-4xl">
        Zachwyć bliskich świeżymi różami – wyjątkowe bukiety Róż z dostawą w
        Krakowie
      </h1>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-col w-full md:flex-row gap-4 mx-auto">
        <Gallery />

        <div className="w-full md:w-1/3">
          <OrderForm />
        </div>
      </div>
      <div className="max-w-4xl flex flex-col gap-4 px-2 mx-auto">
        <h2 className=" text-2xl text-center font-bold text-rose-900 md:text-3xl">
          Eleganckie Jednoróżane Bukiety – Świeże Róże z Dostawą w Krakowie
        </h2>
        <p className=" text-rose-800">
          🌹 Szukasz wyjątkowego bukietu róż online? Nasza internetowa
          kwiaciarnia oferuje oferuje świeże, jednoróżane bukiety wykonane z
          kwiatów najwyższej jakości. Każda róża jest starannie selekcjonowana,
          aby zapewnić doskonały wygląd i trwałość. Dostępnych jest ponad 100
          wariantów ilości, koloru i długości. Oferujemy dostawę lub darmowy
          odbiór osobisty już na następny dzień. Istnieje także możliwość
          personalizacji zamówienia, dzięki czemu bukiet staje się idealnym
          wyborem na każdą okazję.
        </p>
        <VariantSections />
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
          Spraw, aby każda chwila była niezapomniana dzięki zapachowi świeżych
          kwiatów i pięknie skomponowanym bukietom.
        </p>
        <HolidaySuggestions />
        <FAQSection limit={6} />
      </div>
      {/*  
      <h2 className=" text-2xl text-center font-bold text-rose-900 md:text-3xl">
        Artykuły i Porady o Różach
      </h2>
      ....
      */}
      <Regulamin />
    </div>
  );
};

export default FlowerPage;
