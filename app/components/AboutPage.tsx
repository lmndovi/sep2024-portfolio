"use client";
import { motion } from "framer-motion";
import profilePic from "@/app/assets/githubPortfolio.jpg";
import Image from "next/image";

import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen space-y-5 mb-0 md:mb-0 blackBerryZ30:space-y-0">
      <h1 className="text-2xl font-semibold tracking-[5px] text-center my-16 border-8 border-white w-48 mx-auto uppercase px-6 py-3 galaxyS9:my-6 galaxyZF5:my-12 blackBerryZ30:my-8 blackBerryPlayBook:my-16 galaxyTabS4:my-16">
        About
      </h1>
      <motion.div
        initial={{ scale: 0.5, rotate: 45, filter: "blur(10px)" }}
        whileInView={{ scale: 1, rotate: 0, filter: "blur(0px)" }}
        transition={{
          scale: { duration: 0.75 },
          rotate: { duration: 0.75, delay: 0.75 },
          filter: { duration: 0.75, delay: 0.75 },
        }}
        viewport={{ once: true }}
        className="flex items-center justify-center h-full"
      >
        <main className="flex flex-col nestHubMax:flex-row gap-5 w-full px-16 nestHubMax:max-w-6xl ipadPro:max-w-[700px] justify-center items-center nestHubMax:h-full">
          <div className="my-10 nestHubMax:my-4">
            <h2 className=" text-[#FDDA0D] md:text-2xl font-light mb-4 uppercase tracking-[6px] galaxyS9:text-center galaxyS9:text-lg blackBerryPlayBook:text-2xl ipadPro:text-3xl">
              Development
            </h2>
            <p className=" tracking-widest md:text-md md:text-left galaxyS9:text-xs galaxyS9:text-center blackBerryPlayBook:text-lg nestHubMax:text-xl nestHubMax:font-normal nestHubMax:text-left">
              As a full-stack developer from London, I thrive on transforming
              clients&#39; passion projects into engaging and accessible digital
              experiences.
            </p>
          </div>
          <div className="md:hidden mx-auto blackBerryZ30:h-60 iphone12Pro:h-full surfaceDuo:h-80 blackBerryPlayBook:h-96 galaxyTabS4:h-[600px]">
            <Image
              src={profilePic}
              alt="mobile profile picture"
              className="h-full w-full rounded-3xl"
            />
          </div>

          <div className="my-4 hidden md:block">
            <h2 className="text-2xl text-[#FDDA0D] text-center font-light mb-4 uppercase tracking-[6px] ipadPro:text-3xl">
              Journey
            </h2>
            <p className="text-md tracking-widest ipadMini:text-lg nestHubMax:text-xl nestHubMax:font-normal nestHubMax:text-left">
              After taking a break post-university to pursue a career in
              football, I decided to teach myself how to code during the
              pandemic (because why not?!).
            </p>
          </div>

          <div className="my-4 hidden md:block">
            <h2 className=" text-center text-[#FDDA0D] text-2xl font-light mb-4 uppercase tracking-[6px] ipadPro:text-3xl">
              Interests
            </h2>
            <p className="text-md tracking-widest ipadMini:text-lg nestHubMax:text-xl nestHubMax:font-normal nestHubMax:text-left">
              When not coding, you&#39;ll find me salsa dancing, meditating, or
              experimenting in the kitchen. I&#39;m also a (struggling) plant
              dad, wannabe fashionista and history nerd.
            </p>
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default AboutPage;
