import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="./assets/icon.svg"
          alt="Logo"
          height={30}
          width={30}
          className="ipadPro:w-10"
        />
      </Link>
    </div>
  );
};

export default Logo;
