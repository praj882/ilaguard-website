// ============================================================
// IlaGuard Labs
// Mandi API Mapping
//
// Purpose:
// Map data.gov.in mandi/market names to IlaGuard mandi IDs.
//
// IMPORTANT:
// - mandiId MUST match the ID used in src/data/mandis.ts
// - apiMarketNames contains names returned by data.gov.in
// - districtName MUST match the district name used by IlaGuard
//
// Source:
// data.gov.in
// Resource: Current Daily Price of Various Commodities
// from Various Markets (Mandi)
//
// Resource ID:
// 9ef84268-d588-465a-a308-a864a43d0070
// ============================================================


// ============================================================
// TYPES
// ============================================================

export type MandiApiMapping = {
  /**
   * IlaGuard internal mandi ID.
   *
   * This MUST match the `id` field in mandis.ts.
   */
  mandiId: string;

  /**
   * Market names that may be returned by data.gov.in.
   */
  apiMarketNames: string[];

  /**
   * IlaGuard district name.
   *
   * This MUST match the district name used in districts.ts.
   */
  districtName: string;
};


// ============================================================
// BIHAR MANDI API MAPPINGS
// ============================================================
//
// The API sometimes uses:
//
//   "Madhubani APMC"
//   "Supaul APMC"
//   "Raxaul APMC"
//
// while IlaGuard uses its own internal mandi IDs.
//
// Keep this mapping separate from mandis.ts so that:
//
// data.gov.in
//      ↓
// mandiApiMapping.ts
//      ↓
// IlaGuard mandiId
//      ↓
// Firebase
//
// ============================================================

export const MANDI_API_MAPPINGS: MandiApiMapping[] = [

  // ==========================================================
  // BHAGALPUR
  // ==========================================================

  {
    mandiId: "bihpur",

    apiMarketNames: [
      "Bihpur APMC",
      "Bihpur",
      "Bihpur Mandi",
    ],

    districtName: "Bhagalpur",
  },


  // ==========================================================
  // GAYA
  // ==========================================================

  {
    mandiId: "gaya",

    apiMarketNames: [
      "Gaya APMC",
      "Gaya",
      "Gaya Mandi",
    ],

    districtName: "Gaya",
  },


  // ==========================================================
  // MADHUBANI
  // ==========================================================

  {
    mandiId: "madhubani",

    apiMarketNames: [
      "Madhubani APMC",
      "Madhubani",
      "Madhubani Mandi",
    ],

    districtName: "Madhubani",
  },


  // ==========================================================
  // EAST CHAMPARAN
  // ==========================================================
  //
  // data.gov.in currently returns:
  //
  // "East Champaran/ Motihari"
  //
  // IlaGuard uses:
  //
  // "East Champaran"
  //
  // The districtName below is therefore the IlaGuard
  // district name, not the raw API district string.
  //
  // ==========================================================

  {
    mandiId: "raxaul",

    apiMarketNames: [
      "Raxaul APMC",
      "Raxaul",
      "Raxaul Mandi",
    ],

    districtName: "East Champaran",
  },


  // ==========================================================
  // SUPAUL
  // ==========================================================

  {
    mandiId: "supaul",

    apiMarketNames: [
      "Supaul APMC",
      "Supaul",
      "Supaul Mandi",
    ],

    districtName: "Supaul",
  },


  // ==========================================================
  // SUPAUL - TRIVENIGANJ
  // ==========================================================

  {
    mandiId: "triveniganj",

    apiMarketNames: [
      "Triveniganj APMC",
      "Triveniganj",
      "Triveniganj Mandi",
    ],

    districtName: "Supaul",
  },


  // ==========================================================
  // SUPAUL - BIRPUR
  // ==========================================================

  {
    mandiId: "birpur",

    apiMarketNames: [
      "Birpur APMC",
      "Birpur",
      "Birpur Mandi",
    ],

    districtName: "Supaul",
  },


  // ==========================================================
  // SAMASTIPUR
  // ==========================================================

  {
    mandiId: "dalsinghsarai",

    apiMarketNames: [
      "Dalsinghsarai",
      "Dalsinghsarai APMC",
      "Dalsinghsarai Mandi",
    ],

    districtName: "Samastipur",
  },


  // ==========================================================
  // SAMASTIPUR
  // ==========================================================

  {
    mandiId: "samastipur",

    apiMarketNames: [
      "Samastipur",
      "Samastipur APMC",
      "Samastipur Mandi",
    ],

    districtName: "Samastipur",
  },


  // ==========================================================
  // SAMASTIPUR - TAJPUR
  // ==========================================================

  {
    mandiId: "tajpur",

    apiMarketNames: [
      "Tajpur",
      "Tajpur APMC",
      "Tajpur Mandi",
    ],

    districtName: "Samastipur",
  },


  // ==========================================================
  // SAMASTIPUR - ROSERA
  // ==========================================================

  {
    mandiId: "rosera",

    apiMarketNames: [
      "Rosera",
      "Rosera APMC",
      "Rosera Mandi",
    ],

    districtName: "Samastipur",
  },


  // ==========================================================
  // KISHANGANJ - BAHADURGANJ
  // ==========================================================

  {
    mandiId: "bahadurganj",

    apiMarketNames: [
      "Bahadurganj",
      "Bahadurganj APMC",
      "Bahadurganj Mandi",
    ],

    districtName: "Kishanganj",
  },

];


// ============================================================
// CROP API MAPPING
// ============================================================
//
// This maps the commodity names returned by data.gov.in
// to IlaGuard crop IDs.
//
// IMPORTANT:
// cropId MUST match the ID used in src/data/crops.ts
//
// ============================================================

export type CropApiMapping = {
  /**
   * IlaGuard internal crop ID.
   */
  cropId: string;

  /**
   * Commodity names returned by data.gov.in.
   */
  apiCommodityNames: string[];
};


export const CROP_API_MAPPINGS: CropApiMapping[] = [

  // ==========================================================
  // TOMATO
  // ==========================================================

  {
    cropId: "tomato",

    apiCommodityNames: [
      "Tomato",
    ],
  },


  // ==========================================================
  // POTATO
  // ==========================================================

  {
    cropId: "potato",

    apiCommodityNames: [
      "Potato",
    ],
  },


  // ==========================================================
  // CAULIFLOWER
  // ==========================================================

  {
    cropId: "cauliflower",

    apiCommodityNames: [
      "Cauliflower",
    ],
  },


  // ==========================================================
  // CABBAGE
  // ==========================================================

  {
    cropId: "cabbage",

    apiCommodityNames: [
      "Cabbage",
    ],
  },


  // ==========================================================
  // BRINJAL
  // ==========================================================

  {
    cropId: "brinjal",

    apiCommodityNames: [
      "Brinjal",
    ],
  },


  // ==========================================================
  // CHILLI
  // ==========================================================

  {
    cropId: "chilli",

    apiCommodityNames: [
      "Chilli",
      "Green Chilli",
      "Green Chilli",
    ],
  },


  // ==========================================================
  // ONION
  // ==========================================================

  {
    cropId: "onion",

    apiCommodityNames: [
      "Onion",
    ],
  },


  // ==========================================================
  // BHINDI
  // ==========================================================

  {
    cropId: "bhindi",

    apiCommodityNames: [
      "Bhindi(Ladies Finger)",
      "Bhindi (Ladies Finger)",
      "Bhindi",
    ],
  },


  // ==========================================================
  // BITTER GOURD
  // ==========================================================

  {
    cropId: "bitter-gourd",

    apiCommodityNames: [
      "Bitter gourd",
      "Bitter Gourd",
    ],
  },


  // ==========================================================
  // BOTTLE GOURD
  // ==========================================================

  {
    cropId: "bottle-gourd",

    apiCommodityNames: [
      "Bottle gourd",
      "Bottle Gourd",
    ],
  },


  // ==========================================================
  // POINTED GOURD / PARVAL
  // ==========================================================

  {
    cropId: "pointed-gourd",

    apiCommodityNames: [
      "Pointed gourd(Parval)",
      "Pointed gourd (Parval)",
      "Pointed Gourd(Parval)",
      "Pointed Gourd (Parval)",
      "Parval",
    ],
  },

];