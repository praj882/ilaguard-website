"use client";

import { useEffect, useState } from "react";
import CurrentWeather from "@/components/weather/CurrentWeather";
import WeatherForecast from "@/components/weather/WeatherForecast";
import { getWeather, type WeatherData } from "@/lib/weatherService";
import {
  reverseGeocode,
  type ReverseGeocodeResult,
} from "@/lib/reverseGeocode";
import { getDistrictCoordinates } from "@/data/districtCoordinates";

// Adjust these imports if your actual data paths differ.
import { STATES } from "@/data/states";
import { DISTRICTS } from "@/data/districts";

type LocationStatus =
  | "idle"
  | "requesting"
  | "success"
  | "denied"
  | "error";

type LocationMode = "gps" | "district";

type UserLocation = {
  latitude: number;
  longitude: number;
};

export default function WeatherPage() {
  const [locationStatus, setLocationStatus] =
    useState<LocationStatus>("idle");

  const [locationMode, setLocationMode] =
    useState<LocationMode | null>(null);

  const [location, setLocation] =
    useState<UserLocation | null>(null);

  const [locationInfo, setLocationInfo] =
    useState<ReverseGeocodeResult | null>(null);

  const [weather, setWeather] =
    useState<WeatherData | null>(null);

  const [loadingWeather, setLoadingWeather] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const [selectedStateId, setSelectedStateId] =
    useState("");

  const [selectedDistrictId, setSelectedDistrictId] =
    useState("");

  // ============================================================
  // STATE / DISTRICT
  // ============================================================

  const selectedDistricts = DISTRICTS.filter(
    (district) => district.stateId === selectedStateId
  );

  // ============================================================
  // FETCH WEATHER
  // ============================================================

  async function loadWeather(
    latitude: number,
    longitude: number
  ) {
    try {
      setLoadingWeather(true);
      setError(null);

      const weatherData = await getWeather(
        latitude,
        longitude
      );

      setWeather(weatherData);
    } catch (err) {
      console.error("Weather loading error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "मौसम की जानकारी प्राप्त नहीं हो सकी।"
      );

      setWeather(null);
    } finally {
      setLoadingWeather(false);
    }
  }

  // ============================================================
  // GPS LOCATION
  // ============================================================

  function requestLocation() {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported.");

      setLocationStatus("error");
      setError(
        "आपके ब्राउज़र में Location सुविधा उपलब्ध नहीं है।"
      );

      return;
    }

    setLocationStatus("requesting");
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("GPS location:", {
          latitude,
          longitude,
          accuracy: position.coords.accuracy,
        });

        const userLocation = {
          latitude,
          longitude,
        };

        setLocation(userLocation);
        setLocationMode("gps");
        setLocationStatus("success");

        // --------------------------------------------------------
        // Reverse Geocode
        // --------------------------------------------------------

        try {
          const info = await reverseGeocode(
            latitude,
            longitude
          );

          console.log("Reverse geocoding:", info);

          setLocationInfo(info);
        } catch (geocodeError) {
          console.error(
            "Reverse geocoding error:",
            geocodeError
          );

          // Weather should still work even if reverse
          // geocoding fails.
          setLocationInfo(null);
        }

        // --------------------------------------------------------
        // Weather
        // --------------------------------------------------------

        await loadWeather(
          latitude,
          longitude
        );
      },

      (error) => {
        console.error("Geolocation error:", {
          code: error.code,
          message: error.message,
        });

        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationStatus("denied");
            setError(
              "Location permission नहीं मिली। आप अपना State और District चुन सकते हैं।"
            );
            break;

          case error.POSITION_UNAVAILABLE:
            setLocationStatus("error");
            setError(
              "आपकी location उपलब्ध नहीं हो सकी। कृपया State और District चुनें।"
            );
            break;

          case error.TIMEOUT:
            setLocationStatus("error");
            setError(
              "Location प्राप्त करने में अधिक समय लग गया। कृपया दोबारा प्रयास करें।"
            );
            break;

          default:
            setLocationStatus("error");
            setError(
              "Location प्राप्त नहीं हो सकी।"
            );
        }
      },
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 10 * 60 * 1000,
      }
    );
  }

  // ============================================================
  // DISTRICT FALLBACK
  // ============================================================

  async function handleDistrictWeather() {
    if (!selectedStateId || !selectedDistrictId) {
      setError(
        "कृपया पहले State और District चुनें।"
      );

      return;
    }

    const coordinates = getDistrictCoordinates(
      selectedStateId,
      selectedDistrictId
    );

    if (!coordinates) {
      setError(
        "इस District के लिए weather location उपलब्ध नहीं है।"
      );

      return;
    }

    try {
      setError(null);
      setLoadingWeather(true);

      setLocationMode("district");
      setLocationStatus("success");

      const district =
        selectedDistricts.find(
          (item) =>
            item.id === selectedDistrictId
        );

      setLocation({
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      });

      setLocationInfo({
        displayName:
          district?.name ??
          "Selected District",
        city: district?.name ?? null,
        district: district?.name ?? null,
        state:
          STATES.find(
            (state) =>
              state.id === selectedStateId
          )?.name ?? null,
        country: "India",
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      });

      const weatherData = await getWeather(
        coordinates.latitude,
        coordinates.longitude
      );

      setWeather(weatherData);
    } catch (err) {
      console.error(
        "District weather error:",
        err
      );

      setWeather(null);

      setError(
        err instanceof Error
          ? err.message
          : "District का मौसम प्राप्त नहीं हो सका।"
      );
    } finally {
      setLoadingWeather(false);
    }
  }

  // ============================================================
  // RESET LOCATION
  // ============================================================

  function resetLocation() {
    setLocationStatus("idle");
    setLocationMode(null);
    setLocation(null);
    setLocationInfo(null);
    setWeather(null);
    setError(null);

    setSelectedStateId("");
    setSelectedDistrictId("");
  }

  // ============================================================
  // UI
  // ============================================================

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

        {/* ======================================================
            HEADER
        ====================================================== */}

        <div className="mb-8 text-center">
          <div className="mb-3 text-4xl">
            🌦️
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            मौसम पूर्वानुमान
          </h1>

          <p className="mt-2 text-slate-600">
            अपने खेत के आसपास का मौसम जानें
          </p>
        </div>

        {/* ======================================================
            LOCATION REQUEST
        ====================================================== */}

        {locationStatus === "idle" && (
          <section className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-center">

              <div className="mb-4 text-5xl">
                📍
              </div>

              <h2 className="text-xl font-semibold text-slate-900">
                अपने क्षेत्र का मौसम देखें
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                बेहतर मौसम जानकारी के लिए अपने मोबाइल की
                Location अनुमति दें।
              </p>

              <button
                type="button"
                onClick={requestLocation}
                className="mt-6 w-full rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                📍 Location Allow करें
              </button>

              <button
                type="button"
                onClick={() => {
                  setLocationStatus("denied");
                  setError(null);
                }}
                className="mt-3 w-full rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
              >
                📍 State और District चुनें
              </button>

            </div>
          </section>
        )}

        {/* ======================================================
            REQUESTING
        ====================================================== */}

        {locationStatus === "requesting" && (
          <section className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">

            <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-green-600" />

            <h2 className="text-lg font-semibold text-slate-900">
              आपकी Location पता की जा रही है...
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              कृपया थोड़ी देर प्रतीक्षा करें।
            </p>

          </section>
        )}

        {/* ======================================================
            ERROR / DENIED + FALLBACK
        ====================================================== */}

        {(locationStatus === "denied" ||
          locationStatus === "error") &&
          !weather && (
            <section className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="mb-5 rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
                {error ??
                  "Location उपलब्ध नहीं है।"}
              </div>

              <h2 className="text-lg font-semibold text-slate-900">
                अपना क्षेत्र चुनें
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                State और District चुनकर मौसम देखें।
              </p>

              {/* STATE */}

              <div className="mt-5">
                <label
                  htmlFor="state"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  State
                </label>

                <select
                  id="state"
                  value={selectedStateId}
                  onChange={(event) => {
                    setSelectedStateId(
                      event.target.value
                    );
                    setSelectedDistrictId("");
                    setError(null);
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                >
                  <option value="">
                    State चुनें
                  </option>

                  {STATES.map((state) => (
                    <option
                      key={state.id}
                      value={state.id}
                    >
                      {state.name}
                      {state.nameHindi
                        ? ` (${state.nameHindi})`
                        : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* DISTRICT */}

              <div className="mt-4">
                <label
                  htmlFor="district"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  District
                </label>

                <select
                  id="district"
                  value={selectedDistrictId}
                  disabled={!selectedStateId}
                  onChange={(event) => {
                    setSelectedDistrictId(
                      event.target.value
                    );
                    setError(null);
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none disabled:bg-slate-100 focus:border-green-600 focus:ring-2 focus:ring-green-100"
                >
                  <option value="">
                    District चुनें
                  </option>

                  {selectedDistricts.map(
                    (district) => (
                      <option
                        key={district.id}
                        value={district.id}
                      >
                        {district.name}
                        {district.nameHindi
                          ? ` (${district.nameHindi})`
                          : ""}
                      </option>
                    )
                  )}
                </select>
              </div>

              <button
                type="button"
                onClick={handleDistrictWeather}
                disabled={
                  !selectedStateId ||
                  !selectedDistrictId ||
                  loadingWeather
                }
                className="mt-5 w-full rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loadingWeather
                  ? "मौसम प्राप्त हो रहा है..."
                  : "🌦️ मौसम देखें"}
              </button>

              <button
                type="button"
                onClick={requestLocation}
                className="mt-3 w-full rounded-xl border border-green-600 px-5 py-3 font-medium text-green-700 transition hover:bg-green-50"
              >
                📍 फिर से Location Allow करें
              </button>

            </section>
          )}

        {/* ======================================================
            WEATHER RESULT
        ====================================================== */}

        {weather && location && (
          <section className="space-y-6">

            {/* LOCATION CARD */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">
                      📍
                    </span>

                    <h2 className="font-semibold text-slate-900">
                      {locationInfo?.district ??
                        locationInfo?.city ??
                        "आपका क्षेत्र"}
                    </h2>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    {locationInfo?.state ??
                      "भारत"}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {locationMode === "gps"
                      ? "📍 GPS Location"
                      : "📍 District Location"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={resetLocation}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  स्थान बदलें
                </button>

              </div>
            </div>

            {/* CURRENT WEATHER */}

            <CurrentWeather weather={weather} />

            {/* FORECAST */}

            <WeatherForecast weather={weather} />

          </section>
        )}

        {/* ======================================================
            LOADING
        ====================================================== */}

        {loadingWeather && !weather && (
          <div className="mt-8 text-center text-sm text-slate-600">
            मौसम की जानकारी प्राप्त हो रही है...
          </div>
        )}

      </div>
    </main>
  );
}