import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions — promptt.dev",
  description: "Terms and conditions for engaging promptt.dev.",
};

const sections = [
  {
    heading: "1. Agreement to terms",
    body: [
      "These Terms & Conditions govern any proposal, statement of work, or engagement between promptt.dev (\"the Studio\", \"we\", \"us\") and the client (\"you\") for marketing, creative, development, or related services. By signing a proposal or statement of work, you agree to be bound by these terms.",
    ],
  },
  {
    heading: "2. Scope of services",
    body: [
      "Services are defined in a written statement of work for each engagement, covering deliverables, timelines, and fees. Any work outside that scope will be quoted separately before it begins.",
      "We reserve the right to decline or discontinue work that we reasonably believe is unlawful, misleading, or inconsistent with our professional standards.",
    ],
  },
  {
    heading: "3. Fees and payment",
    body: [
      "Fees, payment schedules, and invoicing terms are set out in the applicable statement of work. Unless otherwise agreed in writing, invoices are due within 15 days of the invoice date.",
      "Late payments may result in a pause of active work until the account is brought current.",
    ],
  },
  {
    heading: "4. Intellectual property",
    body: [
      "Upon full payment, final deliverables created specifically for you become your property, excluding any pre-existing tools, frameworks, or proprietary systems the Studio used to produce them, which remain the Studio's property.",
      "You grant the Studio a limited licence to display completed work in its portfolio and marketing materials unless otherwise agreed in writing.",
    ],
  },
  {
    heading: "5. Confidentiality",
    body: [
      "Both parties agree to keep confidential information shared during the engagement private, and to use it only for the purposes of the engagement.",
    ],
  },
  {
    heading: "6. Termination",
    body: [
      "Either party may terminate an active engagement with 30 days' written notice. You remain responsible for payment of fees for work completed up to the termination date.",
    ],
  },
  {
    heading: "7. Limitation of liability",
    body: [
      "To the extent permitted by law, the Studio's total liability arising from any engagement is limited to the fees paid for the specific service giving rise to the claim.",
    ],
  },
  {
    heading: "8. Governing law",
    body: [
      "These terms are governed by the laws of the State of New York, without regard to conflict-of-law principles.",
    ],
  },
];

export default function TermsPage() {
  return <LegalLayout title="Terms & Conditions" updated="August 1, 2026" sections={sections} />;
}
