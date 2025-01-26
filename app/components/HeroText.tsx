"use client";

import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["500", "800"],
});

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroText = () => {
  const [text] = useTypewriter({
    words: [
      "Hello, I am\nLu Ndovi",
      "Athlete.tsx, PlantDad.tsx, SalsaDancer.tsx",
      "<But-Mainly-Just-A-Programmer/>",
    ],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 70,
  });

  return (
    <div className={`${sourceCodePro.className} h-1/2`}>
      <h1 className="h-full text-center nestHubMax:max-w-[540px] text-5xl md:text-6xl mr-12 font-bold galaxyS9:max-w-[200px] galaxyS9:text-4xl blackBerryPlayBook:text-6xl blackBerryPlayBook:max-w-[330px] tracking-wider">
        <span>{text}</span>
        <Cursor cursorColor="yellow" />
      </h1>
    </div>
  );
};

export default HeroText;
