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
        className="flex items-center justify-center "
      >
        <main className="grid grid-cols-1 asusZBF:grid-cols-3 gap-10 w-full px-16 asusZBF:max-w-[1400px] ipadAir:max-w-[700px]">
          <div className="my-10 asusZBF:pt-52">
            <h2 className=" text-[#FDDA0D] md:text-2xl font-semibold mb-4 uppercase tracking-widest galaxyS9:text-center galaxyS9:text-lg blackBerryPlayBook:text-2xl">
              Development
            </h2>
            <p className=" tracking-widest md:text-md md:text-left galaxyS9:text-xs galaxyS9:text-center blackBerryPlayBook:text-lg">
              I develop custom websites tailored to each client&#39;s goals,
              turning Figma designs into interactive interfaces and creating
              bespoke themes to match their vision.
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
            <h2 className="text-2xl text-[#FDDA0D] text-center font-semibold mb-4 uppercase tracking-widest">
              My Story
            </h2>
            <p className="text-md tracking-widest ipadMini:text-lg">
              During the pandemic, I discovered a passion for coding that led to
              a career shift. I delved into Python, JavaScript, TypeScript, and
              Shopify Liquid, transforming my curiosity into a professional
              path.
            </p>
          </div>

          <div className="my-4 asusZBF:pt-52 hidden md:block">
            <h2 className=" text-center text-[#FDDA0D] text-2xl font-semibold mb-4 uppercase tracking-widest">
              Design
            </h2>
            <p className="text-md tracking-widest ipadMini:text-lg">
              I design websites that reflect clients&#39; brands, blending
              aesthetics with functionality to enhance their image and user
              experience, aligning with their goals and values.
            </p>
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default AboutPage;
