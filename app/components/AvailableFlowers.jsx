import Image from "next/image";

function AvailableFlowers() {
  return (
    <section className="sm:py-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E2B26] text-center">
        Dostępne kwiaty i Nasze Ceny
      </h2>
      <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
        <div className=" bg-rose-100 flex flex-col justify-between gap-2 p-3 rounded-lg shadow-lg text-center ">
          <div className="relative h-[450px]">
            <Image
              src={"/roses.jpg"}
              alt={"Róże"}
              fill
              className="object-cover rounded-lg min-h-[300px]"
            />
          </div>
          <h3 className="text-xl font-bold">Róże</h3>
          <p className=" text-lg "> od 5.92 zl/szt.</p>
          <p className="text-sm text-gray-600">
            Czerwony, Niebieski, Tęczowy, Biały, Różowy
          </p>
          <a
            href="tel:+48731588515"
            className="bg-rose-700 text-white hover:bg-rose-800 p-2 rounded-lg inline-block"
          >
            Zamów Teraz
          </a>
        </div>
        <div className=" bg-rose-100 flex flex-col justify-between gap-2 p-3 rounded-lg shadow-lg text-center ">
          <div className="relative h-[450px]">
            <Image
              src={"/tulips.jpg"}
              alt={"Tulipany"}
              fill
              className="object-cover rounded-lg min-h-[300px]"
            />
          </div>
          <h3 className="text-xl font-bold">Tulipany</h3>

          <p className=" text-lg "> od 4 zl/szt.</p>
          <p className="text-sm text-gray-600">
            Czerwony, Różowy, Fioletowy, Biały, Żółty, Pomarańczowy
          </p>
          <a
            href="tel:+48731588515"
            className="bg-rose-700 text-white hover:bg-rose-800 p-2 rounded-lg inline-block"
          >
            Zamów Teraz
          </a>
        </div>
        <div className=" bg-rose-100 flex flex-col justify-between gap-2 p-3 rounded-lg shadow-lg text-center ">
          <div className="relative h-[450px]">
            <Image
              src={"/piwonie.jpg"}
              alt={"Piwonie"}
              fill
              className="object-cover rounded-lg min-h-[300px]"
            />
          </div>
          <h3 className="text-xl font-bold">Piwonie</h3>
          <p className=" text-lg "> od 10 zl/szt.</p>
          <p className="text-sm text-gray-600"> Biały, Różowy</p>
          <a
            href="tel:+48731588515"
            className="bg-rose-700 text-white hover:bg-rose-800 p-2 rounded-lg inline-block"
          >
            Zamów Teraz
          </a>
        </div>
        <div className=" bg-rose-100 flex flex-col justify-between gap-2 p-3 rounded-lg shadow-lg text-center ">
          <div className="relative h-[450px]">
            <Image
              src={"/ranunculus.jpg"}
              alt={"Ranunculus"}
              fill
              className="object-cover rounded-lg min-h-[300px]"
            />
          </div>
          <h3 className="text-xl font-bold">Jaskry </h3>{" "}
          <p className=" text-lg "> od 10 zl/szt.</p>
          <p className="text-sm text-gray-600"> Różowy, Biały</p>
          <a
            href="tel:+48731588515"
            className="bg-rose-700 text-white hover:bg-rose-800 p-2 rounded-lg inline-block"
          >
            Zamów Teraz
          </a>
        </div>
        <div className=" bg-rose-100 flex flex-col justify-between gap-2 p-3 rounded-lg shadow-lg text-center ">
          <div className="relative h-[450px]">
            <Image
              src={"/gipsowka.jpg"}
              alt={"Gipsówka"}
              fill
              className="object-cover rounded-lg min-h-[300px]"
            />
          </div>
          <h3 className="text-xl font-bold">Gipsówka</h3>
          <p className=" text-lg "> od 10 zl/szt.</p>
          <p className="text-sm text-gray-600">
            Biały, Różowy, Niebieski, Czerwony, Żółty, Fioletowy
          </p>
          <a
            href="tel:+48731588515"
            className="bg-rose-700 text-white hover:bg-rose-800 p-2 rounded-lg inline-block"
          >
            Zamów Teraz
          </a>
        </div>
        <div className=" bg-rose-100 flex flex-col justify-between gap-2 p-3 rounded-lg shadow-lg text-center ">
          <div className="relative h-[450px]">
            <Image
              src={"/hortensje.jpg"}
              alt={"Hortensje"}
              fill
              className="object-cover rounded-lg min-h-[300px]"
            />
          </div>
          <h3 className="text-xl font-bold">Hortensje</h3>
          <p className=" text-lg "> od 15 zl/szt.</p>
          <p className="text-sm text-gray-600">
            Niebieski, Różowy, Biały, Fioletowy, Czerwony
          </p>
          <a
            href="tel:+48731588515"
            className="bg-rose-700 text-white hover:bg-rose-800 p-2 rounded-lg inline-block"
          >
            Zamów Teraz
          </a>
        </div>
        <div className=" bg-rose-100 flex flex-col justify-between gap-2 p-3 rounded-lg shadow-lg text-center ">
          <div className="relative h-[450px]">
            <Image
              src={"/tulips.jpg"}
              alt={"Mix Kwiatów"}
              fill
              className="object-cover rounded-lg min-h-[300px]"
            />
          </div>
          <h3 className="text-xl font-bold">Mix Kwiatów</h3>
          <p className=" text-lg "> od 4 zl/szt.</p>
          <p className="text-sm text-gray-600"> Zróżnicowane</p>
          <a
            href="tel:+48731588515"
            className="bg-rose-700 text-white hover:bg-rose-800 p-2 rounded-lg inline-block"
          >
            Zamów Teraz
          </a>
        </div>
      </div>
    </section>
  );
}

export default AvailableFlowers;
