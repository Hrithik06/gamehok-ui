import TopBar from "@/components/layout/TopBar";
import Sidebar from "@/components/layout/Sidebar";
import BottomNav from "@/components/layout/BottomNav";
import FeaturedTournaments from "@/components/home/FeaturedTournaments";
import GameHighlights from "@/components/home/GameHighlights";
import HeroBanner from "@/components/home/HeroBanner";
import PlayByGames from "@/components/home/PlayByGames";
import CompeteInBattles from "@/components/home/CompeteInBattles";
import BouncyBird from "@/components/home/BouncyBird";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-[220px_1fr_380px] bg-[#0B0F0D] text-white">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col border-r border-white/10 h-screen overflow-y-auto">
        <Sidebar />
      </aside>

      {/* CENTER + RIGHT WRAPPER */}
      <div className="flex flex-col lg:col-span-2 h-screen overflow-hidden">
        <TopBar />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] flex-1 overflow-hidden">
          {/* Main scroll */}
          <main className="overflow-y-auto p-4 lg:p-8 flex flex-col gap-6 pb-20">
            <HeroBanner />
            <FeaturedTournaments />
            <BouncyBird />
            <PlayByGames />
            <CompeteInBattles />
            <div className="lg:hidden">
              <GameHighlights />
            </div>
          </main>

          {/* Right panel scroll */}
          <aside className="hidden lg:block border-l border-white/10 p-4 overflow-y-auto">
            <GameHighlights />
          </aside>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
