"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "../../lib/utils";

function ScrollArea({ className, children, ...props }) {
  return (
    <ScrollAreaPrimitive.Root
      type="always" // always show scrollbars
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      {/* Do NOT render ScrollBar here; it will be added manually where used */}
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({ className, orientation = "vertical", ...props }) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      orientation={orientation}
      className={cn(
        "flex touch-none select-none bg-transparent p-0.5",
        orientation === "vertical" ? "h-full w-2" : "h-2 w-full",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={cn(
          "relative flex-1 rounded-full bg-[#c7d1e6]/90",
          "before:absolute before:left-1/2 before:top-1/2 before:h-full before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[#c7d1e6]"
        )}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar };
