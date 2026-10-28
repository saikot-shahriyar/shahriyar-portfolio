export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured?: boolean;
  challenges: string[];
  improvements: string[];
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
    challenges: [
      "Designing a bilingual (Bengali & English) interface that feels natural for local users while maintaining a clean, modern layout.",
      "Aggregating and normalising price data from multiple markets to compute accurate averages, minimums, and maximums in real time.",
      "Implementing secure user authentication with Better Auth and managing session state across server and client components in Next.js App Router.",
      "Optimising MongoDB queries for filtered and sorted product listings without noticeable latency on slower connections.",
    ],
    improvements: [
      "Add a price-history chart so users can track how a product's cost has changed over time.",
      "Introduce vendor accounts so market sellers can update their own listings directly.",
      "Build a mobile app version for quick, on-the-go price checks at physical markets.",
      "Add push or SMS notifications to alert users when a tracked product drops below a target price.",
    ],
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
    challenges: [
      "Curating a comprehensive yet non-overwhelming list of technologies and keeping their metadata (descriptions, logos, categories) accurate and up to date.",
      "Designing a drag-and-drop or selection UX that works equally well on touch and desktop without third-party DnD libraries adding bundle weight.",
      "Persisting a user's chosen stack across sessions using localStorage while avoiding stale or incompatible state after data updates.",
      "Keeping the Vite + React build fast and the bundle small as the technology catalogue grew.",
    ],
    improvements: [
      "Allow users to share their assembled stack via a unique URL or export it as an image for social media.",
      "Add compatibility warnings when a user selects technologies that are known to conflict or require extra configuration together.",
      "Integrate a community voting system so the most popular stacks surface to the top.",
      "Include beginner-friendly learning resource links for each technology in the catalogue.",
    ],
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
    challenges: [
      "Keeping the calorie and time totals reactive and accurate as users add, remove, or reorder exercises within their daily plan without a dedicated state-management library.",
      "Building a performant filter and sort pipeline over a moderately large exercise dataset that responds instantly on every input change.",
      "Designing a mobile-first layout where both the exercise library and the daily plan panel are visible and usable on small screens simultaneously.",
      "Implementing meaningful exercise ratings and ensuring the sorting logic handles ties and missing values gracefully.",
    ],
    improvements: [
      "Add a persistent workout history so users can compare their daily plans and progress over weeks or months.",
      "Introduce user-defined custom exercises with the ability to set their own calorie and duration estimates.",
      "Integrate a rest-timer or interval-timer feature that triggers between sets during an active workout session.",
      "Add data visualisations (weekly calorie burn, muscle-group frequency charts) to give users actionable fitness insights.",
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}
