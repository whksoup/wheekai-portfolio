import Image from "next/image";

type Project = {
  name: string;
  slug: string;
  href: string;
  image: string;
  title: string;
  tags?: string[];
  wip: boolean;
  year: string;
};

type ProjectGridProps = {
  projects: Project[];
};
export default function ProjectGrid({ projects }: ProjectGridProps) {
  // Sort projects by year descending, treating "ongoing" as the smallest
  const sortedProjects = [...projects].sort((a, b) => {
    const yearA = a.year === "ongoing" ? 0 : parseInt(a.year);
    const yearB = b.year === "ongoing" ? 0 : parseInt(b.year);
    return yearB - yearA; // descending
  });

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedProjects.map((p) => {
        const overlayColor = p.wip ? "bg-black/90" : "bg-black/60";

        const content = (
          <div className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer">
            {/* Full image */}
            <Image
              src={p.image}
              alt={p.name}
              width={800}
              height={600}
              className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div
              className={`${overlayColor} absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4`}
            >
              <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
              {p.tags && (
                <div className="flex flex-wrap gap-2 text-sm mb-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/20 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {p.wip && (
                <span className="mt-2 font-bold text-white text-sm mb-2">
                  Page under construction!
                </span>
              )}
              {/* Year on hover */}
              <span className="mt-2 text-sm font-medium">{p.year}</span>
            </div>
          </div>
        );

        return p.wip ? (
          <div key={p.slug}>{content}</div>
        ) : (
          <a key={p.slug} href={p.href}>
            {content}
          </a>
        );
      })}
    </div>
  );
}
