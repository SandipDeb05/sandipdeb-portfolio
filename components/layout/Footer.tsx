"use client";

const socialLinks = [
  { label: "LINKEDIN", href: "https://linkedin.com" },
  { label: "GITHUB", href: "https://github.com" },
  { label: "TWITTER", href: "https://twitter.com" },
  { label: "RSS", href: "/rss.xml" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t px-8 py-8 bg-hero-gradient">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="/" className="text-white text-3xl tracking-tight font-serif">
          Sandip Deb
        </a>

        {/* Social Links */}
        <ul className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium tracking-widest text-white hover:underline underline-offset-2 transition-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-xs text-white">
          © {new Date().getFullYear()} Sandip Deb. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
