import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Disclaimer — promptt.dev",
  description: "Disclaimer covering the use of this website and its content.",
};

const sections = [
  {
    heading: "1. General information only",
    body: [
      "The content on this website — including blog posts, case study figures, and service descriptions — is provided for general informational purposes only and does not constitute professional, financial, or legal advice.",
    ],
  },
  {
    heading: "2. Results and performance figures",
    body: [
      "Statistics, growth figures, and results referenced on this site or in our materials reflect outcomes for specific clients under specific conditions. Past performance is not a guarantee of future results, and individual outcomes will vary by brand, category, and market.",
    ],
  },
  {
    heading: "3. Third-party links",
    body: [
      "This site may contain links to third-party websites, including client and creator platforms. We are not responsible for the content, accuracy, or practices of any linked third-party site.",
    ],
  },
  {
    heading: "4. No warranty",
    body: [
      "This website and its content are provided \"as is\" without warranties of any kind, express or implied, including but not limited to accuracy, completeness, or fitness for a particular purpose.",
    ],
  },
  {
    heading: "5. Limitation of liability",
    body: [
      "To the fullest extent permitted by law, promptt.dev is not liable for any damages arising from the use of, or inability to use, this website or its content.",
    ],
  },
  {
    heading: "6. Changes to this disclaimer",
    body: [
      "We may update this disclaimer from time to time. Continued use of this site after changes are posted constitutes acceptance of the updated disclaimer.",
    ],
  },
];

export default function DisclaimerPage() {
  return <LegalLayout title="Disclaimer" updated="August 1, 2026" sections={sections} />;
}
