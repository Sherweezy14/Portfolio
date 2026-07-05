import BaseGradient from "./hero_components/BaseGradient";
import BackGroundLayer from "./hero_components/BackGroundLayer";
import HeroContent from "./hero_components/HeroContent";
import Navbar from "./hero_components/Navbar";
export default function Hero() {
  return (
    <section
      id="Hero"
      className="h-108 relative overflow-hidden mt-2 rounded-md text-white"
    >
      <BackGroundLayer />
      <BaseGradient />
      <HeroContent />
      <Navbar />
    </section>
  );
}
