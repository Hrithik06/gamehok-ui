import { featuredTournaments } from "@/data/mock";
import TournamentCard from "./TournamentCard";
import Link from "next/link";

export default function FeaturedTournaments() {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center my-4">
        <h2 className="text-lg lg:text-3xl font-semibold">
          Featured Tournaments
        </h2>
        <a href="#" className="text-link text-xs lg:text-base">
          VIEW ALL
        </a>
      </div>
      <div
        className="
        flex gap-4 overflow-x-auto pb-2
        lg:grid lg:grid-cols-2 lg:overflow-visible no-scrollbar
      "
      >
        {featuredTournaments.map((t) => (
          <Link
            key={t.id}
            href={`/tournament/${t.id}`}
            className="min-w-65 shrink-0 lg:min-w-0"
          >
            <TournamentCard tournament={t} />
          </Link>
        ))}
      </div>
    </section>
  );
}
