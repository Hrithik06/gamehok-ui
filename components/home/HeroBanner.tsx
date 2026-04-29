import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className=" bg-primary rounded-xl p-4 flex justify-between">
      {/* Text */}
      <div className="">
        <h2 className="font-semibold">
          Be the Gamehok&apos;s
          <span className="text-processing">Social Star</span>
        </h2>
        <p>Earn rewards by levelling up your social game</p>
      </div>

      {/* Star image */}
      <div className="">
        <Image src="/images/star.png" alt="star" width={40} height={40} />
      </div>
    </div>
  );
}
