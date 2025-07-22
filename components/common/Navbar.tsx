"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/terms", label: "Terms of Offense" },
  { href: "/nothing", label: "Nothing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Don't render Navbar on /panel route
  if (pathname.startsWith("/panel")) return null;

  return (
    <nav className="fixed bg-black shadow-md shadow-neutal-800 top-6 left-1/2 transform -translate-x-1/2 z-30 max-w-2xl w-[90vw] md:w-[700px] /80 rounded-2xl shadow-xl px-6 py-3 backdrop-blur-md border border-[#222]">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">XcusesHub</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5 text-sm text-[#E7E9EA]">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition hover:text-[#1D9BF0] ${
                pathname === href ? "text-[#1D9BF0]" : ""
              }`}
              title={label === "nothing" ? "This page does absolutely nothing." : label}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-3 md:hidden flex flex-col gap-3 text-sm text-[#E7E9EA]">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`transition hover:text-[#1D9BF0] ${
                pathname === href ? "text-[#1D9BF0]" : ""
              }`}
              title={label === "nothing" ? "This page does absolutely nothing." : label}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
