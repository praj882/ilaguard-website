"use client";

import { useEffect, useMemo, useState } from "react";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

import { auth } from "@/lib/firebase";

import { STATES } from "@/data/states";
import { DISTRICTS } from "@/data/districts";
import { MANDIS } from "@/data/mandis";
import { CROPS } from "@/data/crops";

import {
  saveMandiPrice,
  updateMandiPrice,
  subscribeToMandiPrice,
} from "@/lib/mandiPriceService";

// ============================================================
// TYPES
// ============================================================

type CropCategory = {
  id: string;
  name: string;
  nameHindi: string;
  icon: string;
};

// ============================================================
// CROP CATEGORIES
// ============================================================

const CROP_CATEGORIES: CropCategory[] = [
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
// HELPERS
// ============================================================

function getTodayDate(): string {
  return new Date().toISOString().split("T")[0];
}

// ============================================================
// PAGE
// ============================================================

export default function MandiPricesPage() {
  const router = useRouter();

  // ==========================================================
  // AUTH
  // ==========================================================

  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // ==========================================================
  // LOCATION SELECTION
  // ==========================================================

  const [selectedStateId, setSelectedStateId] = useState("");
  const [selectedDistrictId, setSelectedDistrictId] =
    useState("");
  const [selectedMandiId, setSelectedMandiId] =
    useState("");

  // ==========================================================
  // CROP SELECTION
  // ==========================================================

  const [selectedCropCategory, setSelectedCropCategory] =
    useState("");
  const [selectedCropId, setSelectedCropId] =
    useState("");

  // ==========================================================
  // PRICE DATA
  // ==========================================================

  const [marketDate, setMarketDate] =
    useState(getTodayDate());

  const [minPrice, setMinPrice] = useState("");
  const [modalPrice, setModalPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [unit, setUnit] = useState("quintal");

  // ==========================================================
  // UI STATE
  // ==========================================================

  const [loadingPrice, setLoadingPrice] =
    useState(false);

  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ==========================================================
  // EXISTING PRICE
  // ==========================================================

  const [existingPrice, setExistingPrice] =
    useState<any | null>(null);

  // ==========================================================
  // AUTH LISTENER
  // ==========================================================

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setAuthLoading(false);

        if (!currentUser) {
          router.replace("/coordinator/login");
        }
      }
    );

    return () => unsubscribe();
  }, [router]);

  // ==========================================================
  // SELECTED STATE
  // ==========================================================

  const selectedState = useMemo(() => {
    return STATES.find(
      (state) => state.id === selectedStateId
    );
  }, [selectedStateId]);

  // ==========================================================
  // FILTER DISTRICTS
  // ==========================================================

  const filteredDistricts = useMemo(() => {
    if (!selectedStateId) {
      return [];
    }

    return DISTRICTS.filter(
      (district) =>
        district.stateId === selectedStateId
    );
  }, [selectedStateId]);

  // ==========================================================
  // SELECTED DISTRICT
  // ==========================================================

  const selectedDistrict = useMemo(() => {
    return filteredDistricts.find(
      (district) =>
        district.id === selectedDistrictId
    );
  }, [
    filteredDistricts,
    selectedDistrictId,
  ]);

  // ==========================================================
  // FILTER MANDIS
  // ==========================================================

  const filteredMandis = useMemo(() => {
    if (!selectedState || !selectedDistrict) {
      return [];
    }

    return MANDIS.filter(
      (mandi) =>
        mandi.stateName === selectedState.name &&
        mandi.districtName === selectedDistrict.name
    );
  }, [
    selectedState,
    selectedDistrict,
  ]);

  // ==========================================================
  // SELECTED MANDI
  // ==========================================================

  const selectedMandi = useMemo(() => {
    return filteredMandis.find(
      (mandi) =>
        mandi.id === selectedMandiId
    );
  }, [
    filteredMandis,
    selectedMandiId,
  ]);

  // ==========================================================
  // FILTER CROPS BY CATEGORY
  // ==========================================================

  const filteredCrops = useMemo(() => {
    if (!selectedCropCategory) {
      return [];
    }

    return CROPS.filter(
      (crop) =>
        crop.category === selectedCropCategory
    );
  }, [selectedCropCategory]);

  // ==========================================================
  // SELECTED CROP
  // ==========================================================

  const selectedCrop = useMemo(() => {
    return filteredCrops.find(
      (crop) =>
        crop.id === selectedCropId
    );
  }, [
    filteredCrops,
    selectedCropId,
  ]);

  // ==========================================================
  // RESET PRICE FORM
  // ==========================================================

  function resetPriceForm() {
    setExistingPrice(null);

    setMarketDate(getTodayDate());

    setMinPrice("");
    setModalPrice("");
    setMaxPrice("");

    setUnit("quintal");
  }

  // ==========================================================
  // STATE CHANGE
  // ==========================================================

  function handleStateChange(value: string) {
    setSelectedStateId(value);

    setSelectedDistrictId("");
    setSelectedMandiId("");

    setSelectedCropCategory("");
    setSelectedCropId("");

    resetPriceForm();

    setError("");
    setSuccess("");
  }

  // ==========================================================
  // DISTRICT CHANGE
  // ==========================================================

  function handleDistrictChange(value: string) {
    setSelectedDistrictId(value);

    setSelectedMandiId("");

    setSelectedCropCategory("");
    setSelectedCropId("");

    resetPriceForm();

    setError("");
    setSuccess("");
  }

  // ==========================================================
  // MANDI CHANGE
  // ==========================================================

  function handleMandiChange(value: string) {
    setSelectedMandiId(value);

    setSelectedCropCategory("");
    setSelectedCropId("");

    resetPriceForm();

    setError("");
    setSuccess("");
  }

  // ==========================================================
  // CROP CATEGORY CHANGE
  // ==========================================================

  function handleCropCategoryChange(
    value: string
  ) {
    setSelectedCropCategory(value);

    setSelectedCropId("");

    resetPriceForm();

    setError("");
    setSuccess("");
  }

  // ==========================================================
  // CROP CHANGE
  // ==========================================================

  function handleCropChange(value: string) {
    setSelectedCropId(value);

    resetPriceForm();

    setError("");
    setSuccess("");
  }

  // ==========================================================
  // LOAD EXISTING MANDI PRICE
  // ==========================================================

  useEffect(() => {
    if (
      !selectedMandiId ||
      !selectedCropId
    ) {
      setExistingPrice(null);
      return;
    }

    setLoadingPrice(true);
    setError("");
    setSuccess("");

    const unsubscribe =
      subscribeToMandiPrice(
        selectedMandiId,
        selectedCropId,
        (price: any) => {
          setLoadingPrice(false);

          if (price) {
            setExistingPrice(price);

            setMarketDate(
              price.marketDate ||
                getTodayDate()
            );

            setMinPrice(
              price.min !== undefined
                ? String(price.min)
                : ""
            );

            setModalPrice(
              price.modal !== undefined
                ? String(price.modal)
                : ""
            );

            setMaxPrice(
              price.max !== undefined
                ? String(price.max)
                : ""
            );

            setUnit(
              price.unit || "quintal"
            );
          } else {
            setExistingPrice(null);

            setMarketDate(
              getTodayDate()
            );

            setMinPrice("");
            setModalPrice("");
            setMaxPrice("");

            setUnit("quintal");
          }
        }
      );

    return () => {
      unsubscribe();
    };
  }, [
    selectedMandiId,
    selectedCropId,
  ]);

  // ==========================================================
  // SAVE / UPDATE PRICE
  // ==========================================================

  async function handleSave() {
    setError("");
    setSuccess("");

    // --------------------------------------------------------
    // AUTH VALIDATION
    // --------------------------------------------------------

    if (!user) {
      setError(
        "Coordinator authentication is required."
      );
      return;
    }

    if (!user.uid) {
      setError(
        "Coordinator user ID is not available."
      );
      return;
    }

    // --------------------------------------------------------
    // LOCATION VALIDATION
    // --------------------------------------------------------

    if (!selectedStateId) {
      setError("Please select a state.");
      return;
    }

    if (!selectedDistrictId) {
      setError(
        "Please select a district."
      );
      return;
    }

    if (!selectedMandiId) {
      setError(
        "Please select a mandi."
      );
      return;
    }

    // --------------------------------------------------------
    // CROP VALIDATION
    // --------------------------------------------------------

    if (!selectedCropCategory) {
      setError(
        "Please select a crop category."
      );
      return;
    }

    if (!selectedCropId) {
      setError(
        "Please select a crop."
      );
      return;
    }

    // --------------------------------------------------------
    // MARKET DATE VALIDATION
    // --------------------------------------------------------

    if (!marketDate) {
      setError(
        "Please select the market date."
      );
      return;
    }

    // --------------------------------------------------------
    // PRICE VALIDATION
    // --------------------------------------------------------

    if (
      !minPrice ||
      !modalPrice ||
      !maxPrice
    ) {
      setError(
        "Please enter min, modal and max prices."
      );
      return;
    }

    const numericMin = Number(minPrice);
    const numericModal =
      Number(modalPrice);
    const numericMax =
      Number(maxPrice);

    if (
      !Number.isFinite(numericMin) ||
      !Number.isFinite(numericModal) ||
      !Number.isFinite(numericMax)
    ) {
      setError(
        "Please enter valid price values."
      );
      return;
    }

    if (
      numericMin < 0 ||
      numericModal < 0 ||
      numericMax < 0
    ) {
      setError(
        "Price cannot be negative."
      );
      return;
    }

    if (
      numericMin > numericModal
    ) {
      setError(
        "Min price cannot be greater than modal price."
      );
      return;
    }

    if (
      numericModal > numericMax
    ) {
      setError(
        "Modal price cannot be greater than max price."
      );
      return;
    }

    if (
      numericMin > numericMax
    ) {
      setError(
        "Min price cannot be greater than max price."
      );
      return;
    }

    // --------------------------------------------------------
    // SELECTED DATA VALIDATION
    // --------------------------------------------------------

    if (!selectedMandi) {
      setError(
        "Selected mandi could not be found."
      );
      return;
    }

    if (!selectedCrop) {
      setError(
        "Selected crop could not be found."
      );
      return;
    }

    // --------------------------------------------------------
    // START SAVE
    // --------------------------------------------------------

    setSaving(true);

    try {
      // ======================================================
      // IMPORTANT:
      // updatedBy = Firebase Auth user's UID
      // ======================================================

      const priceData = {
        mandiId: selectedMandi.id,
        cropId: selectedCrop.id,

        marketDate,

        min: numericMin,
        modal: numericModal,
        max: numericMax,

        unit,

        updatedAt: getTodayDate(),

        updatedBy: user.uid,
      };

      let saveResult = false;

      // ======================================================
      // UPDATE EXISTING PRICE
      // ======================================================

      if (existingPrice) {
        saveResult =
          await updateMandiPrice(
            selectedMandi.id,
            selectedCrop.id,
            {
              marketDate,

              min: numericMin,
              modal: numericModal,
              max: numericMax,

              unit,

              updatedAt:
                getTodayDate(),

              updatedBy: user.uid,
            } as any
          );
      }

      // ======================================================
      // SAVE NEW PRICE
      // ======================================================

      else {
        saveResult =
          await saveMandiPrice(
            priceData as any
          );
      }

      // ======================================================
      // SAVE FAILED
      // ======================================================

      if (!saveResult) {
        setError(
          "Failed to save mandi price. Please try again."
        );
        return;
      }

      // ======================================================
      // SUCCESS
      // ======================================================

      setSuccess(
        existingPrice
          ? "Mandi price updated successfully."
          : "Mandi price saved successfully."
      );
    } catch (err) {
      console.error(
        "Failed to save mandi price:",
        err
      );

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(
          "Something went wrong while saving."
        );
      }
    } finally {
      setSaving(false);
    }
  }

  // ==========================================================
  // AUTH LOADING
  // ==========================================================

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-sm text-slate-500">
          Checking coordinator access...
        </div>
      </div>
    );
  }

  // ==========================================================
  // NO USER
  // ==========================================================

  if (!user) {
    return null;
  }

  // ==========================================================
  // UI
  // ==========================================================

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ====================================================
          HEADER
      ==================================================== */}

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Mandi Price Coordinator
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Update daily mandi prices
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm font-medium text-slate-700">
              {user.email}
            </p>

            <p className="text-xs text-slate-400">
              Coordinator
            </p>
          </div>
        </div>
      </header>

      {/* ====================================================
          MAIN
      ==================================================== */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* ==================================================
            PAGE INTRO
        ================================================== */}

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Update Mandi Price
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Select the location and crop first, then
            enter the market price for the selected
            date.
          </p>
        </div>

        {/* ==================================================
            ERROR
        ================================================== */}

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* ==================================================
            SUCCESS
        ================================================== */}

        {success && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {success}
          </div>
        )}

        {/* ==================================================
            MAIN CARD
        ================================================== */}

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* =================================================
              LOCATION
          ================================================= */}

          <div className="border-b border-slate-200 p-6">
            <div className="mb-5">
              <h3 className="text-base font-semibold text-slate-900">
                1. Select Location
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Choose the state, district and mandi.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {/* STATE */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  State
                </label>

                <select
                  value={selectedStateId}
                  onChange={(event) =>
                    handleStateChange(
                      event.target.value
                    )
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                >
                  <option value="">
                    Select state
                  </option>

                  {STATES.map((state) => (
					  <option
						key={state.id}
						value={state.id}
						disabled={!state.supported}
					  >
						{state.name} - {state.nameHindi}
						{!state.supported
						  ? " (Coming Soon)"
						  : ""}
					  </option>
				  ))}
                </select>
              </div>

              {/* DISTRICT */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  District
                </label>

                <select
                  value={
                    selectedDistrictId
                  }
                  onChange={(event) =>
                    handleDistrictChange(
                      event.target.value
                    )
                  }
                  disabled={
                    !selectedStateId
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                >
                  <option value="">
                    Select district
                  </option>

                  {filteredDistricts.map(
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

              {/* MANDI */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Mandi
                </label>

                <select
                  value={selectedMandiId}
                  onChange={(event) =>
                    handleMandiChange(
                      event.target.value
                    )
                  }
                  disabled={
                    !selectedDistrictId
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                >
                  <option value="">
                    Select mandi
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

                {selectedDistrictId &&
                  filteredMandis.length ===
                    0 && (
                    <p className="mt-2 text-xs text-amber-600">
                      No mandi available
                      for this district.
                    </p>
                  )}
              </div>
            </div>
          </div>

          {/* =================================================
              CROP
          ================================================= */}

          <div className="border-b border-slate-200 p-6">
            <div className="mb-5">
              <h3 className="text-base font-semibold text-slate-900">
                2. Select Crop
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Select the crop category first, then
                choose a crop from that category.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* CROP CATEGORY */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Crop Category
                </label>

                <select
                  value={
                    selectedCropCategory
                  }
                  onChange={(event) =>
                    handleCropCategoryChange(
                      event.target.value
                    )
                  }
                  disabled={
                    !selectedMandiId
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                >
                  <option value="">
                    Select crop category
                  </option>

                  {CROP_CATEGORIES.map(
                    (category) => (
                      <option
                        key={category.id}
                        value={category.id}
                      >
                        {category.icon}{" "}
                        {category.name} (
                        {
                          category.nameHindi
                        }
                        )
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* CROP */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Crop
                </label>

                <select
                  value={selectedCropId}
                  onChange={(event) =>
                    handleCropChange(
                      event.target.value
                    )
                  }
                  disabled={
                    !selectedCropCategory
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                >
                  <option value="">
                    Select crop
                  </option>

                  {filteredCrops.map(
                    (crop) => (
                      <option
                        key={crop.id}
                        value={crop.id}
                      >
                        {crop.name}
                        {crop.nameHindi
                          ? ` (${crop.nameHindi})`
                          : ""}
                      </option>
                    )
                  )}
                </select>

                {selectedCropCategory &&
                  filteredCrops.length ===
                    0 && (
                    <p className="mt-2 text-xs text-amber-600">
                      No crops found in
                      this category.
                    </p>
                  )}
              </div>
            </div>
          </div>

          {/* =================================================
              MARKET PRICE
          ================================================= */}

          <div className="p-6">
            <div className="mb-5">
              <h3 className="text-base font-semibold text-slate-900">
                3. Enter Market Price
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Enter the price for the selected mandi
                and market date.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* MARKET DATE */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Market Date
                </label>

                <input
                  type="date"
                  value={marketDate}
                  onChange={(event) =>
                    setMarketDate(
                      event.target.value
                    )
                  }
                  disabled={
                    !selectedCropId
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                />

                <p className="mt-1 text-xs text-slate-400">
                  Date for which this mandi price
                  applies.
                </p>
              </div>

              {/* UNIT */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Unit
                </label>

                <select
                  value={unit}
                  onChange={(event) =>
                    setUnit(
                      event.target.value
                    )
                  }
                  disabled={
                    !selectedCropId
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                >
                  <option value="quintal">
                    Quintal
                  </option>

                  <option value="kg">
                    Kilogram
                  </option>

                  <option value="ton">
                    Ton
                  </option>
                </select>
              </div>

              {/* MIN PRICE */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Minimum Price
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                    ₹
                  </span>

                  <input
                    type="number"
                    min="0"
                    value={minPrice}
                    onChange={(event) =>
                      setMinPrice(
                        event.target.value
                      )
                    }
                    disabled={
                      !selectedCropId
                    }
                    placeholder="Enter minimum price"
                    className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-9 pr-4 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                  />
                </div>
              </div>

              {/* MODAL PRICE */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Modal Price
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                    ₹
                  </span>

                  <input
                    type="number"
                    min="0"
                    value={modalPrice}
                    onChange={(event) =>
                      setModalPrice(
                        event.target.value
                      )
                    }
                    disabled={
                      !selectedCropId
                    }
                    placeholder="Enter modal price"
                    className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-9 pr-4 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                  />
                </div>
              </div>

              {/* MAX PRICE */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Maximum Price
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                    ₹
                  </span>

                  <input
                    type="number"
                    min="0"
                    value={maxPrice}
                    onChange={(event) =>
                      setMaxPrice(
                        event.target.value
                      )
                    }
                    disabled={
                      !selectedCropId
                    }
                    placeholder="Enter maximum price"
                    className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-9 pr-4 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                CURRENT PRICE
            ================================================= */}

            {selectedCropId && (
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">
                      Current Price
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      {selectedMandi?.name} ·{" "}
                      {selectedCrop?.name}
                    </p>
                  </div>

                  {loadingPrice && (
                    <span className="text-xs text-slate-400">
                      Loading...
                    </span>
                  )}
                </div>

                {existingPrice ? (
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-slate-400">
                        Min
                      </p>

                      <p className="mt-1 text-lg font-semibold text-slate-800">
                        ₹
                        {
                          existingPrice.min
                        }
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Modal
                      </p>

                      <p className="mt-1 text-lg font-semibold text-green-700">
                        ₹
                        {
                          existingPrice.modal
                        }
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Max
                      </p>

                      <p className="mt-1 text-lg font-semibold text-slate-800">
                        ₹
                        {
                          existingPrice.max
                        }
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">
                    No price has been entered yet for
                    this mandi and crop.
                  </p>
                )}
              </div>
            )}

            {/* =================================================
                SAVE BUTTON
            ================================================= */}

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={handleSave}
                disabled={
                  saving ||
                  loadingPrice ||
                  !selectedCropId
                }
                className="rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {saving
                  ? "Saving..."
                  : existingPrice
                    ? "Update Mandi Price"
                    : "Save Mandi Price"}
              </button>
            </div>
          </div>
        </div>

        {/* ==================================================
            SELECTION SUMMARY
        ================================================== */}

        {selectedMandi &&
          selectedCrop && (
            <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-5">
              <h3 className="text-sm font-semibold text-green-900">
                Selected Entry
              </h3>

              <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-5">
                {/* STATE */}

                <div>
                  <span className="text-xs text-green-700">
                    State
                  </span>

                  <p className="font-medium text-green-950">
                    {selectedState?.name}
                  </p>
                </div>

                {/* DISTRICT */}

                <div>
                  <span className="text-xs text-green-700">
                    District
                  </span>

                  <p className="font-medium text-green-950">
                    {selectedDistrict?.name}
                  </p>
                </div>

                {/* MANDI */}

                <div>
                  <span className="text-xs text-green-700">
                    Mandi
                  </span>

                  <p className="font-medium text-green-950">
                    {selectedMandi.name}
                  </p>
                </div>

                {/* CATEGORY */}

                <div>
                  <span className="text-xs text-green-700">
                    Category
                  </span>

                  <p className="font-medium text-green-950">
                    {CROP_CATEGORIES.find(
                      (category) =>
                        category.id ===
                        selectedCropCategory
                    )?.name || "-"}
                  </p>
                </div>

                {/* CROP */}

                <div>
                  <span className="text-xs text-green-700">
                    Crop
                  </span>

                  <p className="font-medium text-green-950">
                    {selectedCrop.name}
                  </p>
                </div>
              </div>
            </div>
          )}
      </main>
    </div>
  );
}