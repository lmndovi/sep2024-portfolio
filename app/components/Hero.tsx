import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div
        id="heroText"
        className="flex flex-col h-96 md:h-full justify-center items-center"
      >
        <HeroText />
      </div>
      <div className="hidden md:block" id="heroImage">
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
