import { shopName } from "@/app/data/mainData";
import React from "react";

const WhySection = ({ occasion, minPrice }) => {
  return (
    <section
      id="intro-seo"
      className="p-6 mx-auto max-w-4xl bg-rose-100 text-rose-900 rounded-2xl shadow-md"
    >
      <h2 className="text-3xl font-bold text-rose-900 mb-6 text-center">
        Dlaczego warto wybrać bukiet na {occasion.name} w {shopName}?
      </h2>
      <p>
        Nasze <strong>bukiety na {occasion.name.toLowerCase()}</strong> to
        połączenie świeżości, szybkiej realizacji i kwiatów z charakterem.
        Dostarczamy je w całym Krakowie – Kazimierz, Stare Miasto, Nowa Huta i
        okolice. Ceny już{" "}
        <span className="underline font-bold">od {minPrice} zł</span>. Płatność
        możliwa BLIK, gotówką, USDT, złotem i innymi metodami.{" "}
        <strong>Przed dostawą pokażemy bukiet do akceptacji</strong>, żebyś miał
        pewność, że wszystko wygląda idealnie.
      </p>
    </section>
  );
};

export default WhySection;
