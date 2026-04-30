import LobbiesTab from "@/components/tournament/LobbiesTab";
import OverviewTab from "@/components/tournament/OverviewTab";
import Tabs from "@/components/tournament/Tabs";
import TournamentHeader from "@/components/tournament/TournamentHeader";
import { tournamentDetails } from "@/data/mock";
export default async function TournamentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const tournament = tournamentDetails.find((t) => t.id === id);
  console.log(tournament);
  if (!tournament) return <div>Not found</div>;
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
      content: <LobbiesTab tournamentDetails={tournament} />,
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
    <div className="h-full overflow-y-auto p-4 pb-20 lg:p-16 text-white">
      <TournamentHeader tournamentDetails={tournament} />
      <Tabs tabs={tabs} />
    </div>
  );
}
