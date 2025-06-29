
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Utensils, Landmark, Spa } from "lucide-react";

type ExperienceCategory = {
  id: number;
  title: string;
  icon: JSX.Element;
  description: string;
  slug: string;
  experiences: Experience[];
};

type Experience = {
  id: number;
  title: string;
  destination: string;
  description: string;
  imageUrl: string;
  slug: string;
};

const categories: ExperienceCategory[] = [
  {
    id: 1,
    title: "Gastronomy",
    icon: <Utensils className="h-6 w-6" />,
    description: "Immerse yourself in Europe's rich culinary traditions through private tastings, cooking workshops, and meals prepared by renowned chefs in extraordinary settings.",
    slug: "gastronomy",
    experiences: [
      {
        id: 101,
        title: "Wine Estates of the Douro Valley",
        destination: "Portugal",
        description: "Explore Portugal's oldest wine region through private tastings at historic quintas and exclusive dining experiences overlooking terraced vineyards.",
        imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
        slug: "wine-estates-douro-valley",
      },
      {
        id: 102,
        title: "Provençal Culinary Journey",
        destination: "France",
        description: "Discover the vibrant flavors of Provence through market visits with celebrated chefs, truffle hunting, and intimate dining in historic châteaux.",
        imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
        slug: "provencal-culinary-journey",
      },
      {
        id: 103,
        title: "Tuscan Culinary Traditions",
        destination: "Italy",
        description: "Experience authentic Tuscan cuisine through hands-on pasta making, private olive oil tastings, and meals in family-owned estates dating back centuries.",
        imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
        slug: "tuscan-culinary-traditions",
      },
    ],
  },
  {
    id: 2,
    title: "Culture",
    icon: <Landmark className="h-6 w-6" />,
    description: "Gain privileged access to Europe's artistic and architectural treasures through private viewings, expert-led tours, and meaningful connections with cultural luminaries.",
    slug: "culture",
    experiences: [
      {
        id: 201,
        title: "Lisbon's Architectural Heritage",
        destination: "Portugal",
        description: "Explore Portugal's rich architectural tapestry through private access to historic palaces, contemporary design studios, and hidden architectural gems.",
        imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
        slug: "lisbon-architectural-heritage",
      },
      {
        id: 202,
        title: "Parisian Art & Design",
        destination: "France",
        description: "Discover Paris through the eyes of artists and designers with after-hours museum access, visits to private collections, and meetings with contemporary creators.",
        imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
        slug: "parisian-art-design",
      },
      {
        id: 203,
        title: "Renaissance Treasures",
        destination: "Italy",
        description: "Experience Italy's artistic legacy through privileged access to historic villas, private art collections, and workshops of master artisans preserving traditional crafts.",
        imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
        slug: "renaissance-treasures",
      },
    ],
  },
  {
    id: 3,
    title: "Well-being",
    icon: <Spa className="h-6 w-6" />,
    description: "Restore mind and body through exclusive retreats combining Europe's historic wellness traditions with contemporary approaches in settings of exceptional natural beauty.",
    slug: "wellbeing",
    experiences: [
      {
        id: 301,
        title: "Coastal Sanctuary",
        destination: "Portugal",
        description: "Rejuvenate at exclusive seaside retreats along Portugal's pristine coast, combining therapeutic treatments with mindful activities in nature.",
        imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
        slug: "coastal-sanctuary",
      },
      {
        id: 302,
        title: "Provence Wellness Retreat",
        destination: "France",
        description: "Experience holistic well-being in the lavender-scented landscapes of Provence through personalized wellness programs at historic estates.",
        imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
        slug: "provence-wellness-retreat",
      },
      {
        id: 303,
        title: "Tuscan Thermal Springs",
        destination: "Italy",
        description: "Immerse yourself in Italy's ancient spa traditions at exclusive thermal retreats nestled among the rolling hills of Tuscany.",
        imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
        slug: "tuscan-thermal-springs",
      },
    ],
  },
];

const Experiences = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-altiva-purple-dark font-semibold mb-6">
              Curated Experiences
            </h1>
            <p className="font-montserrat text-base md:text-lg text-altiva-gray-neutral mb-8">
              Discover Europe's authentic soul through our carefully crafted experiences,
              each offering privileged access and meaningful connections to local culture.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Categories */}
      <section className="bg-altiva-gray-soft py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-md p-8 shadow-sm text-center">
                <div className="h-16 w-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-altiva-purple-soft text-altiva-purple-tertiary">
                  {category.icon}
                </div>
                <h2 className="font-playfair text-2xl text-altiva-purple-dark font-semibold mb-3">
                  {category.title}
                </h2>
                <p className="font-montserrat text-sm text-altiva-gray-neutral mb-6">
                  {category.description}
                </p>
                <Link to={`/experiences/${category.slug}`}>
                  <Button 
                    variant="outline" 
                    className="border-altiva-purple-secondary text-altiva-purple-secondary hover:bg-altiva-purple-secondary hover:text-white"
                  >
                    Explore {category.title}
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
              Featured Experiences
            </h2>
            <p className="font-montserrat text-base text-altiva-gray-neutral">
              A selection of our most extraordinary experiences across Europe
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category.id}>
                <div className="flex items-center mb-8">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-altiva-purple-soft text-altiva-purple-tertiary mr-4">
                    {category.icon}
                  </div>
                  <h3 className="font-playfair text-xl md:text-2xl text-altiva-purple-dark font-semibold">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.experiences.map((experience) => (
                    <Link key={experience.id} to={`/experiences/${experience.slug}`} className="group">
                      <div className="bg-white rounded-md overflow-hidden shadow-sm h-full flex flex-col">
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={experience.imageUrl}
                            alt={experience.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="font-montserrat text-xs text-altiva-purple-tertiary uppercase tracking-wider mb-2">
                            {experience.destination}
                          </div>
                          <h4 className="font-playfair text-lg text-altiva-purple-dark font-medium mb-3 group-hover:text-altiva-purple-secondary transition-colors">
                            {experience.title}
                          </h4>
                          <p className="font-montserrat text-sm text-altiva-gray-neutral mb-4 flex-grow">
                            {experience.description}
                          </p>
                          <div className="font-montserrat text-sm text-altiva-purple-secondary flex items-center mt-auto group-hover:text-altiva-purple-tertiary transition-colors">
                            Discover Experience
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transition-transform group-hover:translate-x-1">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Experience CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-altiva-purple-soft rounded-md overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
                  Bespoke Experiences
                </h2>
                <p className="font-montserrat text-altiva-gray-dark mb-6">
                  Have a specific experience in mind that isn't in our curated collection? 
                  Our experts specialize in crafting completely bespoke experiences tailored 
                  to your unique interests and desires.
                </p>
                <Link to="/contact">
                  <Button 
                    className="bg-altiva-purple-tertiary hover:bg-altiva-purple-dark text-white self-start"
                  >
                    Craft Your Experience
                  </Button>
                </Link>
              </div>
              <div className="h-full min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070" 
                  alt="Custom experience" 
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

export default Experiences;
