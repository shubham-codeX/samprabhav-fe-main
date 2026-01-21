import Image from "next/image";

interface SponsorCardProps {
  name: string;
  logo: string;
  type: string; // TITLE SPONSOR, PLATINUM SPONSOR, etc.
}

export function SponsorCard({ name, logo, type }: SponsorCardProps) {
  return (
    <div
      className="
        bg-white rounded-3xl border-2 border-blue-300
        shadow-[0_10px_30px_rgba(0,0,0,0.1)]
        p-6 sm:p-8
        flex flex-col items-center text-center
      "
    >
      {/* Logo */}
      <div className="relative w-40 h-24 sm:w-44 sm:h-28 mb-6">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
        />
      </div>

      {/* Sponsor Name */}
      <h3 className="text-lg sm:text-xl font-semibold text-[#1e2b5b] mb-2">
        {name}
      </h3>

      {/* Sponsor Type */}
      <p className="text-xs sm:text-sm tracking-widest text-red-600 font-semibold">
        {type}
      </p>
    </div>
  );
}
