"use client";

import { useMemo, useState } from "react";

import { STATES } from "@/data/states";
import { DISTRICTS } from "@/data/districts";
import { MONTHS } from "@/data/months";
import { CROPS } from "@/data/crops";
import { CROP_VARIETIES } from "@/data/cropVarieties";

import {
  getRecommendedVarieties,
  type CropVarietyAdvisorResult,
  type CropVarietyRecommendation,
} from "@/lib/cropVarietyAdvisor";

export default function CropVarietyCard() {
  // ============================================================
  // FORM STATE
  // ============================================================

  const [stateId, setStateId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [month, setMonth] = useState("");
  const [cropId, setCropId] = useState("");

  const [result, setResult] =
    useState<CropVarietyAdvisorResult | null>(null);

  const [searched, setSearched] = useState(false);

  // ============================================================
  // DISTRICTS FOR SELECTED STATE
  // ============================================================

  const availableDistricts = useMemo(() => {
    if (!stateId) {
      return [];
    }

    return DISTRICTS.filter(
      (district) => district.stateId === stateId
    );
  }, [stateId]);

  // ============================================================
  // CROPS THAT HAVE VARIETY DATA
  // ============================================================

  const availableCrops = useMemo(() => {
    const cropIdsWithVarieties = new Set(
      CROP_VARIETIES.map((variety) => variety.cropId)
    );

    return CROPS.filter((crop) =>
      cropIdsWithVarieties.has(crop.id)
    );
  }, []);

  // ============================================================
  // RESET DISTRICT WHEN STATE CHANGES
  // ============================================================

  const handleStateChange = (
    value: string
  ) => {
    setStateId(value);
    setDistrictId("");
    setResult(null);
    setSearched(false);
  };

  // ============================================================
  // RESET RESULT WHEN INPUT CHANGES
  // ============================================================

  const handleDistrictChange = (
    value: string
  ) => {
    setDistrictId(value);
    setResult(null);
    setSearched(false);
  };

  const handleMonthChange = (
    value: string
  ) => {
    setMonth(value);
    setResult(null);
    setSearched(false);
  };

  const handleCropChange = (
    value: string
  ) => {
    setCropId(value);
    setResult(null);
    setSearched(false);
  };

  // ============================================================
  // FIND BEST VARIETIES
  // ============================================================

  const handleFindVarieties = () => {
    if (
      !stateId ||
      !districtId ||
      !month ||
      !cropId
    ) {
      return;
    }

    const advisorResult =
      getRecommendedVarieties(
        cropId,
        stateId,
        districtId,
        Number(month)
      );

    setResult(advisorResult);
    setSearched(true);
  };

  // ============================================================
  // SELECTED DATA
  // ============================================================

  const selectedCrop = CROPS.find(
    (crop) => crop.id === cropId
  );

  const selectedState = STATES.find(
    (state) => state.id === stateId
  );

  const selectedDistrict = DISTRICTS.find(
    (district) =>
      district.id === districtId &&
      district.stateId === stateId
  );

  const selectedMonth = MONTHS.find(
    (item) => item.id === Number(month)
  );

  // ============================================================
  // PRIORITY LABEL
  // ============================================================

  const getPriorityBadge = (
    recommendation: CropVarietyRecommendation
  ) => {
    switch (recommendation.priority) {
      case 1:
        return {
          label: "Highly Suitable",
          className:
            "bg-green-100 text-green-700",
        };

      case 2:
        return {
          label: "Suitable",
          className:
            "bg-yellow-100 text-yellow-700",
        };

      case 3:
        return {
          label: "Conditional",
          className:
            "bg-orange-100 text-orange-700",
        };

      default:
        return {
          label: recommendation.recommendationLabel,
          className:
            "bg-gray-100 text-gray-700",
        };
    }
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div className="space-y-8">

      {/* ======================================================
          INPUT CARD
      ====================================================== */}

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            🌱 Find Best Crop Variety
          </h2>

          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Select your state, district, month and crop to find
            the most suitable varieties.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">

          {/* STATE */}

          <div>
            <label
              htmlFor="variety-state"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              State
            </label>

            <select
              id="variety-state"
              value={stateId}
              onChange={(e) =>
                handleStateChange(e.target.value)
              }
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            >
              <option value="">
                Select State
              </option>

              {STATES.map((state) => (
                <option
                  key={state.id}
                  value={state.id}
                  disabled={!state.supported}
                >
                  {state.name}
                  {!state.supported
                    ? " (Coming Soon)"
                    : ""}
                </option>
              ))}
            </select>
          </div>

          {/* DISTRICT */}

          <div>
            <label
              htmlFor="variety-district"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              District
            </label>

            <select
              id="variety-district"
              value={districtId}
              onChange={(e) =>
                handleDistrictChange(e.target.value)
              }
              disabled={!stateId}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-gray-100"
            >
              <option value="">
                {stateId
                  ? "Select District"
                  : "Select State First"}
              </option>

              {availableDistricts.map(
                (district) => (
                  <option
                    key={district.id}
                    value={district.id}
                  >
                    {district.name}
                  </option>
                )
              )}
            </select>
          </div>

          {/* MONTH */}

          <div>
            <label
              htmlFor="variety-month"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Month
            </label>

            <select
              id="variety-month"
              value={month}
              onChange={(e) =>
                handleMonthChange(e.target.value)
              }
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            >
              <option value="">
                Select Month
              </option>

              {MONTHS.map((item) => (
                <option
                  key={item.id}
                  value={item.id}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          {/* CROP */}

          <div>
            <label
              htmlFor="variety-crop"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Crop
            </label>

            <select
              id="variety-crop"
              value={cropId}
              onChange={(e) =>
                handleCropChange(e.target.value)
              }
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            >
              <option value="">
                Select Crop
              </option>

              {availableCrops.map((crop) => (
                <option
                  key={crop.id}
                  value={crop.id}
                >
                  {crop.icon} {crop.name} —{" "}
                  {crop.nameHindi}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* SEARCH BUTTON */}

        <div className="mt-6">
          <button
            type="button"
            onClick={handleFindVarieties}
            disabled={
              !stateId ||
              !districtId ||
              !month ||
              !cropId
            }
            className="w-full rounded-xl bg-green-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300 sm:w-auto"
          >
            Find Best Variety
          </button>
        </div>

        {/* VALIDATION */}

        {searched === false &&
          (!stateId ||
            !districtId ||
            !month ||
            !cropId) && (
            <p className="mt-3 text-xs text-gray-500">
              Select all four options to see
              variety recommendations.
            </p>
          )}
      </div>

      {/* ======================================================
          SELECTION SUMMARY
      ====================================================== */}

      {searched && (
        <div className="rounded-xl border border-green-100 bg-green-50 p-4">
          <p className="text-sm text-green-800">
            Showing varieties for{" "}
            <strong>
              {selectedCrop?.icon}{" "}
              {selectedCrop?.name}
            </strong>{" "}
            in{" "}
            <strong>
              {selectedDistrict?.name},{" "}
              {selectedState?.name}
            </strong>{" "}
            during{" "}
            <strong>
              {selectedMonth?.name}
            </strong>
            .
          </p>
        </div>
      )}

      {/* ======================================================
          NO RESULTS
      ====================================================== */}

      {searched &&
        result &&
        result.total === 0 && (
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <div className="text-4xl">
              🌱
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              No variety recommendation found
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
              We don't currently have a suitable
              variety recommendation for{" "}
              <strong>
                {selectedCrop?.name}
              </strong>{" "}
              in{" "}
              <strong>
                {selectedDistrict?.name}
              </strong>{" "}
              during{" "}
              <strong>
                {selectedMonth?.name}
              </strong>
              .
            </p>

            <p className="mt-3 text-xs text-gray-500">
              Try another month or crop.
            </p>
          </div>
        )}

      {/* ======================================================
          RESULTS
      ====================================================== */}

      {searched &&
        result &&
        result.total > 0 && (
          <div className="space-y-5">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Recommended Varieties
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                {result.total} suitable{" "}
                {result.total === 1
                  ? "variety"
                  : "varieties"}{" "}
                found.
              </p>
            </div>

            <div className="grid gap-5">
              {result.varieties.map(
                (recommendation, index) => {
                  const badge =
                    getPriorityBadge(
                      recommendation
                    );

                  const variety =
                    recommendation.variety;

                  return (
                    <div
                      key={variety.varietyId}
                      className={`relative rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
                        recommendation.priority ===
                        1
                          ? "border-green-200"
                          : "border-gray-200"
                      }`}
                    >

                      {/* PRIORITY */}

                      <div className="absolute right-5 top-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${badge.className}`}
                        >
                          Priority{" "}
                          {recommendation.priority}
                        </span>
                      </div>

                      {/* RANK */}

                      <div className="flex items-start gap-4 pr-24">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-xl">
                          {index === 0
                            ? "🥇"
                            : index === 1
                            ? "🥈"
                            : index === 2
                            ? "🥉"
                            : "🌱"}
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {variety.name}
                          </h3>

                          <p className="mt-0.5 text-sm font-medium text-green-700">
                            {variety.nameHindi}
                          </p>

                          <span
                            className={`mt-2 inline-block rounded-full px-2.5 py-1 text-xs font-medium ${badge.className}`}
                          >
                            {badge.label}
                          </span>
                        </div>
                      </div>

                      {/* DETAILS */}

                      <div className="mt-5 grid gap-3 border-t border-gray-100 pt-5 sm:grid-cols-2">

                        <div className="rounded-lg bg-gray-50 p-3">
                          <p className="text-xs text-gray-500">
                            Location Recommendation
                          </p>

                          <p className="mt-1 text-sm font-medium text-gray-800">
                            {recommendation.locationType ===
                            "district"
                              ? "📍 District Specific"
                              : "🗺️ State Wide"}
                          </p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-3">
                          <p className="text-xs text-gray-500">
                            Suitable Months
                          </p>

                          <p className="mt-1 text-sm font-medium text-gray-800">
                            {MONTHS.find(
                              (m) =>
                                m.id ===
                                variety.startMonth
                            )?.name}{" "}
                            –{" "}
                            {MONTHS.find(
                              (m) =>
                                m.id ===
                                variety.endMonth
                            )?.name}
                          </p>
                        </div>
                      </div>

                      {/* NOTES */}

                      {variety.notes && (
                        <div className="mt-4 rounded-lg bg-green-50 p-4">
                          <p className="text-xs font-semibold text-green-800">
                            Why this variety?
                          </p>

                          <p className="mt-1 text-sm leading-6 text-green-900">
                            {variety.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}
    </div>
  );
}