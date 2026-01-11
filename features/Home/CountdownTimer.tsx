"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimerBox = ({
  value,
  label,
  isOrange,
}: {
  value: string;
  label: string;
  isOrange: boolean;
}) => (
  <div
    className={`flex flex-col items-center justify-center p-6 rounded-2xl border ${
      isOrange
        ? "border-orange-500/50 bg-white/5 backdrop-blur-md"
        : "border-white/20 bg-white/5 backdrop-blur-md"
    }`}
  >
    <div
      className={`text-4xl md:text-5xl font-bold mb-2 ${
        isOrange ? "text-orange-500" : "text-red-500"
      }`}
    >
      {value}
    </div>
    <div className="text-white/70 text-xs md:text-sm uppercase tracking-widest">
      {label}
    </div>
  </div>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 28,
    hours: 4,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2026-02-07").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <TimerBox
        value={String(timeLeft.days).padStart(2, "0")}
        label="Days"
        isOrange={true}
      />
      <TimerBox
        value={String(timeLeft.hours).padStart(2, "0")}
        label="Hours"
        isOrange={true}
      />
      <TimerBox
        value={String(timeLeft.minutes).padStart(2, "0")}
        label="Minutes"
        isOrange={false}
      />
      <TimerBox
        value={String(timeLeft.seconds).padStart(2, "0")}
        label="Seconds"
        isOrange={false}
      />
    </div>
  );
};

export default CountdownTimer;
