import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "w-full border-0 border-b border-ink-line bg-transparent py-4 font-body text-base text-paper placeholder:text-paper-dim/60 transition-colors duration-300 outline-none focus:border-signal",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
