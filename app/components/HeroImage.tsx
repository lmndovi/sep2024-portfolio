import Image from "next/image";
import hero from "../assets/LuPotrait_modified.png";

import React from "react";

const HeroImage = () => {
  return (
    <div>
      <Image
        src={hero}
        alt="Lu Ndovi"
        className="md:h-[646px] md:w-[450px] lg:h-[648px] lg:w-[500px]  nestHubMax:h-[664px] asusVB:h-[721.5px] 1920by1080:h-[943px] 1920by1080:w-[640px] myDesktop:h-[594px] myDesktop:w-[480px] anaMacBook:h-[738px] anaMacBook:w-[550px]"
        priority // Ensures the image loads quickly as it's in the viewport
      />
    </div>
  );
};

export default HeroImage;
