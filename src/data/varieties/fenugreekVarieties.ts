// src/data/varieties/fenugreekVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL SOURCES
// ============================================================

const RPCAU_FENUGREEK =
  "https://rpcau.ac.in/spices-seed-available/";

const ICAR_FENUGREEK_ADVISORY =
  "https://icar.gov.in/sites/default/files/2022-09/Rabi-Agro-Advisory-2021-22_0.pdf";

const ICAR_AICRPS_VARIETIES =
  "https://epubs.icar.org.in/index.php/IJSS/article/download/169690/62698/491007";

const ICAR_AICRPS_1995_96 =
  "https://aicrps.res.in/AICRPS/AR/AR1995-96.pdf";

const ICAR_PUSA_EARLY_BUNCHING =
  "https://epubs.icar.org.in/index.php/IJAgS/article/view/28770";

const IARI_AGRI_NUTRI =
  "https://pusa.iari.res.in/files/Publication/important-publications/AgriNutriSmart_23032018.pdf";

const NHB_FENUGREEK =
  "https://nhb.gov.in/pdf/StudyReport7.pdf";

const TNAU_FENUGREEK =
  "https://agritech.tnau.ac.in/horticulture/horti_spice%20crops_fenugreek.html";

const SDAU_PUSA_EARLY_BUNCHING =
  "https://nau.in/assets/uploads/02c76-12th-cja-agresco-proceedings.pdf";


// ============================================================
// COMMON SOWING WINDOW
// ============================================================

const BIHAR_FENUGREEK_SOWING_MONTHS = [
  9,
  10,
  11,
];


// ============================================================
// FENUGREEK VARIETIES
// ============================================================

export const FENUGREEK_VARIETIES: CropVariety[] = [

  // ==========================================================
  // 1. RAJENDRA KANTI
  // ==========================================================

  {
    varietyId: "fenugreek-rajendra-kanti",
    cropId: "fenugreek",

    name: "Rajendra Kanti",
    nameHindi: "राजेंद्र क्रांति",

    type: "Variety",

    // Bihar-developed / Bihar-relevant variety
    regionCodes: [ ],

    sowingMonths:
      BIHAR_FENUGREEK_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 120,
      max: 130,
    },

    yield: {
      min: 20,
      max: 25,
      unit: "q/ha",
    },

    fruit: {
      color: "Yellow",
    },

    resistance: [
      "Disease resistant",
    ],

    notes:
      "इसे राजेंद्र कृषि विश्वविद्यालय, ढोली में विकसित किया गया है। पौधे की ऊंचाई लगभग 70-90 सेमी होती है और प्रत्येक गांठ पर एक या दो फलियां होती हैं। RPCAU के अनुसार इसकी संभावित उपज 20-25 क्विंटल/हेक्टेयर है। ढोली में किए गए पुराने शोध में बिहार में मेथी की खेती के लिए 15 अक्टूबर को उपयुक्त बुवाई तिथि बताया गया था।",

    source: {
      organization:
        "Dr. Rajendra Prasad Central Agricultural University (RPCAU)",
      title:
        "Spices Seed Available - Fenugreek Varieties",
      url:
        RPCAU_FENUGREEK,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 2. RAJENDRA ABHA
  // ==========================================================

  {
    varietyId: "fenugreek-rajendra-abha",
    cropId: "fenugreek",

    name: "Rajendra Abha",
    nameHindi: "राजेंद्र आभा",

    type: "Variety",

    // Bihar / North Bihar relevance
    regionCodes: [ ],

    sowingMonths:
      BIHAR_FENUGREEK_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 135,
      max: 140,
    },

    yield: {
      min: 6,
      max: 8,
      unit: "q/ha",
    },

    notes:
      "इसे कस्तूरी मेथी के नाम से भी जाना जाता है। RPCAU के अनुसार यह लंबी और अर्ध-बेलदार किस्म है, जिसकी पौधे की ऊंचाई 100-140 सेमी होती है। यह लगभग 135-140 दिनों में पकती है। RPCAU के अनुसार इसकी संभावित उपज 6-8 क्विंटल/हेक्टेयर है। बिहार की पुरानी बागवानी जानकारी में राजेंद्र आभा को दोहरे उपयोग वाली किस्म बताया गया है, जो उत्तर बिहार की कैल्केरियस मिट्टी के लिए उपयुक्त है और सूखी पत्तियों का उत्पादन भी देती है।",

    source: {
      organization:
        "Dr. Rajendra Prasad Central Agricultural University (RPCAU)",
      title:
        "Spices Seed Available - Fenugreek Varieties",
      url:
        RPCAU_FENUGREEK,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 3. HM-444
  // ==========================================================

  {
    varietyId: "fenugreek-hm-444",
    cropId: "fenugreek",

    name: "HM-444",
    nameHindi: "एचएम-444",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_FENUGREEK_SOWING_MONTHS,

    suitability: "high",

    yield: {
      min: 20,
      max: 30,
      unit: "q/ha",
    },

    notes:
      "RPCAU के अनुसार HM-444 लंबी किस्म है, जिसकी पौधे की ऊंचाई लगभग 100-115 सेमी होती है। यह दाने और पत्तियों दोनों के उत्पादन के लिए उपयुक्त है और इसकी संभावित उपज 20-30 क्विंटल/हेक्टेयर बताई गई है। RPCAU इसे अपने ढोली/बिहार तंत्र के माध्यम से उपलब्ध मेथी की किस्मों में सूचीबद्ध करता है।",

    source: {
      organization:
        "Dr. Rajendra Prasad Central Agricultural University (RPCAU)",
      title:
        "Spices Seed Available - Fenugreek Varieties",
      url:
        RPCAU_FENUGREEK,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 4. PUSA EARLY BUNCHING
  // ==========================================================

  {
    varietyId: "fenugreek-pusa-early-bunching",
    cropId: "fenugreek",

    name: "Pusa Early Bunching",
    nameHindi: "पूसा अर्ली बंचिंग",

    type: "Variety",

    // Included for Bihar because it has been evaluated at
    // AICRP Dholi and is documented in North Indian fenugreek
    // production literature.
    regionCodes: [ ],

    sowingMonths:
      BIHAR_FENUGREEK_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 125,
      max: 130,
    },

    yield: {
      min: 20.4,
      max: 20.4,
      unit: "t/ha",
    },

    resistance: [
      "Downy mildew resistant",
      "Rot resistant",
    ],

    notes:
      "पूसा अर्ली बंचिंग IARI द्वारा विकसित किस्म है और इसे पत्तियों के उत्पादन के लिए मेथी की किस्म के रूप में दर्ज किया गया है। SDAU के एक परीक्षण में हरी पत्तियों की उपज 20.4 टन/हेक्टेयर दर्ज की गई। AICRP के शोध में ढोली और अन्य मेथी अनुसंधान केंद्रों पर भी पूसा अर्ली बंचिंग को चेक किस्म के रूप में उपयोग किया गया है। 20.4 टन/हेक्टेयर का आंकड़ा बिहार-विशिष्ट उपज का आंकड़ा नहीं है।",

    source: {
      organization:
        "ICAR-IARI / ICAR-AICRP",
      title:
        "Pusa Early Bunching Fenugreek",
      url:
        ICAR_PUSA_EARLY_BUNCHING,
      scope: "National",
    },
  },


  // ==========================================================
  // 5. PUSA KASURI
  // ==========================================================

  {
    varietyId: "fenugreek-pusa-kasuri",
    cropId: "fenugreek",

    name: "Pusa Kasuri",
    nameHindi: "पूसा कसूरी",

    type: "Variety",

    // Used in North Indian leafy fenugreek production.
    regionCodes: [ ],

    sowingMonths:
      BIHAR_FENUGREEK_SOWING_MONTHS,

    suitability: "high",

    yield: {
      min: 20,
      max: 25,
      unit: "q/acre",
    },

    notes:
      "कसूरी प्रकार की मेथी मुख्य रूप से पत्तियों के उत्पादन के लिए उपयोगी मानी जाती है। NHB के नॉर्थ जोन व्यवहार्यता अध्ययन में पूसा अर्ली बंचिंग, हिसार मेथी-57 और कसूरी मेथी को किस्मों के रूप में सूचीबद्ध किया गया है। पत्तियों के लिए मेथी की खेती हेतु सितंबर-नवंबर को उपयुक्त बुवाई अवधि बताया गया है। IARI की सामग्री में भी पूसा कसूरी को मेथी की किस्म के रूप में सूचीबद्ध किया गया है।",

    source: {
      organization:
        "ICAR-IARI / National Horticulture Board",
      title:
        "Fenugreek production and North Zone feasibility study",
      url:
        NHB_FENUGREEK,
      scope: "National",
    },
  },
];


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default FENUGREEK_VARIETIES;
