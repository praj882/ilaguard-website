import Link from "next/link";
import {
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0B3D2E] text-gray-300 mt-0.5">

      {/* Brand Section */}
      <div className="max-w-7xl mx-auto px-6 pt-16">

        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-4 rounded-xl shadow-2xl">
            <h2 className="text-4xl font-bold text-white">
              IlaGuard Labs
            </h2>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-10 mb-12">
          <h3 className="text-4xl font-bold text-white">
            Technology for Farmers,
            <br />
            Opportunities for Engineers
          </h3>

          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Building intelligent agricultural and embedded solutions
            that empower farmers, conserve resources, and inspire
            the next generation of engineers.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700"></div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-16 py-14">

          {/* Contact */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-8">
              Contact
            </h4>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-orange-500 mt-1 text-lg" />
                <span className="hover:text-white transition">
                  info@ilaguard.com
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="text-orange-500 mt-1 text-lg" />
                <span className="hover:text-white transition">
                  +91 XXXXX XXXXX
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FaLocationDot className="text-orange-500 mt-1 text-lg" />
                <span>
                  Bihar, India
                  <br />
                  Agri-Tech & Embedded Solutions
                </span>
              </div>

            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-8">
              Navigation
            </h4>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/solutions"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Solutions
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/training"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Training
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-8">
              Follow Us
            </h4>

            <div className="space-y-5">

              <div className="flex items-center gap-4 hover:text-orange-400 transition cursor-pointer">
                <FaLinkedin className="text-orange-500 text-lg" />
                <span>LinkedIn</span>
              </div>

              <div className="flex items-center gap-4 hover:text-orange-400 transition cursor-pointer">
                <FaYoutube className="text-orange-500 text-lg" />
                <span>YouTube</span>
              </div>

              <div className="flex items-center gap-4 hover:text-orange-400 transition cursor-pointer">
                <FaInstagram className="text-orange-500 text-lg" />
                <span>Instagram</span>
              </div>

              <div className="flex items-center gap-4 hover:text-orange-400 transition cursor-pointer">
                <FaFacebook className="text-orange-500 text-lg" />
                <span>Facebook</span>
              </div>

              <div className="flex items-center gap-4 hover:text-orange-400 transition cursor-pointer">
                <FaXTwitter className="text-orange-500 text-lg" />
                <span>X (Twitter)</span>
              </div>

            </div>
          </div>

        </div>

        {/* Newsletter */}
        <div className="border-t border-green-700 py-12 text-center">

          <h3 className="text-2xl font-bold text-white mb-3">
            Stay Updated
          </h3>

          <p className="text-gray-300 mb-6">
            Get updates on Agri-Tech innovations, embedded systems,
            internships, and engineering opportunities.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-lg bg-white text-black w-full"
            />

            <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg text-white font-semibold">
              Subscribe
            </button>
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="bg-[#07261D] py-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} IlaGuard Labs. Building Intelligent Agricultural &
        Embedded Solutions. All Rights Reserved.
      </div>

    </footer>
  );
}