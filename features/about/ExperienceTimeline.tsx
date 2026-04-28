interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  highlighted: boolean; // true = white card, false = plain
}

const experiences: Experience[] = [
  {
    period: "2021 — PRESENT",
    title: "Principal Architect",
    company: "TechNova Innovations",
    description:
      "Spearheaded the migration of legacy monolithic systems to a resilient microservices architecture. Designed and implemented highly available, globally distributed data pipelines processing terabytes of telemetry data daily.",
    highlighted: true,
  },
  {
    period: "2017 — 2021",
    title: "Senior Backend Engineer",
    company: "Datastream Labs",
    description:
      "Led backend development of a real-time analytics platform handling millions of concurrent events. Architected fault-tolerant ingestion pipelines using Kafka and Flink at scale.",
    highlighted: false,
  },
  {
    period: "2014 — 2017",
    title: "Software Engineer",
    company: "CoreSystems Inc.",
    description:
      "Built and maintained distributed caching layers and internal developer tooling. Contributed to open-source infrastructure projects adopted across engineering teams.",
    highlighted: false,
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="bg-primary-subtle px-8 md:px-16 lg:px-24 py-20">
      {/* Section heading — centered */}
      <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.75rem)] font-bold text-[#1a1a18] text-center mb-16 tracking-tight">
        Professional Trajectory
      </h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-45 top-0 bottom-0 w-px bg-[#d4cfc9]" />

        <div className="flex flex-col gap-14">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative grid grid-cols-[180px_1fr] gap-8"
            >
              {/* Date label */}
              <div className="pt-1 text-right pr-8">
                <span
                  className="text-[0.6875rem] font-semibold tracking-widest uppercase"
                  style={{ color: "var(--color-primary)" }}
                >
                  {exp.period}
                </span>
              </div>

              {/* Content */}
              {exp.highlighted ? (
                <div className="bg-white border border-[#dedad5] rounded-lg px-8 py-7 shadow-sm">
                  <h3 className="font-serif text-[1.25rem] font-bold text-[#1a1a18] mb-1">
                    {exp.title}
                  </h3>
                  <p className="font-serif italic text-[#7a7a74] text-[0.9375rem] mb-4">
                    {exp.company}
                  </p>
                  <p className="text-[0.9375rem] leading-relaxed text-[#4a4a46]">
                    {exp.description}
                  </p>
                </div>
              ) : (
                <div className="pt-1 pb-4">
                  <h3 className="font-serif text-[1.25rem] font-bold text-[#1a1a18] mb-1">
                    {exp.title}
                  </h3>
                  <p className="font-serif italic text-[#7a7a74] text-[0.9375rem] mb-3">
                    {exp.company}
                  </p>
                  <p className="text-[0.9375rem] leading-relaxed text-[#4a4a46]">
                    {exp.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
