const features = [
  {
    number: "01",
    title: "Smart Ratings",
    description:
      "Not a star slider. Compare cities head-to-head and build a ranked list that actually means something. Unlocks after 5 cities.",
  },
  {
    number: "02",
    title: "Your Map",
    description:
      "Every city you've visited or want to visit, pinned on an interactive world map. Track cities, countries, and continents at a glance.",
  },
  {
    number: "03",
    title: "Community",
    description:
      "See the world's top-rated cities and countries by the community. Follow travelers, share trips, and discover where the well-traveled go.",
  },
];

export default function Features() {
  return (
    <section className="bg-background py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase text-center mb-16">
          Why Safar
        </p>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map(({ number, title, description }) => (
            <div key={number} className="flex flex-col">
              {/* Editorial number */}
              <span
                className="font-headline font-extrabold text-dark/10 leading-none mb-4 select-none"
                style={{ fontSize: "clamp(3rem, 5vw, 4rem)" }}
              >
                {number}
              </span>

              {/* Title */}
              <h3 className="font-headline font-bold uppercase text-dark tracking-tight mb-3 text-3xl">
                {title}
              </h3>

              {/* Description */}
              <p className="text-dark/55 text-base leading-relaxed font-sans mb-8">
                {description}
              </p>

              {/* Screenshot placeholder */}
              <div className="mt-auto rounded-2xl bg-dark/6 aspect-[4/3] w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
