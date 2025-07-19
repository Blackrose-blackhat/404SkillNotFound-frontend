import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Replies = ({ replies }: { replies: string[] }) => (
  <Card className="w-full max-w-2xl mx-auto mb-6 border-gray-400">
    <CardTitle className="text-gray-300 text-lg px-6 pt-6">🗨️ Replies</CardTitle>
    <CardContent className="py-4 flex flex-col gap-3">
      {replies.map((reply, i) => (
        <div key={i} className="bg-gray-900/60 text-gray-100 rounded-lg px-4 py-2 font-mono shadow-sm border-l-4 border-gray-400">
          {reply}
        </div>
      ))}
    </CardContent>
  </Card>
);

export default Replies; 