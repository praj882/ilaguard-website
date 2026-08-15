export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: "available" | "prototype" | "development" | "coming-soon";
  icon: string;
  image: string;
  features: string[];
  apk?: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "ilapot",
    name: "IlaPot",
    tagline: "Smart Irrigation for Smarter Plants",
    description:
      "IlaPot is an IoT-powered smart irrigation system that monitors soil moisture and helps automate watering based on real-time plant conditions.",
    category: "Smart Agriculture",
    status: "prototype",
    icon: "🌱",
    image: "/products/ilapot/ilapot.jpg",

    features: [
      "Real-time soil moisture monitoring",
      "Automatic irrigation control",
      "Manual and automatic operation",
      "IoT connectivity",
      "Mobile app monitoring",
      "Remote device monitoring",
    ],

    apk: "/downloads/IlaPot-v1.0.0.apk",
  },

  {
    slug: "ilafarm",
    name: "IlaFarm",
    tagline: "Connected Intelligence for Modern Farming",
    description:
      "IlaFarm is being developed to connect farm sensors, agricultural data and intelligent recommendations in one platform.",
    category: "Farm Intelligence",
    status: "development",
    icon: "🌾",
    image: "/products/ilafarm/ilafarm.jpg",

    features: [
      "Farm monitoring",
      "Sensor integration",
      "Crop insights",
      "IoT connectivity",
      "Data-driven farming",
    ],
  },

  {
    slug: "ilatank",
    name: "IlaTank",
    tagline: "Smart Water Monitoring",
    description:
      "IlaTank is an IoT-based water monitoring solution designed to monitor tank levels and improve water management.",
    category: "Water Management",
    status: "development",
    icon: "💧",
    image: "/products/ilatank/ilatank.jpg",

    features: [
      "Water level monitoring",
      "Real-time status",
      "Pump control",
      "Alerts",
      "IoT connectivity",
    ],
  },
];