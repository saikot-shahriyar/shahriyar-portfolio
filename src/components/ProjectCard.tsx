import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 hover:border-blue-500/50 dark:hover:border-blue-500/50 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 ${
        featured ? "lg:col-span-12 lg:grid lg:grid-cols-12 items-stretch" : ""
      }`}
    >
      {/* Preview Image */}
      <div
        className={`relative overflow-hidden bg-slate-100 dark:bg-slate-950 ${
          featured
            ? "aspect-video lg:aspect-auto lg:col-span-7 lg:min-h-[360px]"
            : "aspect-video"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div
        className={`flex flex-col flex-1 p-6 sm:p-8 justify-between ${
          featured ? "lg:col-span-5 lg:py-10" : ""
        }`}
      >
        <div>
          <h3
            className={`font-bold tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 ${
              featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-xs group/btn"
            aria-label={`View more details about ${project.title}`}
          >
            <span>View More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
