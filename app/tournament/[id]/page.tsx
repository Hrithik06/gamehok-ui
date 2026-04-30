import TopBar from "@/components/layout/TopBar";
import LobbiesTab from "@/components/tournament/LobbiesTab";
import OverviewTab from "@/components/tournament/OverviewTab";
import Tabs from "@/components/tournament/Tabs";
import TournamentHeader from "@/components/tournament/TournamentHeader";
import { tournamentDetails } from "@/data/mock";
import { notFound } from "next/navigation";
export default async function TournamentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const tournament = tournamentDetails.find((t) => t.id === id);

  if (!tournament) notFound();

  const tabs = [
    {
      label: "Overview",
      content: <OverviewTab tournamentDetails={tournament} />,
    },
    {
      label: "Teams",
      content: (
        <div className="text-center text-3xl text-white/40 p-10">
          Teams coming soon
        </div>
      ),
    },
    {
      label: "Lobbies",
      content: <LobbiesTab lobbySection={tournament.lobbySection} />,
    },
    {
      label: "Rules",
      content: (
        <div className="text-center text-3xl text-white/40 p-10">
          Rules coming soon
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="hidden lg:block">
        <TopBar /> {/* desktop only */}
      </div>
      <div className="overflow-y-auto h-full p-4 pb-20 lg:p-8">
        <div className="h-full overflow-y-auto p-4 lg:p-16 text-white">
          <TournamentHeader tournamentDetails={tournament} />
          <Tabs tabs={tabs} />
        </div>
        {/*<div className="fixed w-full bottom-0 ">
          <div className="flex justify-center py-6 lg:justify-end">
            <button className="bg-green-700 px-4 py-2.5 rounded-lg">
              JOIN TOURNAMENT
            </button>
          </div>
        </div>*/}
        <div className="fixed bottom-0 left-0 lg:left-[220px] right-0 flex justify-center lg:justify-end px-6 py-4 bg-[#0B0F0D] shadow-top">
          <button className="w-full lg:w-auto bg-green-700 px-6 py-2.5 rounded-lg cursor-pointer">
            JOIN TOURNAMENT
          </button>
        </div>
      </div>
    </>
  );
}
