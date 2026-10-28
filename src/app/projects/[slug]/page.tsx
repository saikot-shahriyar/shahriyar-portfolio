import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS, getProjectById } from "@/data/projects";
import { GithubIcon } from "@/components/Icons";
import { ArrowLeft, ExternalLink, Wrench, Lightbulb, CheckCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Shahriyar`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-background/85 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1 -ml-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <span className="font-mono text-xs font-semibold tracking-widest uppercase px-2 py-0.5 rounded-sm bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/50">
            Project Detail
          </span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">

        {/* Hero */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              Case Study
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-xs cursor-pointer"
                aria-label={`Visit the live ${project.title} project (opens in a new tab)`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Project</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-foreground hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-xs cursor-pointer"
              aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
            >
              <GithubIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </section>

        {/* Project Screenshot */}
        <section className="mb-12 sm:mb-16">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 shadow-lg">
            <Image
              src={project.imageUrl}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 1280px) 100vw, 1024px"
              className="object-cover object-top"
              priority
            />
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12 sm:mb-16 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">Technology Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-mono font-medium rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-12 sm:mb-16 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400">
              <Wrench className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">Challenges Faced</h2>
          </div>
          <ul className="space-y-4">
            {project.challenges.map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-0.5 font-mono text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/50 rounded-md px-2 py-0.5 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {challenge}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Future Improvements */}
        <section className="mb-12 sm:mb-16 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Potential Improvements &amp; Future Plans
            </h2>
          </div>
          <ul className="space-y-4">
            {project.improvements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-0.5 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/50 rounded-md px-2 py-0.5 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer Nav */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1 -ml-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Projects</span>
          </Link>
          <span className="text-xs text-muted font-mono">Shahriyar &bull; Portfolio</span>
        </div>
      </main>
    </div>
  );
}

