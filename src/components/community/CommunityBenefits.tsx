export default function CommunityBenefits() {
  const benefits = [
    {
      icon: "🤝",
      title: "Connect with Innovators",
      description:
        "Network with students, engineers, researchers, and farmers passionate about AI, Embedded Systems, IoT, and Agri-Tech.",
    },
    {
      icon: "🎓",
      title: "Learning Opportunities",
      description:
        "Access technical blogs, tutorials, workshops, and future training programs designed to help you grow your skills.",
    },
    {
      icon: "🚀",
      title: "Projects & Internships",
      description:
        "Get early access to internship opportunities, collaborative projects, and open-source initiatives at IlaGuard Labs.",
    },
    {
      icon: "🌱",
      title: "Shape the Future",
      description:
        "Contribute ideas and solutions that make agriculture smarter, more sustainable, and more efficient through technology.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-900">
            Why Join IlaGuard Community?
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            We are building a community where technology meets agriculture.
            Whether you're learning, innovating, or solving real-world
            problems, there's a place for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-5">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-green-900 mb-4">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}