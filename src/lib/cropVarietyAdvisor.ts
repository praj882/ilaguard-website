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
   * Final suitability after applying
   * location-specific sowing override.
   */
  suitability: VarietySuitability;

  /**
   * Whether the variety rule is specific
   * to the selected district or state-wide.
   */
  locationType: VarietyLocationType;

  /**
   * Final priority after applying
   * default/override suitability.
   *
   * Priority 1 = Highly Suitable
   * Priority 2 = Suitable
   * Priority 3 = Conditional
   */
  priority: VarietyPriority;

  /**
   * Human-readable recommendation label.
   */
  recommendationLabel: string;
};

// ============================================================
// RESULT
// ============================================================

export type CropVarietyAdvisorResult = {
  cropId: string;

  varieties: CropVarietyRecommendation[];

  total: number;
};

// ============================================================
// SOWING RULE
// ============================================================

type ResolvedSowingRule = {
  months: number[];
  suitability: VarietySuitability;
  locationType: VarietyLocationType;
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

function isMonthAvailable(
  month: number,
  months?: number[]
): boolean {
  return months?.includes(month) ?? false;
}

// ============================================================
// STATE CODE
// ============================================================

function getStateCode(
  stateId: string | number
): string {
  return String(stateId).padStart(2, "0");
}

// ============================================================
// DISTRICT REGION CODE
// ============================================================

function getRegionCode(
  stateId: string | number,
  districtId: string | number
): string {
  return `${getStateCode(stateId)}:${String(
    districtId
  ).padStart(2, "0")}`;
}

// ============================================================
// GET VARIETY LOCATION TYPE
// ============================================================

function getVarietyLocationType(
  variety: CropVariety,
  regionCode: string
): VarietyLocationType | null {
  /*
   * If regionCodes are defined on the variety,
   * they represent locations where the variety
   * is specifically applicable.
   */
  if (
    variety.regionCodes &&
    variety.regionCodes.length > 0
  ) {
    /*
     * Exact district match.
     *
     * Example:
     * "01:30" = Bihar + Samastipur
     */
    if (
      variety.regionCodes.includes(
        regionCode
      )
    ) {
      return "district";
    }

    /*
     * No matching location.
     */
    return null;
  }

  /*
   * Empty regionCodes means the variety
   * has no location restriction.
   *
   * Therefore it can be considered
   * state/general applicable.
   */
  return "state";
}

// ============================================================
// RESOLVE SOWING RULE
// ============================================================

function resolveSowingRule(
  variety: CropVariety,
  stateCode: string,
  regionCode: string
): ResolvedSowingRule | null {
  // ==========================================================
  // 1. CHECK LOCATION-SPECIFIC OVERRIDES
  // ==========================================================

  const overrides =
    variety.sowingWindowsOverride ?? [];

  /*
   * ----------------------------------------------------------
   * 1A. Exact district override
   * ----------------------------------------------------------
   *
   * Example:
   *
   * regionCodes: ["01:30"]
   *
   * This should have highest priority.
   */

  const districtOverride =
    overrides.find((override) =>
      override.regionCodes.includes(
        regionCode
      )
    );

  if (districtOverride) {
    return {
      months:
        districtOverride.months,

      suitability:
        districtOverride.suitability,

      locationType:
        "district",
    };
  }

  /*
   * ----------------------------------------------------------
   * 1B. State-level override
   * ----------------------------------------------------------
   *
   * Example:
   *
   * regionCodes: ["02"]
   *
   * This applies to the entire state.
   */

  const stateOverride =
    overrides.find((override) =>
      override.regionCodes.includes(
        stateCode
      )
    );

  if (stateOverride) {
    return {
      months:
        stateOverride.months,

      suitability:
        stateOverride.suitability,

      locationType:
        "state",
    };
  }

  // ==========================================================
  // 2. NO OVERRIDE → USE DEFAULT
  // ==========================================================

  return {
	months: variety.sowingMonths ?? [],

	suitability: variety.suitability ?? "medium",

	locationType: "state",
  };
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

  // ==========================================================
  // REGION CODES
  // ==========================================================

  const stateCode =
    getStateCode(stateId);

  const regionCode =
    getRegionCode(
      stateId,
      districtId
    );

  // ==========================================================
  // RECOMMENDATIONS
  // ==========================================================

  const recommendations:
    CropVarietyRecommendation[] = [];

  // ==========================================================
  // PROCESS VARIETIES
  // ==========================================================

  for (const variety of CROP_VARIETIES) {
    // ========================================================
    // CROP CHECK
    // ========================================================

    if (
      variety.cropId !== cropId
    ) {
      continue;
    }

    // ========================================================
    // LOCATION CHECK
    // ========================================================

    const baseLocationType =
      getVarietyLocationType(
        variety,
        regionCode
      );

    /*
     * If the variety itself has specific
     * region restrictions and the selected
     * location doesn't match, don't recommend it.
     */
    if (!baseLocationType) {
      continue;
    }

    // ========================================================
    // RESOLVE SOWING RULE
    // ========================================================

    const sowingRule =
      resolveSowingRule(
        variety,
        stateCode,
        regionCode
      );

    if (!sowingRule) {
      continue;
    }

    // ========================================================
    // MONTH CHECK
    // ========================================================

    /*
     * IMPORTANT:
     *
     * If a location-specific override exists,
     * its months completely replace the default
     * sowingMonths for that location.
     *
     * Example:
     *
     * Default:
     * [6, 7, 8, 9, 10, 11]
     *
     * UP override:
     * [9, 10, 11]
     *
     * UP + August:
     * NOT recommended.
     */

    if (
      !isMonthAvailable(
        month,
        sowingRule.months
      )
    ) {
      continue;
    }

    // ========================================================
    // FINAL SUITABILITY
    // ========================================================

    const finalSuitability =
      sowingRule.suitability;

    // ========================================================
    // PRIORITY
    // ========================================================

    const priority =
      getPriority(
        finalSuitability
      );

    // ========================================================
    // LOCATION TYPE
    // ========================================================

    /*
     * If a district-specific override is used,
     * report district.
     *
     * Otherwise, use the variety's own
     * location specificity.
     */
    const locationType =
      sowingRule.locationType ===
      "district"
        ? "district"
        : baseLocationType;

    // ========================================================
    // ADD RECOMMENDATION
    // ========================================================

    recommendations.push({
      variety,

      suitability:
        finalSuitability,

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
      // ------------------------------------------------------
      // 1. PRIORITY
      // ------------------------------------------------------

      if (
        a.priority !==
        b.priority
      ) {
        return (
          a.priority -
          b.priority
        );
      }

      // ------------------------------------------------------
      // 2. LOCATION SPECIFICITY
      // ------------------------------------------------------

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

      // ------------------------------------------------------
      // 3. VARIETY NAME
      // ------------------------------------------------------

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
