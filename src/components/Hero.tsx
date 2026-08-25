import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import FarmDecisionHub from "@/components/ui/FarmDecisionHub";

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
                  className="rounded-xl border border-green-400 px-7 py-4 font-semibold hover:bg-green-900 transition"
                >
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
        className="bg-gradient-to-b from-green-50 to-white scroll-mt-0"
      >

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


          {/* =================================================
              CROP ADVISOR CARD
          ================================================== */}

          <div className="mt-14 w-full">

            <FarmDecisionHub />

          </div>

        </div>

      </section>
    </>
  );
}