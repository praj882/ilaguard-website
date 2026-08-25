export type Crop = {
  id: string;
  name: string;
  nameHindi: string;
  category: "Cereal" | "Pulse" | "Oilseed" | "Vegetable" | "Fruit";
  icon: string;
};

export const CROPS: Crop[] = [

  {
    id: "rice",
    name: "Rice",
    nameHindi: "धान",
    category: "Cereal",
    icon: "🌾",
  },

  {
    id: "maize",
    name: "Maize",
    nameHindi: "मक्का",
    category: "Cereal",
    icon: "🌽",
  },

  {
    id: "wheat",
    name: "Wheat",
    nameHindi: "गेहूँ",
    category: "Cereal",
    icon: "🌾",
  },

  {
    id: "mustard",
    name: "Mustard",
    nameHindi: "सरसों",
    category: "Oilseed",
    icon: "🌼",
  },

  {
    id: "potato",
    name: "Potato",
    nameHindi: "आलू",
    category: "Vegetable",
    icon: "🥔",
  },

  {
    id: "tomato",
    name: "Tomato",
    nameHindi: "टमाटर",
    category: "Vegetable",
    icon: "🍅",
  },

  {
    id: "brinjal",
    name: "Brinjal",
    nameHindi: "बैंगन",
    category: "Vegetable",
    icon: "🍆",
  },

  {
    id: "okra",
    name: "Okra",
    nameHindi: "भिंडी",
    category: "Vegetable",
    icon: "🥬",
  },

  {
    id: "cauliflower",
    name: "Cauliflower",
    nameHindi: "फूलगोभी",
    category: "Vegetable",
    icon: "🥦",
  },
  
  {
  id: "spinach",
  name: "Spinach",
  nameHindi: "पालक",
  category: "Vegetable",
  icon: "🥬",
  },
  
  {
  id: "coriander",
  name: "Coriander",
  nameHindi: "धनिया",
  category: "Vegetable",
  icon: "🌿",
  },
  
  {
  id: "radish",
  name: "Radish",
  nameHindi: "मूली",
  category: "Vegetable",
  icon: "🥕",
  },
  
  {
    id: "carrot",
    name: "Carrot",
    nameHindi: "गाजर",
    category: "Vegetable",
    icon: "🥕",
  },
  
  {
    id: "cabbage",
    name: "Cabbage",
    nameHindi: "पत्तागोभी",
    category: "Vegetable",
    icon: "🥬",
  },
  
  {
    id: "chilli",
    name: "Chilli",
    nameHindi: "मिर्च",
    category: "Vegetable",
    icon: "🌶️",
  },
  
  {
  id: "fenugreek",
  name: "Fenugreek",
  nameHindi: "मेथी",
  category: "Vegetable",
  icon: "🌿",
  },
];