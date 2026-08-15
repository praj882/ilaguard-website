// src/data/cropSuitability.ts

export type CropLocationRule = {
  cropId: string;

  stateId: number;

  /**
   * If empty, the rule applies to all districts
   * within the state.
   */
  districtIds?: number[];

  /**
   * Optional district-specific override.
   *
   * Useful later when we have reliable district-level
   * agricultural data.
   */
  districtOverrides?: {
    districtIds: number[];

    suitability: "high" | "medium" | "low";
  }[];
};

export const CROP_SUITABILITY: CropLocationRule[] = [
  // ============================================================
  // BRINJAL / BAINGAN
  // ============================================================
  {
    cropId: "brinjal",

    stateId: 1,

    /**
     * Major brinjal cultivation districts identified
     * from Bihar horticulture information.
     *
     * 5  = Begusarai
     * 9  = Darbhanga
     * 23 = Muzaffarpur
     * 26 = Patna
     * 37 = Vaishali
     */
    districtIds: [5, 9, 23, 26, 37],

    districtOverrides: [
      {
        districtIds: [5, 9, 23, 26, 37],
        suitability: "high",
      },
    ],
  },

  /**
   * Bihar-wide fallback for brinjal.
   *
   * This is deliberately separate from the major-district
   * rule so the recommendation engine can prefer a specific
   * district rule when one exists.
   */
  {
    cropId: "brinjal",
    stateId: 1,

    districtIds: [],
  },

  // ============================================================
  // OKRA / BHINDI
  // ============================================================
  {
    cropId: "okra",

    stateId: 1,

    /**
     * No reliable district-level sowing priority is being
     * assumed yet.
     *
     * Therefore okra is currently treated as Bihar-wide.
     */
    districtIds: [],
  },

  // ============================================================
  // TOMATO / TAMATAR
  // ============================================================
  {
    cropId: "tomato",

    stateId: 1,

    /**
     * Bihar-wide rule.
     *
     * District-specific rules can be added later when
     * reliable district-level data is available.
     */
    districtIds: [],
  },

  // ============================================================
  // CAULIFLOWER / PHOOLGOBHI
  // ============================================================
  {
    cropId: "cauliflower",

    stateId: 1,

    /**
     * Bihar-wide rule.
     */
    districtIds: [],
  },
  // ============================================================
	// SPINACH / PALAK
	// ============================================================
	{
	  cropId: "spinach",
	  stateId: 1,

	  // Bihar-wide rule.
	  // District-specific suitability can be added later.
	  districtIds: [],
	},
	// ============================================================
	// CORIANDER / DHANIYA
	// ============================================================
	{
	  cropId: "coriander",
	  stateId: 1,

	  // Bihar-wide rule.
	  // District-specific data can be added later.
	  districtIds: [],
	},
];