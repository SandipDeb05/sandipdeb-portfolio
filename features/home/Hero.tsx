import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-section min-h-[70vh] flex items-center px-8 py-12 md:px-16 lg:px-16 md:py-18">
      <div className="w-full">
        {/* Headline */}
        <h1 className="w-5/6 text-6xl font-black leading-[1.05] tracking-tight mb-8">
          Architecting{" "}
          <em className="font-black italic text-primary">scalable</em> systems
          <br />
          and navigating the AI frontier.
        </h1>

        {/* Subheading */}
        <p className="hero-sub text-lg leading-relaxed mb-12 md:w-4/6 sm:w-full">
          Senior Software Engineer specializing in high-throughput backend
          architecture, resilient distributed systems, and applied artificial
          intelligence. I bridge the gap between academic theory and production
          reality.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-6 flex-wrap">
          <Link
            href="/blog"
            className="bg-hero-gradient inline-flex items-center justify-center px-7 py-4 rounded-md font-semibold text-white tracking-wide text-sm hover:bg-primary-hover transition-colors duration-200"
          >
            Read My Technical Blog
          </Link>

          <Link
            href="/about"
            className="text-primary inline-flex items-center gap-1.5 font-medium"
          >
            <span className="underline underline-offset-4 hover:mr-2 transition-all duration-200">
              Read about me
            </span>
            <span aria-hidden="true" className="">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
