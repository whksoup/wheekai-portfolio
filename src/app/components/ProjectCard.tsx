import Link from "next/link";

type ProjectCardProps = {
  name?: string;
  href: string;
  image: string;
  alt?: string;
  subtitle?: string;
  title: string;
  tags?: string[];
  align?: "left" | "center" | "right";
  marginTop?: string; // tailwind mt-* class
  marginBottom?: string; // tailwind mb-* class
  wip?: boolean;
};

export default function ProjectCard({
  href,
  image,
  alt = "",
  subtitle,
  title,
  tags = [],
  align = "left",
  marginTop = "mt-0",
  marginBottom = "mb-32",
  wip = false,
}: ProjectCardProps) {
  const alignClass =
    align === "center"
      ? "col-start-2 col-end-6" // middle 2/3 (cols 2–5)
      : align === "right"
      ? "col-start-3 col-end-7" // right 2/3 (cols 3–6)
      : "col-start-1 col-end-5"; // default left 2/3 (cols 1–4)

  // Shared content
  const content = (
    <div
      className={`grid grid-cols-6 w-full max-w-6xl mx-auto ${marginTop} ${marginBottom}`}
    >
      <div className={`${alignClass} flex flex-col gap-4`}>
        {/* Hero Image */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg relative group">
          <img
            src={image}
            alt={alt}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* WIP overlay appears only on hover */}
          {wip && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-600/50">
              <span className="text-white font-bold text-lg">
                The page for this project is being redesigned!
              </span>
            </div>
          )}
        </div>

        {/* Text Content */}
        <div>
          {subtitle && (
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
              {subtitle}
            </p>
          )}
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
            {title}
            {!wip && (
              <span className="transform transition-transform group-hover:translate-x-1">
                →
              </span>
            )}
          </h2>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full border border-gray-300 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // If WIP, just render content without link
  if (wip) {
    return <div className="cursor-not-allowed">{content}</div>;
  }

  // Otherwise wrap with link
  return (
    <Link href={href} className="block group">
      {content}
    </Link>
  );
}
