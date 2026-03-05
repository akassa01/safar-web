export default function Download() {
  return (
    <section id="download" className="py-24 lg:py-36" style={{ background: "#2E2E2E" }}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-6">
          Available now
        </p>
        <h2
          className="font-headline font-extrabold uppercase leading-none text-white mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          Download
          <br />
          Safar.
        </h2>
        <p className="text-white/50 text-base font-sans mb-10 leading-relaxed">
          Start tracking every city you visit. Rate them, map them, and see where the world&apos;s best travelers have been.
        </p>

        <a
          href="https://apps.apple.com/app/id6759003685"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src="/app-store-badge.svg"
            alt="Download on the App Store"
            className="h-14 hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
    </section>
  );
}
