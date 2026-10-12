const logos = ["Field Kit", "Northline", "Kepler", "Verano", "Solace", "Rivet", "Marrow", "Ambit"];

export default function LogoStrip() {
  return (
    <div className="border-y border-ink-line py-10">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-center gap-x-14 gap-y-6 px-6 sm:justify-between sm:px-10">
        {logos.map((logo) => (
          <span
            key={logo}
            className="font-display text-lg text-paper-dim/50 transition-colors duration-500 hover:text-paper sm:text-xl"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
