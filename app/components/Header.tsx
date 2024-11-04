import * as React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="text-white py-5 px-5 md:px-20">
      <nav className="flex justify-between items-center">
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
