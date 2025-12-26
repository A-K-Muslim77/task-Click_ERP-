"use client";

import { Button } from "./ui/button";
import { ArrowLeft, Eraser, Save } from "lucide-react";

export default function HeaderActions() {
  return (
    <div className="flex w-full items-center justify-between mb-8">
      {/* Left Back button */}
      <Button size="sm" className="px-6 h-10 text-sm">
        <ArrowLeft className="mr-2 h-4.5 w-4.5" />
        Back
      </Button>

      {/* Right Clear / Save */}
      <div className="flex items-center gap-4">
        <Button size="sm" className="px-6 h-10 text-sm">
          <Eraser className="mr-2 h-4.5 w-4.5" />
          Clear
        </Button>
        <Button variant="green" size="sm" className="px-6 h-10 text-sm">
          <Save className="mr-2 h-4.5 w-4.5" />
          Save
        </Button>
      </div>
    </div>
  );
}
