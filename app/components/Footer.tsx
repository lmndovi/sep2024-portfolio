import * as React from "react";
import Link from "next/link";
import { cva } from "class-variance-authority";

// Custom styles for the footer links
const footerLinkStyle = cva(
  "text-[#D7D7D7] text-md font-medium transition-colors hover:text-black"
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
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkStyle()}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkStyle()}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
