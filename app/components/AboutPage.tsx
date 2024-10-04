import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col space-y-5 w-full h-screen">
      <h1 className="text-4xl font-semibold tracking-[5px] text-center py-16">
        About
      </h1>
      <main className="flex flex-col items-center justify-center text-center space-y-8 mx-96 text-xl leading-9">
        <p>
          During the pandemic, I sought a career change and discovered a passion
          for coding. Starting with Python, I quickly expanded my skills to
          HTML, CSS, and JavaScript, eventually transitioning to TypeScript and
          mastering libraries and frameworks like React, Next.js, and
          TailwindCSS. My web development journey led me to work with
          FromSolvers, a Latin American startup, where I transformed Figma
          designs into interactive front-end experiences. Since then, I've
          freelanced, recently building a custom Shopify theme for a client,
          utilizing Shopify Liquid and TailwindCSS.
        </p>
        <p>
          With a background in economics and mathematics, I approach coding with
          a problem-solving mindset, blending logic with creativity. Outside of
          tech, I’ve thrived in team environments as a semi-pro footballer, and
          my love for continuous learning now extends to salsa dancing, where
          I’ve quickly progressed. Ultimately, I aim to merge my love of sport
          and tech to create impactful digital solutions.
        </p>
      </main>
    </div>
  );
};

export default AboutPage;
