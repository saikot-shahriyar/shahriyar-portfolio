import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-8 pb-16 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      {/* Decorative subtle background accents with safe responsive sizing */}
      <div
        className="absolute top-1/4 inset-x-0 mx-auto w-full max-w-xs sm:max-w-lg h-48 sm:h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Main Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left min-w-0">
            {/* Status / Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/80 dark:border-blue-800/60 bg-blue-50/60 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-mono tracking-wider uppercase mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-400" />
              </span>
              <span>Available for Opportunities</span>
            </div>

            {/* Sub-label & Name */}
            <div className="space-y-1 mb-3">
              <p className="text-xs sm:text-base font-mono uppercase tracking-widest text-muted">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
                Shahriyar
              </h1>
              <p className="text-base sm:text-2xl font-medium text-blue-600 dark:text-blue-400 pt-0.5 sm:pt-1">
                Full-Stack Web Developer
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 mt-2 mb-4 leading-snug">
              Building for the web.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Solving real problems.
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-8">
              I&apos;m a developer focused on building modern, useful, and reliable web applications with clean code and thoughtful user experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 group cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </Link>

              <a
                href="/resume.pdf"
                download="Shahriyar-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-sm sm:text-base transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Subtle editorial scroll indicator */}
            <div className="pt-8 sm:pt-12 mt-8 sm:mt-10 border-t border-slate-200/80 dark:border-slate-800/80 w-full max-w-lg">
              <a
                href="#about"
                aria-label="Scroll to About section"
                className="group inline-flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 rounded-md py-1.5 px-2 -ml-2 cursor-pointer"
              >
                <span className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.25em] uppercase">
                  Scroll
                </span>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-slate-200 dark:border-slate-800 group-hover:border-blue-500/50 bg-slate-100/60 dark:bg-slate-900/60 transition-colors">
                  <ArrowDown
                    className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 animate-gentle-float transition-colors"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </div>
          </div>

          {/* Profile Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Subtle aesthetic framing */}
              <div
                className="absolute -inset-2 rounded-2xl bg-gradient-to-b from-blue-500/20 to-transparent dark:from-blue-500/30 dark:to-transparent blur-md group-hover:blur-lg transition-all"
                aria-hidden="true"
              />

              <div className="relative w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl">
                <Image
                  src="/shahriyar.png"
                  alt="Shahriyar - Full-Stack Web Developer"
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 320px, 384px"
                  priority
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle corner badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-background/85 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 text-[11px] font-mono font-medium text-foreground flex items-center gap-1.5 shadow-xs">
                  <Sparkles className="w-3 h-3 text-blue-500" />
                  <span>Shahriyar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
