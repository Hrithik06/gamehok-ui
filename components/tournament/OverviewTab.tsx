import { TournamentDetails } from "@/data/mock";
import Details from "./sections/Details";
import HowToJoin from "./sections/HowToJoin";
import Organiser from "./sections/Organiser";
import PrizePool from "./sections/PrizePool";
import RoundsAndSchedule from "./sections/RoundsAndSchedule";
type OverviewProps = {
  tournamentDetails: TournamentDetails;
};
export default function OverviewTab({ tournamentDetails }: OverviewProps) {
  return (
    <>
      {/* MOBILE — stacked in mobile order */}
      <div className="flex flex-col gap-6 lg:hidden">
        <Details
          startDate={tournamentDetails.startDate}
          teamSize={tournamentDetails.teamSize}
          format={tournamentDetails.format}
          checkin={tournamentDetails.checkin}
        />
        <PrizePool prizePool={tournamentDetails.prizePool} />
        <RoundsAndSchedule rounds={tournamentDetails.rounds} />
        <HowToJoin howToJoin={tournamentDetails.howToJoin} />
        <Organiser
          organiser={tournamentDetails.organiser}
          organiserLogo={tournamentDetails.organiserLogo}
          organiserEmail={tournamentDetails.organiserEmail}
        />
      </div>

      {/* DESKTOP — two explicit columns */}
      <div className="hidden lg:grid grid-cols-[1fr_auto_450px] gap-6">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <Details
            startDate={tournamentDetails.startDate}
            teamSize={tournamentDetails.teamSize}
            format={tournamentDetails.format}
            checkin={tournamentDetails.checkin}
          />
          <RoundsAndSchedule rounds={tournamentDetails.rounds} />
          <HowToJoin howToJoin={tournamentDetails.howToJoin} />
        </div>
        <div className="w-px bg-white/30"></div>
        {/* Right */}
        <div className="flex flex-col gap-6">
          <PrizePool prizePool={tournamentDetails.prizePool} />
          <Organiser
            organiser={tournamentDetails.organiser}
            organiserLogo={tournamentDetails.organiserLogo}
            organiserEmail={tournamentDetails.organiserEmail}
          />
        </div>
      </div>
    </>
  );
}
