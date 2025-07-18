"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "../ui/spotlight";
import { Button } from "../ui/button";
import Link from "next/link";
import FormDialog from "./formDialog";

export function SplineSceneBasic() {
  return (
    <main className="w-full h-screen b relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex h-full">
        {/* Left content */}
        <section className="flex flex-col items-center justify-center text-center px-6   space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
            Get Roasted by AI Judges
          </h1>
          <p className="text-lg md:text-xl text-primary/50 max-w-xl">
            Upload your resume and GitHub, let the sarcastic panel of AI judges
            tear you apart. Brutally honest. Hilariously accurate.
          </p>
            
           
              <FormDialog />
            
        
        </section>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full "
          />
        </div>
      </div>
    </main>
  );
}
