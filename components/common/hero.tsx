"use client";

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "../ui/spotlight";
import { Button } from "../ui/button";
import Link from "next/link";
import FormDialog from "./formDialog";
import Navbar from "./Navbar";

export function XcusesHubHero() {
  return (
    <main className="w-full min-h-screen relative overflow-hidden ">
      {/* Floating Navbar */}
     

      {/* Spotlight background effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row h-full min-h-[calc(100vh-56px)] pt-28 md:pt-32">
        {/* Left Text Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 py-12 space-y-6 w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md leading-tight">
            Where Resumes Go To Cry
          </h1>
          <p className="text-lg md:text-xl text-primary/50 max-w-xl">
            Upload your resume and GitHub. Get judged by sarcastic AI. Brutal. Honest. Possibly offensive. Mostly hilarious.
          </p>
          <div className="w-full flex justify-center">
            <FormDialog />
          </div>
        </section>

        {/* Right 3D Section */}
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
