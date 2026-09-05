// src/data/varieties/chilliVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL SOURCES
// ============================================================

const ICAR_NORTH_BIHAR_CHILLI_ADVISORY =
  "https://www.icar.gov.in/sites/default/files/2022-06/CWR-07-08-2018.pdf";

const ICAR_IIVR_CHILLI =
  "https://icariivr.org.in/chilli/";

const ICAR_IIVR_AT_GLANCE =
  "https://icariivr.org.in/wp-content/uploads/2025/10/4.-IIVR-at-A-Glance.pdf";

const ICAR_IIHR_CHILLI_VARIETIES =
  "https://www.iihr.res.in/sites/default/files/Revised_final-Brief%20characteristics%20of%20vegetable%20varieties%20to%20upload%20in%20IIHR%20website%20%281%29.pdf";

const ICAR_IIHR_CHILLI_BREEDER =
  "https://api-dev.iihr.res.in/madhavi-reddy-k";

const ICAR_IIHR_ARKA_LOHIT =
  "https://api-dev.iihr.res.in/varieties/arka-lohit";

const ICAR_LANDMARK_VARIETIES =
  "https://icar.gov.in/en/landmark-varieties";

const GOVERNMENT_CHILLI_COMPENDIUM =
  "https://www.indiascienceandtechnology.gov.in/sites/default/files/Compendium%20HomeGarden.pdf";

const GBPUAT_PANT_CHILLI =
  "https://pantnagarseeds.com/kitchen-seeds";

const GOVERNMENT_CHILLI_PROFILE =
  "https://agmarknet.gov.in/Others/preface-chhilli.pdf";

// ============================================================
// CHILLI SOWING WINDOWS
// ============================================================
//
// ICAR-IIVR cultivation information:
// Kharif : June-July
// Rabi   : October-November
//
// North Bihar ICAR advisory specifically recommends
// improved chilli varieties for North Bihar.
//
// These months represent the supported Bihar cultivation
// windows used by this dataset, not a guarantee of yield.
// ============================================================

const BIHAR_CHILLI_SOWING_MONTHS = [
  6, 7, 10, 11,
];

// ============================================================
// CHILLI VARIETIES
// ============================================================

export const CHILLI_VARIETIES: CropVariety[] = [

  // ==========================================================
  // 1. PUSA JWALA
  // ==========================================================

  {
    varietyId: "chilli-pusa-jwala",

    cropId: "chilli",

    name: "Pusa Jwala",

    nameHindi: "पूसा ज्वाला",

    type: "Variety",

    // Bihar / North Bihar
    regionCodes: [ ],

    sowingMonths:
      BIHAR_CHILLI_SOWING_MONTHS,

    suitability: "high",

    firstHarvestDays: {
      min: 50,
      max: 60,
    },

    yield: {
      min: 85,
      max: 85,
      unit: "q/ha",
    },

    fruit: {
      color: "Light green; light red at maturity",
      shape: "Long, thin and pendent",
      minLengthCm: 9,
      maxLengthCm: 10,
    },

    resistance: [
      "Fairly tolerant to thrips",
      "Fairly tolerant to mites",
    ],

    notes:
      "पूसा ज्वाला IARI द्वारा विकसित मिर्च की किस्म है। ICAR की उत्तर बिहार कृषि सलाह में पूसा ज्वाला को उत्तर बिहार के लिए अनुशंसित उन्नत मिर्च की किस्मों में शामिल किया गया है।",

    source: {
      organization:
        "ICAR / ICAR-IARI",

      title:
        "ICAR North Bihar Agro-advisory and Government vegetable variety information",

      url:
        ICAR_NORTH_BIHAR_CHILLI_ADVISORY,

      scope: "Bihar",
    },
  },

  // ==========================================================
  // 2. PUSA SADABAHAR
  // ==========================================================

  {
    varietyId: "chilli-pusa-sadabahar",

    cropId: "chilli",

    name: "Pusa Sadabahar",

    nameHindi: "पूसा सदाबहार",

    type: "Variety",

    // Recommended in North Bihar advisory
    regionCodes: [ ],

    sowingMonths:
      BIHAR_CHILLI_SOWING_MONTHS,

    suitability: "high",

    firstHarvestDays: {
      min: 75,
      max: 80,
    },

    yield: {
      min: 95,
      max: 95,
      unit: "q/ha",
    },

    fruit: {
      color: "Green; dark red at maturity",
      shape: "Erect, clustered",
      minLengthCm: 6,
      maxLengthCm: 8,
    },

    resistance: [
      "Resistant to CMV",
      "Resistant to TMV",
      "Resistant to leaf curl complex",
    ],

    notes:
      "यह सीधी बढ़ने वाली और लंबे समय तक उत्पादन देने वाली मिर्च की किस्म है। फल गुच्छों में लगते हैं। ICAR की उत्तर बिहार कृषि सलाह में पूसा सदाबहार को उत्तर बिहार के लिए अनुशंसित उन्नत मिर्च की किस्मों में शामिल किया गया है।",

    source: {
      organization:
        "ICAR / ICAR-IARI",

      title:
        "ICAR North Bihar Agro-advisory",

      url:
        ICAR_NORTH_BIHAR_CHILLI_ADVISORY,

      scope: "Bihar",
    },
  },

  // ==========================================================
  // 3. KASHI ANMOL
  // ==========================================================

  {
    varietyId: "chilli-kashi-anmol",

    cropId: "chilli",

    name: "Kashi Anmol",

    nameHindi: "काशी अनमोल",

    type: "Variety",

    // Official IIVR recommendation includes Bihar
    regionCodes: [ ],

    sowingMonths:
      BIHAR_CHILLI_SOWING_MONTHS,

    suitability: "high",

    firstHarvestDays: {
      min: 55,
      max: 55,
    },

    yield: {
      min: 200,
      max: 225,
      unit: "q/ha",
    },

    fruit: {
      color: "Green",
      shape: "Pendant",
    },

    notes:
      "यह निश्चित वृद्धि वाली और बौने पौधे की किस्म है। रोपाई के लगभग 55 दिनों बाद पहली तुड़ाई शुरू हो सकती है। यह हरी मिर्च उत्पादन के लिए उपयुक्त है। इसे बिहार, झारखंड, पंजाब और उत्तर प्रदेश के लिए आधिकारिक रूप से अनुशंसित किया गया है।",

    source: {
      organization:
        "ICAR-Indian Institute of Vegetable Research",

      title:
        "Chilli Varieties Developed by IIVR",

      url:
        ICAR_IIVR_CHILLI,

      scope: "Bihar",
    },
  },

  // ==========================================================
  // 4. KASHI SURKH
  // ==========================================================

  {
    varietyId: "chilli-kashi-surkh",

    cropId: "chilli",

    name: "Kashi Surkh",

    nameHindi: "काशी सुर्ख",

    type: "Hybrid",

    // Official IIVR recommendation includes Bihar
    regionCodes: [ ],

    sowingMonths:
      BIHAR_CHILLI_SOWING_MONTHS,

    suitability: "high",

    yield: {
      min: 240,
      max: 240,
      unit: "q/ha",
    },

    fruit: {
      color: "Light green; red at maturity",
      shape: "Long",
    },

    notes:
      "यह CMS आधारित हाइब्रिड है, जो हरी और लाल दोनों प्रकार की मिर्च के उत्पादन के लिए उपयुक्त है। IIVR की आधिकारिक जानकारी के अनुसार इसे बिहार, झारखंड, पंजाब, उत्तर प्रदेश और अन्य राज्यों के लिए अनुशंसित किया गया है।",

    source: {
      organization:
        "ICAR-Indian Institute of Vegetable Research",

      title:
        "Chilli Varieties Developed by IIVR",

      url:
        ICAR_IIVR_CHILLI,

      scope: "Bihar",
    },
  },

  // ==========================================================
  // 5. ARKA LOHIT
  // ==========================================================

  {
    varietyId: "chilli-arka-lohit",

    cropId: "chilli",

    name: "Arka Lohit",

    nameHindi: "अर्का लोहित",

    type: "Variety",

    // North Bihar ICAR advisory includes Arka Lohit
    regionCodes: [ ],

    sowingMonths:
      BIHAR_CHILLI_SOWING_MONTHS,

    suitability: "high",

    yield: {
      min: 75,
      max: 80,
      unit: "q/acre",
    },

    fruit: {
      color: "Dark green; red at maturity",
      shape: "Firm, pendent",
      minLengthCm: 7,
      maxLengthCm: 8,
    },

    resistance: [],

    notes:
      "इसके पौधे लंबे होते हैं और फल मजबूत तथा बहुत तीखे होते हैं। यह सिंचित और वर्षा आधारित दोनों परिस्थितियों में खेती के लिए उपयुक्त है। ICAR की उत्तर बिहार कृषि सलाह में अर्का लोहित को उत्तर बिहार के लिए अनुशंसित उन्नत मिर्च की किस्मों में शामिल किया गया है।",

    source: {
      organization:
        "ICAR-Indian Institute of Horticultural Research",

      title:
        "Arka Lohit variety characteristics",

      url:
        ICAR_IIHR_ARKA_LOHIT,

      scope: "Bihar",
    },
  },

  // ==========================================================
  // 6. ARKA MEGHANA
  // ==========================================================

  {
    varietyId: "chilli-arka-meghana",

    cropId: "chilli",

    name: "Arka Meghana",

    nameHindi: "अर्का मेघना",

    type: "F1 Hybrid",

    // Official IIHR recommendation includes Bihar
    regionCodes: [ ],

    sowingMonths:
      BIHAR_CHILLI_SOWING_MONTHS,

    suitability: "high",

    yield: {
      min: 25,
      max: 28,
      unit: "q/acre",
    },

    fruit: {
      color: "Green; deep red at maturity",
      shape: "Slightly wrinkled",
      minLengthCm: 10,
      maxLengthCm: 12,
    },

    resistance: [
      "Tolerant to powdery mildew",
      "Tolerant to potyvirus (ChiVMV)",
    ],

    notes:
      "यह जल्दी तैयार होने वाला अधिक उपज देने वाला F1 हाइब्रिड है। ICAR-IIHR की आधिकारिक जानकारी के अनुसार बिहार को पंजाब, उत्तर प्रदेश और झारखंड के साथ इसके अनुशंसित जोन IV में शामिल किया गया है।",

    source: {
      organization:
        "ICAR-Indian Institute of Horticultural Research",

      title:
        "CGMS based Chilli F1 hybrids released at national level",

      url:
        ICAR_IIHR_CHILLI_BREEDER,

      scope: "Bihar",
    },
  },

  // ==========================================================
  // 7. ARKA SWETA
  // ==========================================================

  {
    varietyId: "chilli-arka-sweta",

    cropId: "chilli",

    name: "Arka Sweta",

    nameHindi: "अर्का स्वेता",

    type: "F1 Hybrid",

    // Official IIHR recommendation includes Bihar
    regionCodes: [ ],

    sowingMonths:
      BIHAR_CHILLI_SOWING_MONTHS,

    suitability: "high",

    yield: {
      min: 80,
      max: 100,
      unit: "q/acre",
    },

    fruit: {
      color: "Light green; red at maturity",
      shape: "Smooth",
      minLengthCm: 11,
      maxLengthCm: 12,
    },

    resistance: [
      "Tolerant to cucumovirus (CMV)",
    ],

    notes:
      "यह ताजी मिर्च के बाजार के लिए विकसित जल्दी तैयार होने वाला F1 हाइब्रिड है। ICAR-IIHR की आधिकारिक जानकारी के अनुसार अर्का स्वेता को जोन IV में अनुशंसित किया गया है, जिसमें बिहार, उत्तर प्रदेश, पंजाब और झारखंड शामिल हैं।",

    source: {
      organization:
        "ICAR-Indian Institute of Horticultural Research",

      title:
        "CGMS based Chilli F1 hybrids released at national level",

      url:
        ICAR_IIHR_CHILLI_BREEDER,

      scope: "Bihar",
    },
  },

  // ==========================================================
  // 8. PANT CHILLI-3
  // ==========================================================

  {
    varietyId: "chilli-pant-chilli-3",

    cropId: "chilli",

    name: "Pant Chilli-3",

    nameHindi: "पंत चिली-3",

    type: "Variety",

    /*
     * Kept as Bihar-supported because ICAR's
     * North Bihar advisory explicitly lists
     * Pant Mirch-3 for North Bihar.
     */
    regionCodes: [ ],

    sowingMonths: [
      6,
      7,
    ],

    suitability: "medium",

    yield: {
      min: 150,
      max: 175,
      unit: "q/ha",
    },

    fruit: {
      color: "Green",
      shape: "Long",
    },

    resistance: [
      "Tolerant to leaf curl virus",
      "Tolerant to anthracnose",
    ],

    notes:
      "पंत चिली-3 को GBPUAT, पंतनगर द्वारा विकसित किया गया है। ICAR की उत्तर बिहार कृषि सलाह में पंत मिर्च-3 को उत्तर बिहार के लिए अनुशंसित उन्नत मिर्च की किस्मों में शामिल किया गया है।",

    source: {
      organization:
        "ICAR / GBPUAT",

      title:
        "ICAR North Bihar Agro-advisory",

      url:
        ICAR_NORTH_BIHAR_CHILLI_ADVISORY,

      scope: "Bihar",
    },
  },
];

// ============================================================
// DEFAULT EXPORT
// ============================================================

export default CHILLI_VARIETIES;
