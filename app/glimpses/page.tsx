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
            Glimpses of SAMPRABHAV 2025
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
            Relive the memorable moments and vibrant performances
          </p>
        </div>

        {/* Event Information */}
      <div className="mb-14 sm:mb-20 space-y-10">

      {/* Chief Guest & Chairperson */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur p-6 shadow-md border border-purple-100 text-center">
          <h3 className="text-base sm:text-lg font-semibold text-purple-800 mb-3">
            Chief Guest
          </h3>
          <p className="text-blue-900 font-medium text-sm sm:text-base">
            Dr. Subba Rao Chaganti
          </p>
          <p className="text-xs sm:text-sm text-gray-600">
            Executive Coach, Mentor, Author
          </p>
        </div>

        <div className="rounded-2xl bg-white/70 backdrop-blur p-6 shadow-md border border-blue-100 text-center">
          <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-3">
            Chairperson
          </h3>
          <p className="text-blue-900 font-medium text-sm sm:text-base">
            Dr. Vinay Lohariwala
          </p>
          <p className="text-xs sm:text-sm text-gray-600">
            Managing Director, Innova Captab Ltd.
          </p>
        </div>
      </div>

        {/* Speakers */}
        <div className="rounded-2xl bg-white/70 backdrop-blur p-6 shadow-md border border-indigo-100">
          <h3 className="text-lg sm:text-xl font-semibold text-indigo-900 mb-6 text-center">
            Speakers & Panelists
          </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-sm">
          {[
            ["Mr. Harit Mohan", "Founder & CEO, Signicent | Global Co-Chair, TiE Univ."],
            ["Dr. Ankit Jain", "Senior Segment Manager – Applied Genomics, Illumina"],
            ["Tavinder Jit Singh Vasudeva", "President & CBO, Microlabs"],
            ["Mr. Gopal Rao", "AVP – Business Development & Licensing, Biocon Biologics"],
            ["Ajayy Kumar Shukla", "Sales Manager, Medtronic"],
            ["Ms. Komal Sharma Talwar", "Founder, TT Consultants | Founder & Director, XL"],
            ["Mr. Satish Kumar Arora", "President, TiE Chandigarh | Angel Investor"],
            ["Megha Soni", "Associate Director – People Success, Solutionec"],
            ["Uday Kanth", "Senior Manager – HR, Trinity Life Sciences"],
            ["Mr. Virendra Kumar", "Founder & CEO, AdametNext"],
            ["Ms. Ritu Rana", "Senior Manager – Forecasting CoE, Axtria"],
            ["Mr. Suresh Pemmaraju", "AVP, Molekule Consulting"],
          ].map(([name, role]) => (
            <div
              key={name}
              className="space-y-1 text-center sm:text-left"
            >
              <p className="font-medium text-blue-900 text-sm sm:text-base">
                {name}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">
                {role}
              </p>
            </div>
          ))}
        </div>
      </div>

          {/* Agendas */}
          <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white p-6 sm:p-8 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">
              Agendas & Thematic Buckets
            </h3>

            <ol className="list-decimal list-inside space-y-3 text-sm sm:text-base text-center sm:text-left">
              <li>Fueling Pharma Success: The Power of Digital and Global Marketing</li>
              <li>Pioneering Trends: Reshaping the Pharmaceutical Landscape</li>
              <li>
                Re-envisioning Boundaries: Transformative Strategies for Business and
                Product Excellence
              </li>
              <li>Redefining Talent Paradigms: Crafting the Future Workforce</li>
              <li>Pharma Horizons: Innovation, Analytics, and Strategic Transformation</li>
            </ol>
          </div>
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
