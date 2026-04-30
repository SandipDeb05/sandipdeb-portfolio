import Link from "next/link";

interface ProjectCardProps {
  title: string;
  summary: string;
  imageLabel: string;
  href: string;
  sourceHref: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  summary,
  imageLabel,
  href,
  sourceHref,
  tags,
}: ProjectCardProps) {
  return (
    <article className="group rounded-sm border border-[#e4dfdb] p-7 transition-all duration-300 hover:-translate-y-0.5">
      <div className="mb-5 h-52 w-full rounded-sm bg-linear-to-br from-[#495263] via-[#303846] to-[#1e2530] p-4 transition-transform duration-300">
        <div className="flex h-full items-end">
          <p className="text-xs tracking-[0.2em] text-[#d9dde3] uppercase">
            {imageLabel}
          </p>
        </div>
      </div>

      <h3 className="mb-3 font-serif text-[1.55rem] font-semibold leading-tight text-[#1a1a18]">
        {title}
      </h3>
      <p className="mb-5 max-w-2xl text-[0.97rem] leading-relaxed text-[#4f4743]">
        {summary}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#ded7d2] px-3 py-1 text-xs tracking-wide text-[#4f4743]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <Link
          href={href}
          className="text-primary inline-flex items-center gap-1.5"
        >
          <span className="underline-offset-4 hover:mr-2 transition-all duration-200">
            Case Study
          </span>
          <span
            aria-hidden="true"
            className="transition-transform duration-200"
          >
            →
          </span>
        </Link>

        <Link
          href={sourceHref}
          className="underline underline-offset-4 inline-flex items-center text-sm transition-colors duration-200 hover:text-[#3f3834]"
        >
          View Source
        </Link>
      </div>
    </article>
  );
}
