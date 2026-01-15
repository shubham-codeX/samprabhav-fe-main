import React from "react";
import { Mic, Building2, Award, Star, Briefcase } from "lucide-react";
import Image from "next/image";
import { Speaker } from "./speakersData";
import Link from "next/link";

interface SpeakerCardProps {
  speaker: Speaker;
  category: string;
}

export function SpeakerCard({ speaker, category }: SpeakerCardProps) {
  let accentColor: string;
  let borderColor: string;
  let icon: React.JSX.Element;

  switch (category) {
    case "keynote":
      accentColor = "bg-[#313575]";
      borderColor = "border-l-[#313575]";
      icon = <Mic size={20} />;
      break;
    case "workshop":
      accentColor = "bg-[#633090]";
      borderColor = "border-l-[#633090]";
      icon = <Building2 size={20} />;
      break;
    case "judgesMentors":
      accentColor = "bg-[#313575]";
      borderColor = "border-l-[#313575]";
      icon = <Award size={20} />;
      break;
    case "specialPerformers":
      accentColor = "bg-[#b22e37]";
      borderColor = "border-l-[#b22e37]";
      icon = <Star size={20} />;
      break;
    case "industryExperts":
      accentColor = "bg-[#f68318]";
      borderColor = "border-l-[#f68318]";
      icon = <Briefcase size={20} />;
      break;
    default:
      accentColor = "bg-gray-600";
      borderColor = "border-l-gray-600";
      icon = <Mic size={20} />;
  }

  return (
    <div
      className={`flex gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-lg border-l-4 ${borderColor} shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="relative flex-shrink-0">
        <Image
          src={speaker.image || "/placeholder.svg"}
          alt={speaker.name}
          width={28}
          height={28}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl object-cover border-2 border-gray-200"
        />
        <div
          className={`absolute bottom-0 right-0 ${accentColor} text-white p-1.5 sm:p-2 rounded-lg shadow-md`}
        >
          {icon}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center min-w-0">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold truncate">
  {speaker.link ? (
    <Link
      href={speaker.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        text-blue-900
        hover:text-[#633190]
        hover:underline
        transition-colors
      "
    >
      {speaker.name}
    </Link>
  ) : (
    <span className="text-blue-900">{speaker.name}</span>
  )}
</h3>

        <p className="text-xs sm:text-sm font-medium text-[#633190] mb-1">
          {speaker.role}
        </p>
        {/* <p className="text-sm text-gray-600">{speaker.topic}</p> */}
      </div>
    </div>
  );
}
