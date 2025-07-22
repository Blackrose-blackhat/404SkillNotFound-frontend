import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";
import Navbar from "@/components/common/Navbar"; // 💡 Add your actual navbar path
import LayoutWrapper from "@/Provider/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XcusesHub – Your Dev Excuses Portfolio",
  description:
    "Upload resume, GitHub and get a fake dev profile that screams hire me ironically.",
  metadataBase: new URL("https://xcuseshub.vercel.app"),
  openGraph: {
    title: "XcusesHub",
    description: "Where your skills are optional, but sarcasm isn't.",
    url: "https://xcuseshub.vercel.app",
    siteName: "XcusesHub",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "XcusesHub – Hire me ironically",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XcusesHub",
    description: "Dev portfolio, but make it sarcastic.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://xcuseshub.vercel.app" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Musharaf Parwej" />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster />
          <LayoutWrapper>{children}</LayoutWrapper>{" "}
          {/* 🔥 Conditionally padded */}
        </ThemeProvider>
      </body>
    </html>
  );
}
