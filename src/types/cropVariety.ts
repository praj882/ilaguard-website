// src/types/cropVariety.ts

// ============================================================
// CROP VARIETY TYPES
// ============================================================

export type VarietySuitability =
  | "high"
  | "medium"
  | "low";

// ============================================================
// SOWING WINDOW OVERRIDE
// ============================================================

export type SowingWindowOverride = {
  /**
   * Region codes in "stateId:districtId" format.
   *
   * Example:
   * "01:05" = Bihar + district 05
   *
   * Empty array can be used for a wider state-level rule
   * depending on advisor logic.
   */
  regionCodes: string[];

  /**
   * Months in JavaScript-style 1–12 format.
   *
   * 1 = January
   * 2 = February
   * ...
   * 12 = December
   */
  months: number[];

  suitability: VarietySuitability;
};

// ============================================================
// VARIETY TYPE
// ============================================================

export type CropVarietyType =
  | "Variety"
  | "Hybrid"
  | "F1 Hybrid";

// ============================================================
// SOURCE
// ============================================================

export type CropVarietySource = {
  organization: string;
  title: string;
  url: string;

  /**
   * Broad source scope.
   *
   * Bihar   = Bihar-specific source
   * National = ICAR/IARI/IIHR/NHB etc. national source
   * Other   = Any other valid official source
   */
  scope: "Bihar" | "National" | "Other";
};

// ============================================================
// CROP VARIETY
// ============================================================

export type CropVariety = {
  /**
   * Unique ID for the variety.
   *
   * Example:
   * "tomato-arka-abha"
   */
  varietyId: string;

  /**
   * Crop ID from crops.ts
   *
   * Example:
   * "tomato"
   */
  cropId: string;

  /**
   * Variety name in English.
   */
  name: string;

  /**
   * Variety name in Hindi.
   */
  nameHindi?: string;

  /**
   * Variety / Hybrid / F1 Hybrid
   */
  type?: CropVarietyType;

  // ==========================================================
  // LOCATION
  // ==========================================================

  /**
   * Region codes where the variety has specific suitability.
   *
   * Format:
   * "stateId:districtId"
   *
   * Example:
   * ["01:05", "01:09"]
   */
  regionCodes?: string[];

  /**
   * Whether this variety is specifically recommended
   * for Bihar.
   */
  biharRecommended?: boolean;

  // ==========================================================
  // MONTH / SOWING WINDOW
  // ==========================================================

  /**
   * General starting month of the recommended window.
   *
   * 1 = January ... 12 = December
   */
  startMonth?: number;

  /**
   * General ending month of the recommended window.
   */
  endMonth?: number;

  /**
   * District/state-specific sowing month overrides.
   */
  sowingWindowsOverride?: SowingWindowOverride[];

  /**
   * Overall suitability level.
   */
  suitability?: VarietySuitability;

  /**
   * Explicit sowing months.
   *
   * Example:
   * [9, 10, 11]
   */
  sowingMonths?: number[];

  // ==========================================================
  // MATURITY
  // ==========================================================

  /**
   * Days required for crop maturity.
   */
  maturityDays?: {
    min?: number;
    max?: number;
  };

  /**
   * Days from transplanting/sowing to first harvest,
   * depending on the source.
   */
  firstHarvestDays?: {
    min?: number;
    max?: number;
  };

  // ==========================================================
  // YIELD
  // ==========================================================

  yield?: {
    min?: number;
    max?: number;

    /**
     * Yield unit as reported by the source.
     *
     * t/ha  = tonnes/hectare
     * q/ha  = quintal/hectare
     * q/acre = quintal/acre
     */
    unit: "t/ha" | "q/ha" | "q/acre";
  };

  // ==========================================================
  // FRUIT / PRODUCE CHARACTERISTICS
  // ==========================================================

  /**
   * Physical characteristics of the harvested produce.
   *
   * For vegetables such as cauliflower, "fruit" can contain
   * curd-related characteristics as used by the existing data.
   */
  fruit?: {
    color?: string;
    shape?: string;

    lengthCm?: number;
    minLengthCm?: number;
    maxLengthCm?: number;

    weightG?: number;
    minWeightG?: number;
    maxWeightG?: number;
  };

  // ==========================================================
  // RESISTANCE / TOLERANCE
  // ==========================================================

  /**
   * Diseases/pests for which the variety is reported
   * as resistant.
   */
  resistance?: string[];

  /**
   * Diseases/pests/conditions for which the variety is
   * reported as tolerant.
   */
  tolerance?: string[];

  // ==========================================================
  // NOTES
  // ==========================================================

  /**
   * Simple additional information about the variety.
   */
  notes?: string;

  // ==========================================================
  // SOURCE
  // ==========================================================

  source?: CropVarietySource;
};