import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="relative grid grid-cols-1  h-full nestHubMax:grid-cols-2 nestHubMax:h-full">
      <div
        id="heroText"
        className="flex flex-col h-full justify-center items-center "
      >
        <HeroText />
      </div>
      <div
        className="motion motion-preset-slide-left motion-delay-[700ms] motion-ease-spring-bouncier relative hidden nestHubMax:flex nestHubMax:h-full"
        id="heroImage"
      >
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
