import Image from "next/image";
import hero from "../assets/LuPotrait_modified.png";

import React from "react";

const HeroImage = () => {
  return (
    <div className="absolute bottom-0 w-full justify-center hidden nestHubMax:flex">
      <Image
        src={hero}
        alt="Lu Ndovi"
        className="h-auto object-cover 
       max-w-full nestHubMax:max-w-[60%] 2xl:max-w-[60%]"
        priority // Ensures the image loads quickly as it's in the viewport
      />
    </div>
  );
};

export default HeroImage;
