import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 font-body text-xs uppercase tracking-[0.25em] text-paper-dim", className)}>
      <span className="h-px w-8 bg-signal" />
      {children}
    </div>
  );
}
