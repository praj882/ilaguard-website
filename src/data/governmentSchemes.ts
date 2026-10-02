// src/data/governmentSchemes.ts

export type GovernmentSchemeCategory =
  | "आर्थिक सहायता"
  | "फसल बीमा"
  | "कृषि ऋण"
  | "कृषि यांत्रिकीकरण"
  | "बीज"
  | "खाद एवं मिट्टी"
  | "सिंचाई"
  | "बागवानी"
  | "पौधा संरक्षण"
  | "कृषि विकास"
  | "अन्य";

export type GovernmentLevel =
  | "केंद्र सरकार"
  | "बिहार सरकार";

export type GovernmentScheme = {
  id: string;

  nameHindi: string;
  nameEnglish: string;

  shortDescriptionHindi: string;

  category: GovernmentSchemeCategory;

  government: GovernmentLevel;

  /*
   * Uses your existing STATES ids.
   *
   * Bihar = "01"
   * A central scheme applicable to Bihar also uses "01"
   * because this dataset is currently scoped to Bihar.
   */
  stateCodes?: string[];

  benefitsHindi: string[];

  eligibilityHindi: string[];

  documentsHindi: string[];

  applicationProcessHindi: string[];

  officialUrl: string;

  officialSource: string;

  keywords: string[];

  lastVerified?: string;
};

/*
|--------------------------------------------------------------------------
| Bihar Government / Farmer Scheme Dataset
|--------------------------------------------------------------------------
|
| IMPORTANT
|
| Keep only verified scheme information here.
|
| Do not invent:
| - benefit amounts
| - eligibility
| - application dates
| - documents
| - subsidy percentages
|
| Update this file whenever the official source changes.
|
|--------------------------------------------------------------------------
*/

export const GOVERNMENT_SCHEMES: GovernmentScheme[] = [
  // -----------------------------------------------------------------------
  // CENTRAL GOVERNMENT
  // -----------------------------------------------------------------------

  {
    id: "pm-kisan",

    nameHindi: "प्रधानमंत्री किसान सम्मान निधि",
    nameEnglish: "PM-KISAN Samman Nidhi",

    shortDescriptionHindi:
      "पात्र किसान परिवारों के लिए केंद्र सरकार की आय सहायता योजना।",

    category: "आर्थिक सहायता",

    government: "केंद्र सरकार",

    stateCodes: ["01"],

    benefitsHindi: [
      "पात्र किसान परिवारों को आय सहायता प्रदान की जाती है।",
      "किस्त और लाभार्थी स्थिति आधिकारिक पोर्टल पर देखी जा सकती है।",
    ],

    eligibilityHindi: [
      "योजना की पात्रता वर्तमान PM-KISAN दिशानिर्देशों के अनुसार निर्धारित होती है।",
      "कुछ श्रेणियाँ योजना से बाहर हैं।",
      "आवेदन से पहले आधिकारिक पोर्टल पर अपनी पात्रता जाँचें।",
    ],

    documentsHindi: [
      "आवश्यक दस्तावेज़ और किसान विवरण आधिकारिक पोर्टल पर जाँचें।",
    ],

    applicationProcessHindi: [
      "PM-KISAN के आधिकारिक पोर्टल पर जाएँ।",
      "नया किसान पंजीकरण या किसान स्थिति की जानकारी देखें।",
      "आवश्यक जानकारी उपलब्ध कराएँ।",
    ],

    officialUrl: "https://www.myscheme.gov.in/hi/schemes/pm-kisan",

    officialSource: "कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार",

    keywords: [
      "pm kisan",
      "pm-kisan",
      "किसान सम्मान निधि",
      "किसान",
      "आर्थिक सहायता",
    ],

    lastVerified: "2026-09-30",
  },

  {
    id: "pm-fasal-bima-yojana",

    nameHindi: "प्रधानमंत्री फसल बीमा योजना",
    nameEnglish: "Pradhan Mantri Fasal Bima Yojana",

    shortDescriptionHindi:
      "प्राकृतिक जोखिमों से फसल नुकसान के लिए पात्र किसानों को फसल बीमा सहायता उपलब्ध कराने वाली योजना।",

    category: "फसल बीमा",

    government: "केंद्र सरकार",

    stateCodes: ["01"],

    benefitsHindi: [
      "अधिसूचित फसलों और क्षेत्रों के लिए फसल बीमा उपलब्ध हो सकता है।",
      "फसल नुकसान की स्थिति में योजना के नियमों के अनुसार बीमा सहायता मिल सकती है।",
    ],

    eligibilityHindi: [
      "पात्रता अधिसूचित फसल, क्षेत्र, मौसम और योजना के वर्तमान नियमों पर निर्भर करती है।",
      "अपने क्षेत्र की वर्तमान अधिसूचना आधिकारिक पोर्टल पर जाँचें।",
    ],

    documentsHindi: [
      "किसान, फसल, भूमि और बैंक से संबंधित जानकारी आवश्यकता के अनुसार माँगी जा सकती है।",
      "वर्तमान दस्तावेज़ों की सूची आधिकारिक पोर्टल पर जाँचें।",
    ],

    applicationProcessHindi: [
      "PMFBY के आधिकारिक पोर्टल पर जाएँ।",
      "अपने राज्य, जिले और फसल से संबंधित वर्तमान जानकारी जाँचें।",
      "उपलब्ध आवेदन सुविधा के माध्यम से आवेदन करें।",
    ],

    officialUrl: "https://www.myscheme.gov.in/schemes/pmfby",

    officialSource: "कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार",

    keywords: [
      "pmfby",
      "pm fasal bima",
      "फसल बीमा",
      "फसल नुकसान",
      "बीमा",
    ],

    lastVerified: "2026-09-30",
  },

  {
    id: "soil-health-card",

    nameHindi: "मृदा स्वास्थ्य कार्ड योजना",
    nameEnglish: "Soil Health Card Scheme",

    shortDescriptionHindi:
      "मिट्टी की जाँच और पोषक तत्वों की स्थिति के आधार पर खेती के लिए जानकारी उपलब्ध कराने वाली योजना।",

    category: "खाद एवं मिट्टी",

    government: "केंद्र सरकार",

    stateCodes: ["01"],

    benefitsHindi: [
      "मिट्टी के पोषक तत्वों की स्थिति की जानकारी प्राप्त करने में सहायता।",
      "मिट्टी परीक्षण के आधार पर खेती और उर्वरक प्रबंधन की जानकारी मिलती है।",
    ],

    eligibilityHindi: [
      "अपने क्षेत्र में उपलब्ध मृदा परीक्षण सुविधा की जानकारी आधिकारिक पोर्टल से जाँचें।",
    ],

    documentsHindi: [
      "स्थानीय मृदा परीक्षण केंद्र द्वारा माँगी गई जानकारी उपलब्ध कराएँ।",
    ],

    applicationProcessHindi: [
      "मृदा स्वास्थ्य कार्ड के आधिकारिक पोर्टल पर जाएँ।",
      "अपने क्षेत्र में उपलब्ध मिट्टी परीक्षण सुविधा की जानकारी देखें।",
    ],

    officialUrl: "https://soilhealth.dac.gov.in/",

    officialSource: "कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार",

    keywords: [
      "soil health",
      "soil health card",
      "मृदा स्वास्थ्य",
      "मिट्टी जांच",
      "मिट्टी",
      "खाद",
    ],

    lastVerified: "2026-09-30",
  },

  // -----------------------------------------------------------------------
  // BIHAR GOVERNMENT
  // -----------------------------------------------------------------------

  {
    id: "bihar-agriculture-mechanization",

    nameHindi: "कृषि यांत्रिकीकरण",
    nameEnglish: "Agricultural Mechanization",

    shortDescriptionHindi:
      "कृषि कार्यों में आधुनिक कृषि यंत्रों और तकनीक के उपयोग को बढ़ावा देने से संबंधित बिहार कृषि विभाग की योजना।",

    category: "कृषि यांत्रिकीकरण",

    government: "बिहार सरकार",

    stateCodes: ["01"],

    benefitsHindi: [
      "कृषि यंत्रों और कृषि कार्यों के यांत्रिकीकरण से संबंधित सहायता की जानकारी।",
    ],

    eligibilityHindi: [
      "वर्तमान पात्रता और उपलब्ध कृषि यंत्रों की जानकारी बिहार कृषि विभाग के आधिकारिक पोर्टल पर जाँचें।",
    ],

    documentsHindi: [
      "वर्तमान आवेदन के लिए आवश्यक दस्तावेज़ बिहार कृषि विभाग के पोर्टल पर देखें।",
    ],

    applicationProcessHindi: [
      "बिहार कृषि विभाग के DBT पोर्टल पर जाएँ।",
      "उपलब्ध कृषि यांत्रिकीकरण योजना और वर्तमान आवेदन सूचना देखें।",
    ],

    officialUrl: "https://farmech.bihar.gov.in/",

    officialSource: "कृषि विभाग, बिहार सरकार",

    keywords: [
      "कृषि यंत्र",
      "कृषि यांत्रिकीकरण",
      "farm machinery",
      "tractor",
      "machine",
    ],

    lastVerified: "2026-09-30",
  },

  {
    id: "rashtriya-bagwani-mission",

    nameHindi: "राष्ट्रीय बागवानी मिशन",
    nameEnglish: "National Horticulture Mission",

    shortDescriptionHindi:
      "बागवानी फसलों और संबंधित बागवानी गतिविधियों के विकास से संबंधित योजना।",

    category: "बागवानी",

    government: "केंद्र सरकार",

    stateCodes: ["01"],

    benefitsHindi: [
      "बागवानी विकास से संबंधित गतिविधियों के लिए सरकारी सहायता की जानकारी।",
    ],

    eligibilityHindi: [
      "वर्तमान पात्रता और लागू गतिविधियाँ आधिकारिक विभागीय जानकारी से जाँचें।",
    ],

    documentsHindi: [
      "आवश्यक दस्तावेज़ संबंधित विभागीय आवेदन प्रक्रिया के अनुसार देखें।",
    ],

    applicationProcessHindi: [
      "कृषि विभाग की आधिकारिक वेबसाइट पर उपलब्ध योजना जानकारी देखें।",
      "वर्तमान आवेदन प्रक्रिया और पात्रता की जाँच करें।",
    ],
    officialUrl: "https://nhb.gov.in/",

    officialSource: "कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार",

    keywords: [
      "बागवानी",
      "राष्ट्रीय बागवानी मिशन",
      "horticulture",
      "फल",
      "सब्जी",
    ],

    lastVerified: "2026-09-30",
  },

  {
    id: "national-micro-irrigation",

    nameHindi: "राष्ट्रीय सूक्ष्म सिंचाई मिशन योजना",
    nameEnglish: "National Micro Irrigation Mission",

    shortDescriptionHindi:
      "सूक्ष्म सिंचाई से संबंधित कृषि गतिविधियों और जल उपयोग दक्षता को बढ़ावा देने वाली योजना।",

    category: "सिंचाई",

    government: "केंद्र सरकार",

    stateCodes: ["01"],

    benefitsHindi: [
      "सूक्ष्म सिंचाई से संबंधित सरकारी सहायता और कार्यक्रमों की जानकारी।",
    ],

    eligibilityHindi: [
      "वर्तमान पात्रता और लागू घटक आधिकारिक कृषि विभाग से जाँचें।",
    ],

    documentsHindi: [
      "आवेदन के लिए आवश्यक दस्तावेज़ संबंधित विभागीय पोर्टल पर देखें।",
    ],

    applicationProcessHindi: [
      "कृषि विभाग के आधिकारिक पोर्टल पर उपलब्ध सिंचाई योजना की जानकारी देखें।",
      "वर्तमान आवेदन प्रक्रिया की जाँच करें।",
    ],

    officialUrl: "https://pdmc.da.gov.in/",

    officialSource: "कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार",

    keywords: [
      "सूक्ष्म सिंचाई",
      "micro irrigation",
      "सिंचाई",
      "drip",
      "sprinkler",
      "पानी",
    ],

    lastVerified: "2026-09-30",
  },

  {
    id: "national-food-security-mission",

    nameHindi: "राष्ट्रीय खाद्य सुरक्षा मिशन",
    nameEnglish: "National Food Security Mission",

    shortDescriptionHindi:
      "प्रमुख खाद्यान्न और संबंधित कृषि उत्पादन को बढ़ावा देने से संबंधित कार्यक्रम।",

    category: "कृषि विकास",

    government: "केंद्र सरकार",

    stateCodes: ["01"],

    benefitsHindi: [
      "फसल उत्पादन और उत्पादकता बढ़ाने से संबंधित कार्यक्रमों की जानकारी।",
    ],

    eligibilityHindi: [
      "लागू फसल, क्षेत्र और वर्तमान कार्यक्रम के अनुसार पात्रता की जाँच करें।",
    ],

    documentsHindi: [
      "वर्तमान कार्यक्रम के अनुसार आवश्यक दस्तावेज़ संबंधित विभाग से जाँचें।",
    ],

    applicationProcessHindi: [
      "बिहार कृषि विभाग के आधिकारिक पोर्टल पर योजना की वर्तमान जानकारी देखें।",
    ],

    officialUrl: "https://www.nfsm.gov.in/",

    officialSource: "कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार",

    keywords: [
      "राष्ट्रीय खाद्य सुरक्षा मिशन",
      "nfsm",
      "धान",
      "गेहूं",
      "दलहन",
      "फसल",
    ],

    lastVerified: "2026-09-30",
  },

  {
    id: "organic-manure-incentive",

    nameHindi: "जैविक खाद के लिए प्रोत्साहन योजना",
    nameEnglish: "Incentive Scheme for Organic Manure",

    shortDescriptionHindi:
      "जैविक खाद से संबंधित कृषि गतिविधियों को प्रोत्साहित करने वाली योजना।",

    category: "खाद एवं मिट्टी",

    government: "बिहार सरकार",

    stateCodes: ["01"],

    benefitsHindi: [
      "जैविक खाद से संबंधित प्रोत्साहन कार्यक्रम की जानकारी।",
    ],

    eligibilityHindi: [
      "वर्तमान पात्रता और लागू गतिविधियों की जानकारी आधिकारिक कृषि विभाग से जाँचें।",
    ],

    documentsHindi: [
      "वर्तमान आवेदन प्रक्रिया के अनुसार दस्तावेज़ जाँचें।",
    ],

    applicationProcessHindi: [
      "बिहार कृषि विभाग की वेबसाइट पर योजना की वर्तमान जानकारी देखें।",
    ],

    officialUrl: "https://dbtagriculture.bihar.gov.in/",

    officialSource: "कृषि विभाग, बिहार सरकार",

    keywords: [
      "जैविक खाद",
      "organic manure",
      "खाद",
      "मिट्टी",
    ],

    lastVerified: "2026-09-30",
  },

  {
    id: "seed-village",

    nameHindi: "बीज ग्राम योजना",
    nameEnglish: "Seed Village Scheme",

    shortDescriptionHindi:
      "गुणवत्तापूर्ण बीज उत्पादन और उपलब्धता से संबंधित बीज ग्राम कार्यक्रम।",

    category: "बीज",

    government: "बिहार सरकार",

    stateCodes: ["01"],

    benefitsHindi: [
      "गुणवत्तापूर्ण बीज के उत्पादन और वितरण से संबंधित कार्यक्रम।",
    ],

    eligibilityHindi: [
      "वर्तमान पात्रता और लागू कार्यक्रम आधिकारिक कृषि विभाग से जाँचें।",
    ],

    documentsHindi: [
      "वर्तमान योजना के अनुसार आवश्यक दस्तावेज़ संबंधित विभाग से जाँचें।",
    ],

    applicationProcessHindi: [
      "बिहार कृषि विभाग के आधिकारिक पोर्टल पर बीज ग्राम योजना की वर्तमान जानकारी देखें।",
    ],

    officialUrl: "https://dbtagriculture.bihar.gov.in/",

    officialSource: "कृषि विभाग, बिहार सरकार",

    keywords: [
      "बीज ग्राम",
      "seed village",
      "बीज",
      "किसान",
    ],

    lastVerified: "2026-09-30",
  },

  {
    id: "bihar-state-seed-corporation-production",

    nameHindi: "बिहार राज्य बीज निगम द्वारा बीज उत्पादन कार्यक्रम",
    nameEnglish: "Seed Production Programme by Bihar State Seed Corporation",

    shortDescriptionHindi:
      "बिहार राज्य बीज निगम के माध्यम से बीज उत्पादन से संबंधित कार्यक्रम।",

    category: "बीज",

    government: "बिहार सरकार",

    stateCodes: ["01"],

    benefitsHindi: [
      "बीज उत्पादन और उपलब्धता से संबंधित कार्यक्रम की जानकारी।",
    ],

    eligibilityHindi: [
      "वर्तमान कार्यक्रम और किसान पात्रता संबंधित आधिकारिक स्रोत से जाँचें।",
    ],

    documentsHindi: [
      "वर्तमान कार्यक्रम के अनुसार आवश्यक दस्तावेज़ जाँचें।",
    ],

    applicationProcessHindi: [
      "बिहार कृषि विभाग की आधिकारिक वेबसाइट पर वर्तमान बीज उत्पादन कार्यक्रम देखें।",
    ],

    officialUrl: "https://dbtagriculture.bihar.gov.in/",

    officialSource: "कृषि विभाग, बिहार सरकार",

    keywords: [
      "बिहार राज्य बीज निगम",
      "बीज उत्पादन",
      "seed corporation",
      "बीज",
    ],

    lastVerified: "2026-09-30",
  },
  
  {
	id: "niji-talabon-jirnoddhar-yojana",
	nameHindi: "निजी तालाबों का जीर्णोद्धार योजना",
	nameEnglish: "Niji Talabon Ka Jirnoddhar Ki Yojana",
	shortDescriptionHindi:
		"निजी तालाबों के जीर्णोद्धार से संबंधित बिहार सरकार की योजना।",
	category: "सिंचाई",
	government: "बिहार सरकार",
	stateCodes: ["01"],
	benefitsHindi: [
		"निजी तालाबों के जीर्णोद्धार से संबंधित सहायता की जानकारी आधिकारिक योजना दिशानिर्देशों में देखें।",
	],
	eligibilityHindi: [
		"पात्रता और तालाब से संबंधित शर्तों की पुष्टि आधिकारिक दिशानिर्देशों से करें।",
	],
	documentsHindi: [
		"आवश्यक दस्तावेजों की सूची आधिकारिक पोर्टल पर जाँचें।",
	],
	applicationProcessHindi: [
		"आधिकारिक बिहार कृषि विभाग पोर्टल पर योजना की वर्तमान जानकारी देखें।",
	],
	officialUrl: "https://www.myscheme.gov.in/schemes/ntkjky",
	officialSource: "बिहार कृषि विभाग",
	keywords: ["निजी तालाब", "तालाब जीर्णोद्धार", "जल संरक्षण"],
  },
	{
	  id: "makhana-vikas-yojana",
	  nameHindi: "मखाना विकास योजना",
	  nameEnglish: "Makhana Vikas Yojana",
	  shortDescriptionHindi:
		"बिहार में मखाना उत्पादन और विकास से संबंधित योजना।",
	  category: "कृषि विकास",
	  government: "बिहार सरकार",
	  stateCodes: ["01"],
	  benefitsHindi: [
		"मखाना विकास के लिए उपलब्ध सहायता और लाभ की जानकारी आधिकारिक दिशानिर्देशों से प्राप्त करें।",
	  ],
	  eligibilityHindi: [
		"मखाना उत्पादकों और अन्य पात्र लाभार्थियों के लिए लागू शर्तें आधिकारिक स्रोत से जाँचें।",
	  ],
	  documentsHindi: [
		"आवश्यक दस्तावेजों की सूची आधिकारिक पोर्टल पर जाँचें।",
	  ],
	  applicationProcessHindi: [
		"बिहार कृषि विभाग के आधिकारिक पोर्टल पर आवेदन प्रक्रिया देखें।",
	  ],
	  officialUrl: "https://www.myscheme.gov.in/schemes/mvyb",
	  officialSource: "बिहार कृषि विभाग",
	  keywords: ["मखाना", "मखाना उत्पादन", "मखाना किसान"],
	},
	{
	  id: "krishi-input-anudan-yojana",
	  nameHindi: "कृषि इनपुट अनुदान योजना",
	  nameEnglish: "Krishi Input Anudan Yojana",
	  shortDescriptionHindi:
		"पात्र किसानों के लिए कृषि इनपुट अनुदान से संबंधित बिहार सरकार की योजना।",
	  category: "आर्थिक सहायता",
	  government: "बिहार सरकार",
	  stateCodes: ["01"],
	  benefitsHindi: [
		"अनुदान की उपलब्धता, राशि और लागू परिस्थितियों की पुष्टि वर्तमान आधिकारिक दिशानिर्देशों से करें।",
	  ],
	  eligibilityHindi: [
		"पात्रता संबंधित अधिसूचना और योजना के वर्तमान नियमों के अनुसार निर्धारित होती है।",
	  ],
	  documentsHindi: [
		"आधार, किसान पंजीकरण और अन्य आवश्यक दस्तावेजों की शर्तें आधिकारिक पोर्टल पर जाँचें।",
	  ],
	  applicationProcessHindi: [
		"बिहार कृषि विभाग के पोर्टल पर योजना की उपलब्धता और आवेदन की अंतिम तिथि जाँचें।",
	  ],
	  officialUrl: "https://www.myscheme.gov.in/schemes/kiay",
	  officialSource: "बिहार कृषि विभाग",
	  keywords: ["कृषि इनपुट", "इनपुट अनुदान", "किसान सहायता"],
	},
	{
	  id: "mukhyamantri-bagwani-dragon-fruit-yojana",
	  nameHindi: "मुख्यमंत्री बागवानी मिशन: ड्रैगन फ्रूट विकास योजना",
	  nameEnglish:
		"Mukhyamantri Bagwani Mission: Dragon Fruit Vikas Yojana",
	  shortDescriptionHindi:
		"ड्रैगन फ्रूट की खेती और बागवानी विकास से संबंधित बिहार सरकार की योजना।",
	  category: "बागवानी",
	  government: "बिहार सरकार",
	  stateCodes: ["01"],
	  benefitsHindi: [
		"ड्रैगन फ्रूट की खेती के लिए उपलब्ध सहायता और अनुदान की शर्तें आधिकारिक दिशानिर्देशों में देखें।",
	  ],
	  eligibilityHindi: [
		"पात्र किसान, क्षेत्र और खेती से संबंधित शर्तों की पुष्टि आधिकारिक योजना दिशानिर्देशों से करें।",
	  ],
	  documentsHindi: [
		"आवश्यक दस्तावेजों और किसान पंजीकरण की शर्तें आधिकारिक पोर्टल पर जाँचें।",
	  ],
	  applicationProcessHindi: [
		"बिहार कृषि विभाग के आधिकारिक पोर्टल पर वर्तमान आवेदन प्रक्रिया देखें।",
	  ],
	  officialUrl: "https://www.myscheme.gov.in/schemes/mbydfvy",
	  officialSource: "बिहार कृषि विभाग",
	  keywords: [
		"ड्रैगन फ्रूट",
		"बागवानी",
		"मुख्यमंत्री बागवानी मिशन",
	  ],
	},
	{
	  id: "chai-vikas-yojana",
	  nameHindi: "चाय विकास योजना",
	  nameEnglish: "Chai Vikas Yojana",
	  shortDescriptionHindi:
		"चाय की खेती और चाय उत्पादन के विकास से संबंधित बिहार सरकार की योजना।",
	  category: "बागवानी",
	  government: "बिहार सरकार",
	  stateCodes: ["01"],
	  benefitsHindi: [
		"चाय की खेती के लिए उपलब्ध सहायता और अनुदान का विवरण आधिकारिक दिशानिर्देशों में देखें।",
	  ],
	  eligibilityHindi: [
		"चाय उत्पादकों, खेती के क्षेत्र और अन्य पात्रता शर्तों की पुष्टि आधिकारिक स्रोत से करें।",
	  ],
	  documentsHindi: [
		"आवश्यक दस्तावेजों की सूची आधिकारिक पोर्टल पर जाँचें।",
	  ],
	  applicationProcessHindi: [
		"बिहार कृषि विभाग के आधिकारिक पोर्टल पर आवेदन की वर्तमान प्रक्रिया देखें।",
	  ],
	  officialUrl: "https://www.myscheme.gov.in/schemes/cvyb",
	  officialSource: "बिहार कृषि विभाग",
	  keywords: ["चाय", "चाय की खेती", "चाय उत्पादक"],
	},
	{
	  id: "mukhyamantri-nijee-nalkup-yojana",
	  nameHindi: "मुख्यमंत्री निजी नलकूप योजना",
	  nameEnglish: "Mukhyamantri Nijee Nalkup Yojana",
	  shortDescriptionHindi:
		"कृषि सिंचाई के लिए निजी नलकूपों से संबंधित बिहार सरकार की योजना।",
	  category: "सिंचाई",
	  government: "बिहार सरकार",
	  stateCodes: ["01"],
	  benefitsHindi: [
		"नलकूप स्थापना या संबंधित सहायता की उपलब्धता और शर्तें आधिकारिक दिशानिर्देशों से जाँचें।",
	  ],
	  eligibilityHindi: [
		"किसान, भूमि, नलकूप और अन्य पात्रता संबंधी शर्तें वर्तमान योजना नियमों के अनुसार लागू होंगी।",
	  ],
	  documentsHindi: [
		"आवश्यक दस्तावेजों और भूमि संबंधी शर्तों की सूची आधिकारिक पोर्टल पर जाँचें।",
	  ],
	  applicationProcessHindi: [
		"संबंधित बिहार सरकारी पोर्टल पर योजना की वर्तमान स्थिति और आवेदन प्रक्रिया देखें।",
	  ],
	  officialUrl: "https://www.myscheme.gov.in/schemes/mnny",
	  officialSource: "बिहार सरकार",
	  keywords: ["निजी नलकूप", "सिंचाई", "नलकूप योजना"],
	},
  {
	id: "bhraman-darshan-yojana",
	nameHindi: "भ्रमण-दर्शन योजना",
	nameEnglish: "Bhraman - Darshan Yojana",
	shortDescriptionHindi:
		"कृषि से संबंधित भ्रमण और प्रदर्शन गतिविधियों के लिए सूचीबद्ध बिहार सरकार की योजना।",
	category: "कृषि विकास",
	government: "बिहार सरकार",
	stateCodes: ["01"],
	benefitsHindi: [
		"योजना के अंतर्गत उपलब्ध गतिविधियों और सहायता की पुष्टि आधिकारिक दिशानिर्देशों से करें।",
	],
	eligibilityHindi: [
		"लक्षित लाभार्थियों और भागीदारी की शर्तें आधिकारिक योजना विवरण से जाँचें।",
	],
	documentsHindi: [
		"आवश्यक दस्तावेजों की सूची आधिकारिक स्रोत से प्राप्त करें।",
	],
	applicationProcessHindi: [
		"संबंधित विभाग के आधिकारिक पोर्टल पर वर्तमान योजना विवरण देखें।",
	],
	officialUrl: "https://www.myscheme.gov.in/schemes/bdy",
	officialSource: "बिहार सरकार",
	keywords: ["भ्रमण", "दर्शन", "कृषि प्रशिक्षण", "कृषि प्रदर्शन"],
  },
  {
    id: "makhana-beej-vitaran",
    nameHindi: "मखाना बीज वितरण",
    nameEnglish: "Makhana Beej Vitaran",
    shortDescriptionHindi:
      "मखाना बीज वितरण से संबंधित बिहार सरकार की योजना।",
    category: "बीज",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "मखाना बीज वितरण और उपलब्ध सहायता की जानकारी आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "लाभार्थी किसान और पात्रता संबंधी शर्तें आधिकारिक दिशानिर्देशों के अनुसार लागू होंगी।",
    ],
    documentsHindi: [
      "आवश्यक दस्तावेजों की सूची योजना के आधिकारिक विवरण में देखें।",
    ],
    applicationProcessHindi: [
      "योजना की पात्रता और आवेदन प्रक्रिया के लिए आधिकारिक योजना पेज देखें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/mbyb",
    officialSource: "myScheme.gov.in",
    keywords: ["मखाना", "बीज वितरण", "मखाना बीज"],
  },
  {
    id: "phool-vikash-yojana",
    nameHindi: "फूल विकास योजना",
    nameEnglish: "Phool Vikash Yojana",
    shortDescriptionHindi:
      "फूलों की खेती और पुष्प विकास से संबंधित योजना।",
    category: "बागवानी",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "फूलों की खेती के लिए उपलब्ध सहायता और लाभ की जानकारी आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "पात्र किसानों और पुष्प उत्पादकों के लिए लागू शर्तें आधिकारिक दिशानिर्देशों से जाँचें।",
    ],
    documentsHindi: [
      "आवश्यक दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
    ],
    applicationProcessHindi: [
      "आवेदन की वर्तमान प्रक्रिया और उपलब्धता आधिकारिक योजना पेज पर जाँचें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/fvy",
    officialSource: "myScheme.gov.in",
    keywords: ["फूल", "पुष्प विकास", "फूलों की खेती"],
  },
  {
    id: "mukhyamantri-bagwani-papita-vikas",
    nameHindi: "मुख्यमंत्री बागवानी मिशन: पपीता विकास योजना",
    nameEnglish: "Mukhyamantri Bagwani Mission: Papita Vikas Yojana",
    shortDescriptionHindi:
      "पपीते की खेती और बागवानी विकास से संबंधित योजना।",
    category: "बागवानी",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "पपीते की खेती के लिए उपलब्ध सहायता और अनुदान की जानकारी आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "पात्र किसान, खेती के क्षेत्र और अन्य शर्तें आधिकारिक दिशानिर्देशों के अनुसार होंगी।",
    ],
    documentsHindi: [
      "आवश्यक दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
    ],
    applicationProcessHindi: [
      "योजना की आवेदन प्रक्रिया और उपलब्धता आधिकारिक योजना पेज पर जाँचें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/mbypvy",
    officialSource: "myScheme.gov.in",
    keywords: ["पपीता", "पपीता विकास", "बागवानी मिशन"],
  },
  {
    id: "mukhyamantri-bagwani-kela-vikas",
    nameHindi: "मुख्यमंत्री बागवानी मिशन: केला विकास योजना",
    nameEnglish: "Mukhyamantri Bagwani Mission: Kela Vikas Yojana",
    shortDescriptionHindi:
      "केले की खेती और बागवानी विकास से संबंधित योजना।",
    category: "बागवानी",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "केले की खेती के लिए उपलब्ध सहायता और अनुदान की जानकारी आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "किसानों की पात्रता और खेती संबंधी शर्तें आधिकारिक दिशानिर्देशों के अनुसार लागू होंगी।",
    ],
    documentsHindi: [
      "आवश्यक दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
    ],
    applicationProcessHindi: [
      "वर्तमान आवेदन प्रक्रिया और पात्रता आधिकारिक योजना पेज पर जाँचें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/mbykvy",
    officialSource: "myScheme.gov.in",
    keywords: ["केला", "केला विकास", "बागवानी मिशन"],
  },
  {
    id: "mushroom-kit-vitaran",
    nameHindi: "मशरूम किट वितरण",
    nameEnglish: "Mushroom Kit Vitaran",
    shortDescriptionHindi:
      "मशरूम उत्पादन के लिए किट वितरण से संबंधित योजना।",
    category: "कृषि विकास",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "मशरूम किट वितरण और उपलब्ध सहायता की जानकारी आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "पात्र लाभार्थियों और किट वितरण की शर्तें आधिकारिक दिशानिर्देशों के अनुसार होंगी।",
    ],
    documentsHindi: [
      "आवश्यक दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
    ],
    applicationProcessHindi: [
      "किट की उपलब्धता और आवेदन प्रक्रिया आधिकारिक योजना पेज पर जाँचें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/mkvb",
    officialSource: "myScheme.gov.in",
    keywords: ["मशरूम", "मशरूम किट", "मशरूम उत्पादन"],
  },
  {
    id: "mukhyamantri-bagwani-aam-vikas",
    nameHindi: "मुख्यमंत्री बागवानी मिशन: आम विकास योजना",
    nameEnglish: "Mukhyamantri Bagwani Mission: Aam Vikas Yojana",
    shortDescriptionHindi:
      "आम की खेती और बागवानी विकास से संबंधित योजना।",
    category: "बागवानी",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "आम की खेती के लिए उपलब्ध सहायता और अनुदान की जानकारी आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "पात्र किसानों और बागवानी संबंधी शर्तों की पुष्टि आधिकारिक दिशानिर्देशों से करें।",
    ],
    documentsHindi: [
      "आवश्यक दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
    ],
    applicationProcessHindi: [
      "योजना की वर्तमान आवेदन प्रक्रिया आधिकारिक योजना पेज पर जाँचें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/mbyavy",
    officialSource: "myScheme.gov.in",
    keywords: ["आम", "आम विकास", "बागवानी मिशन"],
  },
  {
    id: "mukhyamantri-bagwani-strawberry-vikas",
    nameHindi: "मुख्यमंत्री बागवानी मिशन: स्ट्रॉबेरी विकास योजना",
    nameEnglish: "Mukhyamantri Bagwani Mission: Strawberry Vikas Yojana",
    shortDescriptionHindi:
      "स्ट्रॉबेरी की खेती और बागवानी विकास से संबंधित योजना।",
    category: "बागवानी",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "स्ट्रॉबेरी की खेती के लिए उपलब्ध सहायता और अनुदान की जानकारी आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "पात्रता और खेती संबंधी शर्तें आधिकारिक दिशानिर्देशों के अनुसार लागू होंगी।",
    ],
    documentsHindi: [
      "आवश्यक दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
    ],
    applicationProcessHindi: [
      "वर्तमान आवेदन प्रक्रिया और उपलब्धता आधिकारिक योजना पेज पर जाँचें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/mbysvy",
    officialSource: "myScheme.gov.in",
    keywords: ["स्ट्रॉबेरी", "स्ट्रॉबेरी विकास", "बागवानी मिशन"],
  },
  {
    id: "aloo-kufri-chipsona-1-kshetra-vistar",
    nameHindi: "आलू के कुफरी चिप्सोना-1 प्रभेद के क्षेत्र विस्तार योजना",
    nameEnglish:
      "Aaloo Ke Kufri Chipsona-1 Prabhed Ke Kshetra Vistaar Yojana",
    shortDescriptionHindi:
      "कुफरी चिप्सोना-1 आलू किस्म के क्षेत्र विस्तार से संबंधित योजना।",
    category: "कृषि विकास",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "इस आलू किस्म के क्षेत्र विस्तार के लिए उपलब्ध सहायता की जानकारी आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "किस्म, क्षेत्र और किसान पात्रता संबंधी शर्तों की पुष्टि आधिकारिक दिशानिर्देशों से करें।",
    ],
    documentsHindi: [
      "आवश्यक दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
    ],
    applicationProcessHindi: [
      "आवेदन प्रक्रिया और वर्तमान उपलब्धता आधिकारिक योजना पेज पर जाँचें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/akckvy",
    officialSource: "myScheme.gov.in",
    keywords: ["आलू", "कुफरी चिप्सोना-1", "आलू की किस्म", "क्षेत्र विस्तार"],
  },
  {
    id: "beej-masale-ki-yojana",
    nameHindi: "बीज मसाले की योजना",
    nameEnglish: "Beej Masaale Ki Yojana",
    shortDescriptionHindi:
      "बीज मसालों की खेती और उत्पादन से संबंधित योजना।",
    category: "बीज",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "बीज मसालों से संबंधित उपलब्ध सहायता और लाभ की जानकारी आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "पात्र किसानों और फसल संबंधी शर्तों की पुष्टि आधिकारिक दिशानिर्देशों से करें।",
    ],
    documentsHindi: [
      "आवश्यक दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
    ],
    applicationProcessHindi: [
      "वर्तमान आवेदन प्रक्रिया और पात्रता आधिकारिक योजना पेज पर जाँचें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/bmky",
    officialSource: "myScheme.gov.in",
    keywords: ["बीज मसाले", "मसाला फसल", "मसालों की खेती"],
  },
  {
    id: "pashu-bima-yojana",
    nameHindi: "पशु बीमा योजना",
    nameEnglish: "Pashu Bima Yojana",
    shortDescriptionHindi:
      "पशुओं के बीमा से संबंधित योजना।",
    category: "अन्य",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "पशु बीमा कवरेज, सहायता और लागू शर्तों की जानकारी आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "पात्र पशुपालकों, पशुओं और बीमा संबंधी शर्तों की पुष्टि आधिकारिक दिशानिर्देशों से करें।",
    ],
    documentsHindi: [
      "पशु पहचान, स्वामित्व और अन्य आवश्यक दस्तावेजों की शर्तें आधिकारिक योजना पेज पर जाँचें।",
    ],
    applicationProcessHindi: [
      "योजना की वर्तमान उपलब्धता और आवेदन प्रक्रिया आधिकारिक योजना पेज पर देखें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/pby",
    officialSource: "myScheme.gov.in",
    keywords: ["पशु बीमा", "पशुपालन", "पशुपालक", "बीमा"],
  },
  {
   id: "mukhyamantri-bagwani-anjir-vikas",
   nameHindi: "मुख्यमंत्री बागवानी मिशन: अंजीर विकास योजना",
   nameEnglish: "Mukhyamantri Bagwani Mission: Anjeer Vikas Yojana",
   shortDescriptionHindi:
     "अंजीर की खेती और बागवानी विकास से संबंधित योजना।",
   category: "बागवानी",
   government: "बिहार सरकार",
   stateCodes: ["01"],
   benefitsHindi: [
     "अंजीर की खेती के लिए उपलब्ध सहायता और अनुदान की जानकारी आधिकारिक योजना विवरण में देखें।",
   ],
   eligibilityHindi: [
     "पात्र किसानों और बागवानी संबंधी शर्तों की पुष्टि आधिकारिक दिशानिर्देशों से करें।",
   ],
   documentsHindi: [
     "आवश्यक दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
   ],
   applicationProcessHindi: [
     "वर्तमान आवेदन प्रक्रिया और उपलब्धता आधिकारिक योजना पेज पर जाँचें।",
   ],
   officialUrl: "https://www.myscheme.gov.in/schemes/mbyavyb",
   officialSource: "myScheme.gov.in",
   keywords: ["अंजीर", "अंजीर विकास", "बागवानी मिशन"],
 },
 {
    id: "nariyal-paudha-vitaran-yojana",
    nameHindi: "नारियल पौधा वितरण योजना",
    nameEnglish: "Nariwal Paudha Vitaran Yojana",
    shortDescriptionHindi:
      "नारियल के पौधों के वितरण से संबंधित योजना।",
    category: "बागवानी",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "नारियल पौधा वितरण और उपलब्ध सहायता की जानकारी आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "पात्र किसानों और पौधा वितरण की शर्तों की पुष्टि आधिकारिक दिशानिर्देशों से करें।",
    ],
    documentsHindi: [
      "आवश्यक दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
    ],
    applicationProcessHindi: [
      "पौधों की उपलब्धता और आवेदन प्रक्रिया आधिकारिक योजना पेज पर जाँचें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/npvy",
    officialSource: "myScheme.gov.in",
    keywords: ["नारियल", "नारियल पौधा", "पौधा वितरण"],
  },
  {
    id: "mukhyamantri-samekit-chaur-vikas-yojana",
    nameHindi: "मुख्यमंत्री समेकित चौर विकास योजना",
    nameEnglish: "Mukhyamantri Samekit Chaur Vikas Yojana",
    shortDescriptionHindi:
      "चौर क्षेत्रों के समेकित विकास से संबंधित बिहार सरकार की योजना।",
    category: "कृषि विकास",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "चौर क्षेत्र के विकास के लिए उपलब्ध सहायता और गतिविधियों की जानकारी आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "क्षेत्र, भूमि और लाभार्थी पात्रता संबंधी शर्तों की पुष्टि आधिकारिक दिशानिर्देशों से करें।",
    ],
    documentsHindi: [
      "आवश्यक भूमि और अन्य दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
    ],
    applicationProcessHindi: [
      "योजना की वर्तमान आवेदन प्रक्रिया आधिकारिक योजना पेज पर जाँचें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/mmscvy",
    officialSource: "myScheme.gov.in",
    keywords: ["चौर विकास", "समेकित विकास", "कृषि विकास"],
  },
  {
    id: "khule-jalsroto-pen-aadharit-matsya-palan",
    nameHindi: "खुले जलस्रोतों में पेन आधारित मत्स्य पालन की योजना",
    nameEnglish:
      "Khule Jalsroto Mei Pen Aadharit Matsya Paalan Ki Yojana",
    shortDescriptionHindi:
      "खुले जलस्रोतों में पेन आधारित मछली पालन से संबंधित योजना।",
    category: "कृषि विकास",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "पेन आधारित मत्स्य पालन के लिए उपलब्ध सहायता और शर्तें आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "मत्स्य पालकों, जलस्रोतों और अन्य पात्रता संबंधी शर्तों की पुष्टि आधिकारिक दिशानिर्देशों से करें।",
    ],
    documentsHindi: [
      "आवश्यक दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
    ],
    applicationProcessHindi: [
      "योजना की आवेदन प्रक्रिया और वर्तमान उपलब्धता आधिकारिक योजना पेज पर जाँचें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/kjmpampky",
    officialSource: "myScheme.gov.in",
    keywords: ["मत्स्य पालन", "खुले जलस्रोत", "पेन आधारित मछली पालन"],
  },
  {
    id: "cluster-mei-bagwani-yojana-ii",
    nameHindi: "क्लस्टर में बागवानी की योजना-II",
    nameEnglish: "Cluster Mei Bagwani Ki Yojana-II",
    shortDescriptionHindi:
      "क्लस्टर आधारित बागवानी विकास से संबंधित योजना।",
    category: "बागवानी",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "क्लस्टर आधारित बागवानी के लिए उपलब्ध सहायता और गतिविधियों की जानकारी आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "क्लस्टर, किसान और फसल संबंधी पात्रता की पुष्टि आधिकारिक दिशानिर्देशों से करें।",
    ],
    documentsHindi: [
      "आवश्यक दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
    ],
    applicationProcessHindi: [
      "वर्तमान आवेदन प्रक्रिया और उपलब्धता आधिकारिक योजना पेज पर जाँचें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/cmbkyii",
    officialSource: "myScheme.gov.in",
    keywords: ["क्लस्टर", "बागवानी", "क्लस्टर बागवानी"],
  },
  {
    id: "cluster-mei-bagwani-yojana",
    nameHindi: "क्लस्टर में बागवानी की योजना",
    nameEnglish: "Cluster Mei Bagwani Ki Yojana",
    shortDescriptionHindi:
      "क्लस्टर आधारित बागवानी विकास से संबंधित योजना।",
    category: "बागवानी",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "क्लस्टर आधारित बागवानी के लिए उपलब्ध सहायता की जानकारी आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "पात्र किसानों और क्लस्टर संबंधी शर्तों की पुष्टि आधिकारिक दिशानिर्देशों से करें।",
    ],
    documentsHindi: [
      "आवश्यक दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
    ],
    applicationProcessHindi: [
      "योजना की वर्तमान आवेदन प्रक्रिया आधिकारिक योजना पेज पर जाँचें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/cmbky",
    officialSource: "myScheme.gov.in",
    keywords: ["क्लस्टर", "बागवानी", "बागवानी विकास"],
  },
  {
    id: "talab-matsyiki-vishesh-sahayata-yojana",
    nameHindi:
      "तालाब मत्स्यिकी विशेष सहायता योजना (अनुसूचित जाति/जनजाति/अति पिछड़ा वर्ग)",
    nameEnglish:
      "Talab Matsyiki Vishesh Sahayata Yojana (Anusuchit Jaati/Janajati/Ati Pichhada)",
    shortDescriptionHindi:
      "तालाब आधारित मत्स्य पालन के लिए विशेष सहायता से संबंधित योजना।",
    category: "कृषि विकास",
    government: "बिहार सरकार",
    stateCodes: ["01"],
    benefitsHindi: [
      "तालाब आधारित मत्स्य पालन के लिए उपलब्ध विशेष सहायता की शर्तें आधिकारिक योजना विवरण में देखें।",
    ],
    eligibilityHindi: [
      "लक्षित वर्ग, पात्रता और अन्य शर्तों की पुष्टि आधिकारिक दिशानिर्देशों से करें।",
    ],
    documentsHindi: [
      "जाति प्रमाणपत्र, तालाब संबंधी जानकारी और अन्य आवश्यक दस्तावेजों की शर्तें आधिकारिक स्रोत से जाँचें।",
    ],
    applicationProcessHindi: [
      "वर्तमान आवेदन प्रक्रिया और आवश्यक प्रमाणपत्र आधिकारिक योजना पेज पर जाँचें।",
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/tmvsy-ajjap",
    officialSource: "myScheme.gov.in",
    keywords: ["तालाब", "मत्स्यिकी", "मछली पालन", "विशेष सहायता"],
  },
  {
	id: "pathari-kshetra-talab-nirman-matsya-palan",
	nameHindi: "पथरीले क्षेत्र में तालाब निर्माण आधारित मत्स्य पालन की योजना",
	nameEnglish:
		"Pathari Kshetr Talab Nirman Aadharit Matsya Paalan Ki Yojana",
	shortDescriptionHindi:
		"पथरीले क्षेत्रों में तालाब निर्माण और मत्स्य पालन से संबंधित योजना।",
	category: "कृषि विकास",
	government: "बिहार सरकार",
	stateCodes: ["01"],
	benefitsHindi: [
		"तालाब निर्माण और मत्स्य पालन के लिए उपलब्ध सहायता की जानकारी आधिकारिक योजना विवरण में देखें।",
	],
	eligibilityHindi: [
		"भूमि, क्षेत्र, मत्स्य पालन और लाभार्थी संबंधी पात्रता की पुष्टि आधिकारिक दिशानिर्देशों से करें।",
	],
	documentsHindi: [
		"भूमि और अन्य आवश्यक दस्तावेजों की सूची आधिकारिक योजना पेज पर देखें।",
	],
	applicationProcessHindi: [
		"वर्तमान आवेदन प्रक्रिया और उपलब्धता आधिकारिक योजना पेज पर जाँचें।",
	],
	officialUrl: "https://www.myscheme.gov.in/schemes/pktnampy",
	officialSource: "myScheme.gov.in",
	keywords: ["पथरीला क्षेत्र", "तालाब निर्माण", "मत्स्य पालन"],
  },
];