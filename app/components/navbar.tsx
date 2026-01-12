"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./button";
import JayeshLogo from "./logo";
import AnnouncementBar from "./announce";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 99);
    };
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "PROJECT", href: "project" },
    { label: "ABOUT", href: "about" },
    { label: "TESTIMONIALS", href: "testimonial" },
    { label: "TECH", href: "techstack" },
  ];
  return ( <>
  <AnnouncementBar/>
    <nav
      className={`flex items-center justify-between py-6 px-6 md:px-22 sticky top-0 z-50  transition-all duration-300 text-white 
      ${scrolled ? "bg-black/35 backdrop-blur-md shadow-md" : "themebg"}
       `}
    >
      <div className="h-12">
        <Link href={"/"}>
          {" "}
          <JayeshLogo />
        </Link>
      </div>

      <ul className="hidden md:flex gap-6 items-center">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link href={`/${item.href}`}>{item.label}</Link>
          </li>
        ))}
        <li>
          <Button text="Contact" type="primary" path="contact" />
        </li>
      </ul>

      <div className="md:hidden">
        {menuOpen ? (
          <X
            className="w-6 h-6 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <Menu
            className="w-6 h-6 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black backdrop-blur-sm flex flex-col items-center gap-6 py-6 transition-all duration-300 ease-in-out transform animate-slide-down md:hidden z-40">
          {navItems.map((item) => (
            <Link
              onClick={() => setMenuOpen(false)}
              key={item.label}
              href={`/${item.href}`}
              className="text-lg"
            >
              {item.label}
            </Link>
          ))}
          <Button type="primary" text="Contact" path="contact" />
        </div>
      )}
    </nav>
    </>
  );
}
