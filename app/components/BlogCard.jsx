import Link from "next/link";

export const BlogCard = ({
  title,
  excerpt,
  image,
  date,
  readingTime,
  href,
  tags = [],
  location,
}) => {
  return (
    <article className="group h-fit bg-rose-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-full mx-auto hover:bg-rose-100 border-2 border-rose-100">
      {/* Image Section */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {tags.length > 0 ? (
          <div className="absolute bottom-2 left-2 w-full flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="bg-rose-600/90 text-white px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </div>
            ))}
          </div>
        ) : location ? (
          <div className="absolute bottom-2 left-2 bg-rose-600/90 text-white px-3 py-1 rounded-full text-sm">
            {location}
          </div>
        ) : null}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-rose-900 mb-3 hover:text-rose-700 transition-colors">
          <Link href={href}>
            {title}
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </span>
          </Link>
        </h2>
        <p className="text-rose-800 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between text-rose-600 text-sm mb-4">
          <span>📖 {readingTime}</span>
          <span>🗓️ {date}</span>
        </div>
        <Link
          href={href}
          className="block text-center bg-rose-600 hover:bg-rose-700 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
          aria-label={`Czytaj więcej: ${title}`}
        >
          {tags.includes("Roze")
            ? "Poznaj Sekrety Florystów →"
            : "Czytaj Poradnik Krakowskiego Florysty 🌹"}
        </Link>
      </div>
    </article>
  );
};
