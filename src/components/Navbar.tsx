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
                        Weather Forecast
                    ================================================== */}

                    <Link
                      href="/crop-advisor/weather"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="flex items-start gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime-100 text-2xl">
                          🌦️
                        </div>

                        <div>

                          <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
                            अपने क्षेत्र का मौसम जानें
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            बेहतर खेती के फैसले लेने के लिए अपने क्षेत्र का वर्तमान मौसम और अगले 7 दिनों का पूर्वानुमान देखें।
                          </p>

                        </div>

                      </div>
                      
                    </Link>

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
                            उपयुक्त फसल चुनें
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            अपने क्षेत्र, मौसम और खेती की परिस्थितियों के अनुसार सबसे उपयुक्त फसल जानें।
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
                            फसल की उपयुक्त किस्म चुनें
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            मौसम, क्षेत्र और खेती की परिस्थितियों के अनुसार फसल की उपयुक्त किस्में जानें।
                          </p>

                        </div>

                      </div>

                    </Link>

                    {/* =================================================
                        MANDI PRICE HISTORY
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
                            फसल के भाव का इतिहास देखें
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            अपने स्थानीय मंडी और फसल का चयन करें और उपलब्ध फसल के भाव का इतिहास देखें।
                          </p>

                        </div>

                      </div>

                    </Link>

                    {/* =================================================
                        MANDI PRICE 
                    ================================================== */}

                    <Link
                      href="/crop-advisor/mandi-bhav"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="flex items-start gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                          💰
                        </div>

                        <div>

                          <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
                            मंडी भाव देखें
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            अपनी फसल और राज्य चुनें और सभी उपलब्ध मंडियों के न्यूनतम, अधिकतम और मॉडल भाव देखें।
                          </p>

                        </div>

                      </div>

                    </Link>

                    {/* =================================================
                        CROP PRICES 
                    ================================================== */}

                    <Link
                      href="/crop-advisor/crop-prices"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-green-50"
                    >

                      <div className="flex items-start gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                          📊
                        </div>

                        <div>

                          <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
                            फसल के भाव देखें
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            अपनी मंडी चुनें और वहाँ उपलब्ध फसलों के भाव देखें।
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

              <Link
                href="/crop-advisor"
                onClick={closeMenus}
                className="py-3"
              >
                Crop Advisor
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