"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#e0e5f0] bg-white shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 px-4 pt-4 pb-2", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn(
        "text-sm font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <p className={cn("text-xs text-muted-foreground", className)} {...props} />
  );
}

function CardAction({ className, ...props }) {
  return (
    <div
      className={cn("flex items-center justify-end gap-2 px-4 pb-2", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return <div className={cn("px-4 pb-4 pt-2", className)} {...props} />;
}

function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn("flex items-center px-4 pb-4 pt-2", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
