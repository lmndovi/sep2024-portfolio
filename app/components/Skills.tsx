import React from "react";

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
import TailwindCSS from "../assets/TailwindCSS.svg";
import TypeScript from "../assets/TypeScript.svg";
import Image from "next/image";

// Array of skills with each imported SVG
const skills = [
  { name: "CSS3", icon: CSS3 },
  { name: "Figma", icon: Figma },
  { name: "Git", icon: Git },
  { name: "GitHub", icon: GitHub },
  { name: "HTML5", icon: HTML5 },
  { name: "JavaScript", icon: Javascript },
  { name: "Next.js", icon: Nextjs },
  { name: "NPM", icon: NPM },
  { name: "PHP", icon: PHP },
  { name: "Python", icon: Python },
  { name: "React", icon: ReactIcon },
  { name: "Sanity", icon: Sanity },
  { name: "ShadCN", icon: ShadCN },
  { name: "TailwindCSS", icon: TailwindCSS },
  { name: "TypeScript", icon: TypeScript },
];

const Skills = () => {
  return (
    <div className="flex flex-col space-y-5 w-full h-screen">
      <h1 className="text-2xl font-semibold tracking-[5px] text-center my-16 border-8 border-black w-48 mx-auto uppercase px-6 py-3">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center items-center space-x-6 space-y-6 w-[520px] mx-auto">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <Image
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="w-16 h-16"
            />
            <p className="text-sm mt-2 tracking-widest uppercase ">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
