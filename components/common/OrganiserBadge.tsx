import Image from "next/image";

export default function OrganiserBadge({
  logo,
  name,
}: {
  logo: string;
  name: string;
}) {
  return (
    <div className="w-12 h-12 relative rounded-full border border-white/10 bg-white/5">
      <Image src={logo} alt={name} fill className="rounded-full" />
    </div>
  );
}
