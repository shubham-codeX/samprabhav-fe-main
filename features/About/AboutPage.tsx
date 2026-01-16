import Image from "next/image";
import { Users, Target, Lightbulb, Megaphone, Building2, Award} from "lucide-react";

const AboutPage = () => {
  const sevenS = [
    {
      title: "STEP IN",
      text:
        "Enter a transformative learning environment designed to ignite fresh perspectives and unlock new opportunities.",
    },
    {
      title: "SEARCH",
      text:
        "Explore innovative ideas, emerging trends, and forward-thinking solutions shaping the future of the pharmaceutical industry.",
    },
    {
      title: "SYNC UP",
      text:
        "Engage with industry experts, academicians, and peers to build meaningful collaborations and lasting professional connections.",
    },
    {
      title: "SEE BEYOND",
      text:
        "Gain inspiration from visionary leaders who challenge conventional thinking and redefine industry benchmarks.",
    },
    {
      title: "SURPASS",
      text:
        "Push boundaries, embrace challenges, and elevate your personal and professional potential through experiential learning.",
    },
    {
      title: "SHARPEN",
      text:
        "Strengthen industry-relevant skills and competencies aligned with evolving market demands, positioning yourself for success.",
    },
    {
      title: "SHOWCASE",
      text:
        "Walk away with impactful insights, experiences, and accomplishments that enhance your professional profile, strengthen your CV, and create a lasting impression across platforms.",
    },
  ];

const WhyUs = [
    {
      title: "PHARMACY STUDENTS:",
      text:
        "Students from all pharmacy disciplines seeking to gain comprehensive exposure to the diverse domains of the pharmaceutical industry.",
    },
    {
      title: "MANAGEMENT STUDENTS:",
      text:
        "Business and management students interested in developing a deeper understanding of pharmaceutical operations, strategy, and market dynamics.",
    },
    {
      title: "MENTORS",
      text:
        "Faculty members, educators, and academic leaders aiming to stay aligned with evolving industry trends and enhance classroom learning with practical insights.",
    },
    {
      title: "INDUSTRY PROFESSIONALS",
      text:
        "Experienced professionals looking to network, collaborate, and engage in meaningful knowledge exchange with peers and thought leaders.",
    },
    {
      title: "ASPIRANTS",
      text:
        "Career-driven individuals aspiring to enter or grow within the pharmaceutical sector by learning directly from industry experts.",
    },
    {
      title: "RECRUITERS",
      text:
        "Talent acquisition professionals seeking motivated, innovative, and skilled individuals ready to contribute fresh perspectives to the industry.",
    },
  ];

const pillars = [
  {
    title: "Socialize",
    text:
      "Build meaningful professional networks and relationships with industry leaders and peers from across the pharmaceutical sector.",
    icon: Users,
    color: "#633090",
    light: "rgba(99,48,144,0.15)",
  },
  {
    title: "Synergize",
    text:
      "Collaborate across disciplines to foster integrated thinking and innovative solutions for complex pharmaceutical challenges.",
    icon: Target,
    color: "#F68318",
    light: "rgba(246,131,24,0.18)",
  },
  {
    title: "Specialize",
    text:
      "Deepen expertise through interactive sessions with industry experts and gain specialized knowledge in pharmaceutical management.",
    icon: Lightbulb,
    color: "#B22E37",
    light: "rgba(178,46,55,0.18)",
  },
];

const stats = [
  {
    value: "12+",
    label: "Speakers",
    icon: Megaphone,
    color: "#633090",
    light: "rgba(99,48,144,0.15)",
  },
  {
    value: "800+",
    label: "Students",
    icon: Users,
    color: "#F68318",
    light: "rgba(246,131,24,0.18)",
  },
  {
    value: "40+",
    label: "Colleges",
    icon: Building2,
    color: "#FDBE28",
    light: "rgba(253,190,40,0.2)",
  },
  {
    value: "11+",
    label: "Sponsors",
    icon: Award,
    color: "#B22E37",
    light: "rgba(178,46,55,0.18)",
  },
];

  return (
    <main className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <div className="text-center pt-20 sm:pt-24 md:pt-26 pb-8 sm:pb-10 md:pb-12 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3 sm:mb-4">
          Welcome to Samprabhav 2026
        </h1>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-6 sm:space-y-8">
            {/* TEXT BOX */}
            <div
              className="
                group
                p-6 sm:p-8
                rounded-3xl
                border border-[#e5e0f0]
                bg-white
                transition-all
                duration-300
                hover:bg-[#633090]/10
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              {/* HEADING */}

              <div className="space-y-3 sm:space-y-4 text-[#666] leading-relaxed text-sm sm:text-base lg:text-lg">
                <p>
                  <span className="transition-all duration-300 group-hover:text-[#f68318] group-hover:font-bold">
                    Samprabhav – Union of Magnates
                  </span>{" "}
                  serves as a flagship forum where experienced industry
                  professionals and emerging talent converge to exchange
                  perspectives and build meaningful professional relationships.
                  Structured around five well-defined thematic areas, the event
                  enables participants to collaborate across disciplines.
                </p>

                <p>
                  Each session concludes with an interactive question-and-answer
                  segment, allowing students to deepen their understanding
                  through direct engagement with industry experts.
                </p>

                <p>
                  This large-scale initiative reflects exemplary student
                  leadership, impactful expert deliberations, and collective
                  knowledge creation, marking a significant milestone for the{" "}
                  <span className="font-semibold text-[#313575]">
                    Department of Pharmaceutical Management, NIPER S.A.S. Nagar
                    (Mohali)
                  </span>
                  .
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 h-64 sm:h-80 md:h-96 lg:h-auto lg:aspect-square">
              {/* Placeholder for event image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <Image
                  src="/random.png"
                  alt="Samprabhav 2026 Event"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Caption Box */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 rounded-b-3xl">
                <div className="text-white border border-white p-3 sm:p-4 rounded-lg bg-gradient-to-t from-[#633090]/80 to-transparent 
                hover:bg-white/10 hover:text-[#f68318] transition-colors hover:shadow-lg hover:gradient-to-t hover:from-transparent hover:to-[#633090]/80">
                  <p className="text-sm sm:text-base lg:text-lg font-semibold mb-1 text-center">
                    Department of Pharmaceutical Management
                  </p>
                  <p className="text-xs sm:text-sm opacity-90 text-center">
                    NIPER S.A.S. Nagar (Mohali)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* ================= PILLARS SECTION ================= */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#321951] hover:text-3xl sm:hover:text-4xl md:hover:text-5xl transition-all duration-300">
          Our Three Pillars
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {pillars.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="
                group
                relative
                rounded-3xl
                bg-white
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
              "
              style={{
                boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              }}
            >
              {/* Hover Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
                style={{
                  background: `linear-gradient(to top, ${item.light}, transparent)`,
                }}
              />

              {/* Border on Hover */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  border-2
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                "
                style={{ borderColor: item.color }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    mb-6
                    transition-all
                    duration-300
                    group-hover:scale-110
                  "
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `0 10px 25px ${item.light}`,
                  }}
                >
                  <Icon className="text-white w-7 h-7" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-[#633090] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>

{/* ================= STATS SECTION ================= */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      {/* Heading */}
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#321951] hover:text-3xl sm:hover:text-4xl md:hover:text-5xl transition-all duration-300">
          Discover Our Amazing Features
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {stats.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="
                group
                relative
                bg-white
                rounded-3xl
                p-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-3
              "
              style={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              {/* Hover gradient */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
                style={{
                  background: `linear-gradient(to top, ${item.light}, transparent)`,
                }}
              />

              {/* Hover border */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  border-2
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                "
                style={{ borderColor: item.color }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    mx-auto
                    mb-6
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  style={{
                    backgroundColor: item.light,
                  }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: item.color }}
                  />
                </div>

                {/* Value */}
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: item.color }}
                >
                  {item.value}
                </div>

                {/* Label */}
                <div className="text-[#321951] font-medium mb-4">
                  {item.label}
                </div>

                {/* Accent line */}
                <div
                  className="h-1 w-14 mx-auto rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>

{/* ================= 7 S SECTION ================= */}
<section className="mx-auto px-4 sm:px-6 pt-6 sm:pt-8 py-8 sm:py-10">

  {/* ENTIRE COLUMN WRAPPER */}
  <div
    className="
      group
      rounded-3xl
      bg-[#633090]/20
      p-4 sm:p-6 md:p-8
      space-y-3 sm:space-y-4
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
    "
  >
    <div className="text-center mb-6 sm:mb-8 md:mb-10">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#b22e37] hover:text-2xl sm:hover:text-3xl md:hover:text-4xl transition-all duration-300">
      WHY SHOULD YOU ATTEND?
    </h2>
    <p className="mt-2 text-base sm:text-lg font-medium text-[#F68318]">
      7s of Samprabhav
    </p>
  </div>
    {sevenS.map((item, i) => (
      <div
        key={i}
        className="
          group/item
          relative
          flex
          gap-3 sm:gap-4
          p-4 sm:p-5
          rounded-xl
          bg-white/70
          transition-all
          duration-300
          hover:bg-[#633090]/10
          hover:-translate-y-1
          hover:shadow-md
          hover:text-purple-400
          cursor-pointer
        "
      >
        {/* Accent bar */}
        <span
          className="
            absolute
            left-0
            top-0
            h-full
            w-1
            rounded-l-xl
            bg-transparent
            transition-colors
            duration-300
            group-hover/item:bg-[#7e3de7]
          "
        />

        {/* Icon */}
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#633090] text-white flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-0.5">
          ✓
        </div>

        {/* Text */}
        <p className="text-[#2b0e93] leading-relaxed text-sm sm:text-base">
          <span className="font-bold text-[#321951]">
            {item.title}:
          </span>{" "}
          {item.text}
        </p>
      </div>
    ))}
  </div>
</section>

{/* ================= Why attend SECTION ================= */}
<section className="mx-auto px-4 sm:px-6 pt-1 py-8 sm:py-10">

  {/* ENTIRE COLUMN WRAPPER */}
  <div
    className="
      group
      rounded-3xl
      bg-[#633090]/20 to-[#f68318]/10
      p-4 sm:p-6 md:p-8
      space-y-3 sm:space-y-4
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
    "
  >
    <div className="text-center mb-6 sm:mb-8 md:mb-10">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#b22e37] hover:text-2xl sm:hover:text-3xl md:hover:text-4xl transition-all duration-300">
      Who Should Attend Samprabhav?
    </h2>
  </div>
    {WhyUs.map((item, i) => (
      <div
        key={i}
        className="
          group/item
          relative
          flex
          gap-3 sm:gap-4
          p-4 sm:p-5
          rounded-xl
          bg-white/70
          transition-all
          duration-300
          hover:bg-[#633090]/10
          hover:-translate-y-1
          hover:shadow-md
          hover:text-purple-400
          cursor-pointer
        "
      >
        {/* Accent bar */}
        <span
          className="
            absolute
            left-0
            top-0
            h-full
            w-1
            rounded-l-xl
            bg-transparent
            transition-colors
            duration-300
            group-hover/item:bg-[#7e3de7]
          "
        />

        {/* Icon */}
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#633090] text-white flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-0.5">
          ✓
        </div>

        {/* Text */}
        <p className="text-[#2b0e93] leading-relaxed text-sm sm:text-base">
          <span className="font-bold text-[#321951]">
            {item.title}:
          </span>{" "}
          {item.text}
        </p>
      </div>
    ))}
  </div>
</section>

{/* ================= Host Of Samprabhav SECTION================= */}
<section className="mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16 pt-1">
      <div
        className="
          group
          relative
          rounded-3xl
          p-[2px]
          bg-gradient-to-b from-[#c7b7f3] via-[#e6dcff] to-[#f6f1ff]
          transition-all
          duration-500
          hover:bg-gradient-to-t
          hover:from-[#c7b7f3]
          hover:via-[#e6dcff]
          hover:to-[#f6f1ff]
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >
        {/* INNER CARD */}
        <div
          className="
            rounded-3xl
            bg-gradient-to-b from-[#faf7ff] to-[#efe8ff]
            p-6 sm:p-8 md:p-10
            transition-all
            duration-500
            group-hover:from-[#efe8ff]
            group-hover:to-[#faf7ff]
            border
            border-transparent
            group-hover:border-2
            group-hover:border-[#321951]
            text-center
          "
        >
          {/* HEADING */}
          <h3
            className="
              text-lg sm:text-xl md:text-2xl lg:text-3xl
              font-semibold
              mb-3 sm:mb-4
              text-[#633090]
              transition-all
              duration-300
              group-hover:text-[#321951]
              group-hover:font-bold-italic
              group-hover:-translate-y-1
            "
          >
            Host of Samprabhav 2026
          </h3>

          {/* SUB HEADING */}
          <p className="text-xs sm:text-sm md:text-base font-medium text-[#633090] mb-3 hover:text-[#fdc005] transition-colors">
            Department of Pharmaceutical Management (DOPM), NIPER S.A.S. Nagar
            (Mohali)
          </p>

          {/* DESCRIPTION */}
          <div className="space-y-1 text-sm sm:text-base md:text-lg leading-relaxed text-[#633090] group-hover:text-[#633090] transition-colors duration-300">
            {[
              "The Department of Pharmaceutical Management at NIPER S.A.S. Nagar (Mohali) is committed to developing future leaders in pharmaceutical management. With an approach that goes beyond conventional education, the department combines modern technology with forward-thinking management practices to promote innovation and excellence. Its well-structured curriculum balances strong theoretical foundations with hands-on exposure, equipping students to meet the evolving demands of the pharmaceutical industry.",
            ].map((sentence, idx) => (
              <p key={idx}>
                {sentence.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className="
                      inline-block
                      transition-colors
                      duration-200
                      hover:text-[#f68318]
                    "
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default AboutPage;
