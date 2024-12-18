import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen space-y-5">
      <h1 className="text-2xl font-semibold tracking-[5px] text-center my-16 border-8 border-black w-48 mx-auto uppercase px-6 py-3">
        About
      </h1>
      <div className="flex items-center justify-center">
        <main className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full px-16 md:max-w-[1400px]">
          <div className="my-4 md:pt-52">
            <h2 className="text-center text-2xl font-semibold mb-4 uppercase tracking-widest">
              Development
            </h2>
            <p className="text-md tracking-widest">
              I develop custom websites tailored to each client&#39;s goals,
              turning Figma designs into interactive interfaces and creating
              bespoke themes to match their vision.
            </p>
          </div>

          <div className="my-4">
            <h2 className="text-2xl text-center font-semibold mb-4 uppercase tracking-widest">
              My Story
            </h2>
            <p className="text-md tracking-widest">
              During the pandemic, I discovered a passion for coding that led to
              a career shift. I delved into Python, JavaScript, TypeScript, and
              Shopify Liquid, transforming my curiosity into a professional
              path.
            </p>
          </div>

          <div className="my-4 md:pt-52">
            <h2 className=" text-center text-2xl font-semibold mb-4 uppercase tracking-widest">
              Design
            </h2>
            <p className="text-md tracking-widest">
              I design websites that reflect clients&#39; brands, blending
              aesthetics with functionality to enhance their image and user
              experience, aligning with their goals and values.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;
