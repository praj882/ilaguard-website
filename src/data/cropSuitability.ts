// src/data/cropSuitability.ts

// ============================================================
// TYPES
// ============================================================

export type SuitabilityLevel =
  | "high"
  | "medium"
  | "low";

export type CropLocationRule = {
  cropId: string;

  /**
   * Region codes.
   *
   * Format:
   * "stateId:districtId"
   *
   * Examples:
   * "01:05" = Bihar + Begusarai
   * "01:09" = Bihar + Darbhanga
   * "01:23" = Bihar + Muzaffarpur
   *
   * If empty, the rule applies to all regions.
   */
  regionCodes?: string[];

  /**
   * Base suitability for this location rule.
   */
  suitability?: SuitabilityLevel;

  /**
   * Optional region-specific overrides.
   *
   * Useful when reliable district-level
   * agricultural data is available.
   */
  regionCodesOverrides?: {
    regionCodes: string[];

    suitability: SuitabilityLevel;
  }[];
};

// ============================================================
// CROP LOCATION SUITABILITY
// ============================================================

export const CROP_SUITABILITY: CropLocationRule[] = [
  // ============================================================
  // BRINJAL / BAINGAN
  // ============================================================
  {
    cropId: "brinjal",

    /**
     * Major brinjal cultivation regions.
     *
     * 01 = Bihar
     *
     * 01:05 = Begusarai
     * 01:09 = Darbhanga
     * 01:23 = Muzaffarpur
     * 01:26 = Patna
     * 01:37 = Vaishali
     */
    regionCodes: [
      "01:05",
      "01:09",
      "01:23",
      "01:26",
      "01:37",
    ],

    regionCodesOverrides: [
      {
        regionCodes: [
          "01:05",
          "01:09",
          "01:23",
          "01:26",
          "01:37",
        ],

        suitability: "high",
      },
    ],
  },

  /**
   * Bihar-wide fallback for brinjal.
   *
   * This is deliberately separate from the
   * region-specific rule so the recommendation
   * engine can prefer the region-specific rule.
   */
  {
    cropId: "brinjal",

    regionCodes: [],

    suitability: "medium",
  },

  // ============================================================
  // OKRA / BHINDI
  // ============================================================
  {
    cropId: "okra",

    /**
     * Bihar-wide rule.
     *
     * Region-specific suitability can be
     * added later when reliable data is available.
     */
    regionCodes: [],

    suitability: "medium",
  },

  // ============================================================
  // TOMATO / TAMATAR
  // ============================================================
  {
    cropId: "tomato",

    /**
     * Bihar-wide rule.
     *
     * Region-specific rules can be added later.
     */
    regionCodes: [],

    suitability: "medium",
  },

  // ============================================================
  // CAULIFLOWER / PHOOLGOBHI
  // ============================================================
  {
    cropId: "cauliflower",

    /**
     * Bihar-wide rule.
     */
    regionCodes: [],

    suitability: "medium",
  },

  // ============================================================
  // SPINACH / PALAK
  // ============================================================
  {
    cropId: "spinach",

    /**
     * Bihar-wide rule.
     *
     * Region-specific suitability can be
     * added later.
     */
    regionCodes: [],

    suitability: "medium",
  },

  // ============================================================
  // CORIANDER / DHANIYA
  // ============================================================
  {
    cropId: "coriander",

    /**
     * Bihar-wide rule.
     *
     * Region-specific suitability can be
     * added later.
     */
    regionCodes: [],

    suitability: "medium",
  },
  // ============================================================
  // Fenugreek / मेथी
  // ============================================================
  {
    cropId: "fenugreek",

    /**
     * Bihar-wide rule.
     *
     * Region-specific suitability can be
     * added later.
     */
    regionCodes: [],

    suitability: "medium",
  },
  {
    cropId: "fenugreek",

    /**
     * Major brinjal cultivation regions.
     *
     * 01 = Bihar
     *
     * 01:05 = Begusarai
     * 01:09 = Darbhanga
     * 01:23 = Muzaffarpur
     * 01:26 = Patna
     * 01:37 = Vaishali
     */
    regionCodes: [
      "01:30",
    ],

    regionCodesOverrides: [
      {
        regionCodes: [
          "01:30",
        ],

        suitability: "high",
      },
    ],
  },
];