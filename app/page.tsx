"use client";

import { SplineScene } from "@/components/ui/splite";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SplineSceneBasic } from "@/components/common/hero";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* Spline 3D Background */}
     <SplineSceneBasic />
    </main>
  );
}