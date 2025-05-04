import { holidayData } from "./holidayData";
import AvailableFlowers from "@/app/components/AvailableFlowers";
import Regulamin from "@/app/components/Regulamin";
import Image from "next/image";
import { shopPhone } from "@/app/data/mainData";

export async function generateStaticParams() {
  return Array.from(holidayData.keys()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  return holidayData.get(params.slug).metadata;
}

export default function SwietaPage({ params }) {
  const holiday = holidayData.get(params.slug);

  return (
    <main className="min-h-screen bg-rose-50">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "KwiatowySklep.pl",
          image: "https://kwiatowysklep.pl/images/logo.jpg",
          url: "https://kwiatowysklep.pl",
          telephone: shopPhone,
          email: "kontakt@kwiatowysklep.pl",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Floriańska 15",
            addressLocality: "Kraków",
            postalCode: "30-000",
            addressCountry: "PL",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          ],
          availableDeliveryMethod: "https://schema.org/HomeDelivery",
        })}
      </script>

      {/* Hero Section */}
      <article className="relative h-96 bg-rose-100">
        <Image
          src={holiday.heroImage}
          alt={`Dostawa bukietów na ${holiday.title} w Krakowie - ${holiday.deliveryInfo.contact}`}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-rose-900/50 flex items-center justify-center">
          <header className="text-center text-white max-w-2xl px-4">
            <h1 className="text-4xl font-bold mb-4">{holiday.heroTitle}</h1>
            <p className="text-xl mb-6">{holiday.heroDescription}</p>
            <a
              href="#zamowienie"
              className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-300"
              aria-label="Przejdź do formularza zamówienia"
            >
              Zamów z Dostawą
            </a>
          </header>
        </div>
      </article>

      {/* Delivery Banner */}
      <section
        className="bg-rose-900 text-white py-4"
        aria-label="Informacje o dostawie"
      >
        <div className="container mx-auto text-center">
          <p className="font-semibold">
            📞 {holiday.deliveryInfo.contact} | 🚚 Darmowa dostawa w{" "}
            <strong>Krakowie</strong> przy zamówieniach powyżej 200zł
          </p>
        </div>
      </section>

      <AvailableFlowers />

      {/* Local SEO Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="bg-white rounded-xl p-8 shadow-rose-100 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-rose-900">
            {holiday.localSeo.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-rose-800">
                Nasze atuty:
              </h3>
              <ul className="space-y-3 text-rose-700">
                {holiday.localSeo.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-rose-800">
                Obsługiwane dzielnice:
              </h3>
              <div className="columns-2 text-rose-700">
                {holiday.localSeo.districts.map((district, index) => (
                  <p key={index}>{district}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-rose-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-rose-900">
            Najczęstsze pytania
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {holiday.faq.map((item, index) => (
              <div
                key={index}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3
                  itemProp="name"
                  className="text-xl font-semibold mb-2 text-rose-800"
                >
                  {item.question}
                </h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text" className="text-rose-700">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Regulamin />
    </main>
  );
}
