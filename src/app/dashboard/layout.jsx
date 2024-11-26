"use client";

import BottomNav from "@/components/BottomNav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>
      <BottomNav />
    </div>
  );
}
