"use client";

import { useMemo, useState } from "react";

import { STATES } from "@/data/states";
import { CROPS } from "@/data/crops";

import {
  getStateCropMandiPrices,
  type StateCropMandiPrice,
} from "@/lib/mandiPriceService";

// ============================================================
// PAGE
// ============================================================

export default function MandiBhavPage() {
  // ----------------------------------------------------------
  // STATE
  // ----------------------------------------------------------

  const [selectedState, setSelectedState] =
    useState("01");

  const [selectedCrop, setSelectedCrop] =
    useState("");

  const [prices, setPrices] = useState<
    StateCropMandiPrice[]
  >([]);

  const [loading, setLoading] =
    useState(false);

  const [searched, setSearched] =
    useState(false);

  const [error, setError] =
    useState("");

  const [searchText, setSearchText] =
    useState("");

  // ----------------------------------------------------------
  // SORT
  //
  // Default:
  // Latest Firebase update first
  // ----------------------------------------------------------

  const [sortBy, setSortBy] = useState<
    | "updated-desc"
    | "updated-asc"
    | "modal-asc"
    | "modal-desc"
  >("updated-desc");

  // ==========================================================
  // SUPPORTED STATES
  // ==========================================================

  const supportedStates = useMemo(() => {
    return STATES.filter(
      (state) => state.supported
    );
  }, []);

  // ==========================================================
  // SELECTED STATE
  // ==========================================================

  const selectedStateData = useMemo(() => {
    return STATES.find(
      (state) =>
        state.id === selectedState
    );
  }, [selectedState]);

  // ==========================================================
  // SELECTED CROP
  // ==========================================================

  const selectedCropData = useMemo(() => {
    return CROPS.find(
      (crop) =>
        crop.id === selectedCrop
    );
  }, [selectedCrop]);

  // ==========================================================
  // FILTER + SORT MANDI PRICES
  // ==========================================================

  const filteredPrices = useMemo(() => {
    const text =
      searchText
        .trim()
        .toLowerCase();

    // --------------------------------------------------------
    // FILTER BY MANDI / DISTRICT
    // --------------------------------------------------------

    const filtered = prices.filter(
      (item) => {
        if (!text) {
          return true;
        }

        const mandiName =
          item.mandiName?.toLowerCase() ||
          "";

        const districtName =
          item.districtName?.toLowerCase() ||
          "";

        return (
          mandiName.includes(text) ||
          districtName.includes(text)
        );
      }
    );

    // --------------------------------------------------------
    // SORT
    // --------------------------------------------------------

    return [...filtered].sort(
      (a, b) => {
        switch (sortBy) {
          // ----------------------------------------------
          // Latest Firebase update first
          // ----------------------------------------------

          case "updated-desc":
            return (
              b.updatedAt -
              a.updatedAt
            );

          // ----------------------------------------------
          // Oldest Firebase update first
          // ----------------------------------------------

          case "updated-asc":
            return (
              a.updatedAt -
              b.updatedAt
            );

          // ----------------------------------------------
          // Modal price low to high
          // ----------------------------------------------

          case "modal-asc":
            return (
              a.modal -
              b.modal
            );

          // ----------------------------------------------
          // Modal price high to low
          // ----------------------------------------------

          case "modal-desc":
            return (
              b.modal -
              a.modal
            );

          default:
            return 0;
        }
      }
    );
  }, [
    prices,
    searchText,
    sortBy,
  ]);

  // ==========================================================
  // SEARCH
  // ==========================================================

  const handleSearch = async () => {
    // --------------------------------------------------------
    // Validation
    // --------------------------------------------------------

    if (!selectedState) {
      setError(
        "कृपया राज्य चुनें।"
      );
      return;
    }

    if (!selectedCrop) {
      setError(
        "कृपया फसल चुनें।"
      );
      return;
    }

    const state =
      STATES.find(
        (item) =>
          item.id === selectedState
      );

    if (!state) {
      setError(
        "चयनित राज्य उपलब्ध नहीं है।"
      );
      return;
    }

    // --------------------------------------------------------
    // Start loading
    // --------------------------------------------------------

    setLoading(true);
    setSearched(true);
    setError("");
    setPrices([]);
    setSearchText("");

    // Always start with latest updates first
    setSortBy("updated-desc");

    try {
      // ------------------------------------------------------
      // Get state + crop prices
      // ------------------------------------------------------

      const result =
        await getStateCropMandiPrices(
          state.name,
          selectedCrop
        );

      setPrices(result);
    } catch (err) {
      console.error(
        "Failed to load mandi prices:",
        err
      );

      setError(
        "मंडी भाव लोड नहीं हो सका। कृपया थोड़ी देर बाद फिर प्रयास करें।"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================================
  // LATEST MARKET DATE
  //
  // This is the latest "marketDate",
  // NOT the latest Firebase update date.
  // ==========================================================

  const latestDate =
    useMemo(() => {
      if (!prices.length) {
        return "";
      }

      const dates =
        prices
          .map(
            (item) =>
              item.marketDate
          )
          .filter(Boolean)
          .sort()
          .reverse();

      return dates[0] || "";
    }, [prices]);

  // ==========================================================
  // LATEST FIREBASE UPDATE
  //
  // Used only for informational purposes if needed.
  // ==========================================================

  const latestUpdatedAt =
    useMemo(() => {
      if (!prices.length) {
        return 0;
      }

      return Math.max(
        ...prices.map(
          (item) =>
            item.updatedAt || 0
        )
      );
    }, [prices]);

  // ==========================================================
  // FORMAT MARKET DATE
  //
  // marketDate = YYYY-MM-DD
  // ==========================================================

  const formatDate = (
    dateString: string
  ) => {
    if (!dateString) {
      return "";
    }

    const date =
      new Date(
        `${dateString}T00:00:00`
      );

    if (
      Number.isNaN(
        date.getTime()
      )
    ) {
      return dateString;
    }

    return date.toLocaleDateString(
      "hi-IN",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    );
  };

  // ==========================================================
  // FORMAT FIREBASE UPDATED DATE
  //
  // updatedAt = Firebase timestamp
  // ==========================================================

  const formatUpdatedDate = (
    timestamp?: number
  ) => {
    if (!timestamp) {
      return "—";
    }

    const date =
      new Date(timestamp);

    if (
      Number.isNaN(
        date.getTime()
      )
    ) {
      return "—";
    }

    return date.toLocaleDateString(
      "hi-IN",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    );
  };

  // ==========================================================
  // FORMAT PRICE
  // ==========================================================

  const formatPrice = (
    value: number
  ) => {
    return new Intl.NumberFormat(
      "en-IN",
      {
        maximumFractionDigits: 0,
      }
    ).format(value);
  };

  // ==========================================================
  // RESET
  // ==========================================================

  const handleReset = () => {
    setSelectedState("01");
    setSelectedCrop("");
    setPrices([]);
    setSearchText("");
    setSearched(false);
    setError("");

    // Reset sorting
    setSortBy("updated-desc");
  };

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">

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
              मंडी भाव
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              अपनी फसल और राज्य चुनें और
              सभी उपलब्ध मंडियों का भाव
              एक जगह देखें।
            </p>

          </div>

        </div>
      </section>

      {/* ======================================================
          SEARCH PANEL
      ====================================================== */}

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">

        <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6">

          <div className="grid gap-5 md:grid-cols-3">

            {/* =================================================
                STATE
            ================================================= */}

            <div>

              <label
                htmlFor="state"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                राज्य
              </label>

              <select
                id="state"
                value={selectedState}
                onChange={(event) => {
                  setSelectedState(
                    event.target.value
                  );

                  setPrices([]);
                  setSearched(false);
                  setError("");
                  setSearchText("");
                  setSortBy(
                    "updated-desc"
                  );
                }}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              >

                {supportedStates.map(
                  (state) => (
                    <option
                      key={state.id}
                      value={state.id}
                    >
                      {state.nameHindi ||
                        state.name}
                    </option>
                  )
                )}

              </select>

            </div>

            {/* =================================================
                CROP
            ================================================= */}

            <div>

              <label
                htmlFor="crop"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                फसल
              </label>

              <select
                id="crop"
                value={selectedCrop}
                onChange={(event) => {
                  setSelectedCrop(
                    event.target.value
                  );

                  setPrices([]);
                  setSearched(false);
                  setError("");
                  setSearchText("");
                  setSortBy(
                    "updated-desc"
                  );
                }}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              >

                <option value="">
                  फसल चुनें
                </option>

                {CROPS.map(
                  (crop) => (
                    <option
                      key={crop.id}
                      value={crop.id}
                    >
                      {crop.icon
                        ? `${crop.icon} `
                        : ""}
                      {crop.nameHindi ||
                        crop.name}
                    </option>
                  )
                )}

              </select>

            </div>

            {/* =================================================
                BUTTON
            ================================================= */}

            <div className="flex items-end gap-3">

              <button
                type="button"
                onClick={handleSearch}
                disabled={
                  loading ||
                  !selectedCrop
                }
                className="flex-1 rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-300"
              >

                {loading
                  ? "भाव खोज रहे हैं..."
                  : "🔍 मंडी भाव देखें"}

              </button>

              {searched && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  रीसेट
                </button>
              )}

            </div>

          </div>

          {/* ==================================================
              ERROR
          ================================================== */}

          {error && (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

        </div>

      </section>

      {/* ======================================================
          RESULTS
      ====================================================== */}

      {searched && !loading && (
        <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">

          {/* ==================================================
              RESULT HEADER
          ================================================== */}

          <div className="mb-5 rounded-2xl bg-green-800 p-5 text-white">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <div>

                <div className="text-sm text-green-100">
                  {selectedStateData?.nameHindi ||
                    selectedStateData?.name}
                </div>

                <h2 className="mt-1 text-2xl font-bold">
                  {selectedCropData?.icon ||
                    "🌾"}{" "}
                  {selectedCropData?.nameHindi ||
                    selectedCropData?.name}
                </h2>

                {/* ==================================================
                    LATEST MARKET DATE
                ================================================== */}

                {latestDate && (
                  <p className="mt-2 text-sm text-green-100">
                    📅 सबसे हाल की भाव तारीख:{" "}
                    {formatDate(
                      latestDate
                    )}
                  </p>
                )}

                {/* ==================================================
                    IMPORTANT FARMER NOTE
                ================================================== */}

                <p className="mt-1 text-xs text-green-200">
                  अलग-अलग मंडियों के भाव अलग
                  तारीख के हो सकते हैं।
                </p>

              </div>

              <div className="rounded-xl bg-white/10 px-5 py-3 text-center">

                <div className="text-2xl font-bold">
                  {prices.length}
                </div>

                <div className="text-xs text-green-100">
                  मंडियों में भाव उपलब्ध
                </div>

              </div>

            </div>

          </div>

          {/* ==================================================
              SEARCH + SORT
          ================================================== */}

          {prices.length > 0 && (
            <div className="mb-5 grid gap-3 md:grid-cols-[1fr_auto]">

              {/* ==================================================
                  MANDI SEARCH
              ================================================== */}

              <input
                type="text"
                value={searchText}
                onChange={(event) =>
                  setSearchText(
                    event.target.value
                  )
                }
                placeholder="🔎 मंडी या जिला खोजें..."
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />

              {/* ==================================================
                  SORT
              ================================================== */}

              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(
                    event.target.value as
                      | "updated-desc"
                      | "updated-asc"
                      | "modal-asc"
                      | "modal-desc"
                  )
                }
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              >

                <option value="updated-desc">
                  🕒 नवीनतम अपडेट पहले
                </option>

                <option value="updated-asc">
                  🕒 पुराने अपडेट पहले
                </option>

                <option value="modal-asc">
                  ₹ मॉडल भाव: कम से ज्यादा
                </option>

                <option value="modal-desc">
                  ₹ मॉडल भाव: ज्यादा से कम
                </option>

              </select>

            </div>
          )}

          {/* ==================================================
              NO DATA
          ================================================== */}

          {prices.length === 0 && (
            <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8 text-center">

              <div className="text-4xl">
                📊
              </div>

              <h3 className="mt-3 text-lg font-bold text-gray-800">
                इस फसल का मंडी भाव उपलब्ध नहीं है
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                चयनित राज्य की किसी मंडी में
                इस फसल का भाव अभी उपलब्ध नहीं मिला।
              </p>

            </div>
          )}

          {/* ==================================================
              SEARCH NO RESULT
          ================================================== */}

          {prices.length > 0 &&
            filteredPrices.length === 0 && (
              <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">

                <div className="text-3xl">
                  🔎
                </div>

                <p className="mt-3 text-sm text-gray-600">
                  आपकी खोज से कोई मंडी नहीं मिली।
                </p>

              </div>
            )}

          {/* ==================================================
              DESKTOP TABLE
          ================================================== */}

          {filteredPrices.length > 0 && (
            <div className="hidden overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:block">

              <div className="overflow-x-auto">

                <table className="w-full">

                  <thead className="bg-green-50">

                    <tr>

                      {/* MANDI */}

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-green-900">
                        मंडी
                      </th>

                      {/* DISTRICT */}

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-green-900">
                        जिला
                      </th>

                      {/* LAST UPDATE */}

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-green-900">
                        अंतिम अपडेट
                      </th>

                      {/* MIN */}

                      <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wide text-green-900">
                        न्यूनतम
                      </th>

                      {/* MAX */}

                      <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wide text-green-900">
                        अधिकतम
                      </th>

                      {/* MODAL */}

                      <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wide text-green-900">
                        मॉडल भाव
                      </th>

                      {/* UNIT */}

                      <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wide text-green-900">
                        इकाई
                      </th>

                    </tr>

                  </thead>

                  <tbody className="divide-y divide-gray-100">

                    {filteredPrices.map(
                      (item) => (

                        <tr
                          key={`${item.mandiId}-${item.cropId}`}
                          className="transition hover:bg-green-50/50"
                        >

                          {/* ==================================================
                              MANDI
                          ================================================== */}

                          <td className="px-5 py-4">

                            <div className="font-semibold text-gray-900">
                              {item.mandiName}
                            </div>

                            {/* MARKET DATE */}

                            <div className="mt-1 text-xs text-gray-500">
                              {formatDate(
                                item.marketDate
                              )}
                            </div>

                            {/* VARIETY */}

                            {item.variety && (
                              <div className="mt-1 text-xs text-gray-500">
                                किस्म:{" "}
                                {item.variety}
                              </div>
                            )}

                          </td>

                          {/* ==================================================
                              DISTRICT
                          ================================================== */}

                          <td className="px-5 py-4 text-sm text-gray-600">
                            {item.districtName}
                          </td>

                          {/* ==================================================
                              LAST UPDATE
                          ================================================== */}

                          <td className="px-5 py-4 text-sm text-gray-600">
                            <div>
                              {formatUpdatedDate(
                                item.updatedAt
                              )}
                            </div>

                            <div className="mt-1 text-xs text-gray-400">
                              रिकॉर्ड अपडेट
                            </div>
                          </td>

                          {/* ==================================================
                              MIN
                          ================================================== */}

                          <td className="px-5 py-4 text-right text-sm font-medium text-gray-700">
                            ₹
                            {formatPrice(
                              item.min
                            )}
                          </td>

                          {/* ==================================================
                              MAX
                          ================================================== */}

                          <td className="px-5 py-4 text-right text-sm font-medium text-gray-700">
                            ₹
                            {formatPrice(
                              item.max
                            )}
                          </td>

                          {/* ==================================================
                              MODAL
                          ================================================== */}

                          <td className="px-5 py-4 text-right">

                            <span className="font-bold text-green-700">
                              ₹
                              {formatPrice(
                                item.modal
                              )}
                            </span>

                          </td>

                          {/* ==================================================
                              UNIT
                          ================================================== */}

                          <td className="px-5 py-4 text-center text-xs text-gray-500">
                            {item.unit ||
                              "quintal"}
                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              </div>

            </div>
          )}

          {/* ======================================================
              MOBILE CARDS
          ====================================================== */}

          <div className="space-y-4 md:hidden">

            {filteredPrices.map(
              (item) => (

                <div
                  key={`${item.mandiId}-${item.cropId}`}
                  className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                >

                  {/* ==================================================
                      MANDI HEADER
                  ================================================== */}

                  <div className="flex items-start justify-between gap-3">

                    <div>

                      <h3 className="font-bold text-gray-900">
                        {item.mandiName}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        📍{" "}
                        {item.districtName}
                      </p>

                      {/* MARKET DATE */}

                      <p className="mt-1 text-xs text-gray-500">
                        📅 भाव की तारीख:{" "}
                        {formatDate(
                          item.marketDate
                        )}
                      </p>

                      {/* LAST UPDATE */}

                      <p className="mt-1 text-xs text-green-700">
                        🕒 अंतिम अपडेट:{" "}
                        {formatUpdatedDate(
                          item.updatedAt
                        )}
                      </p>

                      {/* VARIETY */}

                      {item.variety && (
                        <p className="mt-1 text-xs text-gray-500">
                          किस्म:{" "}
                          {item.variety}
                        </p>
                      )}

                    </div>

                    {/* ==================================================
                        MODAL PRICE
                    ================================================== */}

                    <div className="rounded-lg bg-green-50 px-3 py-2 text-center">

                      <div className="text-xs text-green-700">
                        मॉडल
                      </div>

                      <div className="font-bold text-green-800">
                        ₹
                        {formatPrice(
                          item.modal
                        )}
                      </div>

                    </div>

                  </div>

                  {/* ==================================================
                      PRICE BOXES
                  ================================================== */}

                  <div className="mt-4 grid grid-cols-3 gap-2">

                    {/* MIN */}

                    <div className="rounded-xl bg-gray-50 p-3 text-center">

                      <div className="text-xs text-gray-500">
                        न्यूनतम
                      </div>

                      <div className="mt-1 font-semibold text-gray-800">
                        ₹
                        {formatPrice(
                          item.min
                        )}
                      </div>

                    </div>

                    {/* MODAL */}

                    <div className="rounded-xl bg-green-50 p-3 text-center">

                      <div className="text-xs text-green-700">
                        मॉडल
                      </div>

                      <div className="mt-1 font-bold text-green-800">
                        ₹
                        {formatPrice(
                          item.modal
                        )}
                      </div>

                    </div>

                    {/* MAX */}

                    <div className="rounded-xl bg-gray-50 p-3 text-center">

                      <div className="text-xs text-gray-500">
                        अधिकतम
                      </div>

                      <div className="mt-1 font-semibold text-gray-800">
                        ₹
                        {formatPrice(
                          item.max
                        )}
                      </div>

                    </div>

                  </div>

                  {/* ==================================================
                      FOOTER
                  ================================================== */}

                  <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">

                    <span>
                      प्रति{" "}
                      {item.unit ||
                        "quintal"}
                    </span>

                    {item.source && (
                      <span>
                        स्रोत:{" "}
                        {item.source}
                      </span>
                    )}

                  </div>

                </div>

              )
            )}

          </div>

          {/* ======================================================
              INFORMATION
          ====================================================== */}

          {filteredPrices.length > 0 && (
            <div className="mt-6 rounded-xl bg-gray-50 p-4 text-xs leading-5 text-gray-500">

              <strong className="text-gray-700">
                ध्यान दें:
              </strong>{" "}
              यहां उपलब्ध मंडियों के रिकॉर्ड के
              अनुसार भाव दिखाए गए हैं। अलग-अलग
              मंडियों में भाव और उपलब्धता बदल सकती
              है। हर मंडी के सामने दी गई
              <strong className="text-gray-700">
                {" "}भाव की तारीख
              </strong>{" "}
              उस मंडी के भाव की तारीख है।
              <br />
              बिक्री से पहले अपनी स्थानीय मंडी
              में नवीनतम भाव की पुष्टि करें।

            </div>
          )}

        </section>
      )}

    </main>
  );
}