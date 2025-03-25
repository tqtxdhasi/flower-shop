function HowItWorks() {
  return (
    <section className="py-8 sm:py-12 bg-[#E8D7D1] text-[#2E2B26]">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        Jak to działa
      </h2>
      <p className="mt-4 text-lg text-center max-w-2xl mx-auto">
        📅 Zamówienia muszą być złożone <strong>co najmniej 1 noc</strong> przed
        datą wręczenia i <strong>nie więcej niż 3 dni</strong> przed
      </p>
      <p className="mt-4 text-lg text-center max-w-2xl mx-auto">
        Oferujemy wyłącznie świeże, wysokiej jakości kwiaty, dostępne na
        zamówienie z jednodniowym wyprzedzeniem. Zamówienia złożone do
        <span className="font-bold"> 23:59</span> są gotowe do odbioru
        następnego dnia od <span className="font-bold">8:00</span> do wieczora
        lub mogą zostać dostarczone. Nie realizujemy dostaw tego samego dnia.
      </p>
      <p className="mt-4 text-lg text-center max-w-2xl mx-auto">
        Minimalna wartość zamówienia jest wymagana. Maksymalna kwota zależy od
        liczby pakietów – im większe zamówienie, tym niższa cena jednostkowa. W
        przypadku mniejszych zamówień klient może ponieść dodatkową opłatę, aby
        pokryć koszt pakietu.
      </p>
      <p className="mt-4 text-lg text-center max-w-2xl mx-auto">
        Dokładamy wszelkich starań, aby zapewnić najwyższą jakość. Po
        zaakceptowaniu zdjęcia gotowego bukietu i jego dostarczeniu lub
        przygotowaniu do odbioru nie ma możliwości zwrotu. Możemy jednak wykonać
        dodatkowe zdjęcia z różnych perspektyw lub dokonać zmian w zamówieniu
        przed jego finalizacją.
      </p>
      <p className="mt-4 text-lg text-center max-w-2xl mx-auto">
        💰{" "}
        <span className="font-bold">
          Wymagana jest zaliczka w wysokości 50%{" "}
        </span>
        wartości zamówienia, co pozwala pokryć koszty zakupu i zapewnia płynność
        realizacji.
      </p>
      <p className="mt-4 text-lg text-center max-w-2xl mx-auto">
        Oferujemy przypomnienia o nadchodzącej dacie wręczenia kwiatów, aby
        ułatwić planowanie ważnych okazji.
      </p>
      <p className="mt-4 text-lg text-center max-w-2xl mx-auto">
        Kwiaty komponujemy maksymalnie z{" "}
        <span className="font-bold">dwóch pakietów</span>. Opakowanie dobieramy
        tak, aby pasowało do kolorystyki kwiatów, miało neutralny charakter lub
        było dostosowane do transportu.
      </p>
    </section>
  );
}

export default HowItWorks;
