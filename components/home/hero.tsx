"use client";

import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-12 py-16 px-4 text-center  max-h-[100vh] w-full">
      <AnimatedGradientText className="z-10 bg-white text-black">
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          Buildnow AI V 2.0 Coming Jan 2025!
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>

      <div className="flex items-center flex-col gap-4 z-10 text-black">
        <h1 className="font-bold text-6xl">Buildnow.ai</h1>
        {/* <GradualSpacing
          className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="Buildnow.ai"
        /> */}
        <h2 className="font-semibold text-4xl">
          AI-Enhanced Workforce for Contact Centers
        </h2>
        <p className="font-medium text-black">
          Digital Workers That Train Your Team, Provide Video Answers, And Make
          Calls!
        </p>
      </div>

      <div className="flex gap-3">
        {/* <Button size="lg" className="z-10">
          Contact Us
        </Button> */}
        <Button
          size="lg"
          className="z-10"
          onClick={() => {
            window.open(
              "https://calendly.com/aditya-bahl/buildnow-ai-demo?month=2024-12",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          Contact Us!
        </Button>
      </div>

      {/* <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[0%] h-[100%] skew-y-12"
        )}
      /> */}
    </section>
  );
}
