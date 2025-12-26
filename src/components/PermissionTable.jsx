"use client";

import { useState } from "react";
import {
  Import,
  ChevronDown,
  ChevronUp,
  ArrowBigDown,
  Box,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import { Button } from "../components/ui/button";
import { permissionsData } from "../data/permissions";
import { Checkbox } from "./ui/checkbox";

export default function PermissionTable() {
  const [data, setData] = useState(permissionsData);

  const toggleAll = () => {
    const allSelected = data.every(
      (d) => d.access && d.insert && d.update && d.delete
    );
    const newValue = !allSelected;
    setData((prev) =>
      prev.map((d) => ({
        ...d,
        access: newValue,
        insert: newValue,
        update: newValue,
        delete: newValue,
      }))
    );
  };

  const togglePermission = (permission) => {
    const allSelected = data.every((d) => d[permission]);
    const newValue = !allSelected;
    setData((prev) =>
      prev.map((d) => ({
        ...d,
        [permission]: newValue,
      }))
    );
  };

  const toggle = (id, key) => {
    setData((prev) =>
      prev.map((d) => (d.id === id ? { ...d, [key]: !d[key] } : d))
    );
  };

  const isAllSelected = data.every(
    (d) => d.access && d.insert && d.update && d.delete
  );

  const isPermissionAllSelected = (permission) => {
    return data.every((d) => d[permission]);
  };

  return (
    <Card className="rounded-2xl border border-[#e0e5f0] bg-white shadow-sm w-full">
      <CardHeader className="px-6 pt-5 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center rounded-xl">
              <Box className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-semibold text-[#111827]">
              Module &amp; Menu Permission
            </h2>
          </div>

          <Button
            size="sm"
            className="px-5 gap-2 bg-white text-[#111827] border border-[#d1d5db] hover:bg-[#f3f4f6] text-sm h-9"
          >
            <ArrowBigDown className="h-4.5 w-4.5" />
            Add Menu
          </Button>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-5 pt-0">
        <div className="rounded-2xl border border-[#e5e7eb] p-5 space-y-5">
          {/* top filters */}
          <div className="flex items-center gap-6">
            <div className="flex flex-1 items-center gap-3">
              <span className="font-semibold text-[#374151] text-sm">
                Module
              </span>
              <div className="flex h-10 items-center justify-between rounded-2xl border border-[#d1d5db] bg-white px-4 text-base text-[#111827] min-w-[260px]">
                <span className="text-sm">Commercial</span>
                <button
                  type="button"
                  className="ml-2 flex h-6 w-6 items-center justify-center rounded-full text-lg text-[#9ca3af] hover:bg-[#f3f4f6] hover:text-[#4b5563]"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="flex flex-1 items-center gap-3">
              <span className="font-semibold text-[#374151] text-sm">Menu</span>
              <div className="flex h-10 w-full items-center rounded-2xl border border-[#d1d5db] bg-white px-4 text-base">
                <span className="text-[#9ca3af] text-sm">Select menu</span>
                <div className="ml-auto flex flex-col">
                  <ChevronUp className="h-3.5 w-3.5 text-[#9ca3af]" />
                  <ChevronDown className="h-3.5 w-3.5 text-[#9ca3af] -mt-1" />
                </div>
              </div>
            </div>
          </div>

          {/* bulk toggles */}
          <div className="flex items-center justify-between">
            <Button size="lg" className="px-7 gap-3 h-12 text-base rounded-2xl">
              <Import className="h-5.5 w-5.5" />
              Import Permission
            </Button>

            <div className="flex items-center gap-7 text-base font-semibold">
              {/* All button - Use div instead of button */}
              <div
                onClick={toggleAll}
                className="flex items-center gap-3 text-[#111827] hover:opacity-80 transition-opacity cursor-pointer select-none"
              >
                <div className="relative">
                  <Checkbox
                    checked={isAllSelected}
                    className="h-7 w-7 rounded-full data-[state=checked]:bg-[#2563eb] data-[state=checked]:border-[#2563eb]"
                    style={{ borderRadius: "50%" }}
                    readOnly
                  />
                </div>
                <span className="text-base font-medium">All</span>
              </div>

              {/* Access button - Use div instead of button */}
              <div
                onClick={() => togglePermission("access")}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer select-none"
              >
                <Checkbox
                  checked={isPermissionAllSelected("access")}
                  className="h-6 w-6 rounded-full data-[state=checked]:bg-[#2563eb] data-[state=checked]:border-[#2563eb]"
                  style={{ borderRadius: "50%" }}
                  readOnly
                />
                <span
                  className={`text-base font-medium ${
                    isPermissionAllSelected("access")
                      ? "text-[#2563eb] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  Access
                </span>
              </div>

              {/* Insert button - Use div instead of button */}
              <div
                onClick={() => togglePermission("insert")}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer select-none"
              >
                <Checkbox
                  checked={isPermissionAllSelected("insert")}
                  className="h-6 w-6 rounded-full data-[state=checked]:bg-[#16a34a] data-[state=checked]:border-[#16a34a]"
                  style={{ borderRadius: "50%" }}
                  readOnly
                />
                <span
                  className={`text-base font-medium ${
                    isPermissionAllSelected("insert")
                      ? "text-[#16a34a] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  Insert
                </span>
              </div>

              {/* Update button - Use div instead of button */}
              <div
                onClick={() => togglePermission("update")}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer select-none"
              >
                <Checkbox
                  checked={isPermissionAllSelected("update")}
                  className="h-6 w-6 rounded-full data-[state=checked]:bg-[#f59e0b] data-[state=checked]:border-[#f59e0b]"
                  style={{ borderRadius: "50%" }}
                  readOnly
                />
                <span
                  className={`text-base font-medium ${
                    isPermissionAllSelected("update")
                      ? "text-[#f59e0b] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  Update
                </span>
              </div>

              {/* Delete button - Use div instead of button */}
              <div
                onClick={() => togglePermission("delete")}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer select-none"
              >
                <Checkbox
                  checked={isPermissionAllSelected("delete")}
                  className="h-6 w-6 rounded-full data-[state=checked]:bg-[#ef4444] data-[state=checked]:border-[#ef4444]"
                  style={{ borderRadius: "50%" }}
                  readOnly
                />
                <span
                  className={`text-base font-medium ${
                    isPermissionAllSelected("delete")
                      ? "text-[#ef4444] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  Delete
                </span>
              </div>
            </div>
          </div>

          {/* Table container */}
          <div className="mt-1 border border-[#e5e7eb] bg-white overflow-hidden rounded-lg w-full">
            <ScrollArea className="h-[360px] w-full">
              <Table className="table-auto min-w-[950px] w-full">
                <TableHeader className="bg-[#f5f7fc] sticky top-0 z-10">
                  <TableRow>
                    <TableHead className="text-sm font-semibold text-[#374151] border-r border-[#e5e7eb] px-5 min-w-[140px] whitespace-nowrap py-3.5">
                      Module
                    </TableHead>
                    <TableHead className="text-sm font-semibold text-[#374151] border-r border-[#e5e7eb] px-5 min-w-[140px] whitespace-nowrap py-3.5">
                      Main Menu
                    </TableHead>
                    <TableHead className="text-sm font-semibold text-[#374151] border-r border-[#e5e7eb] px-5 min-w-[180px] whitespace-nowrap py-3.5">
                      Menu Name
                    </TableHead>
                    <TableHead className="text-sm font-semibold text-[#374151] border-r border-[#e5e7eb] px-5 min-w-[100px] whitespace-nowrap py-3.5 text-left">
                      Access
                    </TableHead>
                    <TableHead className="text-sm font-semibold text-[#374151] border-r border-[#e5e7eb] px-5 min-w-[100px] whitespace-nowrap py-3.5 text-left">
                      Insert
                    </TableHead>
                    <TableHead className="text-sm font-semibold text-[#374151] border-r border-[#e5e7eb] px-5 min-w-[100px] whitespace-nowrap py-3.5 text-left">
                      Update
                    </TableHead>
                    <TableHead className="text-sm font-semibold text-[#374151] px-5 min-w-[100px] whitespace-nowrap py-3.5 text-left">
                      Delete
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {data.map((row, index) => (
                    <TableRow
                      key={row.id}
                      className={`${
                        index % 2 === 1 ? "bg-[#fff7ee]" : "bg-white"
                      } hover:bg-[#f9fafb]`}
                    >
                      <TableCell className="text-sm text-[#111827] border-r border-[#e5e7eb] px-5 whitespace-nowrap py-3.5">
                        <div className="truncate font-medium">{row.module}</div>
                      </TableCell>
                      <TableCell className="text-sm text-[#4b5563] border-r border-[#e5e7eb] px-5 whitespace-nowrap py-3.5">
                        <div className="truncate">{row.mainMenu}</div>
                      </TableCell>
                      <TableCell className="text-sm text-[#4b5563] border-r border-[#e5e7eb] px-5 py-3.5">
                        <div className="truncate">{row.menuName}</div>
                      </TableCell>

                      <TableCell className="border-r border-[#e5e7eb] px-5 whitespace-nowrap py-3.5">
                        <div className="flex justify-start">
                          <Checkbox
                            checked={row.access}
                            onCheckedChange={() => toggle(row.id, "access")}
                            className="h-6 w-6 rounded-full data-[state=checked]:bg-[#2563eb] data-[state=checked]:border-[#2563eb]"
                            style={{ borderRadius: "50%" }}
                          />
                        </div>
                      </TableCell>

                      <TableCell className="border-r border-[#e5e7eb] px-5 whitespace-nowrap py-3.5">
                        <div className="flex justify-start">
                          <Checkbox
                            checked={row.insert}
                            onCheckedChange={() => toggle(row.id, "insert")}
                            className="h-6 w-6 rounded-full data-[state=checked]:bg-[#16a34a] data-[state=checked]:border-[#16a34a]"
                            style={{ borderRadius: "50%" }}
                          />
                        </div>
                      </TableCell>

                      <TableCell className="border-r border-[#e5e7eb] px-5 whitespace-nowrap py-3.5">
                        <div className="flex justify-start">
                          <Checkbox
                            checked={row.update}
                            onCheckedChange={() => toggle(row.id, "update")}
                            className="h-6 w-6 rounded-full data-[state=checked]:bg-[#f59e0b] data-[state=checked]:border-[#f59e0b]"
                            style={{ borderRadius: "50%" }}
                          />
                        </div>
                      </TableCell>

                      <TableCell className="px-5 whitespace-nowrap py-3.5">
                        <div className="flex justify-start">
                          <Checkbox
                            checked={row.delete}
                            onCheckedChange={() => toggle(row.id, "delete")}
                            className="h-6 w-6 rounded-full data-[state=checked]:bg-[#ef4444] data-[state=checked]:border-[#ef4444]"
                            style={{ borderRadius: "50%" }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <ScrollBar orientation="vertical" className="w-2" />
              <ScrollBar orientation="horizontal" className="h-2" />
            </ScrollArea>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
