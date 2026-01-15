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
    <main className="min-h-screen bg-[#fdfcfd] py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 py-6 sm:py-8 md:py-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3 sm:mb-4">
            Industry Leaders & Experts
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
            Learn from renowned pharmaceutical industry experts, mentors, and
            professionals who will guide you through SAMPRABHAV 2026
          </p>
        </div>

        {/* =============== BUCKET 2 ===================== */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#321951] rounded-lg text-white flex-shrink-0">
              <Mic size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#313575]">
              Driving Patient Impact Through Next-Generation Solutions
            </h2>
          </div>
            {/* <div className="flex-1 h-1 mb-5 bg-gradient-to-r from-[#313575] to-transparent rounded-full"></div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {speakers.keynote.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                category="keynote"
              />
            ))}
          </div>
        </div>

        {/*  =============== BUCKET 1 =====================  */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#633090] rounded-lg text-white flex-shrink-0">
              <Building2 size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
              Decoding Global Trends Redefining Life Sciences and Technology
            </h2>
          </div>
          {/* <div className="flex-1 h-1 mb-5 bg-gradient-to-r from-[#633190] to-transparent rounded-full"></div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {speakers.workshop.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                category="workshop"
              />
            ))}
          </div>
        </div>

        {/* =============== BUCKET 3 ===================== */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#313575] rounded-lg text-white flex-shrink-0">
              <Award size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
              The Engines Behind Sustainable Enterprise: Where Talent, Ideas, and innovation take shape
            </h2>
            {/* <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {speakers.judgesMentors.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                category="judgesMentors"
              />
            ))}
          </div>
        </div>

        {/* =============== BUCKET 4 =====================  */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#b22e37] rounded-lg text-white flex-shrink-0">
              <Star size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
              Reimagining Pharma Marketing for the next decade
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {speakers.specialPerformers.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                category="specialPerformers"
              />
            ))}
          </div>
        </div>

        {/*  =============== BUCKET 5 =====================   */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#f68318] rounded-lg text-white flex-shrink-0">
              <Briefcase size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
              BUCKET 5: From Insight to Impact: Shaping the future of Healthcare Strategy
            </h2>
            {/* <div className="flex-1 h-1 bg-gradient-to-r from-green-600 to-transparent rounded-full"></div> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-15 mt-12 sm:mt-16 md:mt-20">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <span className="inline-block px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm tracking-wide text-white bg-gradient-to-r from-[#B22E37] to-[#F68318] mb-4 sm:mb-6
        hover:bg-gradient-to-r hover:from-[#F68318] hover:to-[#B22E37] transition-all duration-300">
          TESTIMONIALS
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#321951] mb-4 sm:mb-6 hover:text-3xl sm:hover:text-4xl md:hover:text-5xl lg:hover:text-6xl duration-300 px-2">
          What Our Speakers Say
        </h2>

        <p className="max-w-2xl mx-auto italic text-[#633090] text-sm sm:text-base md:text-md pb-2 px-4">
          “Testimonials are the true reflection of a satisfied heart, echoing
          the authenticity of a positive experience”
        </p>
      </div>

      {/* Cards */}
      {testimonials.map((item, i) => (
        <div
          key={i}
          className="
            mb-5 sm:mb-7
            group
            relative
            rounded-2xl sm:rounded-3xl
            overflow-hidden
            transition-all
            duration-300
            hover:-translate-y-2
            shadow-lg sm:shadow-xl
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
