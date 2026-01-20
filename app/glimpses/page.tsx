"use client";

import Image from "next/image";
import { useState } from "react";

export default function Glimpses() {
  // Only filenames – no id, no alt, no repetition
  const imageFiles = [
    "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","10b.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg",
  ];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-linear-to-b from-purple-50 to-blue-50 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3 sm:mb-4 px-2">
            Glimpses of SAMPRABHAV
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
            Relive the memorable moments and vibrant performances
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">{/* Rest of the image grid */}
          {imageFiles.map((file, index) => {
            const src = `/glimses/${file}`;

            return (
              <div
                key={index}
                onClick={() => setActiveImage(src)}
                className="
                  group relative aspect-4/5 cursor-pointer
                  overflow-hidden rounded-2xl
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(128,0,255,0.55)]
                "
              >
                {/* Glow overlay */}
                <div
                  className="
                    absolute inset-0 z-10 pointer-events-none
                    opacity-0 group-hover:opacity-100 transition-opacity
                    bg-[linear-gradient(180deg,#8000ff55,transparent,#8000ff55),
                        linear-gradient(90deg,#FFD70055,transparent,#FFD70055)]
                  "
                />

                <Image
                  src={src}
                  alt={file.replace(/[-_]/g, " ").split(".")[0]}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw, 25vw"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Preview */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white text-3xl sm:text-4xl font-bold hover:scale-110 z-10"
          >
            ✕
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={activeImage}
              alt="Preview"
              fill
              className="object-contain rounded-lg sm:rounded-xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}
