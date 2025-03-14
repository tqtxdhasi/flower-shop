function AvailableFlowers() {
  // Flower data
  const flowers = [
    { name: "Róże", amount: 10, price: 0, image: "/image 26.jpg" },
    { name: "Tulipany", amount: 25, price: 180, image: "/image 14.jpg" },
    { name: "Piwonie", amount: 10, price: 200, image: "/image 4.jpg" },
    { name: "Ranunculus", amount: 15, price: 120, image: "/image 5.jpg" },
    { name: "Gipsówka", amount: 30, price: 100, image: "/image 6.jpg" },
    { name: "Hortensje", amount: 8, price: 220, image: "/image 7.jpg" },
  ];

  // Flower component
  const FlowerCard = ({ name, amount, price, image }) => (
    <div className="bg-neutral-900  p-3 rounded-lg shadow-lg text-center">
      <img
        src={image}
        alt={name}
        className="w-full rounded-lg shadow-lg mb-4"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="mt-2 text-lg">
        {amount} sztuk - {price} PLN
      </p>
    </div>
  );

  return (
    <section className="py-8 sm:py-12 ">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        Dostępne kwiaty i Nasze Ceny
      </h2>
      <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {flowers.map((flower) => (
          <FlowerCard
            key={flower.name}
            name={flower.name}
            amount={flower.amount}
            price={flower.price}
            image={flower.image}
          />
        ))}
      </div>
    </section>
  );
}

export default AvailableFlowers;
