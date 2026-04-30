type Round = {
  name: string;
  type: string;
  date: string;
  advance: string;
};
type RoundsProps = {
  rounds: Round[];
};
export default function RoundsAndSchedule({ rounds }: RoundsProps) {
  return (
    <div className="lg:mr-12">
      <h3 className="text-xl font-semibold lg:text-2xl my-4">
        Rounds And Schedule
      </h3>

      <div className="flex flex-col gap-4">
        {rounds?.map((round) => (
          <div
            key={round.name}
            className="flex flex-col gap-4 pb-6 border-b border-b-white/30"
          >
            <div className="flex justify-between">
              <div className="font-semibold">{round.name}</div>
              <div className="bg-linear-to-r from-[#1C192E] to-[#311A61] rounded py-1 px-2 text-sm lg:text-base">
                {round.type}
              </div>
            </div>
            <div className="flex justify-between ">
              <div>{round.advance}</div>
              <div className="lg:font-semibold ">{round.date}</div>
            </div>
            {/*<div className="border border-white/10"></div>*/}
          </div>
        ))}
      </div>
    </div>
  );
}
