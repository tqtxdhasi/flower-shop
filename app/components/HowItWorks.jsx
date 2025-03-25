function HowItWorks() {
  return (
    <section className="p-8 sm:py-12 bg-[#E8D7D1] text-[#2E2B26] rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        📜 Regulamin zamówień i akceptacji bukietu
      </h2>

      <div className="mt-8 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold">🕒 Termin składania zamówień</h3>
        <ul className="mt-4 space-y-2 text-lg">
          <li>
            Zamówienia można składać{" "}
            <strong>do godziny 23:59 dzień przed datą wręczenia</strong>.
          </li>
          <li>Po tym czasie zamówienia na ten dzień nie są już możliwe.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">💰 Płatność & Zwroty</h3>
        <ul className="mt-4 space-y-2 text-lg">
          <li>
            Wszystkie zamówienia wymagają{" "}
            <strong>zaliczki min. 50% wartości bukietu</strong> (dowolną wygodną
            metodą płatności).
          </li>
          <li>
            Jeśli klient <strong>anuluje zamówienie lub dostawę</strong>,{" "}
            <strong>nie przysługuje zwrot pieniędzy</strong>.
          </li>
          <li>
            <strong>Zmiana z dostawy na odbiór osobisty</strong>:
            <ul className="ml-6 list-disc">
              <li>
                Jeśli dostawa była już opłacona –{" "}
                <strong>zwracamy koszt dostawy (20 PLN)</strong>.
              </li>
              <li>
                Jeśli dostawa nie była jeszcze opłacona –{" "}
                <strong>odejmujemy koszt dostawy od końcowej ceny</strong>.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">📸 Akceptacja bukietu</h3>
        <ul className="mt-4 space-y-2 text-lg">
          <li>
            Po przygotowaniu bukietu wysyłamy{" "}
            <strong>zdjęcia (lub wideo)</strong> do akceptacji.
          </li>
          <li>
            Klient może poprosić o dodatkowe ujęcia lub zmianę (
            <strong>patrz sekcja "Zmiany w bukiecie"</strong>).
          </li>
          <li>
            Jeśli klient{" "}
            <strong>
              nie odpowie na nasze wiadomości i telefony w ciągu 8 godzin
              (najpóźniej do 21:00)
            </strong>
            ,{" "}
            <strong>
              zamówienie zostaje anulowane i nie przysługuje zwrot pieniędzy
            </strong>
            .
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">✂️ Zmiany w bukiecie</h3>
        <ul className="mt-4 space-y-2 text-lg">
          <li>
            <strong>Każdy klient ma prawo do jednej zmiany.</strong>
          </li>
          <li>
            Zmiana może dotyczyć{" "}
            <strong>opakowania, dekoracji lub dodatkowych prezentów</strong>{" "}
            (np. bilecik, wstążki, opakowanie).
          </li>
          <li>
            <strong>Nie można zmienić rodzaju kwiatów</strong> – po ich zakupie
            każda zmiana kwiatów jest traktowana jako{" "}
            <strong>nowe zamówienie</strong>.
          </li>
          <li>
            Po wprowadzeniu zmiany{" "}
            <strong>
              nie można się z niej wycofać ani dokonać kolejnej zmiany
            </strong>
            .
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">
          🌸 Brak dostępności wybranych kwiatów
        </h3>
        <ul className="mt-4 space-y-2 text-lg">
          <li>
            Jeśli w hurtowni nie będzie dostępnych wybranych kwiatów,{" "}
            <strong>skontaktujemy się w celu ustalenia zamienników</strong>.
          </li>
          <li>
            Jeśli klient nie zaakceptuje żadnej propozycji zamienników,{" "}
            <strong>
              zamówienie zostaje anulowane, a zwrot wynosi 70% wpłaconej kwoty
            </strong>{" "}
            (30% pokrywa nasz czas i organizację).
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">🚚 Dostawa & Odbiór</h3>
        <ul className="mt-4 space-y-2 text-lg">
          <li>
            Bukiety można odebrać lub otrzymać dostawę w godzinach{" "}
            <strong>8:00 – 23:59</strong>.
          </li>
          <li>
            Koszt dostawy w Krakowie i okolicach wynosi <strong>20 PLN</strong>.
          </li>
          <li>
            <strong>Dostawę realizujemy osobiście</strong>, więc prosimy
            klientów o <strong>kontakt w uzgodnionym terminie</strong>.
          </li>
          <li>
            <strong>Klient jest odpowiedzialny za odbiór zamówienia</strong> –
            jeśli nie jest dostępny i nie możemy się z nim skontaktować,{" "}
            <strong>
              dostawa nie zostanie ponowiona, a zwrot pieniędzy nie przysługuje
            </strong>
            .
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HowItWorks;
