import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import TextReveal from "@/components/TextReveal";
import FadeIn from "@/components/FadeIn";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import BlogCard from "@/components/BlogCard";
import { blogPosts, getPostBySlug } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — promptt.dev`, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article>
        <section className="px-6 pb-12 pt-40 sm:px-10 sm:pb-16 sm:pt-48">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              data-cursor="ui"
              className="mb-8 flex w-fit items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-paper-dim transition-colors hover:text-signal"
            >
              <ArrowLeft size={13} /> Back to journal
            </Link>
            <Eyebrow className="mb-6">{post.category}</Eyebrow>
            <TextReveal
              as="h1"
              text={post.title}
              className="font-display text-4xl leading-[1.05] text-paper sm:text-6xl"
            />
            <p className="mt-6 font-body text-sm uppercase tracking-[0.15em] text-paper-dim">
              {formatDate(post.date)}
            </p>
          </div>
        </section>

        <section className="px-6 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <ImagePlaceholder description={post.image} ratio="aspect-[16/9]" />
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 sm:py-24">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            {post.content.map((para, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <p className="font-body text-lg leading-relaxed text-paper/90">{para}</p>
              </FadeIn>
            ))}
          </div>
        </section>
      </article>

      <section className="border-t border-ink-line px-6 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Eyebrow className="mb-14 sm:mb-20">Keep Reading</Eyebrow>
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-10">
            {more.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
          <Link href="/contact" data-cursor="view" data-cursor-label="Go" className="mt-20 flex items-center gap-3 font-body text-sm uppercase tracking-[0.15em] text-paper transition-colors hover:text-signal">
            Start a project with us <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
