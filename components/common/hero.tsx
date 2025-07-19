"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "../ui/spotlight";
import { Button } from "../ui/button";
import Link from "next/link";
import FormDialog from "./formDialog";

export function SplineSceneBasic() {
  return (
    <main className="w-full min-h-screen relative overflow-hidden bg-black">
      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-30 max-w-2xl w-[90vw] md:w-[700px] bg-black/80 rounded-2xl shadow-xl flex items-center justify-between px-6 py-3 backdrop-blur-md border border-[#222]">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold ">AI Roast Judge</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-[#E7E9EA] hover:text-[#1D9BF0] text-base font-medium transition-colors">About Us</Link>
        </div>
      </nav>

      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="flex flex-col md:flex-row h-full min-h-[calc(100vh-56px)] pt-28 md:pt-32">
        {/* Left content */}
        <section className="flex flex-col items-center justify-center text-center px-6 py-12 space-y-6 w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md leading-tight">
            Get Roasted by AI Judges
          </h1>
          <p className="text-lg md:text-xl text-primary/50 max-w-xl">
            Upload your resume and GitHub, let the sarcastic panel of AI judges tear you apart. Brutally honest. Hilariously accurate.
          </p>
          <div className="w-full flex justify-center">
            <FormDialog />
          </div>
        </section>

        {/* Right content */}
        <div className="flex-1 relative min-h-[300px] h-[350px] md:h-auto w-full md:w-1/2">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

     
    </main>
  );
}
