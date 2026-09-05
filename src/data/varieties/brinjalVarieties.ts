// src/data/varieties/brinjalVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL SOURCES
// ============================================================

const IARI_BRINJAL_VARIETIES =
  "https://ztmbpd.iari.res.in/technologies/varietieshybrids/vegetables/brinjal/";

const IARI_TECHNOLOGICAL_OPTIONS =
  "https://www.pusa.iari.res.in/files/Publication/Others/Tech_Options_English-15072014.pdf";

const NHB_BRINJAL_DATABASE =
  "https://nhb.gov.in/area-pro/nhb_database_2015.pdf";

const NHB_BRINJAL_STATISTICS =
  "https://nhb.gov.in/statistics/Publication/Horticulture%20Statistics%20at%20a%20Glance-2018.pdf";

const ICAR_RCER_BRINJAL_VARIETIES =
  "https://icarrcer.org.in/wp-content/uploads/2014/01/Vegetable_Var_Eng.pdf";

const ICAR_RCER_SWARNA_SHYAMLI =
  "https://www.icar.gov.in/sites/default/files/2023-02/Horticulture%20Vol.%20_1comm.pdf";

const ICAR_KASHI_VIJAY =
  "https://www.icar.gov.in/en/landmark-varieties";

const BAU_BRINJAL_VARIETIES =
  "https://www.bausabour.ac.in/department_details.aspx?cc=001&deptcode=Horticulture+%28Olericulture+%5E+Floriculture%29";

const BAU_SABOUR_BRINJAL_2024_25 =
  "https://bausabour.ac.in/album/File131_07_202502_57_05PIMG1.pdf";

const BAU_SABOUR_KRISHNAKALI =
  "https://bausabour.ac.in/happening/file06_07_202001_59_27PIMG1.pdf";

const BAU_MANDATE =
  "https://scientistprofile.bausabour.ac.in/mandate.aspx";

// ============================================================
// BRINJAL
// ============================================================

export const BRINJAL_VARIETIES: CropVariety[] = [

  // ============================================================
  // 1. PUSA PURPLE LONG
  // ============================================================

  {
    varietyId: "pusa-purple-long",
    cropId: "brinjal",

    name: "Pusa Purple Long",
    nameHindi: "पूसा पर्पल लॉन्ग",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 75,
      max: 90,
    },

    yield: {
      min: 15.0,
      max: 20.0,
      unit: "t/ha",
    },

    fruit: {
      color: "dark purple",
      shape: "long",
    },

    resistance: [],

    sowingMonths: [4, 5],

    suitability: "high",

    notes:
      "पूसा पर्पल लॉन्ग आईएआरआई की लोकप्रिय अगेती बैंगन किस्म है और बिहार के लिए अनुशंसित है। ICAR के अनुसार इसे खरीफ मौसम में उगाया जा सकता है। फल लंबे और बैंगनी रंग के होते हैं। ICAR की किसान सलाह में इसकी उपज लगभग 150–200 क्विंटल प्रति हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute / ICAR",
      title: "Brinjal Varieties and Kharif Agro-Advisory",
      url: IARI_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 2. PUSA PURPLE CLUSTER
  // ============================================================

  {
    varietyId: "pusa-purple-cluster",
    cropId: "brinjal",

    name: "Pusa Purple Cluster",
    nameHindi: "पूसा पर्पल क्लस्टर",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 75,
      max: 90,
    },

    fruit: {
      color: "purple",
      shape: "cluster",
    },

    resistance: [],

    sowingMonths: [4, 5],

    suitability: "medium",

    notes:
      "पूसा पर्पल क्लस्टर आईएआरआई की बैंगन की किस्म है और राष्ट्रीय स्तर पर सूचीबद्ध है। ICAR की किसान सलाह में इसे खरीफ मौसम में उगाने योग्य बैंगन किस्मों में शामिल किया गया है। इसके फल गुच्छों में लगते हैं।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute / ICAR",
      title: "Brinjal Varieties and Kharif Agro-Advisory",
      url: IARI_BRINJAL_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 3. PUSA KRANTI
  // ============================================================

  {
    varietyId: "pusa-kranti",
    cropId: "brinjal",

    name: "Pusa Kranti",
    nameHindi: "पूसा क्रांति",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    yield: {
      min: 35.0,
      max: 35.0,
      unit: "t/ha",
    },

    fruit: {
      color: "dark purple",
      shape: "long",
    },

    resistance: [],

    sowingMonths: [5, 6],

    suitability: "high",

    notes:
      "पूसा क्रांति बैंगन की लंबी, गहरे बैंगनी फल वाली किस्म है। NHB के अनुसार यह पंजाब, उत्तर प्रदेश और बिहार के लिए अनुशंसित है। उपलब्ध NHB जानकारी में इसकी औसत उपज लगभग 35 टन प्रति हेक्टेयर बताई गई है।",

    source: {
      organization: "National Horticulture Board",
      title: "Techno-Economic Feasibility Study – Brinjal Varieties",
      url: NHB_BRINJAL_STATISTICS,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 4. PUSA UPKAR
  // ============================================================

  {
    varietyId: "pusa-upkar",
    cropId: "brinjal",

    name: "Pusa Upkar",
    nameHindi: "पूसा उपकार",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    yield: {
      min: 40.0,
      max: 40.0,
      unit: "t/ha",
    },

    fruit: {
      color: "dark purple",
      shape: "round",
    },

    resistance: [],

    sowingMonths: [5, 6],

    suitability: "high",

    notes:
      "पूसा उपकार बैंगन की गहरे बैंगनी और गोल फल वाली किस्म है। NHB के अनुसार यह बिहार के लिए अनुशंसित है। उपलब्ध सरकारी स्रोत में इसकी औसत उपज लगभग 40 टन प्रति हेक्टेयर बताई गई है।",

    source: {
      organization: "National Horticulture Board",
      title: "Brinjal Varieties – Recommended Areas and Yield",
      url: NHB_BRINJAL_DATABASE,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 5. PUSA SHYAMLA
  // ============================================================

  {
    varietyId: "pusa-shyamla",
    cropId: "brinjal",

    name: "Pusa Shyamla",
    nameHindi: "पूसा श्यामला",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 50,
      max: 55,
    },

    yield: {
      min: 39.0,
      max: 39.0,
      unit: "t/ha",
    },

    fruit: {
      color: "dark purple",
      shape: "long",
      minWeightG: 80,
      maxWeightG: 90,
    },

    resistance: [],

    sowingMonths: [12, 1],

    suitability: "high",

    notes:
      "पूसा श्यामला बिहार के लिए अनुशंसित बैंगन की किस्म है। पौधे बिना कांटों वाले होते हैं और फल लंबे, चमकदार तथा गहरे बैंगनी रंग के होते हैं। फल का वजन लगभग 80–90 ग्राम है। रोपाई के लगभग 50–55 दिन बाद पहली तुड़ाई शुरू हो सकती है। औसत उपज लगभग 39 टन प्रति हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Technological Options for Enhanced Productivity and Profit",
      url: IARI_TECHNOLOGICAL_OPTIONS,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 6. PUSA HYBRID-5
  // ============================================================

  {
    varietyId: "pusa-hybrid-5",
    cropId: "brinjal",

    name: "Pusa Hybrid-5",
    nameHindi: "पूसा हाइब्रिड-5",

    type: "Hybrid",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 50,
      max: 55,
    },

    yield: {
      min: 55.0,
      max: 55.0,
      unit: "t/ha",
    },

    fruit: {
      color: "dark purple",
      shape: "long",
    },

    resistance: [],

    sowingMonths: [5, 6],

    suitability: "high",

    notes:
      "पूसा हाइब्रिड-5 आईएआरआई का सार्वजनिक क्षेत्र का बैंगन हाइब्रिड है। पौधे सीधे और बिना कांटों वाले होते हैं। फल लंबे, मध्यम आकार के और गहरे बैंगनी रंग के होते हैं। पहली तुड़ाई रोपाई के लगभग 50–55 दिन बाद हो सकती है। औसत उपज लगभग 55 टन प्रति हेक्टेयर बताई गई है और NHB के अनुसार यह बिहार के लिए अनुशंसित है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Brinjal Varieties",
      url: IARI_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 7. PUSA HYBRID-6
  // ============================================================

  {
    varietyId: "pusa-hybrid-6",
    cropId: "brinjal",

    name: "Pusa Hybrid-6",
    nameHindi: "पूसा हाइब्रिड-6",

    type: "Hybrid",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 55,
      max: 60,
    },

    yield: {
      min: 45.0,
      max: 45.0,
      unit: "t/ha",
    },

    fruit: {
      color: "purple",
      shape: "round",
      weightG: 200,
    },

    resistance: [],

    sowingMonths: [5, 6],

    suitability: "high",

    notes:
      "पूसा हाइब्रिड-6 बैंगन का हाइब्रिड है। पौधे सीधे और बिना कांटों वाले होते हैं। फल गोल, बैंगनी, चमकदार और लगभग 200 ग्राम के होते हैं। पहली तुड़ाई रोपाई के लगभग 55–60 दिन बाद हो सकती है। औसत उपज लगभग 45 टन प्रति हेक्टेयर बताई गई है और यह बिहार के लिए अनुशंसित है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Brinjal Varieties",
      url: IARI_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 8. DBHL-20 / PUSA HYBRID-20
  // ============================================================

  {
    varietyId: "dbhl-20",
    cropId: "brinjal",

    name: "Pusa Hybrid-20",
    nameHindi: "पूसा हाइब्रिड-20",

    type: "Hybrid",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 55,
      max: 55,
    },

    yield: {
      min: 52.5,
      max: 52.5,
      unit: "t/ha",
    },

    fruit: {
      color: "dark purple",
      shape: "long",
      minWeightG: 90,
      maxWeightG: 100,
    },
    
    resistance: [],
    sowingMonths: [],
    suitability: "high",

    notes:
      "पूसा हाइब्रिड-20 (DBHL-20) लंबे फल वाला बैंगन हाइब्रिड है। ICAR-IARI के अनुसार यह बिहार सहित जोन-IV के लिए अनुशंसित है। फल लंबे, गहरे बैंगनी और चमकदार होते हैं तथा उनका वजन लगभग 90–100 ग्राम है। पहली तुड़ाई रोपाई के लगभग 55 दिन बाद हो सकती है। औसत उपज लगभग 52.5 टन प्रति हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Brinjal Varieties",
      url: IARI_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 9. ARKA NAVNEETH
  // ============================================================

  {
    varietyId: "arka-navneeth",
    cropId: "brinjal",

    name: "Arka Navneeth",
    nameHindi: "अर्का नवनीत",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    resistance: [],
    sowingMonths: [],
    suitability: "high",

    notes:
      "अर्का नवनीत ICAR-IIHR की बैंगन किस्म है। NHB के अनुसार यह बिहार सहित कई राज्यों के लिए अनुशंसित है। उपलब्ध सरकारी स्रोतों में इसके लिए इस डेटासेट में उपयोग करने योग्य समान उपज और परिपक्वता आंकड़े नहीं मिले, इसलिए वे फ़ील्ड नहीं जोड़े गए हैं।",

    source: {
      organization: "ICAR-Indian Institute of Horticultural Research",
      title: "Brinjal Varieties – Recommended Areas",
      url: NHB_BRINJAL_DATABASE,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 10. ARKA KUSUMAKAR
  // ============================================================

  {
    varietyId: "arka-kusumakar",
    cropId: "brinjal",

    name: "Arka Kusumakar",
    nameHindi: "अर्का कुसुमाकर",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    maturityDays: {
      min: 140,
      max: 150,
    },

    yield: {
      min: 40.0,
      max: 40.0,
      unit: "t/ha",
    },

    fruit: {
      color: "green",
      shape: "clustered",
    },

    resistance: [],
    sowingMonths: [],
    suitability: "high",

    notes:
      "अर्का कुसुमाकर ICAR-IIHR की बैंगन किस्म है। फल छोटे, हरे और गुच्छों में लगते हैं। फल नरम होते हैं और अच्छी cooking quality के लिए वर्णित हैं। औसत उपज लगभग 40 टन प्रति हेक्टेयर और फसल अवधि लगभग 140–150 दिन बताई गई है। NHB के अनुसार यह बिहार के लिए अनुशंसित है।",

    source: {
      organization: "ICAR-Indian Institute of Horticultural Research",
      title: "Brief Characteristics of Vegetable Varieties",
      url: IARI_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 11. KASHI SANDESH
  // ============================================================

  {
    varietyId: "kashi-sandesh",
    cropId: "brinjal",

    name: "Kashi Sandesh",
    nameHindi: "काशी संदेश",

    type: "Variety",

    regionCodes: [],
    sowingMonths: [],
    suitability: "medium",

    notes:
      "काशी संदेश ICAR-IIVR से संबंधित बैंगन की किस्म है और NHB के अनुसार पूरे भारत में अनुशंसित किस्मों की सूची में शामिल है। बिहार के लिए इसे स्थानीय परिस्थितियों के अनुसार एक वैकल्पिक विकल्प माना जा सकता है।",

    source: {
      organization: "ICAR / National Horticulture Board",
      title: "Brinjal Varieties – Recommended Areas",
      url: NHB_BRINJAL_DATABASE,
      scope: "National",
    },
  },

  // ============================================================
  // 12. KASHI VIJAY
  // ============================================================

  {
    varietyId: "kashi-vijay",
    cropId: "brinjal",

    name: "Kashi Vijay",
    nameHindi: "काशी विजय",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    resistance: [
      "Phomopsis blight tolerance",
      "Fusarium wilt tolerance",
    ],
    sowingMonths: [],
    suitability: "high",

    notes:
      "काशी विजय ICAR की लैंडमार्क किस्मों में शामिल बैंगन की किस्म है। ICAR के अनुसार यह फोमोप्सिस ब्लाइट और फ्यूजेरियम विल्ट के प्रति खेत की परिस्थितियों में सहनशील है तथा उत्तर प्रदेश, बिहार, झारखंड और पंजाब के लिए अनुशंसित है।",

    source: {
      organization: "Indian Council of Agricultural Research",
      title: "Landmark Varieties – Kashi Vijay",
      url: ICAR_KASHI_VIJAY,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 13. SWARNA SHREE
  // ============================================================

  {
    varietyId: "swarna-shree",
    cropId: "brinjal",

    name: "Swarna Shree",
    nameHindi: "स्वर्णा श्री",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 55,
      max: 60,
    },

    yield: {
      min: 55.0,
      max: 60.0,
      unit: "t/ha",
    },

    fruit: {
      color: "creamy white",
      shape: "round to oval",
    },

    resistance: [
      "bacterial wilt",
    ],

    sowingMonths: [7, 8],

    suitability: "high",

    notes:
      "स्वर्णा श्री ICAR-RCER द्वारा विकसित बैंगन की किस्म है। फल क्रीमी-सफेद, गोल से अंडाकार और नरम होते हैं। यह बिहार और झारखंड के लिए अनुशंसित है। पहली तुड़ाई लगभग 55–60 दिन बाद और औसत उपज लगभग 55–60 टन प्रति हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR Research Complex for Eastern Region",
      title: "Improved Varieties of Fruit and Vegetables Developed by ICAR RCER",
      url: ICAR_RCER_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 14. SWARNA MANI
  // ============================================================

  {
    varietyId: "swarna-mani",
    cropId: "brinjal",

    name: "Swarna Mani",
    nameHindi: "स्वर्णा मणि",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 65,
      max: 70,
    },

    yield: {
      min: 60.0,
      max: 65.0,
      unit: "t/ha",
    },

    fruit: {
      color: "shiny purple",
      shape: "round",
    },

    resistance: [
      "bacterial wilt",
    ],

    sowingMonths: [7, 8],

    suitability: "high",

    notes:
      "स्वर्णा मणि ICAR-RCER द्वारा विकसित बैंगन की किस्म है। फल आकर्षक, चमकदार बैंगनी और गोल होते हैं। यह बिहार, झारखंड और आसपास के क्षेत्रों के लिए अनुशंसित है तथा बैक्टीरियल विल्ट प्रभावित क्षेत्रों के लिए उपयुक्त बताई गई है। पहली तुड़ाई लगभग 65–70 दिन बाद और औसत उपज लगभग 60–65 टन प्रति हेक्टेयर है।",

    source: {
      organization: "ICAR Research Complex for Eastern Region",
      title: "Improved Varieties of Fruit and Vegetables Developed by ICAR RCER",
      url: ICAR_RCER_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 15. SWARNA SHYAMLI
  // ============================================================

  {
    varietyId: "swarna-shyamli",
    cropId: "brinjal",

    name: "Swarna Shyamli",
    nameHindi: "स्वर्णा श्यामली",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 35,
      max: 40,
    },

    yield: {
      min: 60.0,
      max: 65.0,
      unit: "t/ha",
    },

    fruit: {
      color: "green with white stripes",
      shape: "round",
      weightG: 250,
    },

    resistance: [
      "bacterial wilt",
    ],

    sowingMonths: [7, 8, 2, 3],

    suitability: "high",

    notes:
      "स्वर्णा श्यामली बिहार के लिए विशेष रूप से महत्वपूर्ण बैंगन किस्म है। फल मध्यम आकार के, गोल और आकर्षक हरे रंग के सफेद धारियों वाले होते हैं। ICAR-RCER के अनुसार पहली तुड़ाई लगभग 35–40 दिन बाद और उपज लगभग 60–65 टन प्रति हेक्टेयर है। यह बैक्टीरियल विल्ट के प्रति प्रतिरोधी बताई गई है।",

    source: {
      organization: "ICAR Research Complex for Eastern Region",
      title: "Swarna Shyamli Brinjal",
      url: ICAR_RCER_SWARNA_SHYAMLI,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 16. SWARNA PRATIBHA
  // ============================================================

  {
    varietyId: "swarna-pratibha",
    cropId: "brinjal",

    name: "Swarna Pratibha",
    nameHindi: "स्वर्णा प्रतिभा",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 55,
      max: 60,
    },

    yield: {
      min: 45.0,
      max: 50.0,
      unit: "t/ha",
    },

    fruit: {
      color: "shiny purple",
      shape: "round",
      weightG: 250,
    },

    resistance: [
      "bacterial wilt",
    ],

    sowingMonths: [7, 8],

    suitability: "high",

    notes:
      "स्वर्णा प्रतिभा ICAR-RCER द्वारा विकसित बैंगन की किस्म है। फल मध्यम आकार के, गोल और चमकदार बैंगनी रंग के होते हैं। यह बिहार, झारखंड और आसपास के क्षेत्रों के लिए अनुशंसित है तथा बैक्टीरियल विल्ट के प्रति प्रतिरोधी बताई गई है। पहली तुड़ाई लगभग 55–60 दिन बाद और औसत उपज लगभग 45–50 टन प्रति हेक्टेयर है।",

    source: {
      organization: "ICAR Research Complex for Eastern Region",
      title: "Improved Varieties of Fruit and Vegetables Developed by ICAR RCER",
      url: ICAR_RCER_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 17. SWARNA SHOBHA
  // ============================================================

  {
    varietyId: "swarna-shobha",
    cropId: "brinjal",

    name: "Swarna Shobha",
    nameHindi: "स्वर्णा शोभा",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 55,
      max: 65,
    },

    yield: {
      min: 50.0,
      max: 60.0,
      unit: "t/ha",
    },

    fruit: {
      color: "milky white with purple tinge",
      shape: "round",
      minWeightG: 300,
      maxWeightG: 350,
    },

    resistance: [
      "bacterial wilt",
    ],

    sowingMonths: [7, 8, 9],

    suitability: "high",

    notes:
      "स्वर्णा शोभा ICAR-RCER द्वारा विकसित बैंगन की किस्म है। फल गोल, मध्यम आकार के, दूधिया-सफेद रंग के बैंगनी आभा वाले होते हैं। यह बिहार और झारखंड के लिए अनुशंसित है। पहली तुड़ाई लगभग 55–65 दिन बाद और औसत उपज लगभग 50–60 टन प्रति हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR Research Complex for Eastern Region",
      title: "Improved Varieties of Fruit and Vegetables Developed by ICAR RCER",
      url: ICAR_RCER_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 18. SWARNA ABHILAMB
  // ============================================================

  {
    varietyId: "swarna-abhilamb",
    cropId: "brinjal",

    name: "Swarna Abhilamb",
    nameHindi: "स्वर्णा अभिलंब",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 55,
      max: 60,
    },

    yield: {
      min: 60.0,
      max: 70.0,
      unit: "t/ha",
    },

    fruit: {
      color: "purple blue",
      shape: "long",
      minLengthCm: 30,
      maxLengthCm: 35,
      minWeightG: 80,
      maxWeightG: 100,
    },

    resistance: [
      "bacterial wilt",
      "Phomopsis blight",
    ],

    sowingMonths: [7, 8],

    suitability: "high",

    notes:
      "स्वर्णा अभिलंब लंबे बैंगन वाली ICAR-RCER की किस्म है। फल लगभग 30–35 सेमी लंबे, 80–100 ग्राम वजन के और आकर्षक बैंगनी-नीले रंग के होते हैं। यह बिहार और झारखंड सहित कई राज्यों के लिए अनुशंसित है। बैक्टीरियल विल्ट और फोमोप्सिस ब्लाइट के प्रति प्रतिरोधी बताई गई है। पहली तुड़ाई लगभग 55–60 दिन बाद और औसत उपज 60–70 टन प्रति हेक्टेयर है।",

    source: {
      organization: "ICAR Research Complex for Eastern Region",
      title: "Improved Varieties of Fruit and Vegetables Developed by ICAR RCER",
      url: ICAR_RCER_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 19. SWARNA SHAKTI F1
  // ============================================================

  {
    varietyId: "swarna-shakti-f1",
    cropId: "brinjal",

    name: "Swarna Shakti",
    nameHindi: "स्वर्णा शक्ति",

    type: "F1 Hybrid",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 55,
      max: 65,
    },

    yield: {
      min: 70.0,
      max: 75.0,
      unit: "t/ha",
    },

    fruit: {
      color: "shiny light purple",
      shape: "oblong",
      minLengthCm: 15,
      maxLengthCm: 17,
      minWeightG: 250,
      maxWeightG: 300,
    },

    resistance: [
      "Phomopsis blight",
      "bacterial wilt",
    ],

    sowingMonths: [7, 8, 9],

    suitability: "high",

    notes:
      "स्वर्णा शक्ति ICAR-RCER द्वारा विकसित F1 हाइब्रिड है। फल 15–17 सेमी लंबे, 250–300 ग्राम वजन के और चमकदार हल्के बैंगनी रंग के होते हैं। यह बिहार और झारखंड के लिए अनुशंसित है। फोमोप्सिस ब्लाइट के प्रति प्रतिरोधी और बैक्टीरियल विल्ट के प्रति मध्यम प्रतिरोधी बताई गई है। पहली तुड़ाई लगभग 55–65 दिन बाद और औसत उपज 70–75 टन प्रति हेक्टेयर है।",

    source: {
      organization: "ICAR Research Complex for Eastern Region",
      title: "Improved Varieties of Fruit and Vegetables Developed by ICAR RCER",
      url: ICAR_RCER_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 20. SWARNA MOHIT F1
  // ============================================================

  {
    varietyId: "swarna-mohit-f1",
    cropId: "brinjal",

    name: "Swarna Mohit",
    nameHindi: "स्वर्णा मोहित",

    type: "F1 Hybrid",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 55,
      max: 60,
    },

    yield: {
      min: 65.0,
      max: 75.0,
      unit: "t/ha",
    },

    fruit: {
      color: "light purple",
      shape: "oblong",
      minLengthCm: 10,
      maxLengthCm: 15,
      minWeightG: 100,
      maxWeightG: 150,
    },

    resistance: [
      "Phomopsis blight",
      "bacterial wilt",
    ],

    sowingMonths: [7, 8, 9],

    suitability: "high",

    notes:
      "स्वर्णा मोहित ICAR-RCER द्वारा विकसित F1 हाइब्रिड है। फल 10–15 सेमी लंबे, 100–150 ग्राम वजन के और आकर्षक हल्के बैंगनी रंग के होते हैं। यह बिहार और झारखंड के लिए अनुशंसित है। फोमोप्सिस ब्लाइट के प्रति प्रतिरोधी तथा बैक्टीरियल विल्ट के प्रति मध्यम प्रतिरोधी बताई गई है। पहली तुड़ाई लगभग 55–60 दिन बाद और औसत उपज 65–75 टन प्रति हेक्टेयर है।",

    source: {
      organization: "ICAR Research Complex for Eastern Region",
      title: "Improved Varieties of Fruit and Vegetables Developed by ICAR RCER",
      url: ICAR_RCER_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 21. SWARNA AJAY F1
  // ============================================================

  {
    varietyId: "swarna-ajay-f1",
    cropId: "brinjal",

    name: "Swarna Ajay",
    nameHindi: "स्वर्णा अजय",

    type: "F1 Hybrid",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 50,
      max: 55,
    },

    yield: {
      min: 70.0,
      max: 75.0,
      unit: "t/ha",
    },

    fruit: {
      color: "light purple",
      shape: "oblong",
      minLengthCm: 10,
      maxLengthCm: 12,
      minWeightG: 100,
      maxWeightG: 120,
    },

    resistance: [
      "bacterial wilt",
      "Phomopsis blight",
    ],

    sowingMonths: [7, 8, 9, 2, 3],

    suitability: "high",

    notes:
      "स्वर्णा अजय ICAR-RCER का F1 हाइब्रिड है। फल 10–12 सेमी लंबे, 100–120 ग्राम वजन के और हल्के बैंगनी रंग के होते हैं। यह बिहार, झारखंड, उत्तर प्रदेश और पंजाब के लिए अनुशंसित है। बैक्टीरियल विल्ट और फोमोप्सिस ब्लाइट के प्रति प्रतिरोधी बताई गई है। पहली तुड़ाई लगभग 50–55 दिन बाद और औसत उपज 70–75 टन प्रति हेक्टेयर है।",

    source: {
      organization: "ICAR Research Complex for Eastern Region",
      title: "Improved Varieties of Fruit and Vegetables Developed by ICAR RCER",
      url: ICAR_RCER_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 22. SWARNA NEELIMA F1
  // ============================================================

  {
    varietyId: "swarna-neelima-f1",
    cropId: "brinjal",

    name: "Swarna Neelima",
    nameHindi: "स्वर्णा नीलिमा",

    type: "F1 Hybrid",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 55,
      max: 65,
    },

    yield: {
      min: 70.0,
      max: 75.0,
      unit: "t/ha",
    },

    fruit: {
      color: "light purple",
      shape: "round",
      minLengthCm: 10,
      maxLengthCm: 12,
      minWeightG: 200,
      maxWeightG: 250,
    },

    resistance: [
      "bacterial wilt",
      "Phomopsis blight",
    ],

    sowingMonths: [7, 8],

    suitability: "high",

    notes:
      "स्वर्णा नीलिमा ICAR-RCER द्वारा विकसित F1 हाइब्रिड है। फल गोल, 10–12 सेमी आकार के, लगभग 200–250 ग्राम वजन के और हल्के बैंगनी रंग के होते हैं। यह बिहार, झारखंड, उत्तर प्रदेश और पंजाब के लिए अनुशंसित है। बैक्टीरियल विल्ट और फोमोप्सिस ब्लाइट के प्रति प्रतिरोधी बताई गई है। पहली तुड़ाई लगभग 55–65 दिन बाद और औसत उपज 70–75 टन प्रति हेक्टेयर है।",

    source: {
      organization: "ICAR Research Complex for Eastern Region",
      title: "Improved Varieties of Fruit and Vegetables Developed by ICAR RCER",
      url: ICAR_RCER_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 23. SABOUR SADABAHAR
  // ============================================================

  {
    varietyId: "sabour-sadabahar",
    cropId: "brinjal",

    name: "Sabour Sadabahar",
    nameHindi: "सबौर सदाबहार",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    yield: {
      min: 27.0,
      max: 48.0,
      unit: "t/ha",
    },

    fruit: {
      color: "not specified",
      shape: "not specified",
      minWeightG: 85,
      maxWeightG: 88,
    },

    resistance: [],
    sowingMonths: [],
    suitability: "high",

    notes:
      "सबौर सदाबहार बिहार कृषि विश्वविद्यालय, सबौर द्वारा विकसित बैंगन की किस्म है। यह भारी फल देने वाली किस्म है और प्रति पौधा लगभग 23–26 फल तथा औसत फल वजन 85–88 ग्राम बताया गया है। BAU के अनुसार औसत उपज खरीफ मौसम में लगभग 440–480 क्विंटल प्रति हेक्टेयर और गर्मी में लगभग 270 क्विंटल प्रति हेक्टेयर है।",

    source: {
      organization: "Bihar Agricultural University, Sabour",
      title: "Annual Report 2024-25 – Brinjal Sabour Sadabahar",
      url: BAU_SABOUR_BRINJAL_2024_25,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 24. SABOUR KRISHNAKALI
  // ============================================================

  {
    varietyId: "sabour-krishnakali",
    cropId: "brinjal",

    name: "Sabour Krishnakali",
    nameHindi: "सबौर कृष्णकली",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 90,
      max: 90,
    },

    yield: {
      min: 41.0,
      max: 43.0,
      unit: "t/ha",
    },

    fruit: {
      color: "blackish purple",
      shape: "oblong",
      minWeightG: 175,
      maxWeightG: 180,
    },

    resistance: [
      "fruit and shoot borer",
      "Phomopsis blight",
    ],

    sowingMonths: [6, 7],

    suitability: "high",

    notes:
      "सबौर कृष्णकली बिहार कृषि विश्वविद्यालय, सबौर द्वारा विकसित कम बीज वाली बैंगन की किस्म है। फल बड़े, आयताकार और काले-बैंगनी रंग के होते हैं तथा औसत फल वजन लगभग 175–180 ग्राम है। यह मुख्य मौसम में बिहार की सिंचित ऊंची भूमि के लिए उपयुक्त बताई गई है। पहली तुड़ाई रोपाई के लगभग 90 दिन बाद हो सकती है और औसत उपज लगभग 410–430 क्विंटल प्रति हेक्टेयर है।",

    source: {
      organization: "Bihar Agricultural University, Sabour",
      title: "Sabour Krishnakali – New Brinjal Variety",
      url: BAU_SABOUR_KRISHNAKALI,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 25. RAJENDRA ANNAPURNA
  // ============================================================

  {
    varietyId: "rajendra-annapurna",
    cropId: "brinjal",

    name: "Rajendra Annapurna",
    nameHindi: "राजेंद्र अन्नपूर्णा",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    maturityDays: {
      min: 90,
      max: 90,
    },

    yield: {
      min: 38.0,
      max: 41.0,
      unit: "t/ha",
    },

    fruit: {
      color: "purple",
      shape: "medium long",
    },

    resistance: [
      "little leaf",
      "Sclerotium wilt",
      "Phomopsis blight",
      "shoot and fruit borer",
    ],
    sowingMonths: [],
    suitability: "high",

    notes:
      "राजेंद्र अन्नपूर्णा बिहार कृषि विश्वविद्यालय, सबौर से संबंधित बैंगन की किस्म है। पौधे सीधे और कॉम्पैक्ट होते हैं। फल मध्यम लंबे, कुंद सिरे वाले और बैंगनी रंग के होते हैं। लगभग 90 दिनों में फसल परिपक्व होती है। यह लिटिल लीफ, स्क्लेरोटियम विल्ट, फोमोप्सिस ब्लाइट तथा शूट एवं फ्रूट बोरर के प्रति प्रतिरोधी बताई गई है। बाजार योग्य उपज लगभग 380–410 क्विंटल प्रति हेक्टेयर है।",

    source: {
      organization: "Bihar Agricultural University, Sabour",
      title: "Characteristics of Released Vegetable Varieties",
      url: BAU_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 26. RAJENDRA BAIGAN-II
  // ============================================================

  {
    varietyId: "rajendra-baigan-ii",
    cropId: "brinjal",

    name: "Rajendra Baigan-II",
    nameHindi: "राजेंद्र बैंगन-II",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    maturityDays: {
      min: 90,
      max: 90,
    },

    yield: {
      min: 32.5,
      max: 34.0,
      unit: "t/ha",
    },

    fruit: {
      color: "green",
      shape: "long",
      lengthCm: 21.75,
      weightG: 135,
    },

    resistance: [
      "wilt",
      "shoot and fruit borer",
    ],
    sowingMonths: [],
    tolerance: [
      "Phomopsis blight",
      "Sclerotium wilt",
    ],

    suitability: "high",

    notes:
      "राजेंद्र बैंगन-II बिहार कृषि विश्वविद्यालय, सबौर से संबंधित हरी लंबी बैंगन की किस्म है। फल लगभग 21.75 सेमी लंबे और औसतन 135 ग्राम वजन के होते हैं। यह विल्ट तथा शूट एवं फ्रूट बोरर के प्रति प्रतिरोधी और फोमोप्सिस ब्लाइट तथा स्क्लेरोटियम विल्ट के प्रति सहनशील बताई गई है। बाजार योग्य उपज लगभग 325–340 क्विंटल प्रति हेक्टेयर है।",

    source: {
      organization: "Bihar Agricultural University, Sabour",
      title: "Characteristics of Released Vegetable Varieties",
      url: BAU_BRINJAL_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 27. MUKTAKESHI
  // ============================================================

  {
    varietyId: "muktakeshi",
    cropId: "brinjal",

    name: "Muktakeshi",
    nameHindi: "मुक्तकेशी",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    suitability: "medium",
    sowingMonths: [],
    notes:
      "मुक्तकेशी बिहार कृषि विश्वविद्यालय के आधिकारिक स्रोत में बिहार से संबंधित बैंगन की किस्म के रूप में सूचीबद्ध है। उपलब्ध स्रोत में इस डेटासेट के लिए पर्याप्त समान उपज, फल वजन और परिपक्वता आंकड़े नहीं दिए गए हैं, इसलिए वे फ़ील्ड नहीं जोड़े गए हैं।",

    source: {
      organization: "Bihar Agricultural University, Sabour",
      title: "Mandate – Vegetable Varieties",
      url: BAU_MANDATE,
      scope: "Bihar",
    },
  },
];