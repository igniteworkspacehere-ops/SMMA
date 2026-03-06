export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-28">
      <h1 className="text-5xl font-extrabold tracking-tight">Book a Discovery Call</h1>
      <p className="mt-4 text-slate-300">Tell us about your goals and we will map your growth strategy.</p>
      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-3">
        <iframe
          src="https://calendly.com/YOUR_LINK"
          width="100%"
          height="700"
          title="Calendly booking"
          className="w-full"
        />
      </div>
    </main>
  );
}
