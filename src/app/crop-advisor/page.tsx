
import Link from "next/link";

export default function CropAdvisorPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Crop Advisor
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 sm:text-lg">
            Helping farmers make better crop decisions with data.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <Link
            href="/crop-advisor/weather"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 text-4xl">🌦️</div>
            <h2 className="text-xl font-semibold text-gray-900">
              अपने क्षेत्र का मौसम जानें
            </h2>
            <p className="mt-2 text-gray-600">
              बेहतर खेती के फैसले लेने के लिए अपने क्षेत्र का वर्तमान मौसम और अगले 7 दिनों का पूर्वानुमान देखें।
            </p>
          </Link>

          <Link
            href="/crop-advisor/best-crop"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 text-4xl">🌱</div>
            <h2 className="text-xl font-semibold text-gray-900">
              उपयुक्त फसल चुनें
            </h2>
            <p className="mt-2 text-gray-600">
              अपने क्षेत्र, मौसम और खेती की परिस्थितियों के अनुसार सबसे उपयुक्त फसल जानें।
            </p>
          </Link>

          <Link
            href="/crop-advisor/crop-variety"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 text-4xl">🌾</div>
            <h2 className="text-xl font-semibold text-gray-900">
              फसल की उपयुक्त किस्म चुनें
            </h2>
            <p className="mt-2 text-gray-600">
              मौसम, क्षेत्र और खेती की परिस्थितियों के अनुसार फसल की उपयुक्त किस्में जानें।
            </p>
          </Link>

          <Link
            href="/crop-advisor/mandi-price"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 text-4xl">📈</div>
            <h2 className="text-xl font-semibold text-gray-900">
              फसल के भाव का इतिहास देखें
            </h2>
            <p className="mt-2 text-gray-600">
              अपने स्थानीय मंडी और फसल का चयन करें और उपलब्ध फसल के भाव का इतिहास देखें।
            </p>
          </Link>

          <Link
            href="/crop-advisor/mandi-bhav"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 text-4xl">📊</div>
            <h2 className="text-xl font-semibold text-gray-900">
              मंडी भाव देखें
            </h2>
            <p className="mt-2 text-gray-600">
              अपनी फसल और राज्य चुनें और सभी उपलब्ध मंडियों के न्यूनतम, अधिकतम और मॉडल भाव देखें।
            </p>
          </Link>

          <Link
            href="/crop-advisor/crop-prices"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 text-4xl">💹</div>
            <h2 className="text-xl font-semibold text-gray-900">
              फसल के भाव देखें
            </h2>
            <p className="mt-2 text-gray-600">
              अपनी मंडी चुनें और वहाँ उपलब्ध फसलों के भाव देखें।
            </p>
          </Link>

          {/* Government Agricultural Schemes */}
          <Link
            href="/crop-advisor/government-schemes"
            className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 text-4xl">🏛️</div>
            <h2 className="text-xl font-semibold text-gray-900">
              सरकारी कृषि योजनाएँ
            </h2>
            <p className="mt-2 text-gray-600">
              अपने राज्य की सरकारी कृषि योजनाएँ, सब्सिडी, पात्रता और आवेदन की आधिकारिक जानकारी देखें।
            </p>
            <span className="mt-4 inline-flex items-center gap-2 font-semibold text-green-700">
              योजनाएँ देखें <span aria-hidden="true">→</span>
            </span>
          </Link>

        </div>
      </div>
    </main>
  );
}