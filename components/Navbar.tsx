"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Coaching", href: "#coaching" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="CadellAscope Enterprises"
            width={320}
            height={112}
            className="h-28 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/80 hover:text-gold text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          className="hidden md:inline-block bg-gold hover:bg-gold-dark text-navy font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
        >
          Book a Session
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-white transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 pb-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-gold py-3 text-sm font-medium border-b border-white/10 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 bg-gold text-navy font-semibold text-sm px-5 py-3 rounded-full text-center transition-colors"
          >
            Book a Session
          </a>
        </div>
      )}
    </nav>
  );
}
