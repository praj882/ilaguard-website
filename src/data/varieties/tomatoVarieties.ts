// src/data/varieties/tomatoVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL SOURCES
// ============================================================

const ICAR_RCER_VEGETABLE_BULLETIN =
  "https://icarrcer.org.in/wp-content/uploads/2014/01/Vegetable_Var_Eng.pdf";

const IARI_TOMATO_VARIETIES =
  "https://ztmbpd.iari.res.in/technologies/varietieshybrids/vegetables/tomato/";

const BIHAR_TOMATO_DPR =
  "https://horticulture.bihar.gov.in/hortmis/PMFME/MODEL_DPR/DPR-Tomato.pdf";

const ICAR_IIHR_TOMATO_VARIETIES =
  "https://www.iihr.res.in/sites/default/files/Revised_final-Brief%20characteristics%20of%20vegetable%20varieties%20to%20upload%20in%20IIHR%20website%20%281%29.pdf";

const ICAR_IIHR_ARKA_ABHA =
  "https://api-dev.iihr.res.in/tomato-arka-abha";

// ============================================================
// TOMATO VARIETIES
// ============================================================

export const TOMATO_VARIETIES: CropVariety[] = [

  // ==========================================================
  // 1. ARKA RAKSHAK
  // ==========================================================

  {
    varietyId: "arka-rakshak",
    cropId: "tomato",

    name: "Arka Rakshak",
    nameHindi: "अरका रक्षक",

    type: "F1 Hybrid",

    firstHarvestDays: {
      min: 110,
      max: 120,
    },

    yield: {
      min: 75,
      max: 80,
      unit: "t/ha",
    },

    fruit: {
      color: "deep red",
      shape: "square-round",
      weightG: 95,
    },

    resistance: [
      "tomato leaf curl virus",
      "bacterial wilt",
      "early blight",
    ],

    regionCodes: [],

    sowingMonths: [
      9,
      10,
      11,
    ],

    suitability: "medium",

    sowingWindowsOverride: [
      {
        regionCodes: [],
        months: [
          9,
          10,
          11,
        ],
        suitability: "medium",
      },
    ],

    notes:
      "अर्का रक्षक F1 एक हाइब्रिड किस्म है, जिसमें तीन प्रमुख रोगों के प्रति प्रतिरोधक क्षमता बताई गई है। इसके फल कड़े और गहरे लाल रंग के होते हैं, जो ताजे बाजार में बिक्री और प्रसंस्करण (Processing) के लिए उपयुक्त हैं।",

    source: {
      organization: "ICAR-Indian Institute of Horticultural Research",
      title: "Tomato - Arka Rakshak",
      url: ICAR_RCER_VEGETABLE_BULLETIN,
      scope: "National",
    },
  },

  // ==========================================================
  // 2. SWARNA LALIMA
  // ==========================================================

  {
    varietyId: "swarna-lalima",
    cropId: "tomato",

    name: "Swarna Lalima",
    nameHindi: "स्वर्ण लालिमा",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 55,
      max: 60,
    },

    yield: {
      min: 60,
      max: 70,
      unit: "t/ha",
    },

    fruit: {
      color: "deep red",
      shape: "round",
      weightG: 122,
    },

    resistance: [
      "bacterial wilt",
    ],

    sowingMonths: [
      7,
      8,
      9,
      2,
      3,
      4,
    ],

    suitability: "high",

    notes:
      "स्वर्ण ललिमा टमाटर की खेती फरवरी–अप्रैल और जुलाई–सितंबर में की जा सकती है। यह किस्म बिहार की जलवायु के लिए उपयुक्त है और बैक्टीरियल विल्ट के प्रति प्रतिरोधी है। पहली तुड़ाई लगभग 55–60 दिनों में शुरू हो सकती है और इससे लगभग 60–70 टन/हेक्टेयर उत्पादन मिल सकता है। इसके गहरे लाल, गोल और लगभग 122 ग्राम के फल बाजार में आकर्षक हो सकते हैं, जिससे अच्छी गुणवत्ता वाली उपज के साथ बाजार में बिक्री का अवसर मिल सकता है।",

    source: {
      organization: "ICAR Research Complex for Eastern Region",
      title:
        "Improved Varieties of Fruit and Vegetables Developed by ICAR RCER",
      url: ICAR_RCER_VEGETABLE_BULLETIN,
      scope: "Bihar",
    },
  },

  // ==========================================================
  // 3. SWARNA SAMRIDHI
  // ==========================================================

  {
    varietyId: "swarna-samridhi",
    cropId: "tomato",

    name: "Swarna Samridhi",
    nameHindi: "स्वर्ण समृद्धि",

    type: "F1 Hybrid",

    regionCodes: [],

    firstHarvestDays: {
      min: 55,
      max: 60,
    },

    yield: {
      min: 100,
      max: 105,
      unit: "t/ha",
    },

    fruit: {
      color: "red",
      shape: "round",
      minWeightG: 40,
      maxWeightG: 50,
    },

    resistance: [
      "bacterial wilt",
      "early blight",
    ],

    sowingMonths: [
      8,
      9,
      4,
      5,
    ],

    suitability: "high",

    notes:
      "Swarna Samridhi F1 Hybrid टमाटर किस्म है। इसे अप्रैल–मई और अगस्त–सितंबर में लगाया जा सकता है। इन महीनों की जलवायु इस किस्म की खेती के लिए उपयुक्त है। यह किस्म बैक्टीरियल विल्ट और अर्ली ब्लाइट के प्रति प्रतिरोधी है। पहली तुड़ाई लगभग 55–60 दिनों में शुरू हो सकती है। इसका संभावित उत्पादन 100–105 टन/हेक्टेयर है। फल गहरे लाल और गोल होते हैं, जिससे बाजार में अच्छी पहचान बन सकती है। अधिक उत्पादन और आकर्षक फलों के कारण किसानों के लिए अच्छा बाजार अवसर उपलब्ध हो सकता है।",

    source: {
      organization: "ICAR Research Complex for Eastern Region",
      title:
        "Improved Varieties of Fruit and Vegetables Developed by ICAR RCER",
      url: ICAR_RCER_VEGETABLE_BULLETIN,
      scope: "Bihar",
    },
  },

  // ==========================================================
  // 4. SWARNA SAMPADA
  // ==========================================================

  {
    varietyId: "swarna-sampada",
    cropId: "tomato",

    name: "Swarna Sampada",
    nameHindi: "स्वर्ण संपदा",

    type: "F1 Hybrid",

    regionCodes: [],

    firstHarvestDays: {
      min: 55,
      max: 60,
    },

    yield: {
      min: 100,
      max: 105,
      unit: "t/ha",
    },

    fruit: {
      color: "red",
      shape: "round",
      minWeightG: 70,
      maxWeightG: 80,
    },

    resistance: [
      "bacterial wilt",
      "early blight",
    ],

    sowingMonths: [
      8,
      9,
      2,
      3,
      4,
      7,
    ],

    suitability: "medium",

    notes:
      "स्वर्ण सम्पदा (F1 Hybrid) टमाटर की एक अच्छी उत्पादक किस्म है। यह फरवरी–अप्रैल और जुलाई–सितंबर में लगाने के लिए उपयुक्त है। इन महीनों की जलवायु में इसकी खेती की जा सकती है। इसमें बैक्टीरियल विल्ट और अर्ली ब्लाइट के प्रति प्रतिरोध है। पहली तुड़ाई लगभग 55–60 दिनों में शुरू हो सकती है। इसके फल गहरे लाल और गोल होते हैं, जो बाजार में अच्छी प्रस्तुति दे सकते हैं। इसकी संभावित उपज 100–105 टन/हेक्टेयर है, इसलिए अच्छी उपज के साथ बाजार में बिक्री का अच्छा अवसर मिल सकता है।",

    source: {
      organization: "ICAR Research Complex for Eastern Region",
      title:
        "Improved Varieties of Fruit and Vegetables Developed by ICAR RCER",
      url: ICAR_RCER_VEGETABLE_BULLETIN,
      scope: "Bihar",
    },
  },

  // ==========================================================
  // 5. ARKA VIKAS
  // ==========================================================

  {
    varietyId: "arka-vikas",
    cropId: "tomato",

    name: "Arka Vikas",
    nameHindi: "अरका विकास",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 110,
      max: 120,
    },

    yield: {
      min: 35,
      max: 35,
      unit: "t/ha",
    },

    fruit: {
      color: "deep red",
      shape: "oblate",
      weightG: 85,
    },

    resistance: [],

    sowingMonths: [
      1,
      2,
      6,
      7,
      10,
      11,
    ],

    suitability: "high",

    notes:
      "अर्का विकास टमाटर की खेती जनवरी, फरवरी, जून, जुलाई, अक्टूबर और नवंबर में की जा सकती है। किसान अपने क्षेत्र और मौसम के अनुसार सही समय चुनें। इसके फल गहरे लाल रंग के और चपटे-गोल होते हैं। एक फल का वजन लगभग 85 ग्राम होता है। इसकी उपज लगभग 35 टन प्रति हेक्टेयर है। गहरे लाल रंग और लगभग 85 ग्राम वजन के फल होने से इसे बाजार में बेचने के लिए अच्छा विकल्प माना जा सकता है।",

    source: {
      organization: "ICAR-Indian Institute of Horticultural Research",
      title: "Arka Vikas",
      url: ICAR_RCER_VEGETABLE_BULLETIN,
      scope: "National",
    },
  },

  // ==========================================================
  // 6. SWARNA NAVEEN
  // ==========================================================

  {
    varietyId: "swarna-naveen",
    cropId: "tomato",

    name: "Swarna Naveen",
    nameHindi: "स्वर्ण नवीन",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 60,
      max: 65,
    },

    yield: {
      min: 60,
      max: 65,
      unit: "t/ha",
    },

    fruit: {
      color: "deep red",
      shape: "oblong",
      minWeightG: 40,
      maxWeightG: 50,
    },

    resistance: [
      "bacterial wilt",
    ],

    sowingMonths: [
      7,
      8,
      9,
      2,
      3,
      4,
    ],

    suitability: "high",

    notes:
      "Swarna Naveen की खेती फरवरी–अप्रैल और जुलाई–सितंबर में की जा सकती है। यह किस्म बैक्टीरियल विल्ट के प्रति प्रतिरोधी है। पहली तुड़ाई लगभग 60–65 दिनों में शुरू हो सकती है। इसके फल गहरे लाल और अंडाकार (oblong) होते हैं। इसकी औसत उपज 60–65 टन/हेक्टेयर तक है। गहरे लाल रंग और अच्छे फल आकार के कारण इसे ताजी सब्जी के रूप में बाजार में बेचने का अवसर है।",

    source: {
      organization: "ICAR Research Complex for Eastern Region",
      title:
        "Improved Varieties of Fruit and Vegetables Developed by ICAR RCER",
      url: ICAR_RCER_VEGETABLE_BULLETIN,
      scope: "Bihar",
    },
  },

  // ==========================================================
  // 7. PUSA RUBY
  // ==========================================================

  {
    varietyId: "pusa-ruby",
    cropId: "tomato",

    name: "Pusa Ruby",
    nameHindi: "पूसा रूबी",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 60,
      max: 65,
    },

    yield: {
      min: 30,
      max: 30,
      unit: "t/ha",
    },

    fruit: {
      color: "uniform red",
      shape: "slightly furrowed",
    },

    resistance: [],

    sowingMonths: [
      9,
      10,
      11,
      2,
      3,
      4,
    ],

    suitability: "high",

    notes:
      "Pusa Ruby एक जल्दी तैयार होने वाली indeterminate किस्म है। आपके क्षेत्र के लिए फरवरी–अप्रैल और सितंबर–नवंबर में इसकी खेती उपयुक्त है। यह Autumn–Winter और Spring–Summer मौसम के लिए उपयुक्त है। पहली तुड़ाई 60–65 दिन में और उपज लगभग 30 टन/हेक्टेयर बताई गई है। इसके फल एक समान लाल रंग और हल्की धारियों वाले होते हैं। इस किस्म की उपज जल्दी मिलने से किसान को समय पर उत्पादन प्राप्त हो सकता है। इसके फल ताजे उपयोग और processing दोनों के लिए उपयुक्त हैं।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Vegetable Varieties and Hybrids – Tomato",
      url: IARI_TOMATO_VARIETIES,
      scope: "National",
    },
  },

  // ==========================================================
  // 8. SWARNA BAIBHAV
  // ==========================================================

  {
    varietyId: "swarna-baibhav",
    cropId: "tomato",

    name: "Swarna Baibhav",
    nameHindi: "स्वर्ण बैभव",

    type: "Hybrid",

    regionCodes: [],

    firstHarvestDays: {
      min: 65,
      max: 70,
    },

    yield: {
      min: 89,
      max: 99,
      unit: "t/ha",
    },

    fruit: {
      color: undefined,
      shape: undefined,
    },

    sowingMonths: [
      9,
      10,
    ],

    suitability: "high",

    notes:
      "सितंबर–अक्टूबर में Swarna Baibhav की बुवाई की जा सकती है। यह Hybrid किस्म है और इस समय की खेती के लिए उपयुक्त है। पहली तुड़ाई लगभग 65–70 दिनों में शुरू होती है। इसकी औसत उपज 89–99 टन/हेक्टेयर तक बताई गई है। इसके फल अच्छी keeping quality वाले हैं, इसलिए इन्हें दूर के बाजारों तक ले जाने और processing के लिए उपयोग किया जा सकता है। इससे किसान स्थानीय बाजार के साथ दूर के बाजार और processing अवसरों को भी ध्यान में रख सकते हैं।",

    source: {
      organization: "Directorate of Horticulture, Government of Bihar",
      title: "Model DPR on Tomato Processing Unit",
      url: BIHAR_TOMATO_DPR,
      scope: "Bihar",
    },
  },

  // ==========================================================
  // 9. PUSA GAURAV
  // ==========================================================

  {
    varietyId: "pusa-gaurav",
    cropId: "tomato",

    name: "Pusa Gaurav",
    nameHindi: "पूसा गौरव",

    type: "Variety",

    regionCodes: [],

    yield: {
      min: 40,
      max: 40,
      unit: "t/ha",
    },

    fruit: {
      color: "uniform red",
      shape: "egg-shaped",
    },

    resistance: [],

    sowingMonths: [
      2,
      3,
      7,
      8,
    ],

    suitability: "medium",

    notes:
      "बिहार में टमाटर की Pusa Gaurav किस्म की खेती फरवरी, मार्च, जुलाई और अगस्त महीने में उपयुक्त है। यह एक सामान्य किस्म (Variety) है और इसकी संभावित उपज 40 टन प्रति हेक्टेयर है। दिए गए आंकड़ों के अनुसार, इस किस्म के फल एकसमान लाल रंग और अंडाकार आकार के होते हैं। उपलब्ध जानकारी के आधार पर इन महीनों में बिहार की जलवायु इस किस्म के लिए उपयुक्त मानी गई है। एकसमान लाल रंग और अंडाकार फल के कारण बाजार में इसकी मांग का अवसर हो सकता है, हालांकि बाजार भाव से संबंधित आंकड़े उपलब्ध नहीं हैं।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Vegetable Varieties and Hybrids – Tomato",
      url: IARI_TOMATO_VARIETIES,
      scope: "National",
    },
  },

  // ==========================================================
  // 10. PUSA HYBRID-4
  // ==========================================================

  {
    varietyId: "pusa-hybrid-4",
    cropId: "tomato",

    name: "Pusa Hybrid-4",
    nameHindi: "पूसा हाइब्रिड-4",

    type: "Hybrid",

    regionCodes: [],

    sowingMonths: [
      10,
      11,
      12,
    ],

    suitability: "high",

    yield: {
      min: 55,
      max: 55,
      unit: "t/ha",
    },

    fruit: {
      color: "red",
      shape: "round",
    },

    resistance: [],

    notes:
      "Pusa Hybrid-4 किस्म की खेती अक्टूबर, नवंबर और दिसंबर में की जा सकती है। यह एक हाइब्रिड और determinate किस्म है, जो उत्तर भारतीय मैदानी क्षेत्रों के लिए उपयुक्त है तथा मध्य अक्टूबर से मध्य दिसंबर तक बुवाई के लिए अनुशंसित है। इसके फल गोल, एकसमान लाल रंग के होते हैं और समान रूप से पकते हैं। इस किस्म की उपज लगभग 55 टन प्रति हेक्टेयर है। इसकी अच्छी परिवहन गुणवत्ता के कारण बाजार तक फल पहुँचाने में सुविधा रहती है, जिससे किसानों के लिए अच्छा बाजार अवसर उपलब्ध हो सकता है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title: "Vegetable Varieties and Hybrids – Tomato",
      url: IARI_TOMATO_VARIETIES,
      scope: "National",
    },
  },

  // ==========================================================
  // 11. ARKA ANANYA
  // ==========================================================

  {
    varietyId: "arka-ananya",
    cropId: "tomato",

    name: "Arka Ananya",
    nameHindi: "अर्का अनन्या",

    type: "F1 Hybrid",

    regionCodes: [],

    yield: {
      min: 65,
      max: 70,
      unit: "t/ha",
    },

    fruit: {
      color: "deep red",
      minWeightG: 65,
      maxWeightG: 70,
    },

    resistance: [
      "Tomato leaf curl virus",
      "bacterial wilt",
    ],

    sowingMonths: [
      2,
      3,
      4,
    ],

    suitability: "medium",

    notes:
      "फरवरी, मार्च और अप्रैल के दौरान Arka Ananya टमाटर की खेती की जा सकती है। यह F1 Hybrid किस्म है और ताजे बाजार के लिए उपयुक्त है। इसका फल गहरे लाल रंग का होता है और इसका औसत वजन 65–70 ग्राम रहता है। पहली तुड़ाई की अवधि का डेटा उपलब्ध नहीं है। इसकी संभावित उपज 65–70 टन/हेक्टेयर है, इसलिए ताजे बाजार में अच्छी उपज के साथ बिक्री का अवसर मिल सकता है। यह किस्म Tomato Leaf Curl Virus और Bacterial Wilt के प्रति संयुक्त प्रतिरोध के लिए जानी जाती है।",

    source: {
      organization: "ICAR-Indian Institute of Horticultural Research",
      title: "ICAR-IIHR Released Vegetable Varieties",
      url: ICAR_IIHR_TOMATO_VARIETIES,
      scope: "National",
    },
  },

  // ==========================================================
  // 12. ARKA SAMRAT
  // ==========================================================

  {
    varietyId: "arka-samrat",
    cropId: "tomato",

    name: "Arka Samrat",
    nameHindi: "अर्का सम्राट",

    type: "F1 Hybrid",

    regionCodes: [],

    yield: {
      min: 80,
      max: 85,
      unit: "t/ha",
    },

    fruit: {
      color: "deep red",
      shape: "oblate to high round",
      minWeightG: 90,
      maxWeightG: 110,
    },

    resistance: [
      "Tomato leaf curl virus",
      "bacterial wilt",
      "early blight",
    ],

    sowingMonths: [
      9,
      10,
      1,
    ],

    suitability: "medium",

    notes:
      "Arka Samrat एक F1 Hybrid टमाटर किस्म है, जिसे सितंबर, अक्टूबर और जनवरी में लगाने की सलाह दी जाती है। यह इन महीनों के लिए उपयुक्त है। इसके फल गहरे लाल रंग के, चपटे से लेकर अधिक गोल आकार के और लगभग 90–110 ग्राम वजन के होते हैं। यह किस्म टमाटर लीफ कर्ल वायरस, बैक्टीरियल विल्ट और अर्ली ब्लाइट के प्रति प्रतिरोधी है। इसकी उपज लगभग 80–85 टन/हेक्टेयर तक है। अच्छी उपज और ताजे बाजार के लिए उपयुक्त फल होने के कारण इसमें अच्छी बाजार संभावना है।",

    source: {
      organization: "ICAR-Indian Institute of Horticultural Research",
      title: "Brief characteristics of vegetable varieties",
      url: ICAR_IIHR_TOMATO_VARIETIES,
      scope: "National",
    },
  },

  // ==========================================================
  // 13. ARKA ALOK
  // ==========================================================

  {
    varietyId: "arka-alok",
    cropId: "tomato",

    name: "Arka Alok",
    nameHindi: "अर्का आलोक",

    type: "Variety",

    regionCodes: [],

    yield: {
      min: 46,
      max: 46,
      unit: "t/ha",
    },

    fruit: {
      color: "red",
      shape: "round to oblong",
      minWeightG: 80,
      maxWeightG: 120,
    },

    resistance: [
      "bacterial wilt",
    ],

    sowingMonths: [
      9,
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "Arka Alok एक खुली परागण (Open-pollinated) वाली ताजा बाजार के लिए उपयुक्त किस्म है। इसकी खेती सितंबर, अक्टूबर और नवंबर में की जा सकती है और यह इन महीनों की जलवायु के लिए उपयुक्त है। इसका संभावित उत्पादन 46 टन/हेक्टेयर है, जिससे ताजा टमाटर बाजार में अच्छी बिक्री का अवसर मिल सकता है। इसके फल लाल, गोल से अंडाकार होते हैं और इनका वजन लगभग 80–120 ग्राम रहता है। नीचे के गुच्छों में फल बड़े और बाद के गुच्छों में मध्यम आकार के होते हैं। यह किस्म बैक्टीरियल विल्ट के प्रति प्रतिरोधी है।",

    source: {
      organization: "ICAR-Indian Institute of Horticultural Research",
      title: "Brief characteristics of vegetable varieties",
      url: ICAR_IIHR_TOMATO_VARIETIES,
      scope: "National",
    },
  },

  // ==========================================================
  // 14. ARKA ABHA
  // ==========================================================

  {
    varietyId: "arka-abha",
    cropId: "tomato",

    name: "Arka Abha",
    nameHindi: "अर्का आभा",

    type: "Variety",

    regionCodes: [],

    yield: {
      min: 43,
      max: 43,
      unit: "t/ha",
    },

    fruit: {
      color: "deep red",
      shape: "oblate",
      weightG: 75,
    },

    resistance: [
      "bacterial wilt",
    ],

    sowingMonths: [
      9,
      10,
      11,
    ],

    suitability: "medium",

    notes:
      "सितंबर, अक्टूबर और नवंबर में अर्का आभा टमाटर की खेती की जा सकती है। यह समय इस किस्म के लिए उपयुक्त जलवायु वाला है। यह एक ओपन-पॉलिनेटेड, ताजा बाजार के लिए उपयुक्त किस्म है और बैक्टीरियल विल्ट के प्रति प्रतिरोधी है। इसके फल गहरे लाल रंग और चपटे-गोल (oblate) आकार के होते हैं, जिनका औसत वजन लगभग 75 ग्राम है। इसकी संभावित उपज 43 टन/हेक्टेयर है। ताजे बाजार के लिए इसकी उपयुक्तता और आकर्षक गहरे लाल फल किसानों के लिए अच्छा बाजार अवसर दे सकते हैं।",

    source: {
      organization: "ICAR-Indian Institute of Horticultural Research",
      title: "Tomato – Arka Abha",
      url: ICAR_IIHR_ARKA_ABHA,
      scope: "National",
    },
  },
];