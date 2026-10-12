export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "creator-whitelisting-actually-works",
    title: "Why creator whitelisting outperforms brand-run ads",
    category: "Influencer Marketing",
    date: "2026-06-02",
    excerpt:
      "The highest-performing paid social we run isn't shot by a brand at all — it's whitelisted creator content. Here's the mechanic behind why it converts.",
    image: "Split-frame comparison of two dark phone mockups, one glowing orange",
    content: [
      "Most brands still treat influencer content and paid social as two separate budgets run by two separate teams. That split is costing them performance.",
      "Whitelisting — running paid media through a creator's own ad account rather than your brand handle — keeps the format, pacing, and voice that made the organic post work in the first place. The feed doesn't know it's an ad, because structurally, it isn't dressed like one.",
      "In our own campaigns, whitelisted creator content consistently outperforms brand-shot equivalents on cost per acquisition, often by a wide margin. The reason is simple: audiences have gotten very good at pattern-matching branded polish, and very forgiving of a creator's rougher, faster format.",
      "The operational cost is real — whitelisting requires contracts, ad account access, and tighter creative QA — but for most consumer brands running any meaningful paid budget, it's the highest-leverage lever left on the table.",
    ],
  },
  {
    slug: "instagram-content-system-that-scales",
    title: "The content system we run for every Instagram client",
    category: "Instagram Marketing",
    date: "2026-05-18",
    excerpt:
      "Consistency beats virality. Here's the repeatable monthly system we use to keep every client's feed shipping on schedule.",
    image: "Grid of dark editorial content cards laid out on a table, orange tab markers",
    content: [
      "Every Instagram account we run follows the same underlying operating system, even when the content itself looks nothing alike from client to client.",
      "It starts with a monthly content map split into three buckets: proof (case studies, results, testimonials), point of view (founder or team commentary on the industry), and product (direct, unapologetic promotion). Most accounts we inherit are almost entirely product — which is exactly why they've plateaued.",
      "Each piece is briefed a month ahead with a hook, a format, and a single job to do — grow, nurture, or convert. Nothing gets shot without knowing which of those three jobs it's serving.",
      "The system isn't glamorous. But it's the difference between an account that occasionally goes viral and one that compounds, month over month, regardless of what the algorithm is rewarding that week.",
    ],
  },
  {
    slug: "ai-tools-that-earn-a-place-in-your-stack",
    title: "Most AI marketing tools don't earn their subscription. These do.",
    category: "AI Integration",
    date: "2026-04-27",
    excerpt:
      "We test a lot of AI tooling for clients. Here's our honest framework for deciding what actually deserves a seat in your stack.",
    image: "Dark abstract render of glowing orange network nodes converging",
    content: [
      "We get pitched a new AI marketing tool roughly every week. Most of them solve a problem nobody on the team actually has.",
      "Our filter is simple: a tool earns a place in the stack only if it removes a step someone currently does by hand, produces output a human still reviews before it ships, and can be measured against the process it replaced.",
      "Under that filter, most of the value we've found isn't in flashy generative tools — it's in quieter automations: research summarization before a creative brief, first-pass reporting pulled from ad platforms, transcript-to-brief conversion from client calls.",
      "None of that is exciting to demo. All of it saves real hours. That's the trade we optimize for with every client, every time.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
