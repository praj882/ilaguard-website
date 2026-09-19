import {
  MANDI_API_MAPPINGS,
  CROP_API_MAPPINGS,
} from "@/lib/mandiApiMapping";

import {
  normalizeText,
  normalizeMarketDate,
  parsePrice,
} from "@/lib/mandiNormalizer";

import {
  normalizeDataGovMandiRecord,
} from "@/lib/mandiApi";

import type {
  DataGovMandiRecord,
} from "@/lib/mandiApi";

import { adminDatabase } from "@/lib/firebaseAdmin";

// ============================================================
// CONSTANTS
// ============================================================

const API_SOURCE = "data.gov.in";
const API_UPDATED_BY = "data.gov.in";

// ============================================================
// RESULT TYPES
// ============================================================

export type MandiApiSyncResult = {
  processed: number;
  matched: number;
  updated: number;
  skipped: number;
  historyWritten: number;
  errors: number;
  skippedMarkets: string[];
  skippedCommodities: string[];
};

type SyncOneRecordResult = {
  matched: boolean;
  updated: boolean;
  historyWritten: boolean;
  skipped: boolean;
  reason?: string;
};

// ============================================================
// FIND MANDI ID
// ============================================================

function findMandiId(
  market?: string,
  district?: string
): string | null {
  const normalizedMarket =
    normalizeText(market);

  const normalizedDistrict =
    normalizeText(district);

  if (!normalizedMarket) {
    return null;
  }

  for (const mapping of MANDI_API_MAPPINGS) {
    // --------------------------------------------------------
    // MARKET MATCH
    // --------------------------------------------------------

    const marketMatched =
      mapping.apiMarketNames.some(
        (name) =>
          normalizeText(name) ===
          normalizedMarket
      );

    if (!marketMatched) {
      continue;
    }

    // --------------------------------------------------------
    // DISTRICT MATCH
    // --------------------------------------------------------

    if (normalizedDistrict) {
      const validDistrictNames = [
        mapping.districtName,
        ...(mapping.apiDistrictNames ?? []),
      ];

      const districtMatched =
        validDistrictNames.some(
          (name) =>
            normalizeText(name) ===
            normalizedDistrict
        );

      if (!districtMatched) {
        continue;
      }
    }

    return mapping.mandiId;
  }

  return null;
}

// ============================================================
// FIND CROP ID
// ============================================================

function findCropId(
  commodity?: string
): string | null {
  const normalizedCommodity =
    normalizeText(commodity);

  if (!normalizedCommodity) {
    return null;
  }

  for (const mapping of CROP_API_MAPPINGS) {
    const commodityMatched =
      mapping.apiCommodityNames.some(
        (name) =>
          normalizeText(name) ===
          normalizedCommodity
      );

    if (commodityMatched) {
      return mapping.cropId;
    }
  }

  return null;
}

// ============================================================
// CREATE HISTORY ID
// ============================================================

function createHistoryId(
  marketDate: string,
  timestamp: number
): string {
  return `${marketDate}_${timestamp}`;
}

// ============================================================
// GET RECORD DATE
// ============================================================

function getRecordDate(
  record: DataGovMandiRecord
): string | null {
  const normalized =
    normalizeDataGovMandiRecord(record);

  return normalizeMarketDate(
    normalized.arrivalDate
  );
}

// ============================================================
// SELECT LATEST RECORDS
// ============================================================

function selectLatestRecords(
  records: DataGovMandiRecord[]
): DataGovMandiRecord[] {
  const selected =
    new Map<string, DataGovMandiRecord>();

  for (const record of records) {
    const normalized =
      normalizeDataGovMandiRecord(
        record
      );

    const mandiId =
      findMandiId(
        normalized.market,
        normalized.district
      );

    const cropId =
      findCropId(
        normalized.commodity
      );

    // Ignore records we cannot map.
    if (!mandiId || !cropId) {
      continue;
    }

    const marketDate =
      normalizeMarketDate(
        normalized.arrivalDate
      );

    if (!marketDate) {
      continue;
    }

    const key =
      `${mandiId}_${cropId}`;

    const existing =
      selected.get(key);

    // First record for this mandi/crop.
    if (!existing) {
      selected.set(
        key,
        record
      );
      continue;
    }

    const existingDate =
      getRecordDate(existing);

    // Newer market date wins.
    if (
      !existingDate ||
      marketDate > existingDate
    ) {
      selected.set(
        key,
        record
      );
      continue;
    }

    // Same date:
    // Prefer the record which contains a variety.
    if (
      marketDate === existingDate
    ) {
      const existingNormalized =
        normalizeDataGovMandiRecord(
          existing
        );

      const currentHasVariety =
        Boolean(
          normalized.variety?.trim()
        );

      const existingHasVariety =
        Boolean(
          existingNormalized.variety?.trim()
        );

      if (
        currentHasVariety &&
        !existingHasVariety
      ) {
        selected.set(
          key,
          record
        );
      }
    }
  }

  return Array.from(
    selected.values()
  );
}

// ============================================================
// SYNC ONE RECORD
// ============================================================

async function syncOneRecord(
  record: DataGovMandiRecord
): Promise<SyncOneRecordResult> {
  const normalized =
    normalizeDataGovMandiRecord(
      record
    );

  // ==========================================================
  // FIND MANDI
  // ==========================================================

  const mandiId =
    findMandiId(
      normalized.market,
      normalized.district
    );

  if (!mandiId) {
    return {
      matched: false,
      updated: false,
      historyWritten: false,
      skipped: true,
      reason:
        `Unknown mandi: ${
          normalized.market ||
          "Unknown"
        }`,
    };
  }

  // ==========================================================
  // FIND CROP
  // ==========================================================

  const cropId =
    findCropId(
      normalized.commodity
    );

  if (!cropId) {
    return {
      matched: false,
      updated: false,
      historyWritten: false,
      skipped: true,
      reason:
        `Unknown commodity: ${
          normalized.commodity ||
          "Unknown"
        }`,
    };
  }

  // ==========================================================
  // MARKET DATE
  // ==========================================================

  const marketDate =
    normalizeMarketDate(
      normalized.arrivalDate
    );

  if (!marketDate) {
    return {
      matched: false,
      updated: false,
      historyWritten: false,
      skipped: true,
      reason:
        `Invalid arrival date: ${
          normalized.arrivalDate ||
          "Unknown"
        }`,
    };
  }

  // ==========================================================
  // PARSE PRICES
  // ==========================================================

  const min =
    parsePrice(
      normalized.minPrice
    );

  const modal =
    parsePrice(
      normalized.modalPrice
    );

  const max =
    parsePrice(
      normalized.maxPrice
    );

  if (
    min === null ||
    modal === null ||
    max === null
  ) {
    return {
      matched: false,
      updated: false,
      historyWritten: false,
      skipped: true,
      reason:
        `Invalid prices for ${
          normalized.market ||
          "Unknown"
        } / ${
          normalized.commodity ||
          "Unknown"
        }`,
    };
  }

  // ==========================================================
  // VALIDATE PRICE ORDER
  // ==========================================================

  if (
    min < 0 ||
    modal < 0 ||
    max < 0 ||
    min > modal ||
    modal > max
  ) {
    return {
      matched: false,
      updated: false,
      historyWritten: false,
      skipped: true,
      reason:
        `Invalid price order for ${
          normalized.market ||
          "Unknown"
        } / ${
          normalized.commodity ||
          "Unknown"
        }`,
    };
  }

  // ==========================================================
  // FIREBASE PATH
  // ==========================================================

  const pricePath =
    `/mandiPrices/${mandiId}/${cropId}`;

  const priceRef =
    adminDatabase.ref(
      pricePath
    );

  // ==========================================================
  // READ EXISTING PRICE
  // ==========================================================

  const existingSnapshot =
    await priceRef.get();

  const existing =
    existingSnapshot.exists()
      ? existingSnapshot.val()
      : null;

  // ==========================================================
  // MANUAL OVERRIDE PROTECTION
  //
  // If Coordinator manually changed today's price,
  // data.gov.in must not overwrite it.
  //
  // Tomorrow's API price can replace today's record.
  // ==========================================================

  if (
    existing?.manualOverride === true &&
    existing?.marketDate === marketDate
  ) {
    console.log(
      `[Mandi Sync] Manual override protected: ${pricePath}`
    );

    return {
      matched: true,
      updated: false,
      historyWritten: false,
      skipped: true,
      reason:
        "Manual override for same market date",
    };
  }

  // ==========================================================
  // VARIETY
  // ==========================================================

  const variety =
    normalized.variety?.trim() || "";

  // ==========================================================
  // CURRENT ILAGUARD PRICE
  //
  // IMPORTANT:
  // This is the ONLY structure stored under
  // /mandiPrices/{mandiId}/{cropId}
  // ==========================================================

  const now = Date.now();

  const newPrice = {
    mandiId,
    cropId,

    min,
    modal,
    max,

    unit: "quintal",

    marketDate,

    ...(variety
      ? {
          variety,
        }
      : {}),

    source:
      API_SOURCE,

    updatedAt:
      now,

    updatedBy:
      API_UPDATED_BY,

    manualOverride:
      false,
  };

  // ==========================================================
  // CHECK PRICE CHANGE
  // ==========================================================

  const priceChanged =
    !existing ||
    existing.min !== min ||
    existing.modal !== modal ||
    existing.max !== max ||
    existing.marketDate !== marketDate ||
    (existing.variety ?? "") !== variety ||
    existing.source !== API_SOURCE;

  // ==========================================================
  // NO CHANGE
  // ==========================================================

  if (!priceChanged) {
    console.log(
      `[Mandi Sync] No change: ${pricePath}`
    );

    return {
      matched: true,
      updated: false,
      historyWritten: false,
      skipped: false,
    };
  }

  // ==========================================================
  // HISTORY
  // ==========================================================

  const historyId =
    createHistoryId(
      marketDate,
      now
    );

  const historyRef =
    adminDatabase.ref(
      `/mandiPriceHistory/${mandiId}/${cropId}/${historyId}`
    );

  await historyRef.set({
    ...newPrice,
    historyId,
  });

  // ==========================================================
  // CURRENT PRICE
  // ==========================================================

  await priceRef.set(
    newPrice
  );

  // ==========================================================
  // LOG
  // ==========================================================

  console.log(
    `[Mandi Sync] Updated ${pricePath}:`,
    {
      mandiId,
      cropId,
      market:
        normalized.market,
      commodity:
        normalized.commodity,
      variety:
        normalized.variety,
      marketDate,
      min,
      modal,
      max,
    }
  );

  return {
    matched: true,
    updated: true,
    historyWritten: true,
    skipped: false,
  };
}

// ============================================================
// MAIN SYNC FUNCTION
// ============================================================

export async function syncMandiRecords(
  records: DataGovMandiRecord[]
): Promise<MandiApiSyncResult> {
  const result: MandiApiSyncResult = {
    processed: 0,
    matched: 0,
    updated: 0,
    skipped: 0,
    historyWritten: 0,
    errors: 0,
    skippedMarkets: [],
    skippedCommodities: [],
  };

  // ==========================================================
  // SELECT LATEST API RECORDS
  // ==========================================================

  const selectedRecords =
    selectLatestRecords(
      records
    );

  console.log(
    `[Mandi Sync] API records received: ${records.length}`
  );

  console.log(
    `[Mandi Sync] Records selected for Firebase: ${selectedRecords.length}`
  );

  const skippedMarketSet =
    new Set<string>();

  const skippedCommoditySet =
    new Set<string>();

  // ==========================================================
  // PROCESS SELECTED RECORDS
  // ==========================================================

  for (
    const record of selectedRecords
  ) {
    result.processed++;

    try {
      const syncResult =
        await syncOneRecord(
          record
        );

      if (
        syncResult.matched
      ) {
        result.matched++;
      }

      if (
        syncResult.updated
      ) {
        result.updated++;
      }

      if (
        syncResult.historyWritten
      ) {
        result.historyWritten++;
      }

      if (
        syncResult.skipped
      ) {
        result.skipped++;

        const reason =
          syncResult.reason ||
          "";

        // ----------------------------------------------
        // Unknown mandi
        // ----------------------------------------------

        if (
          reason.startsWith(
            "Unknown mandi:"
          )
        ) {
          skippedMarketSet.add(
            record.market ??
              record.Market ??
              "Unknown"
          );
        }

        // ----------------------------------------------
        // Unknown commodity
        // ----------------------------------------------

        if (
          reason.startsWith(
            "Unknown commodity:"
          )
        ) {
          skippedCommoditySet.add(
            record.commodity ??
              record.Commodity ??
              "Unknown"
          );
        }
      }
    } catch (error) {
      result.errors++;

      console.error(
        "[Mandi Sync] Record failed:",
        {
          state:
            record.state ??
            record.State,

          district:
            record.district ??
            record.District,

          market:
            record.market ??
            record.Market,

          commodity:
            record.commodity ??
            record.Commodity,

          error,
        }
      );
    }
  }

  // ==========================================================
  // FINAL SKIPPED LISTS
  // ==========================================================

  result.skippedMarkets =
    Array.from(
      skippedMarketSet
    ).sort();

  result.skippedCommodities =
    Array.from(
      skippedCommoditySet
    ).sort();

  // ==========================================================
  // SUMMARY
  // ==========================================================

  console.log(
    "[Mandi Sync] Summary:",
    {
      apiRecords:
        records.length,

      selected:
        selectedRecords.length,

      processed:
        result.processed,

      matched:
        result.matched,

      updated:
        result.updated,

      skipped:
        result.skipped,

      historyWritten:
        result.historyWritten,

      errors:
        result.errors,

      skippedMarkets:
        result.skippedMarkets.length,

      skippedCommodities:
        result.skippedCommodities.length,
    }
  );

  return result;
}