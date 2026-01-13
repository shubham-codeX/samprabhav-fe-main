import Hero from "@/features/Home/Hero";
import FooterPage from "../Footer/FooterPage";
import About from "@/app/about/page";
import { Speaker } from "lucide-react";
import SchedulePage from "@/app/schedule/page";
import Sponsors from "@/app/sponsors/page";
import { SpeakerCard } from "../Speakers/SpeakerCard";
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
