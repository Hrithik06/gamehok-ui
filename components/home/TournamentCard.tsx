import { Users } from "lucide-react";
import Image from "next/image";

export default function TournamentCard({ data }: any) {
  return (
    <div className="bg-[#0E1A16] rounded-xl overflow-hidden border border-white/10">
      {/* IMAGE + OVERLAYS */}
      <div className="relative">
        <Image
          src={data.banner}
          alt={data.title}
          width={400}
          height={200}
          className="w-full h-30 lg:h-80 object-cover object-[center_20%]"
        />

        {/* Registration badge */}
        <span className="absolute top-2 left-2 text-[10px] lg:text-base bg-black/60 px-2 py-1 rounded-full font-semibold ">
          Registration Open
        </span>

        {/* Players */}
        <span className="absolute top-2 right-2 text-[10px] lg:text-base bg-black/60 px-2 py-1 rounded-full font-semibold flex items-center gap-2">
          <Users size={14} />
          {data.filledSlots}/{data.totalSlots}
        </span>

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-black/60  px-3 py-1 flex items-center justify-start ">
          <span>🏆 Prize Pool</span>
          <span className="px-1">-</span>
          <span className="flex items-center gap-1 font-semibold">
            {data.prizePool}
            <Image src="/images/coin.png" alt="coin" width={12} height={12} />
          </span>
        </div>

        {/* Side badge icon */}
        <div className="absolute bottom-[-14px] right-3 w-11 h-11 rounded-full overflow-hidden border border-white/10">
          <Image
            src={data.organizerLogo}
            alt="badge"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3 flex flex-col gap-2">
        <h3 className="text-sm font-semibold">{data.title}</h3>

        {/* Tags */}
        <div className="flex gap-2 text-[10px]">
          <span className="bg-white/10 px-2 py-0.5 rounded">{data.game}</span>

          <span className="bg-white/10 px-2 py-0.5 rounded">{data.mode}</span>

          <span className="bg-white/10 px-2 py-0.5 rounded flex items-center gap-1">
            {data.isFree ? "Free" : data.entryFee}
            <Image src="/images/coin.png" alt="coin" width={10} height={10} />
          </span>
        </div>
      </div>
    </div>
  );
}
