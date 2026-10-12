export type Service = {
  order: string;
  slug: string;
  name: string;
  short: string;
  tagline: string;
  heroImage: string;
  overview: string;
  whoFor: string[];
  process: { title: string; description: string }[];
  results: { stat: string; label: string }[];
  portfolio: { title: string; category: string; image: string; link?: string }[];
};

export const services: Service[] = [
  {
    order: "01",
    slug: "influencer-marketing",
    name: "Influencer Marketing",
    short: "Creator partnerships that move product, not just impressions.",
    tagline: "We build creator programs that convert attention into revenue.",
    heroImage:
      "Cinematic close-up of a ring light reflected in a dark studio, creator silhouette out of focus",
    overview:
      "We plan, cast, and run influencer programs end to end — from creator discovery and contract terms to content briefs, whitelisting, and post-campaign attribution. Every partnership is built around a commercial outcome, not a vanity metric, so the creators we bring on are chosen for audience overlap and proven conversion behaviour, not follower count alone.",
    whoFor: [
      "DTC and CPG brands scaling past founder-led content",
      "Marketplaces and apps needing credible third-party voices",
      "Teams that have tried influencer marketing and been burned by weak reporting",
    ],
    process: [
      { title: "Audience mapping", description: "We reverse-engineer who already talks about your category and where your buyers actually spend time." },
      { title: "Creator casting", description: "Shortlists are vetted for audience authenticity, past brand-lift performance, and content fit — not agency kickbacks." },
      { title: "Briefing & production", description: "Structured creative briefs that protect creator voice while keeping messaging on-brand." },
      { title: "Whitelisting & spend", description: "Top-performing organic posts are turned into paid media through creator ad accounts." },
      { title: "Attribution & reporting", description: "Every campaign closes with a report tying content to pipeline, not just reach." },
    ],
    results: [
      { stat: "3.4x", label: "Average ROAS on whitelisted content" },
      { stat: "62", label: "Active creator partnerships managed" },
      { stat: "18 days", label: "Average time from brief to first post" },
    ],
    portfolio: [
      { title: "Field Kit skincare launch", category: "42 creators / 6 weeks", image: "Moody flat-lay of amber skincare bottles on dark concrete" },
      { title: "Northline running app", category: "Micro-creator cohort", image: "Runner silhouette at dusk on an empty highway overpass" },
      { title: "Ambit home goods", category: "Whitelisted UGC program", image: "High-contrast interior shot of ceramic homeware on a dark shelf" },
    ],
  },
  {
    order: "02",
    slug: "instagram-marketing",
    name: "Instagram Marketing",
    short: "Full-funnel Instagram strategy, content, and paid growth.",
    tagline: "We turn Instagram into a predictable acquisition channel.",
    heroImage:
      "Grid of dark, editorial phone mockups floating in negative space, orange accent glow",
    overview:
      "From feed and Reels strategy to community management and paid social, we operate Instagram as a full-funnel channel rather than a content calendar. That means a documented content system, a testing cadence for Reels and ads, and reporting that ties every post back to followers, saves, and — ultimately — revenue.",
    whoFor: [
      "Brands with inconsistent posting and no content system",
      "Teams running ads without an organic foundation to support them",
      "Founders who want Instagram off their plate without losing their voice",
    ],
    process: [
      { title: "Channel audit", description: "We diagnose what's actually driving saves, shares, and follows today — and what's dead weight." },
      { title: "Content system", description: "A repeatable content architecture across Reels, carousels, and Stories, briefed a month at a time." },
      { title: "Production", description: "In-house shooting, editing, and copywriting, matched to your existing brand world." },
      { title: "Paid amplification", description: "Top organic performers are pushed into paid to compound reach efficiently." },
      { title: "Reporting cadence", description: "Monthly reviews that connect content performance to business outcomes." },
    ],
    results: [
      { stat: "+214%", label: "Average follower growth in 6 months" },
      { stat: "4.1M", label: "Reels views generated last quarter" },
      { stat: "12", label: "Pieces of content shipped per month" },
    ],
    portfolio: [
      { title: "Verano coffee roasters", category: "Content system + paid", image: "Steam rising from a dark espresso cup against a black backdrop" },
      { title: "Halcyon fitness studio", category: "Reels-first strategy", image: "Silhouetted figure mid-motion in a dim gym, orange rim light" },
      { title: "Marrow furniture", category: "Feed redesign", image: "Sculptural dark furniture piece lit dramatically in a studio" },
    ],
  },
  {
    order: "03",
    slug: "website-development",
    name: "Website Development",
    short: "Fast, bespoke websites engineered to convert.",
    tagline: "We design and build websites that earn their keep.",
    heroImage:
      "Abstract wireframe grid dissolving into solid dark geometric panels, orange edge light",
    overview:
      "We design, build, and ship custom websites — marketing sites, product sites, ecommerce storefronts, and full web apps — with performance and conversion built in from the first sketch, not bolted on after launch. Every build ships with clean, documented code your team can own going forward.",
    whoFor: [
      "Companies outgrowing a template site or page builder",
      "Teams relaunching a brand and needing the site to match",
      "Product teams that need a marketing site fast without sacrificing craft",
    ],
    process: [
      { title: "Discovery & IA", description: "We map user goals against business goals to define the site's information architecture." },
      { title: "Art direction", description: "A distinct visual system — type, motion, imagery — built for this brand, not a template." },
      { title: "Build", description: "Component-driven development with performance budgets set from day one." },
      { title: "QA & launch", description: "Cross-device testing, accessibility checks, and a monitored launch." },
      { title: "Handover", description: "Documentation and a short training session so your team can maintain the site." },
    ],
    results: [
      { stat: "0.9s", label: "Average largest contentful paint" },
      { stat: "98", label: "Average Lighthouse performance score" },
      { stat: "6 weeks", label: "Typical discovery-to-launch timeline" },
    ],
    portfolio: [
      { title: "Pinjjai by H", category: "Artisan D2C storefront", image: "/projects/pinjjai.optimized.png", link: "https://www.pinjjaibyh.com/" },
      { title: "Rouhab", category: "Ethnic wear ecommerce", image: "/projects/rouhab.optimized.png", link: "https://rouhab.com/" },
      { title: "Legal Luxe", category: "Professional services site", image: "/projects/legal-luxe.optimized.png", link: "https://thelegalluxe.in/" },
      { title: "Indigo Amour", category: "Sustainable fashion ecommerce", image: "/projects/indigo-amour.optimized.png", link: "https://www.indigo-amour.org/" },
      { title: "Ragavi", category: "Heritage fashion ecommerce", image: "/projects/ragavi.optimized.png", link: "https://www.ragavi.in/" },
      { title: "Optivulnix", category: "Corporate site + technical blog", image: "/projects/optivulnix.optimized.png", link: "https://optivulnix.com/" },
      { title: "Bora Honeys", category: "Luxury fashion Shopify build", image: "/projects/bora-honeys.optimized.png", link: "https://borahoneys.in/" },
      { title: "Pantum Promo", category: "Promotional redemption portal", image: "/projects/pantum-promo.optimized.png", link: "https://www.pantumpromo.com/" },
      { title: "LeaseOnDemand", category: "Leasing marketplace", image: "/projects/leaseondemand.optimized.png", link: "https://www.leaseondemand.in/" },
      { title: "WB Royalties", category: "Internal admin dashboard", image: "/projects/wb-royalties.optimized.png", link: "https://wbroyalties.vercel.app/login" },
      { title: "Anantara Fashion", category: "Ethnic wear ecommerce", image: "/projects/anantara.optimized.png", link: "https://www.anantarafashion.com/" },
      { title: "PAASPOD", category: "Content & insights platform", image: "/projects/paaspod.optimized.png", link: "https://paaspod.com/" },
    ],
  },
  {
    order: "04",
    slug: "content-management",
    name: "Content Management",
    short: "Editorial systems that keep every channel shipping on time.",
    tagline: "We keep your content engine running without you thinking about it.",
    heroImage:
      "Stack of dark editorial layout boards on a desk, orange grease-pencil markings",
    overview:
      "We plan, produce, and publish content across your blog, newsletter, and social channels on a documented editorial calendar — handling everything from topic research and writing to formatting, scheduling, and performance review, so your channels never go quiet.",
    whoFor: [
      "Teams without the internal bandwidth to publish consistently",
      "Brands that need a documented content operation, not one-off posts",
      "Companies expanding into new channels and formats",
    ],
    process: [
      { title: "Content audit", description: "We assess what's published, what's ranking, and what's missing across your channels." },
      { title: "Editorial calendar", description: "A rolling calendar aligned to launches, seasonality, and search demand." },
      { title: "Production", description: "Writing, editing, and formatting handled by a dedicated editorial team." },
      { title: "Publishing & distribution", description: "Scheduled publishing across owned channels with cross-promotion built in." },
      { title: "Performance review", description: "Monthly reporting on traffic, engagement, and content-sourced pipeline." },
    ],
    results: [
      { stat: "96%", label: "On-time publishing rate across clients" },
      { stat: "3.2x", label: "Average organic traffic growth in a year" },
      { stat: "40+", label: "Assets produced per month across channels" },
    ],
    portfolio: [
      { title: "Northfield SaaS blog", category: "Editorial calendar + SEO", image: "Editorial magazine spread mockup in dark tones with orange folio" },
      { title: "Rivet newsletter", category: "Weekly newsletter operation", image: "Close-up of a dark inbox UI on a laptop screen at night" },
      { title: "Almanac media brand", category: "Multi-channel content system", image: "Stacked print proofs under a single warm desk lamp" },
    ],
  },
  {
    order: "05",
    slug: "ai-integration",
    name: "AI Integration",
    short: "Practical AI systems embedded into how your team already works.",
    tagline: "We embed AI where it actually saves your team time.",
    heroImage:
      "Abstract dark network of glowing orange nodes and connective lines",
    overview:
      "We identify, build, and integrate AI tooling into your marketing and operations workflows — from content generation assistants to internal automations — grounded in what will genuinely save your team time rather than chasing the trend. Every integration ships with documentation and a handoff so it keeps working after we leave.",
    whoFor: [
      "Marketing teams drowning in repetitive production work",
      "Ops teams looking to automate reporting and internal tooling",
      "Leadership teams that want an AI roadmap grounded in real workflows",
    ],
    process: [
      { title: "Workflow audit", description: "We shadow your team's actual workflows to find where automation earns its keep." },
      { title: "Opportunity mapping", description: "A prioritized roadmap ranked by effort versus time saved." },
      { title: "Build & integrate", description: "Custom tooling and automations built into the systems you already use." },
      { title: "Testing & guardrails", description: "Structured testing and review guardrails before anything ships to production." },
      { title: "Training & handover", description: "Your team is trained to run and extend the system independently." },
    ],
    results: [
      { stat: "11 hrs", label: "Average hours saved per week, per team" },
      { stat: "24", label: "Workflows automated across clients" },
      { stat: "4 weeks", label: "Typical time to first working integration" },
    ],
    portfolio: [
      { title: "Solace CX platform", category: "Support triage automation", image: "Dark control-room style dashboard with orange status indicators" },
      { title: "Grainline agency ops", category: "Reporting automation", image: "Abstract data stream rendered as glowing orange particles" },
      { title: "Pathfinder logistics", category: "Internal copilot tool", image: "Server rack silhouette lit by a single orange indicator light" },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
