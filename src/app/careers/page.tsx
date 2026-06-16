import Link from "next/link";

export default function CareersPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our Team
          </h1>

          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Be part of a mission to transform agriculture through
            technology while building innovative embedded and IoT solutions.
          </p>

        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-green-800">
              Why Work With IlaGuard Labs?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="font-bold text-xl mb-3">
                Real Products
              </h3>
              <p className="text-gray-600">
                Work on actual Agri-Tech and Embedded Systems products.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="font-bold text-xl mb-3">
                Innovation First
              </h3>
              <p className="text-gray-600">
                Explore new ideas and contribute to meaningful solutions.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-bold text-xl mb-3">
                Growth Mindset
              </h3>
              <p className="text-gray-600">
                Learn continuously through projects and mentorship.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-bold text-xl mb-3">
                Collaborative Culture
              </h3>
              <p className="text-gray-600">
                Work closely with engineers and innovators.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Open Opportunities */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-green-800">
              Current Opportunities
            </h2>
          </div>

          <div className="space-y-6">

            {/* Internship */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                <div>
                  <h3 className="text-2xl font-bold text-green-800">
                    Embedded Systems Intern
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Learn ESP32, IoT, Sensors, Embedded C,
                    and Product Development.
                  </p>
                </div>

                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  Internship
                </span>

              </div>
            </div>

            {/* C++ */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                <div>
                  <h3 className="text-2xl font-bold text-green-800">
                    Modern C++ Intern
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Work on software architecture, STL,
                    object-oriented design, and real projects.
                  </p>
                </div>

                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  Internship
                </span>

              </div>
            </div>

            {/* Linux */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                <div>
                  <h3 className="text-2xl font-bold text-green-800">
                    Embedded Linux Intern
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Learn Linux fundamentals, shell scripting,
                    Git, and embedded development workflows.
                  </p>
                </div>

                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  Internship
                </span>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Future Hiring */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Future Hiring Areas
          </h2>

          <p className="text-gray-600 mb-12">
            As IlaGuard Labs grows, we plan to expand into
            additional technology domains.
          </p>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-green-50 p-6 rounded-xl">
              IoT Development
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              Cloud Computing
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              PCB Design
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              AI for Agriculture
            </div>

          </div>

        </div>
      </section>

      {/* Open Application */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Don't See a Suitable Role?
          </h2>

          <p className="text-xl text-green-100 mb-8">
            We are always interested in meeting passionate students,
            engineers, and innovators.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            Submit Your Resume
          </Link>

        </div>
      </section>

    </main>
  );
}