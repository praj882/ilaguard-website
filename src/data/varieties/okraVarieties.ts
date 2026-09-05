// src/data/varieties/okraVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL SOURCES
// ============================================================

const ICAR_IIVR_OKRA_VARIETIES =
  "https://icariivr.org.in/okra-2/";

const ICAR_OKRA_LANDMARK_VARIETIES =
  "https://www.icar.gov.in/en/landmark-varieties";

const ICAR_ANNUAL_REPORT_2022_23 =
  "https://www.icar.gov.in/sites/default/files/2025-04/ICAR-Annual-Report-2022-23-English.pdf";

const NHB_OKRA_VARIETIES =
  "https://nhb.gov.in/pdf/vegetable/okra/okr011.pdf";

const NHB_OKRA_COMMERCIAL_VARIETIES =
  "https://nhb.gov.in/area-pro/indian%20horticulture%202013.pdf";

const NHB_OKRA_CHAPTER =
  "https://nhb.gov.in/area-pro/ch2.pdf";

const ICAR_KHARIF_AGRO_ADVISORY =
  "https://icar.gov.in/sites/default/files/Circulars/ICAR%20En-Kharif%20Agro-Advisories%20for%20Farmers%202025.pdf";

const ICAR_OKRA_BACKGROUND =
  "https://www.icar.gov.in/sites/default/files/inline-files/Horticulture-02.pdf";

const BAU_OKRA_RESEARCH =
  "https://bausabour.ac.in/album/File205_12_202311_22_35PIMG1.pdf";

// ============================================================
// OKRA
// ============================================================

export const OKRA_VARIETIES: CropVariety[] = [

  // ============================================================
  // 1. KASHI SAHISHNU
  // ============================================================

  {
    varietyId: "kashi-sahishnu",
    cropId: "okra",

    name: "Kashi Sahishnu",
    nameHindi: "काशी सहिष्णु",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 45,
      max: 50,
    },

    yield: {
      min: 14.0,
      max: 14.5,
      unit: "t/ha",
    },

    fruit: {
      color: "dark green",
      shape: "elongated",
      minLengthCm: 12,
      maxLengthCm: 14,
    },

    resistance: [
      "Yellow Vein Mosaic Virus (YVMV)",
      "Okra Enation Leaf Curl Virus (ELCV)",
    ],

    sowingMonths: [6, 7],

    suitability: "high",

    notes:
      "काशी सहिष्णु ICAR-IIVR द्वारा विकसित भिंडी की किस्म है। इसे बिहार, उत्तर प्रदेश, झारखंड और पंजाब के लिए अनुशंसित किया गया है। फल गहरे हरे रंग के और लगभग 12–14 सेमी लंबे होते हैं। पहली फल तुड़ाई लगभग 45–50 दिन में शुरू हो सकती है। इसकी उपज क्षमता लगभग 140–145 क्विंटल प्रति हेक्टेयर है। यह YVMV और ELCV के प्रति प्रतिरोधी है।",

    source: {
      organization: "ICAR-Indian Institute of Vegetable Research",
      title: "Okra Varieties Developed by IIVR",
      url: ICAR_IIVR_OKRA_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 2. KASHI VARDAAN
  // ============================================================

  {
    varietyId: "kashi-vardaan",
    cropId: "okra",

    name: "Kashi Vardaan",
    nameHindi: "काशी वरदान",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 48,
      max: 48,
    },

    yield: {
      min: 15.0,
      max: 16.0,
      unit: "t/ha",
    },

    fruit: {
      color: "green",
      shape: "elongated",
      minLengthCm: 12,
      maxLengthCm: 14,
    },

    resistance: [
      "Yellow Vein Mosaic Virus (YVMV)",
      "Okra Enation Leaf Curl Virus (OLCV)",
    ],

    sowingMonths: [6, 7],

    suitability: "high",

    notes:
      "काशी वरदान ICAR-IIVR की भिंडी की किस्म है और बिहार, उत्तर प्रदेश, झारखंड तथा पंजाब के लिए अनुशंसित है। पहली फल तुड़ाई लगभग 48 दिन में शुरू हो सकती है। फल लगभग 12–14 सेमी लंबे होते हैं और प्रति पौधा लगभग 19–20 फल प्राप्त हो सकते हैं। उपज लगभग 150–160 क्विंटल प्रति हेक्टेयर बताई गई है। यह YVMV और OLCV के प्रति प्रतिरोधी है।",

    source: {
      organization: "ICAR-Indian Institute of Vegetable Research",
      title: "Okra Varieties Developed by IIVR",
      url: ICAR_IIVR_OKRA_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 3. KASHI KRANTI
  // ============================================================

  {
    varietyId: "kashi-kranti",
    cropId: "okra",

    name: "Kashi Kranti",
    nameHindi: "काशी क्रांति",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 45,
      max: 46,
    },

    yield: {
      min: 12.5,
      max: 14.5,
      unit: "t/ha",
    },

    fruit: {
      color: "dark green",
      shape: "elongated",
      minLengthCm: 8,
      maxLengthCm: 10,
    },

    resistance: [
      "Yellow Vein Mosaic Virus (YVMV)",
      "Okra Enation Leaf Curl Virus (OLCV)",
    ],

    sowingMonths: [6, 7],

    suitability: "high",

    notes:
      "काशी क्रांति ICAR-IIVR की भिंडी की किस्म है। इसे बिहार, झारखंड, पंजाब और उत्तर प्रदेश के लिए अनुशंसित किया गया है। पहली तुड़ाई लगभग 45–46 दिन बाद हो सकती है। फल गहरे हरे रंग के और लगभग 8–10 सेमी लंबे होते हैं। उपज लगभग 125–145 क्विंटल प्रति हेक्टेयर बताई गई है। यह YVMV और OLCV के प्रति प्रतिरोधी है।",

    source: {
      organization: "ICAR-Indian Institute of Vegetable Research",
      title: "Okra Varieties Developed by IIVR",
      url: ICAR_IIVR_OKRA_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 4. KASHI PRAGATI
  // ============================================================

  {
    varietyId: "kashi-pragati",
    cropId: "okra",

    name: "Kashi Pragati",
    nameHindi: "काशी प्रगति",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 36,
      max: 38,
    },

    yield: {
      min: 13.0,
      max: 14.0,
      unit: "t/ha",
    },

    fruit: {
      color: "green",
      shape: "elongated",
      minLengthCm: 8,
      maxLengthCm: 10,
    },

    resistance: [
      "Yellow Vein Mosaic Virus (YVMV)",
      "Okra Leaf Curl Virus (OLCV)",
    ],

    sowingMonths: [6, 7],

    suitability: "high",

    notes:
      "काशी प्रगति ICAR-IIVR द्वारा विकसित भिंडी की किस्म है और बिहार, झारखंड, पंजाब, उत्तर प्रदेश तथा कुछ अन्य राज्यों के लिए अनुशंसित है। पहली फूल अवस्था लगभग 36–38 दिन में आती है। फल लगभग 8–10 सेमी लंबे होते हैं और प्रति पौधा लगभग 23–25 फल लग सकते हैं। वर्षा मौसम में उपज लगभग 180–190 क्विंटल प्रति हेक्टेयर तथा गर्मी में लगभग 130–140 क्विंटल प्रति हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-Indian Institute of Vegetable Research",
      title: "Okra Varieties Developed by IIVR",
      url: ICAR_IIVR_OKRA_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 5. SHEETLA UPHAR
  // ============================================================

  {
    varietyId: "sheetla-uphar",
    cropId: "okra",

    name: "Sheetla Uphar",
    nameHindi: "शीतला उपहार",

    type: "Hybrid",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 38,
      max: 40,
    },

    yield: {
      min: 15.0,
      max: 17.0,
      unit: "t/ha",
    },

    fruit: {
      color: "green",
      shape: "elongated",
      minLengthCm: 11,
      maxLengthCm: 13,
    },

    resistance: [
      "Yellow Vein Mosaic Virus (YVMV)",
      "Okra Enation Leaf Curl Virus (OLCV)",
    ],

    sowingMonths: [6, 7],

    suitability: "high",

    notes:
      "शीतला उपहार ICAR-IIVR द्वारा सूचीबद्ध भिंडी हाइब्रिड है। इसे पंजाब, उत्तर प्रदेश, बिहार, झारखंड, गोवा, मध्य प्रदेश और महाराष्ट्र के लिए अनुशंसित किया गया है। पहली फूल अवस्था लगभग 38–40 दिन में आती है। बाजार योग्य फल हरे और लगभग 11–13 सेमी लंबे होते हैं। उपज लगभग 150–170 क्विंटल प्रति हेक्टेयर बताई गई है। यह YVMV और OLCV के प्रति प्रतिरोधी है।",

    source: {
      organization: "ICAR-Indian Institute of Vegetable Research",
      title: "Okra Varieties Developed by IIVR",
      url: ICAR_IIVR_OKRA_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 6. KASHI CHAMAN
  // ============================================================

  {
    varietyId: "kashi-chaman",
    cropId: "okra",

    name: "Kashi Chaman",
    nameHindi: "काशी चमन",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 46,
      max: 46,
    },

    yield: {
      min: 15.0,
      max: 16.0,
      unit: "t/ha",
    },

    fruit: {
      color: "dark green",
      shape: "elongated",
      minLengthCm: 11,
      maxLengthCm: 14,
    },

    resistance: [
      "Yellow Vein Mosaic Virus (YVMV)",
      "Okra Enation Leaf Curl Virus (OELCV)",
    ],

    sowingMonths: [1, 2, 6, 7],

    suitability: "high",

    notes:
      "काशी चमन ICAR-IIVR द्वारा विकसित भिंडी की किस्म है। यह गर्मी और वर्षा दोनों मौसमों में उगाई जा सकती है। ICAR के अनुसार यह बिहार में किसानों के बीच लोकप्रिय हो रही है। पहली फल तुड़ाई 46 दिन बाद की गई थी और नियमित तुड़ाई 3–4 दिन के अंतर पर हुई। फल गहरे हरे और लगभग 11–14 सेमी लंबे होते हैं। यह YVMV और OELCV के प्रति सहनशील है।",

    source: {
      organization: "ICAR-Indian Institute of Vegetable Research",
      title: "Kashi Chaman – Farmer Field Performance",
      url: ICAR_IIVR_OKRA_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 7. KASHI LALIMA
  // ============================================================

  {
    varietyId: "kashi-lalima",
    cropId: "okra",

    name: "Kashi Lalima",
    nameHindi: "काशी लालिमा",

    type: "Variety",

    regionCodes: [],

    fruit: {
      color: "reddish purple",
      shape: "elongated",
    },

    resistance: [
      "Yellow Vein Mosaic Virus (YVMV)",
      "Okra Leaf Curl Virus (OLCV)",
    ],

    sowingMonths: [1, 2, 6, 7],

    suitability: "medium",

    notes:
      "काशी लालिमा ICAR-IIVR द्वारा विकसित पोषण एवं रंग की दृष्टि से विशेष भिंडी किस्म है। इसके फल लाल-बैंगनी रंग के होते हैं और इनमें anthocyanin तथा phenolics पाए जाते हैं। यह गर्मी और खरीफ मौसम के लिए सूचीबद्ध है तथा YVMV और OLCV के प्रति सहनशील बताई गई है।",

    source: {
      organization: "ICAR-Indian Institute of Vegetable Research",
      title: "Okra Varieties Developed by IIVR",
      url: ICAR_IIVR_OKRA_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 8. KASHI SATDHARI
  // ============================================================

  {
    varietyId: "kashi-satdhari",
    cropId: "okra",

    name: "Kashi Satdhari",
    nameHindi: "काशी सतधारी",

    type: "Variety",

    regionCodes: [],

    fruit: {
      color: "green",
      shape: "seven-ridged",
      minLengthCm: 13,
      maxLengthCm: 15,
    },

    resistance: [
      "Yellow Vein Mosaic Virus (YVMV)",
    ],

    sowingMonths: [6, 7],

    suitability: "medium",

    notes:
      "काशी सतधारी सात धारियों वाली भिंडी की किस्म है। ICAR-IIVR के अनुसार फूल लगभग 42 दिन में शुरू होते हैं। बाजार योग्य अवस्था में फल लगभग 13–15 सेमी लंबे होते हैं और प्रति पौधा लगभग 18–25 फल लग सकते हैं। इसकी उपज लगभग 110–140 क्विंटल प्रति हेक्टेयर है और यह YVMV के प्रति प्रतिरोधी है।",

    source: {
      organization: "ICAR-Indian Institute of Vegetable Research",
      title: "Okra Varieties Developed by IIVR",
      url: ICAR_IIVR_OKRA_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 9. KASHI BHAIRAV
  // ============================================================

  {
    varietyId: "kashi-bhairav",
    cropId: "okra",

    name: "Kashi Bhairav",
    nameHindi: "काशी भैरव",

    type: "Hybrid",

    regionCodes: [],

    yield: {
      min: 16.0,
      max: 18.0,
      unit: "t/ha",
    },

    fruit: {
      color: "dark green",
      shape: "elongated",
      minLengthCm: 10,
      maxLengthCm: 12,
    },

    resistance: [
      "Yellow Vein Mosaic Virus (YVMV)",
      "Okra Leaf Curl Virus (OLCV)",
    ],

    sowingMonths: [6, 7],

    suitability: "medium",

    notes:
      "काशी भैरव ICAR-IIVR द्वारा विकसित भिंडी हाइब्रिड है और पूरे भारत के लिए अनुशंसित है। बाजार योग्य अवस्था में फल गहरे हरे और लगभग 10–12 सेमी लंबे होते हैं। इसकी उपज लगभग 160–180 क्विंटल प्रति हेक्टेयर बताई गई है। यह YVMV और OLCV के प्रति प्रतिरोधी है।",

    source: {
      organization: "ICAR-Indian Institute of Vegetable Research",
      title: "Okra Varieties Developed by IIVR",
      url: ICAR_IIVR_OKRA_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 10. KASHI LILA
  // ============================================================

  {
    varietyId: "kashi-lila",
    cropId: "okra",

    name: "Kashi Lila",
    nameHindi: "काशी लीला",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 30,
      max: 34,
    },

    yield: {
      min: 15.0,
      max: 17.0,
      unit: "t/ha",
    },

    fruit: {
      color: "green",
      shape: "elongated",
      minLengthCm: 13,
      maxLengthCm: 15,
    },

    resistance: [
      "Yellow Vein Mosaic Virus (YVMV)",
    ],

    sowingMonths: [6, 7],

    suitability: "low",

    notes:
      "काशी लीला ICAR-IIVR की भिंडी की किस्म है। इसमें लगभग 30–34 दिन बाद फूल आना शुरू होता है और फल हरे तथा लगभग 13–15 सेमी लंबे होते हैं। इसकी उपज लगभग 150–170 क्विंटल प्रति हेक्टेयर है। यह YVMV के प्रति प्रतिरोधी है। आधिकारिक अनुशंसित राज्यों की सूची में बिहार शामिल नहीं है।",

    source: {
      organization: "ICAR-Indian Institute of Vegetable Research",
      title: "Okra Varieties Developed by IIVR",
      url: ICAR_IIVR_OKRA_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 11. PUSA SAWANI
  // ============================================================

  {
    varietyId: "pusa-sawani",
    cropId: "okra",

    name: "Pusa Sawani",
    nameHindi: "पूसा सावनी",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 50,
      max: 50,
    },

    yield: {
      min: 12.0,
      max: 15.0,
      unit: "t/ha",
    },

    fruit: {
      color: "dark green",
      shape: "five-ridged",
      minLengthCm: 10,
      maxLengthCm: 12,
    },

    resistance: [],

    sowingMonths: [1, 2, 3, 4, 5, 6, 7],

    suitability: "high",

    notes:
      "पूसा सावनी IARI द्वारा विकसित भिंडी की पुरानी और व्यापक रूप से अनुशंसित किस्म है। इसे वसंत, गर्मी और वर्षा मौसम में उगाया जा सकता है। फल गहरे हरे, चिकने और पांच धारियों वाले होते हैं तथा बाजार योग्य अवस्था में लगभग 10–12 सेमी लंबे होते हैं। फसल लगभग 50 दिन में तैयार हो सकती है और औसत उपज 12–15 टन प्रति हेक्टेयर बताई गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute / National Horticulture Board",
      title: "Okra Varieties",
      url: NHB_OKRA_VARIETIES,
      scope: "Bihar",
    },
  },

  // ============================================================
  // 12. PUSA A-4
  // ============================================================

  {
    varietyId: "pusa-a-4",
    cropId: "okra",

    name: "Pusa A-4",
    nameHindi: "पूसा A-4",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    sowingMonths: [1, 2, 3, 4, 5, 6, 7],

    suitability: "high",

    notes:
      "पूसा A-4 IARI द्वारा विकसित भिंडी की किस्म है और NHB के अनुसार पूरे भारत के लिए अनुशंसित है। बिहार प्रमुख भिंडी उत्पादक राज्यों में शामिल होने के कारण यह बिहार के लिए राष्ट्रीय स्तर पर उपलब्ध विकल्प है। उपलब्ध NHB स्रोत में इस डेटासेट के लिए समान उपज और परिपक्वता आंकड़े नहीं दिए गए हैं।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute / National Horticulture Board",
      title: "Indian Horticulture – Okra Varieties",
      url: NHB_OKRA_COMMERCIAL_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 13. ARKA ANAMIKA
  // ============================================================

  {
    varietyId: "arka-anamika",
    cropId: "okra",

    name: "Arka Anamika",
    nameHindi: "अर्का अनामिका",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    firstHarvestDays: {
      min: 45,
      max: 50,
    },

    maturityDays: {
      min: 130,
      max: 130,
    },

    yield: {
      min: 20.0,
      max: 20.0,
      unit: "t/ha",
    },

    fruit: {
      color: "green",
      shape: "five to six-ridged",
    },

    resistance: [
      "Yellow Vein Mosaic Virus (YVMV)",
    ],

    sowingMonths: [1, 2, 5, 6, 7],

    suitability: "high",

    notes:
      "अर्का अनामिका ICAR-IIHR द्वारा विकसित भिंडी की किस्म है और पूरे भारत के लिए अनुशंसित है। पहली तुड़ाई लगभग 45–50 दिन बाद शुरू हो सकती है। फल कांटारहित और पांच से छह धारियों वाले होते हैं। फसल की अवधि लगभग 130 दिन तथा औसत उपज लगभग 20 टन प्रति हेक्टेयर बताई गई है। यह YVMV के प्रति प्रतिरोधी है।",

    source: {
      organization: "ICAR-Indian Institute of Horticultural Research / National Horticulture Board",
      title: "Okra Varieties",
      url: NHB_OKRA_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 14. PARBHANI KRANTI
  // ============================================================

  {
    varietyId: "parbhani-kranti",
    cropId: "okra",

    name: "Parbhani Kranti",
    nameHindi: "परभणी क्रांति",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    maturityDays: {
      min: 120,
      max: 120,
    },

    yield: {
      min: 8.5,
      max: 11.5,
      unit: "t/ha",
    },

    fruit: {
      color: "green",
      shape: "medium-long",
    },

    resistance: [],

    sowingMonths: [1, 2, 6, 7],

    suitability: "high",

    notes:
      "परभणी क्रांति महाराष्ट्र कृषि विश्वविद्यालय, परभणी द्वारा विकसित भिंडी की किस्म है। फल मध्यम-लंबे और बाजार योग्य अवस्था में कोमल होते हैं। इसकी औसत उपज लगभग 8.5–11.5 टन प्रति हेक्टेयर बताई गई है और फसल लगभग 120 दिनों में तैयार होती है। यह YVMV के प्रति सहनशील है। NHB इसे प्रमुख व्यावसायिक भिंडी किस्मों में सूचीबद्ध करता है।",

    source: {
      organization: "National Horticulture Board",
      title: "Okra Varieties",
      url: NHB_OKRA_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 15. PUNJAB PADMINI
  // ============================================================

  {
    varietyId: "punjab-padmini",
    cropId: "okra",

    name: "Punjab Padmini",
    nameHindi: "पंजाब पद्मिनी",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 55,
      max: 60,
    },

    fruit: {
      color: "dark green",
      shape: "five-ridged",
    },

    resistance: [
      "Yellow Vein Mosaic Virus (YVMV)",
    ],

    sowingMonths: [1, 2, 3, 4],

    suitability: "medium",

    notes:
      "पंजाब पद्मिनी पंजाब कृषि विश्वविद्यालय द्वारा विकसित भिंडी की किस्म है। इसके फल तेजी से बढ़ने वाले, गहरे हरे, रोएंदार और पांच धारियों वाले होते हैं। फल लंबे समय तक कोमल बने रहते हैं। फसल लगभग 55–60 दिन में परिपक्व हो सकती है और यह YVMV के प्रति सहनशील है।",

    source: {
      organization: "National Horticulture Board",
      title: "Okra Varieties",
      url: NHB_OKRA_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 16. VARSHA UPHAR
  // ============================================================

  {
    varietyId: "varsha-uphar",
    cropId: "okra",

    name: "Varsha Uphar",
    nameHindi: "वर्षा उपहार",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    sowingMonths: [1, 2, 3, 4, 5, 6, 7],

    suitability: "high",

    notes:
      "वर्षा उपहार हिसार कृषि विश्वविद्यालय से संबंधित भिंडी की किस्म है। NHB के अनुसार इसे पूरे भारत के लिए अनुशंसित किया गया है। इसलिए बिहार में भी इसे राष्ट्रीय स्तर पर उपलब्ध भिंडी विकल्प के रूप में रखा जा सकता है। उपलब्ध NHB स्रोत में इस डेटासेट के लिए समान उपज और परिपक्वता आंकड़े नहीं दिए गए हैं।",

    source: {
      organization: "National Horticulture Board",
      title: "Indian Horticulture – Okra Varieties",
      url: NHB_OKRA_COMMERCIAL_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 17. HISAR UNNAT
  // ============================================================

  {
    varietyId: "hisar-unnat",
    cropId: "okra",

    name: "Hisar Unnat",
    nameHindi: "हिसार उन्नत",

    type: "Variety",

    regionCodes: [],
    biharRecommended: true,

    sowingMonths: [1, 2, 3, 4, 5, 6, 7],

    suitability: "high",

    notes:
      "हिसार उन्नत हरियाणा कृषि विश्वविद्यालय से संबंधित भिंडी की किस्म है और NHB के अनुसार पूरे भारत के लिए अनुशंसित है। इसलिए बिहार में इसे राष्ट्रीय स्तर पर अनुशंसित विकल्प के रूप में रखा जा सकता है। उपलब्ध सरकारी स्रोत में इस डेटासेट के लिए समान उपज और परिपक्वता आंकड़े नहीं दिए गए हैं।",

    source: {
      organization: "National Horticulture Board",
      title: "Indian Horticulture – Okra Varieties",
      url: NHB_OKRA_COMMERCIAL_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 18. ARKA ABHAY
  // ============================================================

  {
    varietyId: "arka-abhay",
    cropId: "okra",

    name: "Arka Abhay",
    nameHindi: "अर्का अभय",

    type: "Variety",

    regionCodes: [],

    suitability: "low",

    notes:
      "अर्का अभय ICAR-IIHR द्वारा विकसित भिंडी की किस्म है। NHB के अनुसार इसे पश्चिम बंगाल और असम के लिए अनुशंसित किया गया है। इसलिए इसे बिहार के लिए प्राथमिक किस्म के बजाय राष्ट्रीय डेटाबेस में कम उपयुक्त विकल्प के रूप में रखा गया है।",

    source: {
      organization: "ICAR-Indian Institute of Horticultural Research / National Horticulture Board",
      title: "Indian Horticulture – Okra Varieties",
      url: NHB_OKRA_COMMERCIAL_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 19. PUSA MAKHAMALI
  // ============================================================

  {
    varietyId: "pusa-makhmali",
    cropId: "okra",

    name: "Pusa Makhmali",
    nameHindi: "पूसा मखमली",

    type: "Variety",

    regionCodes: [],

    suitability: "medium",

    notes:
      "पूसा मखमली IARI द्वारा विकसित भिंडी की किस्म है। NHB के अनुसार इसके फल हल्के हरे रंग के होते हैं। यह YVMV के प्रति अत्यधिक संवेदनशील बताई गई है, इसलिए बिहार के लिए इसे प्राथमिक विकल्प के बजाय सावधानी वाले विकल्प के रूप में रखा गया है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute / National Horticulture Board",
      title: "Okra Varieties",
      url: NHB_OKRA_VARIETIES,
      scope: "National",
    },
  },

  // ============================================================
  // 20. KASHI PRAKRAM
  // ============================================================

  {
    varietyId: "kashi-prakram",
    cropId: "okra",

    name: "Kashi Prakram",
    nameHindi: "काशी प्रक्रम",

    type: "Variety",

    regionCodes: [],

    firstHarvestDays: {
      min: 45,
      max: 47,
    },

    yield: {
      min: 14.5,
      max: 15.5,
      unit: "t/ha",
    },

    fruit: {
      color: "shiny green",
      shape: "elongated",
      minLengthCm: 12,
      maxLengthCm: 14,
    },

    resistance: [
      "Yellow Vein Mosaic Virus (YVMV)",
      "Okra Enation Leaf Curl Virus (OELCV)",
    ],

    sowingMonths: [1, 2, 6, 7],

    suitability: "medium",

    notes:
      "काशी प्रक्रम ICAR की लैंडमार्क किस्मों में शामिल भिंडी की किस्म है। यह मध्यम ऊंचाई वाली किस्म है और गर्मी तथा वर्षा मौसम के लिए उपयुक्त बताई गई है। फल चमकदार हरे और लगभग 12–14 सेमी लंबे होते हैं। पहली फल तुड़ाई लगभग 45–47 दिन बाद और उपज लगभग 145–155 क्विंटल प्रति हेक्टेयर बताई गई है। यह YVMV और OELCV के प्रति प्रतिरोधी है।",

    source: {
      organization: "Indian Council of Agricultural Research",
      title: "Landmark Varieties – Kashi Prakram",
      url: ICAR_OKRA_LANDMARK_VARIETIES,
      scope: "National",
    },
  },
];