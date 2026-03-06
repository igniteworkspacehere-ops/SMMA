import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "DIGISPECT | Social Media Growth Agency",
  description:
    "DIGISPECT helps creators and brands grow faster on social media with viral editing, strategic content systems, and high-performance social media management."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} bg-slate-950 text-slate-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
