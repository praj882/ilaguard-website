import JoinCommunityForm from "@/components/community/JoinCommunityForm";

export default function CommunityPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
            IlaGuard Community
          </span>

          <h1 className="text-5xl font-bold mt-6">
            Join Our Community
          </h1>

          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Connect with engineers, students, innovators, researchers and
            agriculture enthusiasts building the future of Embedded Systems,
            AI, IoT and Smart Farming.
          </p>

        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <JoinCommunityForm />
        </div>
      </section>
    </main>
  );
}