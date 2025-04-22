import React from "react";

export const WhyUs = () => {
  return (
    <section className="bg-rose-50 p-8 rounded-xl text-center">
      <h2 className="text-3xl font-bold text-rose-800 mb-4">
        Dlaczego Róże z Kwiaty?
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
        <div className="bg-white p-4 rounded-lg">
          <p className="text-2xl">🌹</p>
          <p className="font-medium">Świeże dostawy</p>
          <p className="text-sm">Codziennie od 6:00 do 20:00</p>
        </div>
      </div>
    </section>
  );
};
