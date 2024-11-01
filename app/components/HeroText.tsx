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
    <div
      className={`${roboto.className} flex h-full items-center justify-center`}
    >
      <h1 className="text-center max-w-[220px] md:max-w-[440px] text-4xl md:text-7xl mr-12 font-bold ">
        <span>{text}</span>
        <Cursor cursorColor="yellow" />
      </h1>
    </div>
  );
};

export default HeroText;
