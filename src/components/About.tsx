import React from "react";
import { User, Terminal } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            01 &mdash; Background
          </span>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              About Me
            </h2>
            <p className="mt-3 text-base text-muted font-mono">
              Engineering with care, curiosity & craft.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 shadow-xs backdrop-blur-xs">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800/80">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Developer Philosophy
                  </h3>
                  <p className="text-xs text-muted font-mono">User-focused & Architecture-driven</p>
                </div>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I&apos;m a developer interested in building useful web applications, writing maintainable code, and continuously improving my engineering skills.
                </p>
                <p>
                  I enjoy understanding how applications work from the user interface to the underlying data and business logic, ensuring that software is both delightful for users and solid under the hood.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/20">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-1">
                  <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Clean Architecture</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Focusing on modular components, predictable state flow, and readable codebases.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/20">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-1">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>Continuous Growth</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Regularly learning modern patterns, tools, and best practices in the web ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

