import React from "react";
import Image from "next/image";
import { Speaker } from "./speakersData";
import Link from "next/link";

interface SpeakerCardProps {
  speaker: Speaker;
  category: string;
}

export function SpeakerCard({ speaker, category }: SpeakerCardProps) {
  let borderColor = "border-l-gray-600";

  switch (category) {
    case "chiefGuest":
      borderColor = "border-l-[#1e3a8a]";
      break;

    case "guestOfHonor":
      borderColor = "border-l-[#1e3a8a]";
      break;

    case "chairPerson":
      borderColor = "border-l-[#1e3a8a]";
      break;

    case "keynote":
      borderColor = "border-l-[#313575]";
      break;

    case "workshop":
      borderColor = "border-l-[#633090]";
      break;

    case "judgesMentors":
      borderColor = "border-l-[#313575]";
      break;

    case "specialPerformers":
      borderColor = "border-l-[#b22e37]";
      break;

    case "industryExperts":
      borderColor = "border-l-[#f68318]";
      break;
  }

  return (
    <div
      className={`flex gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-lg 
      border-l-${8} ${borderColor} shadow-sm`}
    >
      {/* Image */}
      <div className="relative flex-shrink-0">
        <Image
          src={speaker.image}
          alt={speaker.name}
          width={128}
          height={128}
          sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
          className="rounded-xl object-cover border-2 border-gray-200"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <h3
  className="font-semibold text-base sm:text-lg md:text-xl text-blue-900 leading-snug break-words"
>

          {speaker.link ? (
            <Link
              href={speaker.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-[#633190] hover:underline transition-colors"
            >
              {speaker.name}
            </Link>
          ) : (
            <span className="text-blue-900">{speaker.name}</span>
          )}
        </h3>

        <p
          className={`font-medium text-[#633190] ${
            "text-sm sm:text-base"
          }`}
        >
          {speaker.role}
        </p>
      </div>
    </div>
  );
}
