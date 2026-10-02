"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { STATES } from "@/data/states";
import {
  filterGovernmentSchemes,
  getGovernmentSchemesByState,
  getGovernmentSchemeCategoryCounts,
} from "@/lib/governmentSchemeService";

import type { GovernmentSchemeCategory } from "@/data/governmentSchemes";

const CATEGORIES: Array<
  GovernmentSchemeCategory | "सभी"
> = [
  "सभी",
  "आर्थिक सहायता",
  "फसल बीमा",
  "कृषि ऋण",
  "कृषि यांत्रिकीकरण",
  "बीज",
  "खाद एवं मिट्टी",
  "सिंचाई",
  "बागवानी",
  "पौधा संरक्षण",
  "कृषि विकास",
  "अन्य",
];

export default function GovernmentSchemesPage() {
  /*
   * --------------------------------------------------------------
   * State
   * --------------------------------------------------------------
   */

  const supportedStates = STATES.filter(
    (state) => state.supported
  );

  const [selectedState, setSelectedState] =
    useState("01");

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState<GovernmentSchemeCategory | "सभी">(
      "सभी"
    );

  const [showAllCategories, setShowAllCategories] =
    useState(false);

  /*
   * --------------------------------------------------------------
   * Selected state
   * --------------------------------------------------------------
   */

  const currentState = STATES.find(
    (state) => state.id === selectedState
  );

  /*
   * --------------------------------------------------------------
   * Schemes for selected state
   * --------------------------------------------------------------
   */

  const stateSchemes = useMemo(() => {
    return getGovernmentSchemesByState(
      selectedState
    );
  }, [selectedState]);

  /*
   * --------------------------------------------------------------
   * Category counts
   * --------------------------------------------------------------
   */

  const categoryCounts = useMemo(() => {
    return getGovernmentSchemeCategoryCounts(
      stateSchemes
    );
  }, [stateSchemes]);

  /*
   * --------------------------------------------------------------
   * Filtered schemes
   * --------------------------------------------------------------
   */

  const filteredSchemes = useMemo(() => {
    return filterGovernmentSchemes({
      stateCode: selectedState,
      search,
      category,
    });
  }, [selectedState, search, category]);

  /*
   * --------------------------------------------------------------
   * Categories for mobile
   * --------------------------------------------------------------
   */

  const visibleCategories = showAllCategories
    ? CATEGORIES
    : CATEGORIES.slice(0, 5);

  /*
   * --------------------------------------------------------------
   * Reset
   * --------------------------------------------------------------
   */

  function clearFilters() {
    setSearch("");
    setCategory("सभी");
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-14">
      {/* ==========================================================
          HERO
      ========================================================== */}

      <section className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/crop-advisor"
              className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-green-100 hover:text-white"
            >
              ← Crop Advisor
            </Link>

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                🏛️
              </div>

              <div>
                <p className="text-sm font-medium text-green-100">
                  IlaGuard Crop Advisor
                </p>

                <p className="text-xs text-green-200">
                  किसानों के लिए सरकारी जानकारी
                </p>
              </div>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              किसानों के लिए सरकारी योजनाएँ
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-green-50 sm:text-lg">
              अपने राज्य में किसानों के लिए उपलब्ध
              सरकारी योजनाएँ खोजें और आधिकारिक जानकारी
              तक पहुँचें।
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            STATE
        ======================================================== */}

        <section className="-mt-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-md sm:p-6">
          <label
            htmlFor="scheme-state"
            className="mb-2 block text-sm font-bold text-gray-900"
          >
            अपना राज्य चुनें
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <select
              id="scheme-state"
              value={selectedState}
              onChange={(event) => {
                setSelectedState(event.target.value);
                clearFilters();
              }}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base font-medium outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 sm:max-w-md"
            >
              {supportedStates.map((state) => (
                <option
                  key={state.id}
                  value={state.id}
                >
                  {state.nameHindi} ({state.name})
                </option>
              ))}
            </select>

            <div className="flex items-center rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
              📍 {currentState?.nameHindi}
            </div>
          </div>
        </section>

        {/* ========================================================
            SEARCH
        ======================================================== */}

        <section className="mt-6">
          <label
            htmlFor="scheme-search"
            className="mb-2 block text-sm font-bold text-gray-900"
          >
            योजना खोजें
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg">
              🔎
            </span>

            <input
              id="scheme-search"
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="जैसे: बीमा, सिंचाई, बीज, कृषि यंत्र..."
              className="w-full rounded-2xl border border-gray-200 bg-white px-12 py-4 text-base shadow-sm outline-none placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>
        </section>

        {/* ========================================================
            CATEGORY
        ======================================================== */}

        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-gray-900">
              योजना की श्रेणी
            </h2>

            <button
              type="button"
              onClick={() =>
                setShowAllCategories(
                  (value) => !value
                )
              }
              className="text-sm font-semibold text-green-700"
            >
              {showAllCategories
                ? "कम दिखाएँ"
                : "सभी श्रेणियाँ"}
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {visibleCategories.map((item) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "border-green-700 bg-green-700 text-white"
                      : "border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:bg-green-50"
                  }`}
                >
                  {item}

                  <span
                    className={`rounded-full px-1.5 py-0.5 text-xs ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {categoryCounts[item] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            RESULT
        ======================================================== */}

        <section className="mt-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-green-700">
                {currentState?.nameHindi}
              </p>

              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-gray-900">
                {filteredSchemes.length} योजनाएँ मिलीं
              </h2>
            </div>

            {(search || category !== "सभी") && (
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-green-700 hover:bg-green-50"
              >
                फ़िल्टर हटाएँ
              </button>
            )}
          </div>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            योजना की पात्रता, लाभ, दस्तावेज़ और आवेदन की
            वर्तमान जानकारी के लिए आधिकारिक स्रोत देखें।
          </p>
        </section>

        {/* ========================================================
            CARDS
        ======================================================== */}

        <section className="mt-5">
          {filteredSchemes.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredSchemes.map((scheme) => (
                <article
                  key={scheme.id}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-lg bg-green-50 px-2.5 py-1.5 text-xs font-bold text-green-800">
                      {scheme.category}
                    </span>

                    <span className="text-xs font-medium text-gray-400">
                      {scheme.government}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-extrabold leading-7 text-gray-900">
                    {scheme.nameHindi}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-gray-500">
                    {scheme.nameEnglish}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-gray-700">
                    {scheme.shortDescriptionHindi}
                  </p>

                  <div className="mt-4 rounded-xl bg-gray-50 p-3">
                    <p className="text-xs font-semibold text-gray-500">
                      आधिकारिक स्रोत
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-800">
                      {scheme.officialSource}
                    </p>
                  </div>

                  <div className="mt-auto pt-5">
                    <Link
                      href={`/crop-advisor/government-schemes/${scheme.id}`}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-800"
                    >
                      पूरी जानकारी देखें
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-14 text-center">
              <div className="text-4xl">🔎</div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                कोई योजना नहीं मिली
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-600">
                खोज का शब्द बदलें या दूसरी श्रेणी चुनकर
                दोबारा देखें।
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 rounded-xl bg-green-700 px-5 py-3 text-sm font-bold text-white hover:bg-green-800"
              >
                सभी योजनाएँ देखें
              </button>
            </div>
          )}
        </section>

        {/* ========================================================
            OFFICIAL SOURCE
        ======================================================== */}

        <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">ℹ️</span>

            <div>
              <h2 className="font-bold text-blue-950">
                सरकारी योजना की जानकारी
              </h2>

              <p className="mt-2 text-sm leading-6 text-blue-900">
                योजना की वर्तमान पात्रता, लाभ, आवेदन की
                तारीख और आवश्यक दस्तावेज़ सरकारी नियमों
                के अनुसार बदल सकते हैं। आवेदन करने से
                पहले आधिकारिक स्रोत पर जानकारी जाँचें।
              </p>

              <a
                href="https://www.myscheme.gov.in/search"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-blue-800 shadow-sm ring-1 ring-blue-100 hover:bg-blue-100"
              >
                myScheme पर योजनाएँ खोजें
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================
            NOTICE
        ======================================================== */}

        <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <span className="text-xl">⚠️</span>

            <div>
              <h2 className="font-bold text-amber-950">
                जरूरी सूचना
              </h2>

              <p className="mt-2 text-sm leading-6 text-amber-900">
                IlaGuard Labs योजना की जानकारी तक पहुँच
                आसान बनाने का प्रयास करता है। योजना का
                लाभ संबंधित सरकारी विभाग के नियम और
                पात्रता के अनुसार मिलता है।
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}