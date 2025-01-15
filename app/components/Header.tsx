import * as React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="text-white py-5 px-5 md:px-20 galaxyS9:pl-10 galaxyTabS4:px-20 asusZBF:px-20 asusZBF:py-12">
      <nav className="flex justify-between items-center motion-preset-rebound-down motion-delay-[400ms]">
        <div>
          <Logo />
        </div>
        <div>
          <Navbar />
        </div>
      </nav>
    </div>
  );
};

export default Header;
