import Link from "next/link";
import JayeshLogo from "./logo";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-22 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-gray-700 pb-8">
        <div className="flex flex-col items-start text-center md:text-left">
          <div className="h-14 max-w-xs">
            <Link href="/">
              <JayeshLogo />
            </Link>
          </div>

          <div className="flex gap-6 mt-6">
            <Link
              href="https://github.com/Bunny099"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img
                src="/github.svg"
                alt="GitHub"
                className="h-6 invert hover:scale-110 transition-transform"
              />
            </Link>
            <Link
              href="https://x.com/JayeshKhuman5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
            >
              <img
                src="/x.svg"
                alt="X"
                className="h-6 invert hover:scale-110 transition-transform"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jayeshkhuman"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src="/lnk.svg"
                alt="LinkedIn"
                className="h-6 invert hover:scale-110 transition-transform"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2  gap-y-3 text-lg">
          {[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
            { name: "About", href: "/about" },
            { name: "Projects", href: "/project" },
            { name: "Testimonials", href: "/testimonial" },
            { name: "Tech", href: "/techstack" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="shadow-md transition-opacity opacity-90 hover:opacity-100 duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="pt-6 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Jayesh Khuman. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
