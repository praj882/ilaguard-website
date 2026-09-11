"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [cropAdvisorOpen, setCropAdvisorOpen] =
    useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setProductsOpen(false);
    setSolutionsOpen(false);
    setCropAdvisorOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex h-20 items-center justify-between">

          {/* =====================================================
              LOGO
          ====================================================== */}

          <div>
            <Link href="/" onClick={closeMenus}>
              <h1 className="cursor-pointer text-3xl font-bold text-green-800">
                IlaGuard Labs
              </h1>
            </Link>

            <p className="hidden text-sm text-gray-600 md:block">
              Technology for Farmers, Opportunities for Engineers
            </p>
          </div>


          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <nav className="hidden items-center gap-7 font-medium lg:flex">

            {/* =================================================
                HOME
            ================================================== */}

            <Link
              href="/"
              onClick={closeMenus}
              className="transition hover:text-green-700"
            >
              Home
            </Link>


            {/* =================================================
                PRODUCTS DROPDOWN
            ================================================== */}

            <div className="relative">

              <button
                type="button"
                onClick={() => {
                  setProductsOpen(!productsOpen);
                  setSolutionsOpen(false);
                  setCropAdvisorOpen(false);
                }}
                className="flex items-center gap-2 transition hover:text-green-700"
              >
                Products

                <FaChevronDown
                  className={`text-xs transition-transform ${
                    productsOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>


              {productsOpen && (
                <div className="absolute left-1/2 top-full mt-4 w-[620px] -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl">

                  <div className="mb-4">

                    <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                      IlaGuard Products
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Smart technology for agriculture and
                      resource management.
                    </p>

                  </div>


                  <div className="grid grid-cols-2 gap-3">

                    {/* IlaPot */}

                    <Link
                      href="/products/ilapot"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="flex items-start gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-2xl">
                          🌱
                        </div>

                        <div>

                          <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
                            IlaPot
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Smart irrigation and plant monitoring.
                          </p>

                          <span className="mt-2 inline-block text-xs font-medium text-green-700">
                            Prototype →
                          </span>

                        </div>

                      </div>

                    </Link>


                    {/* IlaFarm */}

                    <Link
                      href="/products/ilafarm"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="flex items-start gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-2xl">
                          🌾
                        </div>

                        <div>

                          <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
                            IlaFarm
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Connected farm monitoring and intelligence.
                          </p>

                          <span className="mt-2 inline-block text-xs font-medium text-yellow-600">
                            In Development
                          </span>

                        </div>

                      </div>

                    </Link>


                    {/* IlaTank */}

                    <Link
                      href="/products/ilatank"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="flex items-start gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                          💧
                        </div>

                        <div>

                          <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
                            IlaTank
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Smart water level monitoring and control.
                          </p>

                          <span className="mt-2 inline-block text-xs font-medium text-yellow-600">
                            In Development
                          </span>

                        </div>

                      </div>

                    </Link>


                    {/* All Products */}

                    <Link
                      href="/products"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="flex h-full items-center gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xl">
                          →
                        </div>

                        <div>

                          <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
                            View All Products
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Explore the IlaGuard ecosystem.
                          </p>

                        </div>

                      </div>

                    </Link>

                  </div>

                </div>
              )}

            </div>


            {/* =================================================
                SOLUTIONS DROPDOWN
            ================================================== */}

            <div className="relative">

              <button
                type="button"
                onClick={() => {
                  setSolutionsOpen(!solutionsOpen);
                  setProductsOpen(false);
                  setCropAdvisorOpen(false);
                }}
                className="flex items-center gap-2 transition hover:text-green-700"
              >
                Solutions

                <FaChevronDown
                  className={`text-xs transition-transform ${
                    solutionsOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>


              {solutionsOpen && (
                <div className="absolute left-1/2 top-full mt-4 w-[520px] -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl">

                  <div className="mb-4">

                    <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                      IlaGuard Solutions
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Technology designed to solve real
                      agricultural challenges.
                    </p>

                  </div>


                  <div className="grid grid-cols-2 gap-3">

                    <Link
                      href="/solutions/smart-irrigation"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="text-2xl">
                        💧
                      </div>

                      <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-green-700">
                        Smart Irrigation
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Optimize irrigation using real-time
                        soil data.
                      </p>

                    </Link>


                    <Link
                      href="/solutions/connected-farming"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="text-2xl">
                        📡
                      </div>

                      <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-green-700">
                        Connected Farming
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Connected sensors and cloud-based
                        farm analytics.
                      </p>

                    </Link>


                    <Link
                      href="/solutions/water-management"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="text-2xl">
                        🚰
                      </div>

                      <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-green-700">
                        Smart Water Management
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Monitor and manage agricultural
                        water resources.
                      </p>

                    </Link>


                    <Link
                      href="/solutions/farm-automation"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="text-2xl">
                        🤖
                      </div>

                      <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-green-700">
                        Farm Automation
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Automate agricultural operations
                        using IoT.
                      </p>

                    </Link>

                  </div>


                  <div className="mt-4 border-t pt-4">

                    <Link
                      href="/solutions"
                      onClick={closeMenus}
                      className="text-sm font-semibold text-green-700 hover:text-green-800"
                    >
                      Explore All Solutions →
                    </Link>

                  </div>

                </div>
              )}

            </div>


            {/* =================================================
                CROP ADVISOR DROPDOWN
            ================================================== */}

            <div className="relative">

              <button
                type="button"
                onClick={() => {
                  setCropAdvisorOpen(
                    !cropAdvisorOpen
                  );
                  setProductsOpen(false);
                  setSolutionsOpen(false);
                }}
                className="flex items-center gap-2 transition hover:text-green-700"
              >
                Crop Advisor

                <FaChevronDown
                  className={`text-xs transition-transform ${
                    cropAdvisorOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>


              {cropAdvisorOpen && (

                <div className="absolute left-1/2 top-full mt-4 w-[620px] -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl">

                  {/* Header */}

                  <div className="mb-4">

                    <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                      IlaGuard Crop Advisor
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Smart tools to help farmers make
                      better crop and market decisions.
                    </p>

                  </div>


                  {/* Advisor Options */}

                  <div className="grid grid-cols-2 gap-3">

                    {/* =================================================
                        BEST CROP
                    ================================================== */}

                    <Link
                      href="/crop-advisor/best-crop"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="flex items-start gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-2xl">
                          🌾
                        </div>

                        <div>

                          <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
                            Find Your Best Crop
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Find suitable crops based on
                            your location and farming month.
                          </p>

                        </div>

                      </div>

                    </Link>


                    {/* =================================================
                        MANDI PRICE
                    ================================================== */}

                    <Link
                      href="/crop-advisor/mandi-price"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="flex items-start gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                          💰
                        </div>

                        <div>

                          <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
                            Find Best Mandi Price
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Check current mandi prices before
                            selling your crop.
                          </p>

                        </div>

                      </div>

                    </Link>


                    {/* =================================================
                        CROP VARIETY
                    ================================================== */}

                    <Link
                      href="/crop-advisor/crop-variety"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="flex items-start gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime-100 text-2xl">
                          🌱
                        </div>

                        <div>

                          <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
                            Find Best Crop Variety
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Discover suitable varieties for
                            your crop and season.
                          </p>

                        </div>

                      </div>

                    </Link>
                    
					{/* =================================================
                        Weather Forecast
                    ================================================== */}

                    <Link
                      href="/weather"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="flex items-start gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime-100 text-2xl">
                          🌦️
                        </div>

                        <div>

                          <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
                            Get Weather Forecast Near You
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Check local weather to make better crop decisions.
                          </p>

                        </div>

                      </div>

                    </Link>

                    {/* =================================================
                        SOIL REPORT
                    ================================================== */}

                    <Link
                      href="/crop-advisor/soil-report"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="flex items-start gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                          📄
                        </div>

                        <div>

                          <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
                            Analyze Soil Report
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Use soil-test information to improve
                            crop recommendations.
                          </p>

                        </div>

                      </div>

                    </Link>


                    {/* =================================================
                        DEVICE
                    ================================================== */}

                    <Link
                      href="/crop-advisor/device"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="flex items-start gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                          📡
                        </div>

                        <div>

                          <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
                            Use My Device
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Use IlaGuard sensor data for
                            smarter recommendations.
                          </p>

                        </div>

                      </div>

                    </Link>

                  </div>


                  {/* Footer */}

                  <div className="mt-4 border-t pt-4">

                    <Link
                      href="/crop-advisor"
                      onClick={closeMenus}
                      className="text-sm font-semibold text-green-700 hover:text-green-800"
                    >
                      Explore All Crop Advisor Tools →
                    </Link>

                  </div>

                </div>

              )}

            </div>


            {/* =================================================
                TRAINING
            ================================================== */}

            <Link
              href="/training"
              onClick={closeMenus}
              className="transition hover:text-green-700"
            >
              Training
            </Link>


            {/* =================================================
                BLOG
            ================================================== */}

            <Link
              href="/blog"
              onClick={closeMenus}
              className="transition hover:text-green-700"
            >
              Blog
            </Link>


            {/* =================================================
                CAREERS
            ================================================== */}

            <Link
              href="/careers"
              onClick={closeMenus}
              className="transition hover:text-green-700"
            >
              Careers
            </Link>


            {/* =================================================
                CONTACT
            ================================================== */}

            <Link
              href="/contact"
              onClick={closeMenus}
              className="transition hover:text-green-700"
            >
              Contact
            </Link>


            {/* =================================================
                COMMUNITY
            ================================================== */}

            <Link
              href="/community"
              onClick={closeMenus}
              className="rounded-lg bg-orange-500 px-5 py-3 text-white transition hover:bg-orange-600"
            >
              Join Community
            </Link>

          </nav>


          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}

          <button
            type="button"
            className="text-2xl text-gray-800 lg:hidden"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>

        </div>


        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        {menuOpen && (

          <div className="pb-6 lg:hidden">

            <div className="flex flex-col gap-2 font-medium">

              {/* Home */}

              <Link
                href="/"
                onClick={closeMenus}
                className="py-3"
              >
                Home
              </Link>


              {/* =================================================
                  MOBILE PRODUCTS
              ================================================== */}

              <button
                type="button"
                onClick={() =>
                  setProductsOpen(!productsOpen)
                }
                className="flex items-center justify-between py-3 text-left"
              >
                Products

                <FaChevronDown
                  className={`text-xs transition-transform ${
                    productsOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>


              {productsOpen && (

                <div className="ml-4 border-l-2 border-green-100 pl-4">

                  <Link
                    href="/products/ilapot"
                    onClick={closeMenus}
                    className="block py-2"
                  >
                    🌱 IlaPot
                  </Link>

                  <Link
                    href="/products/ilafarm"
                    onClick={closeMenus}
                    className="block py-2"
                  >
                    🌾 IlaFarm
                  </Link>

                  <Link
                    href="/products/ilatank"
                    onClick={closeMenus}
                    className="block py-2"
                  >
                    💧 IlaTank
                  </Link>

                  <Link
                    href="/products"
                    onClick={closeMenus}
                    className="block py-2 text-green-700"
                  >
                    View All Products →
                  </Link>

                </div>

              )}


              {/* =================================================
                  MOBILE SOLUTIONS
              ================================================== */}

              <button
                type="button"
                onClick={() =>
                  setSolutionsOpen(!solutionsOpen)
                }
                className="flex items-center justify-between py-3 text-left"
              >
                Solutions

                <FaChevronDown
                  className={`text-xs transition-transform ${
                    solutionsOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>


              {solutionsOpen && (

                <div className="ml-4 border-l-2 border-green-100 pl-4">

                  <Link
                    href="/solutions/smart-irrigation"
                    onClick={closeMenus}
                    className="block py-2"
                  >
                    💧 Smart Irrigation
                  </Link>

                  <Link
                    href="/solutions/connected-farming"
                    onClick={closeMenus}
                    className="block py-2"
                  >
                    📡 Connected Farming
                  </Link>

                  <Link
                    href="/solutions/water-management"
                    onClick={closeMenus}
                    className="block py-2"
                  >
                    🚰 Smart Water Management
                  </Link>

                  <Link
                    href="/solutions/farm-automation"
                    onClick={closeMenus}
                    className="block py-2"
                  >
                    🤖 Farm Automation
                  </Link>

                  <Link
                    href="/solutions"
                    onClick={closeMenus}
                    className="block py-2 text-green-700"
                  >
                    Explore All Solutions →
                  </Link>

                </div>

              )}


              {/* =================================================
                  MOBILE CROP ADVISOR
              ================================================== */}

              <button
                type="button"
                onClick={() =>
                  setCropAdvisorOpen(
                    !cropAdvisorOpen
                  )
                }
                className="flex items-center justify-between py-3 text-left"
              >
                 Crop Advisor

                <FaChevronDown
                  className={`text-xs transition-transform ${
                    cropAdvisorOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>


              {cropAdvisorOpen && (

                <div className="ml-4 border-l-2 border-green-100 pl-4">

                  <Link
                    href="/crop-advisor/best-crop"
                    onClick={closeMenus}
                    className="block py-2"
                  >
                    🌾 Find Your Best Crop
                  </Link>

                  <Link
                    href="/crop-advisor/mandi-price"
                    onClick={closeMenus}
                    className="block py-2"
                  >
                    💰 Find Best Mandi Price
                  </Link>

                  <Link
                    href="/crop-advisor/crop-variety"
                    onClick={closeMenus}
                    className="block py-2"
                  >
                    🌱 Find Best Crop Variety
                  </Link>
				  
				  <Link
                    href="/weather"
                    onClick={closeMenus}
                    className="block py-2"
                  >
                    🌦️Find Your Nerest Weather Forecast Information
                  </Link>

                  <Link
                    href="/crop-advisor/soil-report"
                    onClick={closeMenus}
                    className="block py-2"
                  >
                    📄 Analyze Soil Report
                  </Link>

                  <Link
                    href="/crop-advisor/device"
                    onClick={closeMenus}
                    className="block py-2"
                  >
                    📡 Use My Device
                  </Link>

                  <Link
                    href="/crop-advisor"
                    onClick={closeMenus}
                    className="block py-2 text-green-700"
                  >
                    Explore All Tools →
                  </Link>

                </div>

              )}


              {/* Training */}

              <Link
                href="/training"
                onClick={closeMenus}
                className="py-3"
              >
                Training
              </Link>


              {/* Blog */}

              <Link
                href="/blog"
                onClick={closeMenus}
                className="py-3"
              >
                Blog
              </Link>


              {/* Careers */}

              <Link
                href="/careers"
                onClick={closeMenus}
                className="py-3"
              >
                Careers
              </Link>


              {/* Contact */}

              <Link
                href="/contact"
                onClick={closeMenus}
                className="py-3"
              >
                Contact
              </Link>


              {/* Community */}

              <Link
                href="/community"
                onClick={closeMenus}
                className="mt-2 rounded-lg bg-orange-500 px-5 py-3 text-center text-white transition hover:bg-orange-600"
              >
                Join Community
              </Link>

            </div>

          </div>

        )}

      </div>
    </header>
  );
}