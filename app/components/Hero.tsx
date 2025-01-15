import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 nestHubMax:grid-cols-2 ">
      <div
        id="heroText"
        className="flex flex-col h-96 nestHubMax:h-full justify-center items-center blackBerryPlayBook:h-[600px] galaxyTabS4:h-[700px] "
      >
        <HeroText />
      </div>
      <div
        className="hidden nestHubMax:flex items-end justify-center h-full pb-10 motion motion-preset-slide-left motion-delay-[700ms] motion-ease-spring-bouncier"
        id="heroImage"
      >
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
