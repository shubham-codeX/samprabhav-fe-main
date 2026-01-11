import React from "react";
import { Mic, Building2, Award, Star, Briefcase } from "lucide-react";
import Image from "next/image";
import { Speaker } from "./speakersData";

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
      accentColor = "bg-[#633190]";
      borderColor = "border-l-[#633190]";
      icon = <Building2 size={20} />;
      break;
    case "judgesMentors":
      accentColor = "bg-blue-600";
      borderColor = "border-l-blue-600";
      icon = <Award size={20} />;
      break;
    case "specialPerformers":
      accentColor = "bg-red-600";
      borderColor = "border-l-red-600";
      icon = <Star size={20} />;
      break;
    case "industryExperts":
      accentColor = "bg-green-600";
      borderColor = "border-l-green-600";
      icon = <Briefcase size={20} />;
      break;
    default:
      accentColor = "bg-gray-600";
      borderColor = "border-l-gray-600";
      icon = <Mic size={20} />;
  }

  return (
    <div
      className={`flex gap-4 p-5 bg-white rounded-lg border-l-4 ${borderColor} shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="relative flex-shrink-0">
        <Image
          src={speaker.image || "/placeholder.svg"}
          alt={speaker.name}
          width={28}
          height={28}
          className="w-28 h-28 rounded-xl object-cover border-2 border-gray-200"
        />
        <div
          className={`absolute bottom-0 right-0 ${accentColor} text-white p-2 rounded-lg shadow-md`}
        >
          {icon}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-blue-900">{speaker.name}</h3>
        <p className="text-sm font-medium text-[#633190] mb-1">
          {speaker.role}
        </p>
        <p className="text-sm text-gray-600">{speaker.topic}</p>
      </div>
    </div>
  );
}
