"use client";

import Image from "next/image";
import { useState } from "react";

export default function Glimpses() {
  // Only filenames – no id, no alt, no repetition
  const imageFiles = [
    "img1.JPG","img2.JPG","img3.JPG","img4.JPG","img5.JPG","img6.JPG","img7.JPG","img8.JPG","img9.JPG","img10.JPG",
    "img11.JPG","img12.JPG","img13.JPG","img14.JPG","img15.JPG","img16.JPG","img17.JPG","img18.JPG","img19.JPG","img20.JPG",
    "img21.JPG","img22.JPG","img23.JPG","img24.JPG","img25.JPG","img26.JPG","img27.JPG","img28.JPG","img29.JPG","img0.JPG",
  ];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-linear-to-b from-purple-50 to-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Glimpses of SAMPRABHAV
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Relive the memorable moments and vibrant performances
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
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
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:scale-110"
          >
            ✕
          </button>

          <div className="relative w-[90vw] h-[85vh]">
            <Image
              src={activeImage}
              alt="Preview"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}
