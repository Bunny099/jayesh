import Link from "next/link";

interface ButtonProps {
  path: string;
  text: string;
  type: "primary" | "secondary";
}

export default function Button({ path, text, type }: ButtonProps) {
  return (
    <Link
      href={path}
      className={`${
        type === "primary"
          ? "bg-gradient-to-r from-cyan-400 to-blue-500"
          : "bg-black/15"
      } text-white font-medium px-6 py-2 rounded-full shadow hover:from-pink-500 hover:to-yellow-400 transition-colors`}
    >
      {text}
    </Link>
  );
}
