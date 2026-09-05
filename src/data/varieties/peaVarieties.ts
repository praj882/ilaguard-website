// src/data/varieties/peaVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL SOURCES
// ============================================================

const IARI_GARDEN_PEA =
  "https://ztmbpd.iari.res.in/technologies/varietieshybrids/vegetables/garden-pea/";

const IARI_TECHNOLOGICAL_OPTIONS =
  "https://www.nahep.ig.iari.res.in/files/Publication/Others/Tech_Options_English-15072014.pdf";

const IARI_ANNUAL_REPORT_2018 =
  "https://pusa.iari.res.in/files/Publication/annual_report/IARIANNUALREPORT_29082018.pdf";

const ICAR_RABI_ADVISORY =
  "https://icar.gov.in/sites/default/files/2022-09/Rabi-Agro-Advisory-2021-22_0.pdf";

const ICAR_RCER_HORTICULTURE_TECHNOLOGIES =
  "https://www.icar.gov.in/sites/default/files/2023-02/Horticulture%20Vol.%20_1comm.pdf";

const ICAR_IIHR_GARDEN_PEA =
  "https://api-dev.iihr.res.in/varieties-crop-name/garden-pea";

const ICAR_IIHR_VEGETABLE_CHARACTERISTICS =
  "https://iihr.res.in/sites/default/files/Revised_final-Brief%20characteristics%20of%20vegetable%20varieties%20to%20upload%20in%20IIHR%20website%20%281%29.pdf";

const ICAR_IIHR_GARDEN_PEA_REVIEW =
  "https://jhs.iihr.res.in/index.php/jhs/article/download/236/178/346/";

const BAU_HORTICULTURE =
  "https://www.bausabour.ac.in/department_details.aspx?cc=001&deptcode=Horticulture+%28Olericulture+%5E+Floriculture%29";


// ============================================================
// PEA VARIETIES
// ============================================================

export const PEA_VARIETIES: CropVariety[] = [

  // ==========================================================
  // 1. SWARNA MUKTI
  // ==========================================================

  {
    varietyId: "swarna-mukti",
    cropId: "pea",

    name: "Swarna Mukti",
    nameHindi: "स्वर्ण मुक्ति",

    type: "Variety",

    // Explicitly recommended for Bihar.
    regionCodes: [],

    firstHarvestDays: {
      min: 80,
      max: 90,
    },

    yield: {
      min: 20,
      max: 25,
      unit: "t/ha",
    },

    fruit: {
      color: "light green",
      shape: "long, mildly concave",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [
      "powdery mildew",
    ],

    sowingMonths: [
      9,
      10,
    ],

    suitability: "high",

    notes:
      "स्वर्ण मुक्ति गार्डन पी की किस्म है। यह बिहार, झारखंड और राजस्थान के लिए अनुशंसित है। इसकी बुवाई सितंबर–अक्टूबर में की जा सकती है और पहली तुड़ाई लगभग 80–90 दिनों में शुरू हो सकती है। इसकी उपज लगभग 20–25 टन/हेक्टेयर बताई गई है। फलियां लंबी, हल्की हरी और हल्की अवतल होती हैं। यह किस्म पाउडरी मिल्ड्यू के प्रति प्रतिरोधी बताई गई है।",

    source: {
      organization:
        "ICAR Research Complex for Eastern Region",
      title:
        "Horticultural Technologies – Swarna Mukti Garden Pea",
      url: ICAR_RCER_HORTICULTURE_TECHNOLOGIES,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 2. PUSA PRAGATI
  // ==========================================================

  {
    varietyId: "pusa-pragati",
    cropId: "pea",

    name: "Pusa Pragati",
    nameHindi: "पूसा प्रगति",

    type: "Variety",

    // IARI documented its performance specifically
    // in Chhapra, Bihar.
    regionCodes: [],

    firstHarvestDays: {
      min: 60,
      max: 65,
    },

    yield: {
      min: 7.0,
      max: 7.3,
      unit: "t/ha",
    },

    fruit: {
      color: "green",
      shape: "long",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [
      "powdery mildew",
    ],

    sowingMonths: [
      10,
      11,
    ],

    suitability: "high",

    notes:
      "पूसा प्रगति गार्डन पी की किस्म है। IARI के अनुसार पहली तुड़ाई लगभग 60–65 दिनों में शुरू हो सकती है। किस्म पाउडरी मिल्ड्यू के प्रति प्रतिरोधी बताई गई है। IARI के प्रदर्शन में छपरा, बिहार में औसत 7.30 टन/हेक्टेयर उपज दर्ज हुई और स्थानीय किस्म की तुलना में बेहतर प्रदर्शन तथा अधिक बाजार मूल्य की रिपोर्ट मिली। फलियां लंबी और दाने अपेक्षाकृत बोल्ड बताए गए हैं।",

    source: {
      organization:
        "ICAR-Indian Agricultural Research Institute",
      title:
        "IARI Annual Report 2017-18 – Participatory Demonstrations",
      url: IARI_ANNUAL_REPORT_2018,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 3. PUSA SHREE
  // ==========================================================

  {
    varietyId: "pusa-shree",
    cropId: "pea",

    name: "Pusa Shree",
    nameHindi: "पूसा श्री",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 50,
      max: 55,
    },

    yield: {
      min: 4.5,
      max: 5.0,
      unit: "t/ha",
    },

    fruit: {
      color: "dark green",
      shape: "long",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [
      "Fusarium wilt",
    ],

    sowingMonths: [
      9,
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "पूसा श्री गार्डन पी की अगेती किस्म है। यह उत्तर भारतीय मैदानी क्षेत्रों में अगेती बुवाई के लिए विकसित की गई है। सितंबर के अंत से अक्टूबर की शुरुआत में अगेती बुवाई पर लगभग 50–55 दिनों में फलियां तैयार हो सकती हैं। अगेती बुवाई में उपज लगभग 4.5–5.0 टन/हेक्टेयर और सामान्य नवंबर बुवाई में 9–10 टन/हेक्टेयर बताई गई है। यह फ्यूजेरियम विल्ट के प्रति प्रतिरोधी है।",

    source: {
      organization:
        "ICAR-Indian Agricultural Research Institute",
      title:
        "Garden Pea – Pusa Shree",
      url: IARI_GARDEN_PEA,
      scope: "North Indian plains",
    },
  },


  // ==========================================================
  // 4. ARKEL
  // ==========================================================

  {
    varietyId: "arkel",
    cropId: "pea",

    name: "Arkel",
    nameHindi: "आर्केल",

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
      color: "green",
      shape: null,
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [],

    sowingMonths: [
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "आर्केल को ICAR की रबी कृषि सलाह में अगेती गार्डन पी की किस्म के रूप में सूचीबद्ध किया गया है। उपोष्ण क्षेत्र में अगेती फसल के लिए अक्टूबर के अंतिम सप्ताह के आसपास बुवाई बताई गई है। ICAR के एक प्रदर्शन में आर्केल से 31.65–32.75 क्विंटल/हेक्टेयर उपज दर्ज हुई।",

    source: {
      organization:
        "Indian Council of Agricultural Research",
      title:
        "ICAR Rabi Agro-Advisory for Farmers",
      url: ICAR_RABI_ADVISORY,
      scope: "India",
    },
  },


  // ==========================================================
  // 5. AZAD P-1
  // ==========================================================

  {
    varietyId: "azad-p-1",
    cropId: "pea",

    name: "Azad P-1",
    nameHindi: "आजाद P-1",

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

    sowingMonths: [
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "आजाद P-1 को ICAR की रबी कृषि सलाह में मुख्य मौसम की गार्डन पी किस्मों में शामिल किया गया है। उपोष्ण क्षेत्रों में मुख्य फसल के लिए अक्टूबर के मध्य से नवंबर के मध्य तक बुवाई की अवधि बताई गई है। उपलब्ध स्रोत में इस किस्म के लिए अलग से उपज आंकड़ा नहीं दिया गया है।",

    source: {
      organization:
        "Indian Council of Agricultural Research",
      title:
        "ICAR Rabi Agro-Advisory for Farmers",
      url: ICAR_RABI_ADVISORY,
      scope: "India",
    },
  },


  // ==========================================================
  // 6. AZAD P-3
  // ==========================================================

  {
    varietyId: "azad-p-3",
    cropId: "pea",

    name: "Azad P-3",
    nameHindi: "आजाद P-3",

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

    sowingMonths: [
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "आजाद P-3 को ICAR की रबी कृषि सलाह में अगेती मौसम की गार्डन पी किस्म के रूप में सूचीबद्ध किया गया है। उपोष्ण क्षेत्र में अगेती फसल के लिए अक्टूबर के अंतिम सप्ताह के आसपास बुवाई की सलाह दी गई है। उपलब्ध स्रोत में इस किस्म के लिए अलग से उपज और पहली तुड़ाई का आंकड़ा नहीं दिया गया है।",

    source: {
      organization:
        "Indian Council of Agricultural Research",
      title:
        "ICAR Rabi Agro-Advisory for Farmers",
      url: ICAR_RABI_ADVISORY,
      scope: "India",
    },
  },


  // ==========================================================
  // 7. MATAR AGETA-7
  // ==========================================================

  {
    varietyId: "matar-ageta-7",
    cropId: "pea",

    name: "Matar Ageta-7",
    nameHindi: "मटर अगेता-7",

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

    sowingMonths: [
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "मटर अगेता-7 को ICAR की रबी कृषि सलाह में अगेती गार्डन पी की किस्म के रूप में सूचीबद्ध किया गया है। उपोष्ण क्षेत्र में अगेती फसल के लिए अक्टूबर के अंतिम सप्ताह के आसपास बुवाई बताई गई है। उपलब्ध स्रोत में इस किस्म के लिए अलग से उपज और पहली तुड़ाई का आंकड़ा नहीं दिया गया है।",

    source: {
      organization:
        "Indian Council of Agricultural Research",
      title:
        "ICAR Rabi Agro-Advisory for Farmers",
      url: ICAR_RABI_ADVISORY,
      scope: "India",
    },
  },


  // ==========================================================
  // 8. ARKA KARTHIK
  // ==========================================================

  {
    varietyId: "arka-karthik",
    cropId: "pea",

    name: "Arka Karthik",
    nameHindi: "अर्का कार्तिक",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 90,
      max: 90,
    },

    yield: {
      min: 11.0,
      max: 11.0,
      unit: "t/ha",
    },

    fruit: {
      color: "green",
      shape: "medium long",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [
      "rust",
      "powdery mildew",
    ],

    sowingMonths: [
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "अर्का कार्तिक ICAR-IIHR की मध्य-अवधि गार्डन पी किस्म है। इसकी फलियां मध्यम लंबी और हरी होती हैं तथा दाने मध्यम आकार के, हरे और मीठे होते हैं। यह रस्ट और पाउडरी मिल्ड्यू के प्रति प्रतिरोधी बताई गई है। फलियों की उपज लगभग 11 टन/हेक्टेयर और अवधि लगभग 90 दिन बताई गई है।",

    source: {
      organization:
        "ICAR-Indian Institute of Horticultural Research",
      title:
        "Brief Characteristics of Vegetable Varieties – Garden Pea",
      url: ICAR_IIHR_VEGETABLE_CHARACTERISTICS,
      scope: "India",
    },
  },


  // ==========================================================
  // 9. ARKA PRAMODH
  // ==========================================================

  {
    varietyId: "arka-pramodh",
    cropId: "pea",

    name: "Arka Pramodh",
    nameHindi: "अर्का प्रमोद",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 90,
      max: 90,
    },

    yield: {
      min: 12.0,
      max: 12.0,
      unit: "t/ha",
    },

    fruit: {
      color: "green",
      shape: "broad and long",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [
      "powdery mildew",
      "rust",
    ],

    sowingMonths: [
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "अर्का प्रमोदह मध्य-अवधि की गार्डन पी किस्म है। फलियां हरी, चौड़ी और लंबी होती हैं तथा दाने बड़े, गोल, मीठे और गहरे हरे रंग के होते हैं। यह पाउडरी मिल्ड्यू और रस्ट के प्रति प्रतिरोधी बताई गई है। लगभग 90 दिनों में इसकी फलियों की उपज लगभग 12 टन/हेक्टेयर बताई गई है।",

    source: {
      organization:
        "ICAR-Indian Institute of Horticultural Research",
      title:
        "Brief Characteristics of Vegetable Varieties – Garden Pea",
      url: ICAR_IIHR_VEGETABLE_CHARACTERISTICS,
      scope: "India",
    },
  },


  // ==========================================================
  // 10. ARKA PRIYA
  // ==========================================================

  {
    varietyId: "arka-priya",
    cropId: "pea",

    name: "Arka Priya",
    nameHindi: "अर्का प्रिया",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 90,
      max: 90,
    },

    yield: {
      min: 12.0,
      max: 12.0,
      unit: "t/ha",
    },

    fruit: {
      color: "dark green",
      shape: "round",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [
      "powdery mildew",
      "rust",
    ],

    sowingMonths: [
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "अर्का प्रिया मध्य-अवधि की गार्डन पी किस्म है। फलियां और दाने गोल तथा गहरे हरे रंग के होते हैं। दाने बड़े और बहुत मीठे बताए गए हैं। यह पाउडरी मिल्ड्यू और रस्ट के प्रति प्रतिरोधी है। लगभग 90 दिनों में इसकी फलियों की उपज लगभग 12 टन/हेक्टेयर बताई गई है।",

    source: {
      organization:
        "ICAR-Indian Institute of Horticultural Research",
      title:
        "Brief Characteristics of Vegetable Varieties – Garden Pea",
      url: ICAR_IIHR_VEGETABLE_CHARACTERISTICS,
      scope: "India",
    },
  },


  // ==========================================================
  // 11. ARKA APOORVA
  // ==========================================================

  {
    varietyId: "arka-apoorva",
    cropId: "pea",

    name: "Arka Apoorva",
    nameHindi: "अर्का अपूर्वा",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 90,
      max: 90,
    },

    yield: {
      min: 11.0,
      max: 11.0,
      unit: "t/ha",
    },

    fruit: {
      color: "dark green",
      shape: "medium long",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [
      "rust",
      "powdery mildew",
    ],

    sowingMonths: [
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "अर्का अपूर्वा मध्य-अवधि की whole-pod edible pea किस्म है। इसकी फलियां मध्यम लंबी और गहरे हरे रंग की होती हैं। दाने मध्यम आकार के, गहरे हरे और बहुत मीठे होते हैं तथा बनावट crisp बताई गई है। यह रस्ट और पाउडरी मिल्ड्यू के प्रति प्रतिरोधी है। लगभग 90 दिनों में लगभग 11 टन/हेक्टेयर pod yield बताई गई है।",

    source: {
      organization:
        "ICAR-Indian Institute of Horticultural Research",
      title:
        "Garden Pea Varieties – Arka Apoorva",
      url: ICAR_IIHR_GARDEN_PEA,
      scope: "India",
    },
  },


  // ==========================================================
  // 12. ARKA MAYUR
  // ==========================================================

  {
    varietyId: "arka-mayur",
    cropId: "pea",

    name: "Arka Mayur",
    nameHindi: "अर्का मयूर",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 60,
      max: 60,
    },

    yield: {
      min: 8.0,
      max: 8.0,
      unit: "t/ha",
    },

    fruit: {
      color: null,
      shape: "short, straight and oval",
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
      "अर्का मयूर ICAR-IIHR की अगेती गार्डन पी किस्म है। यह खरीफ और रबी दोनों मौसम के लिए उपयुक्त बताई गई है। फलियां छोटी, सीधी और अंडाकार होती हैं तथा दाने गहरे हरे, बड़े और मीठे होते हैं। लगभग 60 दिनों में फसल तैयार हो सकती है और pod yield लगभग 8 टन/हेक्टेयर बताई गई है।",

    source: {
      organization:
        "ICAR-Indian Institute of Horticultural Research",
      title:
        "Garden Pea – Arka Mayur",
      url: ICAR_IIHR_GARDEN_PEA,
      scope: "India",
    },
  },


  // ==========================================================
  // 13. ARKA HARINI
  // ==========================================================

  {
    varietyId: "arka-harini",
    cropId: "pea",

    name: "Arka Harini",
    nameHindi: "अर्का हारिणी",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 60,
      max: 60,
    },

    yield: {
      min: 8.0,
      max: 8.0,
      unit: "t/ha",
    },

    fruit: {
      color: "dark green",
      shape: "straight and round",
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
      "अर्का हारिणी अगेती गार्डन पी किस्म है और खरीफ तथा रबी दोनों मौसम के लिए उपयुक्त बताई गई है। इसकी फलियां सीधी और गोल होती हैं तथा दाने गहरे हरे, बड़े और मीठे होते हैं। लगभग 60 दिनों में फसल तैयार हो सकती है और pod yield लगभग 8 टन/हेक्टेयर बताई गई है।",

    source: {
      organization:
        "ICAR-Indian Institute of Horticultural Research",
      title:
        "Garden Pea – Arka Harini",
      url: ICAR_IIHR_GARDEN_PEA,
      scope: "India",
    },
  },


  // ==========================================================
  // 14. ARKA NIRMAL
  // ==========================================================

  {
    varietyId: "arka-nirmal",
    cropId: "pea",

    name: "Arka Nirmal",
    nameHindi: "अर्का निर्मल",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 60,
      max: 60,
    },

    yield: {
      min: 8.5,
      max: 8.5,
      unit: "t/ha",
    },

    fruit: {
      color: null,
      shape: "short, round and straight",
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
      "अर्का निर्मल अगेती गार्डन पी किस्म है और खरीफ तथा रबी दोनों मौसम के लिए उपयुक्त बताई गई है। इसकी फलियां छोटी, गोल और सीधी होती हैं। दाने गहरे हरे और बड़े होते हैं। लगभग 60 दिनों में फसल तैयार हो सकती है और pod yield लगभग 8.5 टन/हेक्टेयर बताई गई है।",

    source: {
      organization:
        "ICAR-Indian Institute of Horticultural Research",
      title:
        "Garden Pea – Arka Nirmal",
      url: ICAR_IIHR_GARDEN_PEA,
      scope: "India",
    },
  },


  // ==========================================================
  // 15. ARKA CHAITRA
  // ==========================================================

  {
    varietyId: "arka-chaitra",
    cropId: "pea",

    name: "Arka Chaitra",
    nameHindi: "अर्का चैत्र",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 90,
      max: 90,
    },

    yield: {
      min: 7.0,
      max: 7.0,
      unit: "t/ha",
    },

    fruit: {
      color: "light green",
      shape: "long",
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
      "अर्का चैत्र लंबी पौध वाली मध्य-अवधि की गार्डन पी किस्म है। यह 35°C तक उच्च तापमान सहन करने वाली बताई गई है। फलियां लंबी और हल्की हरी होती हैं तथा दाने हल्के हरे, गोल और मीठे होते हैं। लगभग 90 दिनों में pod yield लगभग 7 टन/हेक्टेयर बताई गई है।",

    source: {
      organization:
        "ICAR-Indian Institute of Horticultural Research",
      title:
        "Garden Pea – Arka Chaitra",
      url: ICAR_IIHR_GARDEN_PEA,
      scope: "India",
    },
  },


  // ==========================================================
  // 16. ARKA UTTAM
  // ==========================================================

  {
    varietyId: "arka-uttam",
    cropId: "pea",

    name: "Arka Uttam",
    nameHindi: "अर्का उत्तम",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 90,
      max: 90,
    },

    yield: {
      min: 7.0,
      max: 7.0,
      unit: "t/ha",
    },

    fruit: {
      color: "dark green",
      shape: "long",
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
      "अर्का उत्तम लंबी पौध वाली मध्य-अवधि की गार्डन पी किस्म है। यह 35°C तक उच्च तापमान सहन करने वाली बताई गई है। फलियां लंबी और गहरे हरे रंग की होती हैं तथा दाने गहरे हरे, गोल और मीठे होते हैं। लगभग 90 दिनों में pod yield लगभग 7 टन/हेक्टेयर बताई गई है।",

    source: {
      organization:
        "ICAR-Indian Institute of Horticultural Research",
      title:
        "Garden Pea – Arka Uttam",
      url: ICAR_IIHR_GARDEN_PEA,
      scope: "India",
    },
  },


  // ==========================================================
  // 17. ARKA TAPAS
  // ==========================================================

  {
    varietyId: "arka-tapas",
    cropId: "pea",

    name: "Arka Tapas",
    nameHindi: "अर्का तपस",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 90,
      max: 90,
    },

    yield: {
      min: 6.0,
      max: 6.0,
      unit: "t/ha",
    },

    fruit: {
      color: "dark green",
      shape: "short",
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
      "अर्का तपस मध्यम ऊंचाई वाली मध्य-अवधि की गार्डन पी किस्म है। यह 35°C तक उच्च तापमान सहन करने वाली बताई गई है। इसकी फलियां छोटी और गहरे हरे रंग की होती हैं तथा दाने गहरे हरे और बड़े होते हैं। लगभग 90 दिनों में pod yield लगभग 6 टन/हेक्टेयर बताई गई है।",

    source: {
      organization:
        "ICAR-Indian Institute of Horticultural Research",
      title:
        "Garden Pea – Arka Tapas",
      url: ICAR_IIHR_GARDEN_PEA,
      scope: "India",
    },
  },


  // ==========================================================
  // 18. ARKA SAMPOORNA
  // ==========================================================

  {
    varietyId: "arka-sampoorna",
    cropId: "pea",

    name: "Arka Sampoorna",
    nameHindi: "अर्का सम्पूर्ण",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 90,
      max: 90,
    },

    yield: {
      min: 8.0,
      max: 8.0,
      unit: "t/ha",
    },

    fruit: {
      color: "light green",
      shape: "medium long",
      minWeightG: null,
      maxWeightG: null,
    },

    resistance: [
      "rust",
      "powdery mildew",
    ],

    sowingMonths: [
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "अर्का सम्पूर्ण whole-pod edible pea की मध्य-अवधि किस्म है। इसकी फलियां मध्यम लंबी और हल्की हरी होती हैं। दाने मध्यम आकार के, हल्के हरे और मीठे होते हैं। यह रस्ट और पाउडरी मिल्ड्यू के प्रति प्रतिरोधी बताई गई है। लगभग 90 दिनों में pod yield लगभग 8 टन/हेक्टेयर बताई गई है।",

    source: {
      organization:
        "ICAR-Indian Institute of Horticultural Research",
      title:
        "Brief Characteristics of Vegetable Varieties – Garden Pea",
      url: ICAR_IIHR_VEGETABLE_CHARACTERISTICS,
      scope: "India",
    },
  },


  // ==========================================================
  // 19. BONNEVILLE
  // ==========================================================

  {
    varietyId: "bonneville",
    cropId: "pea",

    name: "Bonneville",
    nameHindi: "बोनविले",

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

    sowingMonths: [
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "बोनविले को ICAR की रबी कृषि सलाह में मुख्य मौसम की गार्डन पी किस्मों में शामिल किया गया है। उपोष्ण क्षेत्रों में मुख्य फसल के लिए अक्टूबर के मध्य से नवंबर के मध्य तक बुवाई की अवधि बताई गई है। उपलब्ध स्रोत में इस किस्म के लिए अलग से उपज और पहली तुड़ाई का आंकड़ा नहीं दिया गया है।",

    source: {
      organization:
        "Indian Council of Agricultural Research",
      title:
        "ICAR Rabi Agro-Advisory for Farmers",
      url: ICAR_RABI_ADVISORY,
      scope: "India",
    },
  },


  // ==========================================================
  // 20. P-89
  // ==========================================================

  {
    varietyId: "p-89",
    cropId: "pea",

    name: "P-89",
    nameHindi: "P-89",

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

    sowingMonths: [
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "P-89 को ICAR की रबी कृषि सलाह में मुख्य मौसम की गार्डन पी किस्मों में शामिल किया गया है। उपोष्ण क्षेत्रों में मुख्य फसल के लिए अक्टूबर के मध्य से नवंबर के मध्य तक बुवाई की अवधि बताई गई है। उपलब्ध स्रोत में इस किस्म के लिए अलग से उपज और पहली तुड़ाई का आंकड़ा नहीं दिया गया है।",

    source: {
      organization:
        "Indian Council of Agricultural Research",
      title:
        "ICAR Rabi Agro-Advisory for Farmers",
      url: ICAR_RABI_ADVISORY,
      scope: "India",
    },
  },
];

export default PEA_VARIETIES;