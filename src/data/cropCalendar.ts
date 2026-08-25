// src/data/cropCalendar.ts

export type CropCalendarScore = 0 | 25 | 50 | 75 | 100;

export type SowingWindow = {
  /**
   * State + District combinations.
   *
   * Format:
   * "SS:DD"
   *
   * Example:
   * "01:05" = Bihar + Begusarai
   * "01:30" = Bihar + Samastipur
   *
   * An empty array means all districts
   * within the specified state.
   */
  regionCodes: string[];

  startMonth: number;
  endMonth: number;

  /**
   * Suitability score for this sowing window.
   *
   * 100 = Highly suitable
   * 75  = Suitable
   * 50  = Conditional
   * 25  = Poor
   * 0   = Not recommended
   */
  score: CropCalendarScore;
};

export type CropCalendar = {
  cropId: string;

  /**
   * State ID.
   *
   * Format:
   * "01" = Bihar
   * "02" = Uttar Pradesh
   * etc.
   */
  stateId: string;

  sowingWindows: SowingWindow[];
};

/**
 * Crop sowing calendar
 *
 * Score:
 * 100 = Highly suitable / preferred window
 * 75  = Suitable / secondary window
 * 50  = Conditional / limited window
 * 25  = Poor suitability
 * 0   = Not recommended
 *
 * Region code:
 * "SS:DD"
 *
 * Example:
 * "01:05" = Bihar + Begusarai
 * "01:09" = Bihar + Darbhanga
 * "01:30" = Bihar + Samastipur
 *
 * If regionCodes is []:
 * the rule applies to all districts
 * within the specified state.
 */
export const CROP_CALENDAR: CropCalendar[] = [
  // ============================================================
  // BRINJAL / BAINGAN
  // ============================================================
  {
    cropId: "brinjal",
    stateId: "01",

    sowingWindows: [
      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 2,
        endMonth: 3,
        score: 100,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 6,
        endMonth: 7,
        score: 100,
      },

      // Bihar - Selected districts
      {
        regionCodes: [
          "01:05", // Begusarai
          "01:09", // Darbhanga
          "01:23", // Muzaffarpur
          "01:26", // Patna
          "01:30", // Samastipur
          "01:37", // Vaishali
        ],
        startMonth: 8,
        endMonth: 10,
        score: 75,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 11,
        endMonth: 12,
        score: 75,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 1,
        endMonth: 1,
        score: 50,
      },
    ],
  },

  // ============================================================
  // OKRA / BHINDI
  // ============================================================
  {
    cropId: "okra",
    stateId: "01",

    sowingWindows: [
      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 2,
        endMonth: 7,
        score: 100,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 1,
        endMonth: 1,
        score: 50,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 12,
        endMonth: 12,
        score: 50,
      },
    ],
  },

  // ============================================================
  // TOMATO / TAMATAR
  // ============================================================
  {
    cropId: "tomato",
    stateId: "01",

    sowingWindows: [
      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 9,
        endMonth: 10,
        score: 100,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 11,
        endMonth: 12,
        score: 75,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 2,
        endMonth: 3,
        score: 75,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 1,
        endMonth: 1,
        score: 75,
      },
    ],
  },

  // ============================================================
  // CAULIFLOWER / PHOOLGOBHI
  // ============================================================
  {
    cropId: "cauliflower",
    stateId: "01",

    sowingWindows: [
      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 9,
        endMonth: 11,
        score: 100,
      },

      // Bihar - All districts
      //
      // This crosses the year boundary:
      // December → January
      //
      // Keep this as two windows rather than
      // startMonth: 12, endMonth: 1.
      {
        regionCodes: [],
        startMonth: 12,
        endMonth: 12,
        score: 75,
      },

      {
        regionCodes: [],
        startMonth: 1,
        endMonth: 1,
        score: 75,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 8,
        endMonth: 8,
        score: 75,
      },
    ],
  },

  // ============================================================
  // SPINACH / PALAK
  // ============================================================
  {
    cropId: "spinach",
    stateId: "01",

    sowingWindows: [
      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 9,
        endMonth: 11,
        score: 100,
      },

      // December → February
      {
        regionCodes: [],
        startMonth: 12,
        endMonth: 12,
        score: 75,
      },

      {
        regionCodes: [],
        startMonth: 1,
        endMonth: 2,
        score: 75,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 8,
        endMonth: 8,
        score: 75,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 3,
        endMonth: 3,
        score: 50,
      },
    ],
  },

  // ============================================================
  // CORIANDER / DHANIYA
  // ============================================================
  {
    cropId: "coriander",
    stateId: "01",

    sowingWindows: [
      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 10,
        endMonth: 11,
        score: 100,
      },

      // December → January
      {
        regionCodes: [],
        startMonth: 12,
        endMonth: 12,
        score: 75,
      },

      {
        regionCodes: [],
        startMonth: 1,
        endMonth: 1,
        score: 75,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 9,
        endMonth: 9,
        score: 75,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 2,
        endMonth: 2,
        score: 50,
      },
    ],
  },
  // ============================================================
  // Fenugreek / मेथी
  // ============================================================
  {
    cropId: "fenugreek",
    stateId: "01",

    sowingWindows: [
      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 10,
        endMonth: 11,
        score: 100,
      },

      // December → January
      {
        regionCodes: [],
        startMonth: 12,
        endMonth: 12,
        score: 75,
      },

      {
        regionCodes: [],
        startMonth: 1,
        endMonth: 1,
        score: 75,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 9,
        endMonth: 9,
        score: 75,
      },

      // Bihar - All districts
      {
        regionCodes: [],
        startMonth: 2,
        endMonth: 2,
        score: 50,
      },
    ],
  },
];