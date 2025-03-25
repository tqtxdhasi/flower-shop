function AvailableFlowers() {
  // Flower data with images and price variations for roses
  const flowers = [
    {
      name: "Róże",
      amount: 10,
      price: 60,
      priceByHeight: { 150: 50, 200: 60, 250: 70 },
      image: "/image 26.jpg",
    },
    { name: "Tulipany", amount: 25, price: 180, image: "/image 14.jpg" },
    { name: "Piwonie", amount: 10, price: 200, image: "/image 4.jpg" },
    { name: "Ranunculus", amount: 15, price: 120, image: "/image 5.jpg" },
    { name: "Gipsówka", amount: 30, price: 100, image: "/image 6.jpg" },
    { name: "Hortensje", amount: 8, price: 220, image: "/image 7.jpg" },
  ];

  // Function to calculate price based on height for flowers like roses
  const getPriceForHeight = (name, priceByHeight) => {
    if (name === "Róże" && priceByHeight) {
      // Returns the base price or price based on height for roses
      return priceByHeight[200] || priceByHeight[150] || priceByHeight[250]; // Default to 200 height price for roses
    }
    return 0; // No height-based price for other flowers
  };

  // Flower component with dynamic pricing based on height for roses
  const FlowerCard = ({ name, amount, price, image, priceByHeight }) => {
    const dynamicPrice = getPriceForHeight(name, priceByHeight) || price;
    return (
      <div className="bg-neutral-900 p-3 rounded-lg shadow-lg text-center">
        <img
          src={image}
          alt={name}
          className="w-full rounded-lg shadow-lg mb-4"
        />
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="mt-2 text-lg text-white">
          {amount} sztuk - {dynamicPrice} PLN
        </p>
      </div>
    );
  };

  return (
    <section className="sm:py-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E2B26] text-center">
        Dostępne kwiaty i Nasze Ceny
      </h2>
      <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className=" bg-[#E8D7D1]  p-3 rounded-lg shadow-lg text-center ">
          <img
            src={"/roses.jpg"}
            alt={"Róże"}
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-xl font-bold ">
            {"Róże red blue rainbow white pink"}
          </h3>
          <p className="mt-2 text-lg "> od 5.92 zl szt.</p>
          <button className="bg-[#2E2B26] text-[#FAFAFA] p-2 rounded-lg">
            Order Now
          </button>
        </div>{" "}
        <div className=" bg-[#E8D7D1]  p-3 rounded-lg shadow-lg text-center ">
          <img
            src={"/tulips.jpg"}
            alt={"Róże"}
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-xl font-bold ">
            {"Tulipany red pink purple white yellow orange "}
          </h3>
          <p className="mt-2 text-lg "> od 5.92 zl szt.</p>
          <button className="bg-[#2E2B26] text-[#FAFAFA] p-2 rounded-lg">
            Order Now
          </button>
        </div>{" "}
        <div className=" bg-[#E8D7D1]  p-3 rounded-lg shadow-lg text-center ">
          <img
            src={"/piwonie.jpg"}
            alt={"Róże"}
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-xl font-bold ">{"Piwonie white pink"}</h3>
          <p className="mt-2 text-lg "> od 5.92 zl szt.</p>
          <button className="bg-[#2E2B26] text-[#FAFAFA] p-2 rounded-lg">
            Order Now
          </button>
        </div>{" "}
        <div className=" bg-[#E8D7D1]  p-3 rounded-lg shadow-lg text-center ">
          <img
            src={"/ranunculus.jpg"}
            alt={"Róże"}
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-xl font-bold ">{"Ranunculus pink white"}</h3>
          <p className="mt-2 text-lg "> od 5.92 zl szt.</p>
          <button className="bg-[#2E2B26] text-[#FAFAFA] p-2 rounded-lg">
            Order Now
          </button>
        </div>{" "}
        <div className=" bg-[#E8D7D1]  p-3 rounded-lg shadow-lg text-center ">
          <img
            src={"/gipsowka.jpg"}
            alt={"Róże"}
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-xl font-bold ">
            {"Gipsówka white pink blue red yellow  purple"}
          </h3>
          <p className="mt-2 text-lg "> od 5.92 zl szt.</p>
          <button className="bg-[#2E2B26] text-[#FAFAFA] p-2 rounded-lg">
            Order Now
          </button>
        </div>{" "}
        <div className=" bg-[#E8D7D1]  p-3 rounded-lg shadow-lg text-center ">
          <img
            src={"/hortensje.jpg"}
            alt={"Róże"}
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-xl font-bold ">
            {"Hortensje blue pink white purple red  "}
          </h3>
          <p className="mt-2 text-lg "> od 5.92 zl szt.</p>
          <button className="bg-[#2E2B26] text-[#FAFAFA] p-2 rounded-lg">
            Order Now
          </button>
        </div>{" "}
        <div className=" bg-[#E8D7D1]  p-3 rounded-lg shadow-lg text-center ">
          <img
            src={"/image 26.jpg"}
            alt={"Róże"}
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-xl font-bold ">{"Mix Kwiatów"}</h3>
          <p className="mt-2 text-lg "> od 5.92 zl szt.</p>
          <button className="bg-[#2E2B26] text-[#FAFAFA] p-2 rounded-lg">
            Order Now
          </button>
        </div>{" "}
      </div>
    </section>
  );
}

export default AvailableFlowers;
