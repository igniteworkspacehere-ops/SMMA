import { FaBolt, FaChartLine, FaClock, FaComments } from "react-icons/fa";

const problems = [
  { title: "Low Engagement", icon: FaChartLine },
  { title: "Poor Hooks", icon: FaBolt },
  { title: "Inconsistent Posting", icon: FaClock },
  { title: "Slow Growth", icon: FaComments }
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-center text-4xl font-bold">Why Growth Stalls</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-4">
        {problems.map((item) => (
          <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-1 hover:border-blue-500/60">
            <item.icon className="mx-auto text-2xl text-brandBlue" />
            <p className="mt-4 font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
