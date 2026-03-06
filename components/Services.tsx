"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Service = {
  id: string;
  title: string;
  description: string;
};

const fallback: Service[] = [
  { id: "1", title: "Hook & Viral Edits", description: "Retention-focused editing that keeps viewers watching." },
  { id: "2", title: "Catchy Designs", description: "Thumb-stopping visual assets for every platform." },
  { id: "3", title: "Content Scheduling", description: "Operational consistency with posting workflows and cadence." },
  { id: "4", title: "Channel Optimization", description: "SEO, metadata, and content architecture for compounding growth." },
  { id: "5", title: "Social Media Management", description: "End-to-end management from production to performance reviews." },
  { id: "6", title: "Script Writing", description: "Story-driven scripts designed for retention and conversion." }
];

export default function Services() {
  const [services, setServices] = useState<Service[]>(fallback);

  useEffect(() => {
    const load = async () => {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        return;
      }

      const { data } = await supabase.from("services").select("id,title,description");
      if (data && data.length > 0) {
        setServices(data as Service[]);
      }
    };

    void load();
  }, []);

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-center text-4xl font-bold">Our Services</h2>
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.id} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:scale-105">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-slate-400">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
