"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 " +
    "gap-1 [&>svg]:size-3 [&>svg]:pointer-events-none " +
    "transition-[color,background,border,box-shadow] duration-150 ease-out " +
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2b7cff]/60 focus-visible:ring-offset-background " +
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#e9f2ff] text-[#1f6fd0] [a&]:hover:bg-[#dbe8ff]",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground border border-[#d0d7e2] [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
