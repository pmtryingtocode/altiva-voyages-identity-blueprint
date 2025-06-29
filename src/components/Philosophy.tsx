
import { Button } from "@/components/ui/button";

const Philosophy = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-altiva-purple-dark font-semibold mb-6">
              Our Philosophy
            </h2>
            <div className="space-y-4 mb-8 font-montserrat text-altiva-gray-neutral">
              <p>
                At Altiva Voyages, we believe that true luxury lies in authenticity.
                We craft transformative journeys that connect you to the genuine soul of each destination.
              </p>
              <p>
                Our expert curators unlock privileged access to Europe's most exclusive experiences,
                creating personalized itineraries that balance refinement with cultural immersion.
              </p>
              <p>
                Every detail is meticulously arranged with an emphasis on privacy, exceptional quality,
                and meaningful connections. We proudly cultivate relationships with local artisans,
                boutique estates, and cultural luminaries who share our commitment to authentic excellence.
              </p>
            </div>
            <Button 
              variant="outline" 
              className="border-altiva-purple-secondary text-altiva-purple-secondary hover:bg-altiva-purple-secondary hover:text-white"
            >
              Discover Our Story
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070"
                alt="Authentic luxury travel experience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-12 max-w-xs bg-altiva-purple-soft p-6 rounded shadow-lg">
              <p className="font-playfair text-altiva-purple-dark italic text-lg">
                "We curate moments of authentic luxury that resonate long after your journey ends."
              </p>
              <p className="font-montserrat text-sm text-altiva-purple-secondary mt-2">
                — Sophia Laurent, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
