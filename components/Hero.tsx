import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
export default function Hero() {
  return (
    <main>
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <div>

              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Agri-Tech & Embedded Innovation
              </span>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mt-6 leading-tight">
                Building Intelligent Solutions for Agriculture
              </h1>

              <p className="text-2xl text-green-100 mt-6">
                Technology for Farmers, Opportunities for Engineers
              </p>

              <p className="text-lg text-gray-200 mt-6 max-w-xl">
                Empowering farmers with smart irrigation,
                water monitoring, IoT automation, and
                embedded technologies while creating
                hands-on opportunities for future engineers.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition">
                  Explore Solutions
                </button>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition">
                  Apply Internship
                </button>

              </div>
            </div>

            {/* Right Side */}
            <div className="relative">

              <HeroSlider />

            </div>

          </div>

          {/* Solution Cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-20">

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="font-bold text-lg">
                Smart Irrigation
              </h3>
              <p className="text-gray-600 mt-2">
                Automated watering based on soil conditions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-3">💧</div>
              <h3 className="font-bold text-lg">
                Water Monitoring
              </h3>
              <p className="text-gray-600 mt-2">
                Real-time tank level monitoring and alerts.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-3">📡</div>
              <h3 className="font-bold text-lg">
                IoT Solutions
              </h3>
              <p className="text-gray-600 mt-2">
                Smart connected agriculture systems.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="font-bold text-lg">
                Farm Automation
              </h3>
              <p className="text-gray-600 mt-2">
                Reduce manual effort through automation.
              </p>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}