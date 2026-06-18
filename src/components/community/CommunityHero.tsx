export default function CommunityHero() {
  return (
    <section className="bg-gradient-to-r from-green-900 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        <span className="inline-block bg-orange-500 px-5 py-2 rounded-full text-sm font-semibold">
          IlaGuard Community
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mt-8 leading-tight">
          Join the Future of
          <br />
          Smart Agriculture
        </h1>

        <p className="mt-8 text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
          Become part of a growing community of engineers,
          students, researchers, farmers, and innovators
          passionate about AI, Embedded Systems, IoT, and
          sustainable agriculture.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <a
            href="#join"
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            Join Our Community
          </a>

          <a
            href="/blog"
            className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-900 transition"
          >
            Read Our Blog
          </a>

        </div>

      </div>
    </section>
  );
}