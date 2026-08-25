// src/lib/cropAdvisor.ts

import { CROPS, type Crop } from "@/data/crops";
import {
  CROP_CALENDAR,
  type SowingWindow,
} from "@/data/cropCalendar";
import {
  CROP_SUITABILITY,
  type SuitabilityLevel,
} from "@/data/cropSuitability";
import type { Season } from "@/data/seasons";

// ============================================================
// TYPES
// ============================================================

export type LocationType = "district" | "state";

export type CropPriority = 1 | 2 | 3;

export type CropRecommendation = {
  crop: Crop;

  /**
   * Calendar / sowing suitability score.
   *
   * 100 = Highly suitable
   * 75  = Suitable
   * 50  = Conditional
   * 25  = Poor
   */
  calendarScore: number;

  /**
   * District/location suitability.
   */
  suitability: SuitabilityLevel;

  /**
   * Human-readable location rule.
   *
   * district = region-specific rule matched
   * state    = Bihar/state-wide fallback
   */
  locationType: LocationType;

  /**
   * Final recommendation score.
   *
   * Calendar score = 60%
   * Location score = 40%
   */
  finalScore: number;

  /**
   * Priority bucket.
   *
   * Priority 1 = Highly Suitable
   * Priority 2 = Suitable
   * Priority 3 = Conditional
   */
  priority: CropPriority;

  /**
   * Human-readable recommendation label.
   */
  recommendationLabel: string;
};

export type CropAdvisorResult = {
  season: Season;

  crops: CropRecommendation[];

  total: number;
};

// ============================================================
// SCORE WEIGHTS
// ============================================================

const SCORE_WEIGHTS = {
  calendar: 0.6,
  location: 0.4,
};

// ============================================================
// LOCATION SCORE
// ============================================================

const LOCATION_SCORE: Record<
  SuitabilityLevel,
  number
> = {
  high: 100,
  medium: 70,
  low: 40,
};

// ============================================================
// SEASON
// ============================================================

export function getSeason(
  month: number
): Season {
  /*
   * Kharif
   * June - September
   */
  if ([6, 7, 8, 9].includes(month)) {
    return "Kharif";
  }

  /*
   * Rabi
   * October - February
   */
  if ([10, 11, 12, 1, 2].includes(month)) {
    return "Rabi";
  }

  /*
   * Zaid
   * March - May
   */
  return "Zaid";
}

// ============================================================
// CHECK MONTH IN SOWING WINDOW
// ============================================================

function isMonthInWindow(
  month: number,
  window: SowingWindow
): boolean {
  const {
    startMonth,
    endMonth,
  } = window;

  /*
   * Normal window
   *
   * Example:
   * March -> May
   */
  if (startMonth <= endMonth) {
    return (
      month >= startMonth &&
      month <= endMonth
    );
  }

  /*
   * Cross-year window
   *
   * Example:
   * November -> February
   */
  return (
    month >= startMonth ||
    month <= endMonth
  );
}

// ============================================================
// GET REGION CODE
// ============================================================

function getRegionCode(
  stateId: string | number,
  districtId: string | number
): string {
  return `${String(stateId).padStart(
    2,
    "0"
  )}:${String(districtId).padStart(
    2,
    "0"
  )}`;
}

// ============================================================
// GET CALENDAR RULE
// ============================================================

function getCalendarRule(
  cropId: string,
  stateId: string,
  districtId: string,
  month: number
): {
  window: SowingWindow;
  locationType: LocationType;
} | null {
  const calendar = CROP_CALENDAR.find(
    (item) =>
      item.cropId === cropId &&
      item.stateId === stateId
  );

  if (!calendar) {
    return null;
  }

  const regionCode = getRegionCode(
    stateId,
    districtId
  );

  /*
   * Find windows where selected month
   * is inside the sowing period.
   */
  const matchingWindows =
    calendar.sowingWindows.filter(
      (window) =>
        isMonthInWindow(
          month,
          window
        )
    );

  if (matchingWindows.length === 0) {
    return null;
  }

  // ==========================================================
  // DISTRICT-SPECIFIC WINDOW
  // ==========================================================

  const regionWindows =
    matchingWindows.filter(
      (window) =>
        window.regionCodes.length > 0 &&
        window.regionCodes.includes(
          regionCode
        )
    );

  if (regionWindows.length > 0) {
    /*
     * If multiple district windows match,
     * use the one with the highest score.
     */
    const bestWindow =
      regionWindows.reduce(
        (best, current) =>
          current.score > best.score
            ? current
            : best
      );

    return {
      window: bestWindow,
      locationType: "district",
    };
  }

  // ==========================================================
  // STATE-WIDE WINDOW
  // ==========================================================

  const stateWindows =
    matchingWindows.filter(
      (window) =>
        window.regionCodes.length === 0
    );

  if (stateWindows.length > 0) {
    const bestWindow =
      stateWindows.reduce(
        (best, current) =>
          current.score > best.score
            ? current
            : best
      );

    return {
      window: bestWindow,
      locationType: "state",
    };
  }

  return null;
}

// ============================================================
// GET LOCATION RULE
// ============================================================

function getLocationRule(
  cropId: string,
  regionCode: string
) {
  const rules =
    CROP_SUITABILITY.filter(
      (rule) =>
        rule.cropId === cropId
    );

  if (rules.length === 0) {
    return null;
  }

  // ==========================================================
  // DISTRICT-SPECIFIC RULE
  // ==========================================================

  const regionRule = rules.find(
    (rule) =>
      rule.regionCodes &&
      rule.regionCodes.length > 0 &&
      rule.regionCodes.includes(
        regionCode
      )
  );

  if (regionRule) {
    return {
      rule: regionRule,
      locationType:
        "district" as const,
    };
  }

  // ==========================================================
  // STATE-WIDE FALLBACK
  // ==========================================================

  const stateRule = rules.find(
    (rule) =>
      !rule.regionCodes ||
      rule.regionCodes.length === 0
  );

  if (stateRule) {
    return {
      rule: stateRule,
      locationType:
        "state" as const,
    };
  }

  return null;
}

// ============================================================
// GET REGION SUITABILITY
// ============================================================

function getRegionSuitability(
  cropId: string,
  regionCode: string
): SuitabilityLevel {
  const location =
    getLocationRule(
      cropId,
      regionCode
    );

  /*
   * If there is no suitability data,
   * use medium as a safe fallback.
   */
  if (!location) {
    return "medium";
  }

  // ==========================================================
  // REGION-SPECIFIC OVERRIDE
  // ==========================================================

  const override =
    location.rule.regionCodesOverrides?.find(
      (item) =>
        item.regionCodes.includes(
          regionCode
        )
    );

  if (override) {
    return override.suitability;
  }

  // ==========================================================
  // BASE SUITABILITY
  // ==========================================================

  if (location.rule.suitability) {
    return location.rule.suitability;
  }

  return "medium";
}

// ============================================================
// GET PRIORITY
// ============================================================

function getPriority(
  score: number
): CropPriority | null {
  /*
   * Priority 1
   * Highly Suitable
   */
  if (score >= 85) {
    return 1;
  }

  /*
   * Priority 2
   * Suitable
   */
  if (score >= 70) {
    return 2;
  }

  /*
   * Priority 3
   * Conditional
   */
  if (score >= 55) {
    return 3;
  }

  /*
   * Below 55:
   * Do not recommend.
   */
  return null;
}

// ============================================================
// GET RECOMMENDATION LABEL
// ============================================================

function getRecommendationLabel(
  priority: CropPriority
): string {
  switch (priority) {
    case 1:
      return "Highly Suitable";

    case 2:
      return "Suitable";

    case 3:
      return "Conditional";

    default:
      return "Conditional";
  }
}

// ============================================================
// CALCULATE FINAL SCORE
// ============================================================

function calculateFinalScore(
  calendarScore: number,
  suitability: SuitabilityLevel
): number {
  const locationScore =
    LOCATION_SCORE[suitability];

  const finalScore =
    calendarScore *
      SCORE_WEIGHTS.calendar +
    locationScore *
      SCORE_WEIGHTS.location;

  return Math.round(finalScore);
}

// ============================================================
// GET RECOMMENDED CROPS
// ============================================================

export function getRecommendedCrops(
  stateId: string | number,
  districtId: string | number,
  month: number
): CropAdvisorResult {
  const state = String(
    stateId
  ).padStart(2, "0");

  const district = String(
    districtId
  ).padStart(2, "0");

  const regionCode =
    getRegionCode(
      state,
      district
    );

  // ==========================================================
  // INVALID MONTH
  // ==========================================================

  if (
    month < 1 ||
    month > 12
  ) {
    return {
      season: getSeason(1),
      crops: [],
      total: 0,
    };
  }

  const season =
    getSeason(month);

  const recommendations: CropRecommendation[] =
    [];

  // ==========================================================
  // PROCESS CROPS
  // ==========================================================

  for (const calendar of CROP_CALENDAR) {
    /*
     * Only process crops belonging
     * to the selected state.
     */
    if (
      calendar.stateId !== state
    ) {
      continue;
    }

    // ========================================================
    // CALENDAR
    // ========================================================

    const calendarRule =
      getCalendarRule(
        calendar.cropId,
        state,
        district,
        month
      );

    /*
     * Crop cannot be recommended
     * if it is outside the sowing window.
     */
    if (!calendarRule) {
      continue;
    }

    // ========================================================
    // CROP MASTER DATA
    // ========================================================

    const crop = CROPS.find(
      (item) =>
        item.id ===
        calendar.cropId
    );

    if (!crop) {
      continue;
    }

    // ========================================================
    // LOCATION SUITABILITY
    // ========================================================

    const suitability =
      getRegionSuitability(
        calendar.cropId,
        regionCode
      );

    // ========================================================
    // FINAL SCORE
    // ========================================================

    const finalScore =
      calculateFinalScore(
        calendarRule.window.score,
        suitability
      );

    // ========================================================
    // PRIORITY
    // ========================================================

    const priority =
      getPriority(
        finalScore
      );

    /*
     * If score is below 55,
     * don't display this crop.
     */
    if (!priority) {
      continue;
    }

    // ========================================================
    // ADD RECOMMENDATION
    // ========================================================

    recommendations.push({
      crop,

      calendarScore:
        calendarRule.window.score,

      suitability,

      locationType:
        calendarRule.locationType,

      finalScore,

      priority,

      recommendationLabel:
        getRecommendationLabel(
          priority
        ),
    });
  }

  // ==========================================================
  // SORT RESULTS
  // ==========================================================

  recommendations.sort(
    (a, b) => {
      /*
       * First:
       * Priority 1
       * Priority 2
       * Priority 3
       */
      if (
        a.priority !==
        b.priority
      ) {
        return (
          a.priority -
          b.priority
        );
      }

      /*
       * Within the same priority,
       * show higher score first.
       */
      if (
        b.finalScore !==
        a.finalScore
      ) {
        return (
          b.finalScore -
          a.finalScore
        );
      }

      /*
       * Then compare calendar score.
       */
      if (
        b.calendarScore !==
        a.calendarScore
      ) {
        return (
          b.calendarScore -
          a.calendarScore
        );
      }

      /*
       * Prefer district-specific
       * rules over state-wide rules.
       */
      if (
        a.locationType !==
        b.locationType
      ) {
        return (
          a.locationType ===
          "district"
            ? -1
            : 1
        );
      }

      return 0;
    }
  );

  // ==========================================================
  // RESULT
  // ==========================================================

  return {
    season,

    crops:
      recommendations,

    total:
      recommendations.length,
  };
}