"use client";

import { useMemo, useState } from "react";

import { STATES } from "@/data/states";
import { DISTRICTS } from "@/data/districts";
import { MONTHS } from "@/data/months";
import { getRecommendedCrops } from "@/lib/cropAdvisor";

type AdvisorMode = "manual" | "iot" | "report";

export default function CropAdvisorCard() {
  const [mode, setMode] = useState<AdvisorMode>("manual");

  const [stateId, setStateId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [month, setMonth] = useState("");

  const [showResults, setShowResults] = useState(false);

  const filteredDistricts = useMemo(() => {
    if (!stateId) {
      return [];
    }

    return DISTRICTS.filter(
      (district) => String(district.stateId) === stateId
    );
  }, [stateId]);

  const selectedState = STATES.find(
    (state) => String(state.id) === stateId
  );

  const selectedDistrict = DISTRICTS.find(
    (district) => String(district.id) === districtId
  );

  const selectedMonth = MONTHS.find(
    (item) => String(item.id) === month
  );

  const recommendation = useMemo(() => {
    if (!stateId || !districtId || !month) {
      return null;
    }

    return getRecommendedCrops(
      stateId,
      districtId,
      Number(month)
    );
  }, [stateId, districtId, month]);

  function handleStateChange(value: string) {
    setStateId(value);

    // Reset district when state changes
    setDistrictId("");

    setShowResults(false);
  }

  function handleDistrictChange(value: string) {
    setDistrictId(value);
    setShowResults(false);
  }

  function handleMonthChange(value: string) {
    setMonth(value);
    setShowResults(false);
  }

  function handleFindCrops() {
    if (!stateId || !districtId || !month) {
      return;
    }

    setShowResults(true);
  }

  function getPriorityLabel(priority: 1 | 2 | 3) {
    switch (priority) {
      case 1:
        return "Highly Suitable";

      case 2:
        return "Suitable";

      case 3:
        return "Conditional";

      default:
        return "Suitable";
    }
  }

  function getPriorityClass(priority: 1 | 2 | 3) {
    switch (priority) {
      case 1:
        return "bg-green-100 text-green-700";

      case 2:
        return "bg-yellow-100 text-yellow-700";

      case 3:
        return "bg-orange-100 text-orange-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  return (
    <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-green-100">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-2xl">
            🌾
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Find Your Best Crop
            </h3>

            <p className="text-sm text-gray-500">
              Get crop recommendations for your location
            </p>
          </div>
        </div>
      </div>

      {/* Mode Tabs */}
      <div className="mt-8 grid grid-cols-3 rounded-xl bg-gray-100 p-1">

        <button
          type="button"
          onClick={() => setMode("manual")}
          className={`rounded-lg px-3 py-3 text-sm font-semibold transition ${
            mode === "manual"
              ? "bg-white text-green-700 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          🌱 Manual
        </button>

        <button
          type="button"
          onClick={() => setMode("iot")}
          className={`rounded-lg px-3 py-3 text-sm font-semibold transition ${
            mode === "iot"
              ? "bg-white text-green-700 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          📡 My Device
        </button>

        <button
          type="button"
          onClick={() => setMode("report")}
          className={`rounded-lg px-3 py-3 text-sm font-semibold transition ${
            mode === "report"
              ? "bg-white text-green-700 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          📄 Soil Report
        </button>

      </div>

      {/* Manual Mode */}
      {mode === "manual" && (
        <div className="mt-8">

          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-900">
              Tell us about your farm
            </h4>

            <p className="mt-1 text-sm text-gray-500">
              Select your location and farming month.
            </p>
          </div>

          <div className="space-y-5">

            {/* State */}
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
                onChange={(e) => handleStateChange(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              >
                <option value="">Select State</option>

                {STATES.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            {/* District */}
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
                  handleDistrictChange(e.target.value)
                }
                disabled={!stateId}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition disabled:cursor-not-allowed disabled:bg-gray-100 focus:border-green-500 focus:ring-2 focus:ring-green-100"
              >
                <option value="">
                  {stateId
                    ? "Select District"
                    : "Select State First"}
                </option>

                {filteredDistricts.map((district) => (
                  <option
                    key={district.id}
                    value={district.id}
                  >
                    {district.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Month */}
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
                  handleMonthChange(e.target.value)
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              >
                <option value="">Select Month</option>

                {MONTHS.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Find Button */}
            <button
              type="button"
              onClick={handleFindCrops}
              disabled={!stateId || !districtId || !month}
              className="w-full rounded-xl bg-green-700 px-6 py-4 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              🌾 Find Recommended Crops
            </button>

          </div>

          {/* Selection Summary */}
          {showResults &&
            selectedState &&
            selectedDistrict &&
            selectedMonth &&
            recommendation && (
              <div className="mt-8">

                <div className="rounded-2xl bg-green-50 p-5">

                  <div className="flex flex-wrap gap-2 text-sm">

                    <span className="rounded-full bg-white px-3 py-1.5 font-medium text-gray-700">
                      📍 {selectedState.name}
                    </span>

                    <span className="rounded-full bg-white px-3 py-1.5 font-medium text-gray-700">
                      🏘️ {selectedDistrict.name}
                    </span>

                    <span className="rounded-full bg-white px-3 py-1.5 font-medium text-gray-700">
                      📅 {selectedMonth.name}
                    </span>

                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      Season
                    </p>

                    <p className="font-bold text-green-800">
                      {recommendation.season}
                    </p>
                  </div>

                </div>

                {/* Results */}
                <div className="mt-6">

                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-gray-900">
                      Recommended Crops
                    </h4>

                    <span className="text-sm text-gray-500">
                      {recommendation.crops.length} found
                    </span>
                  </div>

                  {recommendation.crops.length === 0 ? (
                    <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
                      <div className="text-3xl">🌱</div>

                      <p className="mt-3 font-semibold text-gray-800">
                        No crop recommendation available
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        We don't currently have enough data for this
                        location and month.
                      </p>
                    </div>
                  ) : (
                    <div className="mt-4 space-y-3">

                      {recommendation.crops.map(
                        ({ crop, priority }, index) => (
                          <div
                            key={crop.id}
                            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-green-200 hover:shadow-md"
                          >
                            <div className="flex items-center justify-between gap-4">

                              <div className="flex items-center gap-4">

                                {/* Rank */}
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-50 text-sm font-bold text-green-700">
                                  {index + 1}
                                </div>

                                {/* Crop */}
                                <div className="flex items-center gap-3">
                                  <span className="text-3xl">
                                    {crop.icon}
                                  </span>

                                  <div>
                                    <h5 className="font-bold text-gray-900">
                                      {crop.name}
                                    </h5>

                                    <p className="text-sm text-gray-500">
                                      {crop.nameHindi}
                                    </p>
                                  </div>
                                </div>

                              </div>

                              {/* Priority */}
                              <div className="shrink-0 text-right">

                                <span
                                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${getPriorityClass(
                                    priority
                                  )}`}
                                >
                                  Priority {priority}
                                </span>

                                <p className="mt-1 hidden text-xs text-gray-400 sm:block">
                                  {getPriorityLabel(priority)}
                                </p>

                              </div>

                            </div>
                          </div>
                        )
                      )}

                    </div>
                  )}

                </div>

                {/* Disclaimer */}
                {recommendation.crops.length > 0 && (
                  <div className="mt-5 rounded-xl bg-gray-50 p-4">
                    <p className="text-xs leading-relaxed text-gray-500">
                      ℹ️ Recommendations are based on available
                      location and seasonal crop data. Soil,
                      weather, water availability and market
                      conditions can affect the final crop choice.
                    </p>
                  </div>
                )}

              </div>
            )}

        </div>
      )}

      {/* IoT Mode */}
      {mode === "iot" && (
        <div className="mt-8 rounded-2xl border border-dashed border-green-200 bg-green-50 p-8 text-center">

          <div className="text-4xl">📡</div>

          <h4 className="mt-4 text-lg font-bold text-gray-900">
            Connect Your IlaGuard Device
          </h4>

          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-600">
            Connect IlaPot, IlaFarm or another IlaGuard device
            to use real-time soil and environmental data for
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

      {/* Soil Report Mode */}
      {mode === "report" && (
        <div className="mt-8">

          <div className="rounded-2xl border border-dashed border-green-300 bg-green-50 p-8 text-center">

            <div className="text-4xl">📄</div>

            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Upload Soil Report
            </h4>

            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-600">
              Upload your soil test report and IlaGuard will
              eventually use pH, N, P, K and other parameters
              to improve crop recommendations.
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
  );
}