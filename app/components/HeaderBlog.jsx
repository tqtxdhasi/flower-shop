import React from "react";

export const HeaderBlog = () => {
  return (
    <header className="text-center bg-rose-50 py-8 rounded-xl">
      <h1 className="text-4xl font-bold text-rose-700 mb-4 px-4">
        Róże w Prezencie lub na Zamówienie?
        <br />
        <span className="text-2xl block mt-2">
          Kompletny Poradnik dla Krakowa
        </span>
      </h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-rose-900 mb-6">
          Niezależnie czy dostałeś róże w bukiecie, czy planujesz je kupić -
          dowiedz się jak cieszyć się ich pięknem najdłużej. A jeśli szukasz
          idealnego bukietu w Krakowie...
        </p>
        <a
          href={`tel:${shopPhone}`}
          className="bg-rose-700 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-rose-800 transition-colors"
        >
          🛍️ Zamów teraz: {shopPhone}
        </a>
      </div>
    </header>
  );
};
