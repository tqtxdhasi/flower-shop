// /data/roseConfig.js

export const STANDARD_BASES = [
  { length: 40, cost: 4 },
  { length: 50, cost: 5 },
];

export const PREMIUM_BASES = [
  { length: 40, cost: 3.6 },
  { length: 50, cost: 4 },
  { length: 60, cost: 4.4 },
  { length: 70, cost: 5 },
  { length: 80, cost: 5.6 },
];

export const STANDARD_ROSE_DATA = [
  { quantity: 9, packaging: 15, profit: 49.99 },
  { quantity: 19, packaging: 10, profit: 49.99 },
  { quantity: 29, packaging: 15, profit: 74.99 },
  { quantity: 39, packaging: 15, profit: 79.99 },
  { quantity: 49, packaging: 20, profit: 89.99 },
  { quantity: 59, packaging: 20, profit: 99.99 },
];

export const PREMIUM_ROSE_DATA = [
  { quantity: 23, packaging: 15, profit: 49.99 },
  { quantity: 47, packaging: 20, profit: 59.99 },
];

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
    slug: "none",
    name: "Bez opakowania (tylko wstążka)",
    code: "",
    color: "",
  },
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

export const DELIVERY_CHARGE = 20;
export const LETTER_COST = 10;
export const IMAGE_COST = 20;
