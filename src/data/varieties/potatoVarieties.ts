// src/data/varieties/potatoVarieties.ts

import type { CropVariety } from "@/types/cropVariety";

// ============================================================
// OFFICIAL SOURCES
// ============================================================

const ICAR_POTATO_LANDMARK_VARIETIES =
  "https://icar.gov.in/en/landmark-varieties";

const ICAR_CPRI_POTATO_FACT_SHEET =
  "https://www.icar.gov.in/sites/default/files/2022-06/IH-November-December-2019.pdf";

const ICAR_POTATO_AFTER_INDEPENDENCE =
  "https://icar.gov.in/sites/default/files/2022-12/Indian-Agriculture-after-Independence.pdf";

const ICAR_KUFRI_NEELKANTH =
  "https://icar.gov.in/en/node/12076";

const ICAR_KUFRI_LALIT =
  "https://epubs.icar.org.in/index.php/PotatoJ/issue/download/4712/1589";

const ICAR_POTATO_PROCESSING =
  "https://www.icar.gov.in/sites/default/files/2022-06/IH-November-December-2019.pdf";

const BIHAR_POTATO_CHIPSONA_1 =
  "https://horticulture.bihar.gov.in/HortMIS/AreaExpansionStateScheme/OnlineAppPotatoKufriChipsona.aspx";

const BIHAR_POTATO_LADY_ROSETTA =
  "https://horticulture.bihar.gov.in/HortMIS/AreaExpansionStateScheme/OnlineAppPotato.aspx";

const BIHAR_POTATO_KUFRI_PUKHRAJ =
  "https://horticulture.bihar.gov.in/MainSite/SanctionOrder.aspx";

const AGMARKNET_POTATO_PROFILE =
  "https://agmarknet.gov.in/Others/profile-potato.pdf";

const NHB_POTATO_VARIETIES =
  "https://nhb.gov.in/bulletin_files/vegetable/potato/pot013.pdf";

const NHRDF_POTATO_VARIETIES =
  "https://nhrdf.org/pVarieties_p.php";

const BAU_POTATO =
  "https://bausabour.ac.in/department_details.aspx?cc=001&deptcode=Agricultural+Engineering";

const ICAR_NEW_POTATO_VARIETIES =
  "https://www.icar.gov.in/en/ministry-agriculture-notifies-four-new-potato-varieties-icar-cpri-nationwide-cultivation-and";


// ============================================================
// COMMON BIHAR SOWING WINDOW
// ============================================================

const BIHAR_POTATO_SOWING_MONTHS = [
  10,
  11,
];


// ============================================================
// POTATO VARIETIES
// ============================================================

export const POTATO_VARIETIES: CropVariety[] = [

  // ==========================================================
  // 1. KUFRI PUKHRAJ
  // ==========================================================

  {
    varietyId: "potato-kufri-pukhraj",
    cropId: "potato",

    name: "Kufri Pukhraj",
    nameHindi: "कुफरी पुखराज",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 70,
      max: 90,
    },

    yield: {
      min: 40,
      max: 40,
      unit: "t/ha",
    },

    fruit: {
      color: "White skin, yellow flesh",
      shape: "Large, oval, slightly tapered",
    },

    resistance: [
      "Resistant to early blight",
      "Moderately resistant to late blight",
    ],

    notes:
      "यह जल्दी पकने वाली और अधिक उपज देने वाली टेबल आलू की किस्म है। बिहार को इसकी अनुकूलता वाले क्षेत्रों में स्पष्ट रूप से शामिल किया गया है। यह भारत में उगाई जाने वाली प्रमुख आलू की किस्मों में से एक है।",

    source: {
      organization: "National Horticulture Board",
      title:
        "Potato Varieties – NHB Vegetable Bulletin",
      url:
        NHB_POTATO_VARIETIES,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 2. KUFRI SINDHURI
  // ==========================================================

  {
    varietyId: "potato-kufri-sindhuri",
    cropId: "potato",

    name: "Kufri Sindhuri",
    nameHindi: "कुफरी सिंधुरी",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 110,
      max: 120,
    },

    yield: {
      min: 40,
      max: 40,
      unit: "t/ha",
    },

    fruit: {
      color: "Red skin, dull white flesh",
      shape: "Medium, round",
    },

    resistance: [
      "Moderately resistant to early blight",
      "Tolerant to Potato Leaf Roll Virus",
      "Tolerant to late blight",
    ],

    notes:
      "यह देर से पकने वाली लाल छिलके वाली आलू की किस्म है। NHB ने बिहार को इसकी अनुकूलता वाले क्षेत्रों में शामिल किया है। यह बिहार में उपयोग की जाने वाली महत्वपूर्ण आलू की किस्मों में भी दर्ज है।",

    source: {
      organization: "National Horticulture Board",
      title:
        "Potato Varieties – NHB Vegetable Bulletin",
      url:
        NHB_POTATO_VARIETIES,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 3. KUFRI JYOTI
  // ==========================================================

  {
    varietyId: "potato-kufri-jyoti",
    cropId: "potato",

    name: "Kufri Jyoti",
    nameHindi: "कुफरी ज्योति",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 90,
      max: 110,
    },

    yield: {
      min: 20,
      max: 21,
      unit: "t/ha",
    },

    fruit: {
      color: "White skin, white flesh",
      shape: "Large, oval",
    },

    resistance: [
      "Moderately resistant to early blight",
      "Moderately resistant to late blight",
    ],

    notes:
      "यह व्यापक रूप से उगाई जाने वाली आलू की किस्म है। Agmarknet के आलू प्रोफाइल में कुफरी ज्योति को बिहार और झारखंड के उत्तर-पूर्वी मैदानी क्षेत्र के लिए सूचीबद्ध किया गया है, जिसमें समस्तीपुर और बिहार के अन्य जिले शामिल हैं।",

    source: {
      organization: "Agmarknet",
      title:
        "Post-Harvest Profile of Potato",
      url:
        AGMARKNET_POTATO_PROFILE,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 4. KUFRI LALIMA
  // ==========================================================

  {
    varietyId: "potato-kufri-lalima",
    cropId: "potato",

    name: "Kufri Lalima",
    nameHindi: "कुफरी लालिमा",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 100,
      max: 110,
    },

    yield: {
      min: 40,
      max: 40,
      unit: "t/ha",
    },

    fruit: {
      color: "Red skin, white flesh",
      shape: "Large to medium, round",
    },

    resistance: [
      "Moderately resistant to early blight",
      "Resistant to Potato Virus Y",
    ],

    notes:
      "यह लाल छिलके वाली टेबल आलू की किस्म है, जो बिहार और उत्तर प्रदेश के लिए अनुकूल है। Agmarknet भी इसे बिहार और झारखंड के उत्तर-पूर्वी मैदानी क्षेत्र के लिए सूचीबद्ध करता है।",

    source: {
      organization: "National Horticulture Board",
      title:
        "Potato Varieties – NHB Vegetable Bulletin",
      url:
        NHB_POTATO_VARIETIES,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 5. KUFRI LALIT
  // ==========================================================

  {
    varietyId: "potato-kufri-lalit",
    cropId: "potato",

    name: "Kufri Lalit",
    nameHindi: "कुफरी ललित",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 80,
      max: 90,
    },

    yield: {
      min: 30,
      max: 35,
      unit: "t/ha",
    },

    fruit: {
      color: "Light red skin, light yellow flesh",
      shape: "Round",
    },

    resistance: [
      "Field resistance to late blight",
    ],

    notes:
      "यह पूर्वी मैदानी क्षेत्रों के लिए विकसित मध्यम अवधि में पकने वाली लाल छिलके वाली आलू की किस्म है। पूर्वी मैदानी क्षेत्रों के परीक्षणों में इसे पटना और ढोली में परखा गया तथा इसने कुफरी लालिमा की तुलना में अधिक उपज दिखाई।",

    source: {
      organization: "ICAR–Central Potato Research Institute",
      title:
        "Kufri Lalit – A light red skinned potato variety for Eastern Plains",
      url:
        ICAR_KUFRI_LALIT,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 6. KUFRI SUTLEJ
  // ==========================================================

  {
    varietyId: "potato-kufri-sutlej",
    cropId: "potato",

    name: "Kufri Sutlej",
    nameHindi: "कुफरी सतलुज",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 90,
      max: 100,
    },

    yield: {
      min: 40,
      max: 40,
      unit: "t/ha",
    },

    fruit: {
      color: "White skin, white flesh",
      shape: "Large, oval",
    },

    resistance: [
      "Moderately resistant to late blight",
    ],

    notes:
      "यह मध्यम अवधि में पकने वाली टेबल आलू की किस्म है। NHB ने बिहार को इसकी अनुकूलता वाले क्षेत्रों में स्पष्ट रूप से शामिल किया है।",

    source: {
      organization: "National Horticulture Board",
      title:
        "Potato Varieties – NHB Vegetable Bulletin",
      url:
        NHB_POTATO_VARIETIES,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 7. KUFRI ASHOKA
  // ==========================================================

  {
    varietyId: "potato-kufri-ashoka",
    cropId: "potato",

    name: "Kufri Ashoka",
    nameHindi: "कुफरी अशोका",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "medium",

    maturityDays: {
      min: 70,
      max: 80,
    },

    yield: {
      min: 40,
      max: 40,
      unit: "t/ha",
    },

    fruit: {
      color: "White skin, white flesh",
      shape: "Large, oval-long",
    },

    resistance: [],

    notes:
      "यह जल्दी पकने वाली टेबल आलू की किस्म है। NHB ने बिहार को इसकी अनुकूलता वाले क्षेत्रों में शामिल किया है। स्रोत में इसे लेट ब्लाइट के प्रति संवेदनशील बताया गया है, इसलिए इसे सबसे उच्च अनुकूलता समूह से नीचे रखा गया है।",

    source: {
      organization: "National Horticulture Board",
      title:
        "Potato Varieties – NHB Vegetable Bulletin",
      url:
        NHB_POTATO_VARIETIES,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 8. KUFRI CHANDRAMUKHI
  // ==========================================================

  {
    varietyId: "potato-kufri-chandramukhi",
    cropId: "potato",

    name: "Kufri Chandramukhi",
    nameHindi: "कुफरी चंद्रमुखी",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "medium",

    maturityDays: {
      min: 80,
      max: 90,
    },

    yield: {
      min: 25,
      max: 25,
      unit: "t/ha",
    },

    fruit: {
      color: "White skin, dull white flesh",
      shape: "Large, oval, slightly flattened",
    },

    resistance: [],

    notes:
      "यह जल्दी पकने वाली आलू की किस्म है, जो बिहार के कुछ हिस्सों और भारत के कई अन्य आलू उत्पादक क्षेत्रों के लिए अनुकूल है। इसे उत्तर-पूर्वी मैदानी क्षेत्र के लिए भी सूचीबद्ध किया गया है।",

    source: {
      organization: "National Horticulture Board",
      title:
        "Potato Varieties – NHB Vegetable Bulletin",
      url:
        NHB_POTATO_VARIETIES,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 9. KUFRI CHIPSONA-1
  // ==========================================================

  {
    varietyId: "potato-kufri-chipsona-1",
    cropId: "potato",

    name: "Kufri Chipsona-1",
    nameHindi: "कुफरी चिप्सोना-1",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 90,
      max: 110,
    },

    yield: {
      min: 40,
      max: 40,
      unit: "t/ha",
    },

    fruit: {
      color: "White skin, dull white flesh",
      shape: "Medium to large, oval",
    },

    resistance: [
      "Resistant to late blight",
      "Tolerant to frost",
    ],

    notes:
      "यह चिप्स और फ्रेंच फ्राइज के लिए उपयुक्त प्रसंस्करण आलू की किस्म है। NHB ने बिहार और उत्तर प्रदेश को इसकी अनुकूलता वाले क्षेत्रों में शामिल किया है। बिहार सरकार ने समस्तीपुर और वैशाली सहित सात जिलों में कुफरी चिप्सोना-1 के क्षेत्र विस्तार की योजना लागू की है।",

    source: {
      organization:
        "Department of Horticulture, Government of Bihar",
      title:
        "Kufri Chipsona-1 Area Expansion Scheme",
      url:
        BIHAR_POTATO_CHIPSONA_1,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 10. KUFRI CHIPSONA-2
  // ==========================================================

  {
    varietyId: "potato-kufri-chipsona-2",
    cropId: "potato",

    name: "Kufri Chipsona-2",
    nameHindi: "कुफरी चिप्सोना-2",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 90,
      max: 110,
    },

    yield: {
      min: 35,
      max: 35,
      unit: "t/ha",
    },

    fruit: {
      color: "White skin, yellow flesh",
      shape: "Medium, round-oval",
    },

    resistance: [
      "Resistant to late blight",
      "Tolerant to frost",
    ],

    notes:
      "यह चिप्स और फ्रेंच फ्राइज के लिए उपयुक्त प्रसंस्करण किस्म है। NHB ने बिहार और उत्तर प्रदेश को इसकी अनुकूलता वाले क्षेत्रों में स्पष्ट रूप से शामिल किया है।",

    source: {
      organization: "National Horticulture Board",
      title:
        "Potato Varieties – NHB Vegetable Bulletin",
      url:
        NHB_POTATO_VARIETIES,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 11. KUFRI NEELKANTH
  // ==========================================================

  {
    varietyId: "potato-kufri-neelkanth",
    cropId: "potato",

    name: "Kufri Neelkanth",
    nameHindi: "कुफरी नीलकंठ",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 90,
      max: 90,
    },

    yield: {
      min: 35,
      max: 38,
      unit: "t/ha",
    },

    fruit: {
      color: "Dark purple-black skin, cream flesh",
      shape: "Ovoid, medium-deep eyes",
    },

    resistance: [],

    notes:
      "यह उत्तर भारतीय मैदानी क्षेत्रों के लिए ICAR-CPRI द्वारा विकसित विशेष टेबल आलू की किस्म है। ICAR ने बिहार को इसके लिए उपयुक्त राज्यों में स्पष्ट रूप से शामिल किया है। इसमें अच्छी भंडारण क्षमता और मध्यम ड्राई मैटर पाया जाता है।",

    source: {
      organization:
        "ICAR–Central Potato Research Institute",
      title:
        "Kufri Neelkanth – Antioxidant Rich Potato Variety",
      url:
        ICAR_KUFRI_NEELKANTH,
      scope: "Bihar",
    },
  },


  // ==========================================================
  // 12. KUFRI MOHAN
  // ==========================================================

  {
    varietyId: "potato-kufri-mohan",
    cropId: "potato",

    name: "Kufri Mohan",
    nameHindi: "कुफरी मोहन",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "high",

    maturityDays: {
      min: 90,
      max: 100,
    },

    yield: {
      min: 35,
      max: 40,
      unit: "t/ha",
    },

    fruit: {
      color: "White-cream skin, white flesh",
      shape: "Ovoid, shallow eyes",
    },

    resistance: [],

    notes:
      "यह उत्तरी और पूर्वी मैदानी क्षेत्रों के लिए अधिक उपज देने वाली टेबल आलू की किस्म है। ICAR के अनुसार यह भारतीय मैदानी क्षेत्रों में मुख्य मौसम की शीतकालीन बुवाई के लिए वर्णित किस्मों में शामिल है। बिहार में बिहार कृषि विश्वविद्यालय द्वारा कुफरी मोहन के बीज उत्पादन का भी दस्तावेजीकरण किया गया है।",

    source: {
      organization:
        "ICAR – Indian Council of Agricultural Research",
      title:
        "Indian Farming – Potato Varieties for Main Season Planting",
      url:
        "https://epubs.icar.org.in/index.php/IndFarm/article/download/151952/54623/414074",
      scope: "National",
    },
  },


  // ==========================================================
  // 13. KUFRI RALIMA / LALIMA CONTEXT
  // ==========================================================

  // No separate duplicate entry is created here.
  // Kufri Lalima is already represented above.


  // ==========================================================
  // 13. KUFRI RITAN
  // ==========================================================

  {
    varietyId: "potato-kufri-ratan",
    cropId: "potato",

    name: "Kufri Ratan",
    nameHindi: "कुफरी रतन",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "medium",

    maturityDays: {
      min: 90,
      max: 90,
    },

    yield: {
      min: 37,
      max: 39,
      unit: "t/ha",
    },

    fruit: {
      color: "Red skin",
      shape: "Table potato",
    },

    resistance: [],

    notes:
      "यह ICAR-CPRI की नई आलू की किस्म है, जिसे देशभर में गुणवत्तापूर्ण बीज उपयोग के लिए आधिकारिक रूप से अधिसूचित किया गया है। यह मध्यम अवधि में पकने वाली लाल छिलके वाली टेबल आलू की किस्म है और उत्तर भारतीय मैदानी तथा पठारी क्षेत्रों में व्यापक अनुकूलता रखती है।",

    source: {
      organization:
        "ICAR–Central Potato Research Institute",
      title:
        "Ministry of Agriculture Notifies Four New Potato Varieties",
      url:
        ICAR_NEW_POTATO_VARIETIES,
      scope: "National",
    },
  },


  // ==========================================================
  // 14. KUFRI CHIPBHARAT-1
  // ==========================================================

  {
    varietyId: "potato-kufri-chipbharat-1",
    cropId: "potato",

    name: "Kufri Chipbharat-1",
    nameHindi: "कुफरी चिपभारत-1",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "medium",

    maturityDays: {
      min: 100,
      max: 100,
    },

    yield: {
      min: 35,
      max: 38,
      unit: "t/ha",
    },

    fruit: {
      color: "Potato tuber",
      shape: "Processing type",
    },

    resistance: [],

    notes:
      "यह भारतीय मैदानी क्षेत्रों के लिए अनुशंसित नई ICAR-CPRI चिप-प्रसंस्करण किस्म है, जिसे देशभर में उपयोग के लिए आधिकारिक रूप से अधिसूचित किया गया है। यह मध्यम अवधि में पकती है और इसमें 21% अधिक ड्राई मैटर तथा कम रिड्यूसिंग शुगर पाई जाती है।",

    source: {
      organization:
        "ICAR–Central Potato Research Institute",
      title:
        "Ministry of Agriculture Notifies Four New Potato Varieties",
      url:
        ICAR_NEW_POTATO_VARIETIES,
      scope: "National",
    },
  },


  // ==========================================================
  // 15. KUFRI CHIPBHARAT-2
  // ==========================================================

  {
    varietyId: "potato-kufri-chipbharat-2",
    cropId: "potato",

    name: "Kufri Chipbharat-2",
    nameHindi: "कुफरी चिपभारत-2",

    type: "Variety",

    regionCodes: [ ],

    sowingMonths:
      BIHAR_POTATO_SOWING_MONTHS,

    suitability: "medium",

    maturityDays: {
      min: 90,
      max: 90,
    },

    yield: {
      min: 35,
      max: 37,
      unit: "t/ha",
    },

    fruit: {
      color: "Potato tuber",
      shape: "Processing type",
    },

    resistance: [],

    notes:
      "यह ICAR-CPRI की नई जल्दी पकने वाली चिप-प्रसंस्करण किस्म है, जिसे देशभर में उपयोग के लिए आधिकारिक रूप से अधिसूचित किया गया है। इसमें अधिक ड्राई मैटर और अच्छी भंडारण क्षमता है।",

    source: {
      organization:
        "ICAR–Central Potato Research Institute",
      title:
        "Ministry of Agriculture Notifies Four New Potato Varieties",
      url:
        ICAR_NEW_POTATO_VARIETIES,
      scope: "National",
    },
  },

];


// ============================================================
// EXPORT
// ============================================================

export default POTATO_VARIETIES;
