import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen space-y-5">
      <h1 className="text-2xl font-semibold tracking-[5px] text-center my-16 border-8 border-black w-48 mx-auto uppercase px-6 py-3">
        About
      </h1>
      <div className="flex items-center justify-center">
        <main className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full px-12">
          <div className="my-4 md:pt-60">
            <h2 className="text-center text-2xl font-semibold mb-4 uppercase tracking-widest">
              Development
            </h2>
            <p className="text-md tracking-wide">
              As a developer, I build websites from the ground up, catering to
              each client’s specific goals. From transforming Figma designs into
              interactive interfaces to creating bespoke Shopify themes, I
              ensure every aspect of a site aligns with the client’s unique
              needs and vision.
            </p>
          </div>

          <div className="my-4">
            <h2 className="text-2xl text-center font-semibold mb-4 uppercase tracking-widest">
              Story
            </h2>
            <p className="text-md tracking-wide">
              During the pandemic, I discovered a passion for coding that
              inspired a career shift. Driven by curiosity and creativity, I
              immersed myself in programming languages like Python, JavaScript,
              TypeScript, and Shopify Liquid, turning this new-found passion
              into a professional journey.
            </p>
          </div>

          <div className="my-4 md:pt-60">
            <h2 className=" text-center text-2xl font-semibold mb-4 uppercase tracking-widest">
              Design
            </h2>
            <p className="text-md tracking-wide">
              I work with clients to design websites that represent their brand
              and ethos effectively. Combining aesthetic choices with
              functionality, I help create digital spaces that enhance their
              image and user experience, ensuring the website aligns seamlessly
              with their goals and values.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;
