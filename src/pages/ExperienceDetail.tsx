
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const experiences = {
  "wine-estates-douro-valley": {
    title: "Wine Estates of the Douro Valley",
    tagline: "A Journey Through Portugal's Historic Wine Region",
    location: "Douro Valley, Portugal",
    duration: "5 days",
    groupSize: "2-8 guests",
    season: "March to November",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
    description: "Immerse yourself in the world's oldest demarcated wine region, where terraced vineyards create a breathtaking landscape recognized by UNESCO as a World Heritage site. This exclusive journey offers privileged access to historic quintas, private tastings with renowned vintners, and extraordinary dining experiences showcasing the region's rich culinary heritage.",
    highlights: [
      "Private tastings at family-owned quintas not open to the public",
      "Hands-on blending session with a master winemaker",
      "Exclusive boat journey along the Douro River",
      "Harvest participation (seasonal)",
      "Private dinner in a century-old wine cellar"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Introduction",
        description: "Begin your journey with a private transfer from Porto to your exclusive accommodation in the heart of the Douro Valley. Settle in with a welcome dinner featuring regional specialties paired with exceptional wines at your historic quinta."
      },
      {
        day: "Day 2",
        title: "Historic Vineyards",
        description: "Explore the region's oldest vineyards with a private guide, learning about the unique terroir and traditional viticulture methods that define Douro wines. Enjoy a private tasting with the vineyard owner, followed by lunch overlooking the terraced landscape."
      },
      {
        day: "Day 3",
        title: "Winemaking Immersion",
        description: "Experience the art of winemaking through a hands-on blending session with a master vintner, creating your own custom Port wine to take home. Afternoon at leisure to enjoy your quinta's amenities before a private dinner in the estate's historic cellars."
      },
      {
        day: "Day 4",
        title: "River & Landscape",
        description: "Discover the Douro from a different perspective on a private boat journey along the river, disembarking for an exclusive picnic at a secluded vineyard. Later, meet with a local olive oil producer for a tasting of this essential regional product."
      },
      {
        day: "Day 5",
        title: "Culinary Heritage",
        description: "Complete your Douro experience with a cooking workshop focusing on traditional Portuguese cuisine, led by a renowned local chef. Enjoy your farewell lunch featuring the dishes you've prepared, paired with exceptional wines before your departure."
      }
    ],
    accommodations: {
      name: "Historic Wine Estate",
      description: "A meticulously restored 18th-century wine estate offering luxurious accommodations while preserving its historic character. Surrounded by vineyards with panoramic views of the Douro Valley, the property features elegant rooms, a wine library, swimming pool, and exceptional dining showcasing regional cuisine."
    },
    testimonial: {
      quote: "Our journey through the Douro Valley with Altiva Voyages was nothing short of extraordinary. The access to private estates and intimate tastings with vintners who rarely open their doors to visitors created memories we'll cherish forever.",
      author: "James & Rebecca Thompson",
      location: "Boston, USA"
    }
  },
  "provence-wellness-retreat": {
    title: "Provence Wellness Retreat",
    tagline: "Rejuvenation Amidst Lavender Fields and Historic Estates",
    location: "Provence, France",
    duration: "7 days",
    groupSize: "2-6 guests",
    season: "April to October",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
    description: "Immerse yourself in the sensory pleasures of Provence while restoring mind and body through a carefully curated wellness journey. This bespoke retreat combines the region's natural beauty, aromatic bounty, and historic settings with contemporary well-being approaches, creating a deeply restorative experience.",
    highlights: [
      "Personalized wellness program tailored to your needs",
      "Exclusive access to historic estates and gardens",
      "Private yoga and meditation sessions in lavender fields",
      "Aromatherapy workshops with local herbalists",
      "Farm-to-table dining celebrating Provençal flavors"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Assessment",
        description: "Begin your wellness journey with a private transfer from Marseille or Nice to your exclusive accommodation in the Provençal countryside. Settle in with a wellness consultation and gentle yoga session before a light welcome dinner featuring organic local ingredients."
      },
      {
        day: "Day 2",
        title: "Nature Immersion",
        description: "Start your day with morning meditation followed by a guided walk through ancient olive groves. Afternoon aromatherapy workshop with a local herbalist, creating custom blends using Provence's famous botanicals."
      },
      {
        day: "Day 3",
        title: "Mindful Movement",
        description: "Private yoga session in a lavender field at sunrise, followed by a farm-to-table breakfast. Afternoon thermal spa experience drawing on Provence's ancient wellness traditions, with a tailored treatment program."
      },
      {
        day: "Day 4",
        title: "Culinary Wellness",
        description: "Learn the art of nutritious Mediterranean cooking with a renowned local chef, focusing on seasonal, organic ingredients. Afternoon wine appreciation workshop exploring the connection between terroir and well-being."
      },
      {
        day: "Day 5",
        title: "Cultural Rejuvenation",
        description: "Private access to historic gardens known for their healing properties, with a botany expert as your guide. Afternoon painting or journaling workshop in a scenic setting, embracing creativity as wellness."
      },
      {
        day: "Day 6",
        title: "Personal Practice",
        description: "Develop your ongoing wellness routine with your personal instructor, creating sustainable practices to continue at home. Afternoon at leisure to enjoy your estate's amenities or additional treatments."
      },
      {
        day: "Day 7",
        title: "Integration",
        description: "Final wellness consultation and gentle movement session to solidify your journey. Departure with a custom wellness kit featuring Provençal botanicals and personal practice guide."
      }
    ],
    accommodations: {
      name: "Historic Provençal Estate",
      description: "A beautifully restored 17th-century manor house set among lavender fields and olive groves. The estate combines historic charm with contemporary comfort, featuring elegant rooms, a wellness pavilion, thermal pools, organic gardens, and exceptional farm-to-table dining celebrating the bounty of Provence."
    },
    testimonial: {
      quote: "The Provence wellness retreat exceeded all expectations. The perfect balance of structured activities and personal space, combined with the extraordinary setting and attentive staff, created a truly transformative experience.",
      author: "Sarah & Michael Lawson",
      location: "Chicago, USA"
    }
  },
  "renaissance-treasures": {
    title: "Renaissance Treasures",
    tagline: "Private Access to Italy's Artistic Legacy",
    location: "Florence & Tuscany, Italy",
    duration: "8 days",
    groupSize: "2-8 guests",
    season: "Year-round",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
    description: "Journey into the heart of the Renaissance with exclusive access to Italy's extraordinary artistic heritage. This carefully curated experience provides privileged entrée to private collections, historic villas, and the workshops of master artisans, revealing the authentic spirit of Italian artistry past and present.",
    highlights: [
      "After-hours access to renowned museums and galleries",
      "Private viewings of collections not open to the public",
      "Hands-on workshops with master artisans",
      "Exclusive musical performances in historic settings",
      "Intimate discussions with art historians and restorers"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Florence",
        description: "Begin your cultural journey with a private transfer to your historic accommodation in Florence. Settle in with an orientation walk through the historic center with an art historian, followed by a welcome dinner in a private palazzo."
      },
      {
        day: "Day 2",
        title: "Renaissance Masterpieces",
        description: "Experience the Uffizi Gallery before opening hours with a curator, focusing on key Renaissance works. Afternoon private viewing of a noble family's art collection not open to the public, with the collector as your host."
      },
      {
        day: "Day 3",
        title: "Artistic Techniques",
        description: "Hands-on fresco workshop with a master restorer, learning traditional techniques used by Renaissance artists. Afternoon visit to a contemporary artist's studio, exploring how Renaissance traditions influence modern Italian art."
      },
      {
        day: "Day 4",
        title: "Architectural Wonders",
        description: "Special access to the Vasari Corridor with an architectural historian, followed by a private tour of normally closed areas of the Pitti Palace. Evening musical performance in a historic chapel with exceptional acoustics."
      },
      {
        day: "Day 5",
        title: "Journey to Tuscan Countryside",
        description: "Depart Florence for the Tuscan countryside, stopping at a historic villa with important frescoes rarely shown to the public. Afternoon arrival at your exclusive accommodations, a restored medieval estate."
      },
      {
        day: "Day 6",
        title: "Artistic Patronage",
        description: "Explore the relationship between art and landscape with visits to Renaissance gardens and the villas they surround. Private lunch with a noble family who continues the tradition of artistic patronage."
      },
      {
        day: "Day 7",
        title: "Artisanal Traditions",
        description: "Discover the artistic traditions of Tuscany with visits to master craftsmen's workshops, including a paper marbler, goldsmith, and leather artisan. Optional hands-on experience in the craft of your choice."
      },
      {
        day: "Day 8",
        title: "Legacy & Departure",
        description: "Final morning at leisure to reflect on your journey before a farewell lunch featuring Tuscan specialties. Departure with a custom art book documenting the collections and works you've experienced."
      }
    ],
    accommodations: {
      name: "Historic Florentine Palazzo & Tuscan Estate",
      description: "Begin your journey in a meticulously restored 15th-century palazzo in Florence's historic center, featuring original frescoes and period furnishings. Continue to a medieval estate in the Tuscan countryside, set among vineyards and olive groves with panoramic views of the rolling hills."
    },
    testimonial: {
      quote: "The level of access Altiva Voyages arranged was truly exceptional. From private viewings of collections to meaningful conversations with artists and historians, we experienced Italy's artistic heritage in a way that would have been impossible otherwise.",
      author: "Daniel & Elizabeth Carson",
      location: "New York, USA"
    }
  }
};

const ExperienceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Default to wine experience if slug doesn't exist in our data
  const experienceData = slug && experiences[slug as keyof typeof experiences] 
    ? experiences[slug as keyof typeof experiences] 
    : experiences["wine-estates-douro-valley"];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24">
        <div className="h-[70vh] relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${experienceData.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-altiva-purple-dark/70 to-transparent"></div>
          </div>

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-2xl">
                <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight tracking-wide mb-4">
                  {experienceData.title}
                </h1>
                <p className="font-montserrat text-lg md:text-xl text-white/90 mb-6 italic">
                  {experienceData.tagline}
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center text-white">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="font-montserrat text-sm">{experienceData.location}</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="font-montserrat text-sm">{experienceData.duration}</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Users className="h-5 w-5 mr-2" />
                    <span className="font-montserrat text-sm">{experienceData.groupSize}</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="font-montserrat text-sm">{experienceData.season}</span>
                  </div>
                </div>
                <Button
                  className="bg-white hover:bg-white/90 text-altiva-purple-tertiary font-medium px-6 py-5"
                  size="lg"
                >
                  Plan This Journey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-8 text-center">
              Experience Overview
            </h2>
            <p className="font-montserrat text-lg text-altiva-gray-neutral mb-10 text-center">
              {experienceData.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium mb-6">
                  Experience Highlights
                </h3>
                <ul className="space-y-4">
                  {experienceData.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-altiva-purple-soft text-altiva-purple-tertiary flex-shrink-0 mt-0.5 mr-4">
                        {index + 1}
                      </div>
                      <span className="font-montserrat text-altiva-gray-neutral">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="aspect-[4/3] rounded-md overflow-hidden">
                  <img
                    src={experienceData.image}
                    alt={experienceData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 md:py-24 bg-altiva-gray-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-8 text-center">
              Journey Itinerary
            </h2>
            <p className="font-montserrat text-lg text-altiva-gray-neutral mb-12 text-center">
              A day-by-day glimpse into your extraordinary experience
            </p>

            <div className="space-y-8">
              {experienceData.itinerary.map((day, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-md p-6 md:p-8 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 h-full w-1 bg-altiva-purple-soft"></div>
                  <div className="ml-4">
                    <div className="text-xs font-montserrat text-altiva-purple-tertiary uppercase tracking-wider mb-2">
                      {day.day}
                    </div>
                    <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium mb-3">
                      {day.title}
                    </h3>
                    <p className="font-montserrat text-altiva-gray-neutral">
                      {day.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-8 text-center">
              Exceptional Accommodations
            </h2>
            
            <div className="bg-altiva-gray-soft rounded-md overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-full min-h-[400px]">
                  <img 
                    src={experienceData.image} 
                    alt={experienceData.accommodations.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium mb-4">
                    {experienceData.accommodations.name}
                  </h3>
                  <p className="font-montserrat text-altiva-gray-neutral mb-6">
                    {experienceData.accommodations.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-altiva-purple-secondary text-altiva-purple-secondary hover:bg-altiva-purple-secondary hover:text-white"
                  >
                    View Accommodations
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-altiva-gray-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-altiva-purple-soft">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
              </svg>
            </div>
            <blockquote className="font-playfair text-xl md:text-2xl text-altiva-purple-dark italic mb-6">
              {experienceData.testimonial.quote}
            </blockquote>
            <div className="font-montserrat">
              <p className="text-altiva-purple-tertiary font-medium">
                {experienceData.testimonial.author}
              </p>
              <p className="text-sm text-altiva-gray-neutral">
                {experienceData.testimonial.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-altiva-purple-soft rounded-md overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 md:p-12">
                <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
                  Begin Your Journey
                </h2>
                <p className="font-montserrat text-altiva-gray-dark mb-6">
                  Ready to experience this extraordinary journey? Contact our experts to customize this experience to your preferences and secure your preferred dates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button 
                      className="bg-altiva-purple-tertiary hover:bg-altiva-purple-dark text-white"
                    >
                      Plan This Journey
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="border-altiva-purple-secondary text-altiva-purple-secondary hover:bg-altiva-purple-secondary hover:text-white"
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-2 min-h-[300px]">
                <img 
                  src={experienceData.image} 
                  alt={experienceData.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Experiences */}
      <section className="py-16 md:py-24 bg-altiva-gray-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
              Related Experiences
            </h2>
            <p className="font-montserrat text-base text-altiva-gray-neutral">
              Discover more extraordinary journeys that might inspire you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(experiences)
              .filter(([key]) => key !== slug)
              .map(([key, experience]) => (
                <Link key={key} to={`/experiences/${key}`} className="group">
                  <div className="bg-white rounded-md overflow-hidden shadow-sm h-full flex flex-col">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="font-montserrat text-xs text-altiva-purple-tertiary uppercase tracking-wider mb-2">
                        {experience.location}
                      </div>
                      <h3 className="font-playfair text-lg text-altiva-purple-dark font-medium mb-3 group-hover:text-altiva-purple-secondary transition-colors">
                        {experience.title}
                      </h3>
                      <p className="font-montserrat text-sm text-altiva-gray-neutral line-clamp-3 mb-4 flex-grow">
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
      </section>
    </div>
  );
};

export default ExperienceDetail;
