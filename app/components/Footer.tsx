import * as React from "react";
import Link from "next/link";
import { cva } from "class-variance-authority";

import Twitter from "../assets/Twitter.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import GitHubIcon from "../assets/GitHubSocialIcon.svg";
import Image from "next/image";

// Custom styles for the footer links
const footerLinkStyle = cva(
  "text-[#D7D7D7] text-md font-medium transition-colors hover:text-[#FDDA0D]"
);

const Footer = () => {
  return (
    <footer className="bg-black px-5 py-10 mt-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div>
          <p className="text-lg text-[#D7D7D7]">
            © 2024 Lu Ndovi. All Rights Reserved.
          </p>
        </div>
        <nav>
          <ul className="flex space-x-4">
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
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkStyle()}
          >
            <Image src={Twitter} alt="Twitter" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkStyle()}
          >
            <Image src={LinkedIn} alt="Twitter" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkStyle()}
          >
            <Image src={GitHubIcon} alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
