"use client";

import { useMemo, useState } from "react";
import { STATES } from "@/data/states";
import { DISTRICTS } from "@/data/districts";

export default function CropAdvisorCard() {
  const [activeTab, setActiveTab] = useState("manual");

  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const [serviceMessage, setServiceMessage] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const filteredDistricts = useMemo(() => {
    if (!selectedState) return [];

    return DISTRICTS.filter(
      (district) => district.stateId === Number(selectedState)
    );
  }, [selectedState]);

  const handleStateChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const stateId = Number(e.target.value);

    setSelectedState(e.target.value);
    setSelectedDistrict("");

    const state = STATES.find((s) => s.id === stateId);

    if (state && !state.supported) {
      setServiceMessage(
        `Crop recommendation service is currently available only for Bihar. Support for ${state.name} is coming soon.`
      );
    } else {
      setServiceMessage("");
    }
  };

  const handleSearch = () => {
    if (!selectedState || !selectedDistrict || !selectedMonth) {
      alert("Please select State, District and Month.");
      return;
    }

    // TODO
    // Navigate to recommendation page

    console.log({
      state: selectedState,
      district: selectedDistrict,
      month: selectedMonth,
    });
  };

  return (
    <div className="mt-8 w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="p-6 border-b">

        <h2 className="text-2xl font-bold text-gray-900">
          🌾 Find Your Best Crop
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Discover the most suitable crops for your district.
        </p>

      </div>

      {/* Tabs */}

      <div className="grid grid-cols-3 border-b">

        <button
          onClick={() => setActiveTab("manual")}
          className={`py-3 text-sm font-semibold transition ${
            activeTab === "manual"
              ? "bg-green-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Manual
        </button>

        <button
          onClick={() => setActiveTab("iot")}
          className={`py-3 text-sm font-semibold transition ${
            activeTab === "iot"
              ? "bg-green-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          IoT
        </button>

        <button
          onClick={() => setActiveTab("report")}
          className={`py-3 text-sm font-semibold transition ${
            activeTab === "report"
              ? "bg-green-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Report
        </button>

      </div>

      {/* Body */}

      <div className="p-6">

        {/* ==================== Manual ==================== */}

        {activeTab === "manual" && (

          <div className="space-y-5">

            {/* State */}

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>

              <select
                value={selectedState}
                onChange={handleStateChange}
                className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="">Select State</option>

                {STATES.map((state) => (
                  <option
                    key={state.id}
                    value={state.id}
                  >
                    {state.name}
                    {!state.supported ? " (Coming Soon)" : ""}
                  </option>
                ))}

              </select>

            </div>

            {/* District */}

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                District
              </label>

              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                disabled={selectedState !== "1"}
                className="w-full rounded-xl border border-gray-300 p-3 disabled:bg-gray-100"
              >
                <option value="">
                  Select District
                </option>

                {filteredDistricts.map((district) => (

                  <option
                    key={district.id}
                    value={district.name}
                  >
                    {district.name}
                  </option>

                ))}

              </select>

            </div>

            {/* Month */}

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Month
              </label>

              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-3"
              >
                <option value="">
                  Select Month
                </option>

                {months.map((month) => (

                  <option
                    key={month}
                    value={month}
                  >
                    {month}
                  </option>

                ))}

              </select>

            </div>

            {serviceMessage && (

              <div className="rounded-xl border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-800">
                🚧 {serviceMessage}
              </div>

            )}

            <button
              onClick={handleSearch}
              disabled={selectedState !== "1"}
              className="w-full rounded-xl bg-orange-500 py-4 text-white font-semibold hover:bg-orange-600 transition disabled:bg-gray-400"
            >
              🌾 Find Best Crops
            </button>

          </div>

        )}

        {/* ==================== IoT ==================== */}

        {activeTab === "iot" && (

          <div className="space-y-5">

            <div className="rounded-xl bg-green-50 p-4">

              <h3 className="font-semibold text-green-700">
                Connect IlaGuard Device
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Connect your IoT device to automatically fetch
                soil moisture and sensor data.
              </p>

            </div>

            <input
              placeholder="Enter Device ID"
              className="w-full rounded-xl border border-gray-300 p-3"
            />

            <button className="w-full rounded-xl bg-green-600 py-4 text-white font-semibold hover:bg-green-700">
              Connect Device
            </button>

          </div>

        )}

        {/* ==================== Report ==================== */}

        {activeTab === "report" && (

          <div className="space-y-5">

            <div className="border-2 border-dashed rounded-xl p-8 text-center">

              <div className="text-5xl">
                📄
              </div>

              <h3 className="mt-4 font-semibold">
                Upload Soil Health Report
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                PDF, JPG or PNG
              </p>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="mt-5 w-full"
              />

            </div>

            <button className="w-full rounded-xl bg-orange-500 py-4 text-white font-semibold hover:bg-orange-600">
              Analyze Report
            </button>

          </div>

        )}

      </div>

    </div>
  );
}