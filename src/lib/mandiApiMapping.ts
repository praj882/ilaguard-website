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
  /**
   * Optional district names/aliases used by data.gov.in
   */
  apiDistrictNames?: string[];
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
  // ------------------------------------------------------------
  // PATNA
  // ------------------------------------------------------------
  {
    mandiId: "musallahpur",
    apiMarketNames: [
      "Musallahpur",
      "Musallahpur APMC",
    ],
    districtName: "Patna",
  },
  {
    mandiId: "fatuha",
    apiMarketNames: [
      "Fatuha",
      "Fatuha APMC",
    ],
    districtName: "Patna",
  },
  {
    mandiId: "danapur",
    apiMarketNames: [
      "Danapur",
      "Danapur APMC",
    ],
    districtName: "Patna",
  },
  {
    mandiId: "bihta",
    apiMarketNames: [
      "Bihta",
      "Bihta APMC",
    ],
    districtName: "Patna",
  },
  {
    mandiId: "barh",
    apiMarketNames: [
      "Barh",
      "Barh APMC",
    ],
    districtName: "Patna",
  },
  {
    mandiId: "mokama",
    apiMarketNames: [
      "Mokama",
      "Mokama APMC",
    ],
    districtName: "Patna",
  },
  
  // ------------------------------------------------------------
  // Siwan
  // ------------------------------------------------------------
  {
    mandiId: "maharjganj",
    apiMarketNames: [
      "Maharjganj",
      "Maharjganj APMC",
    ],
    districtName: "Siwan",
  },
  
  // ------------------------------------------------------------
  // NALANDA
  // ------------------------------------------------------------
  {
    mandiId: "bihar-sharif",
    apiMarketNames: [
      "Bihar Sharif",
      "Bihar Sharif APMC",
    ],
    districtName: "Nalanda",
  },
  
  // ------------------------------------------------------------
  // Sheikhpura
  // ------------------------------------------------------------
  {
    mandiId: "sheikhpura",
    apiMarketNames: [
      "Sheikhpura",
      "Sheikhpura APMC",
	  "Shekhpura APMC",
    ],
    districtName: "Sheikhpura",
  },
  {
    mandiId: "barbigha",
    apiMarketNames: [
      "Barbigha",
      "Barbigha APMC",
    ],
    districtName: "Sheikhpura",
  },
  
  // ------------------------------------------------------------
  // JEHANABAD
  // ------------------------------------------------------------

  {
    mandiId: "jehanabad",
    apiMarketNames: [
      "Jehanabad",
      "Jehanabad APMC",
    ],
    districtName: "Jehanabad",
  },

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
  {
    mandiId: "bhagalpur",
    apiMarketNames: [
      "Bhagalpur",
      "Bhagalpur APMC",
    ],
    districtName: "Bhagalpur",
  },

  {
    mandiId: "naugachhia",
    apiMarketNames: [
      "Naugachhia",
      "Naugachhia APMC",
    ],
    districtName: "Bhagalpur",
  },
  // ------------------------------------------------------------
  // MUNGER
  // ------------------------------------------------------------

  {
    mandiId: "munger",
    apiMarketNames: [
      "Munger",
      "Munger APMC",
    ],
    districtName: "Munger",
  },

  // ------------------------------------------------------------
  // LAKHISARAI
  // ------------------------------------------------------------

  {
    mandiId: "lakhisarai",
    apiMarketNames: [
      "Lakhisarai",
      "Lakhisarai APMC",
    ],
    districtName: "Lakhisarai",
  },
  // ------------------------------------------------------------
  // MADHEPURA
  // ------------------------------------------------------------

  {
    mandiId: "singheshwar-sthan",
    apiMarketNames: [
      "Singheshwar Sthan",
      "Singheshwar Sthan APMC",
      "Singheshwar",
      "Singheshwar APMC",
    ],
    districtName: "Madhepura",
  },

  {
    mandiId: "murliganj",
    apiMarketNames: [
      "Murliganj",
      "Murliganj APMC",
    ],
    districtName: "Madhepura",
  },

  {
    mandiId: "bihariganj",
    apiMarketNames: [
      "Bihariganj",
      "Bihariganj APMC",
    ],
    districtName: "Madhepura",
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
  {
    mandiId: "tekari",

    apiMarketNames: [
      "Tekari APMC",
      "Tekari",
      "Tekari Mandi",
    ],

    districtName: "Gaya",
  },
  // ------------------------------------------------------------
  // AURANGABAD
  // ------------------------------------------------------------

  {
    mandiId: "daud-nagar",
    apiMarketNames: [
      "Daud Nagar",
      "Daud Nagar APMC",
      "Daudnagar",
	  "Daunagar",
    ],
    districtName: "Aurangabad",
  },
   // ------------------------------------------------------------
  // BHOJPUR
  // ------------------------------------------------------------

  {
    mandiId: "aarah",
    apiMarketNames: [
      "Aarah",
      "Aarah APMC",
      "Ara",
      "Ara APMC",
    ],
    districtName: "Bhojpur",
  },

  {
    mandiId: "bihiyaan",
    apiMarketNames: [
      "Bihiyaan",
      "Bihiyaan APMC",
      "Bihiya",
      "Bihiya APMC",
    ],
    districtName: "Bhojpur",
  },
  // ------------------------------------------------------------
  // BUXAR
  // ------------------------------------------------------------

  {
    mandiId: "buxar",
    apiMarketNames: [
      "Buxar",
      "Buxar APMC",
    ],
    districtName: "Buxar",
  },
  // ------------------------------------------------------------
  // ROHTAS
  // ------------------------------------------------------------

  {
    mandiId: "sasaram",
    apiMarketNames: [
      "Sasaram",
      "Sasaram APMC",
    ],
    districtName: "Rohtas",
  },

  {
    mandiId: "nokha",
    apiMarketNames: [
      "Nokha",
      "Nokha APMC",
    ],
    districtName: "Rohtas",
  },

  {
    mandiId: "natwaar",
    apiMarketNames: [
      "Natwaar",
      "Natwaar APMC",
      "Natwar",
      "Natwar APMC",
    ],
    districtName: "Rohtas",
  },
  // ------------------------------------------------------------
  // KAIMUR
  // ------------------------------------------------------------

  {
    mandiId: "mohania",
    apiMarketNames: [
      "Mohania",
      "Mohania APMC",
    ],
    districtName: "Kaimur",
  },

  // ------------------------------------------------------------
  // SARAN
  // ------------------------------------------------------------

  {
    mandiId: "chhapra",
    apiMarketNames: [
      "Chhapra",
      "Chhapra APMC",
    ],
    districtName: "Saran",
	apiDistrictNames: [
    "Saran",
    "Chhapra",
    ],
  },
  {
    mandiId: "sonpur",
    apiMarketNames: [
      "Sonpur",
      "Sonpur APMC",
    ],
    districtName: "Saran",
       apiDistrictNames: [
    "Saran",
    "Chhapra",
    ],
  },

  // ------------------------------------------------------------
  // VAISHALI
  // ------------------------------------------------------------
  {
    mandiId: "hajipur",
    apiMarketNames: [
      "Hajipur",
      "Hajipur APMC",
    ],
    districtName: "Vaishali",
  },
   // ------------------------------------------------------------
  // DARBHANGA
  // ------------------------------------------------------------

  {
    mandiId: "darbhanga",
    apiMarketNames: [
      "Darbhanga",
      "Darbhanga APMC",
    ],
    districtName: "Darbhanga",
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
  {
    mandiId: "jhanjharpur",
    apiMarketNames: [
      "Jhanjharpur",
      "Jhanjharpur APMC",
	  "Jahajharpur APMC",
    ],
    districtName: "Madhubani",
  },
  {
    mandiId: "ghoghardiha",
    apiMarketNames: [
      "Ghoghardiha",
      "Ghoghardiha APMC",
    ],
    districtName: "Madhubani",
  },

  {
    mandiId: "jainagar",
    apiMarketNames: [
      "Jainagar",
      "Jainagar APMC",
    ],
    districtName: "Madhubani",
  },
  {
    mandiId: "benipatti",
    apiMarketNames: [
      "Benipatti APMC",
      "Benipatti",
    ],
    districtName: "Madhubani",
  },
  // ------------------------------------------------------------
  // BEGUSARAI
  // ------------------------------------------------------------

  {
    mandiId: "begusarai",
    apiMarketNames: [
      "Begusarai",
      "Begusarai APMC",
    ],
    districtName: "Begusarai",
  },
  {
    mandiId: "balliah",
    apiMarketNames: [
      "Balliah",
      "Balliah APMC",
    ],
    districtName: "Begusarai",
  },
   // ------------------------------------------------------------
  // MUZAFFARPUR
  // ------------------------------------------------------------

  {
    mandiId: "muzaffarpur",
    apiMarketNames: [
      "Muzaffarpur",
      "Muzaffarpur APMC",
    ],
    districtName: "Muzaffarpur",
  },
  
  {
    mandiId: "bhagwanpur",
    apiMarketNames: [
      "Bhagwanpur",
      "Bhagwanpur APMC",
	  "Bhagwanpur Mandi APMC",
    ],
    districtName: "Muzaffarpur",
  },
   // ------------------------------------------------------------
  // SITAMARHI
  // ------------------------------------------------------------

  {
    mandiId: "sitamarhi",
    apiMarketNames: [
      "Sitamarhi",
      "Sitamarhi APMC",
    ],
    districtName: "Sitamarhi",
  },

  {
    mandiId: "bairganiya",
    apiMarketNames: [
      "Bairganiya",
      "Bairganiya APMC",
    ],
    districtName: "Sitamarhi",
  },

  {
    mandiId: "pupri",
    apiMarketNames: [
      "Pupri",
      "Pupri APMC",
    ],
    districtName: "Sitamarhi",
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
	apiDistrictNames: [
    "East Champaran",
    "East Champaran/ Motihari",
    ],
  },
  {
    mandiId: "chakia",
    apiMarketNames: [
      "Chakia",
      "Chakia APMC",
    ],
    districtName: "East Champaran",
	apiDistrictNames: [
    "East Champaran",
    "East Champaran/ Motihari",
    ],
  },

  {
    mandiId: "motihari",
    apiMarketNames: [
      "Motihari",
      "Motihari APMC",
    ],
    districtName: "East Champaran",
	apiDistrictNames: [
    "East Champaran",
    "East Champaran/ Motihari",
    ],
  },
  {
    mandiId: "madhuban",
    apiMarketNames: [
      "Madhuban",
      "Madhuban APMC",
    ],
    districtName: "East Champaran",
	apiDistrictNames: [
    "East Champaran",
    "East Champaran/ Motihari",
    ],
  },
  // ------------------------------------------------------------
  // WEST CHAMPARAN
  // ------------------------------------------------------------

  {
    mandiId: "narkatiaganj",
    apiMarketNames: [
      "Narkatiaganj",
      "Narkatiaganj APMC",
    ],
    districtName: "West Champaran",
  },

  {
    mandiId: "bettiah",
    apiMarketNames: [
      "Bettiah",
      "Bettiah APMC",
    ],
    districtName: "West Champaran",
  },

  {
    mandiId: "chanpatia",
    apiMarketNames: [
      "Chanpatia",
      "Chanpatia APMC",
      "Chanpatiya",
      "Chanpatiya APMC",
    ],
    districtName: "West Champaran",
  },
  // ------------------------------------------------------------
  // PURNIA
  // ------------------------------------------------------------

  {
    mandiId: "gulabbagh",
    apiMarketNames: [
      "GulabBagh",
      "Gulab Bagh",
      "GulabBagh APMC",
      "Gulab Bagh APMC",
    ],
    districtName: "Purnia",
  },

  {
    mandiId: "kasba",
    apiMarketNames: [
      "Kasba",
      "Kasba APMC",
    ],
    districtName: "Purnia",
  },

  {
    mandiId: "banmankhi",
    apiMarketNames: [
      "Banmankhi",
      "Banmankhi APMC",
    ],
    districtName: "Purnia",
  },
  // ------------------------------------------------------------
  // ARARIA
  // ------------------------------------------------------------

  {
    mandiId: "forbesganj",
    apiMarketNames: [
      "Forbesganj",
      "Forbesganj APMC",
    ],
    districtName: "Araria",
  },

  {
    mandiId: "araria",
    apiMarketNames: [
      "Araria",
      "Araria APMC",
    ],
    districtName: "Araria",
  },
  // ------------------------------------------------------------
  // KATIHAR
  // ------------------------------------------------------------

  {
    mandiId: "katihar",
    apiMarketNames: [
      "Katihar",
      "Katihar APMC",
    ],
    districtName: "Katihar",
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

  // ------------------------------------------------------------
  // KISHANGANJ
  // ------------------------------------------------------------

  {
    mandiId: "kishanganj",
    apiMarketNames: [
      "Kishanganj",
      "Kishanganj APMC",
    ],
    districtName: "Kishanganj",
  },

  {
    mandiId: "bahadurganj",
    apiMarketNames: [
      "Bahadurganj",
      "Bahadurganj APMC",
    ],
    districtName: "Kishanganj",
  },

  {
    mandiId: "thakurganj",
    apiMarketNames: [
      "Thakurganj",
      "Thakurganj APMC",
    ],
    districtName: "Kishanganj",
  },
  // ------------------------------------------------------------
  // KHAGARIA
  // ------------------------------------------------------------

  {
    mandiId: "khagaria",
    apiMarketNames: [
      "Khagaria",
      "Khagaria APMC",
    ],
    districtName: "Khagaria",
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
  // Garlic
  // ==========================================================

  {
    cropId: "garlic",

    apiCommodityNames: [
      "Garlic",
    ],
  },


  // ==========================================================
  // BHINDI
  // ==========================================================

  {
    cropId: "okra",
    
    apiCommodityNames: [
      "Bhindi(Ladies Finger)",
      "Bhindi (Ladies Finger)",
      "Bhindi",
      "Lady Finger",
      "Ladies Finger",
      "Okra",
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
      "Bottle-Gourd",
    ],
  },
  
  // ==========================================================
  // Pumpkin / कद्दू
  // ==========================================================

  {
    cropId: "pumpkin",

    apiCommodityNames: [
      "Pumpkin",
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
  
  // ==========================================================
  // Little GOURD / Kundru
  // ==========================================================

  {
    cropId: "little-gourd",

    apiCommodityNames: [
      "Little gourd(Kundru)",
      "Little gourd",
      "Kundru",
    ],
  },
  
  // ==========================================================
  // Cucumbar / Kheera
  // ==========================================================

  {
    cropId: "cucumbar",

    apiCommodityNames: [
      "Cucumbar",
      "Cucumbar(Kheera)",
      "Kheera",
    ],
  },
  
  // ==========================================================
  // Sponge Gourd / तुरई (नेनुआ)
  // ==========================================================

  {
    cropId: "sponge-gourd",

    apiCommodityNames: [
      "Sponge Gourd",
      "Sponge Gourd(तुरई)",
      "Sponge Gourd(नेनुआ)",
    ],
  },
  
  // ==========================================================
  // Carrot / गाजर
  // ==========================================================

  {
    cropId: "carrot",

    apiCommodityNames: [
      "Carrot",
    ],
  },
  // ==========================================================
  // Wheat
  // ==========================================================

  {
    cropId: "wheat",

    apiCommodityNames: [
      "Wheat",
    ],
  },
];