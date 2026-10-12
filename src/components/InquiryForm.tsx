"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type Props = {
  serviceName?: string;
  compact?: boolean;
};

const budgets = ["Under $5k / mo", "$5k – $15k / mo", "$15k – $40k / mo", "$40k+ / mo", "Project-based"];

export default function InquiryForm({ serviceName, compact = false }: Props) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-3 border border-ink-line px-8 py-16 text-center"
      >
        <span className="font-display text-3xl text-paper">Message sent.</span>
        <p className="font-body text-sm text-paper-dim">
          Thanks for reaching out{serviceName ? ` about ${serviceName}` : ""}. A strategist will
          reply within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "grid gap-6" : "grid gap-8 sm:grid-cols-2"}>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required placeholder="Jordan Ellis" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required placeholder="jordan@company.com" />
      </div>
      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" required placeholder="Company name" />
      </div>
      <div>
        <Label htmlFor="budget">Budget range</Label>
        <Select id="budget" name="budget" defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </Select>
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <Label htmlFor="details">
          {serviceName ? `Tell us about the ${serviceName} project` : "Project details"}
        </Label>
        <Textarea
          id="details"
          name="details"
          required
          rows={4}
          placeholder="What are you trying to achieve, and by when?"
        />
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <Button type="submit" size="lg" className="gap-3">
          Send Inquiry <ArrowUpRight size={16} />
        </Button>
      </div>
    </form>
  );
}
