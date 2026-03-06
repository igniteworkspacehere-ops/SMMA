"use client";

import { motion } from "framer-motion";

const testimonials = [
  "DIGISPECT helped us grow our channel from 10k to 120k in 4 months.",
  "Their short-form strategy doubled our inbound leads in 8 weeks.",
  "Best creative partner we have worked with for performance content."
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-center text-4xl font-bold">Client Results</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {testimonials.map((text, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: index * 0.4 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <p>{text}</p>
            <p className="mt-3 text-sm text-slate-400">Creator • Social Media</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
