"use client";

import dynamic from "next/dynamic";

// Dynamically import the heavy Hero section (Spline etc.)
const XcusesHubHero = dynamic(() => import("@/components/common/hero").then(mod => mod.XcusesHubHero), {
  ssr: false, // Prevent server-side render to avoid hydration issues with WebGL
  loading: () => <div className="text-white text-center py-32">Loading interface...</div>,
});

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <XcusesHubHero />
    </main>
  );
}
