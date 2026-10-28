import React from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [featuredProject, ...otherProjects] = PROJECTS;

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            04 &mdash; Featured Work
          </span>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 max-w-xs" />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Selected Projects
          </h2>
          <p className="mt-3 text-base text-muted font-mono">
            Web applications built with modern tools and clean code.
          </p>
        </div>

        {/* Projects layout: Featured 1st project on top, next 2 projects side by side */}
        <div className="space-y-8">
          {featuredProject && (
            <div className="grid grid-cols-1">
              <ProjectCard project={featuredProject} featured={true} />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

