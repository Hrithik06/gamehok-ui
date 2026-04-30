import { Game } from "@/data/mock";
import Image from "next/image";
type GameProps = {
  game: Game;
};
export default function GameCard({ game }: GameProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full h-[80px] lg:h-[200px] rounded-lg overflow-hidden">
        <Image
          src={game.image}
          alt={game.name}
          width={200}
          height={120}
          className="w-full h-full "
        />
      </div>
      <p className="text-[10px] lg:text-xs text-white/80 text-center uppercase tracking-wide">
        {game.name}
      </p>
    </div>
  );
}
