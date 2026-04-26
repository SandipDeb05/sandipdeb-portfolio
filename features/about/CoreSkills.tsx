interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Infrastructure",
    skills: ["Rust", "Go", "PostgreSQL", "Kubernetes", "Kafka", "Redis"],
  },
  {
    title: "Client Architecture",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    title: "Machine Learning",
    skills: ["Python", "PyTorch", "TensorFlow", "LangChain", "Vector DBs"],
  },
];

export default function CoreSkills() {
  return (
    <section className="px-8 py-12 md:px-16 lg:px-16 md:py-18">
      {/* Section heading */}
      <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[#1a1a18] mb-12 tracking-tight">
        Technical Mastery
      </h2>

      {/* Three-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skillCategories.map((category) => (
          <div key={category.title}>
            {/* Category title + divider */}
            <h3 className="font-serif text-[1.125rem] font-semibold text-[#1a1a18] mb-3">
              {category.title}
            </h3>
            <div className="w-full h-px bg-[#d4cfc9] mb-5" />

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-[#e8e4df] text-[#3d3d3a] text-[0.875rem] font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
