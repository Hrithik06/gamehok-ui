"use client";

import Image from "next/image";
import { Bell, Menu } from "lucide-react";
import { user } from "@/data/mock";

export default function TopBar() {
  return (
    <div className="w-full flex items-center justify-between lg:justify-end px-4 py-3 bg-[#0B0F0D] lg:border-b lg:border-white/10">
      {/* LEFT: Avatar (mobile only) */}
      <div className="flex items-center lg:hidden relative rounded-full bg-white/80">
        <div className="w-10 h-10 relative">
          <Image
            src={user.avatar}
            alt="User Avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <Menu
          className="absolute text-white bg-primary rounded-full bottom-0 right-0 p-0.5"
          size={16}
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        {/* Coins + Tokens */}
        <div className="flex items-center bg-primary rounded-2xl">
          <div className="hidden sm:flex items-center gap-1 px-3 py-1">
            <Image src="/images/token.png" alt="token" width={20} height={20} />
            <p className="text-sm font-medium">{user.coins}</p>
          </div>

          <div className="hidden lg:block w-px h-5 bg-white/40"></div>

          <div className="flex items-center gap-1 px-3 py-1">
            <Image src="/images/coin.png" alt="coin" width={20} height={20} />
            <p className="text-sm font-medium">{user.tokens}</p>
          </div>
        </div>

        {/* Bell */}
        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#1A1F1D] transition">
          <Bell size={22} />
        </button>

        {/* Divider (desktop only) */}
        <div className="hidden lg:block w-px h-5 bg-white/40"></div>

        {/* Avatar (desktop only) */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="w-10 h-10 relative rounded-full bg-white/80">
            <Image
              src={user.avatar}
              alt="User Avatar"
              fill
              className="rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <p className="text-sm font-medium text-white">{user.name}</p>
            <p className="text-xs text-gray-400">Welcome back</p>
          </div>
        </div>
      </div>
    </div>
  );
}
