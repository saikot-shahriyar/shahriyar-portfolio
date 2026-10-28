export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "bazar-dor",
    title: "Bazar Dor",
    description:
      "A Bengali-friendly web app for checking everyday product prices across markets in Bangladesh. Browse products by category, sort by price, and view average, minimum and maximum rates with market-by-market details.",
    technologies: ["Next.js", "React", "TypeScript", "Better Auth", "MongoDB"],
    githubUrl: "https://github.com/saikot-shahriyar/bazar-dor",
    liveUrl: "https://bazar-dor-team-s13.vercel.app",
    imageUrl: "/projects/bazar-dor.png",
    featured: true,
  },
  {
    id: "dev-stack",
    title: "Dev Stack",
    description:
      "A tech stack builder and technology showcase. Explore web development technologies and assemble your own personalized stack in a clean, responsive interface.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "DaisyUI", "Vite"],
    githubUrl: "https://github.com/saikot-shahriyar/dev-stack",
    liveUrl: "https://inspiring-phoenix-8b0969.netlify.app/",
    imageUrl: "/projects/dev-stack.png",
  },
  {
    id: "fit-log",
    title: "Fit Log",
    description:
      "A workout tracker and exercise library. Browse exercises, build a daily plan with live calorie and time totals, and filter or sort workouts by duration, calories and rating.",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/saikot-shahriyar/fit-log",
    liveUrl: "https://fit-log-kappa-dusky.vercel.app/",
    imageUrl: "/projects/fit-log.png",
  },
];

