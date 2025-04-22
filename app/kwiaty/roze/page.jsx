"use client";
import React, { useState } from "react";
import OrderForm from "../../components/OrderForm";
import Image from "next/image";
import HowItWorks from "@/app/components/HowItWorks";
import Link from "next/link";

const images = [
  "/roses2.jpg",
  "/roses8.jpg",
  "/roses1.jpg",
  "/roses3.jpg",
  "/roses4.jpg",
  "/roses5.jpg",
  "/roses6.jpg",
  "/roses7.jpg",
  "/roses9.jpg",
];

const FlowerPage = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="max-w-4xl px-4 mx-auto sm:my-4 text-3xl font-bold text-center text-rose-900 md:text-4xl">
        Bukiet Róż Premium - Świeże Kwiaty z Dostawą w Krakowie
      </h1>
      <div className="flex flex-col w-full md:flex-row gap-4 mx-auto">
        <div className="w-full p-4 md:w-2/3  flex flex-col md:flex-row-reverse gap-4 rounded-xl bg-rose-50">
          <div className="max-w-[700px] aspect-square">
            <Image
              src={selectedImage}
              alt="Luksusowy bukiet świeżych róż online"
              className="object-cover object-center rounded-lg w-full h-full"
              width={900}
              height={900}
            />
          </div>
          <div className="grid grid-cols-5 md:flex md:flex-wrap w-fit gap-2 h-fit justify-center ">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className="w-16 md:w-24"
              >
                <div className="aspect-square ">
                  <Image
                    src={img}
                    alt={`Miniaturka bukietu róż – opcja ${index + 1}`}
                    className="object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-gray-500 w-full h-full"
                    width={100}
                    height={100}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

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
        <h2 className=" text-2xl text-center font-bold text-rose-900 md:text-3xl">
          Święta i Okazje – Idealny Bukiet na Każde Święto i Uroczystość
        </h2>{" "}
        <div className="p-4 bg-rose-50 rounded-lg shadow-sm flex flex-col gap-2 col-span-2">
          <h4 className="text-rose-900 font-semibold">Święta i Okazje</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Walentynki",
              "Rocznice",
              "Zaręczyny",
              "Urodziny",
              "Imieniny",
              "Dzień Matki",
              "Dzień Ojca",
              "Dzień Kobiet",
              "Boże Narodzenie",
              "Wielkanoc",
              "Nowy Rok",
              "Sylwester",
              "Halloween",
              "Dzień Dziecka",
              "Święta",
            ].map((occasion) => (
              <div
                key={occasion}
                className="bg-white text-center text-rose-900 border-2 border-rose-200 hover:bg-rose-50 transition-colors rounded-full px-4 py-1"
              >
                {occasion}
              </div>
            ))}
          </div>
        </div>
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
        <h2 className=" text-2xl text-center font-bold text-rose-900 md:text-3xl">
          Często Zadawane Pytania
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-rose-50 rounded-lg shadow-sm">
            <h3 className="font-semibold text-rose-900">
              Jak długo utrzymają się świeże róże?
            </h3>
            <p className="mt-2 text-rose-800">
              Gwarantujemy świeżość przez minimum 3 dni przy prawidłowej
              pielęgnacji. Do każdego zamówienia dołączamy instrukcję
              przedłużania trwałości kwiatów.
            </p>
          </div>
          <div className="p-4 bg-rose-50 rounded-lg shadow-sm">
            <h3 className="font-semibold text-rose-900">
              Czy mogę zmienić termin wysyłki?
            </h3>
            <p className="mt-2 text-rose-800">
              Tak, zmiana terminu wysyłki jest możliwa do 6 godzin przed
              planowanym nadaniem. Skontaktuj się z nami telefonicznie.
            </p>
          </div>
          <div className="p-4 bg-rose-50 rounded-lg shadow-sm">
            <h3 className="font-semibold text-rose-900">
              Czy mogę zamówić róże z dostawą na konkretny dzień?
            </h3>
            <p className="mt-2 text-rose-800">
              Oczywiście! W zamówieniu możesz wybrać preferowaną datę dostawy.
              Dokładamy wszelkich starań, aby bukiet dotarł na czas.
            </p>
          </div>
          <div className="p-4 bg-rose-50 rounded-lg shadow-sm">
            <h3 className="font-semibold text-rose-900">
              Czy oferujecie anonimową wysyłkę bukietu?
            </h3>
            <p className="mt-2 text-rose-800">
              Tak, możesz wysłać bukiet anonimowo – nie dołączamy danych
              nadawcy, chyba że wyraźnie zaznaczysz taką opcję przy zamówieniu.
            </p>
          </div>
          <div className="p-4 bg-rose-50 rounded-lg shadow-sm">
            <h3 className="font-semibold text-rose-900">
              Czy można dołączyć bilecik z wiadomością?
            </h3>
            <p className="mt-2 text-rose-800">
              Tak, umożliwiamy dołączenie bileciku z personalizowaną wiadomością
              – wystarczy wpisać tekst podczas składania zamówienia (10 zl).
            </p>
          </div>
          <div className="p-4 bg-rose-50 rounded-lg shadow-sm">
            <h3 className="font-semibold text-rose-900">
              Jakie formy płatności są akceptowane?
            </h3>
            <p className="mt-2 text-rose-800">
              Akceptujemy płatności gotówką, BLIK, szybkie przelewy, crypto oraz
              PayPal. Wszystkie transakcje są szyfrowane i w pełni bezpieczne.
            </p>
          </div>
        </div>
      </div>
      {/* FAQ Section 
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
      <HowItWorks />
    </div>
  );
};

export default FlowerPage;
