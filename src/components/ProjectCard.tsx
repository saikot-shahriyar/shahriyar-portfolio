import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { GithubIcon } from "./Icons";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 hover:border-blue-500/50 dark:hover:border-blue-500/50 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 ${
        featured ? "lg:col-span-12 lg:grid lg:grid-cols-12 lg:gap-8 items-center" : ""
      }`}
    >
      {/* Preview Image Container */}
      <div
        className={`relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-950 border-b lg:border-b-0 border-slate-200 dark:border-slate-800 ${
          featured ? "lg:col-span-7 lg:h-full lg:min-h-[360px]" : ""
        }`}
      >
        <Image
          src={project.imageUrl}
          alt={`${project.title} project preview`}
          fill
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 60vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div
        className={`flex flex-col flex-1 p-6 sm:p-8 ${
          featured ? "lg:col-span-5 lg:py-10" : ""
        }`}
      >
        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800 text-foreground hover:bg-slate-50 dark:hover:bg-slate-700/80 text-xs sm:text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer shadow-xs"
            aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
          >
            <GithubIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>GitHub</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-xs cursor-pointer"
              aria-label={`View ${project.title} live demo (opens in a new tab)`}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

