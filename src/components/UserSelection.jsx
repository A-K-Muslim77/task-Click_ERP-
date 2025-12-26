"use client";

import * as React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { users, userGroups } from "../data/users";
import { UserCheck, ArrowBigDown } from "lucide-react";

export default function UserSelection() {
  const [group, setGroup] = React.useState(userGroups[0]); // "Admin"
  const [user, setUser] = React.useState(users[0].name); // "MD Najmuzzaman"

  return (
    <Card className="rounded-2xl border border-[#e0e5f0] bg-white px-5 py-4 shadow-sm w-full">
      {/* Header with icon */}
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-6 w-6 items-center justify-center text-[#4b4f5c]">
          <UserCheck className="h-5 w-5" />
        </span>
        <span className="text-lg font-semibold text-[#111827]">
          User Selection
        </span>
      </div>

      {/* Inner panel */}
      <div className="space-y-4 rounded-2xl border border-[#e0e5f0] bg-[#fbfcff] px-5 py-5">
        {/* User Group */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-[#4b5563]">User Group</p>
          <div className="flex h-11 items-center rounded-2xl border border-[#d1d5db] bg-white px-4 text-base text-[#111827]">
            <span className="flex-1 truncate text-sm">{group}</span>
            {group && (
              <button
                type="button"
                onClick={() => setGroup("")}
                className="ml-2 flex h-6 w-6 items-center justify-center rounded-full text-lg text-[#9ca3af] hover:bg-[#f3f4f6] hover:text-[#4b5563]"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* User */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-[#4b5563]">User</p>
          <div className="flex h-11 items-center rounded-2xl border border-[#d1d5db] bg-white px-4 text-base text-[#111827]">
            <span className="flex-1 truncate text-sm">{user}</span>
            {user && (
              <button
                type="button"
                onClick={() => setUser("")}
                className="ml-2 flex h-6 w-6 items-center justify-center rounded-full text-lg text-[#9ca3af] hover:bg-[#f3f4f6] hover:text-[#4b5563]"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Add User button with icon */}
        <div className="flex justify-end pt-2">
          <Button size="sm" className="px-5 h-9 text-sm">
            <ArrowBigDown className="mr-2 h-4.5 w-4.5" />
            Add User
          </Button>
        </div>
      </div>
    </Card>
  );
}
