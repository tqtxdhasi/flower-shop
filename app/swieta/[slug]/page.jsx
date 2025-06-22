import FAQSection from "@/app/components/faq/FAQSection";
import Regulamin from "@/app/components/Regulamin";
import { shopPhone } from "@/app/data/mainData";
import AvailableFlowers from "@/app/components/AvailableFlowers";
import holidays from "./holidayData";

export default function SwietaPage({ params }) {
  const holiday = holidays[params.slug] || {
    heading: "Święta",
    hook: "Wybierz idealny prezent na każdą okazję!",
    urgency: "Zamów do 14:00, by zdążyć na czas!",
  };

  return (
    <>
      <main className="bg-white flex flex-col gap-6 py-12 px-6">
        {/* Hero */}
        <div className="flex gap-6 text-rose-900 flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-extrabold">{holiday.heading}</h1>
          <p className="text-2xl italic">{holiday.hook}</p>
          <p className="text-sm">{holiday.urgency} | Zegar: 00:00:00</p>
          <a
            href={`tel:${shopPhone}`}
            className="bg-green-700 py-3 px-8 rounded-lg hover:bg-green-800 text-white font-bold transition-all"
          >
            Zadzwoń: {shopPhone}
          </a>
        </div>

        {/* Value Props */}
        <section className="py-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center px-4">
            <div>
              <h3 className="text-rose-700 text-lg font-semibold">
                🚚 Dostawa tego samego dnia
              </h3>
              <p className="mt-2 text-gray-600">
                Zamów do 19:00 i ciesz się dostawą jeszcze dziś – ekspresowo i
                niezawodnie!
              </p>
            </div>
            <div>
              <h3 className="text-rose-700 text-lg font-semibold">
                📸 Akceptacja zdjęcia bukietu
              </h3>
              <p className="mt-2 text-gray-600">
                Przed wysyłką wyślemy zdjęcie do zatwierdzenia – masz pełną
                kontrolę nad finalnym efektem.
              </p>
            </div>
            <div>
              <h3 className="text-rose-700 text-lg font-semibold">
                🎨 Personalizacja kompozycji
              </h3>
              <p className="mt-2 text-gray-600">
                Dodaj dedykację, wybierz ulubione kwiaty – stwórz bukiet
                idealnie dopasowany do okazji.
              </p>
            </div>
          </div>
        </section>

        <AvailableFlowers />
        <FAQSection limit={6} />
        <Regulamin />
      </main>
    </>
  );
}
