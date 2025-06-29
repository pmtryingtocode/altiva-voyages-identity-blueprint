
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Utensils, Landmark, Spa } from "lucide-react";

const destinations = {
  portugal: {
    name: "Portugal",
    tagline: "Where Timeless Traditions Meet Contemporary Elegance",
    description: "From the ancient vineyards of the Douro Valley to the cobblestone streets of Lisbon, discover Portugal's rich cultural heritage and warm hospitality.",
    longDescription: "Portugal's allure lies in its perfect balance of old-world charm and contemporary sophistication. Here, centuries-old vineyards border cutting-edge architecture, and traditional fishing villages exist alongside innovative culinary scenes. Our curated experiences reveal Portugal's authentic character through privileged access to historic estates, private collections, and local artisans who rarely open their doors to visitors.",
    hero: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
    regions: [
      {
        name: "Lisbon & Surroundings",
        description: "Discover the captivating blend of historic grandeur and contemporary creativity in Portugal's enchanting capital and its scenic coastal environs.",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
        slug: "lisbon-surroundings"
      },
      {
        name: "Douro Valley",
        description: "Immerse yourself in the world's oldest demarcated wine region, where terraced vineyards create a breathtaking landscape recognized by UNESCO.",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
        slug: "douro-valley"
      },
      {
        name: "Alentejo",
        description: "Experience the unspoiled beauty of Portugal's heartland, where rolling plains, whitewashed villages, and authentic traditions create a sense of timeless tranquility.",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
        slug: "alentejo"
      }
    ],
    experiences: [
      {
        icon: <Utensils className="h-5 w-5" />,
        category: "Gastronomy",
        title: "Culinary Heritage",
        description: "From private cooking workshops with renowned chefs to exclusive tastings at historic wineries, discover Portugal's rich culinary traditions.",
        link: "/experiences/portugal-culinary-heritage"
      },
      {
        icon: <Landmark className="h-5 w-5" />,
        category: "Culture",
        title: "Artistic Legacy",
        description: "Gain privileged access to private collections, historic estates, and studios of contemporary artisans continuing Portugal's artistic traditions.",
        link: "/experiences/portugal-artistic-legacy"
      },
      {
        icon: <Spa className="h-5 w-5" />,
        category: "Well-being",
        title: "Coastal Retreats",
        description: "Restore mind and body at exclusive seaside retreats, combining Portugal's healing thermal traditions with contemporary wellness approaches.",
        link: "/experiences/portugal-coastal-retreats"
      }
    ],
    testimonial: {
      quote: "Our journey through Portugal with Altiva Voyages revealed a depth of experiences we never would have discovered on our own. From private tastings in centuries-old wine cellars to conversations with local artisans in their workshops, every moment felt authentic and exclusive.",
      author: "Catherine & David Langford",
      location: "New York, USA"
    }
  },
  france: {
    name: "France",
    tagline: "The Art of Living, Refined and Reimagined",
    description: "Experience the sublime sophistication of France, from private Parisian ateliers to the sun-drenched landscapes of Provence and the refined elegance of the wine country.",
    longDescription: "France embodies the art of living well, where beauty and pleasure are elevated to their highest forms. Our carefully curated experiences provide privileged access to the country's cultural treasures, from private artistic collections to centuries-old wine estates. Through intimate connections with local experts, artisans, and cultural luminaries, we reveal the authentic soul of France beyond the expected.",
    hero: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
    regions: [
      {
        name: "Paris & Île-de-France",
        description: "Experience the City of Light through exclusive access to private collections, historic homes, and artistic ateliers rarely open to the public.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
        slug: "paris-ile-de-france"
      },
      {
        name: "Provence",
        description: "Immerse yourself in the sensory pleasures of Provence, from lavender-scented landscapes to centuries-old olive groves and vibrant local markets.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
        slug: "provence"
      },
      {
        name: "Bordeaux & Wine Country",
        description: "Discover the prestigious wine regions of France through private tastings at historic châteaux and intimate meetings with renowned vintners.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
        slug: "bordeaux-wine-country"
      }
    ],
    experiences: [
      {
        icon: <Utensils className="h-5 w-5" />,
        category: "Gastronomy",
        title: "Culinary Excellence",
        description: "From private cooking workshops with Michelin-starred chefs to exclusive tastings at prestigious wine estates, discover France's gastronomic heritage.",
        link: "/experiences/france-culinary-excellence"
      },
      {
        icon: <Landmark className="h-5 w-5" />,
        category: "Culture",
        title: "Artistic Treasures",
        description: "Gain after-hours access to renowned museums, private collections, and studios of contemporary artists continuing France's artistic legacy.",
        link: "/experiences/france-artistic-treasures"
      },
      {
        icon: <Spa className="h-5 w-5" />,
        category: "Well-being",
        title: "Château Retreats",
        description: "Restore mind and body at exclusive château spas, combining France's historic thermal traditions with cutting-edge wellness approaches.",
        link: "/experiences/france-chateau-retreats"
      }
    ],
    testimonial: {
      quote: "Our family retreat in Provence was nothing short of magical. Altiva arranged exclusive access to local artisans, markets, and a 15th-century estate where we created memories that will last a lifetime.",
      author: "The Montgomery Family",
      location: "Boston, USA"
    }
  },
  italy: {
    name: "Italy",
    tagline: "Timeless Beauty, Authentic Connections",
    description: "Indulge in Italy's extraordinary cultural wealth, from private access to Renaissance masterpieces to immersive experiences with master craftsmen and culinary artisans.",
    longDescription: "Italy's cultural richness offers endless opportunities for authentic discovery. Beyond the iconic landmarks lie hidden treasures and traditions kept alive by passionate locals. Our connections provide access to historic private residences, artisan workshops, and culinary experiences that reveal the genuine character of each region through the eyes of those who know it best.",
    hero: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
    regions: [
      {
        name: "Tuscany",
        description: "Explore the cultural richness and pastoral beauty of Tuscany, from Renaissance masterpieces to historic estates nestled among rolling hills.",
        image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
        slug: "tuscany"
      },
      {
        name: "Amalfi Coast & Sicily",
        description: "Experience the captivating coastal splendor and ancient traditions of southern Italy, where dramatic landscapes meet centuries of cultural influences.",
        image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
        slug: "amalfi-coast-sicily"
      },
      {
        name: "Venice & The Lakes",
        description: "Discover the romantic allure of northern Italy, from the ethereal beauty of Venice to the serene elegance of the Italian lakes region.",
        image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
        slug: "venice-lakes"
      }
    ],
    experiences: [
      {
        icon: <Utensils className="h-5 w-5" />,
        category: "Gastronomy",
        title: "Culinary Traditions",
        description: "From private cooking lessons in historic villas to exclusive tastings at family-owned vineyards, discover Italy's celebrated culinary heritage.",
        link: "/experiences/italy-culinary-traditions"
      },
      {
        icon: <Landmark className="h-5 w-5" />,
        category: "Culture",
        title: "Artistic Heritage",
        description: "Gain privileged access to private collections, historic palazzos, and studios of master artisans continuing Italy's artistic legacy.",
        link: "/experiences/italy-artistic-heritage"
      },
      {
        icon: <Spa className="h-5 w-5" />,
        category: "Well-being",
        title: "Lakeside Retreats",
        description: "Restore mind and body at exclusive lakeside and thermal spas, combining Italy's ancient wellness traditions with modern approaches.",
        link: "/experiences/italy-lakeside-retreats"
      }
    ],
    testimonial: {
      quote: "What sets Altiva apart is their deep knowledge of Italy beyond the obvious. Our customized tour through Tuscany and Umbria revealed hidden treasures we never would have discovered on our own.",
      author: "James & Elizabeth Harrison",
      location: "Chicago, USA"
    }
  }
};

const DestinationDetail = () => {
  const { country } = useParams<{ country: string }>();
  
  // Default to Portugal if no country is specified or if the country doesn't exist in our data
  const destinationData = country && destinations[country as keyof typeof destinations] 
    ? destinations[country as keyof typeof destinations] 
    : destinations.portugal;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${destinationData.hero}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-altiva-purple-dark/70 to-transparent"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6 pt-24">
            <div className="max-w-2xl">
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-semibold leading-tight tracking-wide mb-4">
                {destinationData.name}
              </h1>
              <p className="font-montserrat text-lg md:text-xl text-white/90 mb-6 italic">
                {destinationData.tagline}
              </p>
              <p className="font-montserrat text-sm md:text-base text-white/90 mb-8 max-w-xl">
                {destinationData.description}
              </p>
              <Button
                className="bg-white hover:bg-white/90 text-altiva-purple-tertiary font-medium px-6 py-5"
                size="lg"
              >
                Explore {destinationData.name}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-6">
                Discover {destinationData.name}
              </h2>
              <div className="space-y-4 mb-8 font-montserrat text-altiva-gray-neutral">
                <p>{destinationData.longDescription}</p>
              </div>
              <Button 
                variant="outline" 
                className="border-altiva-purple-secondary text-altiva-purple-secondary hover:bg-altiva-purple-secondary hover:text-white"
              >
                Our Approach
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-md overflow-hidden">
                <img
                  src={destinationData.hero}
                  alt={destinationData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-left-12 max-w-xs bg-altiva-purple-soft p-6 rounded shadow-lg">
                <p className="font-playfair text-altiva-purple-dark italic text-lg">
                  "{destinationData.testimonial.quote}"
                </p>
                <p className="font-montserrat text-sm text-altiva-purple-secondary mt-2">
                  — {destinationData.testimonial.author}, {destinationData.testimonial.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Regions */}
      <section className="py-24 bg-altiva-gray-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
              Featured Regions
            </h2>
            <p className="font-montserrat text-base text-altiva-gray-neutral">
              Explore the diverse landscapes and cultural treasures of {destinationData.name}'s most captivating regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinationData.regions.map((region, index) => (
              <div key={index} className="bg-white rounded-md overflow-hidden shadow-sm">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium mb-3">
                    {region.name}
                  </h3>
                  <p className="font-montserrat text-sm text-altiva-gray-neutral mb-4">
                    {region.description}
                  </p>
                  <Link
                    to={`/destinations/${country}/${region.slug}`}
                    className="font-montserrat text-sm text-altiva-purple-secondary hover:text-altiva-purple-tertiary flex items-center"
                  >
                    Discover More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Experiences */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
              Curated Experiences
            </h2>
            <p className="font-montserrat text-base text-altiva-gray-neutral">
              Immerse yourself in the authentic culture of {destinationData.name} through our exclusive experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinationData.experiences.map((experience, index) => (
              <div key={index} className="bg-altiva-gray-soft rounded-md p-8">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-altiva-purple-soft text-altiva-purple-tertiary mb-6">
                  {experience.icon}
                </div>
                <div className="font-montserrat text-xs text-altiva-purple-tertiary uppercase tracking-wider mb-2">
                  {experience.category}
                </div>
                <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium mb-3">
                  {experience.title}
                </h3>
                <p className="font-montserrat text-sm text-altiva-gray-neutral mb-4">
                  {experience.description}
                </p>
                <Link
                  to={experience.link}
                  className="font-montserrat text-sm text-altiva-purple-secondary hover:text-altiva-purple-tertiary flex items-center"
                >
                  Explore {experience.category}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Accommodations */}
      <section className="py-24 bg-altiva-gray-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
              Extraordinary Accommodations
            </h2>
            <p className="font-montserrat text-base text-altiva-gray-neutral">
              A curated selection of {destinationData.name}'s most exceptional properties, each offering distinctive character and unparalleled service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-md overflow-hidden shadow-sm">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={destinationData.hero}
                    alt="Luxury accommodation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium">
                        {item === 1 ? "Historic Elegance" : "Contemporary Luxury"}
                      </h3>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 text-altiva-purple-secondary mr-1" />
                        <p className="font-montserrat text-xs text-altiva-gray-neutral">
                          {item === 1 ? destinationData.regions[0].name : destinationData.regions[1].name}
                        </p>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-altiva-purple-soft rounded text-xs font-montserrat text-altiva-purple-tertiary">
                      Exclusive
                    </div>
                  </div>
                  <p className="font-montserrat text-sm text-altiva-gray-neutral mb-4">
                    {item === 1 
                      ? "A meticulously restored historic property offering refined luxury in a setting of cultural significance and timeless beauty." 
                      : "A masterpiece of contemporary design that harmonizes with its natural surroundings, offering exceptional comfort and service."}
                  </p>
                  <Link
                    to={`/accommodations/${country}${item === 1 ? "/historic" : "/contemporary"}`}
                    className="font-montserrat text-sm text-altiva-purple-secondary hover:text-altiva-purple-tertiary flex items-center"
                  >
                    View Property
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to={`/accommodations/${country}`}>
              <Button 
                variant="outline" 
                className="border-altiva-purple-secondary text-altiva-purple-secondary hover:bg-altiva-purple-secondary hover:text-white"
              >
                View All Accommodations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-altiva-purple-soft rounded-md overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 md:p-12">
                <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
                  Begin Your {destinationData.name} Journey
                </h2>
                <p className="font-montserrat text-altiva-gray-dark mb-6">
                  Let our experts craft a bespoke {destinationData.name} experience tailored to your interests, preferences, and desires. Contact us to start planning your extraordinary journey.
                </p>
                <Link to="/contact">
                  <Button 
                    className="bg-altiva-purple-tertiary hover:bg-altiva-purple-dark text-white"
                  >
                    Contact Our Experts
                  </Button>
                </Link>
              </div>
              <div className="lg:col-span-2 min-h-[300px]">
                <img 
                  src={destinationData.hero} 
                  alt={`${destinationData.name} journey`} 
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

export default DestinationDetail;
