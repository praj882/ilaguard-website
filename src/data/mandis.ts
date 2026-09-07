export type Mandi = {
  id: string;
  name: string;
  stateName: string;
  districtName: string;
};

/*
 * Bihar mandis
 *
 * Add more mandis district-by-district as your database grows.
 *
 * stateName and districtName should match the names
 * used in states.ts and districts.ts.
 */

export const MANDIS: Mandi[] = [
  // ============================================================
  // SAMASTIPUR
  // ============================================================

  {
    id: "samastipur",
    name: "Samastipur Mandi",
    stateName: "Bihar",
    districtName: "Samastipur",
  },

  {
    id: "tajpur",
    name: "Tajpur Mandi",
    stateName: "Bihar",
    districtName: "Samastipur",
  },

  {
    id: "dalsinghsarai",
    name: "Dalsinghsarai Mandi",
    stateName: "Bihar",
    districtName: "Samastipur",
  },

  {
    id: "rosra",
    name: "Rosera Mandi",
    stateName: "Bihar",
    districtName: "Samastipur",
  },

  // ============================================================
  // VAISHALI
  // ============================================================

  {
    id: "hajipur",
    name: "Hajipur Mandi",
    stateName: "Bihar",
    districtName: "Vaishali",
  },

  {
    id: "mahua",
    name: "Mahua Mandi",
    stateName: "Bihar",
    districtName: "Vaishali",
  },

  // ============================================================
  // MUZAFFARPUR
  // ============================================================

  {
    id: "muzaffarpur",
    name: "Muzaffarpur Mandi",
    stateName: "Bihar",
    districtName: "Muzaffarpur",
  },

  {
    id: "saraiya",
    name: "Saraiya Mandi",
    stateName: "Bihar",
    districtName: "Muzaffarpur",
  },

  // ============================================================
  // DARBHANGA
  // ============================================================

  {
    id: "darbhanga",
    name: "Darbhanga Mandi",
    stateName: "Bihar",
    districtName: "Darbhanga",
  },

  {
    id: "benipur",
    name: "Benipur Mandi",
    stateName: "Bihar",
    districtName: "Darbhanga",
  },

  // ============================================================
  // PATNA
  // ============================================================

  {
    id: "patna",
    name: "Patna Mandi",
    stateName: "Bihar",
    districtName: "Patna",
  },

  {
    id: "phulwari",
    name: "Phulwari Mandi",
    stateName: "Bihar",
    districtName: "Patna",
  },

  // ============================================================
  // BEGUSARAI
  // ============================================================

  {
    id: "begusarai",
    name: "Begusarai Mandi",
    stateName: "Bihar",
    districtName: "Begusarai",
  },

  // ============================================================
  // GAYA
  // ============================================================

  {
    id: "gaya",
    name: "Gaya Mandi",
    stateName: "Bihar",
    districtName: "Gaya",
  },

  // ============================================================
  // BHAGALPUR
  // ============================================================

  {
    id: "bhagalpur",
    name: "Bhagalpur Mandi",
    stateName: "Bihar",
    districtName: "Bhagalpur",
  },

  // ============================================================
  // PURNIA
  // ============================================================

  {
    id: "purnia",
    name: "Purnia Mandi",
    stateName: "Bihar",
    districtName: "Purnia",
  },

  // ============================================================
  // KATIHAR
  // ============================================================

  {
    id: "katihar",
    name: "Katihar Mandi",
    stateName: "Bihar",
    districtName: "Katihar",
  },

  // ============================================================
  // SAHARSA
  // ============================================================

  {
    id: "saharsa",
    name: "Saharsa Mandi",
    stateName: "Bihar",
    districtName: "Saharsa",
  },

  // ============================================================
  // MADHUBANI
  // ============================================================

  {
    id: "madhubani",
    name: "Madhubani Mandi",
    stateName: "Bihar",
    districtName: "Madhubani",
  },

  // ============================================================
  // SITAMARHI
  // ============================================================

  {
    id: "sitamarhi",
    name: "Sitamarhi Mandi",
    stateName: "Bihar",
    districtName: "Sitamarhi",
  },

  // ============================================================
  // CHAMPARAN
  // ============================================================

  {
    id: "motihari",
    name: "Motihari Mandi",
    stateName: "Bihar",
    districtName: "East Champaran",
  },

  {
    id: "bettiah",
    name: "Bettiah Mandi",
    stateName: "Bihar",
    districtName: "West Champaran",
  },
  // ============================================================
  // WEST BENGAL
  // stateId: 04
  //
  // Markets relevant to Bihar-side farmers
  // ============================================================

  // ============================================================
  // MALDA
  // ============================================================

  {
    id: "english-bazar",
    name: "English Bazar Market Yard",
    stateName: "West Bengal",
    districtName: "Malda",
  },

  {
    id: "kaliachak",
    name: "Kaliachak Market Yard",
    stateName: "West Bengal",
    districtName: "Malda",
  },

  {
    id: "gazole",
    name: "Gazole Market Yard",
    stateName: "West Bengal",
    districtName: "Malda",
  },

  {
    id: "samsi",
    name: "Samsi Market Yard",
    stateName: "West Bengal",
    districtName: "Malda",
  },

  {
    id: "chanchal",
    name: "Chanchal Market Yard",
    stateName: "West Bengal",
    districtName: "Malda",
  },

  {
    id: "tulsihata",
    name: "Tulsihata Market Yard",
    stateName: "West Bengal",
    districtName: "Malda",
  },

  // ============================================================
  // UTTAR DINAJPUR
  // ============================================================

  {
    id: "islampur",
    name: "Islampur Principal Market Yard",
    stateName: "West Bengal",
    districtName: "Uttar Dinajpur",
  },

  // ============================================================
  // DARJEELING
  // ============================================================

  {
    id: "siliguri",
    name: "Siliguri Principal Market Yard",
    stateName: "West Bengal",
    districtName: "Darjeeling",
  },

  // ============================================================
  // JALPAIGURI
  // ============================================================

  {
    id: "dhupguri",
    name: "Dhupguri Principal Market Yard",
    stateName: "West Bengal",
    districtName: "Jalpaiguri",
  },

  // ============================================================
  // DAKSHIN DINAJPUR
  // ============================================================

  {
    id: "gangarampur",
    name: "Gangarampur Krishak Bazar",
    stateName: "West Bengal",
    districtName: "Dakshin Dinajpur",
  },
];