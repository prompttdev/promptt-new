import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-body text-sm tracking-wide uppercase transition-colors duration-300 disabled:pointer-events-none disabled:opacity-40 cursor-none-desktop",
  {
    variants: {
      variant: {
        primary:
          "bg-signal text-ink px-7 py-4 hover:bg-paper",
        outline:
          "border border-ink-line px-7 py-4 hover:border-signal hover:text-signal",
        ghost: "px-0 py-2 hover:text-signal",
        link: "px-0 py-0 underline-offset-4",
      },
      size: {
        default: "",
        sm: "px-5 py-3 text-xs",
        lg: "px-9 py-5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        data-cursor="ui"
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
