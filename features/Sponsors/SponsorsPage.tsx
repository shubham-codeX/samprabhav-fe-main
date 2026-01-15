import { SponsorCard } from "./SponsorCard";
import { SponsorCardFlexible } from "./SponsorCardFlexible";

export function SponsorsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-20 sm:pt-24 md:pt-26 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3 sm:mb-4">
          Sponsors & Partners
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          Proud to be supported by industry leaders who believe in nurturing
          talent and celebrating culture
        </p>
      </div>

      {/* Title Sponsors Section */}
      <div className="py-8 sm:py-10 md:py-12 text-center px-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e3a5f]">
            Title Sponsors
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 md:mb-12">
          Presenting Partners of SAMPRABHAV 2026
        </p>

        {/* Sponsor Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8">
          {/* Card 1 */}
          <SponsorCardFlexible title="Innovating Tomorrow" width="w-xl" />

          {/* Card 2 */}
          <SponsorCardFlexible title="Building the Future" width="w-xl" />
        </div>
      </div>

      {/* Platinum Sponsors Section */}
      <div className="py-8 sm:py-10 md:py-12 text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e3a5f]">
          Platinum Sponsors
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 md:mb-12">Our Platinum Partners</p>

        {/* Sponsor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8">
          <SponsorCardFlexible title="Platinum Sponsor 1" width="w-md" />
          <SponsorCardFlexible title="Platinum Sponsor 2" width="w-md" />
          <SponsorCardFlexible title="Platinum Sponsor 3" width="w-md" />
        </div>
      </div>

      {/* Gold Sponsors Section */}
      <div className="py-8 sm:py-10 md:py-12 text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e3a5f]">
          Gold Sponsors
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 md:mb-12">Our Gold Partners</p>

        {/* Sponsor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
          <SponsorCardFlexible title="Gold Sponsor 1" width="w-md" />
          <SponsorCardFlexible title="Gold Sponsor 2" width="w-md" />
          <SponsorCardFlexible title="Gold Sponsor 3" width="w-md" />
        </div>
      </div>

      {/* Strategic Partners Section */}
      <div className="py-8 sm:py-10 md:py-12 text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e3a5f]">
          Strategic Partners
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 md:mb-12">Our Strategic Partners</p>

        {/* Sponsor Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8">
          <SponsorCardFlexible title="Strategic Partners" width="w-xl" />
          <SponsorCardFlexible title="Strategic Partners" width="w-xl" />
        </div>
      </div>
    </main>
  );
}
