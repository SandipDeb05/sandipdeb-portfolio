// components/FeaturedProjects.tsx

import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

const projects: Project[] = [
  {
    title: "Distributed Llama Inference Engine",
    description:
      "A high-throughput, low-latency inference engine for large language models built on top of gRPC and custom CUDA kernels.",
    tags: ["C++", "CUDA", "GRPC"],
    href: "/projects/distributed-llama-inference-engine",
  },
  {
    title: "Resilient Event Mesh",
    description:
      "A fault-tolerant event routing layer designed for cross-region Kubernetes clusters, ensuring exactly-once delivery semantics under partition.",
    tags: ["GO", "KAFKA", "KUBERNETES"],
    href: "/projects/resilient-event-mesh",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="px-8 py-12 md:px-16 lg:px-16 md:py-18">
      {/* Section header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-2.5">Featured Projects</h2>
        <p className="">
          Selected open-source contributions and architectural implementations.
        </p>
      </div>

      {/* Project cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.href}
            href={project.href}
            className="group flex flex-col gap-4 bg-white border border-[#dedad5] rounded-sm p-8 transition-shadow duration-200 hover:shadow-md"
          >
            {/* Title */}
            <h3 className="font-serif text-[1.375rem] font-semibold text-[#1a1a18] leading-snug group-hover:underline decoration-1 underline-offset-4 group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-[0.9375rem] leading-relaxed text-[#4a4a46] flex-1">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary-subtle text-xs tracking-widest uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
