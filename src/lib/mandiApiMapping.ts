// src/lib/mandiApiMapping.ts

// ============================================================
// IlaGuard ↔ data.gov.in mapping
// ============================================================

export type MandiApiMapping = {
  mandiId: string;

  // Known market names returned by data.gov.in.
  apiMarketNames: string[];

  districtName?: string;
};

export type CropApiMapping = {
  cropId: string;

  // Known commodity names returned by data.gov.in.
  apiCommodityNames: string[];
};

// ============================================================
// MANDI MAPPINGS
// ============================================================
//
// mandiId MUST exactly match the ID used by IlaGuard/Firebase.
//
// ============================================================

export const MANDI_API_MAPPINGS: MandiApiMapping[] = [

  // ==========================================================
  // SAMASTIPUR DISTRICT
  // ==========================================================

  {
    mandiId: "dalsingsarai",

    apiMarketNames: [
      "Dalsinghsarai",
      "Dalsingsarai",
      "Dalsinghsarai APMC",
      "Dalsingsarai Mandi",
      "Dalsinghsarai Mandi",
    ],

    districtName:
      "Samastipur",
  },

  {
    mandiId: "samastipur",

    apiMarketNames: [
      "Samastipur APMC",
      "Samastipur",
      "Samastipur Mandi",
    ],

    districtName:
      "Samastipur",
  },

  {
    mandiId: "tajpur",

    apiMarketNames: [
      "Tajpur APMC",
      "Tajpur",
      "Tajpur Mandi",
    ],

    districtName:
      "Samastipur",
  },

  {
    mandiId: "rosera",

    apiMarketNames: [
      "Rosera APMC",
      "Rosera",
      "Rosera Mandi",
    ],

    districtName:
      "Samastipur",
  },
  
  {
    mandiId: "bahadurganj",

    apiMarketNames: [
      "Bahadurganj APMC",
      "Bahadurganj",
      "Bahadurganj Mandi",
    ],

    districtName:
      "Kishanganj",
  },
  
  {
    mandiId: "supaul",

    apiMarketNames: [
      "Supaul APMC",
      "Supaul",
      "Supaul Mandi",
    ],

    districtName:
      "Supaul",
  },
];

// ============================================================
// CROP MAPPINGS
// ============================================================

export const CROP_API_MAPPINGS: CropApiMapping[] = [

  {
    cropId: "tomato",

    apiCommodityNames: [
      "Tomato",
      "Tomato Local",
    ],
  },

  {
    cropId: "potato",

    apiCommodityNames: [
      "Potato",
      "Potato Local",
    ],
  },

  {
    cropId: "cauliflower",

    apiCommodityNames: [
      "Cauliflower",
    ],
  },

  {
    cropId: "cabbage",

    apiCommodityNames: [
      "Cabbage",
    ],
  },

  {
    cropId: "brinjal",

    apiCommodityNames: [
      "Brinjal",
      "Brinjal (Round)",
      "Brinjal (Long)",
    ],
  },

  {
    cropId: "chilli",

    apiCommodityNames: [
      "Green Chilli",
      "Chilli",
      "Chillies",
    ],
  },

  {
    cropId: "onion",

    apiCommodityNames: [
      "Onion",
      "Onion Green",
    ],
  },
];