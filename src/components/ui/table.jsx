"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

function Table({ className, ...props }) {
  return (
    <table
      className={cn(
        "w-full border-collapse text-xs text-foreground",
        className
      )}
      {...props}
    />
  );
}

function TableHeader({ className, ...props }) {
  return (
    <thead
      className={cn("border-b border-[#dde3f0] bg-[#f5f7fc]", className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }) {
  return <tbody className={cn("", className)} {...props} />;
}

function TableRow({ className, ...props }) {
  return (
    <tr
      className={cn(
        "border-b border-[#eef1f8] last:border-0 data-[state=selected]:bg-[#e7f0ff]",
        "hover:bg-[#f9fbff]",
        className
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }) {
  return (
    <th
      className={cn(
        "px-3 py-2 text-left align-middle text-[11px] font-semibold text-[#7b8497]",
        className
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }) {
  return (
    <td
      className={cn(
        "px-3 py-2 align-middle text-[11px] text-[#4a4f5c]",
        className
      )}
      {...props}
    />
  );
}

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
