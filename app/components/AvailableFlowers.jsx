import Image from "next/image";
import { shopPhone } from "../data/mainData";

const flowers = [
  {
    src: "/roses.jpg",
    alt: "Róże",
    name: "Róże",
    price: "od 5.92 zl/szt.",
    colors: "Czerwony, Niebieski, Tęczowy, Biały, Różowy",
    width: 400,
    height: 400,
  },
  {
    src: "/tulips.jpg",
    alt: "Tulipany",
    name: "Tulipany",
    price: "od 4 zl/szt.",
    colors: "Czerwony, Różowy, Fioletowy, Biały, Żółty, Pomarańczowy",
    width: 400,
    height: 400,
  },
  {
    src: "/piwonie.jpg",
    alt: "Piwonie",
    name: "Piwonie",
    price: "od 10 zl/szt.",
    colors: "Biały, Różowy",
    width: 400,
    height: 400,
  },
  {
    src: "/ranunculus.jpg",
    alt: "Ranunculus",
    name: "Jaskry",
    price: "od 10 zl/szt.",
    colors: "Różowy, Biały",
    width: 400,
    height: 400,
  },
  {
    src: "/gipsowka.jpg",
    alt: "Gipsówka",
    name: "Gipsówka",
    price: "od 5 zl/szt.",
    colors: "Biały, Różowy, Niebieski, Czerwony, Żółty, Fioletowy",
    width: 400,
    height: 400,
  },
  {
    src: "/hortensje.jpg",
    alt: "Hortensje",
    name: "Hortensje",
    price: "od 25 zl/szt.",
    colors: "Niebieski, Różowy, Biały, Fioletowy, Czerwony",
    width: 400,
    height: 400,
  },
];

function FlowerCard({ src, alt, name, price, colors, width, height }) {
  return (
    <div className="bg-rose-100 flex text-rose-900 flex-col justify-between gap-2 p-3 rounded-lg shadow-lg text-center">
      <div className="relative" style={{ height: height }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 400px) 100vw, 400px"
          className="object-cover rounded-lg h-[400px]"
          quality={75}
        />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-lg">{price}</p>
      <p className="text-sm text-gray-600">{colors}</p>
      <a
        href={`tel:${shopPhone}`}
        className="bg-green-700 text-white hover:bg-green-800 p-2 rounded-lg inline-block"
      >
        Zamów Teraz
      </a>
    </div>
  );
}

function AvailableFlowers({ useH1 = false }) {
  const HeadingTag = useH1 ? "h1" : "h2";

  return (
    <section className="sm:py-4">
      <HeadingTag className="text-2xl sm:text-3xl font-semibold text-rose-900 text-center">
        Dostępne kwiaty i Nasze Ceny
      </HeadingTag>
      <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
        {flowers.map((flower, index) => (
          <FlowerCard key={index} {...flower} />
        ))}
      </div>
    </section>
  );
}

export default AvailableFlowers;
