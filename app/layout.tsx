import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "CareerCompass — Find the Career That Fits You | Education & Career Pathways",
  description: "Explore realistic career pathways, education milestones, entrance exams, and required skills for 20+ disciplines. Free student aptitude assessment, visual roadmaps, and career comparison.",
  keywords: ["career guidance", "education roadmaps", "career explorer", "entrance exams", "career comparison", "student counseling"],
  authors: [{ name: "CareerCompass Editorial Advisory" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-100 selection:text-brand-900 antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
