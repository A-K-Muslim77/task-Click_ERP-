"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { cn } from "../../lib/utils";

function Checkbox({ className, ...props }) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-[6px] border border-[#c5d1e3] " +
          "bg-white shadow-xs flex items-center justify-center " +
          "data-[state=checked]:bg-[#2b86f5] data-[state=checked]:border-[#2b86f5] " +
          "transition-colors duration-150 " +
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2b86f5]/70 focus-visible:ring-offset-background " +
          "disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
        <CheckIcon className="h-3 w-3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
