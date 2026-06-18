export default function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-6 py-16 scroll-mt-20">
      <p className="mono text-xs text-accent mb-2">// {label}</p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-8">{title}</h2>
      {children}
    </section>
  );
}
