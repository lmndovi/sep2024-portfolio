import * as React from "react";
import Link from "next/link";
import { cva } from "class-variance-authority";

import LinkedIn from "../assets/LinkedIn.svg";
import GitHubIcon from "../assets/GitHubSocialIcon.svg";
import Image from "next/image";

// Custom styles for the footer links
const footerLinkStyle = cva(
  "text-[#D7D7D7] text-md font-medium transition-colors hover:text-[#FDDA0D]"
);

const Footer = () => {
  return (
    <footer className="bg-black px-5 py-10 w-screen blackBerryZ30:py-2 ipadAir:pb-10">
      <div className="flex flex-col asusZBF:flex-row space-y-6 justify-between items-center max-w-6xl mx-auto ipadAir:space-y-10">
        <div className="galaxyS9:hidden asusZBF:block">
          <p className="text-lg text-[#D7D7D7] galaxyS9:text-sm">
            © 2024 Developed & designed by Lu Ndovi.
          </p>
        </div>
        <nav>
          <ul className="flex flex-col asusZBF:flex-row items-center justify-center asusZBF:space-x-4 asusZBF:space-y-0 space-y-2 ipadAir:text-xl">
            <li>
              <Link href="/" className={footerLinkStyle()}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className={footerLinkStyle()}>
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className={footerLinkStyle()}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#work" className={footerLinkStyle()}>
                Work
              </Link>
            </li>
            <li>
              <Link href="#contact" className={footerLinkStyle()}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <Link
            href="https://github.com/lmndovi"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src={GitHubIcon}
              alt="Twitter"
              className="transition-transform transform group-hover:scale-110 group-hover:filter group-hover:brightness-125"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/lu-ndovi-713819208/?originalSubdomain=uk"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src={LinkedIn}
              alt="Twitter"
              className="transition-transform transform group-hover:scale-110 group-hover:filter group-hover:brightness-125"
            />
          </Link>
        </div>
        <div className="asusZBF:hidden">
          <p className="text-lg text-[#D7D7D7] galaxyS9:text-sm">
            © 2024 Developed & designed by Lu Ndovi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
