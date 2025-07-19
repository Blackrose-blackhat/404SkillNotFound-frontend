import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Endorsements = ({ endorsements }: { endorsements: string[] }) => (
  <Card className="w-full max-w-2xl mx-auto mb-6 border-yellow-400">
    <CardTitle className="text-yellow-300 text-lg px-6 pt-6">💬 Endorsements</CardTitle>
    <CardContent className="py-4 flex flex-col gap-3">
      {endorsements.map((endorsement, i) => (
        <div key={i} className="bg-yellow-900/60 text-yellow-100 rounded-lg px-4 py-2 font-mono shadow-sm border-l-4 border-yellow-400">
          {endorsement}
        </div>
      ))}
    </CardContent>
  </Card>
);

export default Endorsements; 