import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export type LatestTweetStats = {
  likes: number;
  retweets: number;
  replies: number;
  ratioed: boolean;
};

const TweetList = ({ tweets, latest_tweet_stats }: { tweets: string[]; latest_tweet_stats: LatestTweetStats }) => (
  <Card className="w-full max-w-2xl mx-auto mb-6 border-gray-700">
    <CardContent className="py-6 space-y-6">
      {tweets.map((tweet, i) => (
        <div key={i} className="border-b border-gray-800 pb-4 last:border-b-0">
          <div className="text-white text-base mb-2">{tweet}</div>
          {i === 0 && (
            <div className="flex gap-4 text-xs text-muted-foreground mt-1">
              <span>❤️ {latest_tweet_stats.likes}</span>
              <span>🔁 {latest_tweet_stats.retweets}</span>
              <span>💬 {latest_tweet_stats.replies}</span>
              {latest_tweet_stats.ratioed && <span className="text-red-400">Ratioed</span>}
            </div>
          )}
        </div>
      ))}
    </CardContent>
  </Card>
);

export default TweetList; 