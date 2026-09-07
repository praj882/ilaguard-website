// src/components/MandiPriceCard.tsx

"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { STATES } from "@/data/states";
import { DISTRICTS } from "@/data/districts";
import { CROPS } from "@/data/crops";
import { MANDIS } from "@/data/mandis";

import {
  subscribeToMandiPrice,
  type MandiPrice,
} from "@/lib/mandiPriceService";

// ============================================================
// TYPES
// ============================================================

type CropCategory =
  | "Vegetable"
  | "Cereal"
  | "Pulse"
  | "Oilseed"
  | "Fruit";

// ============================================================
// CROP CATEGORIES
// ============================================================

const CROP_CATEGORIES: {
  id: CropCategory;
  name: string;
  nameHindi: string;
  icon: string;
}[] = [
  {
    id: "Vegetable",
    name: "Vegetables",
    nameHindi: "सब्जियाँ",
    icon: "🥦",
  },
  {
    id: "Cereal",
    name: "Cereals",
    nameHindi: "अनाज",
    icon: "🌾",
  },
  {
    id: "Pulse",
    name: "Pulses",
    nameHindi: "दलहन",
    icon: "🌱",
  },
  {
    id: "Oilseed",
    name: "Oilseeds",
    nameHindi: "तिलहन",
    icon: "🌻",
  },
  {
    id: "Fruit",
    name: "Fruits",
    nameHindi: "फल",
    icon: "🍎",
  },
];

// ============================================================
// COMPONENT
// ============================================================

export default function MandiPriceCard() {
  // ==========================================================
  // LOCATION / CROP SELECTION
  // ==========================================================

  const [mandiStateId, setMandiStateId] =
    useState("");

  const [mandiDistrictId, setMandiDistrictId] =
    useState("");

  const [mandiId, setMandiId] =
    useState("");

  const [cropCategory, setCropCategory] =
    useState<CropCategory | "">("");

  const [cropId, setCropId] =
    useState("");

  const [showMandiPrice, setShowMandiPrice] =
    useState(false);

  // ==========================================================
  // FIREBASE PRICE STATE
  // ==========================================================

  const [mandiPrice, setMandiPrice] =
    useState<MandiPrice | null>(null);

  const [priceLoading, setPriceLoading] =
    useState(false);

  const [priceError, setPriceError] =
    useState(false);

  // ==========================================================
  // DISTRICTS FOR SELECTED STATE
  // ==========================================================

  const mandiDistricts = useMemo(() => {
    if (!mandiStateId) {
      return [];
    }

    return DISTRICTS.filter(
      (district) =>
        String(district.stateId) ===
        mandiStateId
    );
  }, [mandiStateId]);

  // ==========================================================
  // MANDIS FOR SELECTED DISTRICT
  // ==========================================================

  const filteredMandis = useMemo(() => {
    if (!mandiDistrictId) {
      return [];
    }

    const selectedDistrict =
      DISTRICTS.find(
        (district) =>
          String(district.id) ===
          mandiDistrictId
      );

    if (!selectedDistrict) {
      return [];
    }

    return MANDIS.filter(
      (mandi) =>
        mandi.stateName === "Bihar" &&
        mandi.districtName ===
          selectedDistrict.name
    );
  }, [mandiDistrictId]);

  // ==========================================================
  // CROPS FOR SELECTED CATEGORY
  // ==========================================================

  const filteredMandiCrops = useMemo(() => {
    if (!cropCategory) {
      return [];
    }

    return CROPS.filter(
      (crop) =>
        crop.category === cropCategory
    );
  }, [cropCategory]);

  // ==========================================================
  // SELECTED MANDI
  // ==========================================================

  const selectedMandi =
    MANDIS.find(
      (mandi) =>
        mandi.id === mandiId
    ) ?? null;

  // ==========================================================
  // SELECTED CROP
  // ==========================================================

  const selectedMandiCrop =
    CROPS.find(
      (crop) =>
        crop.id === cropId
    ) ?? null;

  // ==========================================================
  // REALTIME FIREBASE PRICE
  // ==========================================================

  useEffect(() => {
    if (!mandiId || !cropId) {
      setMandiPrice(null);
      setPriceLoading(false);
      setPriceError(false);

      return;
    }

    setPriceLoading(true);
    setPriceError(false);
    setMandiPrice(null);

    const unsubscribe =
      subscribeToMandiPrice(
        mandiId,
        cropId,
        (price) => {
          setMandiPrice(price);
          setPriceLoading(false);

          if (price === null) {
            setPriceError(false);
          }
        }
      );

    return () => {
      unsubscribe();
    };
  }, [
    mandiId,
    cropId,
  ]);

  // ==========================================================
  // HANDLERS
  // ==========================================================

  function handleMandiStateChange(
    value: string
  ) {
    setMandiStateId(value);

    setMandiDistrictId("");
    setMandiId("");

    setCropCategory("");
    setCropId("");

    setMandiPrice(null);
    setShowMandiPrice(false);
    setPriceLoading(false);
    setPriceError(false);
  }

  // ----------------------------------------------------------

  function handleMandiDistrictChange(
    value: string
  ) {
    setMandiDistrictId(value);

    setMandiId("");

    setMandiPrice(null);
    setShowMandiPrice(false);
    setPriceLoading(false);
    setPriceError(false);
  }

  // ----------------------------------------------------------

  function handleMandiChange(
    value: string
  ) {
    setMandiId(value);

    setMandiPrice(null);
    setShowMandiPrice(false);
    setPriceLoading(false);
    setPriceError(false);
  }

  // ----------------------------------------------------------

  function handleCropCategoryChange(
    value: string
  ) {
    setCropCategory(
      value as CropCategory | ""
    );

    setCropId("");

    setMandiPrice(null);
    setShowMandiPrice(false);
    setPriceLoading(false);
    setPriceError(false);
  }

  // ----------------------------------------------------------

  function handleCropChange(
    value: string
  ) {
    setCropId(value);

    setMandiPrice(null);
    setShowMandiPrice(false);
    setPriceLoading(false);
    setPriceError(false);
  }

  // ==========================================================
  // CHECK PRICE
  // ==========================================================

  function handleCheckMandiPrice() {
    if (
      !mandiStateId ||
      !mandiDistrictId ||
      !mandiId ||
      !cropCategory ||
      !cropId
    ) {
      return;
    }

    setPriceError(false);
    setShowMandiPrice(true);
  }

  // ==========================================================
  // FORMAT PRICE
  // ==========================================================

  function formatPrice(
    value: number
  ) {
    return Number(value).toLocaleString(
      "en-IN"
    );
  }

  // ==========================================================
  // FORMAT MARKET DATE
  // ==========================================================

  function formatMarketDate(
    value: string
  ) {
    if (!value) {
      return "Not available";
    }

    const date = new Date(
      `${value}T00:00:00`
    );

    if (
      Number.isNaN(
        date.getTime()
      )
    ) {
      return value;
    }

    return date.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  }

  // ==========================================================
  // FORMAT UPDATED TIMESTAMP
  // ==========================================================

  function formatUpdatedAt(timestamp?: number): string {
	if (!timestamp) return "—";

	return new Date(timestamp).toLocaleString("en-IN", {
		day: "2-digit",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});
  }

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <div className="rounded-3xl border border-amber-100 bg-white p-4 shadow-xl sm:p-6 lg:p-8">
      {/* ======================================================
          HEADER
      ====================================================== */}

      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
            💰
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Check Mandi Price
            </h3>

            <p className="text-sm text-gray-500">
              Know the market before you sell
            </p>
          </div>
        </div>

        {/* ====================================================
            INFORMATION
        ==================================================== */}

        <div className="mt-6 rounded-xl bg-amber-50 p-4">
          <p className="text-sm leading-relaxed text-amber-800">
            अपने स्थानीय मंडी और फसल का चयन
            करें और उपलब्ध नवीनतम बाजार भाव
            देखें।
          </p>
        </div>

        {/* ====================================================
            FORM
        ==================================================== */}

        <div className="mt-6 space-y-4">
          {/* ==================================================
              STATE
          ================================================== */}

          <div>
            <label
              htmlFor="mandi-state"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              State
            </label>

            <select
              id="mandi-state"
              value={mandiStateId}
              onChange={(e) =>
                handleMandiStateChange(
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            >
              <option value="">
                Select State
              </option>

              {STATES.map(
                (state) => (
                  <option
                    key={state.id}
                    value={state.id}
                    disabled={
                      !state.supported
                    }
                  >
                    {state.name} -{" "}
                    {state.nameHindi}

                    {!state.supported
                      ? " (Coming Soon)"
                      : ""}
                  </option>
                )
              )}
            </select>
          </div>

          {/* ==================================================
              DISTRICT
          ================================================== */}

          <div>
            <label
              htmlFor="mandi-district"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              District
            </label>

            <select
              id="mandi-district"
              value={
                mandiDistrictId
              }
              onChange={(e) =>
                handleMandiDistrictChange(
                  e.target.value
                )
              }
              disabled={
                !mandiStateId
              }
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition disabled:cursor-not-allowed disabled:bg-gray-100 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            >
              <option value="">
                {mandiStateId
                  ? "Select District"
                  : "Select State First"}
              </option>

              {mandiDistricts.map(
                (district) => (
                  <option
                    key={district.id}
                    value={district.id}
                  >
                    {district.name} -{" "}
                    {
                      district.nameHindi
                    }
                  </option>
                )
              )}
            </select>
          </div>

          {/* ==================================================
              MANDI
          ================================================== */}

          <div>
            <label
              htmlFor="mandi"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Local Mandi
            </label>

            <select
              id="mandi"
              value={mandiId}
              onChange={(e) =>
                handleMandiChange(
                  e.target.value
                )
              }
              disabled={
                !mandiDistrictId
              }
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition disabled:cursor-not-allowed disabled:bg-gray-100 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            >
              <option value="">
                {mandiDistrictId
                  ? "Select Mandi"
                  : "Select District First"}
              </option>

              {filteredMandis.map(
                (mandi) => (
                  <option
                    key={mandi.id}
                    value={mandi.id}
                  >
                    {mandi.name}
                  </option>
                )
              )}
            </select>
          </div>

          {/* ==================================================
              CATEGORY
          ================================================== */}

          <div>
            <label
              htmlFor="crop-category"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Crop Category
            </label>

            <select
              id="crop-category"
              value={
                cropCategory
              }
              onChange={(e) =>
                handleCropCategoryChange(
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            >
              <option value="">
                Select Crop Category
              </option>

              {CROP_CATEGORIES.map(
                (category) => (
                  <option
                    key={category.id}
                    value={category.id}
                  >
                    {category.icon}{" "}
                    {category.name} -{" "}
                    {
                      category.nameHindi
                    }
                  </option>
                )
              )}
            </select>
          </div>

          {/* ==================================================
              CROP
          ================================================== */}

          <div>
            <label
              htmlFor="mandi-crop"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Crop
            </label>

            <select
              id="mandi-crop"
              value={cropId}
              onChange={(e) =>
                handleCropChange(
                  e.target.value
                )
              }
              disabled={
                !cropCategory
              }
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition disabled:cursor-not-allowed disabled:bg-gray-100 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            >
              <option value="">
                {cropCategory
                  ? "Select Crop"
                  : "Select Category First"}
              </option>

              {filteredMandiCrops.map(
                (crop) => (
                  <option
                    key={crop.id}
                    value={crop.id}
                  >
                    {crop.icon}{" "}
                    {crop.name} —{" "}
                    {
                      crop.nameHindi
                    }
                  </option>
                )
              )}
            </select>
          </div>

          {/* ==================================================
              BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={
              handleCheckMandiPrice
            }
            disabled={
              !mandiStateId ||
              !mandiDistrictId ||
              !mandiId ||
              !cropCategory ||
              !cropId
            }
            className="w-full rounded-xl bg-amber-600 px-6 py-4 font-semibold text-white transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            📊 Check Mandi Price
          </button>
        </div>

        {/* ====================================================
            RESULT
        ==================================================== */}

        {showMandiPrice && (
          <div className="mt-6">
            {/* ==================================================
                LOADING
            ================================================== */}

            {priceLoading && (
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6 text-center">
                <div className="text-3xl">
                  ⏳
                </div>

                <p className="mt-3 font-semibold text-gray-800">
                  Loading latest mandi price...
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Fetching price from
                  Firebase
                </p>
              </div>
            )}

            {/* ==================================================
                ERROR
            ================================================== */}

            {!priceLoading &&
              priceError && (
                <div className="rounded-2xl border border-red-100 bg-red-50 p-5 text-center">
                  <div className="text-3xl">
                    ⚠️
                  </div>

                  <p className="mt-3 font-semibold text-red-800">
                    Unable to load price data
                  </p>

                  <p className="mt-1 text-sm text-red-600">
                    Please try again later.
                  </p>
                </div>
              )}

            {/* ==================================================
                PRICE AVAILABLE
            ================================================== */}

            {!priceLoading &&
              !priceError &&
              mandiPrice && (
                <div className="rounded-2xl border border-green-100 bg-gray-50 p-5">
                  {/* Header */}

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm text-gray-500">
                        Current Market Price
                      </p>

                      <h4 className="mt-1 text-lg font-bold text-gray-900">
                        {
                          selectedMandiCrop?.name
                        }
                      </h4>

                      <p className="text-sm text-gray-500">
                        {
                          selectedMandiCrop?.nameHindi
                        }
                      </p>

                      <p className="mt-1 text-sm font-medium text-gray-700">
                        📍{" "}
                        {
                          selectedMandi?.name
                        }
                      </p>
                    </div>

                    {/* Modal Price */}

                    <div className="rounded-xl bg-green-100 px-3 py-2 text-right">
                      <p className="text-xs font-medium text-green-700">
                        Modal Price
                      </p>

                      <p className="text-lg font-bold text-green-800">
                        ₹
                        {formatPrice(
                          mandiPrice.modal
                        )}
                      </p>

                      <p className="text-xs text-green-600">
                        /{" "}
                        {
                          mandiPrice.unit
                        }
                      </p>
                    </div>
                  </div>

                  {/* =================================================
                      MIN / MODAL / MAX
                  ================================================= */}

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {/* Minimum */}

                    <div className="rounded-xl bg-white p-3 text-center">
                      <p className="text-xs text-gray-500">
                        Minimum
                      </p>

                      <p className="mt-1 font-bold text-gray-800">
                        ₹
                        {formatPrice(
                          mandiPrice.min
                        )}
                      </p>
                    </div>

                    {/* Modal */}

                    <div className="rounded-xl bg-green-50 p-3 text-center">
                      <p className="text-xs text-green-700">
                        Modal
                      </p>

                      <p className="mt-1 font-bold text-green-800">
                        ₹
                        {formatPrice(
                          mandiPrice.modal
                        )}
                      </p>
                    </div>

                    {/* Maximum */}

                    <div className="rounded-xl bg-white p-3 text-center">
                      <p className="text-xs text-gray-500">
                        Maximum
                      </p>

                      <p className="mt-1 font-bold text-gray-800">
                        ₹
                        {formatPrice(
                          mandiPrice.max
                        )}
                      </p>
                    </div>
                  </div>

                  {/* =================================================
                      MARKET DATE
                  ================================================= */}

                  <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs text-gray-500">
                        Market Date
                      </span>

                      <span className="text-sm font-semibold text-gray-800">
                        {formatMarketDate(
                          mandiPrice.marketDate
                        )}
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      SOURCE + UPDATED
                  ================================================= */}

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs text-gray-400">
                        Last updated
                      </p>

                      <p className="mt-0.5 text-xs font-medium text-gray-600">
                        {formatUpdatedAt(
                          mandiPrice.updatedAt
                        )}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {mandiPrice.source && (
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                          Source:{" "}
                          {
                            mandiPrice.source
                          }
                        </span>
                      )}

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                        Live
                      </span>
                    </div>
                  </div>
                </div>
              )}

            {/* ==================================================
                NO PRICE DATA
            ================================================== */}

            {!priceLoading &&
              !priceError &&
              !mandiPrice && (
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center">
                  <div className="text-3xl">
                    📊
                  </div>

                  <p className="mt-3 font-semibold text-gray-800">
                    Price data not available
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    We don't currently have
                    price data for this mandi
                    and crop.
                  </p>
                </div>
              )}
          </div>
        )}

        {/* ====================================================
            DISCLAIMER
        ==================================================== */}

        <div className="mt-5 rounded-xl bg-gray-50 p-3">
          <p className="text-xs leading-relaxed text-gray-500">
            ℹ️ Mandi prices can change daily.
            Always verify the latest local
            market price before making a
            selling decision.
          </p>
        </div>
      </div>
    </div>
  );
}