import React from "react";
import Image from "next/image";

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

const Skills = () => {
  const renderSkills = (skills: Skill[], category: string) => (
    <div className="my-4">
      <h2 className="text-xl font-semibold mb-4 uppercase tracking-widest">
        {category}:
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {skills.map((skill: Skill) => (
          <div key={skill.name} className="flex flex-col items-center p-2">
            <Image
              src={skill.icon}
              alt={`${skill.name} icon`}
              // width={64}
              // height={64}
              className="object-contain mb-2 w-10 md:w-24"
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
    <div className="flex flex-col items-center w-full h-screen space-y-5 mb-48">
      <h1 className="text-2xl font-semibold tracking-[5px] text-center mt-16 border-8 border-black w-48 mx-auto uppercase px-6 py-3">
        Skills
      </h1>
      <div className="flex flex-col items-start">
        {renderSkills(designSkills, "Design")}
        {renderSkills(languageSkills, "Languages")}
        {renderSkills(additionalSkills, "Miscellaneous")}
      </div>
    </div>
  );
};

export default Skills;
