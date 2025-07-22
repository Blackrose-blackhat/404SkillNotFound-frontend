"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

export default function NothingPage() {
  const hasToasted = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!hasToasted.current) {
        toast("🥴 You really clicked a link labeled 'Nothing'? Bold move.");
        hasToasted.current = true;
      }
    }, 800); // slight delay for drama

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen font-sans flex flex-col items-center justify-center px-4 py-10 sm:py-20  text-[#E7E9EA] animate-fade-in">
      <div className="max-w-xl w-full backdrop-blur-sm bg-[#16181c]/70 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.35)] p-6 sm:p-10 border border-[#2a2a2a]/50 text-center transition-all duration-300 hover:scale-[1.01] hover:border-[#3a3a3a]">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1D9BF0] mb-4 tracking-tight">
          Welcome to <span className="line-through text-[#777]">Everything</span> Nothing
        </h1>

        <p className="text-sm sm:text-base text-[#999] italic mb-6">
          You’ve reached a page with no purpose, function, or hope. Just vibes.
        </p>

        <p className="text-base sm:text-lg mb-4 text-[#d0d0d0]">
          This page is like that one variable you declared and never used —
          just here, doing <span className="text-[#1D9BF0] font-medium">nothing</span>.
        </p>

        <p className="text-sm sm:text-base mb-6 text-[#aaa]">
          Built in record time, tested on absolutely no devices, and approved by a team of interns who don’t exist.
        </p>

        <p className="text-sm sm:text-base mb-8 text-[#666]">
          Go touch some grass, or worse... write unit tests.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-2 rounded-full bg-[#1D9BF0] text-black font-semibold hover:bg-[#0a7acb] transition-colors text-sm sm:text-base shadow-md hover:shadow-lg"
        >
          Take Me Somewhere Real
        </Link>
      </div>
    </main>
  );
}
