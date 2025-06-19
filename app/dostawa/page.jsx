import React from "react";
import Link from "next/link";
import { shopPhone } from "../data/mainData";
import { getOccasionBySlug } from "../data/occasions";
import BouquetsSection from "../okazje/[slug]/components/BouquetsSection";
import Regulamin from "../components/Regulamin";

export default function DeliveryInfo() {
  const occasion = getOccasionBySlug("urodziny");

  return (
    <div className="bg-gradient-to-b from-rose-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 ">
        {/* Hero */}
        <section className="text-start lg:text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-rose-900">
            Dostawa Kwiatów w Krakowie
          </h1>
          <p className="text-lg sm:text-xl text-rose-700 max-w-2xl mx-auto">
            Oferujemy szybką dostawę świeżych bukietów i kompozycji kwiatowych
            na terenie Krakowa i okolic. Zamówienia przyjmujemy 24/7 — online
            lub telefonicznie.
          </p>
          <p className="text-lg sm:text-xl text-rose-700 max-w-2xl mx-auto">
            Zamów nawet wieczorem, a otrzymasz świeże kwiaty już rano następnego
            dnia!
          </p>
          <p className="text-lg sm:text-xl text-rose-700 max-w-2xl mx-auto">
            Dostawa lub odbiór następuje następnego dnia w godzinach 8:00–23:59.
          </p>
          <div className="flex text-center flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/kwiaty"
              className="bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Przeglądaj bukiety
            </Link>
            <Link
              href={`tel:${shopPhone}`}
              className="border border-rose-700 hover:bg-rose-100 text-rose-700 font-semibold px-6 py-3 rounded-lg transition"
            >
              Zapytaj o dostawę
            </Link>
          </div>
        </section>
        {/* Delivery Details */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-rose-900">
            Jak działa dostawa?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-rose-700">
            <div className="flex col-span-2 lg:col-span-1 items-center p-6 bg-white rounded-xl shadow">
              <span className="text-3xl mr-4">⏰</span>
              <div>
                <h3 className="font-semibold text-rose-900">Godziny dostawy</h3>
                <p className="text-sm text-rose-700 mt-1">
                  Bukiety można odebrać lub otrzymać dostawę w godzinach 8:00 –
                  23:59.
                </p>
              </div>
            </div>
            <div className="flex col-span-2 lg:col-span-1 items-center p-6 bg-white rounded-xl shadow">
              <span className="text-3xl mr-4">🕒 </span>
              <div>
                <h3 className="font-semibold text-rose-900">
                  Termin składania
                </h3>
                <p className="text-sm text-rose-700 mt-1">
                  Zamówienia przyjmujemy codziennie do godziny 23:59 dzień przed
                  datą dostawy.
                </p>
              </div>
            </div>
            <div className="flex col-span-2 lg:col-span-1 items-center p-6 bg-white rounded-xl shadow">
              <span className="text-3xl mr-4">🚚</span>
              <div>
                <h3 className="font-semibold text-rose-900">Koszt i obszar</h3>
                <p className="text-sm text-rose-700 mt-1">
                  Dostawa na terenie Krakowa i okolic – 20 PLN. Szczegóły strefy
                  do uzgodnienia.
                </p>
              </div>
            </div>
          </div>
        </section>{" "}
        {/* Delivery Zones */}
        <section className="bg-white rounded-xl p-8 shadow-sm flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-rose-900">
            Gdzie dostarczamy?
          </h2>
          <p className="text-rose-700">
            Dowozimy do wszystkich głównych dzielnic Krakowa i okolic:
          </p>{" "}
          <div className="flex flex-wrap gap-2">
            {[
              "Stare Miasto",
              "Kazimierz",
              "Podgórze",
              "Krowodrza",
              "Nowa Huta",
              "Dębniki",
              "Bronowice",
              "Prądnik Czerwony",
              "Prądnik Biały",
              "Bieżanów-Prokocim",
              "Czyżyny",
              "Mistrzejowice",
              "Wzgórza Krzesławickie",
              "Swoszowice",
              "Łagiewniki-Borek Fałęcki",
            ].map((region) => (
              <span
                key={region}
                className="bg-white text-rose-900 border-2 border-rose-200 hover:bg-rose-50 transition-colors rounded-full px-4 py-1"
              >
                {region}
              </span>
            ))}
          </div>
        </section>
        <BouquetsSection bouquets={occasion.bouquets} />
        {/* Contact */}
        <section className="text-center space-y-4">
          <p className="text-lg text-rose-700">
            Masz pytania? Chętnie pomożemy!
          </p>
          <p className="text-rose-700">
            📞 <strong className="text-rose-800">{shopPhone}</strong>
            <br />
          </p>
          <Link
            href={`tel:${shopPhone}`}
            className="inline-block mt-2 px-6 py-3 bg-rose-500 text-white rounded-xl font-semibold hover:bg-rose-600 transition"
          >
            Napisz do nas
          </Link>
        </section>
        <Regulamin />
      </div>
    </div>
  );
}
