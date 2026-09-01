export interface Project {
  name: string;
  slug: string; // semantic slug
  href: string;
  image: string;
  alt?: string;
  subtitle: string;
  title: string;
  tags?: string[];
  type: string;
  wip: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    name: "PYT : Alternative Control Interactions for Virtual Reality Sculpting",
    type: "spatial",
    slug: "spatial computing",
    href: "/PYT",
    image: "/Assets/PYT/Donut.webp",
    subtitle: "2025 Undergrad Thesis",
    title:
      "PYT : Alternative Control Interactions for Virtual Reality Sculpting",
    tags: ["UX Research", "Tool Design", "Interactive Design"],
    wip: false,
    year: "2025",
  },
  {
    name: "VReact : AR Simulations for Medical practice",
    type: "spatial",
    slug: "service",
    href: "/VReact",
    image: "/Assets/VReact/Bed.webp",
    subtitle: "2026",
    title: "Designing a modular interaction system for patient simulations.",
    tags: ["UX Research", "Tool Design", "Interactive Design"],
    wip: false,
    year: "2026",
  },
  {
    name: "Spider: A Toy ft. ChatGPT",
    type: "product",
    slug: "fun objects",
    href: "/Spider",
    image: "/Assets/Spider/HeroShot2.webp",
    subtitle: "Student Project",
    title:
      "AI In the design process: Can GPT build functional mechanical toys?",
    tags: ["Play Design", "Product Design", "Hi-Fi Prototyping"],
    wip: false,
    year: "2025",
  },
  {
    name: "Sphinx: Quiet digital interfaces for Taiwanese Elderly",
    type: "product",
    slug: "quiet interfaces",
    href: "/Sphinx",
    image: "/Assets/Sphinx/HeroShot.webp",
    subtitle: "Student Project",
    title: "What if a user interface grows alongside its user?",
    tags: ["UX Research", "Interaction Design", "Service Design"],
    wip: false,
    year: "2024",
  },
  {
    name: "Quiver: A $5 Motion Sensor",
    type: "product",
    slug: "product design",
    href: "/Quiver",
    image: "/Assets/Quiver/Quiver_HeroShotWide.webp",
    subtitle: "Student Project",
    title: "Plastic + Metal = Signal. What can we build with that?",
    tags: ["Product Design", "Electronics", "Interaction Design"],
    wip: false,
    year: "2022",
  },
  {
    name: "Canning Climb: Exploring safety tolerances in Play Space Design",
    type: "product",
    slug: "play design",
    href: "/CanningClimb",
    image: "/Assets/CanningClimb/HeroShot.webp",
    subtitle: "Student Project",
    title: "Injure your kids: Exploring risk in Play Space Design",
    tags: [
      "UX Research",
      "Spatial Design",
      "Play Design",
      "Concept Storytelling",
    ],
    wip: false,
    year: "2022",
  },
  {
    name: "Say No: Vape Monsters Vending Machine",
    type: "product",
    slug: "game design",
    href: "/VapeMonsters",
    image: "/Assets/NOK/No Vaping.webp",
    subtitle: "Student Project",
    title: "What happens when AI is used to design mechanical toys?",
    tags: ["Play Design", "Interactive Design", "Commercial Project"],
    wip: false,
    year: "2025",
  },
  {
    name: "Horizon Hues for KPMG: Visualizing travel",
    type: "product",
    slug: "public exhibit work",
    href: "/NOKHues",
    image: "/Assets/NOK/HeroShot.webp",
    subtitle: "Student Project",
    title: "What happens when ChatGPT is used to design mechanical toys?",
    tags: ["Data Visualization", "Electronics", "Commercial Project"],
    wip: false,
    year: "2024",
  },
  {
    name: "SoundWeave: Tethering spatial audio to objects for Chamber Music",
    type: "spatial",
    slug: "cello",
    href: "/Spider",
    image: "/Assets/Intro/1soundweave.webp",
    subtitle: "2025 Undergrad Thesis",
    title:
      "PYT : Alternative Control Interactions for Virtual Reality Sculpting",
    tags: ["UX Research", "Experience Design", "Artist Collaboration"],
    wip: true,
    year: "2023",
  },
  {
    name: "Apple's First Spatial Computing Hackathon! Best Design: Tamari",
    type: "spatial",
    slug: "eye",
    href: "/Tamari",
    image: "/Assets/Intro/Tamari.webp",
    subtitle: "Hackathon",
    title: "Apple's First Spatial Computing Hackathon! Best Design: Tamari",
    tags: ["UX Research", "App Design", "Hackathon"],
    wip: false,
    year: "2025",
  },
  {
    name: "Ceramic Circuits: Upcycling useless family heirlooms",
    type: "art",
    slug: "speculative projects",
    href: "/Cercuits",
    image: "/Assets/Cercuits/HeroShot.webp",
    subtitle: "Student Project",
    title: "Designing adaptive interfaces for Taiwan's elderly",
    tags: ["Interaction Design", "Material Research", "Product Design"],
    wip: false,
    year: "2023",
  },
  {
    name: "Ukiyo: A film about a 2050 Metaverse",
    type: "art",
    slug: "nft",
    href: "/Spider",
    image: "/Assets/Ukiyo/HeroShot.webp",
    subtitle: "Student Project",
    title: "Designing adaptive interfaces for Taiwan's elderly",
    tags: ["Design Research", "Storytelling"],
    wip: true,
    year: "2022",
  },
  {
    name: "Fantasia: Visualizing Disney's Golden Age",
    type: "art",
    slug: "disney",
    href: "/Spider",
    image: "/Assets/Fantasia/HeroShot1.webp",
    subtitle: "Student Project",
    title: "Designing adaptive interfaces for Taiwan's elderly",
    tags: ["Data Visualization", "Graphic Design"],
    wip: true,
    year: "2022",
  },
  {
    name: "Murals",
    type: "art",
    slug: "murals",
    href: "/Spider",
    image: "/Assets/Murals/Ludwig.webp",
    subtitle: "Student Project",
    title: "Designing adaptive interfaces for Taiwan's elderly",
    tags: ["Art"],
    wip: true,
    year: "Ongoing",
  },
  {
    name: "Sketches",
    type: "art",
    slug: "sketch",
    href: "/Spider",
    image: "/Assets/Sketches/momkey.webp",
    subtitle: "Student Project",
    title: "Designing adaptive interfaces for Taiwan's elderly",
    tags: ["Art"],
    wip: true,
    year: "Ongoing",
  },
  // … more projects
];

/* ------------------------------------------------------------------ *
 * Slug resolution
 *
 * Old shared links use camelCase / snake_case forms of the slugs
 * ("quietInterfaces", "spatial_computing"). Matching is normalized so
 * those keep resolving without needing an entry below.
 * ------------------------------------------------------------------ */

/** "quietInterfaces" | "quiet_interfaces" | "Quiet Interfaces" -> "quietinterfaces" */
const canonical = (s: string): string => s.toLowerCase().replace(/[^a-z0-9]/g, "");

/**
 * Only for slugs whose *meaning* changed and which normalization can't
 * recover. Key = old slug (any casing), value = current `slug` in `projects`.
 * e.g. "metaverse": "nft"
 */
const SLUG_ALIASES: Record<string, string> = {};

const aliasIndex = new Map(
  Object.entries(SLUG_ALIASES).map(([from, to]) => [canonical(from), canonical(to)]),
);

const slugIndex = new Map(projects.map((p) => [canonical(p.slug), p]));

/** Accepts `-`, `,` or `+` so the separator can migrate without breaking links. */
const SLUG_SEPARATOR = /[-,+]/;

/** Resolve a single slug, tolerating casing, spacing and known aliases. */
export function resolveSlug(input: string): Project | undefined {
  const key = canonical(input);
  if (!key) return undefined;
  return slugIndex.get(aliasIndex.get(key) ?? key);
}

export interface ResolvedSlugs {
  /** Matched projects, in the order given, de-duplicated. */
  projects: Project[];
  /** Slugs from the URL that matched nothing. */
  unmatched: string[];
  /** True when the link is stale enough that we fell back to showing everything. */
  usedFallback: boolean;
}

/**
 * Parse the `slugs` query param.
 *
 * If more than half the requested slugs are dead, the link is treated as
 * stale and the full project list is returned — a stale link degrades to
 * "everything" rather than to a near-empty page.
 */
export function resolveSlugs(param: string | null | undefined): ResolvedSlugs {
  if (!param) return { projects: [], unmatched: [], usedFallback: false };

  const requested = param.split(SLUG_SEPARATOR).filter(Boolean);
  const matched: Project[] = [];
  const unmatched: string[] = [];
  const seen = new Set<string>();

  for (const raw of requested) {
    const project = resolveSlug(raw);
    if (!project) {
      unmatched.push(raw);
      continue;
    }
    if (seen.has(project.slug)) continue;
    seen.add(project.slug);
    matched.push(project);
  }

  const usedFallback =
    requested.length > 0 && matched.length < requested.length / 2;

  return {
    projects: usedFallback ? projects : matched,
    unmatched,
    usedFallback,
  };
}

if (process.env.NODE_ENV !== "production") {
  const collisions = new Map<string, string[]>();
  for (const p of projects) {
    const key = canonical(p.slug);
    collisions.set(key, [...(collisions.get(key) ?? []), p.slug]);
    if (!/^[a-z0-9 ]+$/.test(p.slug)) {
      console.warn(
        `[projects] slug "${p.slug}" (${p.name}) should be lowercase letters, digits and spaces only.`,
      );
    }
    if (p.slug.includes("-")) {
      console.warn(
        `[projects] slug "${p.slug}" contains "-", which is a URL separator and will split.`,
      );
    }
  }
  for (const [key, variants] of collisions) {
    if (variants.length > 1) {
      console.warn(
        `[projects] slugs ${variants.map((v) => `"${v}"`).join(", ")} normalize to "${key}"; only the first is reachable.`,
      );
    }
  }
}