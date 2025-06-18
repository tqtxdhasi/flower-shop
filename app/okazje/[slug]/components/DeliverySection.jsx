import VariantSection from "@/app/components/VariantSection";
import { shopPhone } from "@/app/data/mainData";
import React from "react";

const DeliverySection = ({ occasion }) => {
  return (
    <section
      className="p-8 bg-rose-100 rounded-2xl"
      aria-label="Dostawa informacji"
    >
      <h2 className="text-3xl font-bold text-rose-900 mb-6 text-center">
        Dostawa bukietów w Krakowie
      </h2>
      <p className="text-center text-rose-700 max-w-4xl mx-auto mb-10">
        Szukasz oryginalnego bukietu na {occasion.name} z dostawą w Krakowie?
        <br />
        Wybierz z naszej limitowanej kolekcji – elegancja i świeże kwiaty w
        najlepszym wydaniu. Zamów już dziś, a w dni świąteczne skorzystaj z
        dostawy tego samego dnia. Sprawdź ofertę i podaruj niezapomniane chwile!
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <VariantSection
          title="🏙️ Dzielnice"
          items={[
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
          ]}
          columns={2}
        />

        <div className="flex col-span-2 lg:col-span-1 items-center p-6 bg-white rounded-xl shadow">
          <span className="text-3xl mr-4">⏰</span>
          <div>
            <h3 className="font-semibold text-rose-900">Godziny dostaw</h3>
            <p className="text-sm text-rose-700 mt-1">
              Codziennie 07:00 – 22:00
            </p>
          </div>
        </div>
        <div className="flex items-center p-6 bg-white col-span-2 lg:col-span-1 rounded-xl shadow">
          <span className="text-3xl mr-4">📞</span>
          <div>
            <h3 className="font-semibold text-rose-900">Kontakt</h3>
            <p className="text-sm text-rose-700 mt-1">{shopPhone}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
