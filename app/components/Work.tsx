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
      <h1 className="text-2xl font-semibold tracking-[5px] text-center my-16 border-8 border-black w-48 mx-auto uppercase px-6 py-3 galaxyS9:my-8 blackBerryZ30:my-8 blackBerryPlayBook:my-16">
        Work
      </h1>

      <main className="grid grid-cols-1 mx-auto px-20">
        {/* Animation for larger screens */}
        <div className="hidden nestHubMax:grid nestHubMax:grid-cols-2 nestHubMax:gap-2">
          <motion.div
            id="workText"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInFromLeft}
          >
            <div className="space-y-6">
              <h2 className="text-center font-semibold text-2xl uppercase tracking-widest underline underline-offset-2 decoration-4 ">
                GG&#39;s Authentic Site
              </h2>
              <p className="text-sm tracking-wide md:px-10">
                Designed an e-commerce website that boosted user engagement and
                generated measurable results for the client.
              </p>
              <ul className="text-sm tracking-wide md:px-12 list-disc list-inside space-y-2">
                <li>
                  <strong>
                    Sessions that reached checkout up increased by 433%
                  </strong>
                </li>
                <li>
                  <strong>
                    Several new orders, generating revenue of £134.80
                  </strong>
                </li>
              </ul>
              <ul className="text-sm tracking-wide md:px-12 list-disc list-inside space-y-1">
                <p className="my-4">Interactive Elements include:</p>
                <li>
                  <strong>Technologies:</strong>
                  Shopify, JavaScript, HTML5, CSS3, Tailwind CSS, Figma.
                  <strong>
                    Variant selectors, quantity controls, and image carousels
                  </strong>
                </li>
                <li>
                  <strong>Algorithm-based recommendations</strong>
                </li>
              </ul>
              <div className="flex flex-col items-center justify-center py-3">
                <Link
                  href="https://ggsauthentic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className=" py-5 px-10 rounded-md font-bold text-md cursor-pointer hover:bg-[#FDDA0D] hover:text-[#2b2b2b]">
                    View Website
                  </Button>
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
                className="h-full md:h-96 w-full md:w-screen asusVB:w-[650px]"
              />
            </Link>
          </motion.div>
        </div>

        {/* Static layout for smaller screens */}
        <div className="block nestHubMax:hidden space-y-16">
          <div
            id="workText"
            className="space-y-6 galaxyS9:space-y-4 blackBerryPlayBook:space-y-6"
          >
            <h2 className="text-center font-semibold text-2xl uppercase tracking-widest underline underline-offset-2 decoration-4 galaxyS9:text-base blackBerryPlayBook:text-2xl">
              GG&#39;s Authentic Site
            </h2>
            <p className="text-sm tracking-wide md:px-10 galaxyS9:text-xs blackBerryPlayBook:text-base">
              An e-commerce website with a theme designed from scratch, for a
              seamless shopping experience.
              <br />
              <br />
              <span className="galaxyS9:hidden galaxyZF5:block blackBerryZ30:hidden iphone12Pro:block">
                Interactive features include:
              </span>
            </p>
            <ul className="text-sm tracking-wide md:px-12 list-disc list-inside space-y-1 galaxyS9:hidden galaxyZF5:block blackBerryZ30:hidden iphone12Pro:block iphone12Pro:text-xs blackBerryPlayBook:text-base">
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
            <div className="hidden ipadPro:block">
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
            </div>

            <div className="flex flex-col items-center justify-center py-3 galaxyS9:py-0 galaxyZF5:py-3">
              <Link
                href="https://ggsauthentic.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="py-5 px-10 rounded-md font-bold text-lg cursor-pointer galaxyS9:text-sm galaxyS9:py-2 galaxyS9:px-5 blackBerryPlayBook:px-10 blackBerryPlayBook:py-6 blackBerryPlayBook:text-lg">
                  View Website
                </Button>
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
                className="mx-auto h-full ipadAir:h-96 w-full ipadAir:w-full surfaceDuo:w-72 blackBerryPlayBook:w-96 ipadMini:w-[500px] asusZBF:w-[550px] ipadPro:w-[600px]"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;
