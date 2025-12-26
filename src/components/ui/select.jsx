"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "../../lib/utils";

function Select(props) {
  return <SelectPrimitive.Root {...props} />;
}

function SelectGroup(props) {
  return <SelectPrimitive.Group {...props} />;
}

function SelectValue(props) {
  return <SelectPrimitive.Value {...props} />;
}

function SelectTrigger({ className, size = "default", children, ...props }) {
  const sizes = {
    default: "h-9 text-xs px-3",
    sm: "h-8 text-xs px-2.5",
    lg: "h-10 text-sm px-3.5",
  };

  return (
    <SelectPrimitive.Trigger
      className={cn(
        "inline-flex items-center justify-between rounded-lg border border-[#d0d7e2] bg-white " +
          "text-left font-normal text-[#3c4353] shadow-xs " +
          "focus:outline-none focus:ring-2 focus:ring-[#2b7cff]/60 focus:ring-offset-2 focus:ring-offset-background " +
          "disabled:cursor-not-allowed disabled:opacity-60 " +
          "data-[placeholder]:text-muted-foreground",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="ml-2 size-3.5 text-[#8a93a7]" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-xl border border-[#d7deec] bg-white " +
            "text-xs text-foreground shadow-lg",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({ className, ...props }) {
  return (
    <SelectPrimitive.Label
      className={cn(
        "px-2 py-1 text-[11px] font-semibold text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

function SelectItem({ className, children, ...props }) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-lg px-2 py-1.5 " +
          "text-[11px] outline-none focus:bg-[#edf3ff] focus:text-[#1f6fd0] " +
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="mr-5 flex-1 truncate">{children}</span>
      <SelectPrimitive.ItemIndicator className="absolute right-2 flex items-center justify-center">
        <CheckIcon className="size-3 text-[#1f6fd0]" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({ className, ...props }) {
  return (
    <SelectPrimitive.Separator
      className={cn("my-1 h-px bg-[#e2e6f0]", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({ className, ...props }) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-muted-foreground",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-3" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({ className, ...props }) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-muted-foreground",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-3" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
