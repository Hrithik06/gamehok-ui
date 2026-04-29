import Image from "next/image";

export default function HeroBanner() {
  return (
    <div
      className="
        bg-radial from-[#00A155] to-[#003B1F]
        rounded-xl p-3
        flex items-center justify-between
        flex-row-reverse lg:flex-row
      "
    >
      {/* TEXT */}
      <div className="flex flex-col lg:gap-3 flex-1 lg:p-4">
        <h2 className="text-white font-bold text-base lg:text-2xl">
          Be the Gamehok&apos;s{" "}
          <span className="text-processing font-bold ">Social Star</span>
        </h2>

        <p className="text-white/80 text-xs lg:text-sm font-semibold">
          Earn rewards by levelling up your social game
        </p>

        {/*<div className="flex lg:gap-8 gap-4 mt-2">*/}
        <div className="flex justify-center gap-4 lg:justify-start lg:gap-6 mt-2">
          {/* Posts */}
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="p-1.5 border border-[#2E9EEE] rounded-full">
              <Image
                src="/images/social.svg"
                width={24}
                height={24}
                className="lg:w-8 lg:h-8"
                alt="social"
              />
            </div>
            <span className="text-[10px] lg:text-xs text-white/80">Posts</span>
          </div>

          {/* Followers */}
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="p-1.5 border border-[#FFC39B] rounded-full">
              <Image
                src="/images/followers.svg"
                width={24}
                height={24}
                className="lg:w-8 lg:h-8"
                alt="followers"
              />
            </div>
            <span className="text-[10px] lg:text-xs text-white/80">
              Followers
            </span>
          </div>

          {/* Likes */}
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="p-1.5 border border-[#B287FF] rounded-full">
              <Image
                src="/images/likes.svg"
                width={24}
                height={24}
                className="lg:w-8 lg:h-8"
                alt="likes"
              />
            </div>
            <span className="text-[10px] lg:text-xs text-white/80">Likes</span>
          </div>
        </div>
      </div>

      {/* IMAGE */}

      <div className="w-30 h-22.5 lg:w-44 lg:h-44 flex items-center justify-center lg:mr-10">
        <Image
          src="/images/star.png"
          alt="star"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
    </div>
  );
}
