import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — promptt.dev",
  description: "How promptt.dev collects, uses, and protects your data.",
};

const sections = [
  {
    heading: "1. Information we collect",
    body: [
      "When you submit an inquiry, apply for a role, or otherwise contact us, we collect the information you provide directly — such as your name, email, company, and project details.",
      "We also collect limited technical data automatically when you visit this site, such as browser type, device type, and general usage patterns, through standard analytics tools.",
    ],
  },
  {
    heading: "2. How we use information",
    body: [
      "We use the information you provide to respond to inquiries, evaluate applications, deliver services under an active engagement, and improve this website's content and performance.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "3. Sharing of information",
    body: [
      "We may share information with service providers who support our operations — such as email, hosting, or analytics providers — under confidentiality obligations, and where required by law.",
    ],
  },
  {
    heading: "4. Data retention",
    body: [
      "We retain inquiry and application data only as long as reasonably necessary to respond to your request or to comply with legal obligations, after which it is deleted or anonymized.",
    ],
  },
  {
    heading: "5. Your rights",
    body: [
      "You may request access to, correction of, or deletion of your personal information by contacting us at the email address below. We will respond within a reasonable timeframe.",
    ],
  },
  {
    heading: "6. Cookies",
    body: [
      "This site may use essential cookies required for basic functionality and, where enabled, analytics cookies to help us understand how the site is used. You can control cookie preferences through your browser settings.",
    ],
  },
  {
    heading: "7. Contact",
    body: [
      "Questions about this policy can be sent to studio@promptt.dev.",
    ],
  },
];

export default function PrivacyPage() {
  return <LegalLayout title="Privacy Policy" updated="August 1, 2026" sections={sections} />;
}
