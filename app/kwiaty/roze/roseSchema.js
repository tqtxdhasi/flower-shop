const PRICE_SHEET = {
  40: { 9: 90, 19: 140, 29: 195, 39: 240, 49: 290 },
  50: { 9: 100, 19: 160, 29: 225, 39: 280, 49: 340 },
  60: { 9: 110, 19: 180, 29: 255, 39: 320, 49: 390 },
  70: { 9: 120, 19: 200, 29: 285, 39: 360, 49: 440 },
  80: { 9: 130, 19: 220, 29: 315, 39: 400, 49: 490 },
};

const PACKAGING_COSTS = { 9: 10, 19: 10, 29: 15, 39: 15, 49: 20 };
const DELIVERY_CHARGE = 20;
const LETTER_COST = 10;
const IMAGE_COST = 20;

const COLOR_OPTIONS = [
  { name: "Red", code: "#FF0000", slug: "czerwone" },
  { name: "Pink", code: "#FFC0CB", slug: "rozowe" },
  { name: "White", code: "#FFFFFF", slug: "biale" },
  { name: "Yellow", code: "#FFFF00", slug: "zolte" },
  { name: "Purple", code: "#800080", slug: "fioletowe" },
  { name: "Blue", code: "#0000FF", slug: "niebieskie" },
];

const quantities = [9, 19, 29, 39, 49];
const heights = [40, 50, 60, 70, 80];

export const roseSchema = {
  "@context": "https://schema.org/",
  "@type": "ProductGroup",
  productGroupID: "ROZE-GROUP",
  name: "Bukiet róż – różne kolory, wielkości i ilości",
  description:
    "Wybierz spośród różnych kolorów, ilości i długości eleganckich bukietów róż z dostawą w Krakowie.",
  brand: { "@type": "Brand", name: "Kwiaciarnia Kraków" },
  variesBy: ["height", "quantity", "color"],
  hasVariant: quantities.flatMap((quantity) =>
    heights.flatMap((height) =>
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

export function buildRoseProductSchema(quantity, height, color) {
  const basePrice = PRICE_SHEET[height]?.[quantity] ?? 0;
  const totalPrice = basePrice;

  const option = withVase ? "VASE" : "";
  const sku = `ROZE-${height}-${quantity}-${colorCode}${
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
