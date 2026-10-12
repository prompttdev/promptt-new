import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type Props = {
  title: string;
  category: string;
  image?: string;
  link?: string;
  index?: number;
  href?: string;
};

export default function PortfolioCard({
  title,
  category,
  image,
  link,
  index = 0,
  href = "/services",
}: Props) {
  const isExternal = Boolean(link);
  const target = link ?? href;

  return (
    <Link
      href={target}
      data-cursor="view"
      data-cursor-label={isExternal ? "Visit" : "View"}
      className="group block"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <ImagePlaceholder
        src={image}
        description={image ?? title}
        link={link as any}
        index={index}
        hoverScale
      />
      <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-ink-line pt-4">
        <h3 className="font-display text-lg text-paper transition-colors duration-300 group-hover:text-signal sm:text-xl">
          {title}
        </h3>
        <span className="shrink-0 font-body text-xs uppercase tracking-[0.12em] text-paper-dim">
          {category}
        </span>
      </div>
    </Link>
  );
}