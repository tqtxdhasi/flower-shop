import React from "react";

const HeroSection = ({ occasion, minPrice }) => {
  return (
    <section className="flex flex-col gap-6">
      <nav className="text-rose-600 lg:text-center">
        <a href="/" className="underline">
          Strona główna
        </a>{" "}
        ›{" "}
        <a href="/okazje" className="underline">
          Okazje
        </a>{" "}
        › <span className="text-rose-900">{occasion.name}</span>
      </nav>
      <h1 className="text-4xl lg:text-center font-extrabold text-rose-900 ">
        Bukiet kwiatów na {occasion.name}{" "}
        <span className="text-rose-600 underline">od {minPrice} zł</span>
      </h1>
      <p className="lg:text-center text-lg text-rose-700 max-w-3xl mx-auto">
        {occasion.description}
      </p>
      <section className="flex gap-4 flex-col lg:flex-row justify-center  text-rose-700">
        <p className="flex items-center">
          🚚 Dostawa &nbsp;<strong>{occasion.deliveryTime}</strong>
        </p>
        <p className="flex items-center">
          🎁 <strong>Personalizacja gratis</strong>
        </p>
        <p className="flex items-center">
          📸 <strong>Akceptacja bukietu przed dostawą</strong>
        </p>
      </section>
    </section>
  );
};

export default HeroSection;
