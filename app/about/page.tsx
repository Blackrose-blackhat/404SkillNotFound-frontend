"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#101112] text-[#D1D5DB] font-sans flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full bg-[#1a1b1e] rounded-2xl shadow-xl border border-[#2A2A2A] p-10 space-y-10 transition-all duration-300 ease-in-out">
        {/* Avatar & Intro */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt="Creator Avatar"
            className="w-24 h-24 rounded-full border border-[#2A2A2A] shadow-md"
          />
          <h1 className="text-3xl font-semibold text-white">Meet The Genius™</h1>
          <p className="text-sm text-[#9CA3AF] max-w-md">
            Creator of this sarcastic masterpiece. Mostly harmless. Somewhat caffeinated. Dubiously qualified.
          </p>
        </div>

        {/* Skills */}
        <ul className="space-y-2 text-sm text-[#B0B3B8] pl-4">
          {[
            "🔹 Debugs by vibes and vibes alone.",
            "🔹 Once built a feature that even surprised them when it worked.",
            "🔹 Proud advocate of “temporary hacks” since 2018.",
            "🔹 Thinks TypeScript is a personality trait.",
            "🔹 Has a PhD in Stack Overflow SEO.",
            "🔹 Calls it “AI” so they don’t have to call it “guesswork”.",
          ].map((point, i) => (
            <li key={i} className="leading-relaxed list-inside list-disc">
              {point}
            </li>
          ))}
        </ul>

        {/* Judge My Skills */}
        <div className="bg-[#121314] border border-[#2F2F2F] rounded-xl p-5 text-sm text-[#B0B3B8] space-y-3">
          <h2 className="text-lg font-semibold text-white">Judge My Skills</h2>
          <p>
            This project? A digital exhibition of all my questionable design decisions.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>UI? Tailwind + vibes.</li>
            <li>Logic? Duct tape + false confidence.</li>
            <li>Performance? If it loads, it's good enough.</li>
            <li>Security? Please don’t inspect element.</li>
          </ul>
          <p>
            You’re welcome to roast me — gently — through this project. It’s held together with optimism and caffeine.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-[#121314] border border-[#2F2F2F] rounded-xl p-4 text-xs text-[#6B7280] italic text-center">
          ⚠️ This page exists to imply the creator knows what they’re doing. Confidence not included.
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-2 rounded-full bg-[#1D9BF0] text-black font-medium hover:bg-[#0f78c6] transition-colors duration-200"
          >
            Escape the Cringe
          </Link>
        </div>
      </div>
    </main>
  );
}
