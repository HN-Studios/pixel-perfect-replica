import { es } from "./es";
import type { Dict } from "./es";

export type Locale = "es" | "fr" | "en";

export const locales: { id: Locale; label: string; available: boolean }[] = [
  { id: "es", label: "ES", available: true },
  { id: "fr", label: "FR", available: false },
  { id: "en", label: "EN", available: false },
];

// Al traducir, añadir aquí fr y en.
const dictionaries: Partial<Record<Locale, Dict>> = { es };

export function getDict(locale: Locale = "es"): Dict {
  return dictionaries[locale] ?? es;
}

export { es };
export type { Dict };
