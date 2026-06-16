import Image from "next/image";

export default function SolutionsPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Solutions
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-green-100">
            Smart agricultural and embedded solutions designed to improve
            productivity, conserve resources, and enable intelligent automation.
          </p>

        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Smart Irrigation */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <Image
                src="/images/Smart_irrigation_system.jpg"
                alt="Smart Irrigation"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  Smart Irrigation
                </h3>

                <p className="text-gray-600">
                  Automated irrigation based on soil moisture,
                  weather conditions, and crop requirements.
                </p>
              </div>
            </div>

            {/* Water Tank Monitoring */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <Image
                src="/images/Water_Tank_Monitoring.jpg"
                alt="Water Tank Monitoring"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  Water Tank Monitoring
                </h3>

                <p className="text-gray-600">
                  Monitor water levels remotely and receive
                  instant alerts before tanks run empty.
                </p>
              </div>
            </div>
			
            {/* IoT Agriculture */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <Image
                src="/images/Modern_IoT_ecosystem.jpg"
                alt="IoT Agriculture"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  IoT Agriculture
                </h3>

                <p className="text-gray-600">
                  Connected sensors and cloud-based analytics
                  for smarter farming decisions.
                </p>
              </div>
            </div>
			
            {/* Farm Automation */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <Image
                src="/images/Farm_Automation.jpg"
                alt="Farm Automation"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  Farm Automation
                </h3>

                <p className="text-gray-600">
                  Automate pumps, sensors, and agricultural
                  equipment to reduce manual effort.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Why Our Solutions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Why Choose IlaGuard Solutions?
          </h2>

          <p className="text-lg text-gray-600 mb-14">
            Our solutions combine embedded systems, IoT,
            automation, and real-world agricultural knowledge.
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-3xl mb-3">💧</h3>
              <h4 className="font-bold mb-2">Save Water</h4>
              <p className="text-gray-600">
                Reduce unnecessary irrigation and water waste.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-3xl mb-3">⚡</h3>
              <h4 className="font-bold mb-2">Smart Automation</h4>
              <p className="text-gray-600">
                Minimize manual intervention and increase efficiency.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-3xl mb-3">📡</h3>
              <h4 className="font-bold mb-2">IoT Connectivity</h4>
              <p className="text-gray-600">
                Monitor and control systems remotely.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-3xl mb-3">🌱</h3>
              <h4 className="font-bold mb-2">Sustainable Farming</h4>
              <p className="text-gray-600">
                Improve productivity while conserving resources.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Farm?
          </h2>

          <p className="text-xl text-green-100 mb-8">
            Explore smart agricultural solutions designed for
            modern farming and sustainable growth.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition">
            Contact Us
          </button>

        </div>
      </section>

    </main>
  );
}