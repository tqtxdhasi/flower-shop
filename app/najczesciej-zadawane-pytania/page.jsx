//app/najczesciej-zadawane-pytania/page.jsx

import React from "react";
import FAQSection from "../components/faq/FAQSection";
import { shopDomain, shopName } from "../data/mainData";

export const metadata = {
  title: `FAQ | Najczęściej Zadawane Pytania | ${shopName}`,
  description: `Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące zamówień, dostawy i odbioru kwiatów w ${shopName}`,
  alternates: {
    canonical: "/najczesciej-zadawane-pytania",
  },
  openGraph: {
    title: `Najczęściej Zadawane Pytania – ${shopName}`,
    description:
      "Dowiedz się więcej o naszych usługach, dostawie i zasadach zamawiania kwiatów online w Krakowie.",
    url: `${shopDomain}/najczesciej-zadawane-pytania`,
    images: [
      {
        url: `${shopDomain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `FAQ ${shopName}`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `FAQ – ${shopName}`,
    description: `Odpowiedzi na pytania o dostawę, płatności i odbiór osobisty kwiatów w ${shopName}.`,

    images: [`${shopDomain}/og-image.jpg`],
  },
};

const Page = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <FAQSection />
    </div>
  );
};

export default Page;
