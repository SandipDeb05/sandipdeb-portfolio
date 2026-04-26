import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="min-h-130 grid grid-cols-1 md:grid-cols-2">
      {/* Left — text content */}
      <div className="flex flex-col justify-center px-8 py-12 md:px-16 lg:px-16 md:py-18">
        {/* Heading */}
        <h2 className="font-serif text-[clamp(2.4rem,4.5vw,3.5rem)] font-black leading-[1.08] tracking-tight text-[#1a1a18] mb-8">
          Sandip's
          <br />
          Journey.
        </h2>

        {/* Body */}
        <p className="text-[1rem] leading-relaxed text-[#3d3d3a] max-w-120 mb-10">
          I am a Senior Software Engineer specializing in distributed systems
          and high-availability architecture. My work bridges the gap between
          theoretical computer science and pragmatic engineering, focusing on
          creating elegant solutions to complex, scalable problems.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-6 flex-wrap">
          <Link
            href="/resume"
            className="bg-primary inline-flex items-center justify-center px-6 py-3.5 rounded-md font-sans font-semibold text-white text-[0.9375rem] tracking-wide transition-all duration-200 hover:brightness-90 active:scale-[0.97]"
          >
            View Résumé
          </Link>

          <Link
            href="/contact"
            className="text-primary inline-flex items-center font-medium text-[0.9375rem] hover:text-white"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right — portrait image */}
      <div className="flex items-center justify-center py-12 px-8">
        <div className="relative w-[320px] h-95 md:w-90 md:h-105 rounded-sm overflow-hidden shadow-sm">
          <Image
            src="/sandip-profile-image.jpeg"
            alt="Portrait of Sandip"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 320px, 360px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
