import Image from "next/image";
import React from "react";

import ggsmockup from "../assets/GGSMockUp.png";
import { Button } from "@/components/ui/button";

const Work = () => {
  return (
    <div className="flex flex-col space-y-5 w-full h-screen">
      <h1 className="text-2xl font-semibold tracking-[5px] text-center my-16 border-8 border-black w-48 mx-auto uppercase px-6 py-3">
        Work
      </h1>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto px-20">
        <div className="space-y-6">
          <h2 className="text-center font-semibold text-2xl uppercase tracking-widest underline underline-offset-2 decoration-4">
            GG's Authentic Site
          </h2>
          <p className="text-sm tracking-wide md:px-10">
            An e-commerce website designed for a seamless shopping experience.
            <br />
            <br />
            It includes interactive features such as:
          </p>
          <ul className="text-sm tracking-wide md:px-12 list-disc list-inside space-y-1">
            <li>
              <strong>Product Options</strong>
              <span className="hidden md:block">
                : Variant selectors, quantity controls, and image carousels
              </span>
            </li>
            <li>
              <strong>Expandable Details</strong>
              <span className="hidden md:block">
                : "Read more" descriptions and hidden delivery info
              </span>
            </li>
            <li>
              <strong>Related Products</strong>
              <span className="hidden md:block">
                : Algorithm-based recommendations
              </span>
            </li>
          </ul>
          <p className="text-sm tracking-wide md:px-10 mt-4">
            Custom dropdowns, a hover-activated menu, and a mobile-friendly
            hamburger menu enable easy navigation, while advanced search,
            filters, and secure payment ensure smooth transactions.
          </p>
          <p className="text-sm tracking-wide md:px-10 mt-4">
            Marketing integrations like JudgeMe and Shopify Email, plus a
            discount opt-in form, boost engagement. Custom visuals and initial
            review data enhance the platform, creating a user-focused shopping
            experience.
          </p>
          <div className="flex flex-col items-center justify-center py-3">
            <a href="https://ggsauthentic.com/">
              <Button>View Website</Button>
            </a>
          </div>
        </div>
        <div>
          <a href="https://ggsauthentic.com/">
            <Image
              src={ggsmockup}
              alt="ggsauthentic.com"
              className="h-full w-full"
            />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Work;
