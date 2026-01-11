"use client";
import { useState } from "react";

type Event = {
  time: string;
  title: string;
  type: string;
  description: string;
  speaker?: string;
  location?: string;
  side: "left" | "right";
};

const scheduleData: Record<string, Event[]> = {
  day1: [
    {
      time: "08:00 AM",
      title: "Registration & Welcome Coffee",
      type: "General",
      location: "Main Lobby",
      description:
        "Collect your badges, meet fellow participants, and grab a coffee to kickstart the festival.",
      side: "left",
    },
    {
      time: "09:00 AM",
      title: "Grand Inauguration Ceremony",
      type: "Keynote",
      location: "Main Auditorium",
      description:
        "Official opening of SAMPRABHAV 2026 with cultural performances and keynote address.",
      side: "right",
    },
  ],

  day2: [
    {
      time: "09:00 AM",
      title: "Yoga & Wellness Session",
      type: "Workshop",
      location: "Lawn Area",
      description:
        "Start your day with energizing yoga and mindfulness practices.",
      speaker: "Guru Prakash",
      side: "left",
    },
    {
      time: "10:00 AM",
      title: "Debate Championship – Semifinals",
      type: "Competition",
      location: "Seminar Hall A",
      description:
        "Top teams debate on contemporary social and political issues.",
      speaker: "Dr. Suresh Patel",
      side: "right",
    },
    {
      time: "11:00 AM",
      title: "Traditional Folk Music Concert",
      type: "Cultural",
      description: "Celebration of India’s rich folk music heritage.",
      side: "left",
    },
    {
      time: "12:00 PM",
      title: "Film Making Workshop",
      type: "Workshop",
      speaker: "Karan Jogalekar",
      description:
        "Learn script writing, cinematography, and editing techniques.",
      side: "right",
    },
    {
      time: "01:00 PM",
      title: "Lunch Break",
      type: "Break",
      description: "Recharge and network over lunch.",
      side: "left",
    },
  ],
};

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2" | "day3">("day2");

  return (
    <section className="bg-[#FAFAFF] pt-24">
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Heading */}
        <div className="text-center mb-20">
  {/* EVENT TIMELINE pill */}
  <div className="inline-flex items-center justify-center mb-6">
    <span className="
      px-5 py-2
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
    text-4xl md:text-5xl lg:text-6xl
    font-extrabold
    text-[#3b3f8f]
    tracking-tight
  ">
    Complete Event Schedule
  </h1>

  {/* Subheading */}
  <p className="
    mt-6
    max-w-3xl mx-auto
    text-base md:text-lg
    text-[#6b6f9c]
    leading-relaxed
  ">
    Hourly timeline of workshops, competitions, performances, and keynote
    sessions across three exciting days
  </p>
</div>


        {/* Day Selector */}
        <div className="relative mb-24">
          <div className="h-12 rounded-full bg-gradient-to-r from-[#3A2B73] to-[#5A3E9C]" />
          <div className="absolute inset-0 flex items-center justify-between px-2">
            {[
              { key: "day1", label: "DAY 1", date: "March 15" },
              { key: "day2", label: "DAY 2", date: "March 16" },
            ].map((day) => (
              <button
                key={day.key}
                onClick={() => setActiveDay(day.key as "day1" | "day2")}
                className={`flex-1 mx-1 h-12 rounded-full text-sm font-semibold transition-all
                  ${
                    activeDay === day.key
                      ? "bg-gradient-to-r from-[#F68318] to-[#FDC008] text-white shadow-lg"
                      : "text-white/70 hover:text-white"
                  }`}
              >
                <div>{day.label}</div>
                <div className="text-xs font-normal">{day.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-orange-400 -translate-x-1/2" />

          <div className="space-y-16">
            {scheduleData[activeDay].map((event, index) => (
              <div
                key={index}
                className={`relative flex ${
                  event.side === "left"
                    ? "justify-start pr-[52%]"
                    : "justify-end pl-[52%]"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 top-6 w-4 h-4 rounded-full bg-white border-4 border-purple-600 -translate-x-1/2 z-10" />

                {/* Card */}
                <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                      {event.time}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-orange-700">
                      {event.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {event.title}
                  </h3>

                  {event.location && (
                    <p className="mt-1 text-sm text-orange-600">
                      📍 {event.location}
                    </p>
                  )}

                  <p className="mt-2 text-sm text-slate-600">
                    {event.description}
                  </p>

                  {event.speaker && (
                    <p className="mt-3 text-sm text-slate-700 font-medium">
                      Speaker: {event.speaker}
                    </p>
                  )}

                  <button className="mt-4 text-sm font-semibold text-orange-600 hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
