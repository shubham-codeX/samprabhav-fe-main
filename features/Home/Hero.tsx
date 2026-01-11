"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import Link from "next/link";

const backgroundImages = [
  "/bg1.jpg",
  "/bg2.jpg",
  "/bg3.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* 🔥 Sliding Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {backgroundImages.map((img) => (
            <div
              key={img}
              className="min-w-full h-full"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
        {/* 🟣 Purple translucent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B1B4D]/75 via-[#3d2673]/65 to-[#1a0f35]/75" />
      </div>
      {/* 🌟 Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-40 pb-20 px-4">
        <p className="text-white text-lg md:text-xl text-center max-w-2xl mb-6">
          Department of Pharmaceutical Management, NIPER (Mohali)
        </p>
        <span className="
                      mb-4
                      px-6 py-2
                      rounded-full
                      text-sm
                      text-[#1a0f35]
                      bg-[#FDC008]
                      shadow-md
                      uppercase
                    ">
                      Presents
                    </span>

        <p className="text-white text-lg md:text-xl text-center max-w-2xl mt-3">
          5th Edition of
        </p>
        <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center mb-8 tracking-tight pt-5"
            style={{ fontFamily: "'Old Standard TT', serif" }}>
              <span className="text-[#313575]">SAM</span>
              <span className="text-[#FDC008]">PRABHAV</span>
          <br />
          2026
        </h1>

        <p className="text-white text-lg md:text-xl text-center max-w-2xl mb-12">
          Union of Magnates - A Flagship Forum for Pharmaceutical Excellence
        </p>
            {/* <span className="
                      mb-4
                      px-6 py-2
                      rounded-full
                      text-sm
                      text-[#1a0f35]
                      bg-[#FDC008]
                      shadow-md
                      uppercase
                      mb-10
                    ">
                      5th Edition
                    </span> */}
        <CountdownTimer />

        <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
            <span className="text-white text-sm">📅 February 7-8, 2026</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
            <span className="text-white text-sm">📍 NIPER Mohali</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
{/* Register Button */}
<Button
  className="
    px-8 py-6
    text-lg
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

{/* View Schedule Button */}
<Link href="/schedule">
  <Button
    variant="outline"
    className="
      px-8 py-6
      text-lg
      bg-transparent
      border-white
      text-white
      transition-all duration-300 ease-out
      transform

      hover:font-bold
      hover:text-[#F68318]
      hover:scale-105
      hover:-translate-y-0.5
      hover:border-[#F68318]
      hover:bg-transparent
    "
  >
    View Schedule
  </Button>
</Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;
