"use client";
import React, { useState } from "react";
import OrderForm from "../../components/OrderForm";
import Image from "next/image";

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
    <>
      <h1 className="max-w-4xl p-4 mx-auto text-4xl font-bold text-center text-gray-800 ">
        Świeże Róże na Zamówienie – Piękne Kwiaty Prosto do Twoich Drzwi w
        Krakowie
      </h1>
      <div className=" flex flex-col md:flex-row p-6 ">
        <div className="w-full md:w-2/3 items-center flex flex-col gap-4">
          <div className="max-w-80 sm:max-w-full max-h-[500px] aspect-square">
            <Image
              src={selectedImage}
              alt="Selected Flower"
              className="object-cover object-center rounded-lg w-full h-full"
              width={600}
              height={600}
            />
          </div>
          <div className="grid grid-cols-5 w-fit md:grid-cols-6 gap-2 ">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className=" md:w-24"
              >
                <div className="aspect-square ">
                  <Image
                    src={img}
                    alt="Thumbnail"
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
        </div>{" "}
      </div>
      <div className="p-4 max-w-4xl mx-auto">
        <section>
          <p className="text-lg text-gray-700 mb-6">
            Szukasz świeżych, starannie wyselekcjonowanych róż na zamówienie?
            Nasza kwiaciarnia oferuje tanie róże w różnych oszałamiających
            kolorach, które dostarczymy prosto pod Twoje drzwi w Krakowie i
            okolicach. Niezależnie od tego, czy potrzebujesz róż na prezent, na
            specjalną okazję, czy chcesz rozjaśnić dzień bliskiej osoby, nasze
            róże będą doskonałym wyborem.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Róże w Różnych Rozmiarach i Kolorach
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            W ofercie mamy róże w różnych rozmiarach: 40 cm, 50 cm, 60 cm, 70
            cm, 80 cm, a także szeroką gamę kolorów: czerwony, biały, różowy,
            żółty, pomarańczowy. Możesz także stworzyć unikalny miks kolorów –
            idealny na wyjątkowe okazje, takie jak rocznice, śluby, Walentynki
            czy Dzień Kobiet.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Zasady Zamówienia
          </h2>
          <ul className="list-inside list-disc text-lg text-gray-700 mb-6">
            <li>Minimalna ilość zamówienia to 9 róż, maksymalna – 49.</li>
            <li>
              Każda róża jest starannie zapakowana, co zapewnia jej świeżość i
              długotrwałe piękno.
            </li>
            <li>Przyjmujemy zamówienia do 23:59 dzień przed dostawą.</li>
            <li>Wymagana jest zaliczka min. 50% wartości zamówienia.</li>
            <li>Przed wysyłką bukietu przesyłamy zdjęcie do akceptacji.</li>
            <li>
              Brak zwrotów w przypadku anulowania zamówienia przez klienta.
            </li>
          </ul>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Dostawa i Odbiór w Krakowie
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Oferujemy wygodną dostawę na terenie Krakowa oraz okolic w cenie 20
            PLN. Możliwość odbioru osobistego w Krakowie w godzinach 8:00 –
            23:59. Dzięki naszej prostej i wygodnej usłudze, możesz cieszyć się
            eleganckimi kwiatami dostarczonymi dokładnie wtedy, kiedy chcesz.
          </p>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Idealne Róże na Każdą Okazję
          </h2>
          <p className="text-lg text-gray-700">
            Nasze róże to doskonały wybór na każdą okazję – Dzień Kobiet,
            Walentynki, rocznice, śluby, urodziny, a także na Wielkanoc,
            imieniny, podziękowania i inne wyjątkowe momenty. Wybierz róże na
            zamówienie dostosowane do Twoich potrzeb i spraw, by każda chwila
            była niezapomniana.
          </p>{" "}
          linssen roses, royal flowers
        </section>
      </div>
    </>
  );
};

export default FlowerPage;
