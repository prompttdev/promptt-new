# promptt.dev

A dark, cinematic, typography-led marketing site for promptt.dev — a digital marketing agency — built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, Lenis, and shadcn-style UI primitives.

## Stack

- **Next.js 16** (App Router, static export–friendly, TypeScript)
- **Tailwind CSS v4** with a custom design-token system (`src/app/globals.css`)
- **Framer Motion** for scroll reveals, hover states, and page-mount transitions
- **Lenis** for smooth inertia scrolling
- **shadcn/ui-style components** (Button, Input, Textarea, Label, Select) built with `class-variance-authority` + Radix primitives, styled to the brand
- **@fontsource/space-grotesk** and **@fontsource/inter** — self-hosted variable fonts (no runtime Google Fonts dependency, so the build works fully offline)
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Structure

- `src/app` — routes (home, `/services` + `/services/[slug]`, `/about`, `/blog` + `/blog/[slug]`, `/careers`, `/contact`, `/legal/terms`, `/legal/privacy`, `/legal/disclaimer`)
- `src/components` — shared UI (Header w/ full-screen overlay menu, Footer, CustomCursor, Preloader, SmoothScroll, TextReveal, ImagePlaceholder, ProcessSteps, InquiryForm, etc.)
- `src/components/ui` — shadcn-style primitives
- `src/data` — services, blog posts, and nav content as typed data files

## Imagery

Per the brief, all imagery is represented with `ImagePlaceholder` — a component that renders a moody, on-brand gradient field with the intended AI-generated shot description set as its accessible label (visible via `alt`/`aria-label` and as a code comment/prop at each usage site), and the same interaction treatment real imagery would get (masked scroll reveal, parallax, hover scale). Swap in real generated or photographed images by replacing this component's usage with `<Image>` / `<img>` tags using the same descriptions as generation prompts.

## Notes

- Cursor, parallax, and heavy motion gracefully degrade on touch devices and respect `prefers-reduced-motion`.
- The percentage preloader only shows once per browser session (via `sessionStorage`).
