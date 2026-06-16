import Link from "next/link";

export default function TrainingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Training & Internship Programs
          </h1>

          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Learn industry-relevant skills through practical projects,
            real-world engineering challenges, and mentorship from
            experienced embedded engineers.
          </p>

        </div>
      </section>

      {/* Current Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-green-800">
              Current Training Programs
            </h2>

            <p className="text-gray-600 mt-4">
              Hands-on training designed for students and engineers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Embedded C */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🔧</div>

              <h3 className="text-2xl font-bold text-green-800 mb-3">
                Embedded C
              </h3>

              <p className="text-gray-600">
                Master memory management, pointers, interrupts,
                drivers, and embedded firmware development.
              </p>
            </div>

            {/* Modern C++ */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🚀</div>

              <h3 className="text-2xl font-bold text-green-800 mb-3">
                Modern C++
              </h3>

              <p className="text-gray-600">
                Learn OOP, STL, templates, smart pointers,
                multithreading, and design patterns.
              </p>
            </div>

            {/* Embedded Systems */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">⚙️</div>

              <h3 className="text-2xl font-bold text-green-800 mb-3">
                Embedded Systems
              </h3>

              <p className="text-gray-600">
                Build real-world projects using ESP32,
                sensors, communication protocols, and IoT.
              </p>
            </div>

            {/* Linux */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🐧</div>

              <h3 className="text-2xl font-bold text-green-800 mb-3">
                Linux
              </h3>

              <p className="text-gray-600">
                Learn Linux commands, shell scripting,
                development tools, and embedded Linux basics.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-green-800 mb-12">
            Coming Soon
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl">Git & GitHub</h3>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl">Cloud Computing</h3>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl">IoT Development</h3>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl">AUTOSAR</h3>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-green-800">
              Why Train with IlaGuard Labs?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-4xl mb-3">💡</h3>
              <h4 className="font-bold">Project Based Learning</h4>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-4xl mb-3">🛠️</h3>
              <h4 className="font-bold">Hands-On Experience</h4>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-4xl mb-3">👨‍🏫</h3>
              <h4 className="font-bold">Industry Mentorship</h4>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-4xl mb-3">🚀</h3>
              <h4 className="font-bold">Career Growth</h4>
            </div>

          </div>

        </div>
      </section>

      {/* Internship Section */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Internship Opportunities
          </h2>

          <p className="text-xl text-green-100 mb-8">
            Work on real products including Smart Irrigation,
            IoT Systems, Embedded Applications, and Automation Solutions.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            Apply for Internship
          </Link>

        </div>
      </section>
    </main>
  );
}