import OrganiserBadge from "@/components/common/OrganiserBadge";
import { Mail } from "lucide-react";

type OrganiserProps = {
  organiser: string;
  organiserLogo: string;
  organiserEmail: string;
};
export default function Organiser({
  organiser,
  organiserLogo,
  organiserEmail,
}: OrganiserProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold lg:text-2xl my-4">Organiser</h3>
      <div className="border-2 rounded-lg border-dark-green overflow-hidden">
        <div className="bg-linear-to-r from-[#182920] to-[#4D5A53] p-3 text-lg">
          Organiser&apos;s Details and contact
        </div>
        <div className="p-6 flex flex-col gap-6">
          <div className="flex gap-2 items-center">
            <OrganiserBadge logo={organiserLogo} name={organiser} />
            <span className="capitalize font-semibold">{organiser}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Mail />

            <a href={`mailto:${organiserEmail}`}>{organiserEmail}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

//bg-linear-to-r from-[#182920] to-[#4D5A53]
