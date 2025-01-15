import Image from "next/image";
import hero from "../assets/LuPotrait_modified.png";

import React from "react";

const HeroImage = () => {
  return (
    <div>
      <Image
        src={hero}
        alt="Lu Ndovi"
        className="md:h-[646px] md:w-[450px] lg:h-[648px] lg:w-[500px]  nestHubMax:h-[664px]"
        priority // Ensures the image loads quickly as it's in the viewport
      />
    </div>
  );
};

export default HeroImage;
