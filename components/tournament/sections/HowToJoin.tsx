type JoinProps = {
  howToJoin: string[];
};
export default function HowToJoin({ howToJoin }: JoinProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold lg:text-2xl my-4">How To Join </h3>
      <div className="pl-4 text-white/60 ">
        <ol className="list-disc">
          {howToJoin.map((item) => (
            <li key={item} className="py-1">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
