// City pin positions as [left%, top%] — loosely mapped to world geography
const PINS = [
  [22, 35],  // New York
  [40, 25],  // London
  [42, 28],  // Paris
  [44, 22],  // Berlin
  [48, 72],  // Cape Town
  [45, 58],  // Lagos
  [62, 42],  // Dubai
  [74, 52],  // Bangkok
  [78, 38],  // Tokyo
  [80, 75],  // Sydney
  [18, 48],  // Mexico City
  [25, 75],  // Buenos Aires
  [55, 30],  // Moscow
  [70, 62],  // Singapore
  [30, 40],  // Reykjavik
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-16">
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#2E2E2E 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full">
        {/* Left — text */}
        <div>
          <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Coming soon
          </p>
          <h1
            className="font-headline font-extrabold uppercase leading-[0.9] tracking-tight text-dark mb-6"
            style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)" }}
          >
            The world,
            <br />
            ranked by
            <br />
            people who go.
          </h1>
          <p className="text-dark/60 text-lg leading-relaxed mb-8 max-w-md font-sans">
            Track every city you visit. Rate them against each other. See where
            the world&apos;s best travelers have been.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 bg-accent text-white font-medium px-7 py-3.5 rounded-full hover:bg-dark transition-colors text-sm"
          >
            Get early access →
          </a>
          <p className="text-dark/35 text-xs mt-4 font-sans">
            No account needed to sign up.
          </p>
        </div>

        {/* Right — iPhone mockup placeholder */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="relative w-[260px] h-[530px] rounded-[44px] border-[7px] border-dark shadow-2xl -rotate-3"
            style={{ background: "#1a1a1a" }}
          >
            {/* Dynamic island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

            {/* Screen content */}
            <div className="absolute inset-0 rounded-[38px] overflow-hidden">
              {/* Map background */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, #1c2a1e 0%, #111a12 60%, #0d1a0f 100%)",
                }}
              />

              {/* Grid lines (lat/lon feel) */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(118,132,111,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(118,132,111,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* City pin dots */}
              {PINS.map(([left, top], i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: i < 5 ? "8px" : "5px",
                    height: i < 5 ? "8px" : "5px",
                    background: i < 3 ? "#76846F" : "rgba(255,255,255,0.5)",
                    transform: "translate(-50%, -50%)",
                    boxShadow: i < 3 ? "0 0 6px rgba(118,132,111,0.8)" : "none",
                  }}
                />
              ))}

              {/* Bottom UI card */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div
                  className="rounded-2xl p-3.5"
                  style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}
                >
                  <p
                    className="uppercase tracking-widest mb-1"
                    style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)" }}
                  >
                    Your world map
                  </p>
                  <p className="text-white text-sm font-medium">42 cities visited</p>
                  <div className="flex gap-1 mt-2">
                    {["Europe", "Asia", "Americas"].map((c) => (
                      <span
                        key={c}
                        className="rounded-full px-2 py-0.5"
                        style={{
                          fontSize: "9px",
                          background: "rgba(118,132,111,0.3)",
                          color: "#9BA896",
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
