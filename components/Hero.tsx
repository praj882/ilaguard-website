import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
export default function Hero() {
  return (
    <main>
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left Side */}
            <div>

              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Agri-Tech & Embedded Innovation
              </span>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mt-6 leading-tight">
                Building Intelligent Solutions for Agriculture
              </h1>

              <p className="text-2xl text-green-100 mt-6">
                Engineering the Future of Smart Agriculture
              </p>

              <p className="text-lg text-gray-200 mt-6 max-w-xl">
                Our mission is to build AI-powered Embedded Systems and IoT solutions that empower farmers to improve productivity, 
				conserve water, and embrace precision agriculture while creating opportunities for future engineers.
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
			  <div className="text-4xl mb-4">🌱</div>

			  <h3 className="text-2xl font-bold">
				Smart Irrigation System
			  </h3>

			  <p className="text-sm font-semibold text-green-600 mt-2">
				🟢 Prototype Developed
			  </p>

			  <p className="mt-4 text-gray-600">
				AI & IoT-powered irrigation that automatically monitors soil moisture
				and controls watering to conserve water and improve crop productivity.
			  </p>

			  <button className="mt-6 text-green-700 font-semibold hover:underline">
				Learn More →
			  </button>
			</div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
			  <div className="text-4xl mb-4">💧</div>

			  <h3 className="text-2xl font-bold">
				Water Tank Monitoring
			  </h3>

			  <p className="text-sm font-semibold text-green-600 mt-2">
				🟢 Prototype Developed
			  </p>

			  <p className="mt-4 text-gray-600">
				IoT-enabled water tank monitoring that measures water levels in
				real time, provides instant alerts, and automates pump control to
				ensure efficient water management.
			  </p>

			  <button className="mt-6 text-green-700 font-semibold hover:underline">
				Learn More →
			  </button>
			</div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
			  <div className="text-4xl mb-4">📡</div>

			  <h3 className="text-2xl font-bold">
				IoT Solutions
			  </h3>

			  <p className="text-sm font-semibold text-amber-600 mt-2">
				🟡 In Development
			  </p>

			  <p className="mt-4 text-gray-600">
				Intelligent IoT solutions that connect sensors, devices, and cloud
				platforms to enable real-time monitoring, automation, and
				data-driven decision making.
			  </p>

			  <button className="mt-6 text-green-700 font-semibold hover:underline">
				Learn More →
			  </button>
			</div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
			  <div className="text-4xl mb-4">⚙️</div>

			  <h3 className="text-2xl font-bold">
				Farm Automation
			  </h3>

			  <p className="text-sm font-semibold text-amber-600 mt-2">
				🟡 In Development
			  </p>

			  <p className="mt-4 text-gray-600">
				AI and IoT-powered automation designed to reduce manual effort,
				improve operational efficiency, and streamline agricultural
				processes through intelligent control systems.
			  </p>

			  <button className="mt-6 text-green-700 font-semibold hover:underline">
				Learn More →
			  </button>
			</div>

          </div>

        </div>

      </section>
    </main>
  );
}