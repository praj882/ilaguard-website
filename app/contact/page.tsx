import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Let's discuss smart agricultural solutions,
            embedded systems projects, internships,
            training programs, and partnerships.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Side */}
            <div>

              <h2 className="text-4xl font-bold text-green-800 mb-6">
                Get In Touch
              </h2>

              <p className="text-gray-600 mb-10">
                Whether you're a farmer looking for automation
                solutions, a student seeking training opportunities,
                or a business interested in collaboration,
                we'd love to hear from you.
              </p>

              <div className="space-y-8">

                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-orange-500 text-2xl mt-1" />

                  <div>
                    <h3 className="font-bold text-lg">
                      Email
                    </h3>

                    <p className="text-gray-600">
                      info@ilaguard.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaPhone className="text-orange-500 text-2xl mt-1" />

                  <div>
                    <h3 className="font-bold text-lg">
                      Phone
                    </h3>

                    <p className="text-gray-600">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaLocationDot className="text-orange-500 text-2xl mt-1" />

                  <div>
                    <h3 className="font-bold text-lg">
                      Location
                    </h3>

                    <p className="text-gray-600">
                      Bihar, India
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">

              <h2 className="text-3xl font-bold text-green-800 mb-8">
                Send Us a Message
              </h2>

              <form className="space-y-6">

                <div>
                  <label className="block mb-2 font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Subject
                  </label>

                  <select
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    <option>General Inquiry</option>
                    <option>Smart Irrigation</option>
                    <option>Training Program</option>
                    <option>Internship</option>
                    <option>Partnership</option>
                    <option>Technical Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Something Great?
          </h2>

          <p className="text-xl text-green-100 mb-8">
            From smart agriculture solutions to embedded systems
            innovation, IlaGuard Labs is here to help.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition">
            Start a Conversation
          </button>

        </div>
      </section>

    </main>
  );
}