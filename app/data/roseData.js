export const PRICE_SHEET = {
  40: { 9: 90, 19: 140, 29: 195, 39: 240, 49: 290 },
  50: { 9: 100, 19: 160, 29: 225, 39: 280, 49: 340 },
  60: { 9: 110, 19: 180, 29: 255, 39: 320, 49: 390 },
  70: { 9: 120, 19: 200, 29: 285, 39: 360, 49: 440 },
  80: { 9: 130, 19: 220, 29: 315, 39: 400, 49: 490 },
};

export const PACKAGING_COSTS = {
  9: 10,
  19: 10,
  29: 15,
  39: 15,
  49: 20,
};
export const COLOR_OPTIONS = [
  {
    name: "Białych",
    code: "#ffffff",
    slug: "bialych",
    color: "bialy",
  },
  {
    name: "Brzoskwiniowych",
    code: "#fcd5ce",
    slug: "brzoskwiniowych",
    color: "brzoskwiniowy",
  },
  {
    name: "Różowych",
    code: "#ff69b4",
    slug: "rozowych",
    color: "rozowy",
  },
  {
    name: "Czerwonych",
    code: "#ff0000",
    slug: "czerwonych",
    color: "czerwony",
  },
];

export const PACKAGING_OPTIONS = [
  {
    name: "Czerwony papier",
    code: "#FF0000",
    slug: "czerwonym",
    color: "czerwony",
  },
  {
    name: "Różowy papier",
    code: "#FFC0CB",
    slug: "rozowym",
    color: "rozowy",
  },
  {
    name: "Biały papier",
    code: "#FFFFFF",
    slug: "bialym",
    color: "bialy",
  },
  {
    name: "Żółty papier",
    code: "#FFFF00",
    slug: "zoltym",
    color: "zolty",
  },
  {
    name: "Niebieski papier",
    code: "#0000FF",
    slug: "niebieskim",
    color: "niebieski",
  },
];

export const HEIGHTS = Object.keys(PRICE_SHEET).map(Number);
export const QUANTITIES = Object.keys(PRICE_SHEET[HEIGHTS[0]]).map(Number);

export const DELIVERY_CHARGE = 20;
export const LETTER_COST = 10;
export const IMAGE_COST = 20;
