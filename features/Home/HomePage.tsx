import Hero from "@/features/Home/Hero";
import About from "@/app/about/page";
import SchedulePage from "@/app/schedule/page";
import Sponsors from "@/app/sponsors/page";
import Speakers from "@/app/speakers/page";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#2B1B4D] via-[#3d2673] to-[#1a0f35]">
      <Hero />
      <About />
      <Speakers />
      <Sponsors />
      <SchedulePage />
    </main>
  );
};

export default HomePage;
