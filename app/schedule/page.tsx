"use client";
import { useState } from "react";

type Event = {
  time: string;
  title: string;
  speaker1?: string;
  position1?: string;
  speaker2?: string;
  position2?: string;
  speaker3?: string;
  position3?: string;
  location?: string;
  side: "left" | "right";
};

const scheduleData: Record<string, Event[]> = {
  day1: [
    {
      time: "09:30 AM - 11:00 AM",
      title: "INAUGURAL EVENT",
      location: "Central Auditorium",
      side: "left",
      speaker1:"Prateek Dubey",
      position1:"Chief Guest",
      speaker2:"Dr. Vijay Charlu",
      position2:"Honorary Chairperson",
      speaker3:"Gagann Atreja",
      position3:"Guest of Honour"
    },
    {
      time: "11:30 AM - 01:00 PM",
      title: "BUCKET 1: Decoding Global Trends Redefining Life Sciences and Technology",
      speaker1: "Mr. Varun Arora",
      position1: "Principal Consultant, Agilisium Consulting",
      speaker2: "Navneet S Tewatia",
      position2:"Lead Consultant - Policy & Advocacy, Medicines Patent Pool",
      location: "Central Auditorium",
      side: "right",
    },
    {
      time: "02:00 PM - 03:30 PM",
      title: "BUCKET 2: Driving patient Impact Through Next-Generation Solutions",
      speaker1: "Aditya Kumar Khanna",
      position1: "Executive Vice President & Head of Global Alliances, Commercial, Marketing & PMO - Biologics, Dr. Reddy's Laboratories Ltd.",
      speaker2: "Mr. Rajshekhar Rao",
      position2: "Business Head, Stryker",
      location: "Central Auditorium",
      side: "left",
    },
    {
      time: "3:30 PM - 05:00 PM",
      title: "BUCKET 3: The Engines Behind Sustainable Enterprise: Where Talent, Ideas, and innovation take shape",
      speaker1: "Dr. Someshwar Komuravelly",
      position1 :"Co-Founder and CDO at OrciMed Life Sciences",
      speaker2: "Mr. Hareshh Ratwani",
      position2: "Founder, Director & CEO, Healthy Basket Pharmacy",
      location: "Central Auditorium",
      side: "right",
    },
  ],

  day2: [
    {
      time: "9:30 AM - 10:30 AM",
      title: "INCEPTION CEREMONY",
      location: "Central Auditorium",
      side: "left",
    },
    {
      time: "10:30 AM - 11:00 AM",
      title: "BUCKET 4: Reimagining Commercial Strategies for the Next Decade",
      location: "Central Auditorium",
      speaker1: "Megha Choubey",
      position1: "Manager Business Compliance, Abbott",
      speaker2: "Mr. Tejaswi V",
      position2: "DGM - Sales, Terumo India",
      side: "right",
    },
    {
      time: "01:00 PM - 02:00 PM",
      title: "BUCKET 5: From Insight to Impact: Shaping the future of Healthcare Strategy",
      location: "Central Auditorium",
      speaker1: "Mr. Himanshu Sehgal",
      position1: "Director-Project Delivery, Octavus Consulting",
      speaker2: "Mr. Abhisek Hiteshi Arora",
      position2: "Project Leader, BCG",
      speaker3: "Mr. Mihir Pujara	",
      position3: "Associate Director, AdametNext",
      side: "left",
    },
    {
      time: "03:30 PM - 05:00 PM",
      title: "Felicitation of Sponsors & Closing Ceremony",
      location: "Central Auditorium",
      side: "right",
    },
  ],
};

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2" | "day3">("day2");

  return (
    <section className="bg-[#FAFAFF] pt-20 sm:pt-24">
      <div className="max-w-6xl mx-auto px-4 pb-16 sm:pb-20">
        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20">
  {/* EVENT TIMELINE pill */}
  <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
    <span className="
      px-4 sm:px-5 py-1.5 sm:py-2
      rounded-full
      text-xs font-semibold
      tracking-widest uppercase
      text-white
      bg-gradient-to-r from-[#4b2c83] to-[#6a3fb3]
      shadow-md
    ">
      Event Timeline
    </span>
  </div>

  {/* Main Heading */}
  <h1 className="
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
    font-extrabold
    text-[#3b3f8f]
    tracking-tight
    px-2
  ">
    Complete Event Schedule
  </h1>

  {/* Subheading */}
  <p className="
    mt-4 sm:mt-6
    max-w-3xl mx-auto
    text-sm sm:text-base md:text-lg
    text-[#6b6f9c]
    leading-relaxed
    px-4
  ">
    Hourly timeline of workshops, competitions, performances, and keynote
    sessions across three exciting days
  </p>
</div>


        {/* Day Selector */}
        <div className="relative mb-16 sm:mb-24">
          <div className="h-10 sm:h-12 rounded-full bg-gradient-to-r from-[#3A2B73] to-[#5A3E9C]" />
          <div className="absolute inset-0 flex items-center justify-between px-2">
            {[
              { key: "day1", label: "DAY 1", date: "7th February" },
              { key: "day2", label: "DAY 2", date: "8th February" },
            ].map((day) => (
              <button
                key={day.key}
                onClick={() => setActiveDay(day.key as "day1" | "day2")}
                className={`flex-1 mx-1 h-10 sm:h-12 rounded-full text-xs sm:text-sm font-semibold transition-all
                  ${
                    activeDay === day.key
                      ? "bg-gradient-to-r from-[#F68318] to-[#FDC008] text-white shadow-lg"
                      : "text-white/70 hover:text-white"
                  }`}
              >
                <div className="text-xs sm:text-sm">{day.label}</div>
                <div className="text-[10px] sm:text-xs font-normal">{day.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on small mobile */}
          <div className="hidden sm:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-orange-400 -translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {scheduleData[activeDay].map((event, index) => (
              <div
                key={index}
                className={`relative flex ${
                  event.side === "left"
                    ? "sm:justify-start sm:pr-[52%]"
                    : "sm:justify-end sm:pl-[52%]"
                }`}
              >
                {/* Dot - hidden on small mobile */}
                <div className="hidden sm:block absolute left-1/2 top-6 w-4 h-4 rounded-full bg-white border-4 border-purple-600 -translate-x-1/2 z-10" />

                {/* Card */}
<div
  className="
    bg-white w-full sm:max-w-md
    rounded-2xl
    border border-transparent
    shadow-md
    p-4 sm:p-6
    transition-all duration-300 ease-out
    hover:-translate-y-2
    hover:shadow-2xl
    hover:border-[#633090]
  "
>{/* Time pill */}
  <div className="flex items-center gap-2 mb-3 sm:mb-4">
    <span
      className="
        text-xs font-semibold
        px-3 sm:px-4 py-1 sm:py-1.5
        rounded-full
        bg-[#F4EEFB]
        text-[#633090]
      "
    >
      {event.time}
    </span>
  </div>

  {/* Title */}
  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#321951] leading-snug">
    {event.title}
  </h3>

  {/* Location */}
  {event.location && (
    <p className="mt-2 text-xs sm:text-sm text-[#F68318] flex items-center gap-1">
      <span>📍</span>
      {event.location}
    </p>
  )}

  {/* Divider1 */}
{event.speaker1 && <div className="my-4 sm:my-5 h-px bg-slate-200" />}

{/* Speaker1 block */}
{event.speaker1 && (
  <div className="flex items-start gap-2 sm:gap-3">
    {/* Speaker Icon */}
    <div
      className="
        flex items-center justify-center
        w-10 h-10 sm:w-12 sm:h-12
        // rounded-full
        bg-[#F4EEFB]
        text-[#633090]
        text-sm sm:text-md
        font-semibold
        flex-shrink-0
      "
    >
      👤
    </div>

    <div>
      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-wider text-[#633090]">
        Speaker
      </p>

      {/* Name */}
      <p className="text-xs sm:text-sm font-semibold text-[#321951]">
        {event.speaker1}
        <p className="text-xs text-slate-500"> {event.position1}</p>
      </p>

    </div>
  </div>
)}
  {/* Divider2 */}
{event.speaker2 && <div className="my-4 sm:my-5 h-px bg-slate-200" />}

{/* Speaker2 block */}
{event.speaker2 && (
  <div className="flex items-start gap-2 sm:gap-3">
    {/* Speaker Icon */}
    <div
      className="
        flex items-center justify-center
        w-10 h-10 sm:w-12 sm:h-12
        // rounded-full
        bg-[#F4EEFB]
        text-[#633090]
        text-sm sm:text-md
        font-semibold
        flex-shrink-0
      "
    >
      👤
    </div>

    <div>
      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-wider text-[#633090]">
        Speaker
      </p>

      {/* Name */}
      <p className="text-xs sm:text-sm font-semibold text-[#321951]">
        {event.speaker2}
        <p className="text-xs text-slate-500"> {event.position2}</p>
      </p>

    </div>
  </div>
)}
  {/* Divider3 */}
{event.speaker3 && <div className="my-4 sm:my-5 h-px bg-slate-200" />}

{/* Speaker3 block */}
{event.speaker3 && (
  <div className="flex items-start gap-2 sm:gap-3">
    {/* Speaker Icon */}
    <div
      className="
        flex items-center justify-center
        w-10 h-10 sm:w-12 sm:h-12
        // rounded-full
        bg-[#F4EEFB]
        text-[#633090]
        text-sm sm:text-md
        font-semibold
        flex-shrink-0
      "
    >
      👤
    </div>

    <div>
      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-wider text-[#633090]">
        Speaker
      </p>

      {/* Name */}
      <p className="text-xs sm:text-sm font-semibold text-[#321951]">
        {event.speaker3}
        <p className="text-xs text-slate-500"> {event.position3}</p>
      </p>

    </div>
  </div>
)}

</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
