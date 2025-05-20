import Gallery from "@/app/components/Gallery";
import OrderForm from "../../components/OrderForm";
import Regulamin from "@/app/components/Regulamin";
import Link from "next/link";
import Script from "next/script";
import FAQSection from "@/app/components/FAQSection";
import holidaysList from "@/app/components/HolidaysData";
import HolidaysSection from "@/app/components/HolidaysSection";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { shopDomain } from "@/app/data/mainData";
import VariantSections from "@/app/components/VariantSections";
import { roseSchema } from "@/app/kwiaty/roze/roseSchema";

const breadcrumbs = [
  { name: "Home", url: `https://${shopDomain}/` },
  { name: "Kwiaty", url: `https://${shopDomain}/kwiaty` },
  { name: "Róże", url: `https://${shopDomain}/kwiaty/roze` },
];

const FlowerPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <Script
        id="ld-json"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roseSchema) }}
      />
      <h1 className="max-w-4xl px-4 mx-auto  text-3xl font-bold text-center text-rose-900 md:text-4xl">
        Bukiet Róż Premium - Świeże Kwiaty z Dostawą w Krakowie
      </h1>{" "}
      <Breadcrumbs breadcrumbs={breadcrumbs} />
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
          Zainspiruj się naszymi propozycjami na każdą okazję – od Walentynek po
          Dzień Kobiet.
        </p>
        <FAQSection />
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
