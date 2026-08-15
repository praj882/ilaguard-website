export type Season = "Kharif" | "Rabi" | "Zaid";

export type SeasonInfo = {
  id: Season;
  name: string;
  description: string;
};

export const SEASONS: SeasonInfo[] = [
  {
    id: "Kharif",
    name: "Kharif",
    description: "Monsoon season crops",
  },
  {
    id: "Rabi",
    name: "Rabi",
    description: "Winter season crops",
  },
  {
    id: "Zaid",
    name: "Zaid",
    description: "Summer season crops",
  },
];