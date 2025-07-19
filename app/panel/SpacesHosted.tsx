import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const SpacesHosted = ({ spaces_hosted }: { spaces_hosted: string[] }) => (
  <Card className="w-full max-w-2xl mx-auto mb-6 border-cyan-400">
    <CardTitle className="text-cyan-300 text-lg px-6 pt-6">🎙️ Spaces Hosted</CardTitle>
    <CardContent className="py-4 flex flex-col gap-3">
      {spaces_hosted.map((space, i) => (
        <div key={i} className="bg-cyan-900/60 text-cyan-100 rounded-lg px-4 py-2 font-mono shadow-sm">
          {space}
        </div>
      ))}
    </CardContent>
  </Card>
);

export default SpacesHosted; 