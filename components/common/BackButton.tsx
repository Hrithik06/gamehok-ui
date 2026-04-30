"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-sm text-gray-300 flex items-center gap-2 cursor-pointer"
    >
      <MoveLeft size={18} /> Back
    </button>
  );
}
