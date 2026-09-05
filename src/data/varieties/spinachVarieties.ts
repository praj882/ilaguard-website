// src/data/varieties/spinachVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL SOURCES
// ============================================================

const IARI_PUSA_VILAYATI_PALAK =
  "https://epubs.icar.org.in/index.php/IndHort/article/view/107286";

const IARI_ANNUAL_REPORT_2018 =
  "https://pusa.iari.res.in/files/Publication/annual_report/IARIANNUALREPORT_29082018.pdf";

const IARI_ANNUAL_REPORT_2020 =
  "https://www.iari.res.in/files/Publication/annual_report/IARI_ANNUAL_REPORT_2020.pdf";

const IARI_ATIC_SEEDS =
  "https://www.iari.res.in/files/seed-available/ATICweb_24082020.pdf";

const IARI_VEGETABLE_VARIETIES =
  "https://www.iari.res.in/iari-varieties/crops.php";

const ICAR_RABI_ADVISORY =
  "https://icar.gov.in/sites/default/files/2022-09/Rabi-Agro-Advisory-2021-22_0.pdf";

const ICAR_SEMI_ARID_VEGETABLES =
  "https://epubs.icar.org.in/index.php/IndHort/article/download/105372/41251/272890";

const ICAR_IARI_BEST_PRACTICE =
  "https://iari.res.in/files/Latest-News/Best_practice_on_varieties.pdf";

const ICAR_IIHR_ARKA_ANUPAMA =
  "https://api-dev.iihr.res.in/palak-arka-anupama-0";

const BAU_SABOUR_SEED_REPORT =
  "https://bausabour.ac.in/album/File117_04_202309_57_08PIMG1.pdf";

// ============================================================
// SPINACH / PALAK VARIETIES
// ============================================================

export const SPINACH_VARIETIES: CropVariety[] = [

  // ==========================================================
  // 1. PUSA BHARATI
  // ==========================================================

  {
    varietyId: "spinach-pusa-bharati",
    cropId: "spinach",

    name: "Pusa Bharati",
    nameHindi: "पूसा भारती",
    type: "Variety",

    regionCodes: [],

    // Winter and early-spring variety.
    // Bihar performance specifically documented at Chhapra.
    sowingMonths: [10, 11, 12, 1, 2, 3],

    suitability: "high",

    yield: {
      min: 20.5,
      max: 20.5,
      unit: "t/ha",
    },

    notes:
      "कोमल और हरी पत्तियों वाली किस्म। IARI के प्रदर्शन में छपरा, बिहार में औसत 20.5 टन/हेक्टेयर उपज दर्ज हुई।",

    source: {
      organization: "ICAR-IARI",
      title:
        "IARI Annual Report 2017-18 – Participatory demonstrations",
      url: IARI_ANNUAL_REPORT_2018,
      scope: "Bihar",
    },
  },

  // ==========================================================
  // 2. PUSA JYOTI
  // ==========================================================

  {
    varietyId: "spinach-pusa-jyoti",
    cropId: "spinach",

    name: "Pusa Jyoti",
    nameHindi: "पूसा ज्योति",
    type: "Variety",

    regionCodes: [],

    // Official source specifically mentions September sowing.
    sowingMonths: [9, 10, 11, 12, 1, 2],

    suitability: "high",

    yield: {
      min: 425,
      max: 425,
      unit: "q/ha",
    },

    fruit: {
      color: "Dark green",
    },

    notes:
      "बड़े, मोटे, कोमल और गहरे हरे पत्ते। देर से बोल्टिंग करने वाली किस्म। सितंबर की बुवाई के लिए उपयुक्त बताई गई है।",

    source: {
      organization:
        "IARI / Government horticulture technology bulletin",
      title: "Commercial Varieties of Vegetables – Palak",
      url:
        "https://www.agritech.tnau.ac.in/horticulture/pdf/tech_bulletin/national/Checklist-of-Commercial-Varieties-of-Vegetables.pdf",
      scope: "National",
    },
  },

  // ==========================================================
  // 3. PUSA HARIT
  // ==========================================================

  {
    varietyId: "spinach-pusa-harit",
    cropId: "spinach",

    name: "Pusa Harit",
    nameHindi: "पूसा हरित",
    type: "Variety",

    regionCodes: [],

    sowingMonths: [10, 11, 12, 1, 2, 3],

    suitability: "high",

    yield: {
      min: 260,
      max: 260,
      unit: "q/ha",
    },

    fruit: {
      color: "Dark green",
    },

    notes:
      "पौधे सीधे बढ़ते हैं और पत्तियां मोटी, गहरे हरे रंग की तथा हल्की लहरदार होती हैं। कटाई के बाद जल्दी पुनः बढ़ने और देर से बोल्टिंग के गुण के लिए जानी जाती है।",

    source: {
      organization: "IARI",
      title: "Commercial Varieties of Vegetables – Palak",
      url:
        "https://www.agritech.tnau.ac.in/horticulture/pdf/tech_bulletin/national/Checklist-of-Commercial-Varieties-of-Vegetables.pdf",
      scope: "National",
    },
  },

  // ==========================================================
  // 4. ALL GREEN
  // ==========================================================

  {
    varietyId: "spinach-all-green",
    cropId: "spinach",

    name: "All Green",
    nameHindi: "ऑल ग्रीन",
    type: "Variety",

    regionCodes: [],

    sowingMonths: [9, 10, 11, 12, 1, 2, 3],

    suitability: "high",

    yield: {
      min: 120,
      max: 125,
      unit: "q/ha",
    },

    fruit: {
      color: "Green",
    },

    notes:
      "छोटी, समान हरी और कोमल पत्तियों वाली किस्म। कई कटिंग के लिए उपयोग की जाती है। IARI के प्रदर्शन में भी इस किस्म का अच्छा प्रदर्शन दर्ज किया गया है।",

    source: {
      organization: "ICAR-IARI",
      title:
        "IARI Annual Report 2017-18 – Palak demonstrations",
      url: IARI_ANNUAL_REPORT_2018,
      scope: "National",
    },
  },

  // ==========================================================
  // 5. PUSA PALAK
  // ==========================================================

  {
    varietyId: "spinach-pusa-palak",
    cropId: "spinach",

    name: "Pusa Palak",
    nameHindi: "पूसा पालक",
    type: "Variety",

    regionCodes: [],

    sowingMonths: [9, 10, 11, 12, 1, 2, 3],

    suitability: "high",

    fruit: {
      color: "Green",
    },

    notes:
      "कोमल हरी पत्तियों वाली किस्म। IARI द्वारा विकसित किस्म के रूप में विभिन्न सरकारी कृषि स्रोतों में सूचीबद्ध है।",

    source: {
      organization: "ICAR-IARI",
      title:
        "Recommended varieties of vegetables – Palak",
      url: ICAR_SEMI_ARID_VEGETABLES,
      scope: "National",
    },
  },

  // ==========================================================
  // 6. PUSA VILAYATI PALAK
  // ==========================================================

  {
    varietyId: "spinach-pusa-vilayati-palak",
    cropId: "spinach",

    name: "Pusa Vilayati Palak",
    nameHindi: "पूसा विलायती पालक",
    type: "Variety",

    regionCodes: [],

    // Official source describes it as an autumn-winter variety.
    sowingMonths: [10, 11, 12, 1, 2],

    suitability: "high",

    yield: {
      min: 12,
      max: 12,
      unit: "t/ha",
    },

    firstHarvestDays: {
      min: 30,
      max: 40,
    },

    fruit: {
      color: "Green",
    },

    notes:
      "कम अवधि की पालक किस्म। हरी और रसदार तने व पत्तियां होती हैं। 2–3 कटिंग दी जा सकती हैं। शरद-शीत मौसम के लिए उपयुक्त है और औसत हरी पत्ती उपज 12 टन/हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-IARI",
      title:
        "Pusa Vilayati Palak: A highly nutritious Spinach variety",
      url: IARI_PUSA_VILAYATI_PALAK,
      scope: "National",
    },
  },

  // ==========================================================
  // 7. ARKA ANUPAMA
  // ==========================================================

  {
    varietyId: "spinach-arka-anupama",
    cropId: "spinach",

    name: "Arka Anupama",
    nameHindi: "अर्का अनुपमा",
    type: "Variety",

    regionCodes: [],

    suitability: "low",

    yield: {
      min: 40,
      max: 40,
      unit: "t/ha",
    },

    maturityDays: {
      min: 75,
      max: 80,
    },

    notes:
      "मल्टी-कट किस्म। पत्तियां मध्यम-बड़ी, गहरे हरे रंग की, मोटी और रसदार होती हैं। 4 कटिंग में लगभग 40 टन/हेक्टेयर उपज बताई गई है। ICAR-IIHR के अनुसार इसकी औपचारिक सिफारिश कर्नाटक के लिए है।",

    source: {
      organization: "ICAR-IIHR",
      title: "Palak - Arka Anupama",
      url: ICAR_IIHR_ARKA_ANUPAMA,
      scope: "Other",
    },
  },

  // ==========================================================
  // 8. JOBNER GREEN
  // ==========================================================

  {
    varietyId: "spinach-jobner-green",
    cropId: "spinach",

    name: "Jobner Green",
    nameHindi: "जॉबनेर ग्रीन",
    type: "Variety",

    regionCodes: [],

    suitability: "medium",

    yield: {
      min: 125,
      max: 125,
      unit: "q/ha",
    },

    fruit: {
      color: "Green",
    },

    notes:
      "बड़ी, मोटी, रसदार और कोमल पत्तियों वाली किस्म। ICAR स्रोत में पालक की अनुशंसित किस्मों में शामिल है।",

    source: {
      organization: "ICAR",
      title:
        "Recommended varieties of vegetables for semi-arid region",
      url: ICAR_SEMI_ARID_VEGETABLES,
      scope: "Other",
    },
  },
];

export default SPINACH_VARIETIES;