export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-muted">
        <span className="mono">© {new Date().getFullYear()} Nick Chung</span>
      </div>
    </footer>
  );
}
