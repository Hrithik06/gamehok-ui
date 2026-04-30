import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Battle } from "@/data/mock";
type BattleProps = {
  battle: Battle;
};

export default function BattleCard({ battle }: BattleProps) {
  return (
    <div className="bg-linear-to-r from-[#4D5A53] to-[#182920] rounded-lg  flex flex-col items-center justify-center p-4 w-56 h-60">
      <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 ">
        <Image
          src={battle.organiserLogo}
          width={100}
          height={100}
          className="object-cover w-full h-full"
          alt={battle.title}
        />
      </div>
      <h1 className="font-semibold mt-3 text-sm sm:text-base text-center">
        {battle.title}
      </h1>
      <h1 className="font-medium text-[10px] sm:text-xs text-center">
        {battle.organiser}
      </h1>
      <p className="text-center text-xs mt-4 mb-5">{battle.description}</p>
      <a className="text-link flex items-center gap-1" href="#">
        <p className="font-medium text-sm">Explore scrims</p>
        <ChevronRight size={14} />
      </a>
    </div>
  );
}
