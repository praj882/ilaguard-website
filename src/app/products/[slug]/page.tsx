import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {

  const { slug } = await params;

  const product = PRODUCTS.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="bg-green-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-0">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}

            <div>

              <Link
                href="/products"
                className="text-green-300 text-sm hover:text-white"
              >
                ← All Products
              </Link>

              <div className="mt-8 text-6xl">
                {product.icon}
              </div>

              <p className="mt-6 text-orange-400 font-semibold">
                {product.category}
              </p>

              <h1 className="mt-3 text-5xl lg:text-7xl font-bold">
                {product.name}
              </h1>

              <h2 className="mt-5 text-2xl text-green-200">
                {product.tagline}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-green-100">
                {product.description}
              </p>


              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-8">

                {product.apk && (
                  <a
                    href={product.apk}
                    download
                    className="rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white hover:bg-orange-600 transition"
                  >
                    📱 Download App
                  </a>
                )}

                <Link
                  href="/#crop-advisor"
                  className="rounded-xl border border-green-400 px-7 py-4 font-semibold text-white hover:bg-green-900 transition"
                >
                  🌾 Find Best Crop
                </Link>

              </div>

            </div>


            {/* Right */}

            <div className="relative">

              <div className="rounded-3xl overflow-hidden bg-white/10 border border-white/10 shadow-2xl">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          FEATURES
      ========================================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-2xl">

          <p className="font-semibold text-green-700">
            FEATURES
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Everything you need for smarter monitoring
          </h2>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {product.features.map((feature, index) => (

            <div
              key={feature}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-7"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700 font-bold">
                {index + 1}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {feature}
              </h3>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================
          HOW IT WORKS
      ========================================= */}

      <section className="bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center max-w-2xl mx-auto">

            <p className="font-semibold text-green-700">
              HOW IT WORKS
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              From sensor to insight
            </h2>

            <p className="mt-4 text-gray-600">
              IlaGuard connects devices, cloud services and
              intelligent applications to turn farm data into
              useful information.
            </p>

          </div>


          <div className="grid md:grid-cols-4 gap-6 mt-14">

            <Step
              number="01"
              title="Sense"
              text="Sensors collect real-time environmental and soil data."
            />

            <Step
              number="02"
              title="Connect"
              text="The device sends data securely to the cloud."
            />

            <Step
              number="03"
              title="Analyze"
              text="IlaGuard applications process the collected information."
            />

            <Step
              number="04"
              title="Act"
              text="Users receive insights and can control connected devices."
            />

          </div>

        </div>

      </section>


      {/* =========================================
          CROP ADVISOR
      ========================================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="rounded-3xl bg-green-900 p-10 lg:p-16 text-white">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <p className="text-orange-400 font-semibold">
                ILAGUARD CROP ADVISOR
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Turn farm data into better crop decisions.
              </h2>

              <p className="mt-5 text-green-100 leading-relaxed">
                Connect your IlaGuard device and use real-time
                soil and environmental data together with location
                and seasonal information to identify suitable crops.
              </p>

            </div>


            <div className="lg:text-right">

              <Link
                href="/#crop-advisor"
                className="inline-block rounded-xl bg-orange-500 px-8 py-4 font-semibold hover:bg-orange-600 transition"
              >
                🌾 Open Crop Advisor →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          DOWNLOAD
      ========================================= */}

      {product.apk && (

        <section className="border-t">

          <div className="max-w-4xl mx-auto px-6 py-20 text-center">

            <div className="text-5xl">
              📱
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              Get the {product.name} App
            </h2>

            <p className="mt-4 text-gray-600">
              Download the Android application and connect
              your IlaGuard device.
            </p>

            <a
              href={product.apk}
              download
              className="inline-block mt-8 rounded-xl bg-green-700 px-8 py-4 text-white font-semibold hover:bg-green-800 transition"
            >
              Download Android APK
            </a>

            <p className="mt-4 text-xs text-gray-400">
              Android application • IlaGuard Labs
            </p>

          </div>

        </section>

      )}

    </main>
  );
}


function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <div className="text-sm font-bold text-green-700">
        {number}
      </div>

      <h3 className="mt-3 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {text}
      </p>

    </div>
  );
}