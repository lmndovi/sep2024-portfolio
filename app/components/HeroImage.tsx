import Image from "next/image";
import hero from "../assets/LuPotrait_modified.png";

import React from "react";

const HeroImage = () => {
  return (
    <div className="absolute bottom-0  right-0 h-full">
      <Image
        src={hero}
        alt="Lu Ndovi"
        className="h-full w-full object cover"
        priority // Ensures the image loads quickly as it's in the viewport
      />
    </div>
  );
};

export default HeroImage;
