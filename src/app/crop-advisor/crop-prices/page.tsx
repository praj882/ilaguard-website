
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

type SortOption =
  | "date-desc"
  | "date-asc"
  | "modal-asc"
  | "modal-desc";

export default function MandiPriceCard() {
  const [stateId, setStateId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [mandiId, setMandiId] = useState("");

  const [prices, setPrices] = useState<MandiPrice[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // New: Search and sorting options
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("date-desc");

  // ==========================================================
  // DISTRICTS FOR SELECTED STATE
  // ==========================================================

  const districts = useMemo(() => {
    if (!stateId) return [];

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
    if (!selectedDistrict) return [];

    const selectedState = STATES.find(
      (state) => String(state.id) === stateId
    );

    if (!selectedState) return [];

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
  // Existing service and loading behavior preserved
  // ==========================================================

  useEffect(() => {
    if (!mandiId) {
      setPrices([]);
      setLoading(false);
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
    setSearchText("");
    setSortBy("date-desc");
  }

  // ==========================================================
  // DISTRICT CHANGE
  // ==========================================================

  function handleDistrictChange(value: string) {
    setDistrictId(value);
    setMandiId("");
    setPrices([]);
    setError("");
    setSearchText("");
    setSortBy("date-desc");
  }

  // ==========================================================
  // MANDI CHANGE
  // ==========================================================

  function handleMandiChange(value: string) {
    setMandiId(value);
    setPrices([]);
    setError("");
    setSearchText("");
    setSortBy("date-desc");
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
  // Supports Firebase timestamps, YYYY-MM-DD, ISO strings
  // ==========================================================

  function parseDate(value?: string | number): Date | null {
    if (value === undefined || value === null || value === "") {
      return null;
    }

    let date: Date;

    if (typeof value === "number") {
      date = new Date(value);
    } else {
      const trimmed = value.trim();

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
  // Prefer marketDate, then updatedAt
  // ==========================================================

  function getPriceDate(price: MandiPrice) {
    return price.marketDate ?? price.updatedAt;
  }

  // ==========================================================
  // SEARCH + SORT PRICES
  // New functionality; original price records are unchanged
  // ==========================================================

  const sortedPrices = useMemo(() => {
    const text = searchText.trim().toLocaleLowerCase();

    const filtered = prices.filter((price) => {
      const crop = CROPS.find(
        (item) => item.id === price.cropId
      );

      if (!text) return true;

      const searchableFields = [
        crop?.name,
        crop?.nameHindi,
        price.cropId,
        price.variety,
      ];

      return searchableFields.some((field) =>
        (field ?? "").toLocaleLowerCase().includes(text)
      );
    });

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return (
            (parseDate(getPriceDate(b))?.getTime() ?? 0) -
            (parseDate(getPriceDate(a))?.getTime() ?? 0)
          );

        case "date-asc":
          return (
            (parseDate(getPriceDate(a))?.getTime() ?? 0) -
            (parseDate(getPriceDate(b))?.getTime() ?? 0)
          );

        case "modal-asc":
          return a.modal - b.modal;

        case "modal-desc":
          return b.modal - a.modal;

        default:
          return 0;
      }
    });
  }, [prices, searchText, sortBy]);

  // ==========================================================
  // LATEST AVAILABLE PRICE DATE
  // Based on all prices, not the filtered search results
  // ==========================================================

  const latestPriceDate = useMemo(() => {
    if (prices.length === 0) return null;

    let latestValue: string | number | undefined;
    let latestTime = -Infinity;

    for (const price of prices) {
      const value = getPriceDate(price);
      const date = parseDate(value);

      if (!date) continue;

      const time = date.getTime();

      if (time > latestTime) {
        latestTime = time;
        latestValue = value;
      }
    }

    return latestValue;
  }, [prices]);

  // ==========================================================
  // RESET SEARCH AND SORT
  // Keeps the selected state, district and mandi unchanged
  // ==========================================================

  function handleResetFilters() {
    setSearchText("");
    setSortBy("date-desc");
  }

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <div className="rounded-3xl border border-amber-100 bg-white p-4 shadow-xl sm:p-6 lg:p-8">

      {/* HEADER */}

      <section className="border-b border-green-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-3 text-4xl">🌾</div>

            <h1 className="text-3xl font-bold text-green-900 sm:text-4xl">
              फसल के भाव
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              अपनी मंडी चुनें और वहाँ उपलब्ध फसलों के भाव देखें।
            </p>
          </div>
        </div>
      </section>

      {/* STATE, DISTRICT AND MANDI SELECTION */}

      <div className="mt-6 grid gap-4 md:grid-cols-3">

        {/* STATE */}

        <div>
          <label
            htmlFor="mandi-state"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            राज्य
          </label>

          <select
            id="mandi-state"
            value={stateId}
            onChange={(e) => handleStateChange(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
          >
            <option value="">राज्य चुनें</option>

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
            जिला
          </label>

          <select
            id="mandi-district"
            value={districtId}
            onChange={(e) => handleDistrictChange(e.target.value)}
            disabled={!stateId}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition disabled:cursor-not-allowed disabled:bg-gray-100 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
          >
            <option value="">
              {stateId ? "जिला चुनें" : "पहले राज्य चुनें"}
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
            मंडी
          </label>

          <select
            id="mandi"
            value={mandiId}
            onChange={(e) => handleMandiChange(e.target.value)}
            disabled={!districtId}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition disabled:cursor-not-allowed disabled:bg-gray-100 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
          >
            <option value="">
              {districtId ? "मंडी चुनें" : "पहले जिला चुनें"}
            </option>

            {filteredMandis.map((mandi) => (
              <option key={mandi.id} value={mandi.id}>
                {mandi.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* SELECTED MANDI */}

      {selectedMandi && (
        <div className="mt-8 rounded-2xl bg-green-50 p-5">
          <p className="text-sm font-medium text-green-700">
            चयनित मंडी
          </p>

          <h3 className="mt-1 text-xl font-bold text-gray-900">
            {selectedMandi.name}
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            {selectedMandi.districtName}, {selectedMandi.stateName}
          </p>
        </div>
      )}

      {/* LOADING */}

      {loading && (
        <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-8 text-center">
          <div className="text-3xl">⏳</div>

          <p className="mt-3 font-semibold text-gray-800">
            फसलों के भाव लोड हो रहे हैं...
          </p>

          <p className="mt-1 text-sm text-gray-500">
            उपलब्ध नवीनतम जानकारी प्राप्त की जा रही है।
          </p>
        </div>
      )}

      {/* ERROR */}

      {!loading && error && (
        <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-5 text-center">
          <div className="text-3xl">⚠️</div>

          <p className="mt-3 font-semibold text-red-800">
            भाव लोड नहीं हो सके
          </p>

          <p className="mt-1 text-sm text-red-600">{error}</p>

          <button
            type="button"
            onClick={() => handleMandiChange(mandiId)}
            className="mt-4 rounded-xl bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800"
          >
            फिर से प्रयास करें
          </button>
        </div>
      )}

      {/* PRICE RESULTS */}

      {!loading && !error && mandiId && prices.length > 0 && (
        <div className="mt-6">

          {/* RESULT HEADER */}

          <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                उपलब्ध फसलों के भाव
              </h3>

              <p className="text-sm text-gray-500">
                {sortedPrices.length} फसल
                {sortedPrices.length !== 1 ? "ें" : ""} दिखाई जा रही हैं
                {searchText.trim() ? ` (कुल ${prices.length} में से)` : ""}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-xs text-gray-400">
                सबसे नई भाव तारीख
              </p>

              <p className="text-sm font-medium text-gray-700">
                {formatDate(latestPriceDate ?? undefined)}
              </p>
            </div>
          </div>

          {/* SEARCH + SORT + RESET */}

          <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">

            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="🔎 फसल या किस्म खोजें..."
              aria-label="फसल या किस्म खोजें"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as SortOption)
              }
              aria-label="भाव क्रम चुनें"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            >
              <option value="date-desc">
                🕒 नवीनतम भाव पहले
              </option>

              <option value="date-asc">
                🕒 पुराने भाव पहले
              </option>

              <option value="modal-asc">
                ₹ मॉडल भाव: कम से ज्यादा
              </option>

              <option value="modal-desc">
                ₹ मॉडल भाव: ज्यादा से कम
              </option>
            </select>

            <button
              type="button"
              onClick={handleResetFilters}
              disabled={!searchText && sortBy === "date-desc"}
              className="rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              रीसेट
            </button>
          </div>

          {/* NO SEARCH RESULTS */}

          {sortedPrices.length === 0 && (
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
              <div className="text-4xl">🔎</div>

              <p className="mt-3 font-semibold text-gray-800">
                कोई फसल नहीं मिली
              </p>

              <p className="mt-1 text-sm text-gray-500">
                दूसरी फसल या किस्म का नाम खोजें।
              </p>

              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-4 rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
              >
                सभी फसलें देखें
              </button>
            </div>
          )}

          {/* MOBILE CARDS */}

          {sortedPrices.length > 0 && (
            <div className="space-y-3 md:hidden">
              {sortedPrices.map((price, index) => {
                const crop = getCrop(price.cropId);

                if (!crop) return null;

                return (
                  <div
                    key={`${price.cropId}-${index}`}
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

                        {price.variety && (
                          <p className="mt-1 text-xs text-gray-500">
                            किस्म: {price.variety}
                          </p>
                        )}
                      </div>

                      <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                        {price.unit || "quintal"}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="rounded-xl bg-white p-3 text-center">
                        <p className="text-xs text-gray-500">न्यूनतम</p>

                        <p className="mt-1 font-bold text-gray-800">
                          ₹{formatPrice(price.min)}
                        </p>
                      </div>

                      <div className="rounded-xl bg-green-100 p-3 text-center">
                        <p className="text-xs text-green-700">मॉडल</p>

                        <p className="mt-1 font-bold text-green-800">
                          ₹{formatPrice(price.modal)}
                        </p>
                      </div>

                      <div className="rounded-xl bg-white p-3 text-center">
                        <p className="text-xs text-gray-500">अधिकतम</p>

                        <p className="mt-1 font-bold text-gray-800">
                          ₹{formatPrice(price.max)}
                        </p>
                      </div>
                    </div>

                    {/* MARKET DATE */}

                    <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-3">
                      <p className="text-xs text-gray-400">
                        भाव की तारीख
                      </p>

                      <p className="text-xs font-medium text-gray-600">
                        {formatDate(getPriceDate(price))}
                      </p>
                    </div>

                    {/* SOURCE */}

                    {price.source && (
                      <p className="mt-1 text-right text-xs text-gray-400">
                        स्रोत: {price.source}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* DESKTOP TABLE */}

          {sortedPrices.length > 0 && (
            <div className="hidden overflow-hidden rounded-2xl border border-gray-200 md:block">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-5 py-4 text-sm font-semibold text-gray-700">
                        फसल
                      </th>

                      <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                        न्यूनतम
                      </th>

                      <th className="bg-green-50 px-5 py-4 text-right text-sm font-semibold text-green-700">
                        मॉडल भाव
                      </th>

                      <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                        अधिकतम
                      </th>

                      <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                        इकाई
                      </th>

                      <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                        भाव की तारीख
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100 bg-white">
                    {sortedPrices.map((price, index) => {
                      const crop = getCrop(price.cropId);

                      if (!crop) return null;

                      return (
                        <tr
                          key={`${price.cropId}-${index}`}
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
          )}
        </div>
      )}

      {/* NO DATA */}

      {!loading &&
        !error &&
        mandiId &&
        prices.length === 0 && (
          <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
            <div className="text-4xl">📊</div>

            <p className="mt-3 font-semibold text-gray-800">
              इस मंडी के भाव उपलब्ध नहीं हैं
            </p>

            <p className="mt-1 text-sm text-gray-500">
              फिलहाल इस मंडी के लिए फसल के भाव उपलब्ध नहीं हैं।
            </p>
          </div>
        )}

      {/* DISCLAIMER */}

      <div className="mt-6 rounded-xl bg-gray-50 p-3">
        <p className="text-xs leading-relaxed text-gray-500">
          ℹ️ मंडी भाव प्रतिदिन बदल सकते हैं। यहाँ IlaGuard में
          उपलब्ध नवीनतम जानकारी दिखाई जाती है। फसल बेचने का
          निर्णय लेने से पहले अपनी स्थानीय मंडी में नवीनतम
          भाव की पुष्टि अवश्य करें।
        </p>
      </div>
    </div>
  );
}