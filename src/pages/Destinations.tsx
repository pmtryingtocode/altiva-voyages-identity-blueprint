
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    id: 1,
    country: "Portugal",
    tagline: "Where Timeless Traditions Meet Contemporary Elegance",
    description: "From the ancient vineyards of the Douro Valley to the cobblestone streets of Lisbon, discover Portugal's rich cultural heritage and warm hospitality.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
    highlights: [
      "Private tastings at historic quintas in the Douro Valley",
      "Exclusive access to Lisbon's architectural treasures",
      "Authentic culinary experiences with renowned local chefs",
      "Secluded coastal retreats along the pristine Alentejo coast"
    ],
    slug: "portugal"
  },
  {
    id: 2,
    country: "France",
    tagline: "The Art of Living, Refined and Reimagined",
    description: "Experience the sublime sophistication of France, from private Parisian ateliers to the sun-drenched landscapes of Provence and the refined elegance of the wine country.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
    highlights: [
      "After-hours access to world-renowned museums and gardens",
      "Intimate wine tastings at prestigious family-owned estates",
      "Culinary journeys led by Michelin-starred chefs",
      "Rejuvenating retreats in historic chateaux and countryside villas"
    ],
    slug: "france"
  },
  {
    id: 3,
    country: "Italy",
    tagline: "Timeless Beauty, Authentic Connections",
    description: "Indulge in Italy's extraordinary cultural wealth, from private access to Renaissance masterpieces to immersive experiences with master craftsmen and culinary artisans.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
    highlights: [
      "Private viewings of renowned art collections and historic villas",
      "Hands-on experiences with master artisans in their private workshops",
      "Exclusive culinary traditions in family homes and estates",
      "Secluded lakeside and coastal retreats with unparalleled views"
    ],
    slug: "italy"
  }
];

const Destinations = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-altiva-purple-dark font-semibold mb-6">
              Curated Destinations
            </h1>
            <p className="font-montserrat text-base md:text-lg text-altiva-gray-neutral mb-8">
              Discover the authentic soul of Europe's most captivating regions through 
              our carefully curated collection of extraordinary destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Showcase */}
      <section className="bg-altiva-gray-soft py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {destinations.map((destination, index) => (
              <div 
                key={destination.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="aspect-[4/5] rounded-md overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.country}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-3">
                    {destination.country}
                  </h2>
                  <p className="font-montserrat text-lg text-altiva-purple-secondary italic mb-6">
                    {destination.tagline}
                  </p>
                  <p className="font-montserrat text-altiva-gray-neutral mb-8">
                    {destination.description}
                  </p>
                  <h3 className="font-playfair text-lg text-altiva-purple-dark font-medium mb-4">
                    Signature Experiences
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {destination.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-altiva-purple-tertiary mr-2">•</span>
                        <span className="font-montserrat text-sm text-altiva-gray-neutral">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/destinations/${destination.slug}`}>
                    <Button className="bg-altiva-purple-tertiary hover:bg-altiva-purple-dark text-white">
                      Explore {destination.country}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Journey CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-altiva-purple-soft rounded-md overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
                  Beyond Boundaries
                </h2>
                <p className="font-montserrat text-altiva-gray-dark mb-6">
                  Looking for a multi-destination journey or an experience that spans beyond our 
                  featured countries? Our experts specialize in crafting bespoke itineraries that 
                  transcend conventional boundaries.
                </p>
                <Button 
                  className="bg-altiva-purple-tertiary hover:bg-altiva-purple-dark text-white self-start"
                >
                  Contact Our Experts
                </Button>
              </div>
              <div className="h-full min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070" 
                  alt="Custom journey" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
