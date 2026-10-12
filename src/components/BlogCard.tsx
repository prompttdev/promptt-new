import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { BlogPost } from "@/data/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      data-cursor="view"
      data-cursor-label="Read"
      className="group flex flex-col"
    >
      <ImagePlaceholder description={post.image} index={index} hoverScale ratio="aspect-[3/2]" />
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center gap-3 font-body text-xs uppercase tracking-[0.15em] text-paper-dim">
          <span className="text-signal">{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-ink-line" />
          <span>{formatDate(post.date)}</span>
        </div>
        <h3 className="font-display text-2xl leading-snug text-paper transition-colors duration-300 group-hover:text-signal sm:text-[1.7rem]">
          {post.title}
        </h3>
        <p className="font-body text-sm leading-relaxed text-paper-dim">{post.excerpt}</p>
        <span className="flex items-center gap-2 pt-1 font-body text-xs uppercase tracking-[0.15em] text-paper transition-colors duration-300 group-hover:text-signal">
          Read the post
          <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
