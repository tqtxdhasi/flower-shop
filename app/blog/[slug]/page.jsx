// app/blogs/[slug]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";

// Dummy blog data
const dummyBlogPosts = [
  {
    slug: "rose-care-tips",
    title: "5 Essential Tips for Long-Lasting Rose Care",
    content: `
      <p class="text-rose-700">Roses are the epitome of beauty in any garden. Here's how to keep them thriving:</p>
      <ul>
        <li>1. Proper watering techniques</li>
        <li>2. Seasonal pruning methods</li>
        <li>3. Natural pest control</li>
        <li>4. Soil nutrition balance</li>
        <li>5. Winter protection</li>
      </ul>
      <p>Learn more about cultivating perfect roses in our gardening guide.</p>
    `,
    featuredImage: "/images/rose-care.jpg",
    author: "Flora Rosegardener",
    date: "2024-03-15",
    excerpt:
      "Discover expert tips for maintaining beautiful roses all year round",
    category: "Gardening Tips",
    relatedPosts: ["rose-varieties", "seasonal-blooms"],
  },
  {
    slug: "rose-varieties",
    title: "Top 10 Rose Varieties for Your Garden",
    content: `
      <h2>Explore Popular Rose Types</h2>
      <p>From hybrid teas to climbing roses:</p>
      <ol>
        <li>Peace Rose</li>
        <li>Double Delight</li>
        <li>Queen Elizabeth</li>
      </ol>
    `,
    featuredImage: "/images/rose-varieties.jpg",
    author: "David Botanist",
    date: "2024-03-10",
    excerpt: "Discover the most popular rose varieties for home gardens",
    category: "Plant Guide",
    relatedPosts: ["rose-care-tips", "seasonal-blooms"],
  },
];

export async function generateStaticParams() {
  return dummyBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = dummyBlogPosts.find((post) => post.slug === params.slug);

  return {
    title: `${post?.title} | Rose Haven Blog`,
    description: post?.excerpt,
    openGraph: {
      images: [post?.featuredImage || ""],
    },
  };
}

export default async function BlogPost({ params }) {
  const post = dummyBlogPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  const relatedPosts = dummyBlogPosts.filter(
    (p) => post.relatedPosts.includes(p.slug) && p.slug !== post.slug
  );

  return (
    <article className="min-h-screen bg-rose-50">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-rose-900 mb-6">{post.title}</h1>

        <div className="flex items-center gap-4 mb-12 text-rose-700">
          <span className="font-medium">{post.author}</span>
          <time className="text-sm">
            {new Date(post.date).toLocaleDateString()}
          </time>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        </div>

        {/* Content */}
        <div
          className="prose lg:prose-xl max-w-none text-rose-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 border-t-2 border-rose-100 pt-12">
            <h3 className="text-2xl font-bold text-rose-900 mb-8">
              More Rose Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <a
                  key={relatedPost.slug}
                  href={`/blogs/${relatedPost.slug}`}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-rose-800 mb-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-rose-600 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
