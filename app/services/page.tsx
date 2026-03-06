import Services from "@/components/Services";
import CTA from "@/components/CTA";

export default function ServicesPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="font-heading text-5xl font-extrabold tracking-tight">Services that Scale Channels</h1>
        <p className="mt-4 text-slate-300">From hooks to publishing workflows, DIGISPECT builds social growth systems.</p>
      </section>
      <Services />
      <CTA />
    </main>
  );
}
