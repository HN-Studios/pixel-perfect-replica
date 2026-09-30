export type Category = "pescados" | "mariscos" | "cefalopodos";

export type Product = {
  id: string;
  name: string;
  scientific: string;
  french: string;
  english: string;
  category: Category;
  presentation: string[];
  freezing: string[];
  sizes: string;
  packaging: string;
};

export const products: Product[] = [
  {
    id: "pargo-rojo",
    name: "Pargo rojo",
    scientific: "Lutjanus purpureus",
    french: "Vivaneau rouge",
    english: "Red snapper",
    category: "pescados",
    presentation: ["Entero eviscerado", "Filete"],
    freezing: ["IQF"],
    sizes: "[por confirmar]",
    packaging: "[por confirmar]",
  },
  {
    id: "mero",
    name: "Mero",
    scientific: "Epinephelus spp.",
    french: "Mérou",
    english: "Grouper",
    category: "pescados",
    presentation: ["Entero eviscerado", "Filete"],
    freezing: ["IQF"],
    sizes: "[por confirmar]",
    packaging: "[por confirmar]",
  },
  {
    id: "atun",
    name: "Atún",
    scientific: "Thunnus spp.",
    french: "Thon",
    english: "Tuna",
    category: "pescados",
    presentation: ["Lomos", "Porciones"],
    freezing: ["IQF"],
    sizes: "[por confirmar]",
    packaging: "[por confirmar]",
  },
  {
    id: "camaron",
    name: "Camarón",
    scientific: "Penaeus spp.",
    french: "Crevette",
    english: "Shrimp",
    category: "mariscos",
    presentation: ["Entero", "Pelado y desvenado"],
    freezing: ["IQF", "Bloque"],
    sizes: "[por confirmar]",
    packaging: "[por confirmar]",
  },
  {
    id: "pulpo",
    name: "Pulpo",
    scientific: "Octopus spp.",
    french: "Poulpe",
    english: "Octopus",
    category: "cefalopodos",
    presentation: ["Entero limpio"],
    freezing: ["IQF"],
    sizes: "[por confirmar]",
    packaging: "[por confirmar]",
  },
  {
    id: "calamar",
    name: "Calamar",
    scientific: "Loligo spp.",
    french: "Calmar",
    english: "Squid",
    category: "cefalopodos",
    presentation: ["Entero", "Tubo", "Anillas"],
    freezing: ["IQF", "Bloque"],
    sizes: "[por confirmar]",
    packaging: "[por confirmar]",
  },
];
