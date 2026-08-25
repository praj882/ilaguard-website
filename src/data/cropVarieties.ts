// src/data/cropVarieties.ts

// ============================================================
// TYPES
// ============================================================

export type VarietySuitability =
  | "high"
  | "medium"
  | "low";

export type CropVariety = {
  /**
   * Unique variety ID.
   *
   * Example:
   * "tomato-arka-rakshak"
   */
  varietyId: string;

  /**
   * Crop ID from crops.ts
   *
   * Example:
   * "tomato"
   */
  cropId: string;

  /**
   * Variety name in English.
   */
  name: string;

  /**
   * Variety name in Hindi.
   */
  nameHindi: string;

  /**
   * Region codes where this variety
   * is specifically recommended.
   *
   * Format:
   * "stateId:districtId"
   *
   * Example:
   * "01:37" = Bihar + Vaishali
   *
   * Empty array means Bihar-wide /
   * general recommendation.
   */
  regionCodes?: string[];

  /**
   * Suitable sowing / transplanting window.
   *
   * Month numbers:
   *
   * 1  = January
   * 2  = February
   * 3  = March
   * ...
   * 12 = December
   */
  startMonth: number;

  endMonth: number;

  /**
   * Variety suitability level.
   */
  suitability: VarietySuitability;

  /**
   * Optional short description.
   */
  notes?: string;
};

// ============================================================
// CROP VARIETIES
// ============================================================

export const CROP_VARIETIES: CropVariety[] = [

  // ============================================================
  // TOMATO
  // ============================================================

  {
    varietyId: "tomato-arka-rakshak",

    cropId: "tomato",

    name: "Arka Rakshak",

    nameHindi: "अर्का रक्षक",

    regionCodes: [],

    startMonth: 9,
    endMonth: 11,

    suitability: "high",

    notes:
      "Suitable for commercial tomato cultivation and widely used for open-field production.",
  },

  {
    varietyId: "tomato-arka-vikas",

    cropId: "tomato",

    name: "Arka Vikas",

    nameHindi: "अर्का विकास",

    regionCodes: [],

    startMonth: 9,
    endMonth: 11,

    suitability: "high",

    notes:
      "Suitable for open-field tomato cultivation.",
  },

  {
    varietyId: "tomato-pusa-ruby",

    cropId: "tomato",

    name: "Pusa Ruby",

    nameHindi: "पूसा रूबी",

    regionCodes: [],

    startMonth: 9,
    endMonth: 11,

    suitability: "medium",

    notes:
      "Traditional tomato variety suitable for open-field cultivation.",
  },

  // ============================================================
  // CAULIFLOWER
  // ============================================================

  {
    varietyId: "cauliflower-pusa-early-synthetic",

    cropId: "cauliflower",

    name: "Pusa Early Synthetic",

    nameHindi: "पूसा अर्ली सिंथेटिक",

    regionCodes: [],

    startMonth: 8,
    endMonth: 9,

    suitability: "high",

    notes:
      "Early cauliflower variety suitable for early-season cultivation.",
  },

  {
    varietyId: "cauliflower-pusa-snowball-16",

    cropId: "cauliflower",

    name: "Pusa Snowball-16",

    nameHindi: "पूसा स्नोबॉल-16",

    regionCodes: [],

    startMonth: 10,
    endMonth: 11,

    suitability: "high",

    notes:
      "Suitable for mid to late cauliflower production.",
  },

  {
    varietyId: "cauliflower-pusa-snowball-k1",

    cropId: "cauliflower",

    name: "Pusa Snowball K-1",

    nameHindi: "पूसा स्नोबॉल K-1",

    regionCodes: [],

    startMonth: 10,
    endMonth: 11,

    suitability: "medium",

    notes:
      "Suitable for cool-season cauliflower cultivation.",
  },

  // ============================================================
  // BRINJAL
  // ============================================================

  {
    varietyId: "brinjal-pusa-purple-long",

    cropId: "brinjal",

    name: "Pusa Purple Long",

    nameHindi: "पूसा पर्पल लॉन्ग",

    regionCodes: [],

    startMonth: 7,
    endMonth: 9,

    suitability: "high",

    notes:
      "Suitable for long purple brinjal production.",
  },

  {
    varietyId: "brinjal-pusa-hybrid-6",

    cropId: "brinjal",

    name: "Pusa Hybrid-6",

    nameHindi: "पूसा हाइब्रिड-6",

    regionCodes: [],

    startMonth: 7,
    endMonth: 9,

    suitability: "high",

    notes:
      "Hybrid brinjal suitable for commercial cultivation.",
  },

  {
    varietyId: "brinjal-pusa-purple-round",

    cropId: "brinjal",

    name: "Pusa Purple Round",

    nameHindi: "पूसा पर्पल राउंड",

    regionCodes: [],

    startMonth: 7,
    endMonth: 9,

    suitability: "medium",

    notes:
      "Suitable for round purple brinjal production.",
  },

  // ============================================================
  // OKRA / BHINDI
  // ============================================================

  {
    varietyId: "okra-pusa-sawani",

    cropId: "okra",

    name: "Pusa Sawani",

    nameHindi: "पूसा सावनी",

    regionCodes: [],

    startMonth: 2,
    endMonth: 7,

    suitability: "high",

    notes:
      "Popular okra variety suitable for warm-season cultivation.",
  },

  {
    varietyId: "okra-pusa-makhmali",

    cropId: "okra",

    name: "Pusa Makhmali",

    nameHindi: "पूसा मखमली",

    regionCodes: [],

    startMonth: 2,
    endMonth: 7,

    suitability: "medium",

    notes:
      "Suitable for warm-season okra cultivation.",
  },

  // ============================================================
  // SPINACH / PALAK
  // ============================================================

  {
    varietyId: "spinach-all-green",

    cropId: "spinach",

    name: "All Green",

    nameHindi: "ऑल ग्रीन",

    regionCodes: [],

    startMonth: 9,
    endMonth: 2,

    suitability: "high",

    notes:
      "Suitable for leafy vegetable production during cooler months.",
  },

  // ============================================================
  // CORIANDER / DHANIYA
  // ============================================================

  {
    varietyId: "coriander-pusa-selection-1",

    cropId: "coriander",

    name: "Pusa Selection-1",

    nameHindi: "पूसा सेलेक्शन-1",

    regionCodes: [],

    startMonth: 9,
    endMonth: 2,

    suitability: "high",

    notes:
      "Suitable for coriander leaf and seed production.",
  },

  // ============================================================
  // RADISH / MOOLI
  // ============================================================

  {
    varietyId: "radish-pusa-chetki",

    cropId: "radish",

    name: "Pusa Chetki",

    nameHindi: "पूसा चेतकी",

    regionCodes: [],

    startMonth: 3,
    endMonth: 8,

    suitability: "high",

    notes:
      "Suitable for relatively warmer-season radish cultivation.",
  },

  {
    varietyId: "radish-pusa-himani",

    cropId: "radish",

    name: "Pusa Himani",

    nameHindi: "पूसा हिमानी",

    regionCodes: [],

    startMonth: 10,
    endMonth: 1,

    suitability: "high",

    notes:
      "Suitable for cool-season radish cultivation.",
  },

  // ============================================================
  // PEA / MATAR
  // ============================================================

  {
    varietyId: "pea-arikel",

    cropId: "pea",

    name: "Arkel",

    nameHindi: "आर्केल",

    regionCodes: [],

    startMonth: 10,
    endMonth: 11,

    suitability: "high",

    notes:
      "Early pea variety suitable for cool-season cultivation.",
  },

  {
    varietyId: "pea-azad-p1",

    cropId: "pea",

    name: "Azad P-1",

    nameHindi: "आजाद P-1",

    regionCodes: [],

    startMonth: 10,
    endMonth: 11,

    suitability: "medium",

    notes:
      "Suitable for field pea production during the cool season.",
  },

  // ============================================================
  // CARROT / GAJAR
  // ============================================================

  {
    varietyId: "carrot-pusa-kesar",

    cropId: "carrot",

    name: "Pusa Kesar",

    nameHindi: "पूसा केसर",

    regionCodes: [],

    startMonth: 9,
    endMonth: 11,

    suitability: "high",

    notes:
      "Red carrot variety suitable for cool-season cultivation.",
  },

  // ============================================================
  // CUCUMBER / KHIRA
  // ============================================================

  {
    varietyId: "cucumber-pusa-sanyog",

    cropId: "cucumber",

    name: "Pusa Sanyog",

    nameHindi: "पूसा संयोग",

    regionCodes: [],

    startMonth: 2,
    endMonth: 4,

    suitability: "high",

    notes:
      "Suitable for spring and warm-season cucumber cultivation.",
  },

  // ============================================================
  // CHILLI / MIRCH
  // ============================================================

  {
    varietyId: "chilli-pusa-jwala",

    cropId: "chilli",

    name: "Pusa Jwala",

    nameHindi: "पूसा ज्वाला",

    regionCodes: [],

    startMonth: 6,
    endMonth: 8,

    suitability: "high",

    notes:
      "Popular chilli variety suitable for open-field cultivation.",
  },

  // ============================================================
  // BROCCOLI
  // ============================================================

  {
    varietyId: "broccoli-palamsamridhi",

    cropId: "broccoli",

    name: "Palam Samridhi",

    nameHindi: "पालम समृद्धि",

    regionCodes: [],

    startMonth: 9,
    endMonth: 11,

    suitability: "high",

    notes:
      "Suitable for cool-season broccoli production.",
  },

  // ============================================================
  // FENUGREEK / METHI
  // ============================================================

  {
    varietyId: "fenugreek-pusa-early-bunching",

    cropId: "fenugreek",

    name: "Pusa Early Bunching",

    nameHindi: "पूसा अर्ली बंचिंग",

    regionCodes: [],

    startMonth: 9,
    endMonth: 12,

    suitability: "high",

    notes:
      "Suitable for leafy fenugreek production during cooler months.",
  },
  {
  varietyId: "Rajendra Kanti",

  cropId: "fenugreek",

  name: "Rajendra Kanti",

  nameHindi: "राजेंद्र कांति",

  regionCodes: [
          "01:30",
        ],

  startMonth: 10,
  endMonth: 11,

  suitability: "high",

  notes:
    "Suitable for leafy fenugreek production during cooler months.",
 },
];