import React from "react";
import { Code2, GitBranch, Layers, Cpu, FileCode } from "lucide-react";

const SKILLS = [
  {
    name: "Next.js",
    category: "Full-Stack Framework",
    description: "App Router, Server Components, SSR & Turbopack",
    icon: Cpu,
  },
  {
    name: "React",
    category: "UI Engineering",
    description: "Component architecture, hooks & modern declarative UI",
    icon: Layers,
  },
  {
    name: "TypeScript",
    category: "Typed JavaScript",
    description: "Strict typing, interfaces, generics & robust codebases",
    icon: FileCode,
  },
  {
    name: "JavaScript",
    category: "Core Language",
    description: "ES6+, asynchronous flow, DOM APIs & modern standards",
    icon: Code2,
  },
  {
    name: "Git",
    category: "Version Control",
    description: "Branching workflows, versioning, staging & collaboration",
    icon: GitBranch,
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            03 &mdash; Toolkit
          </span>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Skills &amp; Technologies
            </h2>
            <p className="mt-3 text-base text-muted font-mono">
              Core technologies and tools I work with.
            </p>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              A focused toolkit for engineering performant, scalable, and responsive web applications with modern standards.
            </p>
          </div>
        </div>

        {/* Clean Editorial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-muted font-semibold">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-muted">
                    {skill.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

