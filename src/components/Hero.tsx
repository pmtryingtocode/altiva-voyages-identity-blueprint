
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-altiva-purple-dark/70 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-semibold leading-tight tracking-wide mb-4">
              Extraordinary Journeys,
              <span className="block">Authentically Crafted</span>
            </h1>
            <p className="font-montserrat text-sm md:text-base text-white/90 mb-8 max-w-xl">
              Discover the authentic soul of Europe's most captivating destinations through bespoke, 
              luxury experiences tailored to your desires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-white hover:bg-white/90 text-altiva-purple-tertiary font-medium px-6 py-5"
                size="lg"
              >
                Explore Destinations
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 py-5"
                size="lg"
              >
                Our Philosophy
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 hidden md:block">
        <div className="w-40 h-px bg-white/30"></div>
        <p className="font-montserrat text-xs text-white/70 mt-2 tracking-wider">
          PORTUGAL • FRANCE • ITALY
        </p>
      </div>
    </div>
  );
};

export default Hero;
