import { shopPhone } from "@/app/data/mainData";
import Image from "next/image";
import React from "react";

const BouquetsSection = ({ bouquets }) => {
  return (
    <section className="grid gap-8 md:grid-cols-3">
      {bouquets.map((b, id) => (
        <div
          key={id}
          className="group flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden "
        >
          <div className="relative ">
            <Image
              src={b.image}
              alt="Bukiet Róż"
              className="max-h-[400px] object-cover"
              width={640}
              height={480}
            />
          </div>
          <div className="p-6 flex flex-col ">
            <h3 className="text-xl font-bold text-rose-900 mb-2">{b.title}</h3>
            <p className="text-2xl font-extrabold text-rose-600 mb-4">
              od {b.price} zł
            </p>
            <a
              href={`tel:${shopPhone}`}
              className="text-center bg-rose-600 hover:bg-rose-700 text-white font-semibold px-5 py-3 rounded-xl shadow-md focus:ring-4 focus:ring-rose-200 transition-colors"
            >
              Zamów bukiet
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BouquetsSection;
