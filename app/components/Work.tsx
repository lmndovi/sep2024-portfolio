"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import ggsmockup from "../assets/GGSMockUp.png";
import { Button } from "./ui/button";
import Link from "next/link";

const Work = () => {
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75 } },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75 } },
  };

  return (
    <div className="flex flex-col space-y-5 w-full h-screen">
      <h1 className="text-2xl font-semibold tracking-[5px] text-center my-16 border-8 border-black w-48 mx-auto uppercase px-6 py-3">
        Work
      </h1>

      <main className="grid grid-cols-1 mx-auto px-20">
        {/* Animation for larger screens */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-2">
          <motion.div
            id="workText"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInFromLeft}
          >
            <div className="space-y-6">
              <h2 className="text-center font-semibold text-2xl uppercase tracking-widest underline underline-offset-2 decoration-4">
                GG&#39;s Authentic Site
              </h2>
              <p className="text-sm tracking-wide md:px-10">
                An e-commerce website designed for a seamless shopping
                experience.
                <br />
                <br />
                Interactive features include:
              </p>
              <ul className="text-sm tracking-wide md:px-12 list-disc list-inside space-y-1">
                <li>
                  <strong>
                    Variant selectors, quantity controls, and image carousels
                  </strong>
                </li>
                <li>
                  <strong>Expandable Details</strong>
                </li>
                <li>
                  <strong>Algorithm-based recommendations</strong>
                </li>
              </ul>
              <p className="text-sm tracking-wide md:px-10 mt-4">
                Custom dropdowns, a hover-activated menu, and a mobile-friendly
                hamburger menu enable easy navigation, while advanced search,
                filters, and secure payment ensure smooth transactions.
              </p>
              <p className="text-sm tracking-wide md:px-10 mt-4">
                Marketing integrations like JudgeMe and Shopify Email, plus a
                discount opt-in form, boost engagement. Custom visuals and
                initial review data enhance the platform, creating a
                user-focused shopping experience.
              </p>
              <div className="flex flex-col items-center justify-center py-3">
                <Link
                  href="https://ggsauthentic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>View Website</Button>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            id="workImage"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInFromRight}
          >
            <Link
              href="https://ggsauthentic.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={ggsmockup}
                alt="ggsauthentic.com"
                className="h-full md:h-96 w-full md:w-screen"
              />
            </Link>
          </motion.div>
        </div>

        {/* Static layout for smaller screens */}
        <div className="block md:hidden space-y-5">
          <div id="workText" className="space-y-6">
            <h2 className="text-center font-semibold text-2xl uppercase tracking-widest underline underline-offset-2 decoration-4">
              GG&#39;s Authentic Site
            </h2>
            <p className="text-sm tracking-wide md:px-10">
              An e-commerce website designed for a seamless shopping experience.
              <br />
              <br />
              Interactive features include:
            </p>
            <ul className="text-sm tracking-wide md:px-12 list-disc list-inside space-y-1">
              <li>
                <strong>
                  Variant selectors, quantity controls, and image carousels
                </strong>
              </li>
              <li>
                <strong>Expandable Details</strong>
              </li>
              <li>
                <strong>Algorithm-based recommendations</strong>
              </li>
            </ul>
            <p className="text-sm tracking-wide md:px-10 mt-4">
              Custom dropdowns, a hover-activated menu, and a mobile-friendly
              hamburger menu enable easy navigation, while advanced search,
              filters, and secure payment ensure smooth transactions.
            </p>
            <p className="text-sm tracking-wide md:px-10 mt-4">
              Marketing integrations like JudgeMe and Shopify Email, plus a
              discount opt-in form, boost engagement. Custom visuals and initial
              review data enhance the platform, creating a user-focused shopping
              experience.
            </p>
            <div className="flex flex-col items-center justify-center py-3">
              <Link
                href="https://ggsauthentic.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>View Website</Button>
              </Link>
            </div>
          </div>
          <div id="workImage">
            <Link
              href="https://ggsauthentic.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={ggsmockup}
                alt="ggsauthentic.com"
                className="h-full md:h-96 w-full md:w-screen"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;
