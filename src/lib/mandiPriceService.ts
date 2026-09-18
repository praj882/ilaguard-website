// src/lib/mandiPriceService.ts

import {
  get,
  onValue,
  push,
  ref,
  set,
  update,
} from "firebase/database";

import { database } from "@/lib/firebase";

// ============================================================
// TYPES
// ============================================================

export type MandiPrice = {
  mandiId: string;
  cropId: string;

  min: number;
  modal: number;
  max: number;

  unit: string;

  // YYYY-MM-DD
  marketDate: string;

  // Market variety, when available.
  variety?: string;

  // Firebase timestamp.
  updatedAt: number;

  // Firebase Auth UID or system identifier.
  updatedBy: string;

  // Coordinator / DataGovIndia / AGMARKNET etc.
  source?: string;

  // True when a coordinator intentionally overrides
  // automated API data.
  manualOverride?: boolean;

  // ==========================================================
  // data.gov.in metadata
  // ==========================================================

  apiUpdatedAt?: number;

  apiResourceId?: string;

  apiState?: string;

  apiDistrict?: string;

  apiMarket?: string;

  apiCommodity?: string;

  apiVariety?: string;

  apiGrade?: string;
};

export type MandiPriceInput = {
  mandiId: string;
  cropId: string;

  min: number;
  modal: number;
  max: number;

  unit?: string;

  marketDate: string;

  variety?: string;

  updatedBy: string;

  source?: string;

  manualOverride?: boolean;
};

export type MandiPriceHistory =
  MandiPrice & {
    historyId: string;
  };

// ============================================================
// FIREBASE PATHS
// ============================================================

const MANDI_PRICES_PATH =
  "mandiPrices";

const MANDI_PRICE_HISTORY_PATH =
  "mandiPriceHistory";

// ============================================================
// HELPERS
// ============================================================

function getMandiPricePath(
  mandiId: string,
  cropId: string
): string {
  return `${MANDI_PRICES_PATH}/${mandiId}/${cropId}`;
}

function getMandiPriceHistoryPath(
  mandiId: string,
  cropId: string
): string {
  return `${MANDI_PRICE_HISTORY_PATH}/${mandiId}/${cropId}`;
}

// ============================================================
// VALIDATION HELPERS
// ============================================================

function validatePriceValues(
  min: number,
  modal: number,
  max: number
): void {
  if (
    !Number.isFinite(min) ||
    !Number.isFinite(modal) ||
    !Number.isFinite(max)
  ) {
    throw new Error(
      "Invalid mandi price values."
    );
  }

  if (
    min < 0 ||
    modal < 0 ||
    max < 0
  ) {
    throw new Error(
      "Mandi prices cannot be negative."
    );
  }

  if (
    min > modal ||
    modal > max
  ) {
    throw new Error(
      "Price must satisfy Min ≤ Modal ≤ Max."
    );
  }
}

// ============================================================
// GET SINGLE PRICE
// ============================================================

export async function getMandiPrice(
  mandiId: string,
  cropId: string
): Promise<MandiPrice | null> {
  const priceRef = ref(
    database,
    getMandiPricePath(
      mandiId,
      cropId
    )
  );

  const snapshot =
    await get(priceRef);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.val() as MandiPrice;
}

// ============================================================
// GET ALL PRICES
// ============================================================

export async function getAllMandiPrices(): Promise<
  Record<string, MandiPrice>
> {
  const pricesRef = ref(
    database,
    MANDI_PRICES_PATH
  );

  const snapshot =
    await get(pricesRef);

  if (!snapshot.exists()) {
    return {};
  }

  const data =
    snapshot.val() as Record<
      string,
      Record<string, MandiPrice>
    >;

  const flattened:
    Record<string, MandiPrice> = {};

  Object.entries(data).forEach(
    ([mandiId, crops]) => {
      if (!crops) {
        return;
      }

      Object.entries(crops).forEach(
        ([cropId, price]) => {
          flattened[
            `${mandiId}_${cropId}`
          ] = price;
        }
      );
    }
  );

  return flattened;
}

// ============================================================
// GET PRICES FOR MANDI
// ============================================================

export async function getMandiPrices(
  mandiId: string
): Promise<MandiPrice[]> {
  const mandiRef = ref(
    database,
    `${MANDI_PRICES_PATH}/${mandiId}`
  );

  const snapshot =
    await get(mandiRef);

  if (!snapshot.exists()) {
    return [];
  }

  const data =
    snapshot.val() as Record<
      string,
      MandiPrice
    >;

  return Object.values(data);
}

// ============================================================
// GET PRICES FOR CROP
// ============================================================

export async function getCropMandiPrices(
  cropId: string
): Promise<MandiPrice[]> {
  const allPrices =
    await getAllMandiPrices();

  return Object.values(
    allPrices
  ).filter(
    (price) =>
      price.cropId === cropId
  );
}

// ============================================================
// SAVE MANDI PRICE
// ============================================================

export async function saveMandiPrice(
  input: MandiPriceInput
): Promise<MandiPrice> {
  // ----------------------------------------------------------
  // Validation
  // ----------------------------------------------------------

  if (!input.mandiId) {
    throw new Error(
      "Mandi ID is required."
    );
  }

  if (!input.cropId) {
    throw new Error(
      "Crop ID is required."
    );
  }

  if (!input.marketDate) {
    throw new Error(
      "Market date is required."
    );
  }

  if (!input.updatedBy) {
    throw new Error(
      "Updated by user ID is required."
    );
  }

  validatePriceValues(
    input.min,
    input.modal,
    input.max
  );

  // ----------------------------------------------------------
  // Prepare values
  // ----------------------------------------------------------

  const now = Date.now();

  const cleanVariety =
    input.variety?.trim();

  const cleanSource =
    input.source?.trim();

  const mandiPrice: MandiPrice = {
    mandiId:
      input.mandiId,

    cropId:
      input.cropId,

    min:
      input.min,

    modal:
      input.modal,

    max:
      input.max,

    unit:
      input.unit?.trim() ||
      "quintal",

    marketDate:
      input.marketDate,

    updatedAt:
      now,

    updatedBy:
      input.updatedBy,

    ...(cleanVariety
      ? {
          variety:
            cleanVariety,
        }
      : {}),

    ...(cleanSource
      ? {
          source:
            cleanSource,
        }
      : {}),

    manualOverride:
      input.manualOverride ??
      false,
  };

  // ----------------------------------------------------------
  // Save current price
  // ----------------------------------------------------------

  const currentPriceRef =
    ref(
      database,
      getMandiPricePath(
        input.mandiId,
        input.cropId
      )
    );

  await set(
    currentPriceRef,
    mandiPrice
  );

  // ----------------------------------------------------------
  // Save history
  // ----------------------------------------------------------

  const historyParentRef =
    ref(
      database,
      getMandiPriceHistoryPath(
        input.mandiId,
        input.cropId
      )
    );

  const historyRef =
    push(historyParentRef);

  const historyId =
    historyRef.key;

  if (!historyId) {
    throw new Error(
      "Unable to create history ID."
    );
  }

  const historyData:
    MandiPriceHistory = {
    ...mandiPrice,
    historyId,
  };

  await set(
    historyRef,
    historyData
  );

  return mandiPrice;
}

// ============================================================
// UPDATE MANDI PRICE
// ============================================================

export async function updateMandiPrice(
  mandiId: string,
  cropId: string,
  updates: Partial<
    Omit<
      MandiPrice,
      "mandiId" | "cropId"
    >
  >
): Promise<void> {
  if (!mandiId) {
    throw new Error(
      "Mandi ID is required."
    );
  }

  if (!cropId) {
    throw new Error(
      "Crop ID is required."
    );
  }

  // ----------------------------------------------------------
  // Get existing record
  // ----------------------------------------------------------

  const priceRef =
    ref(
      database,
      getMandiPricePath(
        mandiId,
        cropId
      )
    );

  const snapshot =
    await get(priceRef);

  if (!snapshot.exists()) {
    throw new Error(
      "Mandi price does not exist. Use saveMandiPrice() for a new price."
    );
  }

  const existingPrice =
    snapshot.val() as MandiPrice;

  // ----------------------------------------------------------
  // Clean optional values
  // ----------------------------------------------------------

  const cleanVariety =
    updates.variety !== undefined
      ? updates.variety?.trim()
      : undefined;

  const cleanSource =
    updates.source !== undefined
      ? updates.source?.trim()
      : undefined;

  // ----------------------------------------------------------
  // Build updated record
  // ----------------------------------------------------------

  const now = Date.now();

  const updatedPrice: MandiPrice = {
    mandiId,

    cropId,

    min:
      updates.min ??
      existingPrice.min,

    modal:
      updates.modal ??
      existingPrice.modal,

    max:
      updates.max ??
      existingPrice.max,

    unit:
      updates.unit?.trim() ||
      existingPrice.unit ||
      "quintal",

    marketDate:
      updates.marketDate ??
      existingPrice.marketDate,

    updatedAt:
      now,

    updatedBy:
      updates.updatedBy ??
      existingPrice.updatedBy,

    // ========================================================
    // Variety
    // ========================================================

    ...(updates.variety !== undefined
      ? cleanVariety
        ? {
            variety:
              cleanVariety,
          }
        : {}
      : existingPrice.variety
        ? {
            variety:
              existingPrice.variety,
          }
        : {}),

    // ========================================================
    // Source
    // ========================================================

    ...(updates.source !== undefined
      ? cleanSource
        ? {
            source:
              cleanSource,
          }
        : {}
      : existingPrice.source
        ? {
            source:
              existingPrice.source,
          }
        : {}),

    // ========================================================
    // Manual override
    // ========================================================

    manualOverride:
      updates.manualOverride ??
      existingPrice.manualOverride ??
      false,

    // ========================================================
    // Preserve data.gov.in metadata
    // ========================================================

    ...(updates.apiUpdatedAt !==
    undefined
      ? {
          apiUpdatedAt:
            updates.apiUpdatedAt,
        }
      : existingPrice.apiUpdatedAt !==
          undefined
        ? {
            apiUpdatedAt:
              existingPrice.apiUpdatedAt,
          }
        : {}),

    ...(updates.apiResourceId !==
    undefined
      ? {
          apiResourceId:
            updates.apiResourceId,
        }
      : existingPrice.apiResourceId
        ? {
            apiResourceId:
              existingPrice.apiResourceId,
          }
        : {}),

    ...(updates.apiState !==
    undefined
      ? {
          apiState:
            updates.apiState,
        }
      : existingPrice.apiState
        ? {
            apiState:
              existingPrice.apiState,
          }
        : {}),

    ...(updates.apiDistrict !==
    undefined
      ? {
          apiDistrict:
            updates.apiDistrict,
        }
      : existingPrice.apiDistrict
        ? {
            apiDistrict:
              existingPrice.apiDistrict,
          }
        : {}),

    ...(updates.apiMarket !==
    undefined
      ? {
          apiMarket:
            updates.apiMarket,
        }
      : existingPrice.apiMarket
        ? {
            apiMarket:
              existingPrice.apiMarket,
          }
        : {}),

    ...(updates.apiCommodity !==
    undefined
      ? {
          apiCommodity:
            updates.apiCommodity,
        }
      : existingPrice.apiCommodity
        ? {
            apiCommodity:
              existingPrice.apiCommodity,
          }
        : {}),

    ...(updates.apiVariety !==
    undefined
      ? {
          apiVariety:
            updates.apiVariety,
        }
      : existingPrice.apiVariety
        ? {
            apiVariety:
              existingPrice.apiVariety,
          }
        : {}),

    ...(updates.apiGrade !==
    undefined
      ? {
          apiGrade:
            updates.apiGrade,
        }
      : existingPrice.apiGrade
        ? {
            apiGrade:
              existingPrice.apiGrade,
          }
        : {}),
  };

  // ----------------------------------------------------------
  // Validation
  // ----------------------------------------------------------

  if (
    !updatedPrice.marketDate
  ) {
    throw new Error(
      "Market date is required."
    );
  }

  if (
    !updatedPrice.updatedBy
  ) {
    throw new Error(
      "Updated by user ID is required."
    );
  }

  validatePriceValues(
    updatedPrice.min,
    updatedPrice.modal,
    updatedPrice.max
  );

  // ----------------------------------------------------------
  // Create history
  // ----------------------------------------------------------

  const historyParentRef =
    ref(
      database,
      getMandiPriceHistoryPath(
        mandiId,
        cropId
      )
    );

  const historyRef =
    push(historyParentRef);

  const historyId =
    historyRef.key;

  if (!historyId) {
    throw new Error(
      "Unable to create history ID."
    );
  }

  const historyData:
    MandiPriceHistory = {
    ...updatedPrice,
    historyId,
  };

  // ----------------------------------------------------------
  // Save current price
  // ----------------------------------------------------------

  await set(
    priceRef,
    updatedPrice
  );

  // ----------------------------------------------------------
  // Save history
  // ----------------------------------------------------------

  await set(
    historyRef,
    historyData
  );
}

// ============================================================
// REALTIME PRICE
// ============================================================

export function subscribeToMandiPrice(
  mandiId: string,
  cropId: string,
  callback: (
    price: MandiPrice | null
  ) => void
): () => void {
  const priceRef =
    ref(
      database,
      getMandiPricePath(
        mandiId,
        cropId
      )
    );

  return onValue(
    priceRef,
    (snapshot) => {
      if (!snapshot.exists()) {
        callback(null);
        return;
      }

      callback(
        snapshot.val() as MandiPrice
      );
    }
  );
}

// ============================================================
// GET HISTORY
// ============================================================

export async function getMandiPriceHistory(
  mandiId: string,
  cropId: string
): Promise<MandiPriceHistory[]> {
  const historyRef =
    ref(
      database,
      getMandiPriceHistoryPath(
        mandiId,
        cropId
      )
    );

  const snapshot =
    await get(historyRef);

  if (!snapshot.exists()) {
    return [];
  }

  const data =
    snapshot.val() as Record<
      string,
      Omit<
        MandiPriceHistory,
        "historyId"
      >
    >;

  const history:
    MandiPriceHistory[] =
    Object.entries(data).map(
      ([historyId, item]) => ({
        historyId,
        ...item,
      })
    );

  history.sort(
    (a, b) =>
      b.updatedAt -
      a.updatedAt
  );

  return history;
}