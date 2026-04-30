"use client";
import { useState } from "react";
import LobbyCard from "./LobbyCard";

export type Lobby = {
  id: string;
  name: string;
  status: string;
};
export type Round = {
  id: string;
  name: string;
  lobbies: Lobby[];
};
export type LobbySection = {
  rounds: Round[];
};
type LobbiesProps = {
  lobbySection: LobbySection;
};

export default function LobbiesTab({ lobbySection }: LobbiesProps) {
  const [activeRoundId, setActiveRoundId] = useState(
    lobbySection?.rounds[0].id,
  );
  if (!lobbySection) return <div>Not found</div>;

  console.log("Lobbies");
  const currentRound = lobbySection?.rounds.find((r) => r.id === activeRoundId);
  return (
    <div className="flex flex-col gap-6">
      {/*Pills */}
      <div className="flex gap-3">
        {lobbySection.rounds.map((round) => {
          const isActive = round.id === activeRoundId;

          return (
            <button
              key={round.id}
              onClick={() => setActiveRoundId(round.id)}
              className={`
                px-4 py-1.5 rounded-full text-sm transition
                ${
                  isActive
                    ? "bg-green-600 text-white border border-green-500"
                    : "bg-white/10 text-gray-300"
                }
              `}
            >
              {round.name}
            </button>
          );
        })}
      </div>
      {/* 🔹 Lobbies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {currentRound?.lobbies.map((lobby) => (
          <LobbyCard key={lobby.id} lobby={lobby} />
        ))}
      </div>
    </div>
  );
}
