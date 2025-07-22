"use client";
import { useRoastStore } from "@/store/roastStore";
import ProfileHeader from "./ProfileHeader";
import TweetList from "./TweetList";
import Replies from "./Replies";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useRef, useCallback, useState } from "react";
import domtoimage from "dom-to-image-more";
import { useRouter } from "next/navigation";

const Panel = () => {
  const result = useRoastStore((state) => state.result);
  const screenshotRef = useRef<HTMLDivElement>(null); // Changed ref name for clarity
  const router = useRouter();
  const [isSharing, setIsSharing] = useState(false);

  if (!result)
    return (
      <div className="min-h-screen flex items-center justify-center  text-[#E7E9EA] font-sans">
        No result
      </div>
    );

  // Example metadata (role, website, join date)
  const role = "Full Stack Wannabe";
  const website = "https://github.com/" + result.handle.replace("@", "");
  const joinDate = result.joined;

  // Enhanced Share as image handler (captures everything)
  const handleShareImage = useCallback(async () => {
    if (!screenshotRef.current) return;
    setIsSharing(true);
    
    try {
      // Scroll to top to ensure we capture from the beginning
      window.scrollTo(0, 0);
      
      // Wait a moment for scroll to complete
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const dataUrl = await domtoimage.toPng(screenshotRef.current, {
        bgcolor: "#000000",
        cacheBust: true,
        quality: 1,
        pixelRatio: 2,
        width: screenshotRef.current.scrollWidth,
        height: screenshotRef.current.scrollHeight,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left',
          width: screenshotRef.current.scrollWidth + 'px',
          height: screenshotRef.current.scrollHeight + 'px',
          
          // 🔧 Fixes start here
          boxShadow: 'none',
          outline: 'none',
          borderRadius: '0px',
          filter: 'none',
        },
      });
      
      
      // Create download link
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${result.handle.replace("@", "")}-roast-profile.png`;
      link.click();
      
    } catch (err) {
      console.error("Screenshot failed:", err);
      
      // Fallback: Try with different options
      try {
        const fallbackDataUrl = await domtoimage.toJpeg(screenshotRef.current, {
          bgcolor: "#000000",
          quality: 0.95,
          pixelRatio: 1.5,
        });
        
        const link = document.createElement("a");
        link.href = fallbackDataUrl;
        link.download = `${result.handle.replace("@", "")}-roast-profile.jpg`;
        link.click();
        
      } catch (fallbackErr) {
        console.error("Fallback screenshot also failed:", fallbackErr);
        alert("Failed to capture screenshot. Please try again or check your browser compatibility.");
      }
    } finally {
      setIsSharing(false);
    }
  }, [result]);

  return (
    <div className="min-h-screen  text-[#E7E9EA] font-sans">
      {/* Fixed Header with Navigation & Share (outside screenshot area) */}
      <div className="sticky top-0 z-50 /90 backdrop-blur-sm border-b border-[#2F3336]">
        <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Go Back button */}
          <button
            onClick={() => router.back()}
            className="bg-[#16181C] border border-[#2F3336] rounded-full p-2 hover:bg-[#222] transition-colors shadow-md"
            aria-label="Go Back"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#E7E9EA]" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <h1 className="text-lg font-semibold">Profile Roast</h1>
          
          {/* Share button */}
          <button
            onClick={handleShareImage}
            className="bg-[#1D9BF0] hover:bg-[#1A8CD8] rounded-full px-4 py-2 transition-colors shadow-md flex items-center gap-2 text-sm font-medium"
            aria-label="Share as image"
            disabled={isSharing}
          >
            {isSharing ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Capturing...
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/>
                  <path d="M16 6l-4-4-4 4"/>
                  <path d="M12 2v14"/>
                </svg>
                Share
              </>
            )}
          </button>
        </div>
      </div>

      {/* Screenshot Area - Everything below will be captured */}
      <div ref={screenshotRef} className="">
        {/* Banner */}
        <div className="relative max-w-2xl mx-auto h-52 bg-[#16181C] border-b border-[#2F3336]">
          {/* Profile image overlays banner */}
          <div className="absolute left-6 bottom-[-64px] z-10">
            <img
              src={result.profile_image}
              alt={result.display_name}
              className="w-32 h-32 rounded-full border-4 border-black shadow-lg"
              crossOrigin="anonymous"
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 pt-20 pb-8">
          {/* Profile Header */}
          <div className="flex flex-col gap-2 border-b border-[#2F3336] pb-4">
            <div className="flex items-center gap-2 mt-2">
              <span className="text-2xl font-bold leading-tight">{result.display_name}</span>
              {result.verified_reason && (
                <span className="text-[#1D9BF0]" title={result.verified_reason}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 inline">
                    <path d="M12 2c-.6 0-1.1.3-1.4.8l-1.7 2.7-3.1.5c-.6.1-1 .6-1.1 1.2-.1.6.2 1.2.7 1.5l2.3 2.2-.5 3.1c-.1.6.1 1.2.6 1.5.5.3 1.1.3 1.6 0l2.7-1.7 2.7 1.7c.5.3 1.1.3 1.6 0 .5-.3.7-.9.6-1.5l-.5-3.1 2.3-2.2c.5-.3.8-.9.7-1.5-.1-.6-.5-1.1-1.1-1.2l-3.1-.5-1.7-2.7C13.1 2.3 12.6 2 12 2zm0 2.2l1.3 2.1c.2.3.5.5.9.6l2.4.4-1.7 1.6c-.3.3-.4.7-.3 1.1l.4 2.4-2.1-1.1c-.3-.2-.7-.2-1 0l-2.1 1.1.4-2.4c.1-.4 0-.8-.3-1.1l-1.7-1.6 2.4-.4c.4-.1.7-.3.9-.6L12 4.2z"/>
                  </svg>
                </span>
              )}
            </div>
            <div className="text-[#71767B] text-base">{result.handle}</div>
            <div className="text-base mt-2 mb-1">{result.bio}</div>
            <div className="flex flex-wrap gap-4 text-sm text-[#71767B] items-center">
              <span>🧑‍💻 {role}</span>
              <span className="text-[#1D9BF0]">{website}</span>
              <span>📅 {joinDate}</span>
            </div>
            <div className="flex gap-6 mt-2 text-sm">
              <span><span className="font-bold text-[#E7E9EA]">{result.following}</span> <span className="text-[#71767B]">Following</span></span>
              <span><span className="font-bold text-[#E7E9EA]">{result.followers}</span> <span className="text-[#71767B]">Followers</span></span>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="posts" className="mt-2">
            <TabsList className="flex w-full gap-2 border-b border-[#2F3336] px-1  rounded-none">
              <TabsTrigger
                value="posts"
                className="flex-1 py-3 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-[#1D9BF0] data-[state=active]:text-[#E7E9EA] text-[#71767B] rounded-none"
              >
                Posts
              </TabsTrigger>
              <TabsTrigger
                value="replies"
                className="flex-1 py-3 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-[#1D9BF0] data-[state=active]:text-[#E7E9EA] text-[#71767B] rounded-none"
              >
                Replies
              </TabsTrigger>
              <TabsTrigger
                value="media"
                className="flex-1 py-3 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-[#1D9BF0] data-[state=active]:text-[#E7E9EA] text-[#71767B] rounded-none"
              >
                Media
              </TabsTrigger>
              <TabsTrigger
                value="likes"
                className="flex-1 py-3 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-b-2 data-[state=active]:border-[#1D9BF0] data-[state=active]:text-[#E7E9EA] text-[#71767B] rounded-none"
              >
                Likes
              </TabsTrigger>
            </TabsList>

            {/* Posts Tab: Pinned Tweet + TweetList */}
            <TabsContent value="posts" className="pt-4">
              {/* Pinned Tweet Card */}
              <div className="border border-[#2F3336] rounded-xl bg-[#16181C] mb-4 p-4">
                <div className="flex items-center gap-2 text-xs text-[#71767B] mb-1">
                  <span>📌 Pinned</span>
                  <span>{result.joined}</span>
                </div>
                <div className="text-base mb-2">
                  {result.pinned_tweet}
                </div>
                {result.pinned_skills && result.pinned_skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {result.pinned_skills.map((skill: string, i: number) => (
                      <span key={i} className="bg-[#1D9BF0]/10 text-[#1D9BF0] px-2 py-1 rounded-full text-xs font-mono">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
              <TweetList tweets={result.tweets} latest_tweet_stats={result.latest_tweet_stats} />
            </TabsContent>

            {/* Replies Tab */}
            <TabsContent value="replies" className="pt-4">
              <Replies replies={result.replies} />
            </TabsContent>

            {/* Media Tab (placeholder) */}
            <TabsContent value="media" className="pt-4">
              <div className="text-center text-[#71767B] py-8">No media to show.</div>
            </TabsContent>

            {/* Likes Tab (placeholder) */}
            <TabsContent value="likes" className="pt-4">
              <div className="text-center text-[#71767B] py-8">No liked posts yet.</div>
            </TabsContent>
          </Tabs>

          {/* Watermark for meme sharing */}
          <div className="text-center mt-8 pt-4 border-t border-[#2F3336]">
            <div className="text-xs text-[#71767B]">Generated by RoastMyResume 🔥</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;