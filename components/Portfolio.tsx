"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type PortfolioProps = {
  masonry?: boolean;
};

const items = [
  { title: "Creator Reels", metrics: "+210% reach" },
  { title: "Ecom Shorts", metrics: "3.2x watch time" },
  { title: "Podcast Clips", metrics: "+142k views" },
  { title: "Brand Story Ads", metrics: "4.6% CTR" }
];

export default function Portfolio({ masonry = false }: PortfolioProps) {
  if (masonry) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <article key={item.title} className={`rounded-xl border border-white/10 bg-white/5 p-6 ${index % 2 === 0 ? "md:row-span-2" : ""}`}>
              <div className="mb-5 h-40 rounded-lg bg-slate-800" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-brandBlue">{item.metrics}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-center text-4xl font-bold">Featured Portfolio</h2>
      <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-5">
        <Swiper spaceBetween={16} slidesPerView={1.2} breakpoints={{ 768: { slidesPerView: 2.4 } }}>
          {items.map((item) => (
            <SwiperSlide key={item.title}>
              <article className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="mb-4 h-40 rounded-lg bg-slate-800" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-brandBlue">{item.metrics}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
