import {
  COLOR_OPTIONS,
  DELIVERY_CHARGE,
  HEIGHTS,
  IMAGE_COST,
  LETTER_COST,
  PACKAGING_COSTS,
  PRICE_SHEET,
  QUANTITIES,
} from "./roseData";

export const roseSchema = {
  "@context": "https://schema.org/",
  "@type": "ProductGroup",
  productGroupID: "ROZE-GROUP",
  name: "Bukiet róż – różne kolory, wielkości i ilości",
  description:
    "Wybierz spośród różnych kolorów, ilości i długości eleganckich bukietów róż z dostawą w Krakowie.",
  brand: { "@type": "Brand", name: "Kwiaciarnia Kraków" },
  variesBy: ["height", "quantity", "color"],
  hasVariant: QUANTITIES.flatMap((quantity) =>
    HEIGHTS.flatMap((height) =>
      COLOR_OPTIONS.map((color) => {
        const basePrice = PRICE_SHEET[height]?.[quantity] || 0;
        const packagingPrice = PACKAGING_COSTS[quantity] || 0;
        return {
          "@type": "Product",
          productGroupID: "ROZE-GROUP",
          name: `Bukiet ${quantity} ${color.name.toLowerCase()} róż ${height} cm`,
          description: `Luksusowy bukiet ${quantity} ${color.name.toLowerCase()} róż o długości ${height} cm z opcją personalizacji.`,
          color: color.name,
          image: `https://www.krakow-kwiaciarnia.pl/images/roze-${quantity}-${height}-${color.slug}.jpg`,
          offers: {
            "@type": "Offer",
            url: `https://www.krakow-kwiaciarnia.pl/kwiaty/roze?quantity=${quantity}&height=${height}&flowerColor=${color.name}`,
            priceCurrency: "PLN",
            priceSpecification: {
              "@type": "CompoundPriceSpecification",
              priceComponent: [
                {
                  "@type": "UnitPriceSpecification",
                  name: `Bukiet (${quantity} szt. × ${height} cm)`,
                  price: basePrice,
                  priceCurrency: "PLN",
                },
              ],
              price: basePrice,
            },
            addOn: [
              {
                "@type": "Offer",
                name: "Opakowanie",
                price: packagingPrice,
                priceCurrency: "PLN",
              },
              {
                "@type": "Offer",
                name: "Dostawa",
                price: DELIVERY_CHARGE,
                priceCurrency: "PLN",
              },
              {
                "@type": "Offer",
                name: "Bilecik",
                price: LETTER_COST,
                priceCurrency: "PLN",
              },
              {
                "@type": "Offer",
                name: "Dodanie zdjęcia",
                price: IMAGE_COST,
                priceCurrency: "PLN",
              },
            ],
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
          },
        };
      })
    )
  ),
};

export function buildRoseProductSchema(
  quantity,
  height,
  color,
  withVase = false
) {
  const basePrice = PRICE_SHEET[height]?.[quantity] ?? 0;
  const totalPrice = basePrice;

  const option = withVase ? "VASE" : "";
  const sku = `ROZE-${height}-${quantity}-${color.slug}${
    option ? `-${option}` : ""
  }`;

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `Bukiet ${quantity} ${color.name.toLowerCase()} róż ${height} cm`,
    image: `https://www.krakow-kwiaciarnia.pl/images/roze-${quantity}-${height}-${color.slug}.jpg`,
    description:
      "Luksusowy bukiet " +
      `${quantity} ${color.name.toLowerCase()} róż o długości ${height} cm.`,
    sku: `ROZE-${height}-${quantity}-${color.slug}`,

    brand: {
      "@type": "Brand",
      name: "Kwiaciarnia Kraków",
    },
    occasion: ["Valentine’s Day", "Anniversary"],
    audience: {
      "@type": "PeopleAudience",
      geographicArea: {
        "@type": "City",
        name: "Kraków",
      },
      suggestedGender: "male",
    },
    offers: {
      "@type": "Offer",
      url: `https://www.krakow-kwiaciarnia.pl/kwiaty/roze?quantity=${quantity}&height=${height}&flowerColor=${color.name}`,
      priceCurrency: "PLN",
      price: totalPrice,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "20.00",
          currency: "PLN",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            value: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 0,
            unitCode: "DAY",
          },
          businessDays: {
            "@type": "OpeningHoursSpecification",
            opens: "08:00",
            closes: "23:59",
          },
        },
      },
    },
  };
}
