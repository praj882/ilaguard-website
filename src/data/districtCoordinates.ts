export type DistrictCoordinate = {
  districtId: string;
  stateId: string;
  latitude: number;
  longitude: number;
};

/*
 * District coordinates used ONLY as fallback
 * when GPS location is unavailable or denied.
 *
 * IMPORTANT:
 * districtId and stateId MUST match the IDs
 * used in your existing districts.ts / states.ts.
 */

export const DISTRICT_COORDINATES: DistrictCoordinate[] = [
  {
    stateId: "01",
    districtId: "01",
    latitude: 26.1542,
    longitude: 85.8918,
  },
  {
    stateId: "01",
    districtId: "02",
    latitude: 26.1095,
    longitude: 85.3911,
  },
  {
    stateId: "01",
    districtId: "03",
    latitude: 26.2177,
    longitude: 85.9004,
  },
  {
    stateId: "01",
    districtId: "04",
    latitude: 26.3487,
    longitude: 86.0714,
  },
  {
    stateId: "01",
    districtId: "05",
    latitude: 25.9213,
    longitude: 84.7194,
  },
  {
    stateId: "01",
    districtId: "06",
    latitude: 25.7751,
    longitude: 84.7426,
  },
  {
    stateId: "01",
    districtId: "07",
    latitude: 25.3456,
    longitude: 86.9824,
  },
  {
    stateId: "01",
    districtId: "08",
    latitude: 25.6751,
    longitude: 85.2145,
  },
  {
    stateId: "01",
    districtId: "09",
    latitude: 25.5656,
    longitude: 85.2471,
  },
  {
    stateId: "01",
    districtId: "10",
    latitude: 24.8845,
    longitude: 85.5432,
  },
  {
    stateId: "01",
    districtId: "11",
    latitude: 24.7969,
    longitude: 85.0039,
  },
  {
    stateId: "01",
    districtId: "12",
    latitude: 25.3768,
    longitude: 86.4735,
  },
  {
    stateId: "01",
    districtId: "13",
    latitude: 25.7714,
    longitude: 86.9022,
  },
  {
    stateId: "01",
    districtId: "14",
    latitude: 25.1494,
    longitude: 85.8997,
  },
  {
    stateId: "01",
    districtId: "15",
    latitude: 25.7781,
    longitude: 84.7334,
  },
  {
    stateId: "01",
    districtId: "16",
    latitude: 25.6746,
    longitude: 85.8086,
  },
  {
    stateId: "01",
    districtId: "17",
    latitude: 25.2058,
    longitude: 85.5197,
  },
  {
    stateId: "01",
    districtId: "18",
    latitude: 24.9495,
    longitude: 85.2249,
  },
  {
    stateId: "01",
    districtId: "19",
    latitude: 25.0981,
    longitude: 84.8569,
  },
  {
    stateId: "01",
    districtId: "20",
    latitude: 25.1427,
    longitude: 86.0951,
  },
  {
    stateId: "01",
    districtId: "21",
    latitude: 25.8751,
    longitude: 86.5951,
  },
  {
    stateId: "01",
    districtId: "22",
    latitude: 26.1197,
    longitude: 86.5826,
  },
  {
    stateId: "01",
    districtId: "23",
    latitude: 25.6076,
    longitude: 85.9312,
  },
  {
    stateId: "01",
    districtId: "24",
    latitude: 25.3681,
    longitude: 85.1292,
  },
  {
    stateId: "01",
    districtId: "25",
    latitude: 26.1524,
    longitude: 85.8972,
  },
  {
    stateId: "01",
    districtId: "26",
    latitude: 25.7798,
    longitude: 86.4824,
  },
  {
    stateId: "01",
    districtId: "27",
    latitude: 26.1177,
    longitude: 85.3918,
  },
  {
    stateId: "01",
    districtId: "28",
    latitude: 25.5947,
    longitude: 85.1376,
  },
  {
    stateId: "01",
    districtId: "29",
    latitude: 25.7684,
    longitude: 84.9946,
  },

  // Samastipur
  {
    stateId: "01",
    districtId: "30",
    latitude: 25.8629,
    longitude: 85.781,
  },

  {
    stateId: "01",
    districtId: "31",
    latitude: 25.992,
    longitude: 85.0876,
  },
  {
    stateId: "01",
    districtId: "32",
    latitude: 25.6441,
    longitude: 85.9067,
  },
  {
    stateId: "01",
    districtId: "33",
    latitude: 26.1221,
    longitude: 85.3647,
  },
  {
    stateId: "01",
    districtId: "34",
    latitude: 25.5677,
    longitude: 85.4818,
  },
  {
    stateId: "01",
    districtId: "35",
    latitude: 25.1214,
    longitude: 85.4682,
  },
  {
    stateId: "01",
    districtId: "36",
    latitude: 25.3971,
    longitude: 84.9913,
  },
  {
    stateId: "01",
    districtId: "37",
    latitude: 25.7464,
    longitude: 85.3131,
  },
  {
    stateId: "01",
    districtId: "38",
    latitude: 25.5941,
    longitude: 85.1374,
  },
];

/**
 * Get fallback coordinates for a district.
 */
export function getDistrictCoordinates(
  stateId: string,
  districtId: string
): DistrictCoordinate | null {
  return (
    DISTRICT_COORDINATES.find(
      (district) =>
        district.stateId === stateId &&
        district.districtId === districtId
    ) ?? null
  );
}