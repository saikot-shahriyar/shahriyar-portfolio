import React from "react";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            02 &mdash; Career
          </span>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Experience
            </h2>
            <p className="mt-3 text-base text-muted font-mono">
              Professional history and organizational involvement.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-600 dark:border-blue-500">
              {/* Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-background shadow-xs" />

              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 shadow-xs backdrop-blur-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-900/50">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>September 2025 &ndash; August 2026</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Digital Marketing Manager
                </h3>

                <div className="flex items-center gap-2 mt-1.5 text-slate-600 dark:text-slate-400 font-medium text-sm sm:text-base">
                  <Briefcase className="w-4 h-4 text-muted" />
                  <span>Mahmud Maya IT Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

