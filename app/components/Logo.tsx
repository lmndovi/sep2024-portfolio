import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="./assets/icon.svg" alt="Logo" height={30} width={30} />
    </div>
  );
};

export default Logo;
