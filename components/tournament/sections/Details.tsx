import { CalendarDays, ClockCheck, UsersRound, Workflow } from "lucide-react";
type DetailsProps = {
  teamSize: string;
  format: string;
  startDate: string;
  checkin: string;
};
export default function Details({
  teamSize,
  format,
  startDate,
  checkin,
}: DetailsProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold lg:text-2xl my-4">Details</h3>
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="flex items-center gap-3">
          <UsersRound size={30} className="text-link/80" />
          <div>
            <p className="text-white/60 font-light text-sm">TEAM SIZE</p>
            <p className="font-semibold">{teamSize}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CalendarDays size={30} className="text-link/80" />
          <div>
            <p className="text-white/60 font-light text-sm">
              TOURNAMENT STARTS
            </p>
            <p className="font-semibold">{startDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Workflow size={30} className="text-link/80" />
          <div>
            <p className="text-white/60 font-light text-sm">FORMAT</p>
            <p className="font-semibold">{format}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ClockCheck size={30} className="text-link/80" />
          <div>
            <p className="text-white/60 font-light text-sm">CHECK-IN</p>
            <p className="font-semibold">{checkin}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
