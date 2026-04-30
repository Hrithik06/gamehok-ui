import { Play } from "lucide-react";
import { GameHighlight } from "@/data/mock";
import SmartImage from "../common/SmartImage";
type GameHighlightProps = {
  highlight: GameHighlight;
};
export default function HighlightCard({ highlight }: GameHighlightProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="relative w-full h-36 lg:h-48 rounded-xl overflow-hidden">
        {/* Image */}
        <SmartImage
          src={highlight.thumbnail}
          alt={highlight.title}
          fill
          className="object-cover"
        />

        {/* Play Button (only if video) */}
        {highlight.hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
              <Play size={20} className="text-white ml-[2px]" />
            </div>
          </div>
        )}
      </div>

      <p className="pl-2">{highlight.title}</p>
    </div>
  );
}
