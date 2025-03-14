function WhyChooseUs() {
  return (
    <section className="py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        Dlaczego warto wybrać nas?
      </h2>
      <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <ul className="space-y-4 text-lg">
          <li>🌸 Świeże kwiaty bezpośrednio z rynku</li>
          <li>🌿 Przystępne ceny</li>
          <li>🎀 Piękne opcje ozdobnego pakowania</li>
          <li>
            📅 Zamówienia muszą być złożone <strong>co najmniej 1 noc</strong>{" "}
            przed datą wręczenia i <strong>nie więcej niż 3 dni</strong> przed
          </li>
          <li>
            💬 Spersonalizowana obsługa klienta – wyślij nam wiadomość, aby
            dostosować swój bukiet
          </li>
          <li>🚚 Dostawa 20 zl lub odbiór dostępny w Krakowie</li>
          <li>
            💡 Przypomnienia o nadchodzących terminach wręczenia, aby nigdy nie
            przegapić ważnej okazji
          </li>
        </ul>
        <img
          src="/image 1.jpg"
          alt="Bukiet kwiatów"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </section>
  );
}

export default WhyChooseUs;
