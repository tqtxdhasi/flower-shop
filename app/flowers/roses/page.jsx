"use client";
import React, { useState } from "react";
import OrderForm from "../../components/OrderForm";
import Image from "next/image";
import HowItWorks from "@/app/components/HowItWorks";

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
          <div className="max-w-full aspect-square">
            <Image
              src={selectedImage}
              alt="Selected Flower"
              className="object-cover object-center rounded-lg w-full h-full"
              width={700}
              height={700}
            />
          </div>
          <div className="grid grid-cols-5 md:flex md:flex-wrap w-fit gap-2 h-fit justify-center ">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className="w-20 md:w-24"
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

        {/* Order Form Section - Original Structure Maintained */}
        <div className="w-full md:w-1/3">
          <OrderForm />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl px-4 mx-auto prose-lg">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            Eleganckie Bukiety Jednoróżane
          </h2>
          <p className="mb-6">
            Oferujemy ekskluzywne bukiety z róż najwyższej jakości, idealne na:
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4">
            {["Śluby", "Walentynki", "Rocznice", "Urodziny"].map((occasion) => (
              <div
                key={occasion}
                className="p-3 text-center bg-red-50 rounded-lg"
              >
                {occasion}
              </div>
            ))}
          </div>

          <h3 className="mb-3 text-xl font-semibold">Dostępne Warianty</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="mb-2 font-semibold">Rozmiary łodyg</h4>
              <div className="flex flex-wrap gap-2">
                {["40cm", "50cm", "60cm", "70cm", "80cm"].map((size) => (
                  <span
                    key={size}
                    className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="mb-2 font-semibold">Kolorystyka</h4>
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
                    className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Często Zadawane Pytania
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">
                Jak długo utrzymają się świeże róże?
              </h3>
              <p className="mt-2 text-gray-600">
                Gwarantujemy świeżość przez minimum 7 dni przy prawidłowej
                pielęgnacji. Do każdego zamówienia dołączamy instrukcję
                przedłużania trwałości kwiatów.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">
                Czy mogę zmienić termin dostawy?
              </h3>
              <p className="mt-2 text-gray-600">
                Zmiana terminu jest możliwa najpóźniej na 12h przed planowaną
                dostawą. Prosimy o kontakt telefoniczny lub mailowy.
              </p>
            </div>
          </div>
        </section>
        <HowItWorks />
      </div>
    </div>
  );
};

export default FlowerPage;
