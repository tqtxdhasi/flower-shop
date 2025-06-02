import { shopDomain, shopName } from "@/app/data/mainData";
import {
  COLOR_OPTIONS,
  DELIVERY_CHARGE,
  HEIGHTS,
  IMAGE_COST,
  LETTER_COST,
  PACKAGING_COSTS,
  PRICE_SHEET,
  QUANTITIES,
} from "../../data/roseData";

export const rosesProductGroupSchema = {
  "@context": "https://schema.org/",
  "@type": "ProductGroup",
  productGroupID: "ROZE-GROUP",
  name: `Świeże Róże | Kwiaty, Bukiet Róż z Dostawą i Odbiorem | ${shopName}`,
  description:
    "Zamów kwiaty online w Krakowie — luksusowe bukiety róż w ponad 100 wariantach ilości, koloru i długości. Bukiet róż w Krakowie z dostawą lub darmowym odbiorem osobistym na następny dzień",
  brand: { "@type": "Brand", name: shopName },
  variesBy: ["height", "quantity", "color"],
  hasVariant: QUANTITIES.flatMap((quantity) =>
    HEIGHTS.flatMap((height) =>
      COLOR_OPTIONS.map((color) => {
        const basePrice = PRICE_SHEET[height]?.[quantity] || 0;
        const packagingPrice = PACKAGING_COSTS[quantity] || 0;
        return {
          "@type": "Product",
          name: `Bukiet ${quantity} ${color.slug} róż ${height} cm`,
          description: `Świeży bukiet ${quantity} ${color.slug} róż o długości ${height} cm z opcją personalizacji.`,
          color: color.color,
          image: `https://www.krakow-kwiaciarnia.pl/images/bukiet-${quantity}-${color.slug}-roz-${height}cm.jpg`,
          offers: {
            "@type": "Offer",
            url: `${shopDomain}/kwiaty/roze?quantity=${quantity}&height=${height}&flowerColor=${color.name}`,
            priceCurrency: "PLN",
            price: basePrice,
            priceValidUntil: "2025-12-28",
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
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: {
                "@type": "MonetaryAmount",
                value: 20,
                currency: "PLN",
              },
              shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: {
                  "@type": "Country",
                  name: "PL",
                },
              },
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                cutOffTime: "23:59:00",
                handlingTime: {
                  "@type": "QuantitativeValue",
                  minValue: 1,
                  maxValue: 1,
                  unitCode: "d",
                },
                transitTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 1,
                  unitCode: "d",
                },
                businessDays: [
                  "https://schema.org/Monday",
                  "https://schema.org/Tuesday",
                  "https://schema.org/Wednesday",
                  "https://schema.org/Thursday",
                  "https://schema.org/Friday",
                  "https://schema.org/Saturday",
                  "https://schema.org/Sunday",
                ],
                deliveryTime: {
                  "@type": "OpeningHoursSpecification",
                  opens: "08:00",
                  closes: "23:59",
                },
              },
            },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              returnPolicyCategory:
                "https://schema.org/MerchantReturnNotPermitted",
              applicableCountry: "PL",
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

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `Bukiet ${quantity} ${color.slug} róż ${height} cm`,
    description: `Świeży bukiet ${quantity} ${color.slug} róż o długości ${height} cm z opcją personalizacji.`,
    color: color.color,
    image: `${shopDomain}/images/bukiet-${quantity}-${color.slug}-roz-${height}cm.jpg`,
    brand: {
      "@type": "Brand",
      name: shopName,
    },
    occasion: [
      "Valentine’s Day",
      "Anniversary",
      "Birthday",
      "Mother’s Day",
      "Wedding",
      "Graduation",
      "Get Well Soon",
      "Thank You",
      "Christmas",
      "New Year",
      "Just Because",
      "Sympathy",
    ],
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
      url: `${shopDomain}/kwiaty/roze?quantity=${quantity}&height=${height}&flowerColor=${color.name}`,
      priceCurrency: "PLN",
      price: totalPrice,
      priceValidUntil: "2025-12-28",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
        applicableCountry: "PL",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: 20,
          currency: "PLN",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: {
            "@type": "Country",
            name: "PL",
          },
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          cutOffTime: "23:59:00",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 1,
            unitCode: "d",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "d",
          },
          businessDays: [
            "https://schema.org/Monday",
            "https://schema.org/Tuesday",
            "https://schema.org/Wednesday",
            "https://schema.org/Thursday",
            "https://schema.org/Friday",
            "https://schema.org/Saturday",
            "https://schema.org/Sunday",
          ],
          deliveryTime: {
            "@type": "OpeningHoursSpecification",
            opens: "08:00",
            closes: "23:59",
          },
        },
      },
    },
  };
}
