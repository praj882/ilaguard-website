"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div>
            <Link href="/">
              <h1 className="text-3xl font-bold text-green-800 cursor-pointer">
                IlaGuard Labs
              </h1>
            </Link>

            <p className="hidden md:block text-sm text-gray-600">
              Technology for Farmers, Opportunities for Engineers
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-medium">

            <Link href="/" className="hover:text-green-700">
              Home
            </Link>

            <Link href="/solutions" className="hover:text-green-700">
              Solutions
            </Link>

            <Link href="/training" className="hover:text-green-700">
              Training
            </Link>

            <Link href="/blog" className="hover:text-green-700">
              Blog
            </Link>

            <Link href="/careers" className="hover:text-green-700">
              Careers
            </Link>

            <Link href="/contact" className="hover:text-green-700">
              Contact
            </Link>

            <Link
              href="/community"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg"
            >
              Join Community
            </Link>

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (

          <div className="lg:hidden pb-6">

            <div className="flex flex-col gap-5 font-medium">

              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link>
              <Link href="/training" onClick={() => setMenuOpen(false)}>Training</Link>
              <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

              <Link
                href="/community"
                onClick={() => setMenuOpen(false)}
                className="bg-orange-500 text-white px-5 py-3 rounded-lg text-center"
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