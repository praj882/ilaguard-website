// src/data/varieties/cabbageVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL SOURCES
// ============================================================

const IARI_CABBAGE =
  "https://ztmbpd.iari.res.in/technologies/varietieshybrids/vegetables/cabbage/";

const IARI_TECH_OPTIONS =
  "https://www.pusa.iari.res.in/files/Publication/Others/Tech_Options_English-15072014.pdf";

const IARI_TECH_OPTIONS_MIRROR =
  "https://www.nahep.ig.iari.res.in/files/Publication/Others/Tech_Options_English-15072014.pdf";

const IARI_ANNUAL_REPORT_2022 =
  "https://www.iari.res.in/files/Publication/annual_report/Annual_Report_en_2022.pdf";

const IARI_ANNUAL_REPORT_2024 =
  "https://www.iari.res.in/files/Publication/annual_report/IARI_Annual_Report_2024_28072025.pdf";

const IARI_QRT_2017_2022 =
  "https://iari.res.in/files/Latest-News/QRT_Report_2017_2022_20082024.pdf";

const NHB_CABBAGE =
  "https://nhb.gov.in/bulletin_files/vegetable/cabbage/cab012.pdf";

const NHB_CABBAGE_DATABASE =
  "https://nhb.gov.in/area-pro/Chapter%202%20%28pages%2025-210%29.pdf";

const NHB_CABBAGE_STUDY =
  "https://nhb.gov.in/pdf/StudyReport6.pdf";

const TNAU_COMMERCIAL_CABBAGE =
  "https://agritech.tnau.ac.in/horticulture/pdf/tech_bulletin/national/Checklist-of-Commercial-Varieties-of-Vegetables.pdf";

const BAU_HORTICULTURE =
  "https://bausabour.ac.in/department_details.aspx?cc=001&deptcode=Horticulture+%28Olericulture+%5E+Floriculture%29";

const BIHAR_HORTICULTURE =
  "https://horticulture.bihar.gov.in/HORTMIS/ProjectBasedActivity/ProjectDocuments/ModelProject_ColdRoomStaging.pdf";

const APEDA_CABBAGE =
  "https://apeda.gov.in/OtherFreshVegetable";

const ICAR_RABI_ADVISORY =
  "https://icar.gov.in/sites/default/files/2022-09/Rabi-Agro-Advisory-2021-22_0.pdf";

// ============================================================
// CABBAGE VARIETIES
// ============================================================

export const CABBAGE_VARIETIES: CropVariety[] = [

  // ==========================================================
  // 1. PUSA MUKTA
  // ==========================================================

  {
    varietyId: "cabbage-pusa-mukta",
    cropId: "cabbage",

    name: "Pusa Mukta",
    nameHindi: "पूसा मुक्ता",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths: [9],

    suitability: "high",

    maturityDays: {
      min: 70,
      max: 75,
    },

    firstHarvestDays: {
      min: 70,
      max: 75,
    },

    yield: {
      min: 25,
      max: 30,
      unit: "t/ha",
    },

    fruit: {
      color: "Light green",
      shape: "Flattish round",
      minWeightG: 1500,
      maxWeightG: 2000,
    },

    resistance: [
      "Black rot",
    ],

    notes:
      "पूसा मुक्ता छोटी डंठल वाली पत्तागोभी की किस्म है। इसके सिर मध्यम आकार के, हल्के हरे रंग के और चपटे-गोल होते हैं। इसका उत्पादन लगभग 25–30 टन प्रति हेक्टेयर बताया गया है। यह बिहार सहित पूर्वी भारत के क्षेत्रों के लिए उपयुक्त है और बिहार की रबी मौसम की खेती में उपयोग की जा सकती है।",

    source: {
      organization:
        "ICAR-Indian Agricultural Research Institute / Government agricultural sources",

      title:
        "Commercial Varieties of Vegetables – Cabbage",

      url:
        TNAU_COMMERCIAL_CABBAGE,

      scope: "Bihar",
    },
  },

  // ==========================================================
  // 2. PUSA CABBAGE HYBRID-1 / KGMR-1
  // ==========================================================

  {
    varietyId: "cabbage-pusa-cabbage-hybrid-1",
    cropId: "cabbage",

    name: "Pusa Cabbage Hybrid-1",
    nameHindi: "पूसा कैबेज हाइब्रिड-1",

    type: "F1 Hybrid",

    regionCodes: [ ],

    sowingMonths: [9, 10, 11],

    suitability: "high",

    maturityDays: {
      min: 60,
      max: 65,
    },

    firstHarvestDays: {
      min: 60,
      max: 65,
    },

    yield: {
      min: 35,
      max: 40,
      unit: "t/ha",
    },

    fruit: {
      color: "Green",
      shape: "Round and compact",
    },

    resistance: [
      "Black rot",
    ],

    tolerance: [
      "High temperature",
    ],

    notes:
      "पूसा कैबेज हाइब्रिड-1 आईएआरआई द्वारा विकसित सार्वजनिक क्षेत्र का हाइब्रिड है। इसके सिर गोल, हरे और कॉम्पैक्ट होते हैं। इसकी खेत में टिके रहने की क्षमता अच्छी बताई गई है। यह किस्म बिहार के लिए भी दर्ज की गई है और सितंबर से नवंबर के दौरान इसकी खेती की जा सकती है।",

    source: {
      organization:
        "ICAR-Indian Agricultural Research Institute",

      title:
        "Pusa Cabbage Hybrid-1 / KGMR-1",

      url:
        IARI_TECH_OPTIONS_MIRROR,

      scope: "Bihar",
    },
  },

  // ==========================================================
  // 3. GOLDEN ACRE
  // ==========================================================

  {
    varietyId: "cabbage-golden-acre",
    cropId: "cabbage",

    name: "Golden Acre",
    nameHindi: "गोल्डन एकर",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths: [8, 9],

    suitability: "high",

    maturityDays: {
      min: 60,
      max: 75,
    },

    firstHarvestDays: {
      min: 60,
      max: 75,
    },

    yield: {
      min: 20,
      max: 24,
      unit: "t/ha",
    },

    fruit: {
      color: "Green",
      shape: "Round and compact",
      minWeightG: 1000,
      maxWeightG: 1500,
    },

    notes:
      "गोल्डन एकर अगेती पत्तागोभी की किस्म है। पौधे छोटे होते हैं और इसके सिर छोटे, गोल तथा कॉम्पैक्ट होते हैं। इसकी उपज लगभग 20–24 टन प्रति हेक्टेयर बताई गई है। यह भारत में व्यापक रूप से उगाई जाने वाली किस्म है और बिहार में भी इसकी खेती की जा सकती है।",

    source: {
      organization:
        "ICAR-Indian Agricultural Research Institute",

      title:
        "Technology Options – Cabbage",

      url:
        IARI_TECH_OPTIONS,

      scope: "National",
    },
  },

  // ==========================================================
  // 4. PUSA DRUM HEAD
  // ==========================================================

  {
    varietyId: "cabbage-pusa-drum-head",
    cropId: "cabbage",

    name: "Pusa Drum Head",
    nameHindi: "पूसा ड्रम हेड",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths: [9, 10],

    suitability: "high",

    maturityDays: {
      min: 80,
      max: 90,
    },

    firstHarvestDays: {
      min: 80,
      max: 90,
    },

    yield: {
      min: 30,
      max: 30,
      unit: "t/ha",
    },

    fruit: {
      color: "Light green",
      shape: "Large, flat, drum-shaped",
      minWeightG: 3000,
      maxWeightG: 5000,
    },

    resistance: [
      "Black leg",
    ],

    notes:
      "पूसा ड्रम हेड देर से तैयार होने वाली पत्तागोभी की किस्म है। इसके सिर बड़े, चपटे और ड्रम के आकार के होते हैं। एक सिर का वजन लगभग 3–5 किलोग्राम हो सकता है और इसकी उपज लगभग 30 टन प्रति हेक्टेयर बताई गई है। अच्छी वृद्धि के लिए पर्याप्त ठंडे मौसम की आवश्यकता होती है।",

    source: {
      organization:
        "ICAR-Indian Agricultural Research Institute",

      title:
        "Technology Options – Cabbage",

      url:
        IARI_TECH_OPTIONS,

      scope: "National",
    },
  },

  // ==========================================================
  // 5. PUSA AGETI
  // ==========================================================

  {
    varietyId: "cabbage-pusa-ageti",
    cropId: "cabbage",

    name: "Pusa Ageti",
    nameHindi: "पूसा अगेती",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths: [8, 9, 10],

    suitability: "high",

    maturityDays: {
      min: 75,
      max: 90,
    },

    firstHarvestDays: {
      min: 75,
      max: 90,
    },

    yield: {
      min: 11,
      max: 33,
      unit: "t/ha",
    },

    fruit: {
      color: "Green",
      shape: "Flattish round",
      minWeightG: 600,
      maxWeightG: 1200,
    },

    tolerance: [
      "Relatively high temperature",
    ],

    notes:
      "पूसा अगेती उपोष्ण परिस्थितियों के लिए विकसित अगेती पत्तागोभी की किस्म है। इसके सिर चपटे-गोल और लगभग 600–1200 ग्राम के होते हैं। यह अपेक्षाकृत अधिक तापमान वाली परिस्थितियों में भी सिर बनाने में सक्षम है। उपलब्ध जानकारी के अनुसार 15–30°C तापमान में इसकी अच्छी वृद्धि हो सकती है।",

    source: {
      organization:
        "ICAR-Indian Agricultural Research Institute",

      title:
        "Commercial Varieties of Vegetables – Cabbage",

      url:
        TNAU_COMMERCIAL_CABBAGE,

      scope: "National",
    },
  },

  // ==========================================================
  // 6. PRIDE OF INDIA
  // ==========================================================

  {
    varietyId: "cabbage-pride-of-india",
    cropId: "cabbage",

    name: "Pride of India",
    nameHindi: "प्राइड ऑफ इंडिया",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths: [9, 10],

    suitability: "high",

    maturityDays: {
      min: 70,
      max: 80,
    },

    firstHarvestDays: {
      min: 70,
      max: 80,
    },

    yield: {
      min: 20,
      max: 28,
      unit: "t/ha",
    },

    fruit: {
      color: "Green",
      shape: "Round",
      minWeightG: 1000,
      maxWeightG: 1500,
    },

    notes:
      "प्राइड ऑफ इंडिया पत्तागोभी की किस्म है जिसके सिर मध्यम से बड़े, गोल और हरे रंग के होते हैं। इसका सिर लगभग 1–1.5 किलोग्राम का हो सकता है। इसकी उपज लगभग 20–28 टन प्रति हेक्टेयर बताई गई है। बिहार कृषि विश्वविद्यालय, सबौर में इस किस्म का मूल्यांकन किया गया है।",

    source: {
      organization:
        "Bihar Agricultural University, Sabour",

      title:
        "Department of Horticulture – Vegetable and Floriculture",

      url:
        BAU_HORTICULTURE,

      scope: "Bihar",
    },
  },

  // ==========================================================
  // 7. PUSA SYNTHETIC
  // ==========================================================

  {
    varietyId: "cabbage-pusa-synthetic",
    cropId: "cabbage",

    name: "Pusa Synthetic",
    nameHindi: "पूसा सिंथेटिक",

    type: "Variety",

    regionCodes: [],

    sowingMonths: [9, 10],

    suitability: "medium",

    yield: {
      min: 35,
      max: 46,
      unit: "t/ha",
    },

    notes:
      "पूसा सिंथेटिक पत्तागोभी की एक अगेती किस्म है, जिसे वाणिज्यिक और उन्नत किस्मों में सूचीबद्ध किया गया है। उपलब्ध समीक्षा किए गए सरकारी स्रोतों में बिहार के लिए इसकी पर्याप्त स्पष्ट विशेष सिफारिश नहीं मिली है। इसलिए इसे बिहार के लिए प्राथमिक अनुशंसा में शामिल नहीं किया गया है।",

    source: {
      organization:
        "National Horticulture Board",

      title:
        "Cabbage – Varieties",

      url:
        NHB_CABBAGE,

      scope: "National",
    },
  },

  // ==========================================================
  // 8. PUSA HYBRID-81
  // ==========================================================

  {
    varietyId: "cabbage-pusa-hybrid-81",
    cropId: "cabbage",

    name: "Pusa Hybrid-81",
    nameHindi: "पूसा हाइब्रिड-81",

    type: "F1 Hybrid",

    regionCodes: [],

    sowingMonths: [8, 9],

    suitability: "medium",

    maturityDays: {
      min: 60,
      max: 65,
    },

    firstHarvestDays: {
      min: 60,
      max: 65,
    },

    yield: {
      min: 43.5,
      max: 43.5,
      unit: "t/ha",
    },

    fruit: {
      color: "Dark green",
      shape: "Round and very compact",
    },

    resistance: [
      "Field tolerance to black rot",
    ],

    notes:
      "पूसा हाइब्रिड-81 आईएआरआई द्वारा विकसित सार्वजनिक क्षेत्र का F1 हाइब्रिड है। इसके पत्ते गहरे हरे और सिर गोल तथा बहुत कॉम्पैक्ट होते हैं। इसकी उपज लगभग 43.5 टन प्रति हेक्टेयर बताई गई है। समीक्षा किए गए आधिकारिक स्रोतों में बिहार के लिए इसकी स्पष्ट विशेष सिफारिश स्थापित नहीं हुई है।",

    source: {
      organization:
        "ICAR-Indian Agricultural Research Institute",

      title:
        "Cabbage – Pusa Hybrid-81",

      url:
        IARI_CABBAGE,

      scope: "National",
    },
  },

  // ==========================================================
  // 9. PUSA HYBRID-82
  // ==========================================================

  {
    varietyId: "cabbage-pusa-hybrid-82",
    cropId: "cabbage",

    name: "Pusa Hybrid-82",
    nameHindi: "पूसा हाइब्रिड-82",

    type: "F1 Hybrid",

    regionCodes: [],

    sowingMonths: [9, 10],

    suitability: "medium",

    maturityDays: {
      min: 65,
      max: 75,
    },

    firstHarvestDays: {
      min: 65,
      max: 75,
    },

    yield: {
      min: 40.3,
      max: 40.3,
      unit: "t/ha",
    },

    fruit: {
      color: "Dark green",
      shape: "Flat and very compact",
    },

    notes:
      "पूसा हाइब्रिड-82 CMS आधारित पत्तागोभी हाइब्रिड है, जिसे 2022 में जारी और अधिसूचित किया गया। इसके सिर चपटे और बहुत कॉम्पैक्ट होते हैं। इसकी खेत में टिके रहने की क्षमता अच्छी बताई गई है और बहु-स्थान परीक्षणों में औसत उपज लगभग 40.3 टन प्रति हेक्टेयर दर्ज की गई। समीक्षा किए गए स्रोतों में बिहार की विशेष सिफारिश स्पष्ट नहीं है।",

    source: {
      organization:
        "ICAR-Indian Agricultural Research Institute",

      title:
        "IARI Annual Report 2022 – Pusa Hybrid-82",

      url:
        IARI_ANNUAL_REPORT_2022,

      scope: "National",
    },
  },

  // ==========================================================
  // 10. PUSA RED CABBAGE HYBRID-1
  // ==========================================================

  {
    varietyId: "cabbage-pusa-red-cabbage-hybrid-1",
    cropId: "cabbage",

    name: "Pusa Red Cabbage Hybrid-1",
    nameHindi: "पूसा रेड कैबेज हाइब्रिड-1",

    type: "F1 Hybrid",

    regionCodes: [],

    sowingMonths: [9, 10],

    suitability: "low",

    maturityDays: {
      min: 60,
      max: 75,
    },

    yield: {
      min: 43.63,
      max: 43.63,
      unit: "t/ha",
    },

    fruit: {
      color: "Red / purple",
      shape: "Cabbage head",
      weightG: 1100,
    },

    notes:
      "पूसा रेड कैबेज हाइब्रिड-1 CMS तकनीक से विकसित सार्वजनिक क्षेत्र का लाल पत्तागोभी हाइब्रिड है। बहु-स्थान परीक्षणों में इसके सिर का औसत वजन लगभग 1.10 किलोग्राम और उपज लगभग 43.63 टन प्रति हेक्टेयर दर्ज की गई। उपलब्ध आधिकारिक जानकारी के आधार पर इसे बिहार की विशेष अनुशंसित किस्म के रूप में शामिल नहीं किया गया है।",

    source: {
      organization:
        "ICAR-Indian Agricultural Research Institute",

      title:
        "IARI Annual Report 2022 – Pusa Red Cabbage Hybrid-1",

      url:
        IARI_ANNUAL_REPORT_2022,

      scope: "National",
    },
  },
];

// ============================================================
// DEFAULT EXPORT
// ============================================================

export default CABBAGE_VARIETIES;