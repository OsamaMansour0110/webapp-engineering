import SecondaryHeroCarousel, { HeroSlide } from "@/components/SecondaryHeroCarousel";
import EnergizingFutureSection from "@/components/EnergizingFutureSection";
import VideoGallery from "@/components/VideoGallery";
import PartnersSection from "@/components/PartnersSection";

const powerHeroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Who We Are",
    description: "We, 01 Electronics, serving all over Egypt since 2006, and in UAE as of 2022, are Borri commercial and industrial UPS sole agents in Egypt, Elcos sole agents in Egypt for diesel gensets (generator sets), and panel builders and UPS distributor of Legrand.",
    image: "/power.png"
  },
  {
    id: 2,
    title: "01 Electronics - Power Solutions",
    description: "As a powerhouse of three power providing leaders, Legrand, the French integrated power specialist, Borri, the Italian UPS manufacturer, and Elcos, the Italian power generators. We're committed to supplying your industry with clean, uninterrupted and reliable energy supply.",
    image: "/construction.png"
  },
  {
    id: 3,
    title: "UPS",
    description: "A non-interruptible, clean and stabilized form of power to protect your industry machines, data centers and all your electrical devices",
    image: "/software.png"
  },
  {
    id: 4,
    title: "Generators",
    description: "The generating set of our PRO range covers your emergency needs within the world-wide standards of electrical of supplies.",
    image: "/power.png"
  }
];

export default function PowerSolutions() {
  return (
    <div className="bg-white text-gray-900 pb-20 text-center">
      <SecondaryHeroCarousel slides={powerHeroSlides} />
      <EnergizingFutureSection />
      <VideoGallery />
      <PartnersSection />
    </div>
  );
}
