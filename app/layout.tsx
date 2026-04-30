import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gamehok",
  description: "Gamehok",
};

import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-screen overflow-hidden bg-[#0B0F0D] text-white">
        <div className="h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-[220px_1fr]">
          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col border-r border-white/10 h-screen overflow-y-auto">
            <Sidebar />
          </aside>

          {/* Right side: TopBar + page content */}
          <div className="flex flex-col h-screen overflow-hidden">
            <TopBar />
            <main className="flex-1 overflow-hidden">{children}</main>
          </div>
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
