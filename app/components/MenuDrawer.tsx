"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";

export default function MenuDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-2 right-2 z-50 md:top-4 md:right-4 bg-transparent border-white hover:bg-white/20"
            aria-label="Open menu"
          >
            <Menu className="h-8 w-8 md:h-6 md:w-6 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-full sm:w-[300px] md:w-[400px] bg-black/70 backdrop-blur-md border-r border-white/20"
        >
          <SheetHeader>
            <SheetTitle className="text-left text-white">Menu</SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 text-white hover:bg-white/20"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-8">
            <Link
              href="/"
              className="text-xl font-semibold text-white hover:text-gray-300 p-2"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-xl font-semibold text-white hover:text-gray-300 p-2"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-xl font-semibold text-white hover:text-gray-300 p-2"
              onClick={() => setOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#work"
              className="text-xl font-semibold text-white hover:text-gray-300 p-2"
              onClick={() => setOpen(false)}
            >
              Work
            </Link>
            <Link
              href="#contact"
              className="text-xl font-semibold text-white hover:text-gray-300 p-2"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
