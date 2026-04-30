import { gameHighlights } from "@/data/mock";
import HighlightCard from "./HighlightCard";

export default function GameHighlights() {
  return (
    <section className="w-full h-full flex flex-col">
      <div className="flex lg:flex-row justify-between items-center my-4 ">
        <h2 className="text-lg lg:text-3xl font-semibold">Game Highlights </h2>
        <a href="#" className="text-link text-xs lg:text-sm">
          VIEW ALL
        </a>
      </div>
      <div className="flex lg:flex-col gap-4 w-full overflow-x-auto lg:overflow-y-auto flex-1 no-scrollbar">
        {gameHighlights.map((highlight, index) => (
          <div
            key={highlight.id}
            className="min-w-[260px] shrink-0 no-scrollbar"
          >
            <HighlightCard highlight={highlight} />

            {index < gameHighlights.length - 1 && (
              <div className="hidden lg:block border-b border-white/60 my-3"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
