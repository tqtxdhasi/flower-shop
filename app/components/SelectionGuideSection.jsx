import Link from "next/link";

const SelectionGuideSection = () => (
  <article className="bg-white p-6 rounded-xl shadow-sm">
    <h2 className="text-2xl font-semibold text-rose-800 mb-4">
      Jak Wybrać Najlepsze Róże w Krakowie? 🌹
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <img
          src="https://placehold.co/400x300.png?text=Świeże+czerwone+róże"
          alt="Czerwone róże w kwiaciarni Kwiaty Kraków"
          className="rounded-lg mb-4"
        />
        <h3 className="font-medium">Znaki Świeżości:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pąki lekko otwarte</li>
          <li>Liście bez brązowych plam</li>
          <li>Łodygi jędrne i proste</li>
        </ul>
      </div>
      <div className="bg-rose-50 p-4 rounded-lg">
        <p className="font-medium mb-2">W Kwiaty zapewniamy:</p>
        <ul className="space-y-2">
          <li>✅ Róże cięte w dniu dostawy</li>
          <li>✅ Gwarancja świeżości 7 dni</li>
          <li>✅ Darmowa wymiana jeśli nie będziesz zadowolony</li>
        </ul>
        <Link
          href="/gwarancja"
          className="inline-block mt-4 text-rose-700 underline text-sm"
        >
          Szczegóły gwarancji jakości
        </Link>
      </div>
    </div>{" "}
    <div className="mt-8 border-t border-rose-50 pt-6 text-right">
      <Link
        href="/blog/wybor-roz"
        className="text-rose-700 hover:text-rose-900 font-medium inline-flex items-center"
      >
        Porównanie odmian róż
      </Link>
    </div>
  </article>
);

export default SelectionGuideSection;
