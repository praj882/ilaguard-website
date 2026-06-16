import Link from "next/link";
import { blogs } from "@/app/lib/blogs";

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-green-700 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">IlaGuard Blog</h1>
        <p className="text-xl text-green-100 max-w-3xl mx-auto">
          Insights on Embedded Systems, Modern C++, Linux, IoT, Smart Agriculture
        </p>
      </section>

      {/* Categories */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {["Embedded C", "Modern C++", "Linux", "IoT", "Agriculture", "Career"].map(
            (cat) => (
              <button
                key={cat}
                className="bg-green-100 text-green-800 px-5 py-2 rounded-full"
              >
                {cat}
              </button>
            )
          )}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="h-52 bg-green-700" />

              <div className="p-6">
                <span className="text-sm text-orange-500 font-semibold">
                  {blog.category}
                </span>

                <h2 className="text-2xl font-bold mt-3 mb-3">
                  {blog.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {blog.description}
                </p>

                <p className="text-sm text-gray-500 mb-4">
                  {blog.date}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-green-700 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}