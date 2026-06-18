import { blogs } from "@/app/lib/blogs";
import { blogContent } from "@/content/blogs";
import { notFound } from "next/navigation";

type BlogSlug = keyof typeof blogContent;

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const content = blogContent[slug as BlogSlug]?.content;

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        {blog.title}
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        {blog.category} • {blog.date}
      </p>

      <p className="text-lg mb-6">
        {blog.description}
      </p>

      <div className="whitespace-pre-line text-gray-800">
        {content || "Content coming soon..."}
      </div>
    </main>
  );
}