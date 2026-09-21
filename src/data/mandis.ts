export type Mandi = {
  id: string;
  name: string;
  stateName: string;
  districtName: string;

  // Exact market name(s) returned by data.gov.in
  dataGovMarketNames?: string[];
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
	dataGovMarketNames: [
      "Samastipur APMC",
    ],
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
  {
    id: "bhagwanpur",
    name: "Bhagwanpur Mandi",
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
  {
    id: "musallahpur",
    name: "Musallahpur",
    stateName: "Bihar",
    districtName: "Patna",
  },
  {
    id: "fatuha",
    name: "Fatuha",
    stateName: "Bihar",
    districtName: "Patna",
  },
  {
    id: "danapur",
    name: "Danapur",
    stateName: "Bihar",
    districtName: "Patna",
  },
  {
    id: "bihta",
    name: "Bihta",
    stateName: "Bihar",
    districtName: "Patna",
  },
  {
    id: "barh",
    name: "Barh",
    stateName: "Bihar",
    districtName: "Patna",
  },
  {
    id: "mokama",
    name: "Mokama",
    stateName: "Bihar",
    districtName: "Patna",
  },
  // ============================================================
  // NALANDA
  // ============================================================

  {
    id: "bihar-sharif",
    name: "Bihar Sharif",
    stateName: "Bihar",
    districtName: "Nalanda",
  },
  
  // ============================================================
  // Siwan
  // ============================================================

  {
    id: "maharjganj",
    name: "Maharjganj",
    stateName: "Bihar",
    districtName: "Siwan",
  },
  
  // ============================================================
  // Sheikhpura
  // ============================================================

  {
    id: "sheikhpura",
    name: "Sheikhpura",
    stateName: "Bihar",
    districtName: "Sheikhpura",
  },
  
  {
    id: "barbigha",
    name: "Barbigha",
    stateName: "Bihar",
    districtName: "Sheikhpura",
  },
  // ============================================================
  // JEHANABAD
  // ============================================================

  {
    id: "jehanabad",
    name: "Jehanabad",
    stateName: "Bihar",
    districtName: "Jehanabad",
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
  {
    id: "balliah",
    name: "Balliah Mandi",
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
  // AURANGABAD
  // ============================================================

  {
    id: "daud-nagar",
    name: "Daud Nagar",
    stateName: "Bihar",
    districtName: "Aurangabad",
  },

  // ============================================================
  // BHOJPUR
  // ============================================================

  {
    id: "aarah",
    name: "Aarah",
    stateName: "Bihar",
    districtName: "Bhojpur",
  },
  {
    id: "bihiyaan",
    name: "Bihiyaan",
    stateName: "Bihar",
    districtName: "Bhojpur",
  },
  // ============================================================
  // BUXAR
  // ============================================================

  {
    id: "buxar",
    name: "Buxar",
    stateName: "Bihar",
    districtName: "Buxar",
  },

  // ============================================================
  // ROHTAS
  // ============================================================

  {
    id: "sasaram",
    name: "Sasaram",
    stateName: "Bihar",
    districtName: "Rohtas",
  },
  {
    id: "nokha",
    name: "Nokha",
    stateName: "Bihar",
    districtName: "Rohtas",
  },
  {
    id: "natwaar",
    name: "Natwaar",
    stateName: "Bihar",
    districtName: "Rohtas",
  },

  // ============================================================
  // KAIMUR
  // ============================================================

  {
    id: "mohania",
    name: "Mohania",
    stateName: "Bihar",
    districtName: "Kaimur",
  },

  // ============================================================
  // SARAN
  // ============================================================

  {
    id: "chhapra",
    name: "Chhapra",
    stateName: "Bihar",
    districtName: "Saran",
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
  {
    id: "bihpur",
    name: "bihpur Mandi",
    stateName: "Bihar",
    districtName: "Bhagalpur",
  },
  {
    id: "naugachhia",
    name: "Naugachhia",
    stateName: "Bihar",
    districtName: "Bhagalpur",
  },
  
  // ============================================================
  // MUNGER
  // ============================================================

  {
    id: "munger",
    name: "Munger",
    stateName: "Bihar",
    districtName: "Munger",
  },

  // ============================================================
  // LAKHISARAI
  // ============================================================

  {
    id: "lakhisarai",
    name: "Lakhisarai",
    stateName: "Bihar",
    districtName: "Lakhisarai",
  },

  // ============================================================
  // MADHEPURA
  // ============================================================

  {
    id: "singheshwar-sthan",
    name: "Singheshwar Sthan",
    stateName: "Bihar",
    districtName: "Madhepura",
  },
  {
    id: "murliganj",
    name: "Murliganj",
    stateName: "Bihar",
    districtName: "Madhepura",
  },
  {
    id: "bihariganj",
    name: "Bihariganj",
    stateName: "Bihar",
    districtName: "Madhepura",
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
  {
    id: "gulabbagh",
    name: "GulabBagh",
    stateName: "Bihar",
    districtName: "Purnia",
  },
  {
    id: "kasba",
    name: "Kasba",
    stateName: "Bihar",
    districtName: "Purnia",
  },
  {
    id: "banmankhi",
    name: "Banmankhi",
    stateName: "Bihar",
    districtName: "Purnia",
  },
  // ============================================================
  // ARARIA
  // ============================================================

  {
    id: "forbesganj",
    name: "Forbesganj",
    stateName: "Bihar",
    districtName: "Araria",
  },
  {
    id: "araria",
    name: "Araria",
    stateName: "Bihar",
    districtName: "Araria",
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
  {
    id: "jhanjharpur",
    name: "Jhanjharpur",
    stateName: "Bihar",
    districtName: "Madhubani",
  },
  {
    id: "ghoghardiha",
    name: "Ghoghardiha",
    stateName: "Bihar",
    districtName: "Madhubani",
  },
  {
    id: "jainagar",
    name: "Jainagar",
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
  {
    id: "bairganiya",
    name: "Bairganiya",
    stateName: "Bihar",
    districtName: "Sitamarhi",
  },
  {
    id: "pupri",
    name: "Pupri",
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
    id: "raxaul",
    name: "Raxaul  Mandi",
    stateName: "Bihar",
    districtName: "East Champaran",
  },
  {
    id: "chakia",
    name: "Chakia",
    stateName: "Bihar",
    districtName: "East Champaran",
  },
  
  {
    id: "madhuban",
    name: "Madhuban",
    stateName: "Bihar",
    districtName: "East Champaran",
  },
  {
    id: "narkatiaganj",
    name: "Narkatiaganj",
    stateName: "Bihar",
    districtName: "West Champaran",
  },
  {
    id: "bettiah",
    name: "Bettiah",
    stateName: "Bihar",
    districtName: "West Champaran",
  },
  {
    id: "chanpatia",
    name: "Chanpatia",
    stateName: "Bihar",
    districtName: "West Champaran",
  },
  // ============================================================
  // Kishanganj
  // ============================================================

  {
    id: "kishanganj",
    name: "Kishanganj",
    stateName: "Bihar",
    districtName: "Kishanganj",
  },
  {
    id: "bahadurganj",
    name: "Bahadurganj",
    stateName: "Bihar",
    districtName: "Kishanganj",
  },
  {
    id: "thakurganj",
    name: "Thakurganj",
    stateName: "Bihar",
    districtName: "Kishanganj",
  },
  
  // ============================================================
  // KHAGARIA
  // ============================================================

  {
    id: "khagaria",
    name: "Khagaria",
    stateName: "Bihar",
    districtName: "Khagaria",
  },
  
  // ============================================================
  // Supaul
  // ============================================================

  {
    id: "supaul",
    name: "Supaul APMC",
    stateName: "Bihar",
    districtName: "Supaul",
  },
  {
    id: "triveniganj",
    name: "Triveniganj APMC",
    stateName: "Bihar",
    districtName: "Supaul",
  },
  {
    id: "birpur",
    name: "Birpur APMC",
    stateName: "Bihar",
    districtName: "Supaul",
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
	dataGovMarketNames: [
      "Siliguri APMC",
    ],
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