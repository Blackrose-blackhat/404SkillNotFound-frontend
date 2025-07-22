import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tooltip } from "@/components/ui/tooltip";

export type TwitterProfile = {
  handle: string;
  display_name: string;
  verified_reason?: string;
  bio: string;
  location: string;
  followers: number;
  following: number;
  joined: string;
  profile_image: string;
  banner_caption?: string;
};

const ProfileHeader = ({ profile }: { profile: TwitterProfile }) => {
  return (
    <Card className="w-full max-w-2xl mx-auto mb-6">
      <CardHeader className="flex flex-col items-center bg-gradient-to-r from-blue-900/60 to-black/60 rounded-t-xl">
        <img
          src={profile.profile_image}
          alt={profile.display_name}
          className="w-28 h-28 rounded-full border-4 border-blue-400 shadow-lg mt-4"
        />
        <div className="flex items-center gap-2 mt-4">
          <CardTitle className="text-2xl font-bold">{profile.display_name}</CardTitle>
          {profile.verified_reason && (
            <Tooltip>
              <span className="text-blue-400 ml-1" title={profile.verified_reason}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline"><path d="M12 2c-.6 0-1.1.3-1.4.8l-1.7 2.7-3.1.5c-.6.1-1 .6-1.1 1.2-.1.6.2 1.2.7 1.5l2.3 2.2-.5 3.1c-.1.6.1 1.2.6 1.5.5.3 1.1.3 1.6 0l2.7-1.7 2.7 1.7c.5.3 1.1.3 1.6 0 .5-.3.7-.9.6-1.5l-.5-3.1 2.3-2.2c.5-.3.8-.9.7-1.5-.1-.6-.5-1.1-1.1-1.2l-3.1-.5-1.7-2.7C13.1 2.3 12.6 2 12 2zm0 2.2l1.3 2.1c.2.3.5.5.9.6l2.4.4-1.7 1.6c-.3.3-.4.7-.3 1.1l.4 2.4-2.1-1.1c-.3-.2-.7-.2-1 0l-2.1 1.1.4-2.4c.1-.4 0-.8-.3-1.1l-1.7-1.6 2.4-.4c.4-.1.7-.3.9-.6L12 4.2z"/></svg>
                <span className="sr-only">{profile.verified_reason}</span>
              </span>
              <div className="text-xs px-2 py-1">{profile.verified_reason}</div>
            </Tooltip>
          )}
       
        </div>
        <CardDescription className="text-lg text-muted-foreground">{profile.handle}</CardDescription>
        <div className="mt-2 text-center text-base text-white font-medium max-w-xl">{profile.bio}</div>
        <div className="flex flex-wrap gap-4 justify-center mt-4 text-sm text-muted-foreground">
          <span>📍 {profile.location}</span>
          <span>🗓️ {profile.joined}</span>
          <span>👥 <b>{profile.followers}</b> Followers</span>
          <span>🔗 <b>{profile.following}</b> Following</span>
        </div>
        {profile.banner_caption && (
          <div className="mt-4 text-center text-blue-300 italic text-base">{profile.banner_caption}</div>
        )}
      </CardHeader>
    </Card>
  );
};

export default ProfileHeader; 