import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const PinnedTweet = ({ pinned_tweet, pinned_skills }: { pinned_tweet: string; pinned_skills?: string[] }) => (
  <Card className="w-full max-w-2xl mx-auto mb-6 border-blue-400">
    <CardContent className="py-6">
      <div className="text-base text-white font-medium mb-2">📌 <span className="font-semibold">Pinned Tweet</span></div>
      <div className="text-lg text-white mb-3">{pinned_tweet}</div>
      {pinned_skills && pinned_skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {pinned_skills.map((skill, i) => (
            <span key={i} className="bg-blue-900 text-blue-300 px-2 py-1 rounded-full text-xs font-mono">{skill}</span>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
);

export default PinnedTweet; 