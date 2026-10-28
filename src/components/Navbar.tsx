"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-slate-200/80 dark:border-slate-800/80 shadow-xs"
          : "bg-background/60 backdrop-blur-xs border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="#top"
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md py-1"
          >
            <span className="font-mono text-xs font-semibold tracking-widest uppercase px-2 py-0.5 rounded-sm bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/50">
              Dev
            </span>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Shahriyar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6" aria-label="Main navigation">
            <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md py-1 px-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" aria-hidden="true" />

            <ThemeToggle />
          </nav>

          {/* Mobile Menu & Theme Toggle Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-background/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 md:hidden flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-150 z-40"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2 pt-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted font-mono mb-2">
              Navigation
            </span>
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between text-xl font-semibold py-3 text-foreground hover:text-blue-600 dark:hover:text-blue-400 border-b border-slate-100 dark:border-slate-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-muted font-normal">0{idx + 1}</span>
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-muted font-mono text-center">
            Shahriyar &bull; Full-Stack Developer
          </div>
        </div>
      )}
    </header>
  );
}
