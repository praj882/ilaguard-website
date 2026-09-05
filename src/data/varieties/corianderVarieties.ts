// src/data/varieties/corianderVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL SOURCES
// ============================================================

const ICAR_AICRPS_LEAF_TRIAL =
  "https://aicrps.res.in/AICRPS/AR/AR1996-97.pdf";

const ICAR_AICRPS_ANNUAL_2011_12 =
  "https://aicrps.res.in/AICRPS/AR/AR2011-12.pdf";

const ICAR_AICRPS_HISAR_BHOOMIT =
  "https://aicrps.res.in/AICRPS/PRO/PRO19.pdf";

const ICAR_AICRPS_VARIETIES_2024 =
  "https://www.aicrps.res.in/resources/Varieties/AICRPS%202024.pdf";

const ICAR_RABI_AGRO_ADVISORY =
  "https://icar.gov.in/sites/default/files/2022-09/Rabi-Agro-Advisory-2021-22_0.pdf";

const RPCAU_SPICES =
  "https://rpcau.ac.in/spices-seed-available/";

const HAU_VARIETY_DETAILS =
  "https://hau.ac.in/public/pages-pdf/1621491515.pdf";

const TNAU_CROP_VARIETIES =
  "https://tnau.ac.in/site/research/wp-content/uploads/sites/60/2025/03/Crop-Varieties-Released-1921-2025-1.pdf";

// ============================================================
// MONTHS
// ============================================================

/**
 * ICAR states that coriander can be grown throughout the year
 * for leaf purpose.
 *
 * Therefore, for the leaf-purpose advisor we allow all months
 * at crop level. Variety-specific regional limitations are
 * handled separately through suitability / regionCodes.
 */

// ============================================================
// CORIANDER – LEAF PURPOSE
// ============================================================

export const CORIANDER_VARIETIES: CropVariety[] = [
  // ============================================================
  // 1. PANT HARITIMA
  // ============================================================

  {
    varietyId: "pant-haritma",
    cropId: "coriander",

    name: "Pant Haritima",
    nameHindi: "पंत हरितमा",
    type: "Variety",

    purpose: "leaf",

    regionCodes: [],
    biharRecommended: true,

    sowingMonths: [
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      1,
      2,
      3,
      4,
      5,
    ],

    suitability: "high",

    maturityDays: {
      min: 140,
      max: 150,
    },

    yield: {
      min: 20,
      max: 22,
      unit: "q/ha",
    },

    resistance: [
      "Highly resistant to stem gall disease",
      "Highly resistant to powdery mildew",
      "Highly resistant to wilt disease",
    ],

    notes:
      "हरी पत्ती के लिए प्रमुख धनिया किस्म। ICAR-AICRPS के तुलनात्मक परीक्षण में इसे बेहतर हरी पत्ती उत्पादन वाली किस्म पाया गया। पत्ती उत्पादन के लिए बिहार में प्राथमिक विकल्प।",

    source: {
      organization: "ICAR-AICRPS",
      title:
        "Comparative Yield Trial of Leafy Type Coriander",
      url: ICAR_AICRPS_LEAF_TRIAL,
      scope: "National",
    },
  },

  // ============================================================
  // 2. RAJENDRA SWATI
  // ============================================================

  {
    varietyId: "rajendra-swati",
    cropId: "coriander",

    name: "Rajendra Swati",
    nameHindi: "राजेंद्र स्वाती",
    type: "Variety",

    purpose: "leaf",

    regionCodes: ["01"],
    biharRecommended: true,

    sowingMonths: [
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      1,
      2,
      3,
      4,
      5,
    ],

    suitability: "high",

    maturityDays: {
      min: 120,
      max: 130,
    },

    yield: {
      min: 16,
      max: 18,
      unit: "q/ha",
    },

    resistance: [
      "Powdery mildew resistance",
      "Wilt resistance",
    ],

    notes:
      "बिहार के लिए महत्वपूर्ण धनिया किस्म। Dholi केंद्र के ICAR-AICRPS परीक्षणों में हरी पत्ती उत्पादन के लिए check variety के रूप में उपयोग हुई।",

    source: {
      organization:
        "Dr. Rajendra Prasad Central Agricultural University",
      title:
        "Spices Seed Available – Coriander Rajendra Swati",
      url: RPCAU_SPICES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 3. HISAR BHOOMIT
  // ============================================================

  {
    varietyId: "hisar-bhoomit",
    cropId: "coriander",

    name: "Hisar Bhoomit",
    nameHindi: "हिसार भूमित",
    type: "Variety",

    purpose: "leaf",

    regionCodes: [],
    biharRecommended: true,

    sowingMonths: [
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      1,
      2,
      3,
      4,
      5,
    ],

    suitability: "high",

    yield: {
      min: 16,
      max: 18,
      unit: "q/ha",
    },

    resistance: [
      "Stem gall disease resistance",
    ],

    notes:
      "हरी पत्ती उत्पादन के उद्देश्य से विकसित किस्म। आधिकारिक release proposal में इसे सभी coriander-growing areas में green-leaf production के लिए उपयुक्त बताया गया है।",

    source: {
      organization: "ICAR-AICRPS / CCS HAU",
      title:
        "Proposal for Release – Hisar Bhoomit",
      url: ICAR_AICRPS_HISAR_BHOOMIT,
      scope: "National",
    },
  },

  // ============================================================
  // 4. CO-5 (CS-38)
  // ============================================================

  {
    varietyId: "co-5",
    cropId: "coriander",

    name: "CO-5",
    nameHindi: "सीओ-5",
    type: "Variety",

    purpose: "leaf",

    regionCodes: [],
    biharRecommended: false,

    sowingMonths: [
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      1,
      2,
      3,
      4,
      5,
    ],

    suitability: "low",

    maturityDays: {
      min: 35,
      max: 55,
    },

    yield: {
      min: 5.457,
      max: 5.457,
      unit: "t/ha",
    },

    notes:
      "पत्तेदार धनिया के लिए विकसित किस्म। 35–55 दिनों में पत्ती की कटाई और multi-cut/multi-clipping के लिए उपयुक्त। आधिकारिक स्रोत में इसका क्षेत्र Tamil Nadu बताया गया है, इसलिए बिहार के लिए प्राथमिक किस्म नहीं है।",

    source: {
      organization: "ICAR-AICRPS / TNAU",
      title:
        "AICRPS Variety Catalogue – CO-5 (CS-38)",
      url: ICAR_AICRPS_VARIETIES_2024,
      scope: "Other",
    },
  },
];