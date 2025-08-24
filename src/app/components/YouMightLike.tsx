import Image from "next/image";
import { Project } from "@/app/Data/projects"; // adjust import path as needed

type YouMightLikeProps = {
  projects: Project[];
  currentHref: string; // exclude this project
};
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]; // avoid mutating original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function YouMightLike({
  projects,
  currentHref,
}: YouMightLikeProps) {
  // Filter: exclude WIP projects and the current one
  const filtered = projects.filter((p) => !p.wip && p.href !== currentHref);
  const shuffled = shuffleArray(filtered);
  // Pick only up to 3 suggestions
  const suggestions = shuffled.slice(0, 3);

  if (suggestions.length === 0) return null;

  return (
    <section className="w-full max-w-6xl mx-auto mt-24 mb-48">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Sorry! Most other projects are being updated currently, but these ones
        more than hold their own!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {suggestions.map((p) => (
          <a key={p.slug} href={p.href}>
            <div className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer">
              {/* Project image */}
              <Image
                src={p.image}
                alt={p.alt || p.name}
                width={800}
                height={600}
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="bg-black/60 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
                <p className="text-sm italic mb-2">{p.subtitle}</p>
                {p.tags && (
                  <div className="flex flex-wrap gap-2 text-xs mb-2">
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
                <span className="mt-2 text-sm font-medium">{p.year}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
