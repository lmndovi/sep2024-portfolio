import Image from "next/image";
import hero from "../assets/LuPotrait_modified.png";

import React from "react";

const HeroImage = () => {
  return (
    <div>
      <Image src={hero} alt="Lu Ndovi" className="h-[652px] w-[500px]" />
    </div>
  );
};

export default HeroImage;
