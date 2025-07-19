"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-[#E7E9EA] font-sans flex flex-col items-center justify-center px-2 sm:px-4 py-8 sm:py-16">
      <div className="max-w-lg w-full bg-[#16181C] rounded-2xl shadow-xl p-4 sm:p-8 border border-[#222] flex flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u/583231?v=4"
          alt="Creator Avatar"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-black shadow-lg mb-4"
        />
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-[#1D9BF0] text-center">About the Creator</h1>
        <p className="text-base sm:text-lg text-[#E7E9EA] mb-6 text-center">
          Meet the genius (or at least, that's what their mom says) behind AI Roast Judge.
        </p>
        <ul className="text-left text-sm sm:text-base space-y-3 mb-6 w-full max-w-xs sm:max-w-none mx-auto">
          <li>• Writes code that only sometimes works on the first try.</li>
          <li>• Believes <span className="text-[#1D9BF0]">console.log</span> is a valid debugging strategy.</li>
          <li>• Once fixed a bug by turning it off and on again. Twice.</li>
          <li>• Thinks "AI" stands for "Absolutely Infallible" (it doesn't).</li>
          <li>• Has more npm packages installed than friends.</li>
          <li>• Can turn coffee into sarcastic code reviews.</li>
          <li>• Dreams in dark mode. Nightmares in merge conflicts.</li>
        </ul>
        <Link href="/" className="inline-block mt-2 px-5 sm:px-6 py-2 rounded-full bg-[#1D9BF0] text-black font-semibold hover:bg-[#0a7acb] transition-colors text-sm sm:text-base">Go Home</Link>
      </div>
    </main>
  );
} 