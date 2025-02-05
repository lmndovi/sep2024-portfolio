import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { cva } from "class-variance-authority";

// Custom style for the "Contact" link
const contactLinkStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-2xl px-4 py-2 text-[#28282B] text-md font-medium bg-[#D7D7D7] transition-colors hover:bg-[#28282B] hover:text-[#FDDA0D] focus:bg-[#28282B]] focus::text-[#FDDA0D] border-2 border-black hover:motion-preset-expand hover:motion-duration-500"
);

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Desktop Nav */}
      <div className="hidden nestHubMax:flex nestHubMax:justify-center">
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

      {/* Mobile Nav */}
      <div className="nestHubMax:hidden flex justify-end p-4">
        {/* <MenuDrawer /> */}
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white asusZBF:text-xl ipadPro:text-2xl ipadPro:px-5 ipadPro:py-2">
            Menu
          </MenuButton>
          <MenuItems
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 asusZBF:text-lg"
          >
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="#about">
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  About
                </button>
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="#skills">
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  Skills
                </button>
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="#work">
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  Work
                </button>
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="#contact">
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  Contact
                </button>
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
