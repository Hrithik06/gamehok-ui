import TopBar from "@/components/layout/TopBar";
import Sidebar from "@/components/layout/Sidebar";
import BottomNav from "@/components/layout/BottomNav";
import FeaturedTournaments from "@/components/home/FeaturedTournaments";
import GameHighlights from "@/components/home/GameHighlights";
import HeroBanner from "@/components/home/HeroBanner";

export default function Home() {
  return (
    // <div className="min-h-screen bg-[#0B0F0D] text-white">
    //   {/* GRID */}
    //   <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] min-h-screen">
    //     {/* Sidebar */}
    //     <aside className="hidden lg:block border-r border-white/10">
    //       <Sidebar />
    //     </aside>

    //     {/* Main Content */}
    //     <main className="flex flex-col">
    //       {/* TopBar ONLY for main content */}
    //       <TopBar />

    //       <div className="p-4 flex flex-col gap-6">
    //         <HeroBanner />
    //         <FeaturedTournaments />
    //       </div>
    //     </main>

    //     {/* Right Panel */}
    //     <aside className="hidden lg:block border-l border-white/10 p-4">
    //       <GameHighlights />
    //     </aside>
    //   </div>

    //   {/* Mobile Bottom Nav */}
    //   <BottomNav />
    // </div>

    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] min-h-screen">
      {/* Sidebar */}
      <aside className="hidden lg:block border-r border-white/10">
        <Sidebar />
      </aside>

      {/* CENTER + RIGHT WRAPPER */}
      <div className="flex flex-col lg:col-span-2">
        {/* TopBar spans both */}
        <TopBar />

        {/* Content row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <main className="p-4 flex flex-col gap-6">
            <HeroBanner />
            <FeaturedTournaments />
          </main>

          {/* Right Panel */}
          <aside className="hidden lg:block border-l border-white/10 p-4">
            <GameHighlights />
          </aside>
        </div>
      </div>
    </div>
  );
}
