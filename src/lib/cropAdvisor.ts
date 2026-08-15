// src/lib/cropAdvisor.ts

import { CROPS, type Crop } from "@/data/crops";
import {
  CROP_CALENDAR,
  type CropPriority,
  type SowingWindow,
} from "@/data/cropCalendar";
import { CROP_SUITABILITY } from "@/data/cropSuitability";
import type { Season } from "@/data/seasons";

// ============================================================
// TYPES
// ============================================================

export type CropRecommendation = {
  crop: Crop;

  /**
   * 1 = Highly suitable
   * 2 = Suitable
   * 3 = Conditional
   */
  priority: CropPriority;

  /**
   * Human-readable priority label.
   */
  priorityLabel: string;

  /**
   * Whether the recommendation comes from a
   * district-specific rule or state-wide rule.
   */
  locationType: "district" | "state";

  /**
   * Location suitability.
   */
  suitability: "high" | "medium" | "low";
};

export type CropAdvisorResult = {
  season: Season;

  crops: CropRecommendation[];

  /**
   * Number of crops found.
   */
  total: number;
};

// ============================================================
// SEASON
// ============================================================

export function getSeason(month: number): Season {
  if ([6, 7, 8, 9].includes(month)) {
    return "Kharif";
  }

  if ([10, 11, 12, 1, 2].includes(month)) {
    return "Rabi";
  }

  return "Zaid";
}

// ============================================================
// PRIORITY LABEL
// ============================================================

export function getPriorityLabel(
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
      return "Suitable";
  }
}

// ============================================================
// CHECK MONTH IN SOWING WINDOW
// ============================================================

function isMonthInWindow(
  month: number,
  window: SowingWindow
): boolean {
  const { startMonth, endMonth } = window;

  // Normal window
  //
  // Example:
  // June → July
  //
  if (startMonth <= endMonth) {
    return (
      month >= startMonth &&
      month <= endMonth
    );
  }

  // Cross-year window
  //
  // Example:
  // December → January
  //
  // 12 -> 1
  //
  // Valid months:
  // December
  // January
  //
  return (
    month >= startMonth ||
    month <= endMonth
  );
}

// ============================================================
// GET MONTH PRIORITY
// ============================================================

function getMonthPriority(
  cropId: string,
  stateId: number,
  month: number
): CropPriority | null {
  const calendar = CROP_CALENDAR.find(
    (item) =>
      item.cropId === cropId &&
      item.stateId === stateId
  );

  if (!calendar) {
    return null;
  }

  const matchingWindows = calendar.sowingWindows.filter(
    (window) =>
      isMonthInWindow(month, window)
  );

  if (matchingWindows.length === 0) {
    return null;
  }

  /**
   * If multiple windows overlap,
   * choose the best priority.
   *
   * Priority 1 beats 2,
   * Priority 2 beats 3.
   */
  return Math.min(
    ...matchingWindows.map(
      (window) => window.priority
    )
  ) as CropPriority;
}

// ============================================================
// GET LOCATION RULE
// ============================================================

function getLocationRule(
  cropId: string,
  stateId: number,
  districtId: number
) {
  const rules = CROP_SUITABILITY.filter(
    (rule) =>
      rule.cropId === cropId &&
      rule.stateId === stateId
  );

  if (rules.length === 0) {
    return null;
  }

  // ----------------------------------------------------------
  // 1. District-specific rule
  // ----------------------------------------------------------

  const districtRule = rules.find(
    (rule) =>
      rule.districtIds &&
      rule.districtIds.length > 0 &&
      rule.districtIds.includes(districtId)
  );

  if (districtRule) {
    return {
      rule: districtRule,
      locationType: "district" as const,
    };
  }

  // ----------------------------------------------------------
  // 2. State-wide fallback
  // ----------------------------------------------------------

  const stateRule = rules.find(
    (rule) =>
      !rule.districtIds ||
      rule.districtIds.length === 0
  );

  if (stateRule) {
    return {
      rule: stateRule,
      locationType: "state" as const,
    };
  }

  return null;
}

// ============================================================
// GET DISTRICT SUITABILITY
// ============================================================

function getDistrictSuitability(
  cropId: string,
  stateId: number,
  districtId: number
): "high" | "medium" | "low" {
  const rule = getLocationRule(
    cropId,
    stateId,
    districtId
  );

  if (!rule) {
    return "medium";
  }

  const override =
    rule.rule.districtOverrides?.find(
      (item) =>
        item.districtIds.includes(districtId)
    );

  if (override) {
    return override.suitability;
  }

  /**
   * If there is no special override,
   * consider the crop suitable for the
   * applicable state/district rule.
   */
  return "medium";
}

// ============================================================
// GET RECOMMENDED CROPS
// ============================================================

export function getRecommendedCrops(
  stateId: string | number,
  districtId: string | number,
  month: number
): CropAdvisorResult {
  const state = Number(stateId);
  const district = Number(districtId);

  const season = getSeason(month);

  const recommendations: CropRecommendation[] = [];

  // ----------------------------------------------------------
  // Iterate through crop calendars
  // ----------------------------------------------------------

  for (const calendar of CROP_CALENDAR) {
    // --------------------------------------------------------
    // State check
    // --------------------------------------------------------

    if (calendar.stateId !== state) {
      continue;
    }

    // --------------------------------------------------------
    // Month check
    // --------------------------------------------------------

    const priority = getMonthPriority(
      calendar.cropId,
      state,
      month
    );

    if (priority === null) {
      continue;
    }

    // --------------------------------------------------------
    // Location check
    // --------------------------------------------------------

    const location = getLocationRule(
      calendar.cropId,
      state,
      district
    );

    if (!location) {
      continue;
    }

    // --------------------------------------------------------
    // Find crop master data
    // --------------------------------------------------------

    const crop = CROPS.find(
      (item) =>
        item.id === calendar.cropId
    );

    if (!crop) {
      /**
       * Prevent a bad rule from breaking
       * the entire recommendation engine.
       */
      continue;
    }

    // --------------------------------------------------------
    // District suitability
    // --------------------------------------------------------

    const suitability =
      getDistrictSuitability(
        calendar.cropId,
        state,
        district
      );

    // --------------------------------------------------------
    // Add recommendation
    // --------------------------------------------------------

    recommendations.push({
      crop,

      priority,

      priorityLabel:
        getPriorityLabel(priority),

      locationType:
        location.locationType,

      suitability,
    });
  }

  // ----------------------------------------------------------
  // SORT
  // ----------------------------------------------------------
  //
  // Primary:
  // Priority 1 → 2 → 3
  //
  // Secondary:
  // High suitability → Medium → Low
  //
  // ----------------------------------------------------------

  const suitabilityScore = {
    high: 1,
    medium: 2,
    low: 3,
  };

  recommendations.sort(
    (a, b) => {
      const priorityDifference =
        a.priority - b.priority;

      if (priorityDifference !== 0) {
        return priorityDifference;
      }

      return (
        suitabilityScore[a.suitability] -
        suitabilityScore[b.suitability]
      );
    }
  );

  return {
    season,

    crops: recommendations,

    total: recommendations.length,
  };
}