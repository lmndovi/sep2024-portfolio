"use client";

import { Roboto } from "next/font/google";

// Import Convergence font from Google Fonts
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroText = () => {
  const [text] = useTypewriter({
    words: [
      "Hello, I am Lu Ndovi",
      "Athlete.tsx, PlantDad.tsx, SalsaDancer.tsx",
      "<But-Mainly-Just-A-Programmer/>",
    ],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 70,
  });

  return (
    <div className={`${roboto.className} h-1/2`}>
      <h1 className="h-full  text-center nestHubMax:max-w-[440px] text-5xl md:text-7xl mr-12 font-bold galaxyS9:max-w-[200px] galaxyS9:text-4xl blackBerryPlayBook:text-6xl blackBerryPlayBook:max-w-[330px]">
        <span>{text}</span>
        <Cursor cursorColor="yellow" />
      </h1>
    </div>
  );
};

export default HeroText;
