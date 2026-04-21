import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-start px-10 py-20 md:px-20 md:py-28 bg-bg-subtle">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-light text-black tracking-tight mb-8 leading-none">
          PAGE NOT FOUND
        </h1>

        <p className="text-sm md:text-base text-text-primary leading-relaxed">
          We regret to inform you that the information you are looking for is no
          longer available on{" "}
          <strong className="font-bold">www.sandipdeb.com</strong>. Please visit
          my{" "}
          <Link
            href="/"
            className="text-primary-active underline underline-offset-2 hover:no-underline transition-colors duration-200"
          >
            homepage
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
