"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-body font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-ink text-white hover:bg-ink/90 focus-visible:ring-ink":
              variant === "primary",
            "border border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary":
              variant === "secondary",
            "text-ink hover:text-primary underline-offset-4 hover:underline focus-visible:ring-ink":
              variant === "ghost",
          },
          {
            "h-9 px-4 text-sm rounded-sm": size === "sm",
            "h-11 px-6 text-base rounded-sm": size === "md",
            "h-13 px-8 text-lg rounded-sm": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
