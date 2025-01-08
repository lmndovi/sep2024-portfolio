"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import SVG files
import CSS3 from "../assets/CSS3.svg";
import Figma from "../assets/Figma.svg";
import Git from "../assets/Git.svg";
import GitHub from "../assets/GitHub.svg";
import HTML5 from "../assets/HTML5.svg";
import Javascript from "../assets/Javascript.svg";
import Nextjs from "../assets/Nextjs.svg";
import NPM from "../assets/NPM.svg";
import PHP from "../assets/PHP.svg";
import Python from "../assets/Python.svg";
import ReactIcon from "../assets/React.svg"; // Renaming to avoid conflict with React
import Sanity from "../assets/Sanity.svg";
import ShadCN from "../assets/ShadCN.svg";
import Shopify from "@/app/assets/Shopify.svg";
import TailwindCSS from "../assets/TailwindCSS.svg";
import TypeScript from "../assets/TypeScript.svg";
import Wordpress from "@/app/assets/Wordpress.svg";

// Define Skill type
interface Skill {
  name: string;
  icon: string;
}

// Organize skills into categories
const designSkills: Skill[] = [
  { name: "CSS3", icon: CSS3 },
  { name: "Figma", icon: Figma },
  { name: "Tailwind CSS", icon: TailwindCSS },
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
    <div className="my-2 ">
      <h2 className="text-xl font-semibold mb-4 uppercase tracking-widest">
        {category}:
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {skills.map((skill: Skill) => (
          <div key={skill.name} className="flex flex-col items-center p-2 ">
            <Image
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="object-contain mb-2 w-10 md:w-16 hover:motion-preset-spin motion-duration-2000"
            />
            <p className="text-sm mt-2 tracking-widest uppercase">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full h-screen space-y-3 mb-48">
      <h1 className="text-2xl font-semibold tracking-[5px] text-center mt-10 border-8 border-black w-48 mx-auto uppercase px-6 py-3">
        Skills
      </h1>
      <div className="flex flex-col items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideInFromLeft(0)}
        >
          {renderSkills(designSkills, "Design")}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideInFromLeft(0.5)}
        >
          {renderSkills(languageSkills, "Languages")}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideInFromLeft(1)}
        >
          {renderSkills(additionalSkills, "Tools")}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
