export default function Section({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: number;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  const idx = String(index).padStart(2, "0");
  return (
    <section id={id} className="max-w-5xl mx-auto px-6 py-20 scroll-mt-20">
      <div className="flex items-center gap-4 mb-3">
        <span className="mono text-xs text-accent">{idx}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
      </div>
      <p className="mono text-xs text-muted mb-2 uppercase tracking-widest">{label}</p>
      <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighter mb-10">{title}</h2>
      {children}
    </section>
  );
}
