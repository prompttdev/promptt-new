import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "w-full cursor-none-desktop appearance-none border-0 border-b border-ink-line bg-transparent py-4 pr-8 font-body text-base text-paper outline-none transition-colors duration-300 focus:border-signal",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-paper-dim" />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
