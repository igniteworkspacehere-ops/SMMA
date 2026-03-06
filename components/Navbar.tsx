"use client";

import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">DIGISPECT</Link>
        <div className="hidden gap-7 text-slate-300 md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <a href="https://calendly.com/YOUR_LINK" className="rounded-lg bg-brandBlue px-5 py-2 font-semibold text-white transition hover:scale-105">
          Schedule Call
        </a>
      </div>
    </nav>
  );
}
