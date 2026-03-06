import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";

export default function PortfolioPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">Portfolio & Results</h1>
        <p className="mt-4 text-slate-300">Explore reels, shorts, and measurable growth outcomes.</p>
      </section>
      <Portfolio masonry />
      <CTA />
    </main>
  );
}
