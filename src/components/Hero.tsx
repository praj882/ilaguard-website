import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import CropAdvisorCard from "@/components/CropAdvisorCard";

export default function Hero() {
  return (
    <>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-5">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center rounded-full border border-green-700 bg-green-900/50 px-4 py-2 text-sm text-green-500">
                🌱 AgriTech • IoT • Smart Agriculture
              </div>

              <h1 className="mt-6 text-5xl lg:text-5xl font-bold leading-tight">
                Engineering the Future of Smart Agriculture
              </h1>

              <p className="mt-6 text-xl text-green-100 leading-relaxed max-w-xl">
                We build AI-powered embedded systems and IoT solutions
                that help farmers monitor resources, improve productivity,
                conserve water and make smarter agricultural decisions.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <Link
                  href="/products"
                  className="rounded-xl bg-orange-500 px-7 py-4 font-semibold hover:bg-orange-600 transition"
                >
                  Explore Products →
                </Link>

                <a
				 href="#crop-advisor"
                 className="rounded-xl border border-green-400 px-7 py-4 font-semibold hover:bg-green-900 transition">
                 🌾 Find Your Best Crop
                </a>

              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-green-200">
                <span>📡 IoT</span>
                <span>🤖 AI & Analytics</span>
                <span>🌱 Precision Agriculture</span>
                <span>💧 Smart Water Management</span>
              </div>

            </div>


            {/* RIGHT */}

            <section className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px]">
              <HeroSlider />
            </section>

          </div>

        </div>
      </section>


      {/* =====================================================
          CROP ADVISOR
      ====================================================== */}
	  <section
		id="crop-advisor"
		className="bg-gradient-to-b from-green-50 to-white scroll-mt-0">

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-20">

          {/* SECTION HEADER */}

          <div className="text-center max-w-3xl mx-auto">

            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              🌾 CROP ADVISOR
            </div>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900">
              Find the Best Crop for Your Farm
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Make better farming decisions using your location,
              season and connected IlaGuard devices.
            </p>

          </div>


          {/* MAIN CONTENT */}

          <div className="mt-14 grid lg:grid-cols-5 gap-15 items-center">

            {/* LEFT INFORMATION */}

            <div className="lg:col-span-2">

              <div className="rounded-3xl bg-green-900 p-8 lg:p-10 text-white shadow-xl">

                <div className="text-4xl">
                  🌱
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  Smarter Crop Decisions
                </h3>

                <p className="mt-4 text-green-100 leading-relaxed">
                  IlaGuard Crop Advisor helps farmers identify suitable
                  crops based on local conditions and available farm data.
                </p>


                {/* FEATURES */}

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700">
                      ✓
                    </span>

                    <span>
                      Location & District
                    </span>
                  </div>


                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700">
                      ✓
                    </span>

                    <span>
                      Season & Month
                    </span>
                  </div>


                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700">
                      ✓
                    </span>

                    <span>
                      IoT Sensor Data
                    </span>
                  </div>

                </div>


                <div className="mt-8 border-t border-green-700 pt-6">

                  <p className="text-sm text-green-200">
                    Built for data-driven agriculture
                  </p>

                </div>

              </div>

            </div>


            {/* RIGHT — CROP ADVISOR CARD */}

            <div className="lg:col-span-3">

              <CropAdvisorCard />

            </div>

          </div>

        </div>

      </section>
    </>
  );
}