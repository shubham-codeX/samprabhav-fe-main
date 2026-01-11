import Image from "next/image";

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
  return (
    <main className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <div className="text-center pt-26 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Welcome to Samprabhav 2026
        </h1>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* TEXT BOX */}
            <div
              className="
                group
                p-8
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
              <p className="text-lg italic text-[#683bb7] mb-4">
                Socialize • Synergize • Specialize
              </p>

              <div className="space-y-4 text-[#666] leading-relaxed text-lg">
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

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl p-6 text-center bg-white border hover:shadow-lg transition-shadow 
              hover:border-[#313575] hover:border-2 hover:bg-gradient-to-t hover:from-[#633090]/20 hover:to-transparent">
                <div className="text-4xl text-[#313575] mb-2">5</div>
                <div className="text-xs font-semibold text-[#666]">
                  THEMATIC AREAS
                </div>
              </div>
              <div className="rounded-2xl p-6 text-center bg-white border hover:shadow-lg transition-shadow 
              hover:border-[#b22e37] hover:border-2 hover:bg-gradient-to-t hover:from-[#b22e37]/20 hover:to-transparent">
                <div className="text-4xl font-bold text-[#ff9900] mb-2">
                  500+
                </div>
                <div className="text-xs font-semibold text-[#666]">
                  PARTICIPANTS
                </div>
              </div>
              <div className="rounded-2xl p-6 text-center bg-white border hover:shadow-lg transition-shadow 
              hover:border-[#f68318] hover:border-2 hover:bg-gradient-to-t hover:from-[#ff9900]/20 hover:to-transparent">
                <div className="text-4xl font-bold text-[#ff9900] mb-2">
                  30+
                </div>
                <div className="text-xs font-semibold text-[#666]">
                  EXPERTS
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 h-96 md:h-auto md:aspect-square">
              {/* //ANCHOR - Placeholder for event image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <Image
                  src="/random.png"
                  alt="Samprabhav 2026 Event"
                  fill
                  className="object-cover"
                />
              </div>
              {/* //ANCHOR - Caption Box */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-3xl">
                <div className="text-white border border-white p-4 rounded-lg bg-gradient-to-t from-[#633090]/80 to-transparent 
                hover:bg-white/10 hover:text-[#f68318] transition-colors hover:shadow-lg hover:gradient-to-t hover:from-transparent hover:to-[#633090]/80">
                  <p className="text-lg font-semibold mb-1 text-center">
                    Department of Pharmaceutical Management
                  </p>
                  <p className="text-sm opacity-90 text-center">
                    NIPER S.A.S. Nagar (Mohali)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* ================= 7 S SECTION ================= */}
<section className="mx-auto px-6 pt-8 py-10">

  {/* ENTIRE COLUMN WRAPPER */}
  <div
    className="
      group
      rounded-3xl
      bg-[#633090]/20
      p-6 md:p-8
      space-y-4
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
    "
  >
    <div className="text-center mb-10">
    <h2 className="text-2xl md:text-3xl font-semibold text-[#b22e37] hover:text-4xl transition-all duration-300">
      WHY SHOULD YOU ATTEND?
    </h2>
    <p className="mt-2 text-lg font-medium text-[#F68318]">
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
          gap-4
          p-5
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
        <div className="w-6 h-6 rounded-full bg-[#633090] text-white flex items-center justify-center text-sm font-bold">
          ✓
        </div>

        {/* Text */}
        <p className="text-[#2b0e93] leading-relaxed">
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
<section className="mx-auto px-6 pt-1 py-10">

  {/* ENTIRE COLUMN WRAPPER */}
  <div
    className="
      group
      rounded-3xl
      bg-[#633090]/20 to-[#f68318]/10
      p-6 md:p-8
      space-y-4
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
    "
  >
    <div className="text-center mb-10">
    <h2 className="text-2xl md:text-3xl font-semibold text-[#b22e37] hover:text-4xl transition-all duration-300">
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
          gap-4
          p-5
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
        <div className="w-6 h-6 rounded-full bg-[#633090] text-white flex items-center justify-center text-sm font-bold">
          ✓
        </div>

        {/* Text */}
        <p className="text-[#2b0e93] leading-relaxed">
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
<section className="mx-auto px-6 py-16 pt-1">
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
            p-10
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
              text-xl
              md:text-3xl
              font-semibold
              mb-4
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
          <p className="text-sm md:text-base font-medium text-[#633090] mb-3 hover:text-[#fdc005] transition-colors">
            Department of Pharmaceutical Management (DOPM), NIPER S.A.S. Nagar
            (Mohali)
          </p>

          {/* DESCRIPTION */}
          <div className="space-y-1 text-lg leading-relaxed text-[#633090] group-hover:text-[#633090] transition-colors duration-300">
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
