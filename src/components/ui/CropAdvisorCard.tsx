"use client";

import { useMemo, useState } from "react";

import { STATES } from "@/data/states";
import { DISTRICTS } from "@/data/districts";
import { MONTHS } from "@/data/months";

import {
  getRecommendedCrops,
  type CropPriority,
} from "@/lib/cropAdvisor";

import {
  getRecommendedVarieties,
} from "@/lib/cropVarietyAdvisor";

type AdvisorMode =
  | "manual"
  | "iot"
  | "report";

export default function CropAdvisorCard() {
  // ============================================================
  // CROP ADVISOR STATE
  // ============================================================

  const [mode, setMode] =
    useState<AdvisorMode>("manual");

  const [stateId, setStateId] =
    useState("");

  const [districtId, setDistrictId] =
    useState("");

  const [month, setMonth] =
    useState("");

  const [showResults, setShowResults] =
    useState(false);

  // ============================================================
  // DISTRICTS FOR SELECTED STATE
  // ============================================================

  const filteredDistricts = useMemo(() => {
    if (!stateId) {
      return [];
    }

    return DISTRICTS.filter(
      (district) =>
        String(district.stateId) ===
        stateId
    );
  }, [stateId]);

  // ============================================================
  // SELECTED VALUES
  // ============================================================

  const selectedState =
    STATES.find(
      (state) =>
        String(state.id) ===
        stateId
    );

  const selectedDistrict =
    DISTRICTS.find(
      (district) =>
        String(district.id) ===
        districtId
    );

  const selectedMonth =
    MONTHS.find(
      (item) =>
        String(item.id) ===
        month
    );

  // ============================================================
  // CROP RECOMMENDATION
  // ============================================================

  const recommendation = useMemo(() => {
    if (
      !stateId ||
      !districtId ||
      !month
    ) {
      return null;
    }

    return getRecommendedCrops(
      stateId,
      districtId,
      Number(month)
    );
  }, [
    stateId,
    districtId,
    month,
  ]);

  // ============================================================
  // VARIETY RECOMMENDATIONS
  //
  // IMPORTANT:
  // cropAdvisor.ts remains completely independent.
  //
  // We take the crops returned by cropAdvisor.ts
  // and independently ask cropVarietyAdvisor.ts
  // for suitable varieties.
  // ============================================================

  const varietyResults = useMemo(() => {
    if (
      !stateId ||
      !districtId ||
      !month ||
      !recommendation
    ) {
      return {};
    }

    const results: Record<
      string,
      ReturnType<typeof getRecommendedVarieties>
    > = {};

    for (
      const cropRecommendation of
        recommendation.crops
    ) {
      const cropId =
        cropRecommendation.crop.id;

      results[cropId] =
        getRecommendedVarieties(
          cropId,
          stateId,
          districtId,
          Number(month)
        );
    }

    return results;
  }, [
    recommendation,
    stateId,
    districtId,
    month,
  ]);

  // ============================================================
  // HANDLERS
  // ============================================================

  function handleStateChange(
    value: string
  ) {
    setStateId(value);
    setDistrictId("");
    setShowResults(false);
  }

  function handleDistrictChange(
    value: string
  ) {
    setDistrictId(value);
    setShowResults(false);
  }

  function handleMonthChange(
    value: string
  ) {
    setMonth(value);
    setShowResults(false);
  }

  function handleFindCrops() {
    if (
      !stateId ||
      !districtId ||
      !month
    ) {
      return;
    }

    setShowResults(true);
  }

  // ============================================================
  // PRIORITY LABEL
  // ============================================================

  function getPriorityLabel(
    priority: CropPriority
  ) {
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
  // PRIORITY BADGE
  // ============================================================

  function getPriorityClass(
    priority: CropPriority
  ) {
    switch (priority) {
      case 1:
        return "border border-green-200 bg-green-100 text-green-800";

      case 2:
        return "border border-yellow-200 bg-yellow-100 text-yellow-800";

      case 3:
        return "border border-red-200 bg-red-100 text-red-800";

      default:
        return "border border-gray-200 bg-gray-100 text-gray-700";
    }
  }

  // ============================================================
  // PRIORITY DOT
  // ============================================================

  function getPriorityDotClass(
    priority: CropPriority
  ) {
    switch (priority) {
      case 1:
        return "bg-green-600";

      case 2:
        return "bg-yellow-500";

      case 3:
        return "bg-red-600";

      default:
        return "bg-gray-500";
    }
  }

  // ============================================================
  // VARIETY PRIORITY CLASS
  // ============================================================

  function getVarietyPriorityClass(
    priority: 1 | 2 | 3
  ) {
    switch (priority) {
      case 1:
        return "border border-green-200 bg-green-100 text-green-800";

      case 2:
        return "border border-yellow-200 bg-yellow-100 text-yellow-800";

      case 3:
        return "border border-red-200 bg-red-100 text-red-800";

      default:
        return "border border-gray-200 bg-gray-100 text-gray-700";
    }
  }

  // ============================================================
  // VARIETY PRIORITY DOT
  // ============================================================

  function getVarietyPriorityDotClass(
    priority: 1 | 2 | 3
  ) {
    switch (priority) {
      case 1:
        return "bg-green-600";

      case 2:
        return "bg-yellow-500";

      case 3:
        return "bg-red-600";

      default:
        return "bg-gray-500";
    }
  }

  return (
    <div className="rounded-3xl border border-green-100 bg-white p-4 shadow-xl sm:p-6 lg:p-8">

      {/* ==========================================================
          CROP ADVISOR CARD
          ========================================================== */}

      <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6">

        {/* ========================================================
            HEADER
            ======================================================== */}

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl">
            🌾
          </div>

          <div>

            <h3 className="text-xl font-bold text-gray-900">
              Find Your Best Crop
            </h3>

            <p className="text-sm text-gray-500">
              Get crop recommendations for
              your farm
            </p>

          </div>

        </div>

        {/* ========================================================
            MODE TABS
            ======================================================== */}

        <div className="mt-6 grid grid-cols-3 rounded-xl bg-gray-100 p-1">

          <button
            type="button"
            onClick={() =>
              setMode("manual")
            }
            className={`rounded-lg px-2 py-3 text-sm font-semibold transition ${
              mode === "manual"
                ? "bg-white text-green-700 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            🌱 Manual
          </button>

          <button
            type="button"
            onClick={() =>
              setMode("iot")
            }
            className={`rounded-lg px-2 py-3 text-sm font-semibold transition ${
              mode === "iot"
                ? "bg-white text-green-700 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            📡 My Device
          </button>

          <button
            type="button"
            onClick={() =>
              setMode("report")
            }
            className={`rounded-lg px-2 py-3 text-sm font-semibold transition ${
              mode === "report"
                ? "bg-white text-green-700 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            📄 Soil Report
          </button>

        </div>

        {/* ========================================================
            MANUAL MODE
            ======================================================== */}

        {mode === "manual" && (
          <div className="mt-6">

            {/* ====================================================
                INTRO
                ==================================================== */}

            <div className="mb-5">

              <h4 className="text-lg font-bold text-gray-900">
                Tell us about your farm
              </h4>

              <p className="mt-1 text-sm text-gray-500">
                Select your location and
                farming month.
              </p>

            </div>

            {/* ====================================================
                INPUTS
                ==================================================== */}

            <div className="space-y-4">

              {/* ==================================================
                  STATE
                  ================================================== */}

              <div>

                <label
                  htmlFor="state"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  State
                </label>

                <select
                  id="state"
                  value={stateId}
                  onChange={(e) =>
                    handleStateChange(
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
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
                  htmlFor="district"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  District
                </label>

                <select
                  id="district"
                  value={districtId}
                  onChange={(e) =>
                    handleDistrictChange(
                      e.target.value
                    )
                  }
                  disabled={!stateId}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition disabled:cursor-not-allowed disabled:bg-gray-100 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                >

                  <option value="">
                    {stateId
                      ? "Select District"
                      : "Select State First"}
                  </option>

                  {filteredDistricts.map(
                    (district) => (
                      <option
                        key={district.id}
                        value={district.id}
                      >
                        {district.name}  -{" "}
                        {district.nameHindi}
                      </option>
                    )
                  )}

                </select>

              </div>

              {/* ==================================================
                  MONTH
                  ================================================== */}

              <div>

                <label
                  htmlFor="month"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Farming Month
                </label>

                <select
                  id="month"
                  value={month}
                  onChange={(e) =>
                    handleMonthChange(
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                >

                  <option value="">
                    Select Month
                  </option>

                  {MONTHS.map(
                    (item) => (
                      <option
                        key={item.id}
                        value={item.id}
                      >
                        {item.name} -{" "}
                        {item.nameHindi}
                      </option>
                    )
                  )}

                </select>

              </div>

              {/* ==================================================
                  FIND BUTTON
                  ================================================== */}

              <button
                type="button"
                onClick={
                  handleFindCrops
                }
                disabled={
                  !stateId ||
                  !districtId ||
                  !month
                }
                className="w-full rounded-xl bg-green-700 px-6 py-4 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                🌾 Find Recommended Crops
              </button>

            </div>

            {/* ====================================================
                RECOMMENDATION RESULT
                ==================================================== */}

            {showResults &&
              selectedState &&
              selectedDistrict &&
              selectedMonth &&
              recommendation && (
                <div className="mt-6">

                  {/* ==================================================
                      SELECTION SUMMARY
                      ================================================== */}

                  <div className="rounded-2xl bg-green-50 p-4">

                    <div className="flex flex-wrap gap-2 text-xs">

                      <span className="rounded-full bg-white px-3 py-1.5 font-medium text-gray-700">
                        📍{" "}
                        {selectedState.name}
                      </span>

                      <span className="rounded-full bg-white px-3 py-1.5 font-medium text-gray-700">
                        🏘️{" "}
                        {selectedDistrict.name}
                      </span>

                      <span className="rounded-full bg-white px-3 py-1.5 font-medium text-gray-700">
                        📅{" "}
                        {selectedMonth.name}
                      </span>

                    </div>

                    <div className="mt-3">

                      <p className="text-xs text-gray-500">
                        Season
                      </p>

                      <p className="font-bold text-green-800">
                        {
                          recommendation.season
                        }
                      </p>

                    </div>

                  </div>

                  {/* ==================================================
                      RESULTS HEADER
                      ================================================== */}

                  <div className="mt-5">

                    <div className="flex items-center justify-between">

                      <h4 className="text-lg font-bold text-gray-900">
                        Recommended Crops
                      </h4>

                      <span className="text-xs text-gray-500">
                        {
                          recommendation
                            .crops.length
                        }{" "}
                        found
                      </span>

                    </div>

                    {/* ==================================================
                        PRIORITY LEGEND
                        ================================================== */}

                    <div className="mt-3 flex flex-wrap gap-2">

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">

                        <span className="h-2 w-2 rounded-full bg-green-600" />

                        Priority 1
                      </span>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-semibold text-yellow-700">

                        <span className="h-2 w-2 rounded-full bg-yellow-500" />

                        Priority 2
                      </span>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700">

                        <span className="h-2 w-2 rounded-full bg-red-600" />

                        Priority 3
                      </span>

                    </div>

                    {/* ==================================================
                        NO CROPS
                        ================================================== */}

                    {recommendation.crops
                      .length === 0 ? (

                      <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center">

                        <div className="text-3xl">
                          🌱
                        </div>

                        <p className="mt-3 font-semibold text-gray-800">
                          No crop recommendation
                          available
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          We don't currently
                          have enough data for
                          this location and
                          month.
                        </p>

                      </div>

                    ) : (

                      /* ==================================================
                          CROP LIST
                          ================================================== */

                      <div className="mt-4 space-y-4">

                        {recommendation.crops.map(
                          ({
                            crop,
                            priority,
                          }) => {

                            /*
                             * IMPORTANT:
                             *
                             * getRecommendedVarieties()
                             * returns an OBJECT:
                             *
                             * {
                             *   cropId,
                             *   varieties: [],
                             *   total
                             * }
                             *
                             * Therefore we MUST extract
                             * .varieties before calling
                             * .map().
                             */

                            const varietyResult =
                              varietyResults[
                                crop.id
                              ];

                            const varieties =
                              varietyResult
                                ?.varieties ??
                              [];

                            return (

                              <div
                                key={crop.id}
                                className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:border-green-200 hover:shadow-md"
                              >

                                {/* ==================================================
                                    CROP HEADER
                                    ================================================== */}

                                <div className="flex items-center justify-between gap-3">

                                  <div className="flex min-w-0 items-center gap-3">

                                    {/* Crop icon */}

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50 text-xl">
                                      {
                                        crop.icon
                                      }
                                    </div>

                                    {/* Crop name */}

                                    <div className="min-w-0">

                                      <h5 className="font-bold text-gray-900">
                                        {
                                          crop.name
                                        }
                                      </h5>

                                      <p className="text-xs text-gray-500">
                                        {
                                          crop.nameHindi
                                        }
                                      </p>

                                    </div>

                                  </div>

                                  {/* ==================================================
                                      CROP PRIORITY
                                      ================================================== */}

                                  <div className="shrink-0 text-right">

                                    <span
                                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${getPriorityClass(
                                        priority
                                      )}`}
                                    >

                                      <span
                                        className={`h-2 w-2 rounded-full ${getPriorityDotClass(
                                          priority
                                        )}`}
                                      />

                                      Priority{" "}
                                      {priority}

                                    </span>

                                    <p
                                      className={`mt-1 text-xs font-semibold ${
                                        priority ===
                                        1
                                          ? "text-green-700"
                                          : priority ===
                                            2
                                          ? "text-yellow-700"
                                          : "text-red-700"
                                      }`}
                                    >
                                      {
                                        getPriorityLabel(
                                          priority
                                        )
                                      }
                                    </p>

                                  </div>

                                </div>

                                {/* ==================================================
                                    VARIETY SECTION
                                    ================================================== */}

                                {varieties.length >
                                  0 && (

                                  <div className="mt-4 border-t border-gray-100 pt-4">

                                    {/* Variety heading */}

                                    <div className="flex items-center justify-between">

                                      <div>

                                        <h6 className="text-sm font-bold text-gray-800">
                                          Recommended
                                          Varieties
                                        </h6>

                                        <p className="mt-0.5 text-xs text-gray-400">
                                          Suitable
                                          varieties
                                          for{" "}
                                          {
                                            selectedMonth
                                              .name
                                          }
                                        </p>

                                      </div>

                                      <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500">
                                        {
                                          varieties.length
                                        }{" "}
                                        found
                                      </span>

                                    </div>

                                    {/* ==================================================
                                        VARIETY LIST
                                        ================================================== */}

                                    <div className="mt-3 space-y-2">

                                      {varieties.map(
                                        ({
                                          variety,
                                          priority:
                                            varietyPriority,
                                          recommendationLabel,
                                          locationType,
                                        }) => (

                                          <div
                                            key={
                                              variety.varietyId
                                            }
                                            className="rounded-xl border border-gray-100 bg-gray-50 p-3"
                                          >

                                            <div className="flex items-start justify-between gap-3">

                                              {/* Variety info */}

                                              <div className="min-w-0">

                                                <p className="font-semibold text-gray-900">
                                                  {
                                                    variety.name
                                                  }
                                                </p>

                                                <p className="text-xs text-gray-500">
                                                  {
                                                    variety.nameHindi
                                                  }
                                                </p>

                                              </div>

                                              {/* Variety priority */}

                                              <span
                                                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${getVarietyPriorityClass(
                                                  varietyPriority
                                                )}`}
                                              >

                                                <span
                                                  className={`h-1.5 w-1.5 rounded-full ${getVarietyPriorityDotClass(
                                                    varietyPriority
                                                  )}`}
                                                />

                                                Priority{" "}
                                                {
                                                  varietyPriority
                                                }

                                              </span>

                                            </div>

                                            {/* ==================================================
                                                VARIETY DETAILS
                                                ================================================== */}

                                            <div className="mt-2 flex flex-wrap gap-2">

                                              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-gray-500">

                                                {
                                                  recommendationLabel
                                                }

                                              </span>

                                              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-gray-500">

                                                {locationType ===
                                                "district"
                                                  ? "📍 District Specific"
                                                  : "🌱 General"}

                                              </span>

                                            </div>

                                            {/* ==================================================
                                                NOTES
                                                ================================================== */}

                                            {variety.notes && (

                                              <p className="mt-2 text-xs leading-relaxed text-gray-500">
                                                {
                                                  variety.notes
                                                }
                                              </p>

                                            )}

                                          </div>

                                        )
                                      )}

                                    </div>

                                  </div>

                                )}

                                {/* ==================================================
                                    NO VARIETY DATA
                                    ================================================== */}

                                {varieties.length ===
                                  0 && (

                                  <div className="mt-4 rounded-xl bg-gray-50 p-3">

                                    <p className="text-xs text-gray-400">
                                      🌱 Variety
                                      information
                                      is not
                                      available
                                      yet for
                                      this crop
                                      and month.
                                    </p>

                                  </div>

                                )}

                              </div>

                            );
                          }
                        )}

                      </div>

                    )}

                  </div>

                  {/* ==================================================
                      DISCLAIMER
                      ================================================== */}

                  {recommendation.crops
                    .length > 0 && (

                    <div className="mt-4 rounded-xl bg-gray-50 p-3">

                      <p className="text-xs leading-relaxed text-gray-500">
                        ℹ️ Crop and variety
                        recommendations
                        are based on
                        available
                        location and
                        seasonal data.
                        Soil, weather,
                        water
                        availability,
                        disease pressure
                        and market
                        conditions can
                        affect the final
                        choice.
                      </p>

                    </div>

                  )}

                </div>
              )}

          </div>
        )}

        {/* ========================================================
            IOT MODE
            ======================================================== */}

        {mode === "iot" && (

          <div className="mt-6 rounded-2xl border border-dashed border-green-200 bg-green-50 p-8 text-center">

            <div className="text-4xl">
              📡
            </div>

            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Connect Your IlaGuard Device
            </h4>

            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-600">
              Connect IlaPot, IlaFarm or
              another IlaGuard device to
              use real-time soil and
              environmental data for
              smarter crop recommendations.
            </p>

            <button
              type="button"
              className="mt-6 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
            >
              Connect Device
            </button>

          </div>

        )}

        {/* ========================================================
            SOIL REPORT MODE
            ======================================================== */}

        {mode === "report" && (

          <div className="mt-6">

            <div className="rounded-2xl border border-dashed border-green-300 bg-green-50 p-8 text-center">

              <div className="text-4xl">
                📄
              </div>

              <h4 className="mt-4 text-lg font-bold text-gray-900">
                Upload Soil Report
              </h4>

              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-600">
                Upload your soil test report
                and IlaGuard will eventually
                use pH, N, P, K and other
                parameters to improve crop
                recommendations.
              </p>

              <label className="mt-6 inline-flex cursor-pointer rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800">

                Upload Report

                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                />

              </label>

              <p className="mt-3 text-xs text-gray-400">
                PDF, JPG or PNG
              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}