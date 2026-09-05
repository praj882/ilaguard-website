// src/data/varieties/broccoliVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL SOURCES
// ============================================================

const BIHAR_HORTICULTURE_BROCCOLI =
  "https://horticulture.bihar.gov.in/HortMIS/SabjiVikasYojana/OnlineApplicationSabjiVikas2025.aspx";

const BAU_SABOUR_NUTRI_GARDEN =
  "https://bausabour.ac.in/album/File101_05_202403_53_29PIMG1.pdf";

const BAU_BROCCOLI_RESEARCH =
  "https://bausabour.ac.in/album/File131_07_202502_57_05PIMG1.pdf";

const IARI_TECHNOLOGICAL_OPTIONS =
  "https://www.nahep.ig.iari.res.in/files/Publication/Others/Tech_Options_English-15072014.pdf";

const IARI_ANNUAL_REPORT_2015 =
  "https://www.iari.res.in/files/Publication/annual_report/Annual_Report-2015-16-22072016.pdf";

const IARI_ANNUAL_REPORT_2022 =
  "https://www.iari.res.in/files/Publication/annual_report/Annual_Report_en_2022.pdf";

const IARI_ANNUAL_REPORT_2020 =
  "https://www.iari.res.in/files/Publication/annual_report/IARI_ANNUAL_REPORT_2020.pdf";

const ICAR_RABI_ADVISORY =
  "https://icar.gov.in/sites/default/files/2022-09/Rabi-Agro-Advisory-2021-22_0.pdf";

const ICAR_LANDMARK_VARIETIES =
  "https://www.icar.gov.in/en/landmark-varieties";

const PAU_BROCCOLI_PRACTICES =
  "https://old.pau.edu/content/ccil/pf/pp_veg.pdf";

const PAU_ANNUAL_REPORT_2014 =
  "https://pau.edu/content/registrar/ar/ar_2014.pdf";

const PAU_COMPENDIUM =
  "https://www.pau.edu/content/downloads/compendium.pdf";

const PAU_CONTINGENCY_PLAN =
  "https://pau.edu/index.php?DO=viewEventDetail&_act=manageEvent&dataE=datae&intID=11192";

const RPCAU_BIOTECH_KISAN =
  "https://rpcau.ac.in/biotech-kisan-hub-project/";

const PPVFR_BROCCOLI_GUIDELINES =
  "https://plantauthority.gov.in/pvjduslink/Broccoli.pdf";


// ============================================================
// COMMON SOWING WINDOW
// ============================================================
//
// Bihar is suitable for broccoli as a Rabi crop.
// Government sources identify September–October as the
// important planting/nursery period for broccoli.
//
// We use September–October as the conservative common
// sowing window rather than extending the window without
// variety-specific evidence.
//

const BIHAR_SOWING_MONTHS = [9, 10];


// ============================================================
// BROCCOLI VARIETIES
// ============================================================

export const BROCCOLI_VARIETIES: CropVariety[] = [

  // ==========================================================
  // 1. PUSA BROCCOLI KTS-1
  // ==========================================================

  {
    varietyId: "broccoli-pusa-kts-1",
    cropId: "broccoli",

    name: "Pusa Broccoli KTS-1",
    nameHindi: "पूसा ब्रोकली KTS-1",

    type: "Variety",

    /*
     * No separate Bihar state notification was found for
     * this variety.
     *
     * It was developed at IARI Regional Station, Katrain
     * and is described for plains and hilly areas of
     * Northern India.
     *
     * Therefore regionCodes is left empty rather than
     * falsely claiming a Bihar-specific release.
     */
    regionCodes: [],

    sowingMonths: BIHAR_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 90,
      max: 100,
    },

    firstHarvestDays: {
      min: 90,
      max: 100,
    },

    yield: {
      min: 16,
      max: 16,
      unit: "t/ha",
    },

    fruit: {
      color: "dark green",
      weightG: 350,
      minWeightG: 300,
      maxWeightG: 400,
    },

    notes:
      "यह स्प्राउटिंग ब्रोकली की किस्म है, जिसे IARI क्षेत्रीय केंद्र, कैटरैन में विदेशी जर्मप्लाज्म के चयन से विकसित किया गया है। यह उत्तर भारत के मैदानी और पहाड़ी क्षेत्रों के लिए उपयुक्त है। इसके स्प्राउट गहरे हरे रंग के और छोटे कलियों वाले होते हैं।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title:
        "Technological Options for Enhanced Productivity and Profit",
      url: IARI_TECHNOLOGICAL_OPTIONS,
      scope: "National",
    },
  },


  // ==========================================================
  // 2. PALAM SAMRIDHI
  // ==========================================================

  {
    varietyId: "broccoli-palam-samridhi",
    cropId: "broccoli",

    name: "Palam Samridhi",
    nameHindi: "पालम समृद्धि",

    type: "Variety",

    /*
     * Not marked as a Bihar-specific released variety.
     * The variety is documented by PAU/ICAR and has been
     * used under northern Indian Rabi conditions.
     */
    regionCodes: [],

    sowingMonths: BIHAR_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 70,
      max: 90,
    },

    firstHarvestDays: {
      min: 70,
      max: 90,
    },

    yield: {
      min: 150,
      max: 200,
      unit: "q/ha",
    },

    fruit: {
      color: "green",
      weightG: 300,
      minWeightG: 300,
      maxWeightG: 400,
      shape: "round and compact",
    },

    notes:
      "यह हरे रंग की स्प्राउटिंग ब्रोकली है, जिसमें सघन हरे हेड बनते हैं। पौधे से मुख्य हेड के अलावा द्वितीयक स्प्राउट भी प्राप्त हो सकते हैं। PAU के अनुसार रोपाई के बाद लगभग 70–75 दिनों में फसल तैयार हो सकती है और औसत उपज 72 क्विंटल/एकड़ बताई गई है। अन्य संस्थागत स्रोतों में 150–200 क्विंटल/हेक्टेयर उपज बताई गई है।",

    source: {
      organization: "Punjab Agricultural University",
      title:
        "Package of Practices for Vegetables / Annual Report",
      url: PAU_BROCCOLI_PRACTICES,
      scope: "Other",
    },
  },


  // ==========================================================
  // 3. PUNJAB BROCCOLI-1
  // ==========================================================

  {
    varietyId: "broccoli-punjab-broccoli-1",
    cropId: "broccoli",

    name: "Punjab Broccoli-1",
    nameHindi: "पंजाब ब्रोकली-1",

    type: "Variety",

    /*
     * Developed and released by PAU for Punjab.
     * It is not being falsely marked as Bihar-specific.
     */
    regionCodes: [],

    sowingMonths: BIHAR_SOWING_MONTHS,

    suitability: "medium",

    firstHarvestDays: {
      min: 65,
      max: 65,
    },

    yield: {
      min: 175,
      max: 175,
      unit: "q/ha",
    },

    fruit: {
      color: "dark green with bluish tinge",
      shape: "compact",
    },

    notes:
      "यह PAU द्वारा विकसित जल्दी तैयार होने वाली ब्रोकली की किस्म है। इसके मुख्य और द्वितीयक स्प्राउट गहरे हरे रंग के होते हैं और उनमें नीला आभास दिखाई देता है। मुख्य स्प्राउट रोपाई के लगभग 65 दिनों बाद कटाई के लिए तैयार हो जाते हैं। यह सलाद और पकाने दोनों के लिए उपयोगी है।",

    source: {
      organization: "Punjab Agricultural University",
      title:
        "A Saga of Progress – Compendium of 50 Years of Achievements",
      url: PAU_COMPENDIUM,
      scope: "Other",
    },
  },


  // ==========================================================
  // 4. PALAM HARITIKA
  // ==========================================================

  {
    varietyId: "broccoli-palam-haritika",
    cropId: "broccoli",

    name: "Palam Haritika",
    nameHindi: "पालम हरितिका",

    type: "Variety",

    /*
     * Primarily documented for hill / northern conditions.
     * Not marked as Bihar-specific.
     */
    regionCodes: [],

    sowingMonths: BIHAR_SOWING_MONTHS,

    suitability: "medium",

    maturityDays: {
      min: 145,
      max: 150,
    },

    firstHarvestDays: {
      min: 145,
      max: 150,
    },

    yield: {
      min: 175,
      max: 225,
      unit: "q/ha",
    },

    fruit: {
      color: "green",
      shape: "sprouting type",
    },

    notes:
      "यह देर से तैयार होने वाली हरे रंग की स्प्राउटिंग ब्रोकली की किस्म है। इसके पत्ते गहरे हरे और सीधे खड़े होते हैं तथा इसके हेड कोमल और कुरकुरे होते हैं। संस्थागत स्रोतों के अनुसार बाजार योग्य परिपक्वता लगभग 145–150 दिनों में होती है और औसत उपज 175–225 क्विंटल/हेक्टेयर बताई गई है।",

    source: {
      organization:
        "ICAR / CSK Himachal Pradesh Krishi Vishvavidyalaya",
      title:
        "ICAR Rabi Agro-Advisory for Farmers",
      url: ICAR_RABI_ADVISORY,
      scope: "National",
    },
  },


  // ==========================================================
  // 5. PALAM VICHITRA
  // ==========================================================

  {
    varietyId: "broccoli-palam-vichitra",
    cropId: "broccoli",

    name: "Palam Vichitra",
    nameHindi: "पालम विचित्र",

    type: "Variety",

    /*
     * Developed at CSK HPAU.
     * No Bihar-specific official recommendation found.
     */
    regionCodes: [],

    sowingMonths: BIHAR_SOWING_MONTHS,

    suitability: "medium",

    maturityDays: {
      min: 115,
      max: 120,
    },

    firstHarvestDays: {
      min: 115,
      max: 120,
    },

    yield: {
      min: 225,
      max: 250,
      unit: "q/ha",
    },

    fruit: {
      color: "purple",
      shape: "medium and compact",
    },

    notes:
      "यह बैंगनी हेड वाली ब्रोकली की किस्म है, जिसमें खुले गहरे हरे पत्ते और सघन बैंगनी हेड होते हैं। रोपाई के बाद बाजार योग्य परिपक्वता लगभग 115–120 दिनों में बताई गई है।",

    source: {
      organization:
        "CSK Himachal Pradesh Krishi Vishvavidyalaya",
      title:
        "Broccoli varietal characteristics",
      url: PPVFR_BROCCOLI_GUIDELINES,
      scope: "National",
    },
  },


  // ==========================================================
  // 6. PALAM KANCHAN
  // ==========================================================

  {
    varietyId: "broccoli-palam-kanchan",
    cropId: "broccoli",

    name: "Palam Kanchan",
    nameHindi: "पालम कंचन",

    type: "Variety",

    /*
     * Primarily documented for northern/hill conditions.
     * Not marked as Bihar-specific.
     */
    regionCodes: [],

    sowingMonths: BIHAR_SOWING_MONTHS,

    suitability: "medium",

    maturityDays: {
      min: 140,
      max: 145,
    },

    firstHarvestDays: {
      min: 140,
      max: 145,
    },

    yield: {
      min: 250,
      max: 275,
      unit: "q/ha",
    },

    fruit: {
      color: "yellowish green",
      shape: "large and compact",
    },

    notes:
      "यह देर से हेड बनाने वाली ब्रोकली की किस्म है, जिसमें बड़े, सघन और आकर्षक पीले-हरे रंग के हेड बनते हैं। बाजार योग्य परिपक्वता रोपाई के लगभग 140–145 दिनों बाद बताई गई है।",

    source: {
      organization:
        "CSK Himachal Pradesh Krishi Vishvavidyalaya",
      title:
        "Broccoli varietal characteristics",
      url: PPVFR_BROCCOLI_GUIDELINES,
      scope: "National",
    },
  },


  // ==========================================================
  // 7. PUSA PURPLE BROCCOLI-1
  // ==========================================================

  {
    varietyId: "broccoli-pusa-purple-broccoli-1",
    cropId: "broccoli",

    name: "Pusa Purple Broccoli-1",
    nameHindi: "पूसा पर्पल ब्रोकली-1",

    type: "Variety",

    /*
     * Important:
     * IARI reports this variety as suitable for Rabi
     * cultivation under Delhi conditions.
     *
     * Therefore we do NOT mark it as Bihar-specific.
     */
    regionCodes: [],

    sowingMonths: BIHAR_SOWING_MONTHS,

    suitability: "low",

    firstHarvestDays: {
      min: 75,
      max: 85,
    },

    maturityDays: {
      min: 75,
      max: 85,
    },

    yield: {
      min: 21.8,
      max: 21.8,
      unit: "t/ha",
    },

    fruit: {
      color: "purple",
      weightG: 570,
    },

    resistance: [],

    notes:
      "यह एंथोसायनिन से भरपूर बैंगनी हेड वाली ब्रोकली की किस्म है, जिसे ICAR-IARI द्वारा विकसित किया गया है। IARI के अनुसार दिल्ली की रबी परिस्थितियों में रोपाई के 75–85 दिनों बाद बाजार योग्य हेड तैयार हो जाता है। औसत हेड का वजन 570 ग्राम और संभावित बाजार योग्य उपज 21.8 टन/हेक्टेयर बताई गई है। बिहार के लिए इसकी विशिष्ट उपयुक्तता यहां स्थापित नहीं की गई है।",

    source: {
      organization: "ICAR-Indian Agricultural Research Institute",
      title:
        "Annual Report 2022 – Pusa Purple Broccoli-1",
      url: IARI_ANNUAL_REPORT_2022,
      scope: "National",
    },
  },


  // ==========================================================
  // 8. F1-MARIYA
  // ==========================================================

  {
    varietyId: "broccoli-f1-mariya",
    cropId: "broccoli",

    name: "F1-Mariya",
    nameHindi: "F1-मरिया",

    type: "F1 Hybrid",

    /*
     * This is included because RPCAU documented its
     * use in a Rabi 2021 farmer demonstration in Bihar.
     */
    regionCodes: [ ],

    sowingMonths: BIHAR_SOWING_MONTHS,

    suitability: "high",

    notes:
      "यह F1 हाइब्रिड है, जिसका RPCAU द्वारा रबी 2021 में बिहार के मुजफ्फरपुर, बेगूसराय और सीतामढ़ी में किसानों के प्रदर्शन कार्यक्रमों में उपयोग दर्ज किया गया है। उपलब्ध स्रोत में परिपक्वता और उपज के विस्तृत आधिकारिक आंकड़े नहीं मिले, इसलिए यहां उनका अनुमान नहीं लगाया गया है।",

    source: {
      organization:
        "Dr. Rajendra Prasad Central Agricultural University",
      title:
        "Biotech KISAN Hub Project",
      url: RPCAU_BIOTECH_KISAN,
      scope: "Bihar",
    },
  },
];


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default BROCCOLI_VARIETIES;
