// import Image from "next/image";

// export default function BouncyBird() {
//   return (
//     <div className="sm:hidden">
//       <div className="relative">
//         <Image
//           src={"/images/bouncy-bird-bg.png"}
//           width={400}
//           height={200}
//           alt="Bouncy Bird Background"
//           className="object-cover rounded"
//         />
//         <div>
//           <Image
//             src={"/images/bird.png"}
//             width={90}
//             height={90}
//             alt="Bouncy Bird"
//             className="object-cover absolute"
//           />
// <Image
//   src={"/images/play.png"}
//   width={90}
//   height={90}
//   alt="Play Bouncy Bird"
//   className="object-cover absolute"
// />
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { Irish_Grover } from "next/font/google";

const irish = Irish_Grover({
  weight: "400",
  subsets: ["latin"],
});
export default function BouncyBird() {
  return (
    <div className="sm:hidden">
      <div className="relative rounded-xl overflow-hidden">
        {/* Background */}
        <Image
          src="/images/bouncy-bird-bg.png"
          alt="Bouncy Bird Background"
          width={400}
          height={200}
          className="w-full h-40 object-cover"
        />

        {/* Content overlay */}
        <div className="absolute inset-0 p-4 flex flex-col justify-between">
          {/* Text */}
          <div className="flex flex-col gap-1">
            <p className="text-xl text-gray-700 font-semibold">Introducing</p>

            <h2 className={`${irish.className} text-lg text-red-900`}>
              BOUNCY BIRD
            </h2>
            <p className="text-xs text-purple-600 font-semibold">
              A game for everyone
            </p>
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-black font-semibold">
              Play daily, win weekly 🪙
            </p>

            {/* Play Button */}
            <div className="relative w-24 h-10">
              <Image
                src="/images/play.png"
                alt="Play"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bird (right side) */}
        <div className="absolute right-3 top-4 w-24 h-20">
          <Image
            src="/images/bird.png"
            alt="Bird"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
