
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import MoodSelector from "@/components/MoodSelector";
import ExperienceCategories from "@/components/ExperienceCategories";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <MoodSelector />
      <ExperienceCategories />
      <FeaturedDestinations />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
