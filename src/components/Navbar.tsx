import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo & Tagline */}
          <div>
            <Link href="/">
              <h1 className="text-3xl font-bold text-green-800 cursor-pointer">
                IlaGuard Labs
              </h1>
            </Link>

            <p className="text-sm text-gray-600">
              Technology for Farmers, Opportunities for Engineers
            </p>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-gray-700 font-medium">

              <li>
                <Link
                  href="/"
                  className="hover:text-green-700 transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/solutions"
                  className="hover:text-green-700 transition duration-300"
                >
                  Solutions
                </Link>
              </li>

              <li>
                <Link
                  href="/training"
                  className="hover:text-green-700 transition duration-300"
                >
                  Training
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="hover:text-green-700 transition duration-300"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="hover:text-green-700 transition duration-300"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-700 transition duration-300"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/community"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-semibold shadow-md transition duration-300"
            >
              Apply Now
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}