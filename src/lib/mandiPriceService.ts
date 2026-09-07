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

  // Actual market date for which price is reported.
  // Format: YYYY-MM-DD
  marketDate: string;

  // Actual Firebase update timestamp.
  updatedAt: number;

  // Firebase Auth UID of coordinator/admin.
  updatedBy: string;

  // Optional source of price.
  // Example: Coordinator, AGMARKNET, Mandi Board, etc.
  source?: string;
};

export type MandiPriceInput = {
  mandiId: string;
  cropId: string;

  min: number;
  modal: number;
  max: number;

  unit?: string;

  marketDate: string;

  updatedBy: string;

  source?: string;
};

export type MandiPriceHistory = MandiPrice & {
  historyId: string;
};

// ============================================================
// FIREBASE PATHS
// ============================================================

const MANDI_PRICES_PATH = "mandiPrices";
const MANDI_PRICE_HISTORY_PATH = "mandiPriceHistory";

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
// GET SINGLE MANDI PRICE
// ============================================================

export async function getMandiPrice(
  mandiId: string,
  cropId: string
): Promise<MandiPrice | null> {
  const priceRef = ref(
    database,
    getMandiPricePath(mandiId, cropId)
  );

  const snapshot = await get(priceRef);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.val() as MandiPrice;
}

// ============================================================
// GET ALL MANDI PRICES
// ============================================================

export async function getAllMandiPrices(): Promise<
  Record<string, MandiPrice>
> {
  const pricesRef = ref(
    database,
    MANDI_PRICES_PATH
  );

  const snapshot = await get(pricesRef);

  if (!snapshot.exists()) {
    return {};
  }

  const data =
    snapshot.val() as Record<
      string,
      Record<string, MandiPrice>
    >;

  const flattened: Record<string, MandiPrice> = {};

  Object.entries(data).forEach(
    ([mandiId, crops]) => {
      if (!crops) return;

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
// GET ALL PRICES FOR ONE MANDI
// ============================================================

export async function getMandiPrices(
  mandiId: string
): Promise<MandiPrice[]> {
  const mandiRef = ref(
    database,
    `${MANDI_PRICES_PATH}/${mandiId}`
  );

  const snapshot = await get(mandiRef);

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
// GET ALL PRICES FOR ONE CROP
// ============================================================

export async function getCropMandiPrices(
  cropId: string
): Promise<MandiPrice[]> {
  const allPrices =
    await getAllMandiPrices();

  return Object.values(allPrices).filter(
    (price) => price.cropId === cropId
  );
}

// ============================================================
// SAVE MANDI PRICE
// ============================================================
//
// This function:
// 1. Updates current mandi price.
// 2. Creates a history record.
//
// Firebase:
//
// mandiPrices
//   └── mandiId
//        └── cropId
//             ├── min
//             ├── modal
//             ├── max
//             ├── unit
//             ├── marketDate
//             ├── updatedAt
//             ├── updatedBy
//             └── source
//
// mandiPriceHistory
//   └── mandiId
//        └── cropId
//             └── historyId
//                  ├── min
//                  ├── modal
//                  ├── max
//                  ├── unit
//                  ├── marketDate
//                  ├── updatedAt
//                  ├── updatedBy
//                  └── source
//
// ============================================================

export async function saveMandiPrice(
  input: MandiPriceInput
): Promise<MandiPrice> {
  // ----------------------------------------------------------
  // Validation
  // ----------------------------------------------------------

  if (!input.mandiId) {
    throw new Error("Mandi ID is required.");
  }

  if (!input.cropId) {
    throw new Error("Crop ID is required.");
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

  if (
    !Number.isFinite(input.min) ||
    !Number.isFinite(input.modal) ||
    !Number.isFinite(input.max)
  ) {
    throw new Error(
      "Invalid mandi price values."
    );
  }

  if (
    input.min < 0 ||
    input.modal < 0 ||
    input.max < 0
  ) {
    throw new Error(
      "Mandi prices cannot be negative."
    );
  }

  if (
    input.min > input.modal ||
    input.modal > input.max
  ) {
    throw new Error(
      "Price must satisfy Min ≤ Modal ≤ Max."
    );
  }

  // ----------------------------------------------------------
  // Prepare current price
  // ----------------------------------------------------------

  const now = Date.now();

  const mandiPrice: MandiPrice = {
    mandiId: input.mandiId,
    cropId: input.cropId,

    min: input.min,
    modal: input.modal,
    max: input.max,

    unit: input.unit ?? "quintal",

    marketDate: input.marketDate,

    updatedAt: now,

    updatedBy: input.updatedBy,

    ...(input.source
      ? { source: input.source }
      : {}),
  };

  // ----------------------------------------------------------
  // Save current price
  // ----------------------------------------------------------

  const currentPriceRef = ref(
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

  const historyParentRef = ref(
    database,
    getMandiPriceHistoryPath(
      input.mandiId,
      input.cropId
    )
  );

  const historyRef = push(
    historyParentRef
  );

  const historyId =
    historyRef.key;

  if (!historyId) {
    throw new Error(
      "Unable to create history ID."
    );
  }

  const historyData: MandiPriceHistory = {
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
//
// Updates current price AND creates a complete history record.
//
// The existing price is first loaded and merged with the
// supplied updates so that the history record always contains
// the complete mandi price.
//
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
  // ----------------------------------------------------------
  // Validation
  // ----------------------------------------------------------

  if (!mandiId) {
    throw new Error("Mandi ID is required.");
  }

  if (!cropId) {
    throw new Error("Crop ID is required.");
  }

  // ----------------------------------------------------------
  // Get existing price
  // ----------------------------------------------------------

  const priceRef = ref(
    database,
    getMandiPricePath(
      mandiId,
      cropId
    )
  );

  const snapshot = await get(
    priceRef
  );

  if (!snapshot.exists()) {
    throw new Error(
      "Mandi price does not exist. Use saveMandiPrice() for a new price."
    );
  }

  const existingPrice =
    snapshot.val() as MandiPrice;

  // ----------------------------------------------------------
  // Prepare complete updated price
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
      updates.unit ??
      existingPrice.unit ??
      "quintal",

    marketDate:
      updates.marketDate ??
      existingPrice.marketDate,

    updatedAt: now,

    updatedBy:
      updates.updatedBy ??
      existingPrice.updatedBy,

    ...(updates.source !== undefined
      ? updates.source
        ? { source: updates.source }
        : {}
      : existingPrice.source
        ? { source: existingPrice.source }
        : {}),
  };

  // ----------------------------------------------------------
  // Validate complete updated price
  // ----------------------------------------------------------

  if (!updatedPrice.marketDate) {
    throw new Error(
      "Market date is required."
    );
  }

  if (!updatedPrice.updatedBy) {
    throw new Error(
      "Updated by user ID is required."
    );
  }

  if (
    !Number.isFinite(updatedPrice.min) ||
    !Number.isFinite(updatedPrice.modal) ||
    !Number.isFinite(updatedPrice.max)
  ) {
    throw new Error(
      "Invalid mandi price values."
    );
  }

  if (
    updatedPrice.min < 0 ||
    updatedPrice.modal < 0 ||
    updatedPrice.max < 0
  ) {
    throw new Error(
      "Mandi prices cannot be negative."
    );
  }

  if (
    updatedPrice.min >
      updatedPrice.modal ||
    updatedPrice.modal >
      updatedPrice.max
  ) {
    throw new Error(
      "Price must satisfy Min ≤ Modal ≤ Max."
    );
  }

  // ----------------------------------------------------------
  // Create history reference
  // ----------------------------------------------------------

  const historyParentRef = ref(
    database,
    getMandiPriceHistoryPath(
      mandiId,
      cropId
    )
  );

  const historyRef = push(
    historyParentRef
  );

  const historyId =
    historyRef.key;

  if (!historyId) {
    throw new Error(
      "Unable to create history ID."
    );
  }

  const historyData: MandiPriceHistory = {
    ...updatedPrice,
    historyId,
  };

  // ----------------------------------------------------------
  // Save current + history
  // ----------------------------------------------------------

  await update(
    priceRef,
    updatedPrice
  );

  await set(
    historyRef,
    historyData
  );
}

// ============================================================
// REALTIME SINGLE PRICE
// ============================================================

export function subscribeToMandiPrice(
  mandiId: string,
  cropId: string,
  callback: (
    price: MandiPrice | null
  ) => void
): () => void {
  const priceRef = ref(
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
// GET MANDI PRICE HISTORY
// ============================================================

export async function getMandiPriceHistory(
  mandiId: string,
  cropId: string
): Promise<MandiPriceHistory[]> {
  const historyRef = ref(
    database,
    getMandiPriceHistoryPath(
      mandiId,
      cropId
    )
  );

  const snapshot = await get(
    historyRef
  );

  if (!snapshot.exists()) {
    return [];
  }

  const data =
    snapshot.val() as Record<
      string,
      Omit<MandiPriceHistory, "historyId">
    >;

  const history: MandiPriceHistory[] =
    Object.entries(data).map(
      ([historyId, item]) => ({
        historyId,
        ...item,
      })
    );

  // Newest first.
  history.sort(
    (a, b) =>
      b.updatedAt - a.updatedAt
  );

  return history;
}