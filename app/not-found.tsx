"use client"
import Link from 'next/link'

import { useEffect, useRef } from "react";
import { toast } from "sonner";
export default function NotFound() {
     const hasToasted = useRef(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!hasToasted.current) {
        toast("🚫 This page doesn’t exist. Never did. Never will.");
        hasToasted.current = true;
      }
    }, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen font-sans flex items-center justify-center px-4 py-10 sm:py-20  text-[#E7E9EA] animate-fade-in">
      <div className="max-w-xl w-full backdrop-blur-sm bg-[#16181c]/70 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.35)] p-6 sm:p-10 text-center border border-[#2a2a2a]/50 transition-all duration-300 hover:scale-[1.01] hover:border-[#3a3a3a]">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1D9BF0] mb-4 tracking-tight">
          404: Nothing to See Here
        </h1>

        <p className="text-sm sm:text-base text-[#888] italic mb-6">
          Either you’re lost or this page never existed. Who’s to say?
        </p>

        <p className="text-base sm:text-lg mb-6 text-[#d0d0d0]">
          You found the digital equivalent of a dead end. Congrats.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-2 rounded-full bg-[#1D9BF0] text-black font-semibold hover:bg-[#0a7acb] transition-colors text-sm sm:text-base shadow-md hover:shadow-lg"
        >
          Take Me Somewhere That Exists
        </Link>
      </div>
    </main>
  )
}