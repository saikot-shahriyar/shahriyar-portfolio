import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <footer className="w-full bg-slate-50/50 dark:bg-slate-950/60 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <Link
              href="#top"
              className="text-lg font-bold tracking-tight text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Shahriyar
            </Link>
            <span className="hidden sm:inline text-muted" aria-hidden="true">&bull;</span>
            <p className="text-xs sm:text-sm text-muted">
              &copy; <CurrentYear /> Shahriyar. Built with Next.js &amp; Tailwind CSS.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <Link
              href="#top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-2xs"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

