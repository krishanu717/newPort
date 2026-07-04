import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Krishanu Mondal | Developer Portfolio",
  description: "Krishanu Mondal — Frontend developer building calm, accessible, and polished web experiences with React, Next.js, and TypeScript.",
};

import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Noise } from "@/components/ui/Noise";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Noise />
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
