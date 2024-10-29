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
import TailwindCSS from "../assets/TailwindCSS.svg";
import TypeScript from "../assets/TypeScript.svg";

// Organize skills into categories
const designSkills = [
  { name: "CSS3", icon: CSS3 },
  { name: "Figma", icon: Figma },
  { name: "Tailwind CSS", icon: TailwindCSS },
];

const languageSkills = [
  { name: "JavaScript", icon: Javascript },
  { name: "Python", icon: Python },
  { name: "TypeScript", icon: TypeScript },
];

const additionalSkills = [
  { name: "Git", icon: Git },
  { name: "GitHub", icon: GitHub },
  { name: "HTML5", icon: HTML5 },
  { name: "Next.js", icon: Nextjs },
  { name: "NPM", icon: NPM },
  { name: "PHP", icon: PHP },
  { name: "React", icon: ReactIcon },
  { name: "Sanity", icon: Sanity },
  { name: "ShadCN", icon: ShadCN },
];

const Skills = () => {
  const renderSkills = (skills, category) => (
    <div className="my-8">
      <h2 className="text-xl font-semibold mb-4 text-center">{category}</h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center p-2">
            <Image
              src={skill.icon}
              alt={`${skill.name} icon`}
              width={64}
              height={64}
              className="object-contain"
            />
            <p className="text-sm mt-2 tracking-widest">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full h-screen space-y-5 mb-48">
      <h1 className="text-2xl font-semibold tracking-[5px] text-center my-16 border-8 border-black w-48 mx-auto uppercase px-6 py-3">
        Skills
      </h1>
      <div className="w-[570px]">
        {renderSkills(designSkills, "Design")}
        {renderSkills(languageSkills, "Languages")}
        {renderSkills(additionalSkills, "Miscellaneous")}
      </div>
    </div>
  );
};

export default Skills;
