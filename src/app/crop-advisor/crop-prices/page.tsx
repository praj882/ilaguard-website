"use client";

import { useEffect, useMemo, useState } from "react";

import { STATES } from "@/data/states";
import { DISTRICTS } from "@/data/districts";
import { CROPS } from "@/data/crops";
import { MANDIS } from "@/data/mandis";

import {
getMandiPrices,
type MandiPrice,
} from "@/lib/mandiPriceService";

export default function MandiPriceCard() {
const [stateId, setStateId] = useState("");
const [districtId, setDistrictId] = useState("");
const [mandiId, setMandiId] = useState("");

const [prices, setPrices] = useState<MandiPrice[]>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

// ==========================================================
// DISTRICTS FOR SELECTED STATE
// ==========================================================

const districts = useMemo(() => {
if (!stateId) {
return [];
}

return DISTRICTS.filter(
  (district) => String(district.stateId) === stateId
);

}, [stateId]);

// ==========================================================
// SELECTED DISTRICT
// ==========================================================

const selectedDistrict = useMemo(() => {
return DISTRICTS.find(
(district) => String(district.id) === districtId
);
}, [districtId]);

// ==========================================================
// MANDIS FOR SELECTED DISTRICT
// ==========================================================

const filteredMandis = useMemo(() => {
if (!selectedDistrict) {
return [];
}

const selectedState = STATES.find(
  (state) => String(state.id) === stateId
);

if (!selectedState) {
  return [];
}

return MANDIS.filter(
  (mandi) =>
    mandi.stateName === selectedState.name &&
    mandi.districtName === selectedDistrict.name
);

}, [stateId, selectedDistrict]);

// ==========================================================
// SELECTED MANDI
// ==========================================================

const selectedMandi = useMemo(() => {
return MANDIS.find((mandi) => mandi.id === mandiId);
}, [mandiId]);

// ==========================================================
// LOAD ALL PRICES FOR SELECTED MANDI
// ==========================================================

useEffect(() => {
if (!mandiId) {
setPrices([]);
return;
}

let cancelled = false;

async function loadPrices() {
  try {
    setLoading(true);
    setError("");

    const result = await getMandiPrices(mandiId);

    if (!cancelled) {
      setPrices(result);
    }
  } catch (err) {
    console.error("Failed to load mandi prices:", err);

    if (!cancelled) {
      setPrices([]);
      setError(
        "Unable to load mandi prices. Please try again."
      );
    }
  } finally {
    if (!cancelled) {
      setLoading(false);
    }
  }
}

loadPrices();

return () => {
  cancelled = true;
};

}, [mandiId]);

// ==========================================================
// STATE CHANGE
// ==========================================================

function handleStateChange(value: string) {
setStateId(value);
setDistrictId("");
setMandiId("");
setPrices([]);
setError("");
}

// ==========================================================
// DISTRICT CHANGE
// ==========================================================

function handleDistrictChange(value: string) {
setDistrictId(value);
setMandiId("");
setPrices([]);
setError("");
}

// ==========================================================
// MANDI CHANGE
// ==========================================================

function handleMandiChange(value: string) {
setMandiId(value);
setPrices([]);
setError("");
}

// ==========================================================
// FIND CROP DETAILS
// ==========================================================

function getCrop(cropId: string) {
return CROPS.find((crop) => crop.id === cropId);
}

// ==========================================================
// FORMAT PRICE
// ==========================================================

function formatPrice(value: number) {
return Number(value).toLocaleString("en-IN");
}

// ==========================================================
// PARSE DATE
//
// Supports:
// 1. Firebase timestamp in milliseconds
// 2. YYYY-MM-DD
// 3. ISO date strings
// ==========================================================

function parseDate(value?: string | number): Date | null {
if (!value) {
return null;
}

let date: Date;

if (typeof value === "number") {
  date = new Date(value);
} else {
  const trimmed = value.trim();

  // YYYY-MM-DD should be interpreted as a local calendar date.
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    date = new Date(`${trimmed}T00:00:00`);
  } else {
    date = new Date(trimmed);
  }
}

if (Number.isNaN(date.getTime())) {
  return null;
}

return date;

}

// ==========================================================
// FORMAT DATE
// ==========================================================

function formatDate(value?: string | number) {
const date = parseDate(value);

if (!date) {
  return "Not available";
}

return date.toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

}

// ==========================================================
// GET PRICE DATE
//
// Prefer marketDate because it represents the actual mandi
// market date.
//
// Fall back to updatedAt when marketDate is unavailable.
// ==========================================================

function getPriceDate(price: MandiPrice) {
return price.marketDate ?? price.updatedAt;
}

// ==========================================================
// SORT CROPS
// ==========================================================

const sortedPrices = useMemo(() => {
return [...prices].sort((a, b) => {
const cropA = getCrop(a.cropId)?.name ?? "";
const cropB = getCrop(b.cropId)?.name ?? "";

  return cropA.localeCompare(cropB);
});

}, [prices]);

// ==========================================================
// LATEST AVAILABLE PRICE DATE
//
// IMPORTANT:
// Do not assume prices[0] is the latest record.
// Find the actual latest date from all records.
// ==========================================================

const latestPriceDate = useMemo(() => {
if (prices.length === 0) {
return null;
}

let latestValue: string | number | undefined;

let latestTime = -Infinity;

for (const price of prices) {
  const value = getPriceDate(price);
  const date = parseDate(value);

  if (!date) {
    continue;
  }

  const time = date.getTime();

  if (time > latestTime) {
    latestTime = time;
    latestValue = value;
  }
}

return latestValue;

}, [prices]);

return ( <div className="rounded-3xl border border-amber-100 bg-white p-4 shadow-xl sm:p-6 lg:p-8">
{/* ======================================================
HEADER
====================================================== */}
  <section className="border-b border-green-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

          <div className="text-center">

            <div className="mb-3 text-4xl">
              🌾
            </div>

            <h1 className="text-3xl font-bold text-green-900 sm:text-4xl">
              फसल के भाव
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              अपनी मंडी चुनें और वहाँ उपलब्ध फसलों के भाव देखें।
            </p>

          </div>

        </div>
    </section>

  {/* ======================================================
      SELECTION
      ====================================================== */}

  <div className="mt-6 grid gap-4 md:grid-cols-3">
    {/* STATE */}

    <div>
      <label
        htmlFor="mandi-state"
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        State
      </label>

      <select
        id="mandi-state"
        value={stateId}
        onChange={(e) => handleStateChange(e.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
      >
        <option value="">Select State</option>

        {STATES.map((state) => (
          <option
            key={state.id}
            value={state.id}
            disabled={!state.supported}
          >
            {state.name} - {state.nameHindi}
            {!state.supported ? " (Coming Soon)" : ""}
          </option>
        ))}
      </select>
    </div>

    {/* DISTRICT */}

    <div>
      <label
        htmlFor="mandi-district"
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        District
      </label>

      <select
        id="mandi-district"
        value={districtId}
        onChange={(e) => handleDistrictChange(e.target.value)}
        disabled={!stateId}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition disabled:cursor-not-allowed disabled:bg-gray-100 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
      >
        <option value="">
          {stateId ? "Select District" : "Select State First"}
        </option>

        {districts.map((district) => (
          <option key={district.id} value={district.id}>
            {district.name} - {district.nameHindi}
          </option>
        ))}
      </select>
    </div>

    {/* MANDI */}

    <div>
      <label
        htmlFor="mandi"
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        Mandi
      </label>

      <select
        id="mandi"
        value={mandiId}
        onChange={(e) => handleMandiChange(e.target.value)}
        disabled={!districtId}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition disabled:cursor-not-allowed disabled:bg-gray-100 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
      >
        <option value="">
          {districtId ? "Select Mandi" : "Select District First"}
        </option>

        {filteredMandis.map((mandi) => (
          <option key={mandi.id} value={mandi.id}>
            {mandi.name}
          </option>
        ))}
      </select>
    </div>
  </div>

  {/* ======================================================
      SELECTED MANDI HEADER
      ====================================================== */}

  {selectedMandi && (
    <div className="mt-8 rounded-2xl bg-green-50 p-5">
      <p className="text-sm font-medium text-green-700">
        Selected Mandi
      </p>

      <h3 className="mt-1 text-xl font-bold text-gray-900">
        {selectedMandi.name}
      </h3>

      <p className="mt-1 text-sm text-gray-600">
        {selectedMandi.districtName}, {selectedMandi.stateName}
      </p>
    </div>
  )}

  {/* ======================================================
      LOADING
      ====================================================== */}

  {loading && (
    <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-8 text-center">
      <div className="text-3xl">⏳</div>

      <p className="mt-3 font-semibold text-gray-800">
        Loading crop prices...
      </p>

      <p className="mt-1 text-sm text-gray-500">
        Fetching the latest available data
      </p>
    </div>
  )}

  {/* ======================================================
      ERROR
      ====================================================== */}

  {!loading && error && (
    <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-5 text-center">
      <div className="text-3xl">⚠️</div>

      <p className="mt-3 font-semibold text-red-800">
        Unable to load prices
      </p>

      <p className="mt-1 text-sm text-red-600">{error}</p>
    </div>
  )}

  {/* ======================================================
      PRICE TABLE
      ====================================================== */}

  {!loading &&
    !error &&
    mandiId &&
    prices.length > 0 && (
      <div className="mt-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Available Crop Prices
            </h3>

            <p className="text-sm text-gray-500">
              {prices.length} crop
              {prices.length !== 1 ? "s" : ""} available
            </p>
          </div>

          {/* ==================================================
              LATEST DATE
              ================================================== */}

          <div className="text-right">
            <p className="text-xs text-gray-400">
              Latest market date
            </p>

            <p className="text-sm font-medium text-gray-700">
              {formatDate(latestPriceDate ?? undefined)}
            </p>
          </div>
        </div>

        {/* ====================================================
            MOBILE CARDS
            ==================================================== */}

        <div className="space-y-3 md:hidden">
          {sortedPrices.map((price) => {
            const crop = getCrop(price.cropId);

            if (!crop) {
              return null;
            }

            return (
              <div
                key={price.cropId}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {crop.icon} {crop.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {crop.nameHindi}
                    </p>

                    {/* VARIETY */}

                    {price.variety && (
                      <p className="mt-1 text-xs text-gray-500">
                        Variety: {price.variety}
                      </p>
                    )}
                  </div>

                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                    {price.unit || "quintal"}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-white p-3 text-center">
                    <p className="text-xs text-gray-500">Min</p>

                    <p className="mt-1 font-bold text-gray-800">
                      ₹{formatPrice(price.min)}
                    </p>
                  </div>

                  <div className="rounded-xl bg-green-100 p-3 text-center">
                    <p className="text-xs text-green-700">Modal</p>

                    <p className="mt-1 font-bold text-green-800">
                      ₹{formatPrice(price.modal)}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-3 text-center">
                    <p className="text-xs text-gray-500">Max</p>

                    <p className="mt-1 font-bold text-gray-800">
                      ₹{formatPrice(price.max)}
                    </p>
                  </div>
                </div>

                {/* MARKET DATE */}

                <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-3">
                  <p className="text-xs text-gray-400">
                    Market date
                  </p>

                  <p className="text-xs font-medium text-gray-600">
                    {formatDate(getPriceDate(price))}
                  </p>
                </div>

                {/* SOURCE */}

                {price.source && (
                  <p className="mt-1 text-right text-xs text-gray-400">
                    Source: {price.source}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* ====================================================
            DESKTOP TABLE
            ==================================================== */}

        <div className="hidden overflow-hidden rounded-2xl border border-gray-200 md:block">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold text-gray-700">
                    Crop
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    Minimum
                  </th>

                  <th className="bg-green-50 px-5 py-4 text-right text-sm font-semibold text-green-700">
                    Modal
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    Maximum
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    Unit
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    Market Date
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 bg-white">
                {sortedPrices.map((price) => {
                  const crop = getCrop(price.cropId);

                  if (!crop) {
                    return null;
                  }

                  return (
                    <tr
                      key={price.cropId}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">
                            {crop.icon}
                          </span>

                          <div>
                            <p className="font-semibold text-gray-900">
                              {crop.name}
                            </p>

                            <p className="text-xs text-gray-500">
                              {crop.nameHindi}
                            </p>

                            {price.variety && (
                              <p className="mt-1 text-xs text-gray-400">
                                {price.variety}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4 text-right font-medium text-gray-700">
                        ₹{formatPrice(price.min)}
                      </td>

                      <td className="bg-green-50 px-5 py-4 text-right font-bold text-green-800">
                        ₹{formatPrice(price.modal)}
                      </td>

                      <td className="px-5 py-4 text-right font-medium text-gray-700">
                        ₹{formatPrice(price.max)}
                      </td>

                      <td className="px-5 py-4 text-right text-sm text-gray-500">
                        {price.unit || "quintal"}
                      </td>

                      <td className="px-5 py-4 text-right">
                        <p className="text-sm font-medium text-gray-700">
                          {formatDate(getPriceDate(price))}
                        </p>

                        {price.source && (
                          <p className="mt-1 text-xs text-gray-400">
                            {price.source}
                          </p>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )}

  {/* ======================================================
      NO DATA
      ====================================================== */}

  {!loading &&
    !error &&
    mandiId &&
    prices.length === 0 && (
      <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
        <div className="text-4xl">📊</div>

        <p className="mt-3 font-semibold text-gray-800">
          No crop prices available
        </p>

        <p className="mt-1 text-sm text-gray-500">
          We don't currently have price data for this mandi.
        </p>
      </div>
    )}

  {/* ======================================================
      DISCLAIMER
      ====================================================== */}

  <div className="mt-6 rounded-xl bg-gray-50 p-3">
    <p className="text-xs leading-relaxed text-gray-500">
      ℹ️ Mandi prices can change daily. Prices shown are the
      latest available data in IlaGuard. Always verify the
      latest local market price before making a selling decision.
    </p>
  </div>
</div>

);
}
