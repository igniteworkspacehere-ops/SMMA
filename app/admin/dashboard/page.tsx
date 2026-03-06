const sections = [
  "Edit Hero",
  "Edit Services",
  "Upload Testimonials",
  "Upload Portfolio",
  "Update CTA Links"
];

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-28">
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
      <p className="mt-3 text-slate-300">Manage landing page content stored in Supabase.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {sections.map((item) => (
          <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-semibold">{item}</h2>
            <p className="mt-2 text-sm text-slate-400">This control can be wired to secure CRUD actions with Supabase Auth.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
