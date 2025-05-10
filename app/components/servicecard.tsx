import Link from "next/link";

interface serviceCardProps {
  name: string;
  buttonText: string;
  imagePath: string;
  serviceLink: string;
}
export default function ServiceCard({
  name,
  buttonText,
  imagePath,
  serviceLink,
}: serviceCardProps) {
  return (
    <div className="flex justify-between items-center gap-4 bg-[#1e1e1e] rounded-2xl p-6 w-full max-w-md shadow-lg transition-transform hover:scale-[1.02]">
      <div className="flex flex-col justify-between">
        <h1 className="text-white text-lg font-semibold mb-3">{name}</h1>
        <Link
          href={`/${serviceLink}`}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium px-6 py-2 rounded-full shadow hover:from-pink-500 hover:to-yellow-400 transition-colors"
        >
          {buttonText}
        </Link>
      </div>

      <div className="bg-[#2e2e2e] p-3 rounded-lg hover:bg-gradient-to-r from-pink-500 via-yellow-400 to-yellow-500 transition-colors">
        <img
          src={`/${imagePath}`}
          alt="code icon"
          className="h-6 w-6 filter invert"
        />
      </div>
    </div>
  );
}
