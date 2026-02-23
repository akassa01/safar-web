export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-dark/8">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-headline text-2xl font-bold uppercase tracking-wide text-dark">
          safar
        </span>
        <a
          href="#waitlist"
          className="text-sm font-medium text-dark border border-dark/20 rounded-full px-4 py-2 hover:bg-dark hover:text-background transition-colors"
        >
          Join waitlist
        </a>
      </div>
    </nav>
  );
}
