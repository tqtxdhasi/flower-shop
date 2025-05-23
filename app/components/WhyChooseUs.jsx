import Image from "next/image";

function WhyChooseUs() {
  return (
    <section className=" text-white rounded-lg shadow-lg p-4 bg-rose-700 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        Dlaczego warto wybrać nas?
      </h2>
      <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <ul className="space-y-4 text-lg">
          <li>🌸 Świeże kwiaty bezpośrednio z hurtowni</li>
          <li>🌿 Przystępne ceny</li>
          <li>🎀 Piękne opcje ozdobnego pakowania</li>
          <li>🚚 Dostawa 20 zl lub odbiór dostępny w Krakowie </li>
          <li>
            💡 Przypomnienia o nadchodzących terminach wręczenia, aby nigdy nie
            przegapić ważnej okazji
          </li>
        </ul>
        <Image
          src="/1223.jpg"
          alt="Bukiet kwiatów"
          className="rounded-lg shadow-lg w-full max-h-80 object-cover"
          priority
        />
      </div>
    </section>
  );
}

export default WhyChooseUs;
