import CropVarietyCard from "@/components/ui/CropVarietyCard";

export default function CropVarietyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Best Crop Variety
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 sm:text-lg">
            Find the most suitable crop variety based on
            your state, district, month and crop.
          </p>
        </div>

        <CropVarietyCard />
      </div>
    </main>
  );
}