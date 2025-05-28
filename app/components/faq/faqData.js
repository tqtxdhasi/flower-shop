const faqData = [
  {
    question: "Jak długo utrzymają się świeże róże?",
    answer:
      "Gwarantujemy świeżość przez minimum 3 dni przy prawidłowej pielęgnacji. Do każdego zamówienia dołączamy instrukcję przedłużania trwałości kwiatów.",
  },
  {
    question: "Czy mogę zamówić róże z dostawą na konkretny dzień?",
    answer:
      "Oczywiście! W zamówieniu możesz wybrać preferowaną datę dostawy. Dokładamy wszelkich starań, aby bukiet dotarł na czas.",
  },
  {
    question: "Czy oferujecie anonimową wysyłkę bukietu?",
    answer:
      "Tak, możesz wysłać bukiet anonimowo – nie dołączamy danych nadawcy, chyba że wyraźnie zaznaczysz taką opcję przy zamówieniu.",
  },
  {
    question: "Czy można dołączyć bilecik z wiadomością?",
    answer:
      "Tak, umożliwiamy dołączenie bileciku z personalizowaną wiadomością – wystarczy wpisać tekst podczas składania zamówienia.",
  },
  {
    question: "Jakie formy płatności są akceptowane?",
    answer:
      "Akceptujemy płatności gotówką, BLIK, szybkie przelewy, crypto oraz PayPal lub Revolut. Wszystkie transakcje są szyfrowane i w pełni bezpieczne.",
  },
  {
    question: "Jakie są kwiaty w kwiaciarniach?",
    answer:
      "W kwiaciarniach znajdziesz szeroki wybór kwiatów: róże, tulipany, gerbery, lilie, chryzantemy, peonie, storczyki, frezje, gipsówkę oraz rośliny doniczkowe. Sprawdź pełną ofertę: https://www.krakow-kwiaciarnia.pl/kwiaty",
  },
  {
    question: "Jakie są nazwy kwiatów na bukiet?",
    answer:
      "Najczęściej do bukietu wybieramy: róże, tulipany, gerbery, lilie, eustomy, frezje, peonie, chryzantemy, storczyki i goździki. Zobacz propozycje: https://www.krakow-kwiaciarnia.pl/kwiaty",
  },
  {
    question: "Jakie są 10 najpopularniejszych nazw kwiatów?",
    answer:
      "10 najpopularniejszych kwiatów w Polsce to: róża, tulipan, gerbera, lilia, peonia, chryzantema, goździk, słonecznik, storczyk i alstromeria. Wszystkie dostępne u nas.",
  },
  {
    question: "Jakie są popularne kwiaty do bukietu?",
    answer:
      "Do bukietów najchętniej wybierane są: róże, tulipany, gerbery, lilie, eustomy i peonie. Sprawdź bestsellery: https://www.krakow-kwiaciarnia.pl/kwiaty",
  },
  {
    question: "Co można znaleźć w kwiaciarni?",
    answer:
      "Kwiaciarnia oferuje: kwiaty cięte, rośliny doniczkowe, gotowe bukiety, kompozycje na śluby i inne okazje, dodatki florystyczne oraz akcesoria do pielęgnacji.",
  },
  {
    question: "Jakie są rodzaje ciętych kwiatów?",
    answer:
      "Do najpopularniejszych ciętych należą: róże, tulipany, gerbery, lilie, chryzantemy, eustomy, frezje, peonie i goździki. Idealne do bukietów i wazonów.",
  },
  {
    question: "Jakie są popularne kwiaty cięte?",
    answer:
      "Popularne kwiaty cięte to: róże, tulipany, gerbery, eustomy, lilie, peonie, chryzantemy i storczyki. Wszystkie w doskonałej jakości.",
  },

  {
    question: "Jaki bukiet za 100 zł?",
    answer:
      "Za 100 zł polecamy bukiet z 23 tulipanów w eleganckim opakowaniu: https://www.krakow-kwiaciarnia.pl/kwiaty/tulipany/bukiet-23-tulipanow",
  },
  {
    question: "Ile powinien kosztować bukiet?",
    answer:
      "Standardowy bukiet w kwiaciarni kosztuje od 80 do 150 zł. U nas znajdziesz opcje już od 1 zł: https://www.krakow-kwiaciarnia.pl/kwiaty",
  },
  {
    question: "Ile kosztuje bukiet 10 róż w kwiaciarni?",
    answer:
      "Bukiet 10 róż kosztuje średnio 120–150 zł, u nas dostępny od 50 zł: https://www.krakow-kwiaciarnia.pl/kwiaty/roze/bukiet-10-roz",
  },
  {
    question: "Z jakich kwiatów jest najtańszy bukiet?",
    answer:
      "Najtańsze bukiety powstają z gipsówki, margaretek i eustomy – ceny zaczynają się od 59 zł: https://www.krakow-kwiaciarnia.pl/kwiaty/roze",
  },
  {
    question: "Jaki bukiet do 100 zł?",
    answer:
      "Do 100 zł idealny będzie bukiet z gerber, chryzantem i eustomy: https://twojakwiaciarnia.pl/bukiet-do-100zl.",
  },
  {
    question: "Czy 100 róż to za dużo?",
    answer:
      "Bukiet 100 róż to wyjątkowo okazała kompozycja, symbolizująca miłość bez granic. Dla bardziej kameralnego efektu wybierz 50 róż: https://twojakwiaciarnia.pl/bukiet-50-roz.",
  },
  {
    question: "Ile kosztuje bukiet 50 kwiatów?",
    answer:
      "Bukiet z 50 kwiatów (np. 25 róż i 25 tulipanów) kosztuje od 250 zł: https://twojakwiaciarnia.pl/bukiet-50-kwiatow.",
  },
  {
    question: "Ile kwiatów na 50 urodziny?",
    answer:
      "Na 50. urodziny polecamy 50 róż lub mieszany bukiet 50 kwiatów: od 250 zł (https://twojakwiaciarnia.pl/bukiet-50-kwiatow).",
  },
  {
    question: "Ile średnio kosztuje bukiet kwiatów?",
    answer:
      "Średnia cena bukietu w Polsce to 100–200 zł. U nas bukiety od 59 zł: https://twojakwiaciarnia.pl/bukiety-od-59zl.",
  },
  {
    question: "Ile kosztuje bukiet 100 róż?",
    answer:
      "Bukiet 100 róż to luksus od 2 400 zł: https://twojakwiaciarnia.pl/bukiet-100-roz.",
  },
  {
    question: "Ile kosztuje bukiet 50 czerwonych róż?",
    answer:
      "Bukiet 50 czerwonych róż kosztuje od 1 200 zł: https://twojakwiaciarnia.pl/bukiet-50-czerwonych-roz.",
  },
  {
    question: "Co oznacza bukiet 100 róż?",
    answer:
      "Bukiet 100 róż symbolizuje miłość bez granic i oddanie – idealny na wyjątkowe okazje.",
  },
  {
    question: "Ile kosztują kwiaty w kwiaciarni?",
    answer:
      "Cena pojedynczego kwiatu zaczyna się od 6 zł, a gotowe bukiety od 59 zł. Pełen cennik: https://twojakwiaciarnia.pl/cennik.",
  },
  {
    question: "Ile kosztuje jeden kwiat w kwiaciarni?",
    answer:
      "Średni koszt jednego kwiatu: róża ~12 zł, tulipan ~6 zł, gerbera ~10 zł.",
  },
  {
    question: "Ile kosztuje 10 róż?",
    answer:
      "10 róż to koszt od 120 zł, w promocji już od 99 zł: https://twojakwiaciarnia.pl/bukiet-10-roz.",
  },
  {
    question: "Ile kosztuje średni bukiet w kwiaciarni?",
    answer:
      "Średni bukiet kosztuje 100–150 zł. Zobacz propozycje: https://twojakwiaciarnia.pl/bukiety-100-150zl.",
  },
  {
    question: "Ile kosztuje bukiet 3 róż?",
    answer:
      "Bukiet 3 róż to wydatek od 39 zł: https://twojakwiaciarnia.pl/bukiet-3-roz.",
  },
  {
    question: "Co oznacza 1 róża?",
    answer:
      "Jedna róża symbolizuje miłość, uznanie i szacunek – subtelny, ale wymowny gest.",
  },
  {
    question: "Ile kosztuje 50 róż?",
    answer:
      "Bukiet 50 róż kosztuje od 600 zł: https://twojakwiaciarnia.pl/bukiet-50-roz.",
  },
  {
    question: "Ile kosztuje jedna piwonia?",
    answer:
      "Pojedyncza piwonia w kwiaciarni kosztuje ok. 15–20 zł, w zależności od sezonu.",
  },
  {
    question: "Ile kosztuje gipsówka?",
    answer:
      "Gipsówka to koszt ok. 6–8 zł za pęczek, idealna do wypełnienia bukietów.",
  },
  {
    question: "Ile kosztuje 1 lilia w kwiaciarni?",
    answer:
      "Pojedyncza lilia kosztuje około 12–15 zł, zależnie od wielkości i odmiany.",
  },
  {
    question: "Ile kosztują frezje w kwiaciarni?",
    answer:
      "Frezje kosztują ok. 8–12 zł za pęczek, cenione za delikatny zapach i trwałość.",
  },
  {
    question: "Jakie znaczenie ma biała frezja?",
    answer:
      "Biała frezja symbolizuje czystość, niewinność i przyjaźń – świetna do romantycznych bukietów.",
  },
  {
    question: "Jakie kwiaty są najłatwiejsze?",
    answer:
      "Do najłatwiejszych w pielęgnacji należą: gerbery, chryzantemy, alstromerie i gipsówka.",
  },
  {
    question: "Ile kosztuje 7 róż?",
    answer:
      "Bukiet 7 róż kosztuje od 90 zł: https://twojakwiaciarnia.pl/bukiet-7-roz.",
  },
  {
    question: "Ile kosztuje bukiet z 19 róż?",
    answer:
      "Bukiet 19 róż to wydatek od 250 zł: https://twojakwiaciarnia.pl/bukiet-19-roz.",
  },
  {
    question: "Jakie kwiaty na 70?",
    answer:
      "Na 70. urodziny polecamy bukiet z 70 tulipanów lub mieszany z róż i eustomy: https://twojakwiaciarnia.pl/bukiet-70-kwiatow.",
  },
  {
    question: "Ile kosztuje bukiet z 30 róż?",
    answer:
      "Bukiet z 30 róż kosztuje od 720 zł: https://twojakwiaciarnia.pl/bukiet-30-roz.",
  },
  {
    question: "Ile kosztuje 1000 czerwonych róż?",
    answer:
      "Bukiet 1000 róż to koszt od 24 000 zł – oferta premium na specjalne zamówienie.",
  },
  {
    question: "Co oznacza bukiet pieniędzy?",
    answer:
      "Bukiet pieniędzy symbolizuje życzenia dobrobytu i powodzenia – oryginalna forma prezentu.",
  },
  {
    question: "Ile banknotów potrzeba na bukiet pieniędzy?",
    answer:
      "Standardowy bukiet pieniężny to 10–20 banknotów dowolnych nominałów.",
  },
  {
    question: "Jak zrobić bukiet z banknotów?",
    answer:
      "Bukiet z banknotów tworzysz zwijając każdy banknot w rulon i mocując drucikiem – instrukcja: https://twojakwiaciarnia.pl/bukiet-banknotow.",
  },
  {
    question: "Ile kosztuje bukiet z 101 róż?",
    answer:
      "Bukiet 101 róż to wyjątkowy wydatek od 2 424 zł: https://twojakwiaciarnia.pl/bukiet-101-roz.",
  },
  {
    question: "Jaki kwiat symbolizuje liczbę 50?",
    answer:
      "Liczba 50 kojarzy się z różami – bukiet 50 róż to symbol jubileuszu i dojrzałej miłości.",
  },
  {
    question: "Ile kosztuje bukiet z 75 róż?",
    answer:
      "Bukiet 75 róż kosztuje od 1 800 zł: https://twojakwiaciarnia.pl/bukiet-75-roz.",
  },
  {
    question: "Jaka jest minimalna liczba kwiatów w bukiecie?",
    answer:
      "Minimalna liczba w standardowym bukiecie to 3 kwiaty – idealna na mały, elegancki gest.",
  },
  {
    question: "Co oznacza 7 róż?",
    answer:
      "Bukiet 7 róż symbolizuje szacunek i podziw – często wybierany na gratulacje.",
  },
  {
    question: "Co oznacza 5 róż?",
    answer:
      "Pięć róż to wyraz zachwytu i uznania – odpowiednie na podziękowania.",
  },
  {
    question: "Co oznacza 9 róż?",
    answer:
      "Dziewięć róż symbolizuje cierpliwość i trwałość uczuć – romantyczne wyznanie.",
  },
  {
    question: "Co oznaczają 3 róże?",
    answer: "Trzy róże oznaczają „kocham Cię” – klasyczny komunikat miłości.",
  },
  {
    question: "Ile kosztuje średnio 1 róża?",
    answer:
      "Średni koszt jednej róży to ok. 12 zł, w zależności od sezonu i odmiany.",
  },
  {
    question: "Ile róż się daje?",
    answer:
      "Popularne liczby: 1, 3, 7, 12, 50 – każda ilość niesie swoją symbolikę.",
  },
  {
    question: "Ile róż na zaręczyny?",
    answer:
      "Na zaręczyny rekomendujemy bukiet 12 róż – symbol doskonałej miłości: https://twojakwiaciarnia.pl/bukiet-12-roz.",
  },
  {
    question: "Ile kosztuje jeden goździk?",
    answer: "Pojedynczy goździk w kwiaciarni kosztuje ok. 4–6 zł.",
  },
];
export default faqData;
