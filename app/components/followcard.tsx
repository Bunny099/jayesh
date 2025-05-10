import Link from "next/link";

interface followCardProps {
  name: string;
  imagePath: string;
  link: string;
}
export default function FollowCard({ name, imagePath, link }: followCardProps) {
  return (
    <div className="flex p-6 w-full max-w-md shadow-lg transition-transform hover:scale-[1.02] justify-center items-center rounded-2xl bg-[#1e1e1e]">
      <img src={`/${imagePath}`} alt="" className="h-7 filter invert" />
      <Link href={`${link}`} className="text-white " target="_blank"
              rel="noopener noreferrer">
        {" "}
        {name}
      </Link>
    </div>
  );
}
