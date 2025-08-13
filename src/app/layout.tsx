import type { Metadata } from "next";
import { Inter, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SanityLive } from "@/sanity/lib/live";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  title: "Voices For Palestine - Breaking the Silence",
  description: "Amplifying Palestinian voices, sharing untold stories, and fighting for justice.",
  keywords: "Palestine, Gaza, human rights, justice, Palestinian voices, news, stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className={`${inter.className} ${amiri.variable} antialiased bg-black`}>
        <Navbar />
        <main className="min-h-[60vh]">{children}</main>
        <SanityLive />
        <Footer />
      </body>
    </html>
  );
}
