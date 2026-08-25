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
            Smart farming recommendations to help you choose the right crop,
            market and variety.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <Link
            href="/crop-advisor/best-crop"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 text-4xl">🌱</div>

            <h2 className="text-xl font-semibold text-gray-900">
              Best Crop
            </h2>

            <p className="mt-2 text-gray-600">
              Find the most suitable crops based on your location, season and
              farming conditions.
            </p>
          </Link>

          <Link
            href="/crop-advisor/mandi-price"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 text-4xl">📈</div>

            <h2 className="text-xl font-semibold text-gray-900">
              Best Mandi Price
            </h2>

            <p className="mt-2 text-gray-600">
              Check mandi prices and identify better market opportunities for
              your crop.
            </p>
          </Link>

          <Link
            href="/crop-advisor/crop-variety"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 text-4xl">🌾</div>

            <h2 className="text-xl font-semibold text-gray-900">
              Best Crop Variety
            </h2>

            <p className="mt-2 text-gray-600">
              Find suitable crop varieties based on season, location and
              growing conditions.
            </p>
          </Link>

        </div>
      </div>
    </main>
  );
}