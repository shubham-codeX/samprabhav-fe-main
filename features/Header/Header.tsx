"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-[#352262] from-[#2B1B4D]/80 to-transparent backdrop-blur-sm opacity-80 shadow-lg shadow-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Prabhav Logo"
              width={210}
              height={126}
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
               className="
    text-white text-sm
    relative
    transition-all duration-300 ease-out
    transform
    hover:text-[#FDC005]
    hover:-translate-y-0.5
    hover:scale-105

    after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
    after:bg-[#FDC005]
    after:transform after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  "
>
              Home
            </Link>
            <Link
              href="/about"
              className="
    text-white text-sm
    relative
    transition-all duration-300 ease-out
    transform
    hover:text-[#FDC005]
    hover:-translate-y-0.5
    hover:scale-105

    after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
    after:bg-[#FDC005]
    after:transform after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  "
>
              About
            </Link>
            <Link
              href="/speakers"
               className="
    text-white text-sm
    relative
    transition-all duration-300 ease-out
    transform
    hover:text-[#FDC005]
    hover:-translate-y-0.5
    hover:scale-105

    after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
    after:bg-[#FDC005]
    after:transform after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  "
>
              Speakers
            </Link>
            <Link
              href="/sponsors"
              className="
    text-white text-sm
    relative
    transition-all duration-300 ease-out
    transform
    hover:text-[#FDC005]
    hover:-translate-y-0.5
    hover:scale-105

    after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
    after:bg-[#FDC005]
    after:transform after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  "
            >
              Sponsors
            </Link>
            <Link
              href="/glimpses"
              className="
    text-white text-sm
    relative
    transition-all duration-300 ease-out
    transform
    hover:text-[#FDC005]
    hover:-translate-y-0.5
    hover:scale-105

    after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
    after:bg-[#FDC005]
    after:transform after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  "
            >
              Glimpses
            </Link>
            <Link
              href="/schedule"
              className="
    text-white text-sm
    relative
    transition-all duration-300 ease-out
    transform
    hover:text-[#FDC005]
    hover:-translate-y-0.5
    hover:scale-105

    after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
    after:bg-[#FDC005]
    after:transform after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  "
            >
              Schedule
            </Link>
            <Link
              href="/faqs"
              className="
    text-white text-sm
    relative
    transition-all duration-300 ease-out
    transform
    hover:text-[#FDC005]
    hover:-translate-y-0.5
    hover:scale-105

    after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
    after:bg-[#FDC005]
    after:transform after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  "
            >
              FAQs
            </Link>
            <Link
              href="/contact-us"
              className="
    text-white text-sm
    relative
    transition-all duration-300 ease-out
    transform
    hover:text-[#FDC005]
    hover:-translate-y-0.5
    hover:scale-105

    after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
    after:bg-[#FDC005]
    after:transform after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  "
            >
              Contact Us
            </Link>
          </nav>

          {/* Register Button */}
<Button
  className="
    px-6
    text-white
    font-semibold
    transition-all duration-300 ease-out
    transform

    bg-gradient-to-r
    from-[#F68318]
    to-[#FDC008]

    hover:bg-gradient-to-r
    hover:from-[#FDC008]
    hover:to-[#F68318]

    hover:font-extrabold
    hover:scale-105
    hover:-translate-y-0.5
  "
>
  Register Now
</Button>

        </div>
      </div>
    </header>
  );
}
