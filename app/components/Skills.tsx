"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import SVG files
import CSS3 from "../assets/CSS3-w.svg";
import Figma from "../assets/Figma-w.svg";
import Git from "../assets/Git-w.svg";
import GitHub from "../assets/GitHubSocialIcon-w.svg";
import HTML5 from "../assets/HTML5-w.svg";
import Javascript from "../assets/Javascript-w.svg";
import Nextjs from "../assets/Nextjs-w.svg";
import NPM from "../assets/NPM-w.svg";
import PHP from "../assets/PHP-w.svg";
import Python from "../assets/Python-w.svg";
import ReactIcon from "../assets/React-w.svg"; // Renaming to avoid conflict with React
import Sanity from "../assets/Sanity-w.svg";
import ShadCN from "../assets/ui-w.svg";
import Shopify from "@/app/assets/Shopify-w.svg";
import TailwindCSS from "../assets/TailwindCSS-w.svg";
import TypeScript from "../assets/TypeScript-w.svg";
import Wordpress from "@/app/assets/Wordpress-w.svg";

// Define Skill type
interface Skill {
  name: string;
  icon: string;
}

// Organize skills into categories
const designSkills: Skill[] = [
  { name: "CSS3", icon: CSS3 },
  { name: "Figma", icon: Figma },
  { name: "Tailwind", icon: TailwindCSS },
];

const languageSkills: Skill[] = [
  { name: "HTML5", icon: HTML5 },
  { name: "JavaScript", icon: Javascript },
  { name: "PHP", icon: PHP },
  { name: "Python", icon: Python },
  { name: "TypeScript", icon: TypeScript },
];

const additionalSkills: Skill[] = [
  { name: "Git", icon: Git },
  { name: "GitHub", icon: GitHub },
  { name: "Next.js", icon: Nextjs },
  { name: "NPM", icon: NPM },
  { name: "React", icon: ReactIcon },
  { name: "Sanity", icon: Sanity },
  { name: "ShadCN", icon: ShadCN },
  { name: "Shopify", icon: Shopify },
  { name: "Wordpress", icon: Wordpress },
];

// Animation configuration
const slideInFromLeft = (delay: number) => ({
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, delay } },
});

const Skills = () => {
  const renderSkills = (skills: Skill[], category: string) => (
    <div className="my-5 blackBerryZ30:my-3 iphone12Pro:my-8">
      <h2 className="text-xl font-semibold mb-4 uppercase tracking-widest galaxyS9:text-md galaxyS9:my-3">
        {category}:
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6 galaxyS9:gap-2">
        {skills.map((skill: Skill) => (
          <div key={skill.name} className="flex flex-col items-center p-2 ">
            <Image
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="object-contain mb-2 w-10 md:w-12 opacity-60 galaxyS9:w-6"
            />
            <p className="text-sm mt-2 tracking-wider uppercase galaxyS9:text-xs">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full h-screen space-y-3 mb-48 md:mb-0">
      <h1 className="text-2xl font-semibold tracking-[5px] text-center mt-10 border-8 border-white w-48 mx-auto uppercase px-6 py-3 mb-10 md:mb-0 galaxyS9:my-8 galaxyZF5:my-12 blackBerryZ30:my-8">
        Skills
      </h1>
      <div className="flex flex-col items-start">
        {/* Animation for larger screens */}
        <div className="hidden md:block">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInFromLeft(0)}
            className="flex items-start"
          >
            {renderSkills(designSkills, "Design")}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInFromLeft(0.5)}
            className="flex items-start"
          >
            {renderSkills(languageSkills, "Languages")}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInFromLeft(1)}
            className="flex items-start"
          >
            {renderSkills(additionalSkills, "Tools")}
          </motion.div>
        </div>

        {/* Static layout for smaller screens */}
        <div className="block md:hidden">
          {renderSkills(designSkills, "Design")}
          {renderSkills(languageSkills, "Languages")}
          {renderSkills(additionalSkills, "Tools")}
        </div>
      </div>
    </div>
  );
};

export default Skills;
