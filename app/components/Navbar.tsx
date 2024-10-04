import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu";

import { cva } from "class-variance-authority";

// Custom style for the "Contact" link
const contactLinkStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-2xl px-4 py-2 text-[#D7D7D7] text-md font-medium bg-black transition-colors hover:bg-[#D7D7D7] hover:text-black focus:bg-[#D7D7D7] focus:text-black hover:border-2 focus:border-2 hover:border-black focus:border-black"
);

const Navbar = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#about">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#skills">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Skills
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#work">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Work
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#contact">
              <NavigationMenuLink className={contactLinkStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
