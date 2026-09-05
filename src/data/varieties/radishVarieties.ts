// src/data/varieties/radishVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL / GOVERNMENT SOURCES
// ============================================================

const IARI_RADISH_VARIETIES =
  "https://ztmbpd.iari.res.in/technologies/varietieshybrids/vegetables/radish/";

const IARI_TECHNOLOGICAL_OPTIONS =
  "https://www.pusa.iari.res.in/files/Publication/Others/Tech_Options_English-15072014.pdf";

const IARI_COMMERCIAL_VARIETIES =
  "https://agritech.tnau.ac.in/horticulture/pdf/tech_bulletin/national/Checklist-of-Commercial-Varieties-of-Vegetables.pdf";

const ICAR_RABI_ADVISORY =
  "https://icar.gov.in/sites/default/files/2022-09/Rabi-Agro-Advisory-2021-22_0.pdf";

const ICAR_IIHR_RADISH_VARIETIES =
  "https://www.iihr.res.in/sites/default/files/Revised_final-Brief%20characteristics%20of%20vegetable%20varieties%20to%20upload%20in%20IIHR%20website%20%281%29.pdf";

const ICAR_IIVR_RADISH_VARIETIES =
  "https://icar.gov.in/sites/default/files/inline-files/hs_0.pdf";

const TNAU_RADISH_GUIDE =
  "https://agritech.tnau.ac.in/horticulture/horti_vegetables_radish.html";


// ============================================================
// RADISH VARIETIES
// ============================================================

export const RADISH_VARIETIES: CropVariety[] = [

  // ==========================================================
  // 1. PUSA CHETKI
  // ==========================================================

  {
    varietyId: "radish-pusa-chetki",
    cropId: "radish",

    name: "Pusa Chetki",
    nameHindi: "पूसा चेतकी",

    type: "Variety",
    regionCodes: [],
    // Suitable for Bihar because the official IARI source
    // gives it for the northern plains / throughout India.
    regionCodes: [ ],

    firstHarvestDays: {
      min: 40,
      max: 50,
    },

    yield: {
      min: 25,
      max: 25,
      unit: "t/ha",
    },

    fruit: {
      color: "pure white",
      shape: "thick and stumpy",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    // IARI specifically gives April-August for northern plains.
    sowingMonths: [
      4,
      5,
      6,
      7,
      8,
    ],

    suitability: "high",

    notes:
      "पूसा चेतकी जल्दी तैयार होने वाली मूली की किस्म है। इसकी जड़ें शुद्ध सफेद, चिकनी, नरम, मोटी और ठूंठदार होती हैं। जड़ की लंबाई लगभग 15–22 सेमी होती है। यह गर्मी की बुवाई में अपेक्षाकृत कम तीखी होती है। IARI के अनुसार इसकी परिपक्वता लगभग 40–50 दिनों में होती है और औसत उपज लगभग 25 टन/हेक्टेयर है। उत्तर भारतीय मैदानी क्षेत्रों में अप्रैल से अगस्त तक इसकी बुवाई की जा सकती है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Radish – Pusa Chetki",
      url: IARI_RADISH_VARIETIES,
      scope: "Northern Plains / India",
    },
  },


  // ==========================================================
  // 2. PUSA MRIDULA
  // ==========================================================

  {
    varietyId: "radish-pusa-mridula",
    cropId: "radish",

    name: "Pusa Mridula",
    nameHindi: "पूसा मृदुला",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 20,
      max: 25,
    },

    yield: {
      min: 13.5,
      max: 13.5,
      unit: "t/ha",
    },

    fruit: {
      color: "bright red",
      shape: "globular",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    // IARI specifies September-February for winter crop.
    sowingMonths: [
      9,
      10,
      11,
      12,
      1,
      2,
    ],

    suitability: "high",

    notes:
      "पूसा मृदुला जल्दी तैयार होने वाली मूली की किस्म है। इसकी जड़ें गोलाकार और चमकीले लाल रंग की होती हैं तथा स्वाद हल्का तीखा होता है। IARI के अनुसार यह लगभग 20–25 दिनों में तैयार हो सकती है। इसकी औसत उपज लगभग 13.5 टन/हेक्टेयर बताई गई है। इसे उत्तर भारतीय मैदानी क्षेत्रों में सितंबर से फरवरी तक शीतकालीन फसल के रूप में उगाया जा सकता है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Technological Options for Enhanced Productivity and Profit",
      url: IARI_TECHNOLOGICAL_OPTIONS,
      scope: "North Indian Plains",
    },
  },


  // ==========================================================
  // 3. PUSA RESHMI
  // ==========================================================

  {
    varietyId: "radish-pusa-reshmi",
    cropId: "radish",

    name: "Pusa Reshmi",
    nameHindi: "पूसा रेशमी",

    type: "Variety",

    regionCodes: [ ],

    firstHarvestDays: {
      min: 55,
      max: 60,
    },

    yield: {
      min: 35,
      max: 35,
      unit: "t/ha",
    },

    fruit: {
      color: "white with green shoulder",
      shape: "long and cylindrical",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      9,
      10,
    ],

    suitability: "high",

    notes:
      "पूसा रेशमी की जड़ें लगभग 30–35 सेमी लंबी, मध्यम मोटी, सफेद रंग की और हरे कंधे वाली होती हैं। जड़ें चिकनी और हल्की तीखी होती हैं। उत्तर भारतीय मैदानी क्षेत्रों में सितंबर के मध्य से अक्टूबर तक बुवाई उपयुक्त बताई गई है। फसल लगभग 55–60 दिनों में तैयार होती है और इसकी औसत उपज लगभग 35 टन/हेक्टेयर है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Commercial Varieties of Vegetables – Radish",
      url: IARI_COMMERCIAL_VARIETIES,
      scope: "North Indian Plains / India",
    },
  },


  // ==========================================================
  // 4. PUSA DESI
  // ==========================================================

  {
    varietyId: "radish-pusa-desi",
    cropId: "radish",

    name: "Pusa Desi",
    nameHindi: "पूसा देसी",

    type: "Variety",

    regionCodes: [ ],

    firstHarvestDays: {
      min: 50,
      max: 55,
    },

    yield: {
      min: 30,
      max: 30,
      unit: "t/ha",
    },

    fruit: {
      color: "white with green shoulder",
      shape: "tapering",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      8,
      9,
    ],

    suitability: "high",

    notes:
      "पूसा देसी की जड़ें सफेद रंग की, हरे कंधे वाली, लगभग 30–35 सेमी लंबी, मध्यम मोटी और नीचे की ओर पतली होती हैं। इसका स्वाद अपेक्षाकृत तीखा होता है। उत्तर भारतीय मैदानी क्षेत्रों में अगस्त के मध्य से सितंबर तक इसकी बुवाई की जा सकती है। फसल लगभग 50–55 दिनों में तैयार होती है और औसत उपज लगभग 30 टन/हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Commercial Varieties of Vegetables – Radish",
      url: IARI_COMMERCIAL_VARIETIES,
      scope: "North Indian Plains / India",
    },
  },


  // ==========================================================
  // 5. PUSA HIMANI
  // ==========================================================

  {
    varietyId: "radish-pusa-himani",
    cropId: "radish",

    name: "Pusa Himani",
    nameHindi: "पूसा हिमानी",

    type: "Variety",

    regionCodes: [ ],

    firstHarvestDays: {
      min: 50,
      max: 55,
    },

    yield: {
      min: 32.5,
      max: 32.5,
      unit: "t/ha",
    },

    fruit: {
      color: "white with light green shoulder",
      shape: "tapering",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      12,
      1,
      2,
    ],

    suitability: "high",

    notes:
      "पूसा हिमानी की जड़ें सफेद, लगभग 30–35 सेमी लंबी, मध्यम मोटी और नीचे की ओर पतली होती हैं। कंधे हल्के हरे और गूदा सफेद, कुरकुरा तथा हल्का तीखा होता है। उत्तर भारतीय मैदानी क्षेत्रों में दिसंबर से फरवरी तक इसकी बुवाई की जा सकती है। फसल लगभग 50–55 दिनों में तैयार होती है और इसकी औसत उपज लगभग 32.5 टन/हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Commercial Varieties of Vegetables – Radish",
      url: IARI_COMMERCIAL_VARIETIES,
      scope: "North Indian Plains / India",
    },
  },


  // ==========================================================
  // 6. JAPANESE WHITE
  // ==========================================================

  {
    varietyId: "radish-japanese-white",
    cropId: "radish",

    name: "Japanese White",
    nameHindi: "जापानी व्हाइट",

    type: "Variety",

    regionCodes: [ ],

    firstHarvestDays: {
      min: 55,
      max: 60,
    },

    yield: {
      min: 25,
      max: 30,
      unit: "t/ha",
    },

    fruit: {
      color: "pure white",
      shape: "long cylindrical",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    // ICAR/IARI sources list the variety for plains/India,
    // while ICAR Rabi advisory includes it among recommended
    // rabi radish varieties.
    sowingMonths: [
      9,
      10,
      11,
      12,
      1,
      2,
    ],

    suitability: "high",

    notes:
      "Japanese White लंबी, शुद्ध सफेद, बेलनाकार और चिकनी जड़ वाली मूली की किस्म है। जड़ें लगभग 20–25 सेमी लंबी और मोटी होती हैं तथा स्वाद हल्का तीखा होता है। उपलब्ध सरकारी स्रोतों में इसकी परिपक्वता लगभग 55–60 दिनों के आसपास और औसत उपज लगभग 25–30 टन/हेक्टेयर बताई गई है। यह भारत में व्यापक रूप से उगाई जाने वाली किस्म है और ICAR की रबी सलाह में भी शामिल है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Commercial Varieties of Vegetables – Radish",
      url: IARI_COMMERCIAL_VARIETIES,
      scope: "India",
    },
  },


  // ==========================================================
  // 7. ARKA NISHANT
  // ==========================================================

  {
    varietyId: "radish-arka-nishant",
    cropId: "radish",

    name: "Arka Nishant",
    nameHindi: "अर्का निशांत",

    type: "Variety",

    regionCodes: [ ],

    firstHarvestDays: {
      min: null,
      max: null,
    },

    yield: {
      min: 25,
      max: 30,
      unit: "t/ha",
    },

    fruit: {
      color: "marble white",
      shape: "long",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [
      "pithiness",
      "premature bolting",
      "root branching",
      "root forking",
    ],

    sowingMonths: [
      9,
      10,
      11,
      12,
      1,
      2,
    ],

    suitability: "high",

    notes:
      "अर्का निशांत ICAR-IIHR द्वारा विकसित मूली की किस्म है। इसकी जड़ें लंबी, मार्बल-सफेद रंग की, कुरकुरी और हल्के तीखे स्वाद वाली होती हैं। यह पिथिनेस, समय से पहले बोल्टिंग, जड़ शाखाकरण और फोर्किंग के प्रति प्रतिरोधी बताई गई है। इसकी उपज लगभग 25–30 टन/हेक्टेयर है। ICAR की रबी सलाह में भी अर्का निशांत को मूली की अनुशंसित किस्मों में शामिल किया गया है।",

    source: {
      organization: "ICAR-Indian Institute of Horticultural Research",
      title: "Brief Characteristics of Vegetable Varieties – Arka Nishant",
      url: ICAR_IIHR_RADISH_VARIETIES,
      scope: "India",
    },
  },


  // ==========================================================
  // 8. KASHI SWETA
  // ==========================================================

  {
    varietyId: "radish-kashi-sweta",
    cropId: "radish",

    name: "Kashi Sweta",
    nameHindi: "काशी स्वेता",

    type: "Variety",

    // Official ICAR source specifically includes Bihar.
    regionCodes: [ ],

    firstHarvestDays: {
      min: 30,
      max: 35,
    },

    yield: {
      min: 45,
      max: 47,
      unit: "t/ha",
    },

    fruit: {
      color: "white",
      shape: "straight and tapering",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      9,
      10,
      11,
    ],

    suitability: "high",

    notes:
      "काशी स्वेता ICAR-Indian Institute of Vegetable Research द्वारा विकसित मूली की अगेती किस्म है। इसे पूसा चेतकी सामग्री से चयन द्वारा विकसित किया गया है। इसकी जड़ें लगभग 25–30 सेमी लंबी, सीधी, सफेद और नीचे की ओर पतली होती हैं। यह लगभग 30–35 दिनों में बाजार योग्य हो सकती है। इसकी उपज लगभग 450–470 क्विंटल प्रति हेक्टेयर यानी 45–47 टन/हेक्टेयर बताई गई है। इसे बिहार सहित उत्तर प्रदेश, पंजाब और झारखंड के लिए अनुशंसित किया गया है।",

    source: {
      organization: "ICAR-Indian Institute of Vegetable Research",
      title: "Improved Vegetable Varieties – Kashi Sweta",
      url: IARI_COMMERCIAL_VARIETIES,
      scope: "Bihar / UP / Punjab / Jharkhand",
    },
  },


  // ==========================================================
  // 9. PUSA SHWETA
  // ==========================================================

  {
    varietyId: "radish-pusa-shweta",
    cropId: "radish",

    name: "Pusa Shweta",
    nameHindi: "पूसा श्वेता",

    type: "Variety",

    regionCodes: [ ],

    firstHarvestDays: {
      min: 50,
      max: 55,
    },

    yield: {
      min: 40,
      max: 45,
      unit: "t/ha",
    },

    fruit: {
      color: "extra white",
      shape: "cylindrical",
      minWeightG: 200,
      maxWeightG: 200,
    },

    resistance: [],

    sowingMonths: [
      9,
      10,
      11,
    ],

    suitability: "high",

    notes:
      "पूसा श्वेता मध्यम लंबी, अतिरिक्त सफेद और बेलनाकार जड़ वाली मूली की किस्म है। IARI के अनुसार उत्तर भारतीय मैदानी क्षेत्रों में सितंबर से नवंबर तक इसकी बुवाई की जा सकती है। बाजार योग्य परिपक्वता लगभग 50–55 दिनों में आती है। औसत जड़ वजन लगभग 200 ग्राम और जड़ उपज लगभग 40–45 टन/हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Radish – Pusa Shweta",
      url: IARI_RADISH_VARIETIES,
      scope: "North Indian Plains",
    },
  },


  // ==========================================================
  // 10. PUSA VIDHU
  // ==========================================================

  {
    varietyId: "radish-pusa-vidhu",
    cropId: "radish",

    name: "Pusa Vidhu",
    nameHindi: "पूसा विधु",

    type: "Variety",

    regionCodes: [ ],

    firstHarvestDays: {
      min: null,
      max: null,
    },

    yield: {
      min: null,
      max: null,
      unit: "t/ha",
    },

    fruit: {
      color: "white",
      shape: null,
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    // IARI technological options:
    // Mid-December to first fortnight of March.
    sowingMonths: [
      12,
      1,
      2,
      3,
    ],

    suitability: "medium",

    notes:
      "पूसा विधु IARI द्वारा उत्तर भारतीय मैदानी क्षेत्रों के लिए विकसित मूली की किस्मों में शामिल है। IARI के तकनीकी विकल्पों में इसे मध्य-दिसंबर से मार्च के पहले पखवाड़े तक की अवधि के लिए सूचीबद्ध किया गया है। उपलब्ध स्रोत में इस किस्म के लिए उपज और पहली तुड़ाई का स्पष्ट आंकड़ा उपलब्ध नहीं है, इसलिए इन दोनों आंकड़ों को अनुमानित नहीं किया गया है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Technological Options for Enhanced Productivity and Profit",
      url: IARI_TECHNOLOGICAL_OPTIONS,
      scope: "North Indian Plains",
    },
  },


  // ==========================================================
  // 11. PUSA RASHMI
  // ==========================================================

  {
    varietyId: "radish-pusa-rashmi",
    cropId: "radish",

    name: "Pusa Rashmi",
    nameHindi: "पूसा रश्मि",

    type: "Variety",

    regionCodes: [ ],

    firstHarvestDays: {
      min: null,
      max: null,
    },

    yield: {
      min: 20,
      max: 30,
      unit: "t/ha",
    },

    fruit: {
      color: "white",
      shape: null,
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      9,
      10,
      11,
      12,
      1,
      2,
    ],

    suitability: "medium",

    notes:
      "पूसा रश्मि उत्तर भारतीय मैदानी क्षेत्रों में उगाई जाने वाली मूली की किस्मों में शामिल है। सरकारी बागवानी स्रोत इसे मैदानी क्षेत्रों की लोकप्रिय किस्म के रूप में सूचीबद्ध करते हैं। उपलब्ध सरकारी स्रोतों में मूली के लिए सामान्य मैदानी बुवाई सितंबर से बताई गई है और उपज लगभग 20–30 टन/हेक्टेयर के स्तर पर दी गई है। इस किस्म के लिए अलग से पहली तुड़ाई का स्पष्ट आंकड़ा उपलब्ध नहीं होने के कारण उसे नहीं जोड़ा गया है।",

    source: {
      organization: "Tamil Nadu Agricultural University",
      title: "Horticulture – Radish",
      url: TNAU_RADISH_GUIDE,
      scope: "Plains / India",
    },
  },


  // ==========================================================
  // 12. CO-1
  // ==========================================================

  {
    varietyId: "radish-co-1",
    cropId: "radish",

    name: "CO 1",
    nameHindi: "सीओ 1",

    type: "Variety",

    regionCodes: [ ],

    firstHarvestDays: {
      min: 45,
      max: 60,
    },

    yield: {
      min: 20,
      max: 30,
      unit: "t/ha",
    },

    fruit: {
      color: null,
      shape: null,
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      9,
      10,
      11,
      12,
      1,
      2,
    ],

    suitability: "medium",

    notes:
      "CO 1 मैदानी क्षेत्रों के लिए सूचीबद्ध मूली की किस्म है। सरकारी बागवानी स्रोतों में इसे Pusa Rashmi, Pusa Chetki, Pusa Desi, Japanese White और Arka Nishant के साथ मैदानी क्षेत्रों की लोकप्रिय किस्मों में शामिल किया गया है। मूली के लिए मैदानी क्षेत्रों में सितंबर की बुवाई उपयुक्त बताई गई है। सामान्य उपज लगभग 20–30 टन/हेक्टेयर और फसल अवधि लगभग 45–60 दिनों के स्तर पर दी गई है।",

    source: {
      organization: "Tamil Nadu Agricultural University",
      title: "Horticulture – Radish",
      url: TNAU_RADISH_GUIDE,
      scope: "Plains / India",
    },
  },
];

export default RADISH_VARIETIES;