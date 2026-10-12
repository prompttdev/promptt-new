import FadeIn from "@/components/FadeIn";

type Step = { title: string; description: string };

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="divide-y divide-ink-line border-t border-ink-line">
      {steps.map((step, i) => (
        <FadeIn key={step.title} delay={i * 0.05}>
          <div className="group grid grid-cols-[3rem_minmax(0,1fr)] gap-6 py-8 transition-colors duration-500 sm:grid-cols-[6rem_1fr_2fr] sm:gap-10 sm:py-10">
            <span className="tnum font-display text-2xl text-paper-dim transition-colors duration-500 group-hover:text-signal sm:text-3xl">
              {String(i + 1).padStart(2, "0")}
            </span>

            <h3 className="font-display text-xl text-paper sm:text-2xl">
              {step.title}
            </h3>

            <p className="col-start-2 font-body text-sm leading-relaxed text-paper-dim sm:col-start-auto sm:text-base sm:max-w-lg">
              {step.description}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}