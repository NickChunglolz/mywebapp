import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nick Chung — Software Engineer",
  description:
    "Software engineer at Instacart Caper R&D. I build smart-cart backends, side-project SaaS, and tools for AI-assisted engineering.",
  openGraph: {
    title: "Nick Chung — Software Engineer",
    description:
      "Backend engineer at Instacart Caper R&D. Side projects in Next.js, Go, and AI tooling.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chat />
      </body>
    </html>
  );
}
