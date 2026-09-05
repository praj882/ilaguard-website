// src/data/varieties/cucumberVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL SOURCES
// ============================================================

const ICAR_PUSA_LONG_GREEN =
  "https://epubs.icar.org.in/index.php/IndHort/article/view/124856";

const ICAR_PUSA_LONG_GREEN_PDF =
  "https://www.icar.org.in/sites/default/files/inline-files/IH-May-June-2022-2.pdf";

const IARI_SCIENTIST_CUCUMBER =
  "https://www.iari.res.in/sci_db/sci_details.php?scid=WEZWMUJ6NzQxNjVhT2NVSVJhOGhyQT09";

const ICAR_NEW_VARieties =
  "https://icar.gov.in/en/node/4515";

const ICAR_IIHR_ARKA_VEERA =
  "https://www.iihr.res.in/sites/default/files/IIHR%20Newsletter%20July%20to%20Dec%202021.pdf";

const ICAR_KHARIF_ADVISORY =
  "https://icar.gov.in/sites/default/files/2025-10/ICAR-En-Kharif-Agro-Advisories-for-Farmers-2025.pdf";

const ICAR_CUCUMBER_PROTECTED =
  "https://icar.gov.in/sites/default/files/2025-12/August_2025%20Indian%20Farming.pdf";

const COMMERCIAL_VEGETABLE_VARIETIES =
  "https://shm.uk.gov.in/files/Books/Check_List_of_Commercial_Varieties_of_Vegetables_%28pdf_8.22_MB%29.pdf";


// ============================================================
// CUCUMBER VARIETIES
// ============================================================

export const CUCUMBER_VARIETIES: CropVariety[] = [

  // ==========================================================
  // 1. PUSA LONG GREEN
  // ==========================================================

  {
    varietyId: "pusa-long-green",
    cropId: "cucumber",

    name: "Pusa Long Green",
    nameHindi: "पूसा लॉन्ग ग्रीन",

    type: "Variety",

    /*
     * Zone IV specifically includes:
     * Punjab, Uttar Pradesh, Bihar and Jharkhand.
     *
     * Therefore this variety is explicitly applicable
     * to Bihar.
     */
    regionCodes: ["01"],

    firstHarvestDays: {
      min: 45,
      max: 50,
    },

    yield: {
      min: 18.93,
      max: 18.93,
      unit: "t/ha",
    },

    fruit: {
      color: "green",
      shape: "long cylindrical",
      weightG: 161,
    },

    resistance: [],

    /*
     * Spring-summer:
     * mid-February to February-end
     *
     * Kharif:
     * June-end
     */
    sowingMonths: [
      2,
      6,
    ],

    suitability: "high",

    notes:
      "पूसा लॉन्ग ग्रीन IARI द्वारा विकसित अगेती लंबी फल वाली खीरे की किस्म है। इसे Zone IV के लिए विकसित किया गया है, जिसमें बिहार भी शामिल है। यह वसंत-ग्रीष्म और खरीफ मौसम में उगाई जा सकती है। पहली तुड़ाई लगभग 45–50 दिनों में हो सकती है। फलों की लंबाई लगभग 18.60 सेमी और औसत वजन लगभग 161 ग्राम बताया गया है। परीक्षणों में इसकी उपज 18.93 टन/हेक्टेयर दर्ज हुई, जो राष्ट्रीय चेक Pant Khira-1 से 34.93% अधिक थी।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute / ICAR-IIVR",
      title:
        "Pusa Long Green – A high yielding cucumber variety for spring summer and kharif season",
      url: ICAR_PUSA_LONG_GREEN,
      scope: "Bihar / Zone IV",
    },
  },


  // ==========================================================
  // 2. PUSA UDAY
  // ==========================================================

  {
    varietyId: "pusa-uday",
    cropId: "cucumber",

    name: "Pusa Uday",
    nameHindi: "पूसा उदय",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 50,
      max: 55,
    },

    yield: {
      min: 15.5,
      max: 15.5,
      unit: "t/ha",
    },

    fruit: {
      color: "light green",
      shape: "cylindrical",
      minWeightG: 175,
      maxWeightG: 200,
    },

    resistance: [],

    /*
     * Suitable for spring-summer and rainy seasons.
     * Month range kept broad because official commercial
     * variety information describes seasons rather than
     * exact calendar dates.
     */
    sowingMonths: [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
    ],

    suitability: "medium",

    notes:
      "पूसा उदय IARI द्वारा विकसित खीरे की किस्म है। उपलब्ध सरकारी कृषि स्रोतों में इसे वसंत-ग्रीष्म और वर्षा ऋतु में खेती के लिए उपयुक्त बताया गया है। पहली तुड़ाई लगभग 50–55 दिनों में हो सकती है। इसके फल हल्के हरे, सीधे, बेलनाकार और लगभग 175–200 ग्राम के होते हैं।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title:
        "Checklist of Commercial Varieties of Vegetables – Cucumber",
      url: COMMERCIAL_VEGETABLE_VARIETIES,
      scope: "India",
    },
  },


  // ==========================================================
  // 3. PUSA SANYOG
  // ==========================================================

  {
    varietyId: "pusa-sanyog",
    cropId: "cucumber",

    name: "Pusa Sanyog",
    nameHindi: "पूसा संयोग",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 50,
      max: 50,
    },

    yield: {
      min: 20,
      max: 20,
      unit: "t/ha",
    },

    fruit: {
      color: "dark green",
      shape: "cylindrical",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
    ],

    suitability: "medium",

    notes:
      "पूसा संयोग खीरे की अगेती किस्म है। सरकारी कृषि स्रोत के अनुसार इसकी पहली तुड़ाई लगभग 50 दिनों में हो सकती है। फल 28–30 सेमी लंबे, बेलनाकार, आकर्षक गहरे हरे रंग के और कुरकुरे होते हैं। इसकी उपज लगभग 200 क्विंटल प्रति हेक्टेयर बताई गई है। उपलब्ध स्रोतों में इसकी विशेष अनुशंसा हिमाचल प्रदेश, जम्मू-कश्मीर और उत्तराखंड के लिए दी गई है, इसलिए बिहार के लिए इसे उच्च प्राथमिकता नहीं दी गई है।",

    source: {
      organization: "ICAR / Government Vegetable Variety Checklist",
      title:
        "Checklist of Commercial Varieties of Vegetables – Cucumber",
      url: COMMERCIAL_VEGETABLE_VARIETIES,
      scope: "Other",
    },
  },


  // ==========================================================
  // 4. PUSA SEEDLESS CUCUMBER-6
  // ==========================================================

  {
    varietyId: "pusa-seedless-cucumber-6",
    cropId: "cucumber",

    name: "Pusa Seedless Cucumber-6",
    nameHindi: "पूसा सीडलेस ककड़ी-6",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 40,
      max: 45,
    },

    yield: {
      min: 126,
      max: 126,
      unit: "t/ha",
    },

    fruit: {
      color: "dark green",
      shape: "cylindrical",
      weightG: 105,
    },

    resistance: [],

    /*
     * Official description:
     * winter off-season cultivation November-March
     * under protected conditions.
     */
    sowingMonths: [
      11,
      12,
      1,
      2,
      3,
    ],

    suitability: "medium",

    notes:
      "पूसा सीडलेस ककड़ी-6 IARI द्वारा विकसित parthenocarpic और gynoecious खीरे की किस्म है, जो संरक्षित खेती के लिए उपयुक्त है। पहली तुड़ाई लगभग 40–45 दिनों में हो सकती है। फल समान, गहरे हरे, चमकदार, बेलनाकार और लगभग 105 ग्राम के होते हैं। सर्दियों के ऑफ-सीजन में संरक्षित खेती के दौरान इसकी औसत उपज लगभग 126 टन/हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title:
        "Pusa Seedless Cucumber-6 – New Varieties of Crops Released and Identified",
      url: ICAR_NEW_VARieties,
      scope: "India / Protected cultivation",
    },
  },


  // ==========================================================
  // 5. PUSA BARKHA
  // ==========================================================

  {
    varietyId: "pusa-barkha",
    cropId: "cucumber",

    name: "Pusa Barkha",
    nameHindi: "पूसा बरखा",

    type: "Variety",

    regionCodes: [],

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
      color: null,
      shape: null,
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    /*
     * Listed by ICAR among improved cucumber varieties
     * for kharif cultivation.
     */
    sowingMonths: [
      6,
      7,
      8,
    ],

    suitability: "medium",

    notes:
      "पूसा बरखा IARI की खीरे की किस्म है और ICAR के खरीफ कृषि परामर्श में इसे उन्नत खीरे की किस्मों में शामिल किया गया है। इसे खरीफ मौसम के लिए विकल्प के रूप में रखा जा सकता है। उपलब्ध स्रोत में इस रिकॉर्ड के लिए उपज और पहली तुड़ाई के विस्तृत आंकड़े उपलब्ध नहीं हैं।",

    source: {
      organization: "ICAR",
      title:
        "Kharif Agro-Advisories for Farmers 2025 – Cucumber and Pumpkin",
      url: ICAR_KHARIF_ADVISORY,
      scope: "India",
    },
  },


  // ==========================================================
  // 6. ARKA VEERA
  // ==========================================================

  {
    varietyId: "arka-veera",
    cropId: "cucumber",

    name: "Arka Veera",
    nameHindi: "अर्का वीरा",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 42,
      max: 45,
    },

    yield: {
      min: 28.5,
      max: 28.5,
      unit: "t/ha",
    },

    fruit: {
      color: "light green",
      shape: "cylindrical",
      weightG: 180,
    },

    resistance: [
      "downy mildew tolerance",
    ],

    /*
     * IIHR describes it as suitable for round-the-year
     * cultivation.
     */
    sowingMonths: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
    ],

    suitability: "low",

    notes:
      "अर्का वीरा ICAR-IIHR द्वारा विकसित उच्च उत्पादकता वाली open-pollinated खीरे की किस्म है। इसमें downy mildew के प्रति सहनशीलता बताई गई है। पहली तुड़ाई लगभग 42–45 दिनों में हो सकती है। फल हल्के हरे, बेलनाकार और चिकने होते हैं तथा औसत फल वजन लगभग 180 ग्राम है। 90–100 दिनों में लगभग 28.5 टन/हेक्टेयर उपज बताई गई है। IIHR स्रोत इसे round-the-year cultivation के लिए उपयुक्त बताता है। बिहार के लिए अलग राज्य-स्तरीय अनुशंसा उपलब्ध न होने के कारण इसे बिहार में उच्च प्राथमिकता नहीं दी गई है।",

    source: {
      organization: "ICAR-Indian Institute of Horticultural Research",
      title:
        "Arka Veera – Cucumber variety",
      url: ICAR_IIHR_ARKA_VEERA,
      scope: "India / Other",
    },
  },


  // ==========================================================
  // 7. PANT KHIRA-1
  // ==========================================================

  {
    varietyId: "pant-khira-1",
    cropId: "cucumber",

    name: "Pant Khira-1",
    nameHindi: "पंत खीरा-1",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 50,
      max: 60,
    },

    yield: {
      min: 15,
      max: 15,
      unit: "t/ha",
    },

    fruit: {
      color: "green",
      shape: "cylindrical",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
    ],

    suitability: "medium",

    notes:
      "पंत खीरा-1 GBPUAT द्वारा विकसित खीरे की किस्म है। इसके फल लगभग 20 सेमी लंबे, बेलनाकार और हल्की सफेद धारियों वाले होते हैं। पहली तुड़ाई लगभग 50–60 दिनों में हो सकती है और उपज क्षमता लगभग 150 क्विंटल प्रति हेक्टेयर बताई गई है।",

    source: {
      organization:
        "GB Pant University of Agriculture and Technology",
      title:
        "Checklist of Commercial Varieties of Vegetables – Cucumber",
      url: COMMERCIAL_VEGETABLE_VARIETIES,
      scope: "Other",
    },
  },


  // ==========================================================
  // 8. PANT SANKAR KHIRA-1
  // ==========================================================

  {
    varietyId: "pant-sankar-khira-1",
    cropId: "cucumber",

    name: "Pant Sankar Khira-1",
    nameHindi: "पंत संकर खीरा-1",

    type: "Hybrid",

    regionCodes: [],

    firstHarvestDays: {
      min: 50,
      max: 50,
    },

    yield: {
      min: 20,
      max: 20,
      unit: "t/ha",
    },

    fruit: {
      color: "green",
      shape: "cylindrical",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
    ],

    suitability: "medium",

    notes:
      "पंत संकर खीरा-1 GBPUAT द्वारा विकसित संकर किस्म है। फल लगभग 20 सेमी लंबे, बेलनाकार और हरे रंग के हल्के स्ट्राइप वाले होते हैं। पहली तुड़ाई लगभग 50 दिनों में हो सकती है और उपज क्षमता लगभग 200 क्विंटल प्रति हेक्टेयर बताई गई है। उपलब्ध सरकारी स्रोत में इसकी अनुशंसा मुख्य रूप से उत्तर प्रदेश और उत्तराखंड के लिए दी गई है।",

    source: {
      organization:
        "GB Pant University of Agriculture and Technology",
      title:
        "Checklist of Commercial Varieties of Vegetables – Cucumber",
      url: COMMERCIAL_VEGETABLE_VARIETIES,
      scope: "Other",
    },
  },


  // ==========================================================
  // 9. PARTHENOCARPIC KHIRA-2
  // ==========================================================

  {
    varietyId: "parthenocarpic-khira-2",
    cropId: "cucumber",

    name: "Parthenocarpic Khira-2",
    nameHindi: "पार्थेनोकार्पिक खीरा-2",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: null,
      max: null,
    },

    yield: {
      min: 210.7,
      max: 210.7,
      unit: "t/ha",
    },

    fruit: {
      color: null,
      shape: null,
      weightG: 630,
    },

    resistance: [],

    sowingMonths: [
      10,
      11,
      12,
      1,
      2,
      3,
    ],

    suitability: "low",

    notes:
      "Parthenocarpic Khira-2 संरक्षित खेती के लिए उपयुक्त parthenocarpic खीरे की किस्म है। सरकारी स्रोत के अनुसार इसमें प्रति बेल बड़ी संख्या में female flowers तथा लगभग 630 ग्राम औसत फल वजन बताया गया है। इसकी yield potential लगभग 210.7 टन/हेक्टेयर दी गई है। उपलब्ध स्रोत में इसकी अनुशंसा उत्तर प्रदेश और उत्तराखंड के लिए है, इसलिए बिहार के लिए इसे उच्च प्राथमिकता नहीं दी गई है।",

    source: {
      organization:
        "GB Pant University of Agriculture and Technology",
      title:
        "Checklist of Commercial Varieties of Vegetables – Cucumber",
      url: COMMERCIAL_VEGETABLE_VARIETIES,
      scope: "Other / Protected cultivation",
    },
  },


  // ==========================================================
  // 10. SWARNA SHEETAL
  // ==========================================================

  {
    varietyId: "swarna-sheetal",
    cropId: "cucumber",

    name: "Swarna Sheetal",
    nameHindi: "स्वर्ण शीतल",

    type: "Variety",

    regionCodes: [],

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
      color: "greenish white",
      shape: "cylindrical",
      minWeightG: 250,
      maxWeightG: 250,
    },

    resistance: [
      "powdery mildew tolerance",
    ],

    sowingMonths: [
      6,
      7,
      8,
    ],

    suitability: "medium",

    notes:
      "स्वर्ण शीतल खीरे की एक उन्नत किस्म है। उपलब्ध ICAR कृषि सलाह में इसे खरीफ मौसम की उन्नत खीरे की किस्मों में शामिल किया गया है। इसके फल लंबे, बेलनाकार और लगभग 250 ग्राम के बताए गए हैं तथा powdery mildew के प्रति सहनशीलता दर्ज है। बिहार के लिए अलग राज्य-स्तरीय अनुशंसा उपलब्ध न होने के कारण इसे सामान्य विकल्प के रूप में रखा गया है।",

    source: {
      organization: "ICAR",
      title:
        "Kharif Agro-Advisories for Farmers 2025 – Cucumber and Pumpkin",
      url: ICAR_KHARIF_ADVISORY,
      scope: "India",
    },
  },
];

export default CUCUMBER_VARIETIES;