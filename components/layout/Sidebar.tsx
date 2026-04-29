"use client";

import { useState } from "react";
import {
  HouseHeart,
  MessageCircleMore,
  Power,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: HouseHeart },
    { id: "tournament", label: "My Tournament", icon: Trophy },
    { id: "social", label: "Social", icon: Users },
    { id: "chat", label: "Chat", icon: MessageCircleMore },
  ];

  return (
    <div className="h-full flex flex-col justify-between px-4 py-6 gap-8 bg-[#0B0F0D]">
      <div className="h-full flex flex-col gap-8">
        {/* Logo */}
        <div className="flex items-center ">
          <Image src="/images/logo.svg" alt="Gamehok" width={28} height={28} />
          <span className="font-bold text-lg">AMEHOK</span>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg transition
                  ${
                    isActive
                      ? "bg-white/10 text-white font-semibold"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <Icon
                  size={18}
                  className={isActive ? "text-green-400" : "text-gray-400"}
                />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
      <div className="hidden lg:flex gap-2 text-sm">
        <Power size={18} className="text-red-400" />
        <div>Logout</div>
      </div>
    </div>
  );
}
