import ProjectCard from "@/features/projects/ProjectCard";

interface Project {
  title: string;
  summary: string;
  imageLabel: string;
  href: string;
  sourceHref: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Distributed Llama Inference Engine",
    summary:
      "A high-throughput inference engine for large language models with low-latency streaming and adaptive scheduling.",
    imageLabel: "INFERENCE CLUSTER",
    href: "/projects/distributed-llama-inference-engine",
    sourceHref: "https://github.com",
    tags: ["C++", "CUDA", "gRPC"],
  },
  {
    title: "Resilient Event Mesh",
    summary:
      "A cross-region event backbone that maintains predictable delivery guarantees during node failures and partitions.",
    imageLabel: "EVENT FABRIC",
    href: "/projects/resilient-event-mesh",
    sourceHref: "https://github.com",
    tags: ["Go", "Kafka", "Kubernetes"],
  },
  {
    title: "Resilient Event Mesh",
    summary:
      "A cross-region event backbone that maintains predictable delivery guarantees during node failures and partitions.",
    imageLabel: "EVENT FABRIC",
    href: "/projects/resilient-event-mesh-1",
    sourceHref: "https://github.com",
    tags: ["Go", "Kafka", "Kubernetes"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="px-8 py-12 md:px-16 lg:px-16 md:py-18">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <h1 className="mb-7 font-serif text-[clamp(2.35rem,4.7vw,3.45rem)] font-black leading-[1.05] tracking-tight">
            Curated Works
          </h1>
          <p className="max-w-3xl text-[1rem] leading-relaxed">
            I am a Senior Software Engineer specializing in distributed systems
            and high-availability architecture. My work bridges the gap between
            theoretical computer science and pragmatic engineering, focusing on
            creating elegant solutions to complex, scalable problems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
