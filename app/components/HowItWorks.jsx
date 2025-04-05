function HowItWorks() {
  return (
    <div className="bg-rose-50 max-w-full md:max-w-4xl mx-auto py-6 px-4 lg:px-6 flex flex-col rounded-xl gap-6">
      <h2 className="text-4xl font-bold text-rose-900 flex items-center gap-2">
        <span>📜</span>
        Regulamin zamówień i akceptacji bukietu
      </h2>
      <div className="bg-white rounded-lg shadow-sm p-6  border-l-4 border-rose-300">
        <h3 className="text-2xl font-semibold text-rose-900 mb-4 flex items-center gap-2">
          🕒 Termin składania zamówień
        </h3>
        <ul className="ml-6 list-disc text-rose-800">
          <li>
            Zamówienia przyjmujemy{" "}
            <strong>do godziny 23:59 dzień przed datą wręczenia</strong>(czas
            polski, CET).
          </li>
          <li>Po tym czasie zamówienia na ten dzień nie są już możliwe.</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-rose-300">
        <h3 className="text-2xl font-semibold text-rose-900 mb-4 flex items-center gap-2">
          💰 Płatność & Zwroty
        </h3>
        <div className="text-rose-800">
          Klient może wybrać jedną z dwóch opcji:
          <ul className="ml-6 list-disc">
            <li>
              <strong>Pełna płatność z góry:</strong> Wymagana 100% zapłata przy
              składaniu zamówienia (BLIK, gotówką, USDT).
            </li>
            <li>
              <strong>Płatność przy odbiorze:</strong> Wymagana zaliczka 30%
              przy składaniu zamówienia (niezwrotna). Pozostałe 70% płatne
              gotówką lub BLIK w momencie dostawy.
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-rose-300">
        <h3 className="text-2xl font-semibold text-rose-900 mb-4 flex items-center gap-2">
          ❌ Anulowanie zamówienia:
        </h3>
        <div className="text-rose-800">
          <div>
            <strong>Przed rozpoczęciem przygotowania: </strong>
            <ul className="ml-6 list-disc">
              <li>
                <strong>Płatność z góry:</strong> Zwrot 85% kwoty (15% to koszt
                rezerwacji).
              </li>
              <li>
                <strong>Płatność przy odbiorze:</strong> Zaliczka 30% nie
                podlega zwrotowi.
              </li>
            </ul>
            <p>
              <strong>Po rozpoczęciu przygotowania:</strong> Zwrot nie
              przysługuje.
            </p>
            <p>
              <strong>Prawo odstąpienia: </strong> Zgodnie z art. 38 ustawy o
              prawach konsumenta, prawo do odstąpienia nie obowiązuje dla
              produktów szybko psujących się (np. świeże kwiaty).
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-rose-300">
        <h3 className="text-2xl font-semibold text-rose-900 mb-4 flex items-center gap-2">
          📸 Akceptacja bukietu
        </h3>
        <div className="text-rose-800">
          <ul className="list-disc ml-6">
            <li>
              Po przygotowaniu bukietu wysyłamy{" "}
              <strong>zdjęcia (lub wideo) bukietu </strong> do akceptacji.
            </li>
            <li>
              Klient może poprosić o dodatkowe ujęcia lub zmianę (
              <strong>patrz sekcja "Zmiany w bukiecie"</strong>).
            </li>
          </ul>{" "}
          <p>
            Jeśli klient{" "}
            <strong>
              nie odpowie na nasze wiadomości i telefony w ciągu 4 godzin
              (najpóźniej do 21:00)
            </strong>
            ,{" "}
            <strong>
              zamówienie zostaje anulowane i nie przysługuje zwrot pieniędzy
            </strong>
            .
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-rose-300">
        <h3 className="text-2xl font-semibold text-rose-900 mb-4 flex items-center gap-2">
          ✂️ Zmiany w bukiecie
        </h3>
        <div className="text-rose-800">
          <ul className="list-disc ml-6">
            <li>
              <strong>Każdy klient ma prawo do jednej zmiany.</strong>
            </li>
            <li>
              Zmiana może dotyczyć{" "}
              <strong>opakowania, dekoracji lub dodatkowych prezentów</strong>{" "}
              (np. bilecik, wstążki, opakowanie).
            </li>
            <li>
              <strong>Nie można zmienić rodzaju kwiatów</strong>.
            </li>
            <li>
              Po wprowadzeniu zmiany{" "}
              <strong>
                nie można się z niej wycofać ani dokonać kolejnej zmiany
              </strong>
              .
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-rose-300">
        <h3 className="text-2xl font-semibold text-rose-900 mb-4 flex items-center gap-2">
          🌸 Brak dostępności wybranych kwiatów
        </h3>
        <div className="text-rose-800">
          <ul className="list-disc ml-6">
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
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-rose-300">
        <h3 className="text-2xl font-semibold text-rose-900 mb-4 flex items-center gap-2">
          🚚 Dostawa & Odbiór
        </h3>
        <div className="text-rose-800">
          <p>
            Bukiety można odebrać lub otrzymać dostawę w godzinach{" "}
            <strong>8:00 – 23:59</strong>.
          </p>
          <p>
            Koszt dostawy w Krakowie i okolicach wynosi <strong>20 PLN</strong>.
          </p>
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
          <p>
            <strong>Dostawę realizujemy osobiście</strong>, więc prosimy
            klientów o <strong>kontakt w uzgodnionym terminie</strong>.
          </p>
          <p>
            <strong>Klient jest odpowiedzialny za odbiór zamówienia</strong> –
            jeśli nie jest dostępny i nie możemy się z nim skontaktować,{" "}
            <strong>
              dostawa nie zostanie ponowiona, a zwrot pieniędzy nie przysługuje
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
