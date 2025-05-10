import Link from "next/link";

interface projectCardProps {
  title: string;
  image: string;
  description: string;
  btnLink: string;
  btnText: string;
}

export default function ProjectCard({
  title,
  image,
  description,
  btnLink,
  btnText,
}: projectCardProps) {
  return (
    <div className="flex flex-col h-[600px] w-full rounded-md overflow-hidden bg-gray-900 shadow-lg">
      <h1 className="text-2xl text-white px-4 py-3 font-semibold">{title}</h1>

      <div className="h-[350px] flex items-center justify-center bg-black">
        <img
          src={`/${image}`}
          alt={title}
          className="object-cover h-full w-full"
        />
      </div>

      <div className="flex-1 px-4 py-3 overflow-hidden bg-gray-900">
        <p className="text-white line-clamp-4">{description}</p>
      </div>

      <div className="flex justify-center p-4 bg-gray-800">
        <Link
          href={btnLink}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium px-10 py-2 rounded-full shadow hover:from-pink-500 hover:to-yellow-400 transition-colors"
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
}
