import { Clock } from "lucide-react";

export default function LobbyCard({ lobby }: any) {
  return (
    <div className="border border-white/10 rounded-xl p-4 flex flex-col gap-3">
      {/* Top */}
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{lobby.name}</h3>
        <button className="text-green-400 text-sm">VIEW PARTICIPANTS</button>
      </div>

      {/* Status */}
      <div className="flex items-center gap-2 text-gray-300 text-sm">
        <Clock size={16} />
        <span>{lobby.status}</span>
      </div>
    </div>
  );
}
