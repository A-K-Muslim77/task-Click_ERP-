"use client";

import { Card, CardContent, CardHeader } from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { users } from "../data/users";
import { Users, Check } from "lucide-react";

export default function AssignedUserTable() {
  return (
    <Card className="rounded-2xl border border-[#e0e5f0] bg-white shadow-sm w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-3 pt-4 px-5">
        <div className="flex items-center gap-3">
          <span className="flex h-6 w-6 items-center justify-center text-[#4b4f5c]">
            <Users className="h-5 w-5" />
          </span>
          <span className="text-base font-semibold text-[#111827]">
            Assigned User Table
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
            <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
          </span>
          <span className="text-sm font-medium text-[#1f2937]">
            Check All Users
          </span>
        </div>
      </CardHeader>

      <CardContent className="px-5 pb-5 pt-2 w-full">
        {/* table container with scrollbar */}
        <div className="rounded-2xl border border-[#e0e5f0] bg-white overflow-hidden w-full">
          <div className="overflow-x-auto w-full">
            <Table className="min-w-full w-full">
              <TableHeader className="bg-[#f4f6fb]">
                <TableRow>
                  <TableHead className="text-sm font-semibold text-[#4b5563] border-r border-[#e0e5f0] min-w-[140px] py-3.5 px-5">
                    User Name
                  </TableHead>
                  <TableHead className="text-sm font-semibold text-[#4b5563] border-r border-[#e0e5f0] min-w-[120px] py-3.5 px-5">
                    Designation
                  </TableHead>
                  <TableHead className="text-sm font-semibold text-[#4b5563] min-w-[220px] py-3.5 px-5">
                    Company Name
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((u) => (
                  <TableRow key={u.id} className="hover:bg-[#f9fafb]">
                    <TableCell className="text-sm text-[#111827] border-r border-[#e0e5f0] whitespace-nowrap py-3.5 px-5 font-medium">
                      {u.name}
                    </TableCell>
                    <TableCell className="text-sm text-[#6b7280] border-r border-[#e0e5f0] whitespace-nowrap py-3.5 px-5">
                      {u.designation}
                    </TableCell>
                    <TableCell className="text-sm text-[#6b7280] py-3.5 px-5">
                      <div className="overflow-x-auto w-full">
                        <div className="whitespace-nowrap min-w-max">
                          {u.company}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* footer controls */}
        <div className="mt-4 flex items-center justify-between text-sm text-[#4b5563] w-full">
          <div className="flex items-center gap-3">
            <span className="text-sm">Rows per page</span>
            <button
              type="button"
              className="flex h-9 items-center rounded-xl border border-[#d1d5db] bg-white px-4 text-sm font-medium text-[#111827]"
            >
              50
              <span className="ml-2 text-xs text-[#9ca3af]">▾</span>
            </button>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm">Page 1 of 1</span>
            <div className="flex items-center gap-3">
              {["<<", "<", ">", ">>"].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white text-sm text-[#4b5563] hover:bg-[#f3f4f6]"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
