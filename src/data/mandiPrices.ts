export type MandiPrice = {
  mandiId: string;
  cropId: string;

  min: number;
  modal: number;
  max: number;

  unit: "quintal" | "kg";

  updatedAt: string;
};

/*
 * ================================================================
 * MOCK MANDI PRICE DATA
 * ================================================================
 *
 * IMPORTANT:
 * These values are only for frontend development/testing.
 *
 * Do NOT present these as live market prices.
 *
 * Later this file can be replaced by API data.
 */

export const MANDI_PRICES: MandiPrice[] = [
  // ============================================================
  // DALSINGHSARAI
  // ============================================================

  {
    mandiId: "dalsinghsarai",
    cropId: "tomato",
    min: 2500,
    modal: 3200,
    max: 3800,
    unit: "quintal",
    updatedAt: "2026-08-20",
  },

  {
    mandiId: "dalsinghsarai",
    cropId: "broccoli",
    min: 3000,
    modal: 3800,
    max: 4500,
    unit: "quintal",
    updatedAt: "2026-08-20",
  },

  {
    mandiId: "dalsinghsarai",
    cropId: "cauliflower",
    min: 1800,
    modal: 2400,
    max: 3000,
    unit: "quintal",
    updatedAt: "2026-08-20",
  },

  {
    mandiId: "dalsinghsarai",
    cropId: "radish",
    min: 1200,
    modal: 1700,
    max: 2200,
    unit: "quintal",
    updatedAt: "2026-08-20",
  },

  {
    mandiId: "dalsinghsarai",
    cropId: "carrot",
    min: 1800,
    modal: 2500,
    max: 3200,
    unit: "quintal",
    updatedAt: "2026-08-20",
  },

  // ============================================================
  // SAMASTIPUR
  // ============================================================

  {
    mandiId: "samastipur",
    cropId: "tomato",
    min: 2400,
    modal: 3100,
    max: 3700,
    unit: "quintal",
    updatedAt: "2026-08-20",
  },

  {
    mandiId: "samastipur",
    cropId: "broccoli",
    min: 2800,
    modal: 3600,
    max: 4300,
    unit: "quintal",
    updatedAt: "2026-08-20",
  },

  // ============================================================
  // TAJPUR
  // ============================================================

  {
    mandiId: "tajpur",
    cropId: "tomato",
    min: 2600,
    modal: 3350,
    max: 3900,
    unit: "quintal",
    updatedAt: "2026-08-20",
  },

  {
    mandiId: "tajpur",
    cropId: "broccoli",
    min: 3200,
    modal: 4000,
    max: 4700,
    unit: "quintal",
    updatedAt: "2026-08-20",
  },

  // ============================================================
  // HAJIPUR
  // ============================================================

  {
    mandiId: "hajipur",
    cropId: "tomato",
    min: 2500,
    modal: 3300,
    max: 3900,
    unit: "quintal",
    updatedAt: "2026-08-20",
  },

  // ============================================================
  // MUZAFFARPUR
  // ============================================================

  {
    mandiId: "muzaffarpur",
    cropId: "tomato",
    min: 2600,
    modal: 3400,
    max: 4000,
    unit: "quintal",
    updatedAt: "2026-08-20",
  },

  // ============================================================
  // PATNA
  // ============================================================

  {
    mandiId: "patna",
    cropId: "tomato",
    min: 2800,
    modal: 3500,
    max: 4200,
    unit: "quintal",
    updatedAt: "2026-08-20",
  },

  // ============================================================
  // BEGUSARAI
  // ============================================================

  {
    mandiId: "begusarai",
    cropId: "tomato",
    min: 2400,
    modal: 3000,
    max: 3600,
    unit: "quintal",
    updatedAt: "2026-08-20",
  },
];

/**
 * Find price for a particular mandi + crop.
 */
export function getMandiPrice(
  mandiId: string,
  cropId: string
): MandiPrice | null {
  return (
    MANDI_PRICES.find(
      (price) =>
        price.mandiId === mandiId &&
        price.cropId === cropId
    ) ?? null
  );
}