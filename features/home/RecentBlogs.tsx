import Link from "next/link";

interface Publication {
  date: string;
  readTime: string;
  title: string;
  description: string;
  href: string;
}

const publications: Publication[] = [
  {
    date: "OCT 24, 2023",
    readTime: "8 min read",
    title: "Microservices vs. Monoliths in the Era of LLMs",
    description:
      "An analysis of architectural paradigms when integrating Large Language Models. Exploring why a well-structured monolith might be superior for latency-sensitive AI inferences.",
    href: "/blogs/microservices-vs-monoliths-llms",
  },
  {
    date: "SEP 12, 2023",
    readTime: "12 min read",
    title: "Event-Driven Architecture Resilience Patterns",
    description:
      "Deep dive into implementing circuit breakers, dead letter queues, and graceful degradation in high-throughput Kafka event streams to prevent cascading failures.",
    href: "/blogs/event-driven-architecture-resilience",
  },
];

export default function RecentBlogs() {
  return (
    <section className="bg-bg-subtle px-8 py-12 md:px-16 lg:px-16 md:py-18">
      {/* Section header */}
      <div className="mb-8 md:mb-10">
        <h2 className="text-4xl font-bold mb-2.5">Recent Publications</h2>
        <p className="">
          Technical essays on architecture, AI, and engineering leadership.
        </p>
      </div>

      {/* Publication list */}
      <div className="divide-y divide-[#dedad5]">
        {publications.map((pub) => (
          <Link
            key={pub.href}
            href={pub.href}
            className="group grid md:grid-cols-[140px_1fr] gap-x-6 py-10"
          >
            {/* Left column: date + read time */}
            <div className="flex flex-col gap-1 py-2 ">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                {pub.date}
              </span>
              <span className="text-xs mt-1">{pub.readTime}</span>
            </div>

            {/* Right column: title + description */}
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold group-hover:underline decoration-1 underline-offset-4 group-hover:text-primary transition-colors duration-200">
                {pub.title}
              </h3>
              <p className="leading-relaxed">{pub.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer link */}
      <div className="mt-8">
        <Link
          href="blog"
          className="text-primary inline-flex items-center gap-1.5 font-medium"
        >
          <span className="underline underline-offset-4 hover:mr-2 transition-all duration-200">
            View All Publications
          </span>
          <span aria-hidden="true" className="">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
