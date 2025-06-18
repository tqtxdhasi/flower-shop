import { shopName, shopPhone } from "@/app/data/mainData";
import React from "react";

const SeoSection = ({ occasion }) => {
  return (
    <section
      className=" max-w-4xl mx-auto  text-rose-900"
      aria-label="SEO text końcowy"
    >
      <p className="mb-4">
        {shopName} – Twoja lokalna kwiaciarnia online.{" "}
        <strong>
          Szukasz wyjątkowego bukietu na {occasion.name.toLowerCase()}?
        </strong>{" "}
        {occasion.name}, gratulacje, miłosne wyznania czy po prostu miły gest –
        nasze świeże kompozycje doręczamy na terenie całego Krakowa, od Nowej
        Huty po Podgórze.
      </p>
      <p>
        Zamów online – wygodnie i bezpiecznie. Doświadczeni floryści tworzą
        każdą kompozycję z pasją i dbałością o szczegóły.
      </p>
      <p className="">Sprawdź także nasze pozostałe propozycje:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <a
            href="/okazje/urodziny"
            className="text-rose-600 underline hover:text-rose-800"
          >
            Bukiety na urodziny
          </a>
        </li>
        <li>
          <a
            href="/okazje/gratulacje"
            className="text-rose-600 underline hover:text-rose-800"
          >
            Kompozycje gratulacyjne
          </a>
        </li>
        <li>
          <a
            href="/okazje/milosc"
            className="text-rose-600 underline hover:text-rose-800"
          >
            Bukiety miłosne
          </a>
        </li>
        <li>
          <a
            href="/okazje/bez-okazji"
            className="text-rose-600 underline hover:text-rose-800"
          >
            Kompozycje bez okazji
          </a>
        </li>
      </ul>
      <p className="">
        Kwiaty doręczamy na terenie całego Krakowa – Nowa Huta, Kazimierz,
        Podgórze i inne dzielnice.
      </p>
      <p className="mb-4">
        Dowiedz się więcej o{" "}
        <a
          href="/regulamin"
          className="text-rose-600 underline hover:text-rose-800"
        >
          dostawie kwiatów w Krakowie
        </a>{" "}
        lub skontaktuj się z nami przez{" "}
        <a
          href={`tel:${shopPhone}`}
          className="text-rose-600 underline hover:text-rose-800"
        >
          {shopPhone}
        </a>
        . Jesteśmy dostępni 24/7.
      </p>
      <p>
        Odwiedź{" "}
        <a href="/" className="text-rose-600 underline hover:text-rose-800">
          stronę główną
        </a>
        , zobacz wszystkie{" "}
        <a
          href="/okazje"
          className="text-rose-600 underline hover:text-rose-800"
        >
          dostępne okazje
        </a>{" "}
        {/* oraz{" "}
            <a
              href="/blog"
              className="text-rose-600 underline hover:text-rose-800"
            >
              blog florystyczny
            </a> */}
        .
      </p>
    </section>
  );
};

export default SeoSection;
