// type Prize = {
//   position: string;
//   amount: string;

import { Trophy } from "lucide-react";
import Image from "next/image";

// };
type PrizePoolProps = {
  prizePool: {
    total: number;
    prizes: {
      position: string;
      amount: number;
    }[];
  };
};
export default function PrizePool({ prizePool }: PrizePoolProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold lg:text-2xl my-4 ">Prize Pool</h3>

      <div className="overflow-hidden rounded-xl">
        <div className="flex justify-between items-center p-3 text-lg bg-linear-to-r from-[#182920] to-[#4D5A53]">
          <span>Total Tournament Prize</span>
          <span className="flex gap-3 items-center">
            {prizePool.total}
            <span>
              <Image src="/images/coin.png" alt="coin" width={20} height={20} />
            </span>
          </span>
        </div>
        <div className="flex flex-col">
          {prizePool.prizes.map((prize, index) => (
            <div
              key={prize.position}
              className={`flex justify-between items-center bg-[#001208] p-3 ${index < prizePool.prizes.length - 1 ? "border-b border-b-gray-800" : ""}`}
            >
              <span className="flex gap-2 items-center">
                <Trophy size={18} />
                {prize.position}
              </span>
              <span className="flex gap-3 items-center">
                {prize.amount}
                <span>
                  <Image
                    src="/images/coin.png"
                    alt="coin"
                    width={20}
                    height={20}
                  />
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
