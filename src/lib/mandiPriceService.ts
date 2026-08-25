// src/lib/mandiPriceService.ts

import {
  ref,
  get,
  set,
  update,
  onValue,
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

  updatedAt: string;
};

export type MandiPriceInput = {
  mandiId: string;
  cropId: string;

  min: number;
  modal: number;
  max: number;

  unit?: string;
  updatedAt?: string;
};

// ============================================================
// FIREBASE PATH
// ============================================================

const MANDI_PRICES_PATH = "mandiPrices";

// ============================================================
// CREATE FIREBASE PATH
// ============================================================

function getMandiPricePath(
  mandiId: string,
  cropId: string
): string {
  return `${MANDI_PRICES_PATH}/${mandiId}/${cropId}`;
}

// ============================================================
// GET SINGLE MANDI PRICE
// ============================================================

export async function getMandiPrice(
  mandiId: string,
  cropId: string
): Promise<MandiPrice | null> {
  try {
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
      return null;
    }

    const data =
      snapshot.val() as Omit<
        MandiPrice,
        "mandiId" | "cropId"
      >;

    return {
      mandiId,
      cropId,
      ...data,
    };
  } catch (error) {
    console.error(
      "Failed to fetch mandi price:",
      error
    );

    return null;
  }
}

// ============================================================
// GET ALL MANDI PRICES
// ============================================================

export async function getAllMandiPrices(): Promise<
  MandiPrice[]
> {
  try {
    const pricesRef = ref(
      database,
      MANDI_PRICES_PATH
    );

    const snapshot = await get(
      pricesRef
    );

    if (!snapshot.exists()) {
      return [];
    }

    const data =
      snapshot.val() as Record<
        string,
        Record<
          string,
          Omit<
            MandiPrice,
            "mandiId" | "cropId"
          >
        >
      >;

    const prices: MandiPrice[] = [];

    for (const mandiId of Object.keys(
      data
    )) {
      const mandiCrops =
        data[mandiId];

      for (const cropId of Object.keys(
        mandiCrops
      )) {
        prices.push({
          mandiId,
          cropId,
          ...mandiCrops[cropId],
        });
      }
    }

    return prices;
  } catch (error) {
    console.error(
      "Failed to fetch mandi prices:",
      error
    );

    return [];
  }
}

// ============================================================
// GET PRICES FOR A MANDI
// ============================================================

export async function getMandiPrices(
  mandiId: string
): Promise<MandiPrice[]> {
  try {
    const mandiRef = ref(
      database,
      `${MANDI_PRICES_PATH}/${mandiId}`
    );

    const snapshot = await get(
      mandiRef
    );

    if (!snapshot.exists()) {
      return [];
    }

    const data =
      snapshot.val() as Record<
        string,
        Omit<
          MandiPrice,
          "mandiId" | "cropId"
        >
      >;

    return Object.entries(data).map(
      ([cropId, price]) => ({
        mandiId,
        cropId,
        ...price,
      })
    );
  } catch (error) {
    console.error(
      "Failed to fetch mandi prices:",
      error
    );

    return [];
  }
}

// ============================================================
// GET PRICES FOR A CROP
// ============================================================

export async function getCropMandiPrices(
  cropId: string
): Promise<MandiPrice[]> {
  try {
    const prices =
      await getAllMandiPrices();

    return prices.filter(
      (price) =>
        price.cropId === cropId
    );
  } catch (error) {
    console.error(
      "Failed to fetch crop mandi prices:",
      error
    );

    return [];
  }
}

// ============================================================
// SAVE / CREATE MANDI PRICE
// ============================================================

export async function saveMandiPrice(
  input: MandiPriceInput
): Promise<boolean> {
  try {
    const price: Omit<
      MandiPrice,
      "mandiId" | "cropId"
    > = {
      min: input.min,
      modal: input.modal,
      max: input.max,

      unit:
        input.unit ??
        "quintal",

      updatedAt:
        input.updatedAt ??
        new Date()
          .toISOString()
          .split("T")[0],
    };

    const priceRef = ref(
      database,
      getMandiPricePath(
        input.mandiId,
        input.cropId
      )
    );

    await set(
      priceRef,
      price
    );

    return true;
  } catch (error) {
    console.error(
      "Failed to save mandi price:",
      error
    );

    return false;
  }
}

// ============================================================
// UPDATE MANDI PRICE
// ============================================================

export async function updateMandiPrice(
  mandiId: string,
  cropId: string,
  values: Partial<
    Pick<
      MandiPrice,
      | "min"
      | "modal"
      | "max"
      | "unit"
    >
  >
): Promise<boolean> {
  try {
    const priceRef = ref(
      database,
      getMandiPricePath(
        mandiId,
        cropId
      )
    );

    await update(
      priceRef,
      {
        ...values,

        updatedAt:
          new Date()
            .toISOString()
            .split("T")[0],
      }
    );

    return true;
  } catch (error) {
    console.error(
      "Failed to update mandi price:",
      error
    );

    return false;
  }
}

// ============================================================
// REAL-TIME LISTENER
// ============================================================

export function subscribeToMandiPrice(
  mandiId: string,
  cropId: string,
  callback: (
    price: MandiPrice | null
  ) => void
) {
  const priceRef = ref(
    database,
    getMandiPricePath(
      mandiId,
      cropId
    )
  );

  const unsubscribe =
    onValue(
      priceRef,
      (snapshot) => {
        if (!snapshot.exists()) {
          callback(null);
          return;
        }

        const data =
          snapshot.val() as Omit<
            MandiPrice,
            "mandiId" | "cropId"
          >;

        callback({
          mandiId,
          cropId,
          ...data,
        });
      },
      (error) => {
        console.error(
          "Mandi price listener error:",
          error
        );

        callback(null);
      }
    );

  return unsubscribe;
}