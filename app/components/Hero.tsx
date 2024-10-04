import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="grid grid-cols-2">
      <div id="heroText">
        <HeroText />
      </div>
      <div id="heroImage" className="">
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
