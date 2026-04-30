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
        <div className="h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-[230px_1fr]">
          <aside className="hidden lg:flex flex-col border-r border-white/10 h-screen">
            <Sidebar />
          </aside>
          <div className="flex flex-col h-screen overflow-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
