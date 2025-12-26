"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Base button styles tuned to match your screenshot
const buttonVariants = cva(
  // layout + typography
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold shrink-0 " +
    // shape - CHANGED FROM rounded-full TO rounded-sm for square corners
    "rounded-sm px-6 py-2 " +
    // transitions
    "transition-all duration-200 ease-out " +
    // icons
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 " +
    // disabled
    "disabled:pointer-events-none disabled:opacity-60 " +
    // focus ring
    "outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2b7cff]/70 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        // Main blue gradient button (like screenshot)
        default:
          "bg-gradient-to-r from-[#1f7ae0] via-[#2b86f5] to-[#1f7ae0] text-white shadow-md " +
          "hover:shadow-lg hover:brightness-[1.03] active:scale-[0.98] " +
          "border border-[#1e6fd0]/80",
        // Green button variant for Save/Submit actions
        green:
          "bg-gradient-to-r from-[#1fb57a] via-[#2ac38f] to-[#1fb57a] text-white shadow-md " +
          "hover:shadow-lg hover:brightness-[1.03] active:scale-[0.98] " +
          "border border-[#1aa06c]/80",
        // Blue solid button for Clear/Secondary actions
        blue:
          "bg-[#2563eb] text-white border border-[#1d4ed8] shadow-md " +
          "hover:bg-[#1d4ed8] hover:shadow-lg active:scale-[0.98]",
        // Subtle solid blue for secondary actions
        secondary:
          "bg-[#e9f2ff] text-[#1f6fd0] border border-[#b7cffb] " +
          "hover:bg-[#dbe8ff] active:scale-[0.98]",
        // Neutral outline style
        outline:
          "bg-transparent text-[#1f6fd0] border border-[#c6d4ea] " +
          "hover:bg-[#edf2ff] active:scale-[0.98]",
        // Destructive variant if needed
        destructive:
          "bg-[#ff4b4b] text-white border border-[#e13a3a] " +
          "hover:bg-[#f23a3a] active:scale-[0.98]",
        ghost:
          "bg-transparent text-[#1f6fd0] hover:bg-[#edf2ff] active:scale-[0.98]",
        link: "text-[#1f6fd0] underline-offset-4 hover:underline active:scale-[0.98]",
      },
      size: {
        default: "h-9 px-6",
        sm: "h-8 px-4 text-xs",
        lg: "h-10 px-7 text-base",
        icon: "h-9 w-9 p-0",
        "icon-sm": "h-8 w-8 p-0",
        "icon-lg": "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
