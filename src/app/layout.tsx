import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shahriyar | Full-Stack Web Developer",
  description:
    "Personal portfolio of Shahriyar, a Full-Stack Web Developer building modern, useful, and reliable web applications with clean code and thoughtful user experiences.",
  authors: [{ name: "Shahriyar", url: "https://github.com/saikot-shahriyar" }],
  creator: "Shahriyar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/saikot-shahriyar",
    title: "Shahriyar | Full-Stack Web Developer",
    description:
      "Building modern, useful, and reliable web applications with clean code and thoughtful user experiences.",
    siteName: "Shahriyar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahriyar | Full-Stack Web Developer",
    description:
      "Building modern, useful, and reliable web applications with clean code and thoughtful user experiences.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-400">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
