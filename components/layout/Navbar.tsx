"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Blogs", href: "blogs" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white  border-b border-b-border-light px-8 md:px-16 py-4 sticky top-0 z-10">
      <div className="h-2 p-0 m-0 absolute top-0 left-0 w-full bg-hero-gradient"></div>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-bold text-3xl tracking-tight font-serif">
          Sandip Deb
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`text-xl font-medium transition-colors duration-200 relative pb-1 ${
                  activeLink === link.label
                    ? "text-primary"
                    : "text-text-primary hover:text-primary"
                }`}
              >
                {link.label}
                {activeLink === link.label && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="notfound"
          className="hidden md:inline-block bg-primary text-white hover:bg-primary-hover text-sm font-medium px-5 py-2.5 rounded-md transition-colors duration-200"
        >
          Read My Latest Blog
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-secondary-subtle pt-4 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveLink(link.label);
                setMenuOpen(false);
              }}
              className={`text-lg font-medium px-2 transition-colors duration-200 ${
                activeLink === link.label
                  ? "text-primary"
                  : "text-text-primary hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="notfound"
            className="inline-block bg-hero-gradient text-white text-lg font-medium px-5 py-2.5 rounded-md hover:bg-primary-hover transition-colors duration-200 self-start"
          >
            Read My Latest Blog
          </a>
        </div>
      )}
    </nav>
  );
}
