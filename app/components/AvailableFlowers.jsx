import Image from "next/image";

const flowers = [
  {
    src: "/roses.jpg",
    alt: "Róże",
    name: "Róże",
    price: "od 5.92 zl/szt.",
    colors: "Czerwony, Niebieski, Tęczowy, Biały, Różowy",
  },
  {
    src: "/tulips.jpg",
    alt: "Tulipany",
    name: "Tulipany",
    price: "od 4 zl/szt.",
    colors: "Czerwony, Różowy, Fioletowy, Biały, Żółty, Pomarańczowy",
  },
  {
    src: "/piwonie.jpg",
    alt: "Piwonie",
    name: "Piwonie",
    price: "od 10 zl/szt.",
    colors: "Biały, Różowy",
  },
  {
    src: "/ranunculus.jpg",
    alt: "Ranunculus",
    name: "Jaskry",
    price: "od 10 zl/szt.",
    colors: "Różowy, Biały",
  },
  {
    src: "/gipsowka.jpg",
    alt: "Gipsówka",
    name: "Gipsówka",
    price: "od 5 zl/szt.",
    colors: "Biały, Różowy, Niebieski, Czerwony, Żółty, Fioletowy",
  },
  {
    src: "/hortensje.jpg",
    alt: "Hortensje",
    name: "Hortensje",
    price: "od 25 zl/szt.",
    colors: "Niebieski, Różowy, Biały, Fioletowy, Czerwony",
  },
];

function FlowerCard({ src, alt, name, price, colors }) {
  return (
    <div className="bg-rose-100 flex flex-col justify-between gap-2 p-3 rounded-lg shadow-lg text-center">
      <div className="relative h-[450px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-lg min-h-[300px]"
        />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-lg">{price}</p>
      <p className="text-sm text-gray-600">{colors}</p>
      <a
        href="tel:+48731588515"
        className="bg-rose-700 text-white hover:bg-rose-800 p-2 rounded-lg inline-block"
      >
        Zamów Teraz
      </a>
    </div>
  );
}

function AvailableFlowers() {
  return (
    <section className="sm:py-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E2B26] text-center">
        Dostępne kwiaty i Nasze Ceny
      </h2>
      <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
        {flowers.map((flower, index) => (
          <FlowerCard key={index} {...flower} />
        ))}
      </div>
    </section>
  );
}

export default AvailableFlowers;
