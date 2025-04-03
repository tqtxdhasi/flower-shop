import DeliveryWidget from "../components/DeliveryWidget";
import PopularBouquetsWidget from "../components/PopularBouquetsWidget";
import Link from "next/link";

const RoseCareBlogPost = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="text-center bg-rose-50 py-8 rounded-xl">
        <h1 className="text-4xl font-bold text-rose-700 mb-4 px-4">
          Róże w Prezencie lub na Zamówienie?
          <br />
          <span className="text-2xl block mt-2">
            Kompletny Poradnik dla Krakowa
          </span>
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            Niezależnie czy dostałeś róże w bukiecie, czy planujesz je kupić -
            dowiedz się jak cieszyć się ich pięknem najdłużej. A jeśli szukasz
            idealnego bukietu w Krakowie...
          </p>
          <Link
            href="/sklep/roze"
            className="bg-rose-700 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-rose-800 transition-colors"
          >
            🛍️ Zobacz Gotowe Kompozycje
          </Link>
        </div>
      </header>{" "}
      <section className="grid md:grid-cols-4 gap-8 ">
        {/* Main Content Column */}
        <div className="md:col-span-3 space-y-8 grid grid-cols-1 md:grid-cols-2">
          <article className="group h-fit bg-rose-50 rounded-xl col-span-1 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-md mx-auto hover:bg-rose-100">
            {/* Image Section */}
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

            {/* Content Section */}
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

              {/* Metadata */}
              <div className="flex items-center justify-between text-rose-600 text-sm mb-4">
                <span>📖 5 min czytania</span>
                <span>🗓️ 15 Maj 2024</span>
              </div>

              {/* CTA Button */}
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
            {/* Image Section */}
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

            {/* Content Section */}
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
                Poznaj tajniki krakowskich florystów! Dowiedz się jak twarda
                woda z Wisły wpływa na trwałość róż i zamów profesjonalną
                odżywkę z dostawą pod Twój adres.
              </p>

              {/* Metadata & CTA */}
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
            {/* Image Section */}
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

            {/* Content Section */}
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

              {/* Metadata */}
              <div className="flex items-center justify-between text-rose-600 text-sm mb-4">
                <span>📖 5 min czytania</span>
                <span>🗓️ 15 Maj 2024</span>
              </div>

              {/* CTA Button */}
              <Link
                href="/blog/jak-wybrac-idealne-roze-krakow"
                className="inline-block w-full bg-rose-600 hover:bg-rose-700 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors duration-300 shadow-sm hover:shadow-md"
                aria-label="Przeczytaj poradnik o wyborze róż w Krakowie"
              >
                Czytaj Poradnik Krakowskiego Florysty 🌹
              </Link>
            </div>
          </article>{" "}
          <article className="group col-span-1 h-fit bg-rose-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-md mx-auto hover:bg-rose-100 border-2 border-rose-100">
            {/* Image Section */}
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

            {/* Content Section */}
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
                Poznaj tajniki krakowskich florystów! Dowiedz się jak twarda
                woda z Wisły wpływa na trwałość róż i zamów profesjonalną
                odżywkę z dostawą pod Twój adres.
              </p>

              {/* Metadata & CTA */}
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
        </div>
        {/* Right Sidebar */}
        <aside className="space-y-8">
          <DeliveryWidget />
          <PopularBouquetsWidget />
        </aside>{" "}
        <div className="mt-8 bg-rose-700 text-white p-4 rounded-lg flex items-center justify-between">
          <div>
            <h3 className="font-medium">Masz konkretny problem?</h3>
            <p className="text-sm opacity-90">Przejdź do naszego poradnika</p>
          </div>
          <Link
            href="/blog/rozwiązywanie-problemow-z-rozami"
            className="bg-white text-rose-700 px-4 py-2 rounded-full flex items-center hover:bg-rose-50"
          >
            Pomoc
          </Link>
        </div>
      </section>
      <section className="bg-rose-50 p-8 rounded-xl text-center">
        <h2 className="text-3xl font-bold text-rose-800 mb-4">
          Dlaczego Róże z Bubeny Kwiaty?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-2xl">🏆</p>
            <p className="font-medium">10 lat doświadczenia</p>
            <p className="text-sm">w obsłudze klientów z Krakowa</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-2xl">🌹</p>
            <p className="font-medium">Świeże dostawy</p>
            <p className="text-sm">Codziennie od 6:00 do 20:00</p>
          </div>
        </div>
      </section>{" "}
      {/* Local Promo */}
      <div className="mt-4 text-center bg-rose-100 p-3 rounded-lg">
        <p className="text-sm text-rose-700">
          Krakowianie! Użyj kodu{" "}
          <strong className="text-rose-900">KWIATKRAK15</strong> i odbierz
          <span className="block mt-1 text-rose-900 font-medium">
            15% zniżki na odżywki do róż!
          </span>
        </p>
      </div>
      {/* Local Promo Badge */}
      <div className="mt-4 text-center">
        <span className="inline-block bg-white text-rose-600 px-4 py-1 rounded-full text-sm border-2 border-rose-200">
          🚚 Darmowa dostawa na Stare Miasto!
        </span>
      </div>
      <div className="text-center">
        <a
          href="/pdf/rose-care-checklist-krakow.pdf"
          className="inline-flex items-center text-rose-700 hover:text-rose-900 text-sm"
          download="Poradnik-Pielegnacja-Roz-Krakow.pdf"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Pobierz darmowy PDF: Checklista Pielęgnacji Róż
        </a>
      </div>
    </div>
  );
};
export default RoseCareBlogPost;
