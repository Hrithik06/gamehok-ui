import Image from "next/image";
import OrganiserBadge from "../common/OrganiserBadge";
import { Users } from "lucide-react";
import BackButton from "../common/BackButton";
import { TournamentDetails } from "@/data/mock";
type HeaderProps = {
  tournamentDetails: TournamentDetails;
};
export default function TournamentHeader({ tournamentDetails }: HeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* 🔙 Back */}
      {/*<button className="text-sm text-gray-300 flex items-center gap-2">
        <MoveLeft size={18} /> Back
      </button>*/}
      <BackButton />
      {/* 🎯 Banner */}
      <div className="relative w-full h-40 lg:h-96 rounded-xl overflow-hidden">
        <Image
          src={tournamentDetails.banner}
          alt={tournamentDetails.title}
          fill
          className="object-cover object-[center_20%] "
        />

        {/* Overlay gradient (important for readability) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Bottom overlay content */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
          {/* Left badge */}
          <div className="bg-black/60 text-xs lg:text-base px-3 py-1 rounded-full">
            Registration closes in 2d
          </div>

          {/* Right badge */}
          <div className="bg-black/60 text-xs lg:text-base px-3 py-1 rounded-full flex gap-1 items-center">
            <Users className="w-4" />
            {tournamentDetails.filledSlots}/{tournamentDetails.totalSlots}
          </div>
        </div>
      </div>

      {/* 🧾 Title + info */}
      <div className="realtive flex items-start justify-between">
        <div>
          <h1 className="text-lg lg:text-3xl font-semibold capitalize">
            {tournamentDetails.title}
          </h1>

          <p className="text-xs lg:text-base text-gray-400">
            BY {tournamentDetails.organiser}
          </p>

          {/* Tags */}
          <div className="flex gap-2 mt-2">
            <span className="bg-dark-green text-green-400 text-xs lg:text-base px-2 py-1 rounded">
              {tournamentDetails.game}
            </span>
            <span className="bg-dark-green text-xs lg:text-base px-2 py-0.5 rounded flex items-center gap-1">
              {tournamentDetails.isFree ? "Free" : tournamentDetails.entryFee}
              <Image src="/images/coin.png" alt="coin" width={12} height={12} />
            </span>
          </div>
        </div>

        {/* Right icon */}
        <OrganiserBadge
          logo={tournamentDetails.organiserLogo}
          name={tournamentDetails.organiser}
        />
      </div>
    </div>
  );
}
