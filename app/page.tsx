import FeaturedTournaments from "@/components/home/FeaturedTournaments";
import GameHighlights from "@/components/home/GameHighlights";
import HeroBanner from "@/components/home/HeroBanner";
import PlayByGames from "@/components/home/PlayByGames";
import CompeteInBattles from "@/components/home/CompeteInBattles";
import BouncyBird from "@/components/home/BouncyBird";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";

export default function Home() {
  return (
    <>
      <TopBar /> {/* mobile + desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] flex-1 overflow-hidden">
        <main className="overflow-y-auto p-4 lg:p-8 flex flex-col gap-6 pb-20 lg:pb-8">
          <HeroBanner />
          <FeaturedTournaments />
          <BouncyBird />
          <PlayByGames />
          <CompeteInBattles />
          <div className="lg:hidden">
            <GameHighlights />
          </div>
        </main>
        <aside className="hidden lg:block border-l border-white/10 p-4 overflow-y-auto">
          <GameHighlights />
        </aside>
      </div>
      <BottomNav /> {/* lg:hidden inside BottomNav itself */}
    </>
  );
}
