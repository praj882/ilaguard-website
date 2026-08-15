import Link from "next/link";
import { PRODUCTS } from "@/data/products";

function getStatus(status: string) {
  switch (status) {
    case "prototype":
      return {
        text: "Prototype",
        className: "bg-green-100 text-green-700",
      };

    case "available":
      return {
        text: "Available",
        className: "bg-green-100 text-green-700",
      };

    case "development":
      return {
        text: "In Development",
        className: "bg-yellow-100 text-yellow-700",
      };

    default:
      return {
        text: "Coming Soon",
        className: "bg-gray-100 text-gray-600",
      };
  }
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}

      <section className="bg-green-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <p className="text-orange-400 font-semibold">
            ILAGUARD PRODUCTS
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-bold">
            Technology Built for
            <br />
            Smarter Agriculture
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-green-100">
            Explore IlaGuard's growing ecosystem of smart agriculture,
            IoT and automation products.
          </p>

        </div>

      </section>


      {/* Products */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {PRODUCTS.map((product) => {

            const status = getStatus(product.status);

            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group"
              >

                <article className="h-full overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                  {/* Image */}

                  <div className="relative h-64 bg-green-50 overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div
                      className={`absolute top-5 left-5 rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}
                    >
                      {status.text}
                    </div>

                  </div>


                  {/* Content */}

                  <div className="p-7">

                    <div className="text-4xl">
                      {product.icon}
                    </div>

                    <h2 className="mt-4 text-2xl font-bold text-gray-900">
                      {product.name}
                    </h2>

                    <p className="mt-2 font-semibold text-green-700">
                      {product.tagline}
                    </p>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mt-6 font-semibold text-green-700">
                      Explore {product.name} →
                    </div>

                  </div>

                </article>

              </Link>
            );
          })}

        </div>

      </section>

    </main>
  );
}