/**
 * Catálogo oficial de Congeladora y Procesadora Punta de Piedras, C.A.
 * Fuente: catálogo PDF de la empresa (public/catalogo-punta-de-piedras.pdf).
 * Todas las especies: origen Venezuela, zona de captura FAO 31.
 * Las fotos están en public/productos/<id>.jpg.
 */
export type Category = "pargos" | "pescados" | "mariscos";

export type Product = {
  id: string;
  name: string;
  english: string;
  scientific: string;
  category: Category;
  fishing: string;
  season: string;
  /** Temporada corta para la etiqueta de la tarjeta (solo si no es todo el año). */
  seasonShort?: string;
  products: string[];
  presentation: string[];
  sizes: { label: string; value: string }[];
  tags: string[];
};

const IWP_10 = "IWP (envasado individual) en caja máster de cartón tipo estuche de 10 kg";
const IQF_10 = "IQF en caja máster de cartón tipo estuche de 10 kg";
const WHOLE = "Entero congelado sin vísceras, interfoliado";
const FILLET = "Filete con o sin piel, interfoliado";
const ALL_YEAR = "Todo el año";

export const products: Product[] = [
  {
    id: "pargo-rojo",
    name: "Pargo rojo",
    english: "Red snapper",
    scientific: "Lutjanus purpureus",
    category: "pargos",
    fishing: "Cordel",
    season: ALL_YEAR,
    products: [WHOLE, FILLET],
    presentation: [IWP_10],
    sizes: [
      { label: "Entero", value: "200–329 g · más de 330 g" },
      { label: "Filete", value: "200–600 g" },
    ],
    tags: ["Entero", "Filete"],
  },
  {
    id: "pargo-cebal",
    name: "Pargo cebal",
    english: "Mutton snapper",
    scientific: "Lutjanus analis",
    category: "pargos",
    fishing: "Cordel",
    season: ALL_YEAR,
    products: [WHOLE, FILLET],
    presentation: [IWP_10],
    sizes: [
      { label: "Entero", value: "330–1.200 g" },
      { label: "Filete", value: "200–600 g" },
    ],
    tags: ["Entero", "Filete"],
  },
  {
    id: "pargo-guanapo",
    name: "Pargo guanapo",
    english: "Lane snapper",
    scientific: "Lutjanus synagris",
    category: "pargos",
    fishing: "Cordel",
    season: ALL_YEAR,
    products: [WHOLE],
    presentation: [IWP_10],
    sizes: [
      { label: "Entero", value: "200–329 g · más de 330 g" },
      { label: "Filete", value: "200–600 g" },
    ],
    tags: ["Entero"],
  },
  {
    id: "rabirrubia",
    name: "Rabirrubia",
    english: "Yellowtail snapper",
    scientific: "Ocyurus chrysurus",
    category: "pargos",
    fishing: "Cordel",
    season: ALL_YEAR,
    products: [WHOLE],
    presentation: [IWP_10],
    sizes: [
      { label: "Entero", value: "200–329 g · más de 330 g" },
      { label: "Rueda", value: "150–300 g" },
      { label: "Filete", value: "200–600 g" },
    ],
    tags: ["Entero"],
  },
  {
    id: "cunaro",
    name: "Cunaro",
    english: "B-liner snapper",
    scientific: "Rhomboplites aurorubens",
    category: "pargos",
    fishing: "Cordel",
    season: ALL_YEAR,
    products: [WHOLE],
    presentation: [IWP_10],
    sizes: [{ label: "Entero", value: "200–329 g · más de 300 g" }],
    tags: ["Entero"],
  },
  {
    id: "conoro",
    name: "Conoro",
    english: "Atlantic bigeye",
    scientific: "Priacanthus arenatus",
    category: "pescados",
    fishing: "Cordel",
    season: ALL_YEAR,
    products: [WHOLE, FILLET],
    presentation: [IWP_10],
    sizes: [
      { label: "Entero", value: "desde 370 g" },
      { label: "Filete", value: "desde 200 g" },
    ],
    tags: ["Entero", "Filete"],
  },
  {
    id: "peje-rata",
    name: "Peje rata",
    english: "Rainbow runner",
    scientific: "Elagatis bipinnulata",
    category: "pescados",
    fishing: "Cordel",
    season: ALL_YEAR,
    products: [FILLET],
    presentation: [IWP_10],
    sizes: [
      { label: "Filete", value: "desde 200 g" },
      { label: "Rueda", value: "150–350 g" },
    ],
    tags: ["Filete"],
  },
  {
    id: "cachua-perra",
    name: "Cachúa perra",
    english: "Leatherjacket",
    scientific: "Aluterus monoceros",
    category: "pescados",
    fishing: "Cordel, arpón",
    season: ALL_YEAR,
    products: ["Sin vísceras, cabeza ni cola (HGT), interfoliado", FILLET],
    presentation: [IQF_10],
    sizes: [{ label: "Filete", value: "desde 200 g" }],
    tags: ["HGT", "Filete"],
  },
  {
    id: "carite",
    name: "Carite",
    english: "King fish",
    scientific: "Scomberomorus cavalla",
    category: "pescados",
    fishing: "Anzuelo",
    season: ALL_YEAR,
    products: ["Entero congelado sin vísceras", "Sin vísceras, cortado en ruedas"],
    presentation: [IWP_10],
    sizes: [{ label: "Rueda", value: "desde 160 g" }],
    tags: ["Entero", "Rueda"],
  },
  {
    id: "sierra-canalera",
    name: "Sierra canalera",
    english: "Wahoo",
    scientific: "Acanthocybium solandri",
    category: "pescados",
    fishing: "Anzuelo",
    season: ALL_YEAR,
    products: ["Entero congelado sin vísceras", "Sin vísceras, cortado en ruedas"],
    presentation: [IWP_10],
    sizes: [{ label: "Rueda", value: "desde 160 g" }],
    tags: ["Entero", "Rueda"],
  },
  {
    id: "dorado",
    name: "Dorado",
    english: "Mahi mahi",
    scientific: "Coryphaena hippurus",
    category: "pescados",
    fishing: "Cordel",
    season: ALL_YEAR,
    products: [FILLET, "Sin vísceras, cortado en ruedas"],
    presentation: [IQF_10],
    sizes: [
      { label: "Filete", value: "desde 400 g" },
      { label: "Rueda", value: "desde 160 g" },
    ],
    tags: ["Filete", "Rueda"],
  },
  {
    id: "pez-leon",
    name: "Pez león",
    english: "Lionfish",
    scientific: "Pterois volitans",
    category: "pescados",
    fishing: "Cordel",
    season: ALL_YEAR,
    products: [WHOLE, FILLET],
    presentation: [IWP_10],
    sizes: [
      { label: "Entero", value: "más de 450 g" },
      { label: "Filete", value: "120–220 g" },
    ],
    tags: ["Entero", "Filete"],
  },
  {
    id: "langosta",
    name: "Langosta",
    english: "Spiny lobster",
    scientific: "Panulirus argus",
    category: "mariscos",
    fishing: "Nasas / buceo a pulmón",
    season: "1 de octubre al 31 de enero",
    seasonShort: "oct – ene",
    products: ["Langosta entera congelada", "Cola de langosta congelada"],
    presentation: [IWP_10],
    sizes: [
      { label: "Entera", value: "350–1.200 g" },
      { label: "Cola", value: "450–1.000 g" },
    ],
    tags: ["Entera", "Cola"],
  },
  {
    id: "pulpo",
    name: "Pulpo",
    english: "Octopus",
    scientific: "Octopus vulgaris",
    category: "mariscos",
    fishing: "Nasas / buceo a pulmón",
    season: "1 de julio al 31 de diciembre",
    seasonShort: "jul – dic",
    products: ["Pulpo entero congelado sin vísceras"],
    presentation: [
      "Bloque de 10 kg en caja máster de cartón de 20 kg",
      "IQF en forma de flor, caja máster de cartón de 10 kg",
    ],
    sizes: [{ label: "Entero", value: "350–1.200 g" }],
    tags: ["Entero", "Bloque", "IQF flor"],
  },
];

export const categoryLabels: Record<Category, string> = {
  pargos: "Pargos",
  pescados: "Otros pescados",
  mariscos: "Mariscos",
};

export const featuredIds = ["pargo-rojo", "dorado", "langosta", "pulpo"];

export function productImage(id: string) {
  return `/productos/${id}.jpg`;
}
