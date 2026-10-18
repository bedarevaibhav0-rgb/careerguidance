import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/layout/BackgroundEffects";

export const metadata: Metadata = {
  title: "CareerOrbit — Find the Career That Fits You | Education & Career Pathways",
  description: "Explore realistic career pathways, education milestones, entrance exams, and required skills for 20+ disciplines. Free student aptitude assessment, visual roadmaps, and career comparison.",
  keywords: ["career guidance", "education roadmaps", "career explorer", "entrance exams", "career comparison", "student counseling"],
  authors: [{ name: "CareerOrbit Editorial Advisory" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
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
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#090E1A] text-slate-900 dark:text-slate-100 selection:bg-brand-500 selection:text-white antialiased transition-colors duration-300 relative">
        <BackgroundEffects />
        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
