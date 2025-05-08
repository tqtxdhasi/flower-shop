import React from "react";
import Script from "next/script";

const FAQSection = () => {
  const faqData = [
    {
      question: "Jak długo utrzymają się świeże róże?",
      answer:
        "Gwarantujemy świeżość przez minimum 3 dni przy prawidłowej pielęgnacji. Do każdego zamówienia dołączamy instrukcję przedłużania trwałości kwiatów.",
    },
    {
      question: "Czy mogę zmienić termin wysyłki?",
      answer:
        "Tak, zmiana terminu wysyłki jest możliwa do 6 godzin przed planowanym nadaniem. Skontaktuj się z nami telefonicznie.",
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
        "Tak, umożliwiamy dołączenie bileciku z personalizowaną wiadomością – wystarczy wpisać tekst podczas składania zamówienia (10 zł).",
    },
    {
      question: "Jakie formy płatności są akceptowane?",
      answer:
        "Akceptujemy płatności gotówką, BLIK, szybkie przelewy, crypto oraz PayPal. Wszystkie transakcje są szyfrowane i w pełni bezpieczne.",
    },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <section className="my-16 px-4">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <h2 className="text-3xl text-center font-bold text-rose-900 mb-8">
        Często Zadawane Pytania
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((item, idx) => (
          <article key={idx} className="p-6 bg-rose-50 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-rose-900">
              {item.question}
            </h3>
            <p className="mt-2 text-rose-800">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
