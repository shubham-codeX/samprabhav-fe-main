import { SponsorCard } from "./SponsorCard";

export function SponsorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e7f7f4] to-[#f4fbff]">
      
      {/* Heading */}
      <div className="pt-24 text-center px-4">
        <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-black">
          Our <span className="text-[#321951]">Sponsors</span>
        </h1>

        <div className="flex justify-center items-center gap-4 mt-4">
          <span className="w-12 h-[3px] bg-[#633090] rounded" />
          <span className="w-29 h-[3px] bg-[#633090] rounded" />
        </div>
      </div>

      {/* Title Sponsors */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <SponsorCard
            name="AdametNext"
            logo="/sponsor_logos/adametnext.png"
            type="TITLE SPONSOR"
          />
          <SponsorCard
            name="PharmaSapience"
            logo="/sponsor_logos/pharmasapience.png"
            type="CO-TITLE SPONSOR"
          />
        </div>
      </section>

      {/* Silver Sponsors */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <SponsorCard
            name="Advanced Pakiza Unani"
            logo="/sponsor_logos/pakiza.PNG"
            type="SILVER"
          />
          <SponsorCard
            name="Bitta Studio"
            logo="/sponsor_logos/bitta.png"
            type="PHOTOGRAPHY"
          />
          <SponsorCard
            name="PharmiVon"
            logo="/sponsor_logos/Pharmivion.jpg"
            type="Media Partner"
          />
          <SponsorCard
            name="Guru Nanak Sweets"
            logo="/sponsor_logos/gns.PNG"
            type="Food Partner"
          />
          <SponsorCard
            name="Kitty The Master Baker"
            logo="/sponsor_logos/kitty.PNG"
            type="Food Partner"
          />
          <SponsorCard
            name="True Rise Traveller"
            logo="/sponsor_logos/true.png"
            type="Travelling Partner"
          />
        </div>
      </section>

    </main>
  );
}
