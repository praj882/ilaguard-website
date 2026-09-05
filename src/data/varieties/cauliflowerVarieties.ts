// src/data/varieties/cauliflowerVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL SOURCES
// ============================================================

const BAU_SABOUR_CAULIFLOWER_VARIETIES =
  "https://bausabour.ac.in/varieties-developed.aspx";

const IARI_CAULIFLOWER_COMMERCIAL_VARIETIES =
  "https://cdnbbsr.s3waas.gov.in/s394c14a38fe64229a997e13d9c9e1c0eb/uploads/2026/01/202601191047325124.pdf";

const IARI_TECHNOLOGICAL_OPTIONS =
  "https://www.pusa.iari.res.in/files/Publication/Others/Tech_Options_English-15072014.pdf";

const GBPUAT_CAULIFLOWER_VARIETIES =
  "https://gbpuat.ac.in/";

const ICAR_IIVR_CAULIFLOWER_VARIETIES =
  "https://icariivr.org.in/hi/cauliflower-2/";

// ============================================================
// CAULIFLOWER
// ============================================================

export const CAULIFLOWER_VARIETIES: CropVariety[] = [

  // ============================================================
  // 1. SABOUR AGRIM
  // ============================================================

  {
    varietyId: "sabour-agrim",
    cropId: "cauliflower",

    name: "Sabour Agrim",
    nameHindi: "सबौर अग्रिम",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {},

    yield: {
      min: 18.0,
      max: 19.0,
      unit: "t/ha",
    },

    fruit: {
      color: "white",
      shape: "round",
      minWeightG: 450,
      maxWeightG: 480,
    },

    resistance: [
      "bacterial black rot",
    ],

    sowingMonths: [6, 7],

    suitability: "high",

    notes:
      "सबौर अग्रिम बिहार कृषि विश्वविद्यालय, सबौर द्वारा विकसित अगेती फूलगोभी की किस्म है। यह सितंबर के अंत से नवंबर की शुरुआत तक कटाई के लिए उपयुक्त है। इसके कर्ड गोल, सफेद, समान आकार के, कॉम्पैक्ट और एक साथ तैयार होने वाले होते हैं। बाजार योग्य कर्ड का वजन लगभग 450–480 ग्राम और बाजार योग्य उपज लगभग 180–190 क्विंटल प्रति हेक्टेयर है। यह वर्षा आधारित ऊंची भूमि की परिस्थितियों में भी उगाई जा सकती है। खेत में यह बैक्टीरियल ब्लैक रॉट के प्रति प्रतिरोधी पाई गई है, लेकिन Alternaria leaf blight के प्रति संवेदनशील है।",

    source: {
      organization: "Bihar Agricultural University, Sabour",
      title: "Varieties Developed – Sabour Agrim",
      url: BAU_SABOUR_CAULIFLOWER_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 2. PUSA EARLY SYNTHETIC
  // ============================================================

  {
    varietyId: "pusa-early-synthetic",
    cropId: "cauliflower",

    name: "Pusa Early Synthetic",
    nameHindi: "पूसा अर्ली सिंथेटिक",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {},

    yield: {
      min: 12.0,
      max: 15.0,
      unit: "t/ha",
    },

    fruit: {
      color: "creamy white",
      shape: "flat",
    },

    resistance: [
      "resistant to riceyness",
    ],

    sowingMonths: [5, 6, 7],

    suitability: "high",

    notes:
      "पूसा अर्ली सिंथेटिक फूलगोभी की अगेती किस्म है और बिहार में इसकी खेती की जाती है। इसके कर्ड छोटे से मध्यम आकार के, चपटे, क्रीमी-सफेद और कॉम्पैक्ट होते हैं। यह अगेती रोपाई के लिए उपयुक्त है और इसकी औसत उपज लगभग 120–150 क्विंटल प्रति हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Commercial Varieties of Cauliflower",
      url: IARI_CAULIFLOWER_COMMERCIAL_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 3. PUSA PAUSHJA
  // ============================================================

  {
    varietyId: "pusa-paushja",
    cropId: "cauliflower",

    name: "Pusa Paushja",
    nameHindi: "पूसा पौषजा",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 75,
      max: 75,
    },

    yield: {
      min: 40.0,
      max: 40.0,
      unit: "t/ha",
    },

    fruit: {
      color: "white",
      shape: "compact",
      minWeightG: 700,
      maxWeightG: 900,
    },

    resistance: [],

    sowingMonths: [8, 9],

    suitability: "high",

    notes:
      "पूसा पौषजा मध्य-देर समूह की फूलगोभी की किस्म है। कर्ड सफेद और कॉम्पैक्ट होते हैं। यह लगभग 75 दिनों में तैयार होने वाली किस्म है और इसकी औसत उपज लगभग 400 क्विंटल प्रति हेक्टेयर बताई गई है। इसे बिहार सहित कुछ उत्तर भारतीय क्षेत्रों के लिए अनुशंसित किया गया है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Technological Options for Enhanced Productivity and Profit",
      url: IARI_TECHNOLOGICAL_OPTIONS,
      scope: "National",
    },
  },

  // ============================================================
  // 4. PUSA HYBRID-2
  // ============================================================

  {
    varietyId: "pusa-hybrid-2",
    cropId: "cauliflower",

    name: "Pusa Hybrid-2",
    nameHindi: "पूसा हाइब्रिड-2",

    type: "Hybrid",

    regionCodes: [],

    firstHarvestDays: {
      min: 80,
      max: 80,
    },

    yield: {
      min: 23.0,
      max: 23.0,
      unit: "t/ha",
    },

    fruit: {
      color: "white",
      shape: "compact",
    },

    resistance: [
      "downy mildew",
    ],

    sowingMonths: [7, 8],

    suitability: "high",

    notes:
      "पूसा हाइब्रिड-2 आईएआरआई द्वारा विकसित सार्वजनिक क्षेत्र का फूलगोभी हाइब्रिड है। यह मध्य-अगेती समूह की किस्म है और नवंबर-दिसंबर में परिपक्व होती है। इसके कर्ड सफेद और कॉम्पैक्ट होते हैं। इसकी औसत उपज लगभग 23 टन प्रति हेक्टेयर बताई गई है। यह बिहार सहित उत्तर और पूर्वी भारत के कई राज्यों के लिए अनुशंसित है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Technological Options for Enhanced Productivity and Profit",
      url: IARI_TECHNOLOGICAL_OPTIONS,
      scope: "National",
    },
  },

  // ============================================================
  // 5. PUSA KARTIK SANKAR
  // ============================================================

  {
    varietyId: "pusa-kartik-sankar",
    cropId: "cauliflower",

    name: "Pusa Kartik Sankar",
    nameHindi: "पूसा कार्तिक संकर",

    type: "Hybrid",

    regionCodes: [],

    firstHarvestDays: {
      min: 96,
      max: 96,
    },

    yield: {
      min: 14.9,
      max: 14.9,
      unit: "t/ha",
    },

    fruit: {
      color: "retentive white",
      shape: "compact",
      minWeightG: 450,
      maxWeightG: 500,
    },

    resistance: [
      "downy mildew",
    ],

    sowingMonths: [6, 7],

    suitability: "high",

    notes:
      "पूसा कार्तिक संकर अगेती फूलगोभी का हाइब्रिड है और बिहार सहित पंजाब, उत्तर प्रदेश, झारखंड, पश्चिम बंगाल और असम के लिए अनुशंसित है। यह लगभग 22–25°C तापमान में अगेती उत्पादन के लिए उपयुक्त है। इसके कर्ड सफेद, कॉम्पैक्ट और लगभग 450–500 ग्राम के होते हैं। लगभग 96 दिनों में परिपक्वता प्राप्त कर सकता है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Technological Options for Enhanced Productivity and Profit",
      url: IARI_TECHNOLOGICAL_OPTIONS,
      scope: "National",
    },
  },

  // ============================================================
  // 6. PUSA SNOWBALL K-1
  // ============================================================

  {
    varietyId: "pusa-snowball-k-1",
    cropId: "cauliflower",

    name: "Pusa Snowball K-1",
    nameHindi: "पूसा स्नोबॉल K-1",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 90,
      max: 95,
    },

    yield: {
      min: 30.0,
      max: 30.0,
      unit: "t/ha",
    },

    fruit: {
      color: "snow white",
      shape: "compact",
    },

    resistance: [
      "black rot",
    ],

    sowingMonths: [9, 10],

    suitability: "high",

    notes:
      "पूसा स्नोबॉल K-1 देर से तैयार होने वाली फूलगोभी की किस्म है। इसके कर्ड स्नो-व्हाइट, सेल्फ-ब्लांचिंग और बहुत कॉम्पैक्ट होते हैं। रोपाई के लगभग 90–95 दिनों में फसल तैयार हो सकती है। इसकी औसत उपज लगभग 30 टन प्रति हेक्टेयर बताई गई है। यह देर वाली रबी फसल के लिए उपयोगी है और सभी भारत के लिए सूचीबद्ध है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Technological Options for Enhanced Productivity and Profit",
      url: IARI_TECHNOLOGICAL_OPTIONS,
      scope: "National",
    },
  },

  // ============================================================
  // 7. PUSA SNOWBALL KT-25
  // ============================================================

  {
    varietyId: "pusa-snowball-kt-25",
    cropId: "cauliflower",

    name: "Pusa Snowball Kt. 25",
    nameHindi: "पूसा स्नोबॉल Kt. 25",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {},

    yield: {
      min: 17.5,
      max: 30.0,
      unit: "t/ha",
    },

    fruit: {
      color: "white",
      shape: "compact",
    },

    resistance: [
      "black rot",
    ],

    sowingMonths: [9, 10, 11],

    suitability: "high",

    notes:
      "पूसा स्नोबॉल Kt. 25 देर वाली फूलगोभी की किस्म है। इसे उत्तर भारत में अक्टूबर-नवंबर में लगाया जा सकता है। इसके कर्ड सफेद और कॉम्पैक्ट होते हैं। यह देर वाली रबी खेती के लिए उपयुक्त है और इसकी औसत उपज विभिन्न स्रोतों में लगभग 17.5–30 टन प्रति हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Technological Options for Enhanced Productivity and Profit",
      url: IARI_TECHNOLOGICAL_OPTIONS,
      scope: "National",
    },
  },

  // ============================================================
  // 8. PANT GOBHI-2
  // ============================================================

  {
    varietyId: "pant-gobhi-2",
    cropId: "cauliflower",

    name: "Pant Gobhi-2",
    nameHindi: "पंत गोभी-2",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {},

    yield: {
      unit: "t/ha",
    },

    fruit: {
      color: "creamy white",
      shape: "compact",
    },

    resistance: [],

    sowingMonths: [6, 7],

    suitability: "high",

    notes:
      "पंत गोभी-2 जीबी पंत कृषि एवं प्रौद्योगिकी विश्वविद्यालय द्वारा विकसित फूलगोभी की किस्म है। यह अगेती किस्म है और अक्टूबर से कटाई शुरू हो सकती है। इसे बिहार सहित उत्तर भारत के कई राज्यों के लिए अनुशंसित किया गया है।",

    source: {
      organization: "GB Pant University of Agriculture and Technology",
      title: "Pant Gobhi-2 – Cauliflower",
      url: GBPUAT_CAULIFLOWER_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 9. PANT GOBHI-3
  // ============================================================

  {
    varietyId: "pant-gobhi-3",
    cropId: "cauliflower",

    name: "Pant Gobhi-3",
    nameHindi: "पंत गोभी-3",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {},

    yield: {
      min: 10.0,
      max: 10.0,
      unit: "t/ha",
    },

    fruit: {
      color: "white",
      shape: "solid",
    },

    resistance: [],

    sowingMonths: [6, 7],

    suitability: "high",

    notes:
      "पंत गोभी-3 अगेती फूलगोभी की किस्म है। इसके कर्ड मध्यम आकार के और ठोस सफेद होते हैं। यह अक्टूबर से कटाई के लिए तैयार हो सकती है और बिहार सहित उत्तर भारत के कई राज्यों के लिए अनुशंसित है। इसकी औसत उपज लगभग 10 टन प्रति हेक्टेयर बताई गई है।",

    source: {
      organization: "GB Pant University of Agriculture and Technology",
      title: "Pant Gobhi-3 – Cauliflower",
      url: GBPUAT_CAULIFLOWER_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 10. KASHI KUNWARI
  // ============================================================

  {
    varietyId: "kashi-kunwari",
    cropId: "cauliflower",

    name: "Kashi Kunwari",
    nameHindi: "काशी कुँवारी",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {},

    yield: {
      unit: "t/ha",
    },

    fruit: {
      color: "white",
      shape: "compact",
    },

    resistance: [],

    sowingMonths: [6, 7],

    suitability: "high",

    notes:
      "काशी कुँवारी ICAR-Indian Institute of Vegetable Research, वाराणसी से संबंधित फूलगोभी की किस्म है और बिहार सहित पंजाब, उत्तर प्रदेश तथा झारखंड के लिए अनुशंसित सूची में शामिल है। इसे बिहार के लिए अगेती फूलगोभी विकल्प के रूप में रखा जा सकता है।",

    source: {
      organization: "ICAR-Indian Institute of Vegetable Research",
      title: "Cauliflower varieties recommended for cultivation",
      url: ICAR_IIVR_CAULIFLOWER_VARIETIES,
      scope: "National",
    },
  },
];