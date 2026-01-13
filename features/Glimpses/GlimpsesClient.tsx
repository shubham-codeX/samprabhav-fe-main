"use client";

import Image from "next/image";
import { useState } from "react";

interface Img {
  src: string;
  alt: string;
}

export default function GlimpsesClient({ images }: { images: Img[] }) {
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

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(img.src)}
              className="relative aspect-4/5 cursor-pointer rounded-2xl overflow-hidden
                         transition-all duration-300
                         hover:scale-105
                         hover:shadow-[0_0_30px_rgba(128,0,255,0.5)]
                         group"
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none
                opacity-0 group-hover:opacity-100 transition-opacity
                bg-[linear-gradient(90deg,#FFD70055,transparent,#8000FF55)]" />

              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:scale-110"
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
