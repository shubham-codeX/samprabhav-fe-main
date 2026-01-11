import { Mic, Building2, Award, Star, Briefcase } from "lucide-react";
import { speakers } from "../../features/Speakers/speakersData";
import { SpeakerCard } from "../../features/Speakers/SpeakerCard";

const Speakers = () => {
  return (
    <main className="min-h-screen bg-[#fdfcfd] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Industry Leaders & Experts
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Learn from renowned pharmaceutical industry experts, mentors, and
            professionals who will guide you through SAMPRABHAV 2026
          </p>
        </div>

        {/* Keynote Speakers Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-[#313575] rounded-lg text-white">
              <Mic size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[#313575]">
              Keynote Speakers
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-[#313575] to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {speakers.keynote.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                category="keynote"
              />
            ))}
          </div>
        </div>

        {/* Workshop Leaders Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-[#633190] rounded-lg text-white">
              <Building2 size={24} />
            </div>
            <h2 className="text-3xl font-bold text-blue-900">
              Workshop Leaders
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-[#633190] to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {speakers.workshop.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                category="workshop"
              />
            ))}
          </div>
        </div>

        {/* Judges & Mentors Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg text-white">
              <Award size={24} />
            </div>
            <h2 className="text-3xl font-bold text-blue-900">
              Judges & Mentors
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {speakers.judgesMentors.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                category="judgesMentors"
              />
            ))}
          </div>
        </div>

        {/* Special Performers Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-lg text-white">
              <Star size={24} />
            </div>
            <h2 className="text-3xl font-bold text-blue-900">
              Special Performers
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {speakers.specialPerformers.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                category="specialPerformers"
              />
            ))}
          </div>
        </div>

        {/* Industry Experts Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg text-white">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-bold text-blue-900">
              Industry Experts
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-green-600 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {speakers.industryExperts.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                category="industryExperts"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Speakers;
