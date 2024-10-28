import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col space-y-5 w-full h-screen">
      <h1 className="text-2xl font-semibold tracking-[5px] text-center my-16 border-8 border-black w-48 mx-auto uppercase px-6 py-3">
        About
      </h1>
      <main className="flex flex-col items-center justify-center text-center space-y-8 mx-96 text-xl leading-10">
        <p>
          During the pandemic, I discovered a passion for coding, which led to a
          career change. I’ve since worked with languages like Python,
          JavaScript, TypeScript, and Shopify Liquid to build dynamic web
          solutions. This includes transforming Figma designs into interactive
          front-end experiences for the Latin American startup FromSolvers. More
          recently, I’ve freelanced, including building bespoke Shopify themes.
        </p>
        <p>
          With a background in economics and mathematics, I approach coding with
          a problem-solving mindset that blends logic and creativity. Outside of
          tech, I’ve thrived in team environments as a semi-pro footballer and
          now pursue continuous learning through salsa dancing. My goal is to
          merge my passions for sport and tech to create impactful digital
          solutions.
        </p>
      </main>
    </div>
  );
};

export default AboutPage;
