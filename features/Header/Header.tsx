"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-[#352262] from-[#2B1B4D]/80 to-transparent backdrop-blur-sm opacity-80 shadow-lg shadow-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Prabhav Logo"
                width={150}
                height={90}
                className="w-32 h-auto sm:w-40 md:w-52"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
          </nav>

          {/* Desktop Register Button */}
          <Link
          href="https://forms.gle/T4bNSyXP65q1Qy5S7"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Button
            className="
              hidden lg:block
              px-4 xl:px-6
              text-white
              text-sm
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
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#352262] border-t border-white/10">
          <nav className="px-4 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              About
            </Link>
            <Link
              href="/speakers"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Speakers
            </Link>
            <Link
              href="/sponsors"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Sponsors
            </Link>
            <Link
              href="/glimpses"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Glimpses
            </Link>
            <Link
              href="/schedule"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Schedule
            </Link>
            <Link
              href="/faqs"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              FAQs
            </Link>

        <Link
            href="https://forms.gle/T4bNSyXP65q1Qy5S7"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(true)}
            className="
              block w-full text-center
              px-6 py-3
              text-white font-semibold
              rounded-md
              bg-gradient-to-r from-[#F68318] to-[#FDC008]
              hover:from-[#FDC008] hover:to-[#F68318]
              transition-all
            "
          >
            Register Now
        </Link>



          </nav>
        </div>
      )}
    </header>
  );
}
