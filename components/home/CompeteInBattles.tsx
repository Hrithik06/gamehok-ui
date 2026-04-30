import { battles } from "@/data/mock";
import BattleCard from "./BattleCard";
export default function CompeteInBattles() {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center my-4">
        <h2 className="text-lg lg:text-3xl font-semibold">
          Compete In Battles
        </h2>
        <a href="#" className="text-link text-xs lg:text-base">
          VIEW ALL
        </a>
      </div>

      <div className="flex gap-4 w-full overflow-x-auto scroll-smooth no-scrollbar">
        {battles.map((battle) => (
          <BattleCard battle={battle} key={battle.id} />
        ))}
      </div>
    </section>
  );
}
