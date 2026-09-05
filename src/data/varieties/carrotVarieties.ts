// src/data/varieties/carrotVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL SOURCES
// ============================================================

const IARI_CARROT =
  "https://ztmbpd.iari.res.in/technologies/varietieshybrids/vegetables/carrot/";

const IARI_TECHNOLOGICAL_OPTIONS =
  "https://www.iari.res.in/files/Publication/Others/Tech_Options_English-15072014.pdf";

const ICAR_RABI_ADVISORY =
  "https://icar.gov.in/sites/default/files/2022-09/Rabi-Agro-Advisory-2021-22_0.pdf";

const IARI_CARROT_BREEDING =
  "https://epubs.icar.org.in/plugins/generic/pdfJsViewer/pdf.js/web/viewer.html?file=https%3A%2F%2Fepubs.icar.org.in%2Findex.php%2FIndHort%2Farticle%2Fdownload%2F111231%2F43560%2F289160";

const IARI_ANNUAL_REPORT_2018 =
  "https://pusa.iari.res.in/files/Publication/annual_report/IARIANNUALREPORT_29082018.pdf";

const IARI_ANNUAL_REPORT_2009 =
  "https://krishisewa.iari.res.in/images/anualreport/annual2008-2009.pdf";

const IARI_NEWS_2015 =
  "https://www.iari.res.in/files/IARI-News/IARI_News_Oct-Dec_2015-15022016.pdf";

const IARI_DIRECTORS_REPORT_2016 =
  "https://www.iari.res.in/files/Latest-News/Directors_Report2016-06022016.pdf";

const IARI_ANNUAL_REPORT_2024 =
  "https://www.iari.res.in/files/Publication/annual_report/IARI_Annual_Report_2024_28072025.pdf";

const NHRDF_VEGETABLE_SEED =
  "https://www.icar.gov.in/sites/default/files/2023-05/Availability%20of%20Vegetable%20Seed%20with%20NHRDF%20in%202023-2024.pdf";

const BAU_HORTICULTURE =
  "https://bausabour.ac.in/department_details.aspx?cc=001&deptcode=Horticulture+%28Olericulture+%5E+Floriculture%29";


// ============================================================
// CARROT VARIETIES
// ============================================================

export const CARROT_VARIETIES: CropVariety[] = [

  // ==========================================================
  // 1. PUSA RUDHIRA
  // ==========================================================

  {
    varietyId: "pusa-rudhira",
    cropId: "carrot",

    name: "Pusa Rudhira",
    nameHindi: "पूसा रुधिरा",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 85,
      max: 90,
    },

    yield: {
      min: 30,
      max: 35,
      unit: "t/ha",
    },

    fruit: {
      color: "deep red",
      shape: "obtriangular",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [
      "delayed bolting",
    ],

    sowingMonths: [
      9,
      10,
    ],

    suitability: "high",

    notes:
      "पूसा रुधिरा IARI द्वारा विकसित उष्णकटिबंधीय प्रकार की लाल गाजर की किस्म है। इसकी जड़ें लंबी, गहरे लाल रंग की और अंदर से भी लाल होती हैं। IARI के अनुसार सितंबर–अक्टूबर में इसकी बुवाई की जा सकती है और लगभग 85–90 दिनों में जड़ें तैयार होती हैं। इसकी औसत उपज लगभग 30–35 टन/हेक्टेयर बताई गई है। IARI के एक किसान प्रदर्शन में इससे 393.75 क्विंटल/हेक्टेयर तक उपज दर्ज हुई और स्थानीय किस्म की तुलना में बेहतर कीमत भी मिली।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Carrot – Pusa Rudhira",
      url: IARI_CARROT,
      scope: "North Indian plains",
    },
  },


  // ==========================================================
  // 2. PUSA ASITA
  // ==========================================================

  {
    varietyId: "pusa-asita",
    cropId: "carrot",

    name: "Pusa Asita",
    nameHindi: "पूसा असिता",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 95,
      max: 100,
    },

    yield: {
      min: 30,
      max: 30,
      unit: "t/ha",
    },

    fruit: {
      color: "black",
      shape: "long",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [
      "late bolting",
    ],

    sowingMonths: [
      9,
      10,
    ],

    suitability: "high",

    notes:
      "पूसा असिता IARI द्वारा विकसित उष्णकटिबंधीय प्रकार की काली गाजर की किस्म है। इसकी जड़ों में काला रंग और स्वयं रंग वाला केंद्र होता है। IARI के अनुसार सितंबर–अक्टूबर में इसकी बुवाई की जा सकती है और लगभग 95–100 दिनों में जड़ें तैयार होती हैं। इसकी औसत उपज लगभग 30 टन/हेक्टेयर बताई गई है। ताजी गाजर का उपयोग अचार, सलाद, जूस और कांजी बनाने में किया जा सकता है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Carrot – Pusa Asita",
      url: IARI_CARROT,
      scope: "North Indian plains",
    },
  },


  // ==========================================================
  // 3. PUSA VRISHTI
  // ==========================================================

  {
    varietyId: "pusa-vrishti",
    cropId: "carrot",

    name: "Pusa Vrishti",
    nameHindi: "पूसा वृष्टि",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 85,
      max: 90,
    },

    yield: {
      min: 18,
      max: 22,
      unit: "t/ha",
    },

    fruit: {
      color: "red",
      shape: "triangular",
      minWeightG: 150,
      maxWeightG: 200,
    },

    resistance: [
      "heat tolerance",
    ],

    sowingMonths: [
      7,
      3,
      4,
    ],

    suitability: "high",

    notes:
      "पूसा वृष्टि IARI द्वारा विकसित गर्मी सहन करने वाली उष्णकटिबंधीय गाजर की किस्म है। यह उत्तर भारतीय मैदानी क्षेत्रों में जुलाई से शुरुआती बुवाई के लिए विकसित की गई है। इसकी जड़ें त्रिकोणीय आकार की और स्वयं लाल रंग वाली होती हैं तथा औसत जड़ वजन लगभग 150–200 ग्राम बताया गया है। IARI के स्रोत में लगभग 90 दिनों में परिपक्वता और 18–22 टन/हेक्टेयर औसत उपज दी गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Technological Options for Enhanced Productivity and Profit",
      url: IARI_TECHNOLOGICAL_OPTIONS,
      scope: "North Indian plains",
    },
  },


  // ==========================================================
  // 4. PUSA MEGHALI
  // ==========================================================

  {
    varietyId: "pusa-meghali",
    cropId: "carrot",

    name: "Pusa Meghali",
    nameHindi: "पूसा मेघाली",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 110,
      max: 120,
    },

    yield: {
      min: 22,
      max: 28,
      unit: "t/ha",
    },

    fruit: {
      color: "orange",
      shape: "stumpy to slightly tapering",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      8,
      9,
      10,
      11,
    ],

    suitability: "high",

    notes:
      "पूसा मेघाली IARI द्वारा विकसित नारंगी रंग की उष्णकटिबंधीय गाजर की किस्म है। इसकी जड़ें चिकनी, नारंगी रंग की, स्वयं रंग वाले केंद्र वाली तथा छोटी से मध्यम शीर्ष वाली होती हैं। इसे अगस्त–सितंबर में जल्दी तथा अक्टूबर–नवंबर में देर से भी बोया जा सकता है। जड़ें लगभग 110–120 दिनों में तैयार होती हैं और औसत उपज लगभग 22–28 टन/हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Year round carrot production in North-Indian plains",
      url: IARI_TECHNOLOGICAL_OPTIONS,
      scope: "North Indian plains",
    },
  },


  // ==========================================================
  // 5. PUSA YAMDAGNI
  // ==========================================================

  {
    varietyId: "pusa-yamdagni",
    cropId: "carrot",

    name: "Pusa Yamdagni",
    nameHindi: "पूसा यमदाग्नि",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 90,
      max: 100,
    },

    yield: {
      min: 20,
      max: 25,
      unit: "t/ha",
    },

    fruit: {
      color: "orange",
      shape: "slightly tapering to cylindrical",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      10,
      11,
      12,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ],

    suitability: "medium",

    notes:
      "पूसा यमदाग्नि IARI की तापमान-सहिष्णुता और व्यापक अनुकूलन वाली गाजर किस्म है। इसकी जड़ें लंबी, हल्की शंक्वाकार या बेलनाकार, नारंगी रंग की और स्वयं रंग वाले केंद्र वाली होती हैं। IARI के अनुसार मैदानी क्षेत्रों में अक्टूबर–दिसंबर में तथा पहाड़ी क्षेत्रों में अप्रैल–अगस्त में इसकी बुवाई की जा सकती है। परिपक्वता लगभग 90–100 दिनों में होती है और औसत उपज लगभग 20–25 टन/हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Technological Options for Enhanced Productivity and Profit",
      url: IARI_TECHNOLOGICAL_OPTIONS,
      scope: "India",
    },
  },


  // ==========================================================
  // 6. PUSA NAYANJYOTI
  // ==========================================================

  {
    varietyId: "pusa-nayanjyoti",
    cropId: "carrot",

    name: "Pusa Nayanjyoti",
    nameHindi: "पूसा नयनज्योति",

    type: "Hybrid",

    regionCodes: [],

    firstHarvestDays: {
      min: 90,
      max: 100,
    },

    yield: {
      min: 35,
      max: 40,
      unit: "t/ha",
    },

    fruit: {
      color: "orange",
      shape: "cylindrical and stumpy",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      11,
      12,
    ],

    suitability: "medium",

    notes:
      "पूसा नयनज्योति सार्वजनिक क्षेत्र में विकसित नारंगी रंग की टेम्परेट F1 हाइब्रिड गाजर है। इसकी जड़ें चिकनी, समान, नारंगी, बेलनाकार और थोड़ी मोटी होती हैं तथा इनमें स्वयं रंग वाला केंद्र होता है। इसमें बीटा-कैरोटीन की मात्रा लगभग 7.55 mg/100 g ताजा वजन बताई गई है। IARI के अनुसार उत्तर भारतीय मैदानी क्षेत्रों में नवंबर–दिसंबर में बुवाई की जा सकती है और इसकी औसत उपज लगभग 35–40 टन/हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Technological Options for Enhanced Productivity and Profit",
      url: IARI_TECHNOLOGICAL_OPTIONS,
      scope: "North Indian plains",
    },
  },


  // ==========================================================
  // 7. PUSA VASUDA
  // ==========================================================

  {
    varietyId: "pusa-vasuda",
    cropId: "carrot",

    name: "Pusa Vasuda",
    nameHindi: "पूसा वसुधा",

    type: "Hybrid",

    regionCodes: [],

    firstHarvestDays: {
      min: 80,
      max: 90,
    },

    yield: {
      min: 40,
      max: 40,
      unit: "t/ha",
    },

    fruit: {
      color: "red",
      shape: "smooth",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      9,
      10,
    ],

    suitability: "medium",

    notes:
      "पूसा वसुधा IARI द्वारा विकसित सार्वजनिक क्षेत्र की ट्रॉपिकल गाजर हाइब्रिड है। इसकी जड़ें चिकनी, आकर्षक, लाल, रसदार और स्वयं रंग वाली होती हैं। यह सलाद, जूस, खाना पकाने तथा कैरोटीनॉइड निष्कर्षण उद्योग के लिए उपयोगी बताई गई है। इसकी परिपक्वता लगभग 80–90 दिनों में होती है और औसत उपज लगभग 40 टन/हेक्टेयर बताई गई है। IARI स्रोत में इसका क्षेत्र अनुकूलन दिल्ली और NCR दिया गया है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Technological Options for Enhanced Productivity and Profit",
      url: IARI_TECHNOLOGICAL_OPTIONS,
      scope: "Delhi and NCR",
    },
  },


  // ==========================================================
  // 8. PUSA KESAR
  // ==========================================================

  {
    varietyId: "pusa-kesar",
    cropId: "carrot",

    name: "Pusa Kesar",
    nameHindi: "पूसा केसर",

    type: "Variety",

    regionCodes: [],

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
      color: "deep red",
      shape: "long",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [
      "delayed bolting",
    ],

    sowingMonths: [
      10,
      11,
      12,
    ],

    suitability: "high",

    notes:
      "पूसा केसर एक प्रसिद्ध एशियाई प्रकार की लाल गाजर की किस्म है। इसकी जड़ें गहरे लाल रंग की होती हैं और केंद्रीय भाग भी लाल होता है। ICAR के रबी कृषि परामर्श में इसे गाजर की अनुशंसित किस्मों में शामिल किया गया है। जड़ें लगभग 80–90 दिनों में परिपक्व होती हैं और विभिन्न IARI स्रोतों में इसकी उपज लगभग 30 टन/हेक्टेयर बताई गई है। इसे ठंडे मौसम की रबी खेती के लिए उपयोग किया जाता है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Carrot varieties and production information",
      url: ICAR_RABI_ADVISORY,
      scope: "India",
    },
  },


  // ==========================================================
  // 9. PUSA KULFI
  // ==========================================================

  {
    varietyId: "pusa-kulfi",
    cropId: "carrot",

    name: "Pusa Kulfi",
    nameHindi: "पूसा कुल्फी",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 90,
      max: 100,
    },

    yield: {
      min: 27,
      max: 27.94,
      unit: "t/ha",
    },

    fruit: {
      color: "pale mustard",
      shape: null,
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      9,
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "पूसा कुल्फी IARI द्वारा विकसित हल्के सरसों रंग की गाजर की किस्म है। IARI के अनुसार इसकी बाजार योग्य परिपक्वता लगभग 90–100 दिनों में होती है। इसकी औसत जड़ उपज लगभग 27.94 टन/हेक्टेयर बताई गई है। यह कैरोटीनॉइड, ल्यूटिन, थायमिन और नायसिन जैसे पोषक घटकों से समृद्ध बताई गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "IARI News – Pusa Kulfi carrot variety",
      url: IARI_NEWS_2015,
      scope: "India",
    },
  },
];

export default CARROT_VARIETIES;