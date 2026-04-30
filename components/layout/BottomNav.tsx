"use client";

import { useState } from "react";
import { HouseHeart, MessageCircleMore, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function BottomNav() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", link: "/", icon: HouseHeart },
    { id: "tournament", label: "My Tournament", link: "", icon: Trophy },
    { id: "social", label: "Social", link: "", icon: Users },
    { id: "chat", label: "Chat", link: "", icon: MessageCircleMore },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-[#0B0F0D] border-t border-white/10 flex justify-around py-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;

        return (
          <Link href={item.link} key={item.id}>
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="relative flex flex-col items-center gap-1 px-3 py-2 cursor-pointer"
            >
              {/* 🔥 TOP GREEN PILL */}
              {isActive && (
                <div className="absolute -top-1 w-8 h-1 bg-green-400 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              )}

              {/* Icon */}
              <Icon
                size={20}
                className={`
                ${isActive ? "text-green-400" : "text-gray-400"}
              `}
              />

              {/* Label */}
              <span
                className={`
                text-[10px]
                ${isActive ? "text-green-400" : "text-gray-400"}
              `}
              >
                {item.label}
              </span>
            </button>
          </Link>
        );
      })}
    </nav>
  );
}
