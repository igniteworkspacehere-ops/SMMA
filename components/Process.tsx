const steps = ["Strategy Call", "Content Strategy", "Production", "Growth Optimization"];

export default function Process() {
  return (
    <section className="bg-slate-900/60 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-bold">Our Process</h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-xs uppercase tracking-wider text-brandBlue">Step {index + 1}</p>
              <p className="mt-2 font-semibold">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
