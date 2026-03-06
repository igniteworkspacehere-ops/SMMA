"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-hero-gradient px-6 pb-20 pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Premium Social Growth Agency</p>
          <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Turn Your Content Into <span className="text-brandBlue">Viral Growth</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            We help creators and brands scale their social media with viral editing, strategic content systems, and high-performance social media management.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://calendly.com/YOUR_LINK" className="rounded-lg bg-brandBlue px-6 py-3 font-semibold">Schedule Your Call</a>
            <a href="/portfolio" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold">See Our Work</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
            {[
              "Trusted by creators",
              "Platform-specific hooks",
              "Performance-first execution"
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2"><FaCheckCircle className="text-brandBlue" />{item}</span>
            ))}
          </div>
        </div>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="flex min-h-[360px] items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-xl font-semibold text-slate-300">
          Intro Reel Preview
        </motion.div>
      </div>
    </section>
  );
}
