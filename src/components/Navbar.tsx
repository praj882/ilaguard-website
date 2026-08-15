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

  const closeMenus = () => {
    setMenuOpen(false);
    setProductsOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* =========================
              LOGO
          ========================== */}

          <div>
            <Link href="/" onClick={closeMenus}>
              <h1 className="text-3xl font-bold text-green-800 cursor-pointer">
                IlaGuard Labs
              </h1>
            </Link>

            <p className="hidden md:block text-sm text-gray-600">
              Technology for Farmers, Opportunities for Engineers
            </p>
          </div>


          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}

          <nav className="hidden lg:flex items-center gap-7 font-medium">

            {/* Home */}

            <Link
              href="/"
              className="hover:text-green-700 transition"
            >
              Home
            </Link>


            {/* =========================
                PRODUCTS DROPDOWN
            ========================== */}

            <div className="relative">

              <button
                onClick={() => {
                  setProductsOpen(!productsOpen);
                  setSolutionsOpen(false);
                }}
                className="flex items-center gap-2 hover:text-green-700 transition"
              >
                Products

                <FaChevronDown
                  className={`text-xs transition-transform ${
                    productsOpen ? "rotate-180" : ""
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
                      Smart technology for agriculture and resource management.
                    </p>

                  </div>


                  <div className="grid grid-cols-2 gap-3">

                    {/* IlaPot */}

                    <Link
                      href="/products/ilapot"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 hover:bg-green-50 transition"
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
                      className="group rounded-xl p-4 hover:bg-green-50 transition"
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
                      className="group rounded-xl p-4 hover:bg-green-50 transition"
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
                      className="group rounded-xl p-4 hover:bg-green-50 transition"
                    >

                      <div className="flex items-center gap-3 h-full">

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


            {/* =========================
                SOLUTIONS DROPDOWN
            ========================== */}

            <div className="relative">

              <button
                onClick={() => {
                  setSolutionsOpen(!solutionsOpen);
                  setProductsOpen(false);
                }}
                className="flex items-center gap-2 hover:text-green-700 transition"
              >
                Solutions

                <FaChevronDown
                  className={`text-xs transition-transform ${
                    solutionsOpen ? "rotate-180" : ""
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
                      Technology designed to solve real agricultural challenges.
                    </p>

                  </div>


                  <div className="grid grid-cols-2 gap-3">

                    <Link
                      href="/solutions/smart-irrigation"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 hover:bg-green-50 transition"
                    >

                      <div className="text-2xl">
                        💧
                      </div>

                      <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-green-700">
                        Smart Irrigation
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Optimize irrigation using real-time soil data.
                      </p>

                    </Link>


                    <Link
                      href="/solutions/connected-farming"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 hover:bg-green-50 transition"
                    >

                      <div className="text-2xl">
                        📡
                      </div>

                      <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-green-700">
                        Connected Farming
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Connected sensors and cloud-based farm analytics.
                      </p>

                    </Link>


                    <Link
                      href="/solutions/water-management"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 hover:bg-green-50 transition"
                    >

                      <div className="text-2xl">
                        🚰
                      </div>

                      <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-green-700">
                        Smart Water Management
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Monitor and manage agricultural water resources.
                      </p>

                    </Link>


                    <Link
                      href="/solutions/farm-automation"
                      onClick={closeMenus}
                      className="group rounded-xl p-4 hover:bg-green-50 transition"
                    >

                      <div className="text-2xl">
                        🤖
                      </div>

                      <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-green-700">
                        Farm Automation
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Automate agricultural operations using IoT.
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


            {/* =========================
                CROP ADVISOR
            ========================== */}

            <Link
              href="/#crop-advisor"
              className="hover:text-green-700 transition"
            >
              Crop Advisor
            </Link>


            {/* Training */}

            <Link
              href="/training"
              className="hover:text-green-700 transition"
            >
              Training
            </Link>


            {/* Blog */}

            <Link
              href="/blog"
              className="hover:text-green-700 transition"
            >
              Blog
            </Link>


            {/* Careers */}

            <Link
              href="/careers"
              className="hover:text-green-700 transition"
            >
              Careers
            </Link>


            {/* Contact */}

            <Link
              href="/contact"
              className="hover:text-green-700 transition"
            >
              Contact
            </Link>


            {/* Community */}

            <Link
              href="/community"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg transition"
            >
              Join Community
            </Link>

          </nav>


          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}

          <button
            className="lg:hidden text-2xl text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>


        {/* =========================
            MOBILE MENU
        ========================== */}

        {menuOpen && (

          <div className="lg:hidden pb-6">

            <div className="flex flex-col gap-2 font-medium">


              {/* Home */}

              <Link
                href="/"
                onClick={closeMenus}
                className="py-3"
              >
                Home
              </Link>


              {/* =========================
                  MOBILE PRODUCTS
              ========================== */}

              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center justify-between py-3 text-left"
              >
                Products

                <FaChevronDown
                  className={`text-xs transition-transform ${
                    productsOpen ? "rotate-180" : ""
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


              {/* =========================
                  MOBILE SOLUTIONS
              ========================== */}

              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center justify-between py-3 text-left"
              >
                Solutions

                <FaChevronDown
                  className={`text-xs transition-transform ${
                    solutionsOpen ? "rotate-180" : ""
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


              {/* Crop Advisor */}

              <Link
                href="/crop-advisor"
                onClick={closeMenus}
                className="py-3"
              >
                🌾 Crop Advisor
              </Link>


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
                className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-center transition"
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