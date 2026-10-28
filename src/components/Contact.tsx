import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { CopyEmailButton } from "./CopyEmailButton";

export function Contact() {
  const email = "saikot.shahriyar@gmail.com";

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            06 &mdash; Reach Out
          </span>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Have a project in mind?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Let&apos;s connect.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
              Whether you want to discuss a new collaboration, talk about modern web tech, or just say hello, feel free to reach out.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {/* Primary Email Card */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 shadow-xs backdrop-blur-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-muted">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Direct Email</span>
                </div>
                <CopyEmailButton email={email} />
              </div>

              <div>
                <a
                  href={`mailto:${email}`}
                  className="text-lg sm:text-xl font-mono font-semibold text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  {email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                >
                  <span>Send an Email</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/saikot-shahriyar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/30 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shadow-2xs">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">GitHub</span>
                    <span className="block text-xs text-muted font-mono">@saikot-shahriyar</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/saikot-shahriyar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/30 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shadow-2xs">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">LinkedIn</span>
                    <span className="block text-xs text-muted font-mono">saikot-shahriyar</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

