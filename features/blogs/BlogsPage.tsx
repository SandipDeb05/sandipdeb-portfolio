import Link from "next/link";

interface BlogEntry {
  date: string;
  readTime: string;
  category: string;
  title: string;
  summary: string;
  href: string;
}

function BlogEntryCard({ entry }: { entry: BlogEntry }) {
  return (
    <article
      key={entry.href}
      className="group rounded-sm p-2 transition-colors duration-200 hover:bg-[#efedeb]"
    >
      <p className="mb-4 text-xs tracking-wider text-[#5a514d]">
        {entry.date} {"  "}•{"  "} {entry.readTime} {"  "}•{"  "}
        <span className="text-[#a0411f]">{entry.category}</span>
      </p>
      <h2 className="mb-4 font-serif text-3xl leading-tight text-[#111111] transition-colors duration-200 group-hover:text-[#7f2f15] md:text-4xl">
        <Link href={entry.href}>{entry.title}</Link>
      </h2>
      <p className="mb-6 text-base leading-relaxed text-[#3f3834] md:text-lg">
        {entry.summary}
      </p>
      <Link
        href={entry.href}
        className="inline-flex items-center gap-1 text-base text-[#a0411f] transition-all duration-200 hover:gap-2 hover:text-[#823317]"
      >
        Read full entry <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

const blogEntries: BlogEntry[] = [
  {
    date: "MARCH 15, 2024",
    readTime: "12 MIN READ",
    category: "SYSTEM DESIGN",
    title:
      "Deconstructing the Monolith: Strategies for Gradual Microservice Migration",
    summary:
      "An architectural retrospective on transitioning legacy monolithic systems into distributed microservices without halting feature development. Examining domain-driven design, bounded contexts, and the strangler fig pattern.",
    href: "/blogs/deconstructing-the-monolith",
  },
  {
    date: "FEBRUARY 28, 2024",
    readTime: "8 MIN READ",
    category: "RUST",
    title: "Memory Safety as an Architectural Guarantee",
    summary:
      'Exploring how Rust\'s ownership model influences higher-level system architecture. Moving beyond "safe code" to building inherently resilient distributed components that fail predictably and recover gracefully.',
    href: "/blogs/memory-safety-as-an-architectural-guarantee",
  },
  {
    date: "JANUARY 12, 2024",
    readTime: "15 MIN READ",
    category: "DATA ENGINEERING",
    title: "Event Sourcing in High-Throughput Financial Systems",
    summary:
      "A deep dive into implementing event-driven architectures for systems requiring strict auditability. Discussing the trade-offs between eventual consistency, CQRS complexity, and the immutable ledger approach.",
    href: "/blogs/event-sourcing-in-high-throughput-financial-systems",
  },
  {
    date: "NOVEMBER 05, 2023",
    readTime: "10 MIN READ",
    category: "LEADERSHIP",
    title: "The Staff Engineer's Dilemma: Balancing Code and Context",
    summary:
      "Reflections on the transition from writing code to writing strategy. How senior technical leaders can maintain technical depth while operating at a broader organizational altitude.",
    href: "/blogs/the-staff-engineers-dilemma",
  },
];

export default function BlogsPage() {
  return (
    <section className="bg-[#f4f3f1] px-8 py-14 md:px-16 md:py-16">
      <div className="mx-auto max-w-4xl">
        <header className="mb-16">
          <h1 className="mb-6 font-serif text-4xl text-[#141414] md:text-5xl">
            Technical Logbook
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#3f3834]">
            A curated collection of architectural patterns, system design
            reflections, and deep dives into modern software engineering
            methodologies.
          </p>
        </header>

        <div className="space-y-14">
          {blogEntries.map((entry) => (
            <BlogEntryCard key={entry.href} entry={entry} />
          ))}
        </div>

        <div className="mt-14 border-t border-[#e2dfdc] pt-8 text-base">
          <div className="flex items-center justify-between">
            <span className="cursor-pointer text-[#9b9692] transition-colors duration-200 hover:text-[#6f6863]">
              ← Newer Entries
            </span>
            <span className="cursor-pointer text-[#a0411f] transition-colors duration-200 hover:text-[#823317]">
              Older Entries →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
