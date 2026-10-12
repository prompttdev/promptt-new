import { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import TextReveal from "@/components/TextReveal";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — promptt.dev",
  description: "Notes on influencer marketing, social growth, and AI tooling from the promptt.dev team.",
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-40 sm:px-10 sm:pb-24 sm:pt-48">
        <Eyebrow className="mb-6">Journal</Eyebrow>
        <TextReveal
          as="h1"
          text="Notes from inside the work."
          className="max-w-3xl font-display text-5xl leading-[1.02] text-paper sm:text-7xl"
        />
        <p className="mt-8 max-w-lg font-body text-base leading-relaxed text-paper-dim sm:text-lg">
          Field notes on what&apos;s actually working across influencer, social, web, and AI —
          written by the team running the campaigns, not a content mill.
        </p>
      </section>

      <section className="px-6 pb-32 sm:px-10">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-10">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
