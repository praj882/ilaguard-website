// src/lib/cropVarietyAdvisor.ts

import {
  CROP_VARIETIES,
  type CropVariety,
  type VarietySuitability,
} from "@/data/cropVarieties";

// ============================================================
// TYPES
// ============================================================

export type VarietyLocationType =
  | "district"
  | "state";

export type VarietyPriority = 1 | 2 | 3;

export type CropVarietyRecommendation = {
  variety: CropVariety;

  /**
   * Variety suitability from cropVarieties.ts.
   */
  suitability: VarietySuitability;

  /**
   * Whether the variety rule is specific
   * to the selected district or general/state-wide.
   */
  locationType: VarietyLocationType;

  /**
   * Final priority of the variety.
   *
   * Priority 1 = Highly Suitable
   * Priority 2 = Suitable
   * Priority 3 = Conditional
   */
  priority: VarietyPriority;

  /**
   * Human-readable label.
   */
  recommendationLabel: string;
};

export type CropVarietyAdvisorResult = {
  cropId: string;

  varieties: CropVarietyRecommendation[];

  total: number;
};

// ============================================================
// SUITABILITY → PRIORITY
// ============================================================

function getPriority(
  suitability: VarietySuitability
): VarietyPriority {
  switch (suitability) {
    case "high":
      return 1;

    case "medium":
      return 2;

    case "low":
      return 3;

    default:
      return 3;
  }
}

// ============================================================
// PRIORITY → LABEL
// ============================================================

function getRecommendationLabel(
  priority: VarietyPriority
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
// MONTH CHECK
// ============================================================

function isMonthInWindow(
  month: number,
  startMonth: number,
  endMonth: number
): boolean {
  /*
   * Normal window
   *
   * Example:
   * March → May
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
   * October → January
   *
   * Matches:
   * October
   * November
   * December
   * January
   */
  return (
    month >= startMonth ||
    month <= endMonth
  );
}

// ============================================================
// REGION CODE
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
// GET VARIETY LOCATION TYPE
// ============================================================

function getVarietyLocationType(
  variety: CropVariety,
  regionCode: string
): VarietyLocationType | null {
  /*
   * District-specific variety rule
   */
  if (
    variety.regionCodes &&
    variety.regionCodes.length > 0
  ) {
    if (
      variety.regionCodes.includes(
        regionCode
      )
    ) {
      return "district";
    }

    /*
     * This variety has specific regions,
     * but selected district isn't one of them.
     */
    return null;
  }

  /*
   * Empty regionCodes means
   * general/state-wide recommendation.
   */
  return "state";
}

// ============================================================
// GET RECOMMENDED VARIETIES
// ============================================================

export function getRecommendedVarieties(
  cropId: string,
  stateId: string | number,
  districtId: string | number,
  month: number
): CropVarietyAdvisorResult {
  // ==========================================================
  // INVALID MONTH
  // ==========================================================

  if (
    month < 1 ||
    month > 12
  ) {
    return {
      cropId,
      varieties: [],
      total: 0,
    };
  }

  const regionCode =
    getRegionCode(
      stateId,
      districtId
    );

  // ==========================================================
  // FIND VARIETIES
  // ==========================================================

  const recommendations: CropVarietyRecommendation[] =
    [];

  for (const variety of CROP_VARIETIES) {
    /*
     * Only process varieties belonging
     * to the selected crop.
     */
    if (
      variety.cropId !== cropId
    ) {
      continue;
    }

    // ========================================================
    // MONTH CHECK
    // ========================================================

    if (
      !isMonthInWindow(
        month,
        variety.startMonth,
        variety.endMonth
      )
    ) {
      continue;
    }

    // ========================================================
    // LOCATION CHECK
    // ========================================================

    const locationType =
      getVarietyLocationType(
        variety,
        regionCode
      );

    /*
     * Variety is not applicable
     * to selected location.
     */
    if (!locationType) {
      continue;
    }

    // ========================================================
    // PRIORITY
    // ========================================================

    const priority =
      getPriority(
        variety.suitability
      );

    // ========================================================
    // ADD RECOMMENDATION
    // ========================================================

    recommendations.push({
      variety,

      suitability:
        variety.suitability,

      locationType,

      priority,

      recommendationLabel:
        getRecommendationLabel(
          priority
        ),
    });
  }

  // ==========================================================
  // SORT
  // ==========================================================

  recommendations.sort(
    (a, b) => {
      /*
       * Priority first:
       *
       * P1
       * P2
       * P3
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
       * Prefer district-specific
       * varieties over general varieties.
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

      /*
       * Stable alphabetical fallback.
       */
      return a.variety.name.localeCompare(
        b.variety.name
      );
    }
  );

  // ==========================================================
  // RESULT
  // ==========================================================

  return {
    cropId,

    varieties:
      recommendations,

    total:
      recommendations.length,
  };
}