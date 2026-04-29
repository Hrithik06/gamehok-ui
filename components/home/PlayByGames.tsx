"use client";

import { useState } from "react";
import { games } from "@/data/mock";
import GameCard from "./GameCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VISIBLE = 5;

export default function PlayByGames() {
  const [startIndex, setStartIndex] = useState(0);

  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE < games.length;

  const prev = () => {
    if (canPrev) setStartIndex((i) => i - 1);
  };
  const next = () => {
    if (canNext) setStartIndex((i) => i + 1);
  };

  const visibleGames = games.slice(startIndex, startIndex + VISIBLE);

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center my-4">
        <h2 className="text-lg lg:text-3xl font-semibold">
          Play Tournaments by Games
        </h2>
        <p className="text-link text-xs lg:text-base">VIEW ALL</p>
      </div>
      {/* Mobile: 3 col x 2 row grid */}
      <div className="grid grid-cols-3 gap-2 sm:hidden">
        {games.map((game) => (
          <div key={game.id} className="w-full">
            <GameCard game={game} />
          </div>
        ))}
      </div>

      {/* Desktop: carousel */}
      <div className="hidden sm:flex items-center gap-2">
        {/* Prev */}
        <button
          onClick={prev}
          disabled={!canPrev}
          className={`
            shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg
            bg-green-500 text-white transition-opacity
            ${!canPrev ? "opacity-30 cursor-not-allowed" : "hover:bg-green-400"}
          `}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Cards */}
        <div className="flex gap-3 flex-1 overflow-hidden">
          {visibleGames.map((game) => (
            <div key={game.id} className="w-[20%] shrink-0">
              <GameCard game={game} />
            </div>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          disabled={!canNext}
          className={`
            shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg
            bg-green-500 text-white transition-opacity
            ${!canNext ? "opacity-30 cursor-not-allowed" : "hover:bg-green-400"}
          `}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
