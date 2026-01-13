import { Mic, Building2, Award, Star, Briefcase } from "lucide-react";
import { speakers } from "../../features/Speakers/speakersData";
import { SpeakerCard } from "../../features/Speakers/SpeakerCard";
import Image from "next/image";
import image from "next/image";

const Speakers = () => {
  const testimonials = [
  {
    name: "MR. SUBBA RAO CHAGANTI",
    role: "Executive Coach, Mentor, Author",
    quote:
      "Samprabhav 2025, an outstanding initiative by the students of NIPER S.A.S. Nagar pharmaceutical institutions. The event was a perfect blend of insightful discussions, innovative ideas, and seamless execution. The panel sessions offered valuable perspectives on the evolving landscape of pharmaceutical innovation. Kudos to the entire Samprabhav team for creating such a meaningful and impactful experience",
    image: "/subba_rao.png",
    color: "#313575",
    light: "rgba(49,53,117,0.15)",
  },

  {
    name: "MR. SATISH KUMAR ARORA",
    role: "President at TIE Chandigarh, Co-Founder of AppSmartz & GameSee Pvt. Ltd., Angel Investor",
    quote:
      "It was an absolute privilege to contribute as a speaker at such a well-organised and impactful event. The event stood out for its thoughtful curation, and meaningful dialogue around pharma innovation and entrepreneurship. Interacting with the future leaders of the pharmaceutical world was both inspiring and fulfilling. My key takeaway was the reinforced belief that academia-industry collaboration is essential for shaping the next generation of pharmaceutical leaders.",
    image: "/satish.png",
    color: "#b22e37",
    light: "rgba(178,46,55,0.15)",
  },

  {
    name: "MR. VIRENDRA KUMAR",
    role: "Founder & CEO AdametNext",
    quote:
      "I am truly grateful for the opportunity to participate in Samprabhav 2025, organized by the Department of Pharmaceutical Management at NIPER S.A.S. Nagar. The event stood out for its thoughtful curation, enthusiastic engagement, and the vibrant spirit of inquiry throughout. As a speaker, I was genuinely impressed by the active involvement of students and faculty. I look forward to continued collaboration with NIPER in shaping the future of pharma leadership.",
    image: "/virendra.png",
    color: "#321951",
    light: "rgba(50, 25, 81, 0.15)",
  },


];
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
{/* ================================ Testimonials Section ====================================== */}
      <section className="max-w-7xl mx-auto px-6 py-15 mt-20">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-block px-5 py-1.5 rounded-full text-sm tracking-wide text-white bg-gradient-to-r from-[#B22E37] to-[#F68318] mb-6
        hover:bg-gradient-to-r hover:from-[#F68318] hover:to-[#B22E37] transition-all duration-300">
          TESTIMONIALS
        </span>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#321951] mb-6 hover:text-6xl duration-300">
          What Our Speakers Say
        </h2>

        <p className="max-w-2xl mx-auto italic text-[#633090] text-md pb-2">
          “Testimonials are the true reflection of a satisfied heart, echoing
          the authenticity of a positive experience”
        </p>
      </div>

      {/* Cards */}
      {testimonials.map((item, i) => (
        <div
          key={i}
          className="
            mb-7
            group
            relative
            rounded-3xl
            overflow-hidden
            transition-all
            duration-300
            hover:-translate-y-2
            shadow-xl
          "
          style={{ boxShadow: `0 20px 40px ${item.light}` }}
        >
          {/* Hover border (on top) */}
          <div
            className="
              absolute
              inset-0
              rounded-3xl
              border-3
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-300
              z-30
              pointer-events-none
            "
            style={{ borderColor: item.color }}
          />

          {/* Hover gradient (color cover) - above content so it tints the card */}
          <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
              z-20
              pointer-events-none
            "
            style={{
              background: `linear-gradient(to bottom, ${item.light}, transparent)`,
            }}
          />

          {/* Content */}
          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              md:grid-cols-[320px_1fr]
              bg-white
              rounded-3xl
            "
          >
            {/* LEFT PANEL */}
            <div
              className="p-10 flex flex-col justify-between"
              style={{ backgroundColor: item.color }}
            >
              <div className="flex flex-col items-center text-center gap-6">
                {/* Image */}
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-[#fdc005] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:border-[#fdc005]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name */}
                <div className="transition-transform duration-300 group-hover:scale-105">
                  <h3 className="text-lg font-bold text-[#F68318] uppercase">
                    {item.name}
                  </h3>
                  <p className="text-sm text-white/80 mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div
              className="
                p-10
                flex
                flex-col
                justify-center
                transition-all
                duration-300
                group-hover:-translate-y-1
              "
            >
              <p className="text-[#633090] text-lg leading-relaxed mb-6">
                “{item.quote}”
              </p>

              <span
                  className="w-40 h-1 rounded-full"
                  style={{
                    background: `linear-gradient(
                      to right,
                      ${item.color} 50%,
                      ${item.color} 0%,
                      ${item.color} 50%,
                      transparent 100%
                    )`,
                  }}
                />
            </div>
          </div>
        </div>
      ))}
    </section>

    </main>
  );
};
export default Speakers;
